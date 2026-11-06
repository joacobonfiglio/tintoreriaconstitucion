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
- Sitemap: `app/sitemap.ts`. Las legales y la 404 tienen `noindex` y no van en el sitemap.
- Datos estructurados: `DryCleaningOrLaundry` + `WebSite` en todas las páginas; `FAQPage` en la home; `Service` + `BreadcrumbList` + `FAQPage` en servicios, zonas y empresas; `Blog` en `/guias` y `BlogPosting` en cada guía; `ItemList` en `/zonas`.
- Imágenes para compartir: `shareImage()` en `app/imageUrl.ts`. Varias fotos del sitio son chicas (355–396 px) y por debajo de 1200 px WhatsApp y Facebook descartan la vista previa, así que en esos casos se comparte `camisas` (1376 px). **Pendiente: fotos originales más grandes** para que cada página comparta la suya.
- Google Search Console: verificación por archivo en `public/googlef865543e27f831d4.html`. No borrar: si se borra, Google desverifica la propiedad.

## Mensaje de la web

La web vende **tintorería y lavandería**. El retiro y entrega a domicilio es **una opción más**, no el eje:
se menciona después de los servicios y siempre aclarando hasta dónde llega. Las zonas están en
`DELIVERY.areas` y `DELIVERY.zones` (`app/site.ts`): hoy, **barrio Constitución y centro de Mar del Plata**.
Si cambian, se tocan ahí y se actualizan solas en la banda, la página de retiro, las guías y el JSON-LD.
No se usan frases del tipo "no tenés que venir al local".

Los títulos y subtítulos van **sin punto final**.

El menú del header es corto a propósito (`NAV`): Servicios, Retiro a domicilio, Empresas y Guías, más el
botón de WhatsApp. El resto vive en el footer (`FOOTER_NAV`), que también usa la 404.

## Mapa de páginas

| Sección | Para qué búsquedas | Dónde se edita |
| --- | --- | --- |
| `/` | "tintorería / lavandería en Mar del Plata" | `app/page.tsx` + `app/site.ts` |
| `/servicios/<slug>` | "limpieza de trajes", "lavandería", "arreglos de ropa", … | `app/servicios/content.ts` + `SERVICES` en `app/site.ts` |
| `/zonas/<slug>` | "tintorería en \<barrio\>" | `app/zonas/content.ts` |
| `/empresas` | "lavandería para hoteles", "blanquería alquileres temporarios" | `app/empresas/page.tsx` |
| `/guias/<slug>` | búsquedas informativas ("cómo sacar una mancha") | `app/guias/content.ts` |
| `/retiro-a-domicilio` | "tintorería con retiro a domicilio" | `app/retiro-a-domicilio/page.tsx` |

## Regla: lo que no está confirmado no se publica

La web no afirma nada que el cliente no haya confirmado. Un dato vacío no rompe nada: la sección que
lo usaría no se muestra, o se reemplaza por "consultanos por WhatsApp". Es preferible que falte un
dato a que la web prometa algo que después no se cumple.

Hay un test (`npm test`) que falla si se cuela un plazo en horas o días en los archivos de contenido.

### Pendientes del cliente

Al completarlos, aparecen solos donde corresponde. Buscá `TODO` en el código.

| Dato | Dónde aparecería | Hoy |
| --- | --- | --- |
| `SITE.hours` | Home, footer, `/zonas/constitucion`, JSON-LD | "Consultá el horario por WhatsApp" |
| Plazos de entrega | Preguntas de cada servicio y zona | "Te damos el plazo al recibirla" |
| Precios y forma de cobro | Servicios, `/empresas`, `/retiro-a-domicilio` | "Te lo pasamos antes de empezar" |
| `SITE.address.postalCode` | Dirección del JSON-LD | se omite |
| `SITE.priceRange` | Nivel de precio del JSON-LD | se omite |
| `SITE.email`, `geo`, `social`, `foundingYear` | JSON-LD y footer | se omiten |
| `LEGAL.holder`, `LEGAL.cuit` | Páginas legales | se omiten |
| Esquema de empresas | `/empresas`: mínimos, frecuencia, cobro | "contanos tu caso" |
| Alcance de los servicios nuevos | Gamuza y cuero en zapatillas, sillones grandes en tapizados | "consultanos" |

También pendiente, pero de diseño y no de contenido:

- **Foto de zapatillas.** `limpieza-de-zapatillas` usa la del taller como provisoria (`image: 'maquinas'`).
- **Fotos originales más grandes**: varias son de 355–396 px (ver la nota de `shareImage()` arriba).

## Zonas (`/zonas`)

Una página por zona donde **realmente** retiramos. Las zonas viven en `app/zonas/content.ts` y tienen que
coincidir con `DELIVERY.areas` de `app/site.ts`: hay un test que lo controla, porque una página de un barrio
al que no llegamos es una promesa incumplida y Google la trata como página puerta.

Para sumar una zona: agregá el barrio a `DELIVERY.areas`, copiá un objeto de `ZONES` y **escribí un `intro`
propio**. Dos zonas con el mismo texto no sirven de nada: todo el valor está en lo que la página dice de
ese barrio en particular.

## Guías y recursos (`/guias`)

Es la sección de contenido con la que la web pelea búsquedas que no son "tintorería en Mar del Plata"
(cómo lavar un acolchado, cómo sacar una mancha, qué significa cada etiqueta…).

**Para publicar una guía nueva:** abrí `app/guias/content.ts`, copiá un objeto de `GUIDES` y cambialo.
No hace falta tocar el sitemap, el menú ni el `llms.txt`: salen solos de esa lista.

| Campo | Para qué |
| --- | --- |
| `slug` | La URL (`/guias/<slug>`). Una vez publicada, no se cambia: Google ya la indexó. |
| `keyword` | La búsqueda a la que apunta la nota. Tiene que estar en el title, el H1 y el primer párrafo. |
| `metaTitle` / `metaDescription` | Lo que se ve en Google. Hasta ~60 y ~155 caracteres. |
| `title` | El H1, **sin punto final**. |
| `excerpt` | El resumen de la tarjeta del índice. |
| `category` | La etiqueta de color de la tarjeta. |
| `date` / `updated` | `AAAA-MM-DD`. `updated` solo si se reescribe algo. |
| `image` / `imageAlt` | Una foto de `app/images.json` y su descripción. |
| `body` | El cuerpo, en bloques. Los tipos están listados arriba de todo en `content.ts`. |
| `faqs` | Opcional. Si están, salen al pie y generan el `FAQPage` para Google. |
| `services` / `related` | Slugs de `/servicios` y de otras guías. `npm test` avisa si alguno no existe. |

Bloques disponibles para `body`: `p`, `h2`, `h3`, `ul`, `ol`, `steps`, `note` y `table`.

## Dónde se cambia cada cosa

- **Datos del negocio** (WhatsApp, dirección, horario, zonas de retiro, servicios, preguntas): `app/site.ts`. Buscá `TODO`.
- **Guías y notas**: `app/guias/content.ts`.
- **Zonas de retiro**: `app/zonas/content.ts` (y `DELIVERY.areas` en `app/site.ts`).
- **Empresas**: `app/empresas/page.tsx`.
- **Colores y tipografía**: `app/brand.css` (tokens del manual de marca).
- **Secciones**: `app/sections.css`, bloques en `app/Blocks.tsx`.
- **Fotos**: poné el JPG en `assets/fotos/` y corré `npm run images`.
- **Logo**: vectorizado desde el manual (`app/logo-paths.ts`, `public/brand/`).

## Eventos de GA4

- `whatsapp_click` con `placement` (hero, header, flotante, servicio_*, selector_*, retiro, retiro_faq, guia_*, zona_*, empresas, empresas_como, empresas_temporada, contacto, footer, 404) y `service` (según la URL).
- `map_click` con `placement`.

Consent Mode v2: todo arranca en `denied` hasta que la persona acepta.
