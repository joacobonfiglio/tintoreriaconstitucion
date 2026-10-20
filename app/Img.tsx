import images from './images.json';

type Name = keyof typeof images;

type Props = {
  name: Name | (string & {});
  alt: string;
  sizes?: string;
  priority?: boolean;
  className?: string;
};

/** <picture> con AVIF + WebP generados por scripts/optimize-images.mjs */
export function Img({ name, alt, sizes = '100vw', priority = false, className }: Props) {
  const meta = (images as Record<string, { width: number; height: number; widths: number[] }>)[name];
  if (!meta) throw new Error(`Imagen "${name}" no existe. Corré npm run images.`);
  const set = (ext: string) => meta.widths.map((w) => `/img/${name}-${w}.${ext} ${w}w`).join(', ');
  const largest = meta.widths[meta.widths.length - 1];
  return (
    <picture className={className}>
      <source type="image/avif" srcSet={set('avif')} sizes={sizes} />
      <source type="image/webp" srcSet={set('webp')} sizes={sizes} />
      <img
        src={`/img/${name}-${largest}.webp`}
        alt={alt}
        width={meta.width}
        height={meta.height}
        loading={priority ? 'eager' : 'lazy'}
        decoding={priority ? 'sync' : 'async'}
        fetchPriority={priority ? 'high' : 'auto'}
      />
    </picture>
  );
}
