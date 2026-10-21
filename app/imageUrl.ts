import images from './images.json';

/** URL de la versión WebP más grande que no supere maxWidth (para OG y JSON-LD). */
export function imageUrl(name: string, maxWidth = 1600) {
  const meta = (images as Record<string, { widths: number[] }>)[name];
  if (!meta) throw new Error(`Imagen "${name}" no existe. Corré npm run images.`);
  const fit = meta.widths.filter((w) => w <= maxWidth);
  const w = fit.length ? fit[fit.length - 1] : meta.widths[0];
  return `/img/${name}-${w}.webp`;
}
