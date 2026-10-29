// Fuente única de datos del negocio. Todo lo que dice la web sale de acá:
// textos de contacto, JSON-LD, sitemap, llms.txt y mensajes de WhatsApp.
// Los campos con TODO esperan el dato real del cliente; no inventar.

function siteUrl() {
  const explicit = process.env.NEXT_PUBLIC_SITE_URL;
  if (explicit) return explicit.replace(/\/$/, '');
  const vercel = process.env.VERCEL_PROJECT_PRODUCTION_URL;
  if (vercel) return `https://${vercel}`;
  return 'https://www.tintoreriaconstitucion.com.ar'; // TODO: confirmar dominio
}

/** true en producción y en local; false en las vistas previas de Vercel (no se indexan). */
export const IS_PRODUCTION = !process.env.VERCEL_ENV || process.env.VERCEL_ENV === 'production';

export const SITE = {
  name: 'Tintorería Constitución',
  legalName: 'Tintorería Constitución', // TODO: razón social si se quiere mostrar
  // Dominio: NEXT_PUBLIC_SITE_URL si está definido; si no, el dominio de producción que informa Vercel.
  url: siteUrl(),
  city: 'Mar del Plata',
  region: 'Buenos Aires',
  country: 'AR',
  tagline: 'Retiramos, limpiamos y te la devolvemos lista.',
  description:
    'Tintorería en Mar del Plata con retiro a domicilio. Limpieza de trajes, acolchados, camisas, cortinas, prendas delicadas y valet de ropa. Pedí por WhatsApp.',
  // Formato internacional sin + ni espacios: 54 9 + característica + número.
  whatsapp: '5492235655898',
  phoneDisplay: '223 565-5898',
  email: '', // TODO: email de contacto (vacío = no se publica)
  address: {
    street: 'Av. Constitución 0000', // TODO: dirección exacta
    neighborhood: 'Constitución',
    postalCode: '7600', // TODO: confirmar CP
  },
  // TODO: coordenadas exactas del local (las de abajo son el centro del barrio)
  geo: { lat: -37.9705, lng: -57.5575 },
  // TODO: horario real. Formato 24 h.
  hours: [
    { days: ['Mo', 'Tu', 'We', 'Th', 'Fr'], label: 'Lunes a viernes', opens: '08:30', closes: '19:30' },
    { days: ['Sa'], label: 'Sábados', opens: '09:00', closes: '13:00' },
  ],
  mapsUrl: 'https://www.google.com/maps/search/?api=1&query=Tintorer%C3%ADa+Constituci%C3%B3n+Mar+del+Plata', // TODO: link de la ficha de Google
  social: {
    instagram: '', // TODO
    facebook: '', // TODO
  },
  foundingYear: null as number | null, // TODO: año de apertura, para "X años en el barrio"
  priceRange: '$$',
} as const;

// Datos del responsable para las páginas legales (la Ley 25.326 pide identificarlo).
// Mientras estén vacíos no se muestran. TODO: razón social o nombre del titular, y CUIT.
export const LEGAL = {
  holder: '',
  cuit: '',
  updated: '21 de octubre de 2026',
};

export const LEGAL_PAGES = [
  { href: '/politica-de-privacidad', label: 'Política de privacidad' },
  { href: '/politica-de-cookies', label: 'Política de cookies' },
  { href: '/terminos-y-condiciones', label: 'Términos y condiciones' },
] as const;

export const GREETING = '¡Hola Tintorería Constitución!';

export const NAV = [
  { href: '/servicios', label: 'Servicios' },
  { href: '/retiro-a-domicilio', label: 'Retiro a domicilio' },
  { href: '/#preguntas', label: 'Preguntas' },
  { href: '/#contacto', label: 'Contacto' },
] as const;

// Retiro y entrega a domicilio: el servicio que más se destaca en la web.
// TODO: confirmar zonas, días/horarios de retiro y si tiene costo.
export const DELIVERY = {
  href: '/retiro-a-domicilio',
  title: 'Retiro y entrega a domicilio',
  short: 'Pasamos a buscar tu ropa y te la devolvemos limpia, en tu casa o tu trabajo.',
  area: 'Mar del Plata',
  steps: [
    { icon: 'whatsapp', title: 'Pedí por WhatsApp', text: 'Decinos qué prendas y tu dirección.' },
    { icon: 'truck', title: 'La retiramos', text: 'En el día y horario que elijas.' },
    { icon: 'check', title: 'Te la devolvemos lista', text: 'Limpia, planchada y en percha.' },
  ],
} as const;

export type Service = {
  slug: string;
  name: string;
  short: string;
  image: string;
  icon: IconName;
  /** Mensaje que se precarga en WhatsApp al tocar el servicio */
  message: string;
};

export type IconName =
  | 'iron'
  | 'hanger'
  | 'shirt'
  | 'jacket'
  | 'towels'
  | 'washer'
  | 'drop'
  | 'truck'
  | 'basin'
  | 'spray';

// Orden = prioridad comercial y de búsqueda (lo más buscado primero).
export const SERVICES: Service[] = [
  {
    slug: 'limpieza-de-trajes',
    name: 'Limpieza de trajes',
    short: 'Trajes, sacos, tapados y pantalones de vestir. Planchados y en percha.',
    image: 'traje',
    icon: 'jacket',
    message: `${GREETING} Quiero pedir la limpieza de un traje.`,
  },
  {
    slug: 'limpieza-de-acolchados',
    name: 'Limpieza de acolchados',
    short: 'Acolchados de pluma o sintéticos, frazadas y mantas. Secos y esponjosos.',
    image: 'acolchados',
    icon: 'towels',
    message: `${GREETING} Quiero pedir la limpieza de un acolchado.`,
  },
  {
    slug: 'limpieza-de-camisas',
    name: 'Limpieza de camisas',
    short: 'Limpias y planchadas, con cuello y puños firmes. En percha.',
    image: 'camisas',
    icon: 'shirt',
    message: `${GREETING} Quiero pedir la limpieza y planchado de camisas.`,
  },
  {
    slug: 'limpieza-de-camperas',
    name: 'Limpieza de camperas',
    short: 'Camperas de pluma, paño e impermeables. Listas para usar.',
    image: 'saco-lana',
    icon: 'hanger',
    message: `${GREETING} Quiero pedir la limpieza de una campera.`,
  },
  {
    slug: 'limpieza-de-prendas-delicadas',
    name: 'Limpieza de prendas delicadas',
    short: 'Vestidos de fiesta y de novia, seda, lana fina y bordados.',
    image: 'control-prenda',
    icon: 'spray',
    message: `${GREETING} Quiero pedir la limpieza de una prenda delicada.`,
  },
  {
    slug: 'limpieza-de-cortinas',
    name: 'Limpieza de cortinas',
    short: 'Cortinas, manteles, sábanas y almohadones. Para casas y alojamientos.',
    image: 'blanqueria',
    icon: 'basin',
    message: `${GREETING} Quiero pedir la limpieza de cortinas.`,
  },
  {
    slug: 'valet-de-ropa',
    name: 'Valet de ropa',
    short: 'La ropa de todos los días, limpia, seca y doblada.',
    image: 'toallas',
    icon: 'washer',
    message: `${GREETING} Quiero pedir el servicio de valet de ropa.`,
  },
];

// TODO: confirmar plazos, zonas y costo del retiro con el cliente.
export const FAQ = [
  {
    q: '¿Hacen retiro y entrega a domicilio?',
    a: 'Sí. Pedilo por WhatsApp con tu dirección y coordinamos el día y horario de retiro y de entrega.',
  },
  {
    q: '¿Cuánto tarda?',
    a: 'La mayoría de las prendas están listas en 48 a 72 horas hábiles. Te avisamos por WhatsApp cuando está lista.',
  },
  {
    q: '¿Cómo sé el precio?',
    a: 'Te lo pasamos por WhatsApp antes de empezar. Si nos mandás una foto de la prenda, es más rápido.',
  },
  {
    q: '¿Trabajan con empresas y alojamientos?',
    a: 'Sí. Retiro y entrega programados para blanquería, uniformes y mantelería, con facturación mensual.',
  },
];

/** Mensaje de WhatsApp según la página en la que está la persona (header, botón flotante y footer). */
export function whatsappMessageFor(pathname: string) {
  const service = SERVICES.find((s) => pathname === `/servicios/${s.slug}`);
  if (service) return service.message;
  if (pathname === DELIVERY.href) return `${GREETING} Quiero pedir un retiro a domicilio.`;
  if (pathname === '/servicios') return `${GREETING} Quiero hacer un pedido.`;
  if (LEGAL_PAGES.some((l) => l.href === pathname)) return `${GREETING} Tengo una consulta sobre la información legal de la web.`;
  return `${GREETING} Quiero pedir un retiro a domicilio.`;
}

export const waLink = (message: string) =>
  `https://wa.me/${SITE.whatsapp}?text=${encodeURIComponent(message)}`;

/** Título SEO: suma la marca solo si entra en ~60 caracteres. */
export const seoTitle = (title: string) => {
  const full = `${title} | ${SITE.name}`;
  return full.length <= 62 ? full : title;
};

export const absoluteUrl = (path = '/') => new URL(path, SITE.url).toString();
