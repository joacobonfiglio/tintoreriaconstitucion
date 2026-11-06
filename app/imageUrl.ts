import images from './images.json';

/** URL de la versión WebP más grande que no supere maxWidth (para OG y JSON-LD). */
export function imageUrl(name: string, maxWidth = 1600) {
  const meta = (images as Record<string, { widths: number[] }>)[name];
  if (!meta) throw new Error(`Imagen "${name}" no existe. Corré npm run images.`);
  const fit = meta.widths.filter((w) => w <= maxWidth);
  const w = fit.length ? fit[fit.length - 1] : meta.widths[0];
  return `/img/${name}-${w}.webp`;
}

/** Ancho mínimo que piden Open Graph, Twitter y Google para una imagen para compartir. */
const SHARE_MIN_WIDTH = 1200;

/** Foto de respaldo cuando la de la página es demasiado chica para compartir. */
export const SHARE_FALLBACK = {
  name: 'camisas',
  alt: 'Camisas limpias y planchadas colgadas en perchas de madera',
} as const;

/**
 * Foto para compartir (Open Graph, Twitter y JSON-LD).
 * Varias fotos del sitio son chicas y, por debajo de 1200 px, WhatsApp y Facebook
 * recortan la vista previa o la descartan: en ese caso se comparte la foto grande.
 */
export function shareImage(name: string, alt: string) {
  const all = images as Record<string, { width: number; height: number; widths: number[] }>;
  const pick = all[name] && all[name].width >= SHARE_MIN_WIDTH ? { name, alt } : SHARE_FALLBACK;
  const meta = all[pick.name];
  const url = imageUrl(pick.name, 1600);
  const width = Number(url.match(/-(\d+)\.webp$/)?.[1]) || meta.width;
  return { url, width, height: Math.round((meta.height / meta.width) * width), alt: pick.alt };
}
