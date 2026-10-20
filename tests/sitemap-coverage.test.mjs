// Verifica que toda page.tsx pública figure en ROUTES de app/sitemap.ts
// y que no haya rutas en el sitemap sin página. Uso: npm test
import { test } from 'node:test';
import assert from 'node:assert/strict';
import { readdir, readFile } from 'node:fs/promises';
import path from 'node:path';

async function pages(dir, base = '') {
  const out = [];
  for (const e of await readdir(dir, { withFileTypes: true })) {
    if (e.isDirectory()) {
      if (e.name.startsWith('_') || e.name.startsWith('(') || e.name.includes('.')) continue;
      out.push(...(await pages(path.join(dir, e.name), `${base}/${e.name}`)));
    } else if (e.name === 'page.tsx') {
      out.push(base || '/');
    }
  }
  return out;
}

test('el sitemap cubre todas las páginas', async () => {
  const src = await readFile('app/sitemap.ts', 'utf8');
  const routes = [...src.matchAll(/'(\/[^']*)'/g)].map((m) => m[1]);
  const found = await pages('app');
  const dynamicPages = found.filter((p) => p.includes('['));
  const staticPages = found.filter((p) => !p.includes('['));
  for (const p of staticPages) assert.ok(routes.includes(p), `Falta ${p} en el sitemap`);
  for (const r of routes) assert.ok(staticPages.includes(r) || dynamicPages.length > 0, `${r} está en el sitemap pero no existe`);
});
