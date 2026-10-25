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
  tagline: 'Cuidamos tu ropa como si fuera nuestra.',
  description:
    'Tintorería en Mar del Plata: limpieza en seco, acolchados, camisas, cortinas y prendas delicadas. Precio antes de dejarla y aviso por WhatsApp.',
  // TODO: número real en formato internacional sin + ni espacios (ej. 5492235551234)
  whatsapp: '5492230000000',
  phoneDisplay: '(223) 000-0000', // TODO
  email: 'hola@tintoreriaconstitucion.com.ar', // TODO
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

export const NAV = [
  { href: '/servicios', label: 'Servicios' },
  { href: '/#como-funciona', label: 'Cómo funciona' },
  { href: '/#cuidado', label: 'Cuidado' },
  { href: '/#preguntas', label: 'Preguntas' },
  { href: '/#contacto', label: 'Contacto' },
] as const;

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
    slug: 'limpieza-en-seco',
    name: 'Limpieza en seco',
    short: 'Trajes, sacos, tapados y vestidos que no van al lavarropas. Sin encoger, sin perder forma.',
    image: 'traje',
    icon: 'jacket',
    message: 'Hola! Quiero consultar por limpieza en seco.',
  },
  {
    slug: 'acolchados-y-frazadas',
    name: 'Acolchados y frazadas',
    short: 'Plumón, vellón o sintético. Lavado a fondo y secado completo para que vuelvan esponjosos.',
    image: 'acolchados',
    icon: 'towels',
    message: 'Hola! Quiero consultar por lavado de acolchados.',
  },
  {
    slug: 'camisas',
    name: 'Camisas y planchado',
    short: 'Lavadas y planchadas a mano, cuello y puños firmes. Entregadas en percha.',
    image: 'camisas',
    icon: 'shirt',
    message: 'Hola! Quiero consultar por lavado y planchado de camisas.',
  },
  {
    slug: 'camperas-y-abrigos',
    name: 'Camperas y abrigos',
    short: 'Camperas de pluma, paño, gamuza sintética e impermeables. Cuidamos rellenos y terminaciones.',
    image: 'saco-lana',
    icon: 'hanger',
    message: 'Hola! Quiero consultar por limpieza de camperas o abrigos.',
  },
  {
    slug: 'cortinas-y-blanqueria',
    name: 'Cortinas y blanquería',
    short: 'Cortinas, manteles, sábanas y almohadones. Para casas, alquileres temporarios y hoteles.',
    image: 'blanqueria',
    icon: 'basin',
    message: 'Hola! Quiero consultar por lavado de cortinas o blanquería.',
  },
  {
    slug: 'prendas-delicadas',
    name: 'Prendas delicadas y de fiesta',
    short: 'Vestidos, seda, lana fina y bordados. Revisamos etiqueta y fibra antes de tocarlas.',
    image: 'control-prenda',
    icon: 'spray',
    message: 'Hola! Quiero consultar por una prenda delicada.',
  },
];

export const FAQ = [
  {
    q: '¿Cuánto tarda la limpieza en seco?',
    // TODO: confirmar plazos reales con el cliente
    a: 'La mayoría de las prendas están listas en 48 a 72 horas hábiles. Acolchados y cortinas pueden llevar unos días más según el tamaño. Cuando está lista te avisamos por WhatsApp.',
  },
  {
    q: '¿Cómo sé cuánto me va a salir?',
    a: 'Mandanos una foto por WhatsApp con la prenda y la etiqueta y te pasamos el precio antes de que la traigas. Sin sorpresas al retirar.',
  },
  {
    q: '¿Sacan todas las manchas?',
    a: 'Tratamos cada mancha según la fibra y el origen. La mayoría salen; algunas viejas o con calor encima pueden quedar atenuadas. Si vemos un riesgo para la prenda te consultamos antes de seguir.',
  },
  {
    q: '¿Puedo lavar un acolchado de plumas?',
    a: 'Sí. Usamos un ciclo suave y un secado largo y completo, que es lo que evita que la pluma se apelmace o quede con olor a humedad.',
  },
  {
    q: '¿Hacen retiro y entrega a domicilio?',
    // TODO: confirmar si el servicio existe y en qué zonas
    a: 'Consultanos por WhatsApp: coordinamos según la zona y el volumen.',
  },
  {
    q: '¿Trabajan con empresas, hoteles o alquileres temporarios?',
    a: 'Sí. Armamos un circuito fijo de retiro y entrega para blanquería, uniformes y mantelería, con facturación mensual.',
  },
];

export const waLink = (message: string) =>
  `https://wa.me/${SITE.whatsapp}?text=${encodeURIComponent(message)}`;

/** Título SEO: suma la marca solo si entra en ~60 caracteres. */
export const seoTitle = (title: string) => {
  const full = `${title} | ${SITE.name}`;
  return full.length <= 62 ? full : title;
};

export const absoluteUrl = (path = '/') => new URL(path, SITE.url).toString();
