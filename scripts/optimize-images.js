/**
 * One-off asset optimizer: converts the raster images actually rendered by the
 * site into resized WebP files in public/. Originals are left in place.
 *
 *   node scripts/optimize-images.js
 */
import sharp from 'sharp';
import { statSync } from 'node:fs';
import { fileURLToPath } from 'node:url';
import path from 'node:path';

const publicDir = path.resolve(path.dirname(fileURLToPath(import.meta.url)), '..', 'public');

// [source, { width, quality, alpha }]
const jobs = [
  ['lan.png',            { width: 1400, quality: 80 }],
  ['Rulesh Image.png',   { width: 1000, quality: 80 }],
  ['gold-maxx.png',      { width: 1000, quality: 82 }],
  ['hepatoshield.png',   { width: 1000, quality: 82 }],
  ['logo.png',           { width: 600,  quality: 92 }],
  ['logo2.jpeg',         { width: 700,  quality: 85 }],
  ['Boom-0x.jpeg',       { width: 1200, quality: 80 }],
  ['boomx-prom.jpeg',    { width: 1200, quality: 80 }],
  ['prom1.jpeg',         { width: 1400, quality: 80 }],
  ['prom2.jpeg',         { width: 1400, quality: 80 }],
  ['YAASHGUARD.jpeg',    { width: 1100, quality: 82 }],
  ['eensure.png',        { width: 361,  quality: 92 }],
  ['boom-ox.png',        { width: 473,  quality: 92 }],
  ['betain.png',         { width: 361,  quality: 92 }],
  ['proteolich.png',     { width: 460,  quality: 92 }],
  ['virutrap.png',       { width: 386,  quality: 92 }],
];

const kb = (n) => (n / 1024).toFixed(0).padStart(5) + ' KB';
let before = 0;
let after = 0;

for (const [file, opts] of jobs) {
  const src = path.join(publicDir, file);
  const out = path.join(publicDir, file.replace(/\.(png|jpe?g)$/i, '.webp'));
  const srcSize = statSync(src).size;
  await sharp(src)
    .resize({ width: opts.width, withoutEnlargement: true })
    .webp({ quality: opts.quality })
    .toFile(out);
  const outSize = statSync(out).size;
  before += srcSize;
  after += outSize;
  console.log(`${file.padEnd(22)} ${kb(srcSize)}  ->  ${kb(outSize)}  ${path.basename(out)}`);
}

console.log('-'.repeat(60));
console.log(`total  ${kb(before)}  ->  ${kb(after)}   (${(100 - (after / before) * 100).toFixed(1)}% smaller)`);
