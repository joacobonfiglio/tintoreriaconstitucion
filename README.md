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

## Segmento profesional

Abogados, contadores, médicos y cualquiera que use la misma ropa de trabajo todas las semanas. **No hay
una página por profesión**: nadie busca "tintorería para abogados", busca por prenda. El segmento se
cubre con dos piezas, una de búsqueda y otra de conversión:

- `/servicios/limpieza-de-ambos-y-uniformes` capta la búsqueda por prenda (ambos, guardapolvos,
  uniformes), y sirve tanto al profesional suelto como al consultorio.
- `/abonos` es el cierre: dice que los abonos existen y manda a WhatsApp. No publica precios ni
  condiciones porque no están confirmados.

Si alguna vez se hace publicidad paga apuntada a una profesión, ahí sí conviene una landing por
segmento. Para SEO, no.

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
| `/abonos` | "abono de camisas", y el cierre del segmento profesional | `app/abonos/page.tsx` |
| `/guias/<slug>` | búsquedas informativas ("cómo sacar una mancha") | `app/guias/content.ts` |
| `/retiro-a-domicilio` | "tintorería con retiro a domicilio" | `app/retiro-a-domicilio/page.tsx` |

## Enlazado interno

Google reparte el peso por los enlaces del contenido; los del header y el footer, al estar en todas las
páginas, pesan mucho menos. Por eso cada sección enlaza a las otras desde el cuerpo:

- **Servicio → guías.** Cada página de servicio muestra las guías que la mencionan. La relación se lee
  al revés del campo `services` de cada guía, así que no hay una segunda lista que mantener.
- **Guía → servicios.** La columna lateral de cada guía enlaza sus servicios relacionados.
- **Zonas y `/servicios` → `/empresas`.** Una línea en cada una, porque es el camino natural del
  alquiler temporario y del comercio.
- **Servicios con abono → `/abonos`.** Se marca con `hasAbono: true` en `app/servicios/content.ts` y la
  plantilla pone la línea sola. Hoy lo tienen camisas y trajes.
- **`/retiro-a-domicilio` → cada zona**, y la banda de retiro → `/zonas`.

Para medirlo, hay un script de apoyo que recorre el sitio y cuenta enlaces entrantes del contenido y
profundidad de clic. No está en el repo: se arma cuando hace falta. Las legales quedan fuera a
propósito (son `noindex` y cuelgan solo del footer).

Dos tests cuidan lo que se puede automatizar: ninguna guía puede quedar sin figurar en el `related` de
otra ni sin declarar `services`, que es lo que la deja sin enlaces entrantes.

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
| Condiciones de los abonos | `/abonos`: qué incluye cada uno, frecuencia, precio | "se arma sobre tu caso" |
| Abono de ambos y uniformes | Si existe, `hasAbono: true` en ese servicio | no se menciona |
| Alcance de los servicios nuevos | Gamuza y cuero en zapatillas, sillones grandes en tapizados | "consultanos" |

También pendiente, pero de diseño y no de contenido:

- **Foto de zapatillas.** `limpieza-de-zapatillas` usa la del taller como provisoria (`image: 'maquinas'`).
- **Fotos originales más grandes**: varias son de 355–396 px (ver la nota de `shareImage()` arriba).

## Zonas (`/zonas`)

Una página por zona donde **realmente** retiramos. Hoy son 15 barrios en 12 páginas: Constitución,
centro, Los Troncos, Stella Maris, Playa Grande, Chauvín, La Perla, Güemes, Caisamar, Parque Luro,
Santa Mónica, y la zona norte costera (Félix U. Camet, Jardín de Alto Camet, Las Dalias y Parque Peña),
que comparte una sola página.

La lista vive en **un solo lugar**: la constante `AREAS` de `app/site.ts`. De ahí salen el `areaServed`
del JSON-LD y las frases de cobertura (`DELIVERY.zones` y `zonesLong`), así que no hay que tocar textos
sueltos cuando cambia.

Tres tests lo mantienen consistente: cada página de `/zonas` tiene que estar en `AREAS`, cada entrada de
`AREAS` tiene que tener página (propia o dentro del `covers` de otra), y todo `covers` tiene que nombrar
áreas reales. Una página de un barrio al que no llegamos es una promesa incumplida, y Google además la
trata como página puerta.

**Barrios chicos y linderos:** una zona puede cubrir varios con el campo `covers`. Es lo que hace
`/zonas/camet` con Alto Camet, Las Dalias y Parque Peña. Los cuatro van al `areaServed` del JSON-LD, pero
comparten una página con contenido real en vez de tener cuatro casi iguales. Si alguno despega, se le
hace página propia.

**Para sumar una zona:**

1. Agregá `{ name, short }` a `AREAS` en `app/site.ts`.
2. Copiá un objeto de `ZONES` en `app/zonas/content.ts` con el mismo `name`.
3. Escribí un `intro`, `highlights` y `faqs` **propios**. Dos zonas con el mismo texto no sirven: todo el
   valor está en lo que la página dice de ese barrio en particular.

Si el `h1` + `h1Thin` de una zona coincide con el H2 que arma la plantilla, la plantilla usa otro H2 sola:
no hay que acordarse.

**Pendiente:** no hay ninguna foto de los barrios. Cada zona usa una foto de prendas, elegida por
afinidad con el tipo de pedido. Fotos reales de cada zona ayudarían bastante.

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
