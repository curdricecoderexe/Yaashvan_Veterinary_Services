# Yaashvan Veterinary Services — Website

Marketing website for **Yaashvan Veterinary Services (YVS)**, an Indian veterinary
healthcare and poultry-innovation company (brand: **YVS YENSUREX**). The site
presents the company, its flagship product range for livestock and poultry
producers, certifications, leadership, and contact channels.

Live focus: a single-page marketing home with dedicated per-product detail pages
and downloadable product literature (PDF leaflets).

## Overview

A fast, animation-rich single-page application built with React and Vite. The
home page is a long-scroll narrative composed of independent sections; each
flagship product also has its own route with detailed specifications.

### Home page sections

| Section | Purpose |
|---|---|
| Hero | Headline pitch, trust indicators, animated biotech visual |
| TrustStats | Key numbers (years, reach, etc.) |
| About | Company story, vision, mission, aim, the "Expertise Matrix" and "Why Choose Us" |
| FlagshipSolutions | Highlighted solution categories |
| ProductsSection | Filterable grid of premium brands, linking to product pages |
| ProductBanner | Featured product call-out |
| CoreStrengths | Company strengths, with a lazy-loaded background video |
| Leadership | Leadership team |
| Partners | Partner / distributor logos |
| Commitment | Quality and sustainability commitments |
| Certifications | ISO and other certifications |
| Contact | Corporate office details + inquiry form that opens a pre-filled WhatsApp message |
| Promotions | Current promotional content |
| GlobalPresence | Markets / geographic reach |

Navigation and footer wrap every route.

### Product pages

Flagship products each have a route under `/products/*`:

| Product | Route | Category |
|---|---|---|
| Boom-Ox Liq | `/products/boomox` | Water Quality Management |
| Boom-Ox Machine | `/products/boomox-machine` | Water Quality Management |
| Azurro Sani-X | `/products/azurro` | Water Quality Management |
| Hepatoshield | `/products/hepatoshield` | Liver Health |
| G-ProGain X | `/products/progainx` | Performance Enhancer |
| Gold Maxx | `/products/gold-maxx` | Performance Enhancer |
| Betain | `/products/betain` | Summer Anti-Stressors |
| YaashGuard | `/products/yaashguard` | Feed Mill Solutions |
| Virutrap | `/products/virutrap` | Farm biosecurity / broad-spectrum disinfectant |
| Proteolich | `/products/proteolich` | Gut protection / digestive & immunity catalyst |

Product literature PDFs live in `public/Docs/` and are opened via the helpers in
`src/constants/docs.js` (`PRODUCT_DOCS`, `handleDownload`).

## Tech stack

- **React 19** + **React Router 7** (routes lazy-loaded via `React.lazy` + `Suspense`)
- **Vite 8** build tooling
- **Tailwind CSS 3** for styling (custom `brand-navy` / `brand-magenta` / `brand-emerald` palette, `Inter` + `Sora` fonts)
- **Framer Motion** for scroll and entrance animations
- **lucide-react** icons
- **sharp** for the image optimization script

## Getting started

```bash
npm install
npm run dev        # start the dev server (Vite)
```

### Scripts

| Command | Description |
|---|---|
| `npm run dev` | Local dev server with HMR |
| `npm run build` | Production build to `dist/` |
| `npm run preview` | Preview the production build locally |
| `npm run lint` | Run ESLint |
| `npm run optimize:images` | Regenerate resized WebP images in `public/` (see `scripts/optimize-images.js`) |

## Project structure

```
index.html                 App shell, font preconnect, hero image preload
src/
  main.jsx                 React entry
  App.jsx                  Router, Navbar/Footer shell, lazy route definitions
  pages/
    HomePage.jsx           Composes all home sections
    *Page.jsx              One page per flagship product
  components/              Section components (Hero, About, Contact, ...)
    products/              Product-specific building blocks
  constants/docs.js        Product → PDF leaflet mapping + download helper
  index.css / App.css      Tailwind layers and global styles
public/                    Static assets served as-is (WebP images, Docs/*.pdf, icons)
scripts/optimize-images.js Raster → WebP conversion pipeline
unused-assets/             Originals moved out of the deploy (safe to delete)
```

## Performance

Image, font, and lazy-loading optimizations are documented in
[`PERFORMANCE.md`](./PERFORMANCE.md). Notable points:

- Rendered images are served as resized WebP (~91% smaller than the originals).
- Fonts load non-blocking with `display=swap`.
- Below-the-fold images use `loading="lazy"`; the `CoreStrengths` video mounts
  only when scrolled near via `IntersectionObserver`.
- Vendor code is split into `vendor-react`, `vendor-framer-motion`, and
  `vendor-lucide` chunks (`vite.config.js`).
- Outstanding: PDFs in `public/Docs/` and `strengths-video.mp4` still need
  compression.

## Contact configuration

The Contact section and WhatsApp CTA use hardcoded company details in
`src/components/Contact.jsx` (address, `info@yaashvan.com`, phone numbers, and the
`wa.me/919172236116` WhatsApp number). The inquiry form does not hit a backend —
it opens WhatsApp with a pre-filled message.
