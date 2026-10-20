// Convierte cada foto de assets/fotos a AVIF + WebP en varios anchos
// y escribe app/images.json con las medidas para que <Img> no mueva el layout.
// Uso: npm run images
import sharp from 'sharp';
import { readdir, mkdir, writeFile } from 'node:fs/promises';
import path from 'node:path';

const SRC = 'assets/fotos';
const OUT = 'public/img';
const WIDTHS = [480, 960, 1600];

await mkdir(OUT, { recursive: true });
const manifest = {};

for (const file of (await readdir(SRC)).filter((f) => /\.(jpe?g|png)$/i.test(f)).sort()) {
  const name = path.parse(file).name;
  const input = sharp(path.join(SRC, file)).rotate();
  const { width, height } = await input.metadata();
  const widths = [...new Set(WIDTHS.map((w) => Math.min(w, width)))];
  for (const w of widths) {
    const resized = input.clone().resize({ width: w });
    await resized.clone().avif({ quality: 52, effort: 6 }).toFile(`${OUT}/${name}-${w}.avif`);
    await resized.clone().webp({ quality: 74 }).toFile(`${OUT}/${name}-${w}.webp`);
  }
  manifest[name] = { width, height, widths };
  console.log(`${name}: ${width}×${height} → ${widths.join(', ')}`);
}

await writeFile('app/images.json', JSON.stringify(manifest, null, 2) + '\n');
