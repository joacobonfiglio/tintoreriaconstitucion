// Fuente única de datos del negocio. Todo lo que dice la web sale de acá:
// textos de contacto, JSON-LD, sitemap, llms.txt y mensajes de WhatsApp.
// Los campos con TODO esperan el dato real del cliente; no inventar.

/** Dominio principal de la web. Define canonical, sitemap, robots y Open Graph. */
const DOMAIN = 'https://tintoreriaconstitucion.com';

function siteUrl() {
  const explicit = process.env.NEXT_PUBLIC_SITE_URL;
  if (explicit) return explicit.replace(/\/$/, '');
  // En las vistas previas de Vercel se usa su propia URL (salen con noindex).
  if (process.env.VERCEL_ENV === 'preview' && process.env.VERCEL_URL) return `https://${process.env.VERCEL_URL}`;
  return DOMAIN;
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
  tagline: 'Tintorería y lavandería en Mar del Plata',
  description:
    'Tintorería y lavandería en Mar del Plata: trajes, acolchados, camisas, cortinas, alfombras, zapatillas y arreglos de ropa. Pedí por WhatsApp.',
  // Formato internacional sin + ni espacios: 54 9 + característica + número.
  whatsapp: '5492235655898',
  phoneDisplay: '223 565-5898',
  email: '', // TODO: email de contacto (vacío = no se publica)
  address: {
    street: 'Av. Constitución 5491',
    neighborhood: 'Constitución',
    postalCode: '7600', // TODO: confirmar CP
  },
  // TODO: coordenadas exactas del local (de la ficha de Google). Vacío = no se publica en el JSON-LD.
  geo: null as { lat: number; lng: number } | null,
  // TODO: horario real. Formato 24 h.
  hours: [
    { days: ['Mo', 'Tu', 'We', 'Th', 'Fr'], label: 'Lunes a viernes', opens: '08:30', closes: '19:30' },
    { days: ['Sa'], label: 'Sábados', opens: '09:00', closes: '13:00' },
  ],
  mapsUrl: 'https://www.google.com/maps/search/?api=1&query=Av.+Constituci%C3%B3n+5491%2C+Mar+del+Plata', // TODO: reemplazar por el link de la ficha de Google
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

// Menú del header. Corto a propósito: el botón de WhatsApp es la acción principal.
export const NAV = [
  { href: '/servicios', label: 'Servicios' },
  { href: '/retiro-a-domicilio', label: 'Retiro a domicilio' },
  { href: '/empresas', label: 'Empresas' },
  { href: '/guias', label: 'Guías' },
] as const;

// Enlaces del footer: lo que no entra en el header sigue enlazado desde acá.
export const FOOTER_NAV = [
  { href: '/servicios', label: 'Servicios' },
  { href: '/retiro-a-domicilio', label: 'Retiro a domicilio' },
  { href: '/zonas', label: 'Zonas de retiro' },
  { href: '/empresas', label: 'Empresas y alojamientos' },
  { href: '/guias', label: 'Guías y consejos' },
  { href: '/#preguntas', label: 'Preguntas frecuentes' },
  { href: '/#contacto', label: 'Contacto' },
] as const;

// Retiro y entrega a domicilio: una opción más del servicio, disponible en algunas zonas.
// TODO: confirmar las zonas exactas, días/horarios de retiro y si tiene costo.
export const DELIVERY = {
  href: '/retiro-a-domicilio',
  title: 'Retiro y entrega a domicilio',
  short: 'Si te queda más cómodo, pasamos a buscar tu ropa y te la devolvemos limpia en tu casa o tu trabajo.',
  area: 'Mar del Plata',
  /** Barrios donde llega el retiro. También van al JSON-LD como areaServed. */
  areas: ['Barrio Constitución', 'Centro de Mar del Plata'],
  /** Frase corta de cobertura. Se repite en la banda, la página de retiro y las preguntas. */
  zones: 'Retiramos y entregamos en el barrio Constitución y el centro de Mar del Plata.',
  /** Versión larga, para los textos donde hay lugar para invitar a consultar. */
  zonesLong:
    'Retiramos y entregamos en el barrio Constitución y el centro de Mar del Plata. Si estás cerca, pasanos tu dirección por WhatsApp y te confirmamos.',
  steps: [
    { icon: 'whatsapp', title: 'Pedilo por WhatsApp', text: 'Decinos qué prendas y tu dirección.' },
    { icon: 'truck', title: 'Confirmamos la zona', text: 'Constitución y centro: coordinamos día y horario.' },
    { icon: 'check', title: 'Te la devolvemos lista', text: 'Limpia, planchada y en percha.' },
  ],
} as const;

export type Service = {
  slug: string;
  name: string;
  short: string;
  image: string;
  /** Descripción de la foto (alt). Fuente única: la usan el perchero de la home y la página del servicio. */
  imageAlt: string;
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
  | 'spray'
  | 'scissors'
  | 'sofa'
  | 'shoe';

// Orden = prioridad comercial y de búsqueda (lo más buscado primero).
export const SERVICES: Service[] = [
  {
    slug: 'limpieza-de-trajes',
    name: 'Limpieza de trajes',
    short: 'Trajes, sacos, tapados y pantalones de vestir. Planchados y en percha.',
    image: 'traje',
    imageAlt: 'Detalle de un saco de traje azul oscuro con botón',
    icon: 'jacket',
    message: `${GREETING} Quiero pedir la limpieza de un traje.`,
  },
  {
    slug: 'limpieza-de-acolchados',
    name: 'Limpieza de acolchados',
    short: 'Acolchados de pluma o sintéticos, frazadas y mantas. Secos y esponjosos.',
    image: 'acolchados',
    imageAlt: 'Tres acolchados enrollados en gris, celeste y rosa',
    icon: 'towels',
    message: `${GREETING} Quiero pedir la limpieza de un acolchado.`,
  },
  {
    slug: 'limpieza-de-camisas',
    name: 'Limpieza de camisas',
    short: 'Limpias y planchadas, con cuello y puños firmes. En percha.',
    image: 'camisas',
    imageAlt: 'Camisas celestes y blancas colgadas en perchas de madera',
    icon: 'shirt',
    message: `${GREETING} Quiero pedir la limpieza y planchado de camisas.`,
  },
  {
    slug: 'limpieza-de-camperas',
    name: 'Limpieza de camperas',
    short: 'Camperas de pluma, paño e impermeables. Listas para usar.',
    image: 'saco-lana',
    imageAlt: 'Detalle de un abrigo de paño color camel',
    icon: 'hanger',
    message: `${GREETING} Quiero pedir la limpieza de una campera.`,
  },
  {
    slug: 'limpieza-de-prendas-delicadas',
    name: 'Limpieza de prendas delicadas',
    short: 'Vestidos de fiesta y de novia, seda, lana fina y bordados.',
    image: 'control-prenda',
    imageAlt: 'Mujer revisando un vestido claro dentro de su funda',
    icon: 'spray',
    message: `${GREETING} Quiero pedir la limpieza de una prenda delicada.`,
  },
  {
    slug: 'limpieza-de-cortinas',
    name: 'Limpieza de cortinas',
    short: 'Cortinas, manteles, sábanas y almohadones. Para casas y alojamientos.',
    image: 'blanqueria',
    imageAlt: 'Toallas y blanquería blanca dobladas y apiladas junto a una planta',
    icon: 'basin',
    message: `${GREETING} Quiero pedir la limpieza de cortinas.`,
  },
  {
    slug: 'valet-de-ropa',
    name: 'Lavandería y valet de ropa',
    short: 'La ropa de todos los días, limpia, seca y doblada.',
    image: 'toallas',
    imageAlt: 'Ropa limpia doblada y apilada: jeans, remeras y toallas',
    icon: 'washer',
    message: `${GREETING} Quiero pedir el servicio de lavandería y valet de ropa.`,
  },
  {
    slug: 'limpieza-de-alfombras',
    name: 'Limpieza de alfombras y tapizados',
    short: 'Alfombras, carpetas y tapizados de sillones y sillas. Sin olor y secos.',
    image: 'sala',
    imageAlt: 'Sillón claro y mesa baja en una sala, con percheros de ropa al fondo',
    icon: 'sofa',
    message: `${GREETING} Quiero pedir la limpieza de una alfombra o un tapizado.`,
  },
  {
    // TODO: falta una foto de zapatillas. Mientras tanto usa la del taller.
    slug: 'limpieza-de-zapatillas',
    name: 'Limpieza de zapatillas',
    short: 'Lona, running y cuero sintético. Limpias por fuera, por dentro y en la suela.',
    image: 'maquinas',
    imageAlt: 'Lavarropas industriales de carga frontal en el taller',
    icon: 'shoe',
    message: `${GREETING} Quiero pedir la limpieza de unas zapatillas.`,
  },
  {
    slug: 'arreglos-de-ropa',
    name: 'Arreglos y costura',
    short: 'Dobladillos, cierres, botones y ajustes de talle. La prenda que ya tenés, usable de nuevo.',
    image: 'manos-tela',
    imageAlt: 'Manos revisando una tela celeste sobre una mesa de trabajo',
    icon: 'scissors',
    message: `${GREETING} Quiero consultar por un arreglo de ropa.`,
  },
];

// TODO: confirmar plazos, zonas y costo del retiro con el cliente.
export const FAQ = [
  {
    q: '¿Qué servicios hacen?',
    a: 'Tintorería y lavandería: limpieza de trajes, acolchados, camisas, camperas, cortinas y prendas delicadas, más la ropa de todos los días limpia, seca y doblada. También limpiamos alfombras y tapizados, zapatillas, y hacemos arreglos y costura.',
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
    q: '¿Dónde están?',
    a: `${SITE.address.street}, barrio ${SITE.address.neighborhood}, ${SITE.city}. Atendemos ${SITE.hours.map((h) => `${h.label.toLowerCase()} de ${h.opens} a ${h.closes}`).join(' y ')}.`,
  },
  {
    q: '¿Hacen retiro y entrega a domicilio?',
    a: 'Sí, en el barrio Constitución y el centro de Mar del Plata. Pasanos tu dirección por WhatsApp y coordinamos el día y el horario.',
  },
  {
    q: '¿Trabajan con empresas y alojamientos?',
    a: 'Sí. Blanquería, uniformes y mantelería con retiro y entrega programados y facturación mensual.',
  },
];

/** Mensaje de WhatsApp según la página en la que está la persona (header, botón flotante y footer). */
export function whatsappMessageFor(pathname: string) {
  const service = SERVICES.find((s) => pathname === `/servicios/${s.slug}`);
  if (service) return service.message;
  if (pathname === DELIVERY.href) return `${GREETING} Quiero consultar por el retiro a domicilio.`;
  if (pathname === '/servicios') return `${GREETING} Quiero hacer un pedido.`;
  if (LEGAL_PAGES.some((l) => l.href === pathname)) return `${GREETING} Tengo una consulta sobre la información legal de la web.`;
  return `${GREETING} Quiero hacer un pedido.`;
}

export const serviceBySlug = (slug: string) => SERVICES.find((s) => s.slug === slug);

export const waLink = (message: string) =>
  `https://wa.me/${SITE.whatsapp}?text=${encodeURIComponent(message)}`;

/** Título SEO: suma la marca solo si entra en ~60 caracteres. */
export const seoTitle = (title: string) => {
  const full = `${title} | ${SITE.name}`;
  return full.length <= 62 ? full : title;
};

export const absoluteUrl = (path = '/') => new URL(path, SITE.url).toString();
