import type { MetadataRoute } from 'next';
import { absoluteUrl } from './site';

export default function robots(): MetadataRoute.Robots {
  // En previews de Vercel no indexar.
  const isProd = !process.env.VERCEL_ENV || process.env.VERCEL_ENV === 'production';
  return {
    rules: isProd ? [{ userAgent: '*', allow: '/' }] : [{ userAgent: '*', disallow: '/' }],
    sitemap: absoluteUrl('/sitemap.xml'),
    host: absoluteUrl('/'),
  };
}
