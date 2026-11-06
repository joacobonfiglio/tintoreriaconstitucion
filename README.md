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
| `NEXT_PUBLIC_SITE_URL` | Opcional. Solo si el dominio cambia. Si no está, se usa `https://tintoreriaconstitucion.com` (constante `DOMAIN` en `app/site.ts`). Define canonical, sitemap, robots y Open Graph. |

Las vistas previas de Vercel (`VERCEL_ENV=preview`) salen con `noindex` y `robots.txt` en `Disallow: /`.

## SEO

- Dominio principal: `https://tintoreriaconstitucion.com` (constante `DOMAIN` en `app/site.ts`).
- Metadatos de cada página con `pageMetadata()` en `app/seo.ts` (title, description, canonical, Open Graph, Twitter, robots).
- Sitemap: `app/sitemap.ts` (home, `/retiro-a-domicilio`, `/servicios` y cada servicio). Las legales y la 404 tienen `noindex` y no van en el sitemap.
- Datos estructurados: `DryCleaningOrLaundry` + `WebSite` en todas las páginas, `FAQPage` en la home, `Service` + `BreadcrumbList` + `FAQPage` en cada servicio.
- Imágenes para compartir: `shareImage()` en `app/imageUrl.ts`. Varias fotos del sitio son chicas (355–396 px) y por debajo de 1200 px WhatsApp y Facebook descartan la vista previa, así que en esos casos se comparte `camisas` (1376 px). **Pendiente: fotos originales más grandes** para que cada página comparta la suya.
- Google Search Console: verificación por archivo en `public/googlef865543e27f831d4.html`. No borrar: si se borra, Google desverifica la propiedad.

## Mensaje de la web

La web vende **tintorería y lavandería**. El retiro y entrega a domicilio es **una opción más**, no el eje:
se menciona después de los servicios y siempre aclarando que llega a *zonas seleccionadas* (texto en
`DELIVERY.zones`, en `app/site.ts`). No se usan frases del tipo "no tenés que venir al local".

Los títulos y subtítulos van **sin punto final**.

## Dónde se cambia cada cosa

- **Datos del negocio** (WhatsApp, dirección, horario, servicios, preguntas): `app/site.ts`. Buscá `TODO`.
- **Colores y tipografía**: `app/brand.css` (tokens del manual de marca).
- **Secciones**: `app/sections.css`, bloques en `app/Blocks.tsx`.
- **Fotos**: poné el JPG en `assets/fotos/` y corré `npm run images`.
- **Logo**: vectorizado desde el manual (`app/logo-paths.ts`, `public/brand/`).

## Eventos de GA4

- `whatsapp_click` con `placement` (hero, header, flotante, servicio_*, selector_*, retiro, retiro_faq, empresas, contacto, footer, 404) y `service` (según la URL).
- `map_click` con `placement`.

Consent Mode v2: todo arranca en `denied` hasta que la persona acepta.
