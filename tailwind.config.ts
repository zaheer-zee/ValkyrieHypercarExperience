import type { Config } from "tailwindcss";

const config: Config = {
    content: [
        "./pages/**/*.{js,ts,jsx,tsx,mdx}",
        "./components/**/*.{js,ts,jsx,tsx,mdx}",
        "./app/**/*.{js,ts,jsx,tsx,mdx}",
    ],
    theme: {
        extend: {
            colors: {
                'pagani-black': 'var(--pagani-black)',
                'pagani-gold': 'var(--pagani-gold)',
                'bright-gold': 'var(--bright-gold)',
                'carbon-gray': 'var(--carbon-gray)',
            },
            fontFamily: {
                orbitron: ['var(--font-orbitron)', 'sans-serif'],
                rajdhani: ['var(--font-rajdhani)', 'sans-serif'],
            },
        },
    },
    plugins: [],
};
export default config;
