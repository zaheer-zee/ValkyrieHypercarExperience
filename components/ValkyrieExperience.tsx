"use client";

import { useScroll, useTransform, motion } from "framer-motion";
import { valkyrieData } from "@/data/carData";

export default function ValkyrieExperience() {
    const { scrollYProgress } = useScroll();

    // Define 4 scroll phases with NO overlap
    const overviewOpacity = useTransform(scrollYProgress, [0, 0.20, 0.25], [1, 1, 0]);
    const performanceOpacity = useTransform(scrollYProgress, [0.20, 0.25, 0.45, 0.50], [0, 1, 1, 0]);
    const designOpacity = useTransform(scrollYProgress, [0.45, 0.50, 0.70, 0.75], [0, 1, 1, 0]);
    const engineeringOpacity = useTransform(scrollYProgress, [0.70, 0.75, 1], [0, 1, 1]);

    const overviewY = useTransform(scrollYProgress, [0, 0.25], [0, -100]);
    const performanceY = useTransform(scrollYProgress, [0.20, 0.25, 0.50], [100, 0, -100]);
    const designY = useTransform(scrollYProgress, [0.45, 0.50, 0.75], [100, 0, -100]);
    const engineeringY = useTransform(scrollYProgress, [0.70, 0.75], [100, 0]);

    return (
        <div className="fixed inset-0 flex items-center justify-center pointer-events-none z-10">
            <div className="max-w-6xl mx-auto px-8 w-full">

                {/* OVERVIEW SECTION */}
                <motion.div
                    style={{ opacity: overviewOpacity, y: overviewY }}
                    className="absolute inset-0 flex items-center justify-center"
                >
                    <div className="text-center">
                        <motion.div
                            initial={{ opacity: 0, y: 50 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ duration: 1, delay: 0.5 }}
                            className="mb-8"
                        >
                            <h1 className="font-orbitron text-6xl md:text-8xl lg:text-9xl font-black tracking-wider mb-6 bg-gradient-to-r from-bright-gold via-pagani-gold to-bright-gold bg-clip-text text-transparent">
                                {valkyrieData.overview.title}
                            </h1>
                            <p className="font-rajdhani text-2xl md:text-3xl lg:text-4xl font-light tracking-widest text-white/90 mb-4">
                                {valkyrieData.overview.subtitle}
                            </p>
                            <p className="font-rajdhani text-lg md:text-xl text-white/70 max-w-3xl mx-auto">
                                {valkyrieData.overview.description}
                            </p>
                        </motion.div>

                        {/* Stats Cards */}
                        <motion.div
                            initial={{ opacity: 0, y: 30 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ duration: 1, delay: 1.2 }}
                            className="grid grid-cols-3 gap-6 max-w-3xl mx-auto mt-12"
                        >
                            {valkyrieData.overview.stats.map((stat, index) => (
                                <motion.div
                                    key={stat.label}
                                    initial={{ opacity: 0, scale: 0.8 }}
                                    animate={{ opacity: 1, scale: 1 }}
                                    transition={{ duration: 0.5, delay: 1.4 + index * 0.1 }}
                                    className="backdrop-blur-md bg-white/5 border border-bright-gold/30 rounded-2xl p-6 hover:bg-white/10 hover:border-bright-gold/50 transition-all duration-300"
                                >
                                    <div className="font-orbitron text-4xl md:text-5xl font-bold text-bright-gold mb-2">
                                        {stat.value}
                                        <span className="text-2xl ml-1">{stat.unit}</span>
                                    </div>
                                    <div className="font-rajdhani text-sm md:text-base text-white/70 tracking-wider">
                                        {stat.label}
                                    </div>
                                </motion.div>
                            ))}
                        </motion.div>

                        {/* Scroll Indicator */}
                        <motion.div
                            initial={{ opacity: 0 }}
                            animate={{ opacity: 1 }}
                            transition={{ duration: 1, delay: 2 }}
                            className="mt-16"
                        >
                            <motion.div
                                animate={{ y: [0, 10, 0] }}
                                transition={{ duration: 1.5, repeat: Infinity }}
                                className="text-white/50 font-rajdhani text-sm tracking-widest"
                            >
                                SCROLL TO EXPLORE
                                <div className="w-px h-12 bg-gradient-to-b from-bright-gold to-transparent mx-auto mt-4" />
                            </motion.div>
                        </motion.div>
                    </div>
                </motion.div>

                {/* PERFORMANCE SECTION */}
                <motion.div
                    style={{ opacity: performanceOpacity, y: performanceY }}
                    className="absolute inset-0 flex items-center justify-center"
                >
                    <div className="text-center max-w-5xl">
                        <div className="backdrop-blur-md bg-carbon-gray/40 border border-bright-gold/20 rounded-3xl p-12 shadow-2xl">
                            <h2 className="font-orbitron text-5xl md:text-7xl lg:text-8xl font-bold tracking-wider mb-4 text-bright-gold">
                                {valkyrieData.performance.title}
                            </h2>
                            <p className="font-rajdhani text-2xl md:text-3xl font-light tracking-widest text-white/90 mb-4">
                                {valkyrieData.performance.subtitle}
                            </p>
                            <p className="font-rajdhani text-lg md:text-xl text-white/70 max-w-2xl mx-auto mb-8">
                                {valkyrieData.performance.description}
                            </p>

                            {/* Performance Specs Grid */}
                            <div className="grid grid-cols-2 md:grid-cols-4 gap-6 mt-8">
                                {valkyrieData.performance.specs.map((spec, index) => (
                                    <div
                                        key={spec.label}
                                        className="backdrop-blur-sm bg-white/5 border border-white/10 rounded-xl p-4 hover:border-bright-gold/50 transition-all duration-300"
                                    >
                                        <div className="font-orbitron text-2xl md:text-3xl font-bold text-bright-gold mb-2">
                                            {spec.value}
                                        </div>
                                        <div className="font-rajdhani text-sm text-white/70 tracking-wide">
                                            {spec.label}
                                        </div>
                                    </div>
                                ))}
                            </div>
                        </div>
                    </div>
                </motion.div>

                {/* DESIGN SECTION */}
                <motion.div
                    style={{ opacity: designOpacity, y: designY }}
                    className="absolute inset-0 flex items-center justify-center"
                >
                    <div className="text-center max-w-5xl">
                        <div className="backdrop-blur-md bg-carbon-gray/40 border border-bright-gold/20 rounded-3xl p-12 shadow-2xl">
                            <h2 className="font-orbitron text-5xl md:text-7xl lg:text-8xl font-bold tracking-wider mb-6 text-bright-gold">
                                {valkyrieData.design.title}
                            </h2>

                            {/* Quote */}
                            <div className="mb-8 max-w-3xl mx-auto">
                                <p className="font-rajdhani text-xl md:text-2xl italic text-white/90 mb-2">
                                    &ldquo;{valkyrieData.design.quote}&rdquo;
                                </p>
                                <p className="font-rajdhani text-sm md:text-base text-white/60 tracking-wider">
                                    — {valkyrieData.design.author}
                                </p>
                            </div>

                            <p className="font-rajdhani text-lg md:text-xl text-white/70 max-w-2xl mx-auto mb-8">
                                {valkyrieData.design.description}
                            </p>

                            {/* Design Features Grid */}
                            <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mt-8">
                                {valkyrieData.design.features.map((feature, index) => (
                                    <div
                                        key={feature.name}
                                        className="backdrop-blur-sm bg-white/5 border border-white/10 rounded-xl p-4 hover:border-bright-gold/50 hover:bg-white/10 transition-all duration-300"
                                    >
                                        <div className="font-orbitron text-sm md:text-base font-semibold text-bright-gold mb-1">
                                            {feature.name}
                                        </div>
                                        <div className="font-rajdhani text-xs md:text-sm text-white/60">
                                            {feature.desc}
                                        </div>
                                    </div>
                                ))}
                            </div>
                        </div>
                    </div>
                </motion.div>

                {/* ENGINEERING SECTION */}
                <motion.div
                    style={{ opacity: engineeringOpacity, y: engineeringY }}
                    className="absolute inset-0 flex items-center justify-center"
                >
                    <div className="text-center max-w-5xl">
                        <div className="backdrop-blur-md bg-carbon-gray/40 border border-bright-gold/20 rounded-3xl p-12 shadow-2xl">
                            <h2 className="font-orbitron text-5xl md:text-7xl lg:text-8xl font-bold tracking-wider mb-4 text-bright-gold">
                                {valkyrieData.engineering.title}
                            </h2>
                            <p className="font-rajdhani text-2xl md:text-3xl font-light tracking-widest text-white/90 mb-4">
                                {valkyrieData.engineering.subtitle}
                            </p>
                            <p className="font-rajdhani text-lg md:text-xl text-white/70 max-w-2xl mx-auto mb-8">
                                {valkyrieData.engineering.description}
                            </p>

                            {/* Engineering Innovations Grid */}
                            <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mt-8">
                                {valkyrieData.engineering.innovations.map((innovation, index) => (
                                    <div
                                        key={innovation.name}
                                        className="backdrop-blur-sm bg-white/5 border border-white/10 rounded-xl p-4 hover:border-bright-gold/50 hover:bg-white/10 transition-all duration-300"
                                    >
                                        <div className="font-orbitron text-sm md:text-base font-semibold text-bright-gold mb-1">
                                            {innovation.name}
                                        </div>
                                        <div className="font-rajdhani text-xs md:text-sm text-white/60">
                                            {innovation.desc}
                                        </div>
                                    </div>
                                ))}
                            </div>

                            {/* Call to Action */}
                            <div className="mt-12">
                                <a
                                    href="https://www.astonmartin.com/en/models/valkyrie"
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="inline-block pointer-events-auto bg-gradient-to-r from-pagani-gold to-bright-gold text-pagani-black px-10 py-4 rounded-full font-rajdhani font-bold text-lg tracking-wider hover:shadow-2xl hover:shadow-bright-gold/50 transition-all duration-300 hover:scale-105"
                                >
                                    EXPLORE VALKYRIE
                                </a>
                            </div>
                        </div>
                    </div>
                </motion.div>

            </div>
        </div>
    );
}
