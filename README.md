# 🏎️ Aston Martin Valkyrie - Premium Scrollytelling Experience

> An immersive, production-quality scrollytelling showcase for the Aston Martin Valkyrie - where Formula 1™ technology meets road-legal performance.

![Next.js](https://img.shields.io/badge/Next.js-14-black?style=for-the-badge&logo=next.js)
![TypeScript](https://img.shields.io/badge/TypeScript-5-blue?style=for-the-badge&logo=typescript)
![Framer Motion](https://img.shields.io/badge/Framer_Motion-11-ff69b4?style=for-the-badge&logo=framer)
![Tailwind CSS](https://img.shields.io/badge/Tailwind_CSS-3.4-38bdf8?style=for-the-badge&logo=tailwind-css)

## ✨ Features

- **🎬 Scroll-Controlled Animation** - 181 high-resolution frames creating a cinematic 360° car reveal
- **⚡ Buttery-Smooth Performance** - 60fps rendering with RAF optimization, frame caching, and GPU acceleration
- **🎨 Premium Design** - Glassmorphic UI with luxury automotive branding matching official Aston Martin aesthetic
- **📱 Fully Responsive** - Adapts seamlessly to any screen size with high-DPI display support
- **🎯 Smart Navigation** - Smooth scroll-to-section with active section highlighting
- **📊 Rich Content** - Four detailed sections: Overview, Performance, Design, and Engineering
- **🔤 Custom Typography** - Orbitron and Rajdhani fonts for that hypercar aesthetic
- **💎 Premium Visual Effects** - Animated statistics cards, staggered transitions, and micro-interactions

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
- **Styling:** Tailwind CSS 3.4
- **Animation:** Framer Motion 11
- **Fonts:** Google Fonts (Orbitron, Rajdhani)
- **Deployment:** Netlify-ready with optimized configuration

## 📂 Project Structure

```
├── app/
│   ├── layout.tsx          # Root layout with font configuration
│   ├── page.tsx            # Main page with section markers
│   └── globals.css         # Global styles, GPU acceleration, custom scrollbar
├── components/
│   ├── Navbar.tsx          # Enhanced navigation with smooth scroll & active highlighting
│   ├── ValkyrieScrollCanvas.tsx  # High-res canvas rendering with devicePixelRatio
│   └── ValkyrieExperience.tsx    # Four premium content sections with animations
├── data/
│   └── carData.ts          # Authentic Valkyrie specifications and features
├── public/images/finalWebImages/
│   └── ezgif-frame-*.jpg   # 181 high-quality image sequence frames
├── netlify.toml            # Netlify deployment configuration
└── next.config.js          # Next.js configuration for standalone deployment
```

## 🎨 Design System

### Color Palette
- **Pagani Black** - `#0a0a0a` - Deep background
- **Pagani Gold** - `#d4af37` - Signature accent
- **Bright Gold** - `#ffd700` - Highlights and active states
- **Carbon Gray** - `#1a1a1a` - Containers

### Typography
- **Orbitron** - Futuristic headings (400-900)
- **Rajdhani** - Clean body text (300-700)

## 🎯 Content Sections

1. **Overview (0-25%)** - Hero view with animated statistics cards (Power, Weight, G-Force)
2. **Performance (25-50%)** - Engineering Excellence with Cosworth V12 Hybrid specifications
3. **Design (50-75%)** - Aerodynamic Artistry with design features and quote from Marek Reichman
4. **Engineering (75-100%)** - Formula 1™ Technology with Adrian Newey collaboration details

## 📊 Performance Optimizations

- **Canvas Rendering:** Hardware-accelerated with `requestAnimationFrame`
- **Frame Caching:** Prevents redundant renders for smooth 60fps
- **GPU Acceleration:** `will-change` and `translateZ(0)` hints
- **High-DPI Support:** `devicePixelRatio` scaling for retina displays
- **Image Quality:** High-quality smoothing (`imageSmoothingQuality: 'high'`)
- **Debounced Resize:** Optimized window resize handling
- **Bundle Size:** Optimized for fast initial load

## 🛠️ Development

```bash
# Type checking
npm run build

# Linting
npm run lint
```

## 🌐 Deployment

This project is configured for seamless Netlify deployment:

1. Push to GitHub
2. Connect repository to Netlify
3. Netlify automatically detects configuration
4. Deploy! 🚀

**Build Settings:**
- Build command: `npm run build`
- Publish directory: `.next`
- Next.js plugin: Automatically enabled via `netlify.toml`

## 🎥 Key Highlights

- **Smooth Scroll Performance:** Optimized canvas rendering ensures zero lag
- **Active Navigation:** Navbar highlights current section based on scroll position
- **Premium Animations:** Staggered entrance effects and smooth transitions
- **Authentic Content:** Real Valkyrie specifications from official Aston Martin sources
- **Functional CTAs:** "Configure" and "Explore Valkyrie" buttons link to official site

## 📝 License

This is a showcase project. All Aston Martin branding and imagery are property of Aston Martin Lagonda Limited.

---

<div align="center">
  <strong>Built with ❤️ by <a href="https://github.com/zaheer-zee">Zaheer Choudhari</a></strong>
  <br/>
  <em>Premium scrollytelling experience for automotive excellence</em>
</div>
