import type { MetadataRoute } from 'next';
import { SERVICES, absoluteUrl } from './site';

// Cada página pública tiene que estar acá. tests/sitemap-coverage.test.mjs lo controla.
export const ROUTES = ['/', '/retiro-a-domicilio', '/servicios', ...SERVICES.map((s) => `/servicios/${s.slug}`)];

export default function sitemap(): MetadataRoute.Sitemap {
  const now = new Date();
  return ROUTES.map((path) => ({
    url: absoluteUrl(path),
    lastModified: now,
    changeFrequency: 'monthly',
    priority: path === '/' || path === '/retiro-a-domicilio' ? 1 : path.split('/').length > 2 ? 0.9 : 0.8,
  }));
}
