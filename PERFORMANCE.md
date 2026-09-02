# Performance notes

## What was optimized

### Images → WebP (biggest win)
`scripts/optimize-images.js` (run with `npm run optimize:images`) converts the
raster images the site actually renders into resized WebP files in `public/`.
The originals were moved out of `public/` (see below).

| | before | after |
|---|---|---|
| Rendered images total | ~9.3 MB | ~0.84 MB (‑91%) |
| Hero image (`lan`) | 2.5 MB PNG | 172 KB WebP |
| `Rulesh Image` | 2.0 MB PNG | 66 KB WebP |
| `hepatoshield` / `gold-maxx` | 1.6 / 1.4 MB PNG | ~50 / 40 KB WebP |

All `<img>` references were updated to `.webp`. Re-run `npm run optimize:images`
after adding or replacing a source image (add it to the `jobs` list in the script first).

### Unused assets removed from the deploy
60 unreferenced files (~54 MB) — old hero variants, background PNGs, superseded
originals — were moved from `public/` to `unused-assets/` (a sibling folder, not
deleted). They are no longer bundled or deployed. Delete `unused-assets/` once
you're sure nothing is needed.

### Fonts
- Removed the render-blocking `@import` in `src/index.css`.
- `index.html` now uses `preconnect` + a non-blocking `<link>` with `display=swap`,
  and requests fewer weights (Inter 400/500/600/700, Sora 600/700/800).

### Lazy loading
- `<img>` tags below the fold get `loading="lazy"` + `decoding="async"`;
  the hero image and nav logo get `fetchPriority="high"` and explicit dimensions
  to avoid layout shift. `index.html` preloads `/lan.webp` (the LCP image).
- **`CoreStrengths` video** (`strengths-video.mp4`, 38 MB) is no longer in the
  initial page load. It mounts only when the section is within 400 px of the
  viewport (IntersectionObserver) and uses `preload="none"`.

### Build
- `vite.config.js` `manualChunks` fixed so `lucide-react` is no longer pulled
  into the React vendor chunk.

## Still worth doing (needs tools not available here)

1. **Compress the PDFs in `public/Docs/`** — currently ~98 MB total
   (`Revised_Gold MAXX_A4 Leaflet.pdf` alone is 36 MB, `G-ProGainX` 29 MB).
   Run them through Ghostscript / Acrobat "Reduce File Size" — an A4 leaflet
   should be < 2 MB. These only download on "Download Certificate/Specifications"
   clicks, so they don't affect page load, but the download UX is bad.
2. **Re-encode `strengths-video.mp4`** (38 MB) with ffmpeg — e.g.
   `ffmpeg -i strengths-video.mp4 -vf scale=1280:-2 -c:v libx264 -crf 28 -preset slow -an strengths-video.mp4`
   and/or add a WebM/AV1 source. Also add a `poster` image.
3. **Self-host the Contact-section map image** — `src/components/Contact.jsx`
   loads a photo from `images.unsplash.com`. Download it, optimize to WebP, serve
   locally to drop the third-party connection.
4. Consider lazy-loading below-the-fold home sections (`React.lazy` per section)
   to trim the 88 KB `HomePage` chunk.
