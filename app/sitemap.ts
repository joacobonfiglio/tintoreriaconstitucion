import type { MetadataRoute } from 'next';
import { absoluteUrl } from './site';

// Cada página pública tiene que estar acá. tests/sitemap-coverage.test.mjs lo controla.
export const ROUTES = ['/'] as const;

export default function sitemap(): MetadataRoute.Sitemap {
  const now = new Date();
  return ROUTES.map((path) => ({
    url: absoluteUrl(path),
    lastModified: now,
    changeFrequency: 'monthly',
    priority: path === '/' ? 1 : 0.8,
  }));
}
