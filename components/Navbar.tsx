"use client";

import { motion } from "framer-motion";
import { useEffect, useState } from "react";

const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
        element.scrollIntoView({ behavior: "smooth", block: "start" });
    }
};

export default function Navbar() {
    const [activeSection, setActiveSection] = useState("overview");

    useEffect(() => {
        const handleScroll = () => {
            const scrollPosition = window.scrollY;
            const windowHeight = window.innerHeight;
            const documentHeight = document.documentElement.scrollHeight;
            const scrollPercentage = scrollPosition / (documentHeight - windowHeight);

            // Determine active section based on scroll position
            if (scrollPercentage < 0.25) {
                setActiveSection("overview");
            } else if (scrollPercentage < 0.50) {
                setActiveSection("performance");
            } else if (scrollPercentage < 0.75) {
                setActiveSection("design");
            } else {
                setActiveSection("engineering");
            }
        };

        window.addEventListener("scroll", handleScroll);
        return () => window.removeEventListener("scroll", handleScroll);
    }, []);

    const navItems = [
        { id: "overview", label: "OVERVIEW" },
        { id: "performance", label: "PERFORMANCE" },
        { id: "design", label: "DESIGN" },
        { id: "engineering", label: "ENGINEERING" }
    ];

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
                            className="font-orbitron text-2xl font-bold tracking-wider cursor-pointer"
                            whileHover={{ scale: 1.05 }}
                            transition={{ type: "spring", stiffness: 400 }}
                            onClick={() => scrollToSection("overview")}
                        >
                            <span className="text-bright-gold">ASTON MARTIN</span>
                        </motion.div>

                        <div className="hidden md:flex items-center gap-8 font-rajdhani text-sm font-medium tracking-wide">
                            {navItems.map((item) => (
                                <motion.button
                                    key={item.id}
                                    onClick={() => scrollToSection(item.id)}
                                    className={`transition-colors ${activeSection === item.id
                                            ? "text-bright-gold"
                                            : "text-white/80 hover:text-bright-gold"
                                        }`}
                                    whileHover={{ scale: 1.1 }}
                                >
                                    {item.label}
                                    {activeSection === item.id && (
                                        <motion.div
                                            layoutId="activeIndicator"
                                            className="h-0.5 bg-bright-gold mt-1"
                                            initial={false}
                                            transition={{ type: "spring", stiffness: 380, damping: 30 }}
                                        />
                                    )}
                                </motion.button>
                            ))}
                            <motion.a
                                href="https://www.astonmartin.com/en/models/valkyrie"
                                target="_blank"
                                rel="noopener noreferrer"
                                className="bg-gradient-to-r from-pagani-gold to-bright-gold text-pagani-black px-6 py-2 rounded-full font-semibold"
                                whileHover={{ scale: 1.05, boxShadow: "0 0 20px rgba(212, 175, 55, 0.5)" }}
                                whileTap={{ scale: 0.95 }}
                            >
                                CONFIGURE
                            </motion.a>
                        </div>
                    </div>
                </div>
            </div>
        </motion.nav>
    );
}
