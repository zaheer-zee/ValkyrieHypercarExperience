# 🏎️ Valkyrie Hypercar Experience

> An immersive scrollytelling showcase for the Aston Martin Valkyrie - where Formula 1™ technology meets road-legal performance.

![Next.js](https://img.shields.io/badge/Next.js-14-black?style=for-the-badge&logo=next.js)
![TypeScript](https://img.shields.io/badge/TypeScript-5-blue?style=for-the-badge&logo=typescript)
![Framer Motion](https://img.shields.io/badge/Framer_Motion-11-ff69b4?style=for-the-badge&logo=framer)
![Tailwind CSS](https://img.shields.io/badge/Tailwind_CSS-3.4-38bdf8?style=for-the-badge&logo=tailwind-css)

## ✨ Features

- **🎬 Scroll-Controlled Animation** - 181 high-quality frames creating a cinematic 360° car reveal
- **🎨 Premium Design** - Glassmorphic UI with luxury automotive branding
- **⚡ Optimized Performance** - Canvas-based rendering for buttery-smooth 60fps scrolling
- **📱 Fully Responsive** - Adapts seamlessly to any screen size
- **🎭 Three Story Phases** - Hero introduction, aerodynamic design, and V12 engine showcase
- **🔤 Custom Typography** - Orbitron and Rajdhani fonts for that hypercar aesthetic

## 🚀 Quick Start

```bash
# Install dependencies
npm install

# Run development server
npm run dev

# Build for production
npm run build
npm start
```

Open [http://localhost:3000](http://localhost:3000) and start scrolling!

## 🏗️ Tech Stack

- **Framework:** Next.js 14 (App Router)
- **Language:** TypeScript
- **Styling:** Tailwind CSS
- **Animation:** Framer Motion
- **Fonts:** Google Fonts (Orbitron, Rajdhani)

## 📂 Project Structure

```
├── app/
│   ├── layout.tsx          # Root layout with font configuration
│   ├── page.tsx            # Main page with scroll container
│   └── globals.css         # Global styles and CSS variables
├── components/
│   ├── Navbar.tsx          # Glassmorphic navigation bar
│   ├── ValkyrieScrollCanvas.tsx  # Canvas-based image sequence
│   └── ValkyrieExperience.tsx    # HUD overlay with scroll phases
├── data/
│   └── carData.ts          # Content for each scroll phase
└── public/images/finalWebImages/
    └── ezgif-frame-*.jpg   # 181 image sequence frames
```

## 🎨 Design System

### Color Palette
- **Pagani Black** - `#0a0a0a` - Deep background
- **Pagani Gold** - `#d4af37` - Signature accent
- **Bright Gold** - `#ffd700` - Highlights
- **Carbon Gray** - `#1a1a1a` - Containers

### Typography
- **Orbitron** - Futuristic headings (400-900)
- **Rajdhani** - Clean body text (300-700)

## 🎯 Scroll Phases

1. **Hero (0-33%)** - Front view with dramatic title reveal
2. **Design (33-66%)** - Side/rear angles highlighting aerodynamics
3. **Engine (66-100%)** - V12 powerplant showcase

## 📊 Performance

- **Bundle Size:** 129 kB (First Load JS)
- **Image Preloading:** All 181 frames loaded on mount
- **Canvas Rendering:** Hardware-accelerated
- **Static Generation:** Pre-rendered at build time

## 🛠️ Development

```bash
# Type checking
npm run build

# Linting
npm run lint
```

## 📝 License

This is a showcase project. All Aston Martin branding and imagery are property of Aston Martin Lagonda Limited.

---

<div align="center">
  <strong>Built with ❤️ for automotive excellence</strong>
</div>
