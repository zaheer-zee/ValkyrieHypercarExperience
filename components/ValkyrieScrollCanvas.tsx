"use client";

import { useEffect, useRef } from "react";
import { useScroll, useTransform, motion } from "framer-motion";

const TOTAL_FRAMES = 181;

export default function ValkyrieScrollCanvas() {
    const canvasRef = useRef<HTMLCanvasElement>(null);
    const imagesRef = useRef<HTMLImageElement[]>([]);
    const { scrollYProgress } = useScroll();

    const frameIndex = useTransform(scrollYProgress, [0, 1], [0, TOTAL_FRAMES - 1]);

    useEffect(() => {
        // Preload all images
        const images: HTMLImageElement[] = [];

        for (let i = 1; i <= TOTAL_FRAMES; i++) {
            const img = new Image();
            const frameNumber = i.toString().padStart(3, "0");
            img.src = `/images/finalWebImages/ezgif-frame-${frameNumber}.jpg`;
            images.push(img);
        }

        imagesRef.current = images;

        // Draw first frame when loaded
        images[0].onload = () => {
            renderFrame(0);
        };
    }, []);

    useEffect(() => {
        const unsubscribe = frameIndex.on("change", (latest) => {
            renderFrame(Math.round(latest));
        });

        return () => unsubscribe();
    }, [frameIndex]);

    const renderFrame = (index: number) => {
        const canvas = canvasRef.current;
        const context = canvas?.getContext("2d");

        if (!canvas || !context) return;

        const img = imagesRef.current[index];
        if (!img || !img.complete) return;

        // Set canvas size to match window
        canvas.width = window.innerWidth;
        canvas.height = window.innerHeight;

        // Calculate scaling to cover the canvas while maintaining aspect ratio
        const scale = Math.max(
            canvas.width / img.width,
            canvas.height / img.height
        );

        const x = (canvas.width - img.width * scale) / 2;
        const y = (canvas.height - img.height * scale) / 2;

        context.clearRect(0, 0, canvas.width, canvas.height);
        context.drawImage(img, x, y, img.width * scale, img.height * scale);
    };

    useEffect(() => {
        const handleResize = () => {
            const currentFrame = Math.round(frameIndex.get());
            renderFrame(currentFrame);
        };

        window.addEventListener("resize", handleResize);
        return () => window.removeEventListener("resize", handleResize);
    }, [frameIndex]);

    return (
        <motion.canvas
            ref={canvasRef}
            className="fixed top-0 left-0 w-full h-full -z-10"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 1 }}
        />
    );
}
