"use client";

import { useEffect, useRef, useCallback } from "react";
import { useScroll, useTransform, motion } from "framer-motion";

const TOTAL_FRAMES = 181;

export default function ValkyrieScrollCanvas() {
    const canvasRef = useRef<HTMLCanvasElement>(null);
    const imagesRef = useRef<HTMLImageElement[]>([]);
    const rafRef = useRef<number>();
    const lastFrameRef = useRef<number>(-1);
    const resizeTimeoutRef = useRef<NodeJS.Timeout>();

    const { scrollYProgress } = useScroll();
    const frameIndex = useTransform(scrollYProgress, [0, 1], [0, TOTAL_FRAMES - 1]);

    // Optimized render function with RAF and frame caching
    const renderFrame = useCallback((index: number) => {
        // Skip if same frame (frame caching)
        if (lastFrameRef.current === index) return;

        const canvas = canvasRef.current;
        const context = canvas?.getContext("2d", {
            alpha: false, // Performance boost
            desynchronized: true // Reduce latency
        });

        if (!canvas || !context) return;

        const img = imagesRef.current[index];
        if (!img || !img.complete) return;

        // Cancel any pending RAF
        if (rafRef.current) {
            cancelAnimationFrame(rafRef.current);
        }

        // Use RAF for smooth 60fps rendering
        rafRef.current = requestAnimationFrame(() => {
            lastFrameRef.current = index;

            // Get device pixel ratio for retina displays
            const dpr = window.devicePixelRatio || 1;
            const width = window.innerWidth;
            const height = window.innerHeight;

            // Set actual canvas size (scaled for retina displays)
            canvas.width = width * dpr;
            canvas.height = height * dpr;

            // Set display size (CSS pixels)
            canvas.style.width = `${width}px`;
            canvas.style.height = `${height}px`;

            // Scale context to match device pixel ratio
            context.scale(dpr, dpr);

            // Enable high-quality image rendering
            context.imageSmoothingEnabled = true;
            context.imageSmoothingQuality = 'high';

            // Calculate scaling to cover the canvas while maintaining aspect ratio (using CSS pixels)
            const scale = Math.max(
                width / img.width,
                height / img.height
            );

            const x = (width - img.width * scale) / 2;
            const y = (height - img.height * scale) / 2;

            // Use fillRect for better performance than clearRect
            context.fillStyle = "#0a0a0a";
            context.fillRect(0, 0, width, height);

            // Draw image with hardware acceleration and high quality
            context.drawImage(img, x, y, img.width * scale, img.height * scale);
        });
    }, []);

    // Preload images on mount
    useEffect(() => {
        const images: HTMLImageElement[] = [];
        let loadedCount = 0;

        for (let i = 1; i <= TOTAL_FRAMES; i++) {
            const img = new Image();
            const frameNumber = i.toString().padStart(3, "0");
            img.src = `/images/finalWebImages/ezgif-frame-${frameNumber}.jpg`;

            img.onload = () => {
                loadedCount++;
                // Render first frame immediately when loaded
                if (i === 1) {
                    renderFrame(0);
                }
            };

            images.push(img);
        }

        imagesRef.current = images;

        return () => {
            // Cleanup RAF on unmount
            if (rafRef.current) {
                cancelAnimationFrame(rafRef.current);
            }
        };
    }, [renderFrame]);

    // Subscribe to frame changes
    useEffect(() => {
        const unsubscribe = frameIndex.on("change", (latest) => {
            renderFrame(Math.round(latest));
        });

        return () => unsubscribe();
    }, [frameIndex, renderFrame]);

    // Debounced resize handler for better performance
    useEffect(() => {
        const handleResize = () => {
            // Clear existing timeout
            if (resizeTimeoutRef.current) {
                clearTimeout(resizeTimeoutRef.current);
            }

            // Debounce resize to avoid excessive renders
            resizeTimeoutRef.current = setTimeout(() => {
                const currentFrame = Math.round(frameIndex.get());
                lastFrameRef.current = -1; // Force re-render on resize
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
                transform: "translateZ(0)" // GPU acceleration
            }}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 1 }}
        />
    );
}
