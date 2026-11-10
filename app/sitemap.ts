import type { MetadataRoute } from 'next';
import { GUIDES } from './guias/content';
import { ZONES } from './zonas/content';
import { SERVICES, absoluteUrl } from './site';

// Cada página pública tiene que estar acá. tests/sitemap-coverage.test.mjs lo controla.
export const ROUTES = [
  '/',
  '/retiro-a-domicilio',
  '/servicios',
  ...SERVICES.map((s) => `/servicios/${s.slug}`),
  '/zonas',
  ...ZONES.map((z) => `/zonas/${z.slug}`),
  '/empresas',
  '/abonos',
  '/guias',
  ...GUIDES.map((g) => `/guias/${g.slug}`),
];

/** Última edición de cada guía; para el resto, la fecha del build. */
const guideDates = new Map(GUIDES.map((g) => [`/guias/${g.slug}`, new Date(g.updated ?? g.date)]));

export default function sitemap(): MetadataRoute.Sitemap {
  const now = new Date();
  return ROUTES.map((path) => ({
    url: absoluteUrl(path),
    lastModified: guideDates.get(path) ?? now,
    changeFrequency: path.startsWith('/guias/') ? 'yearly' : 'monthly',
    priority: path === '/' ? 1 : path.startsWith('/servicios/') ? 0.9 : path.startsWith('/guias/') ? 0.6 : 0.8,
  }));
}
