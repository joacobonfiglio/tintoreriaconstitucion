// Controla que el sitemap cubra todas las páginas públicas y que cada servicio
// tenga su contenido. Lee los .ts como texto para no depender del build. Uso: npm test
import { test } from 'node:test';
import assert from 'node:assert/strict';
import { readdir, readFile } from 'node:fs/promises';
import path from 'node:path';

const read = (f) => readFile(f, 'utf8');
const slugsIn = (src) => [...src.matchAll(/slug: '([a-z0-9-]+)'/g)].map((m) => m[1]);

// Páginas con noindex (legales) no van en el sitemap.
const isNoindex = (src) => src.includes('legalMetadata(') || /index:\s*false/.test(src);

async function pages(dir, base = '') {
  const out = [];
  for (const e of await readdir(dir, { withFileTypes: true })) {
    if (e.isDirectory()) {
      if (e.name.startsWith('_') || e.name.startsWith('(') || e.name.includes('.')) continue;
      out.push(...(await pages(path.join(dir, e.name), `${base}/${e.name}`)));
    } else if (e.name === 'page.tsx' && !isNoindex(await read(path.join(dir, e.name)))) {
      out.push(base || '/');
    }
  }
  return out;
}

const serviceSlugs = slugsIn(await read('app/site.ts'));
const contentSlugs = slugsIn(await read('app/servicios/content.ts'));

/** Rutas que el sitemap genera: literales + una por servicio si usa SERVICES.map */
async function sitemapRoutes() {
  const src = await read('app/sitemap.ts');
  const literals = [...src.matchAll(/'(\/[^'$]*)'/g)].map((m) => m[1]);
  const dynamic = src.includes('SERVICES.map') ? serviceSlugs.map((s) => `/servicios/${s}`) : [];
  return [...literals, ...dynamic];
}

/** Páginas reales, con [slug] de servicios expandido */
async function publicPages() {
  return (await pages('app')).flatMap((p) => (p === '/servicios/[slug]' ? contentSlugs.map((s) => `/servicios/${s}`) : [p]));
}

test('cada servicio tiene su contenido y viceversa', () => {
  assert.ok(serviceSlugs.length > 0, 'no se encontraron servicios en site.ts');
  assert.deepEqual([...contentSlugs].sort(), [...serviceSlugs].sort());
});

test('el sitemap cubre todas las páginas', async () => {
  const routes = await sitemapRoutes();
  for (const p of await publicPages()) assert.ok(routes.includes(p), `Falta ${p} en el sitemap`);
});

test('el sitemap no lista páginas que no existen', async () => {
  const existing = await publicPages();
  for (const r of await sitemapRoutes()) assert.ok(existing.includes(r), `${r} está en el sitemap pero no existe`);
});

test('las páginas legales existen y no se indexan', async () => {
  for (const p of ['politica-de-privacidad', 'politica-de-cookies', 'terminos-y-condiciones']) {
    const src = await read(`app/${p}/page.tsx`);
    assert.ok(isNoindex(src), `${p} debería tener noindex`);
  }
});
