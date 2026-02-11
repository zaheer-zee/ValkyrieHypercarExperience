"use client";

import { motion } from "framer-motion";

export default function Navbar() {
    return (
        <motion.nav
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
            className="fixed top-0 left-0 right-0 z-50 px-8 py-6"
        >
            <div className="max-w-7xl mx-auto">
                <div className="backdrop-blur-md bg-white/5 border border-white/10 rounded-2xl px-8 py-4 shadow-2xl">
                    <div className="flex items-center justify-between">
                        <motion.div
                            className="font-orbitron text-2xl font-bold tracking-wider"
                            whileHover={{ scale: 1.05 }}
                            transition={{ type: "spring", stiffness: 400 }}
                        >
                            <span className="text-bright-gold">ASTON MARTIN</span>
                        </motion.div>

                        <div className="hidden md:flex items-center gap-8 font-rajdhani text-sm font-medium tracking-wide">
                            <motion.a
                                href="#hero"
                                className="text-white/80 hover:text-bright-gold transition-colors"
                                whileHover={{ scale: 1.1 }}
                            >
                                HERO
                            </motion.a>
                            <motion.a
                                href="#design"
                                className="text-white/80 hover:text-bright-gold transition-colors"
                                whileHover={{ scale: 1.1 }}
                            >
                                DESIGN
                            </motion.a>
                            <motion.a
                                href="#engine"
                                className="text-white/80 hover:text-bright-gold transition-colors"
                                whileHover={{ scale: 1.1 }}
                            >
                                ENGINE
                            </motion.a>
                            <motion.button
                                className="bg-gradient-to-r from-pagani-gold to-bright-gold text-pagani-black px-6 py-2 rounded-full font-semibold"
                                whileHover={{ scale: 1.05, boxShadow: "0 0 20px rgba(212, 175, 55, 0.5)" }}
                                whileTap={{ scale: 0.95 }}
                            >
                                CONFIGURE
                            </motion.button>
                        </div>
                    </div>
                </div>
            </div>
        </motion.nav>
    );
}
