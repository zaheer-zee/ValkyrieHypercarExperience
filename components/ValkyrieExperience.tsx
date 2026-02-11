"use client";

import { useScroll, useTransform, motion } from "framer-motion";
import { valkyrieData } from "@/data/carData";

export default function ValkyrieExperience() {
    const { scrollYProgress } = useScroll();

    // Define scroll phases
    const heroOpacity = useTransform(scrollYProgress, [0, 0.25, 0.33], [1, 1, 0]);
    const designOpacity = useTransform(scrollYProgress, [0.25, 0.33, 0.58, 0.66], [0, 1, 1, 0]);
    const engineOpacity = useTransform(scrollYProgress, [0.58, 0.66, 1], [0, 1, 1]);

    const heroY = useTransform(scrollYProgress, [0, 0.33], [0, -100]);
    const designY = useTransform(scrollYProgress, [0.25, 0.33, 0.66], [100, 0, -100]);
    const engineY = useTransform(scrollYProgress, [0.58, 0.66], [100, 0]);

    return (
        <div className="fixed inset-0 flex items-center justify-center pointer-events-none z-10">
            <div className="max-w-4xl mx-auto px-8">
                {/* Hero Phase */}
                <motion.div
                    style={{ opacity: heroOpacity, y: heroY }}
                    className="absolute inset-0 flex items-center justify-center"
                >
                    <div className="text-center">
                        <motion.div
                            initial={{ opacity: 0, y: 50 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ duration: 1, delay: 0.5 }}
                            className="mb-4"
                        >
                            <h1 className="font-orbitron text-6xl md:text-8xl font-black tracking-wider mb-4 bg-gradient-to-r from-bright-gold via-pagani-gold to-bright-gold bg-clip-text text-transparent">
                                {valkyrieData.hero.title}
                            </h1>
                            <p className="font-rajdhani text-2xl md:text-3xl font-light tracking-widest text-white/90">
                                {valkyrieData.hero.subtitle}
                            </p>
                        </motion.div>
                        <motion.p
                            initial={{ opacity: 0 }}
                            animate={{ opacity: 1 }}
                            transition={{ duration: 1, delay: 1 }}
                            className="font-rajdhani text-lg md:text-xl text-white/70 max-w-2xl mx-auto"
                        >
                            {valkyrieData.hero.description}
                        </motion.p>
                    </div>
                </motion.div>

                {/* Design Phase */}
                <motion.div
                    style={{ opacity: designOpacity, y: designY }}
                    className="absolute inset-0 flex items-center justify-center"
                >
                    <div className="text-center">
                        <div className="backdrop-blur-sm bg-carbon-gray/30 border border-bright-gold/20 rounded-3xl p-12 shadow-2xl">
                            <h2 className="font-orbitron text-5xl md:text-7xl font-bold tracking-wider mb-4 text-bright-gold">
                                {valkyrieData.design.title}
                            </h2>
                            <p className="font-rajdhani text-xl md:text-2xl font-light tracking-widest text-white/90 mb-4">
                                {valkyrieData.design.subtitle}
                            </p>
                            <p className="font-rajdhani text-lg text-white/70 max-w-xl mx-auto">
                                {valkyrieData.design.description}
                            </p>
                        </div>
                    </div>
                </motion.div>

                {/* Engine Phase */}
                <motion.div
                    style={{ opacity: engineOpacity, y: engineY }}
                    className="absolute inset-0 flex items-center justify-center"
                >
                    <div className="text-center">
                        <div className="backdrop-blur-sm bg-carbon-gray/30 border border-bright-gold/20 rounded-3xl p-12 shadow-2xl">
                            <h2 className="font-orbitron text-5xl md:text-7xl font-bold tracking-wider mb-4 text-bright-gold">
                                {valkyrieData.engine.title}
                            </h2>
                            <p className="font-rajdhani text-xl md:text-2xl font-light tracking-widest text-white/90 mb-4">
                                {valkyrieData.engine.subtitle}
                            </p>
                            <p className="font-rajdhani text-lg text-white/70 max-w-xl mx-auto">
                                {valkyrieData.engine.description}
                            </p>
                        </div>
                    </div>
                </motion.div>
            </div>
        </div>
    );
}
