"use client";

import { useEffect, useRef, useCallback, useState } from "react";
import { useScroll, useTransform, motion } from "framer-motion";

const TOTAL_FRAMES = 725;
const PRELOAD_RANGE = 15; // Preload 15 frames ahead and behind current frame

export default function ValkyrieScrollCanvas() {
    const canvasRef = useRef<HTMLCanvasElement>(null);
    const imagesRef = useRef<(HTMLImageElement | null)[]>(new Array(TOTAL_FRAMES).fill(null));
    const loadedFramesRef = useRef<Set<number>>(new Set());
    const loadingFramesRef = useRef<Set<number>>(new Set());
    const rafRef = useRef<number>();
    const lastFrameRef = useRef<number>(-1);
    const resizeTimeoutRef = useRef<NodeJS.Timeout>();
    const [initialLoadComplete, setInitialLoadComplete] = useState(false);

    const { scrollYProgress } = useScroll();
    const frameIndex = useTransform(scrollYProgress, [0, 1], [0, TOTAL_FRAMES - 1]);

    // Load a specific frame
    const loadFrame = useCallback((frameNum: number, priority: 'high' | 'low' = 'low') => {
        if (frameNum < 0 || frameNum >= TOTAL_FRAMES) return;
        if (loadedFramesRef.current.has(frameNum) || loadingFramesRef.current.has(frameNum)) return;

        loadingFramesRef.current.add(frameNum);

        const img = new Image();
        const frameNumber = (frameNum + 1).toString().padStart(6, "0");
        img.src = `/images/hq-valkyrie/frame_${frameNumber}.jpg`;

        img.onload = () => {
            imagesRef.current[frameNum] = img;
            loadedFramesRef.current.add(frameNum);
            loadingFramesRef.current.delete(frameNum);

            // Render immediately if this is the current frame
            if (Math.round(frameIndex.get()) === frameNum) {
                renderFrame(frameNum);
            }
        };

        img.onerror = () => {
            loadingFramesRef.current.delete(frameNum);
        };
    }, []);

    // Preload frames around the current position
    const preloadNearbyFrames = useCallback((currentFrame: number) => {
        // Load current frame with high priority
        loadFrame(currentFrame, 'high');

        // Preload frames in both directions
        for (let i = 1; i <= PRELOAD_RANGE; i++) {
            loadFrame(currentFrame + i, 'low');
            loadFrame(currentFrame - i, 'low');
        }
    }, [loadFrame]);

    // Optimized render function with RAF and frame caching
    const renderFrame = useCallback((index: number) => {
        // Skip if same frame (frame caching)
        if (lastFrameRef.current === index) return;

        const canvas = canvasRef.current;
        const context = canvas?.getContext("2d", {
            alpha: false,
            desynchronized: true
        });

        if (!canvas || !context) return;

        const img = imagesRef.current[index];
        if (!img || !img.complete) {
            // If image not loaded, try to load it and nearby frames
            preloadNearbyFrames(index);
            return;
        }

        // Cancel any pending RAF
        if (rafRef.current) {
            cancelAnimationFrame(rafRef.current);
        }

        // Use RAF for smooth 60fps rendering
        rafRef.current = requestAnimationFrame(() => {
            lastFrameRef.current = index;

            const dpr = window.devicePixelRatio || 1;
            const width = window.innerWidth;
            const height = window.innerHeight;

            canvas.width = width * dpr;
            canvas.height = height * dpr;

            canvas.style.width = `${width}px`;
            canvas.style.height = `${height}px`;

            context.scale(dpr, dpr);

            context.imageSmoothingEnabled = true;
            context.imageSmoothingQuality = 'high';

            const scale = Math.max(
                width / img.width,
                height / img.height
            );

            const x = (width - img.width * scale) / 2;
            const y = (height - img.height * scale) / 2;

            context.fillStyle = "#0a0a0a";
            context.fillRect(0, 0, width, height);

            context.drawImage(img, x, y, img.width * scale, img.height * scale);
        });
    }, [preloadNearbyFrames]);

    // Progressive loading strategy on mount
    useEffect(() => {
        // Phase 1: Load critical frames first (every 10th frame for quick preview)
        const criticalFrames: number[] = [];
        for (let i = 0; i < TOTAL_FRAMES; i += 10) {
            criticalFrames.push(i);
        }

        // Load first frame immediately
        loadFrame(0, 'high');

        // Load critical frames progressively
        let criticalIndex = 0;
        const criticalInterval = setInterval(() => {
            if (criticalIndex < criticalFrames.length) {
                loadFrame(criticalFrames[criticalIndex], 'high');
                criticalIndex++;
            } else {
                clearInterval(criticalInterval);
                setInitialLoadComplete(true);
            }
        }, 50);

        return () => {
            clearInterval(criticalInterval);
            if (rafRef.current) {
                cancelAnimationFrame(rafRef.current);
            }
        };
    }, [loadFrame]);

    // Subscribe to frame changes and preload nearby frames
    useEffect(() => {
        const unsubscribe = frameIndex.on("change", (latest) => {
            const currentFrame = Math.round(latest);
            renderFrame(currentFrame);

            // Continuously preload nearby frames as user scrolls
            if (initialLoadComplete) {
                preloadNearbyFrames(currentFrame);
            }
        });

        return () => unsubscribe();
    }, [frameIndex, renderFrame, preloadNearbyFrames, initialLoadComplete]);

    // Debounced resize handler
    useEffect(() => {
        const handleResize = () => {
            if (resizeTimeoutRef.current) {
                clearTimeout(resizeTimeoutRef.current);
            }

            resizeTimeoutRef.current = setTimeout(() => {
                const currentFrame = Math.round(frameIndex.get());
                lastFrameRef.current = -1;
                renderFrame(currentFrame);
            }, 100);
        };

        window.addEventListener("resize", handleResize);

        return () => {
            window.removeEventListener("resize", handleResize);
            if (resizeTimeoutRef.current) {
                clearTimeout(resizeTimeoutRef.current);
            }
        };
    }, [frameIndex, renderFrame]);

    return (
        <motion.canvas
            ref={canvasRef}
            className="fixed top-0 left-0 w-full h-full -z-10"
            style={{
                willChange: "transform",
                transform: "translateZ(0)"
            }}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 1 }}
        />
    );
}
