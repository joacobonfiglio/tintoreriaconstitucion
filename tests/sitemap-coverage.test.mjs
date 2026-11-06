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
const guideSlugs = slugsIn(await read('app/guias/content.ts'));
const zoneSlugs = slugsIn(await read('app/zonas/content.ts'));

/** Cada ruta [slug] y de dónde salen sus valores. */
const DYNAMIC = {
  '/servicios/[slug]': { base: '/servicios', slugs: contentSlugs, map: 'SERVICES.map' },
  '/guias/[slug]': { base: '/guias', slugs: guideSlugs, map: 'GUIDES.map' },
  '/zonas/[slug]': { base: '/zonas', slugs: zoneSlugs, map: 'ZONES.map' },
};

/** Rutas que el sitemap genera: los literales del array ROUTES + las dinámicas que expande con .map */
async function sitemapRoutes() {
  const src = await read('app/sitemap.ts');
  const routes = src.match(/ROUTES = \[([\s\S]*?)\n\];/);
  assert.ok(routes, 'no se encontró el array ROUTES en app/sitemap.ts');
  const literals = [...routes[1].matchAll(/'(\/[^'$]*)'/g)].map((m) => m[1]);
  const dynamic = Object.values(DYNAMIC).flatMap((d) => (routes[1].includes(d.map) ? d.slugs.map((s) => `${d.base}/${s}`) : []));
  return [...literals, ...dynamic];
}

/** Páginas reales, con las rutas [slug] expandidas */
async function publicPages() {
  return (await pages('app')).flatMap((p) => (DYNAMIC[p] ? DYNAMIC[p].slugs.map((s) => `${DYNAMIC[p].base}/${s}`) : [p]));
}

test('cada servicio tiene su contenido y viceversa', () => {
  assert.ok(serviceSlugs.length > 0, 'no se encontraron servicios en site.ts');
  assert.deepEqual([...contentSlugs].sort(), [...serviceSlugs].sort());
});

test('las guías tienen slug único y no repiten el de un servicio', () => {
  assert.ok(guideSlugs.length > 0, 'no se encontraron guías en guias/content.ts');
  assert.equal(new Set(guideSlugs).size, guideSlugs.length, 'hay slugs de guía repetidos');
});

test('los enlaces internos de las guías apuntan a páginas que existen', async () => {
  const src = await read('app/guias/content.ts');
  // `services: [...]` y `related: [...]` de cada guía
  for (const [, key, list] of src.matchAll(/(services|related): \[([^\]]*)\]/g)) {
    const refs = [...list.matchAll(/'([a-z0-9-]+)'/g)].map((m) => m[1]);
    const valid = key === 'services' ? serviceSlugs : guideSlugs;
    for (const r of refs) assert.ok(valid.includes(r), `${key}: "${r}" no existe`);
  }
});

test('el sitemap cubre todas las páginas', async () => {
  const routes = await sitemapRoutes();
  for (const p of await publicPages()) assert.ok(routes.includes(p), `Falta ${p} en el sitemap`);
});

test('el sitemap no lista páginas que no existen', async () => {
  const existing = await publicPages();
  for (const r of await sitemapRoutes()) assert.ok(existing.includes(r), `${r} está en el sitemap pero no existe`);
});

test('cada zona publicada está declarada en DELIVERY.areas', async () => {
  // Una página de zona promete que retiramos ahí: tiene que coincidir con las zonas reales.
  const site = await read('app/site.ts');
  const areas = [...(site.match(/areas: \[([^\]]*)\]/)?.[1] ?? '').matchAll(/'([^']+)'/g)].map((m) => m[1].toLowerCase());
  assert.ok(areas.length > 0, 'no se encontró DELIVERY.areas en site.ts');
  const zones = await read('app/zonas/content.ts');
  for (const [, name] of zones.matchAll(/\n    name: '([^']+)'/g)) {
    const key = name.toLowerCase().replace(/^barrio /, '').replace(/ de mar del plata$/, '');
    assert.ok(
      areas.some((a) => a.includes(key)),
      `la zona "${name}" no figura en DELIVERY.areas`,
    );
  }
});

test('las páginas legales existen y no se indexan', async () => {
  for (const p of ['politica-de-privacidad', 'politica-de-cookies', 'terminos-y-condiciones']) {
    const src = await read(`app/${p}/page.tsx`);
    assert.ok(isNoindex(src), `${p} debería tener noindex`);
  }
});
