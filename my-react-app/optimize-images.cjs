// One-off image optimizer: makes a .webp next to each raster image in
// src/assets, resized to a sensible web max and compressed. Originals are
// left untouched. Run with: node optimize-images.cjs
const fs = require('fs')
const path = require('path')
const sharp = require('sharp')

const DIR = path.join(__dirname, 'src', 'assets')
const MAX = 1920          // longest side, px
const QUALITY = 80        // webp quality
const EXTS = new Set(['.png', '.jpg', '.jpeg'])

async function run() {
  const files = fs.readdirSync(DIR).filter(f => EXTS.has(path.extname(f).toLowerCase()))
  let before = 0, after = 0
  for (const file of files) {
    const src = path.join(DIR, file)
    const out = path.join(DIR, path.parse(file).name + '.webp')
    const srcSize = fs.statSync(src).size
    await sharp(src)
      .rotate() // respect EXIF orientation
      .resize({ width: MAX, height: MAX, fit: 'inside', withoutEnlargement: true })
      .webp({ quality: QUALITY })
      .toFile(out)
    const outSize = fs.statSync(out).size
    before += srcSize; after += outSize
    const pct = ((1 - outSize / srcSize) * 100).toFixed(0)
    console.log(`${file.padEnd(26)} ${(srcSize/1e6).toFixed(2)}MB -> ${(outSize/1e6).toFixed(2)}MB  (-${pct}%)`)
  }
  console.log(`\nTOTAL  ${(before/1e6).toFixed(1)}MB -> ${(after/1e6).toFixed(1)}MB  (-${((1-after/before)*100).toFixed(0)}%)`)
}

run().catch(e => { console.error(e); process.exit(1) })
