# Tintorería Constitución — web

Next.js 15 (App Router), sin librerías de UI. Animaciones con CSS + IntersectionObserver (`app/Motion.tsx`),
carrusel con scroll-snap (`Clothesline`) y selector de servicio con radios + `:has()` (`ChatPreview`).

## Comandos

```bash
npm install
npm run dev        # http://localhost:3000
npm run build
npm test           # el sitemap cubre todas las páginas
npm run images     # assets/fotos/*.jpg → public/img (AVIF + WebP) y app/images.json
```

## Variables de entorno (Vercel)

| Variable | Para qué |
| --- | --- |
| `NEXT_PUBLIC_GA_ID` | ID de GA4 (`G-XXXXXXX`). Sin esto no se carga GA ni aparece el aviso de cookies. |
| `NEXT_PUBLIC_SITE_URL` | Opcional. Dominio final (`https://www.ejemplo.com.ar`). Si no está, se usa el dominio de producción que informa Vercel. Define canonical, sitemap, robots y Open Graph. |

Las vistas previas de Vercel (`VERCEL_ENV=preview`) salen con `noindex` y `robots.txt` en `Disallow: /`.

## SEO

- Metadatos de cada página con `pageMetadata()` en `app/seo.ts` (title, description, canonical, Open Graph, Twitter, robots).
- Sitemap: `app/sitemap.ts` (home, `/servicios` y cada servicio). Las legales y la 404 tienen `noindex` y no van en el sitemap.
- Datos estructurados: `DryCleaningOrLaundry` + `WebSite` en todas las páginas, `FAQPage` en la home, `Service` + `BreadcrumbList` + `FAQPage` en cada servicio.

## Dónde se cambia cada cosa

- **Datos del negocio** (WhatsApp, dirección, horario, servicios, preguntas): `app/site.ts`. Buscá `TODO`.
- **Colores y tipografía**: `app/brand.css` (tokens del manual de marca).
- **Secciones**: `app/sections.css`, bloques en `app/Blocks.tsx`.
- **Fotos**: poné el JPG en `assets/fotos/` y corré `npm run images`.
- **Logo**: vectorizado desde el manual (`app/logo-paths.ts`, `public/brand/`).

## Eventos de GA4

- `whatsapp_click` con `placement` (hero, header, flotante, servicio_*, selector_*, empresas, contacto, footer, 404) y `service` (según la URL).
- `map_click` con `placement`.

Consent Mode v2: todo arranca en `denied` hasta que la persona acepta.
