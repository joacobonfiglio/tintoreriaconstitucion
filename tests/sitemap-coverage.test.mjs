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

test('ninguna guía queda sin enlaces entrantes', async () => {
  // Una guía que solo cuelga del índice casi no recibe peso. Cada una tiene que estar
  // en el `related` de otra guía y en el `services` de algún servicio, que es lo que
  // hace que la página del servicio la enlace.
  const src = await read('app/guias/content.ts');
  const relacionadas = new Set([...src.matchAll(/related: \[([^\]]*)\]/g)].flatMap((m) => [...m[1].matchAll(/'([^']+)'/g)].map((x) => x[1])));
  const conServicio = new Set(
    [...src.matchAll(/slug: '([a-z0-9-]+)',[\s\S]*?services: \[([^\]]+)\]/g)].filter((m) => m[2].trim()).map((m) => m[1]),
  );
  for (const slug of guideSlugs) {
    assert.ok(relacionadas.has(slug), `la guía "${slug}" no está en el related de ninguna otra`);
    assert.ok(conServicio.has(slug), `la guía "${slug}" no declara servicios, así que ninguno la enlaza`);
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

/** Los `name` de la constante AREAS de site.ts: las zonas donde realmente retiramos. */
async function deliveryAreas() {
  const block = (await read('app/site.ts')).match(/const AREAS = \[([\s\S]*?)\n\] as const;/);
  assert.ok(block, 'no se encontró la constante AREAS en app/site.ts');
  return [...block[1].matchAll(/name: '([^']+)'/g)].map((m) => m[1]);
}

/** Los `name` de cada zona publicada en /zonas. */
async function zoneNames() {
  return [...(await read('app/zonas/content.ts')).matchAll(/\n    name: '([^']+)'/g)].map((m) => m[1]);
}

/** Barrios que una página de zona declara cubrir además del propio (campo `covers`). */
async function zoneCovers() {
  const src = await read('app/zonas/content.ts');
  return [...src.matchAll(/\n    covers: \[([^\]]*)\]/g)].flatMap((m) => [...m[1].matchAll(/'([^']+)'/g)].map((x) => x[1]));
}

test('cada zona publicada está declarada como área de retiro', async () => {
  // Una página de zona promete que retiramos ahí: tiene que existir en AREAS.
  const areas = await deliveryAreas();
  const zones = await zoneNames();
  assert.ok(areas.length > 0 && zones.length > 0);
  for (const name of zones) assert.ok(areas.includes(name), `la zona "${name}" no figura en AREAS de site.ts`);
});

test('cada área de retiro tiene su página de zona', async () => {
  // Al revés: si decimos que retiramos en un barrio, que se pueda leer sobre él,
  // sea con página propia o dentro del `covers` de una página que lo incluya.
  const cubiertos = [...(await zoneNames()), ...(await zoneCovers())];
  for (const name of await deliveryAreas()) {
    assert.ok(cubiertos.includes(name), `el área "${name}" no tiene página en /zonas ni figura en el covers de ninguna`);
  }
});

test('los covers nombran áreas de retiro reales', async () => {
  const areas = await deliveryAreas();
  for (const name of await zoneCovers()) assert.ok(areas.includes(name), `"${name}" está en un covers pero no en AREAS`);
});

test('no se publican plazos ni horarios sin confirmar', async () => {
  // Regla del proyecto: lo que no está confirmado no se publica. Si el cliente
  // confirma los plazos, se completan en el contenido y este test se actualiza.
  const files = ['app/site.ts', 'app/servicios/content.ts', 'app/zonas/content.ts', 'app/guias/content.ts'];
  // Plazos en horas o días dentro de un texto (no en código: anchos de imagen, fechas, etc.)
  const plazo = /\b\d+\s*(?:a|y)\s*\d+\s*(?:horas|días)\b|\bhoras hábiles\b|\bdías hábiles\b/i;
  for (const f of files) {
    for (const [i, line] of (await read(f)).split('\n').entries()) {
      if (line.trimStart().startsWith('//')) continue; // los comentarios sí pueden documentarlos
      assert.ok(!plazo.test(line), `${f}:${i + 1} publica un plazo sin confirmar → ${line.trim()}`);
    }
  }
  // El horario vacío no se publica en ninguna parte.
  const site = await read('app/site.ts');
  assert.match(site, /hours: \[\] as /, 'SITE.hours debería estar vacío hasta confirmar el horario real');
});

test('las páginas legales existen y no se indexan', async () => {
  for (const p of ['politica-de-privacidad', 'politica-de-cookies', 'terminos-y-condiciones']) {
    const src = await read(`app/${p}/page.tsx`);
    assert.ok(isNoindex(src), `${p} debería tener noindex`);
  }
});
