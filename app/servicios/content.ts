// Contenido de cada página de servicio (/servicios/[slug]).
// Textos cortos y orientados a pedir: qué incluye el servicio y botón de pedido.
// El retiro a domicilio se menciona como opción, no como el eje de la página.
// Una búsqueda principal por página: está en el title, el H1 y el lead.
// Los títulos (h1 y h1Thin) van sin punto final.

export type ServiceContent = {
  slug: string;
  /** búsqueda principal a la que apunta la página */
  keyword: string;
  metaTitle: string;
  metaDescription: string;
  eyebrow: string;
  h1: string;
  h1Thin: string;
  lead: string;
  image: string;
  /** descripción breve para la página (ayuda al SEO): qué es, para quién, con retiro a domicilio */
  description: string;
  /** qué se limpia, en frases cortas */
  items: string[];
  faqs: { q: string; a: string }[];
  related: string[];
};

// TODO: confirmar plazos con el cliente (se repiten en FAQ de site.ts).
export const SERVICE_CONTENT: ServiceContent[] = [
  {
    slug: 'limpieza-de-trajes',
    keyword: 'limpieza de trajes en Mar del Plata',
    metaTitle: 'Limpieza de trajes en Mar del Plata',
    metaDescription:
      'Limpieza de trajes, sacos, tapados y pantalones de vestir en Mar del Plata. Planchados, en percha y con funda. Pedí por WhatsApp.',
    eyebrow: 'Limpieza de trajes · Mar del Plata',
    h1: 'Limpieza de trajes',
    h1Thin: 'planchados y en percha',
    lead: 'Trajes, sacos y tapados limpios, sin brillos y con su forma original. Te los entregamos planchados, en percha y con funda.',
    image: 'traje',
    description:
      'La limpieza de trajes en Tintorería Constitución deja tus sacos, tapados y pantalones de vestir limpios, sin brillos y con su forma original. Cada prenda se entrega planchada, en percha y con funda, lista para tu próxima reunión o evento. Pedila por WhatsApp y, si te queda más cómodo, consultá por el retiro a domicilio.',
    items: ['Trajes y sacos', 'Tapados y abrigos de paño', 'Pantalones de vestir', 'Chalecos y polleras', 'Sweaters y tejidos finos', 'Corbatas y pañuelos'],
    faqs: [
      { q: '¿Cuánto tarda?', a: 'Entre 48 y 72 horas hábiles. Te avisamos por WhatsApp cuando está listo.' },
      { q: '¿Me lo entregan planchado?', a: 'Sí, planchado y en percha con funda.' },
      { q: '¿Lo pueden retirar de mi casa?', a: 'En zonas seleccionadas de Mar del Plata, sí. Pasanos tu dirección por WhatsApp y te confirmamos.' },
    ],
    related: ['limpieza-de-camisas', 'limpieza-de-camperas', 'limpieza-de-prendas-delicadas'],
  },
  {
    slug: 'limpieza-de-acolchados',
    keyword: 'limpieza de acolchados en Mar del Plata',
    metaTitle: 'Limpieza de acolchados en Mar del Plata',
    metaDescription:
      'Limpieza de acolchados de pluma y sintéticos, frazadas y mantas en Mar del Plata. Secos, esponjosos y sin olor a humedad. Pedí por WhatsApp.',
    eyebrow: 'Limpieza de acolchados · Mar del Plata',
    h1: 'Limpieza de acolchados',
    h1Thin: 'secos y esponjosos',
    lead: 'Acolchados, frazadas y mantas limpios y completamente secos, listos para usar o para guardar hasta el próximo invierno.',
    image: 'acolchados',
    description:
      'La limpieza de acolchados en Mar del Plata necesita un secado completo: la humedad de la costa queda en el relleno y genera olor. Limpiamos acolchados de pluma, plumón y sintéticos, frazadas y mantas, y te los devolvemos secos, esponjosos y listos para usar o guardar. También podés consultar por el retiro a domicilio.',
    items: ['Acolchados de pluma y plumón', 'Acolchados sintéticos y de vellón', 'Frazadas y mantas', 'Cubrecamas y quilts', 'Almohadas', 'Fundas nórdicas'],
    faqs: [
      { q: '¿Limpian acolchados de plumas?', a: 'Sí, y te los devolvemos completamente secos, sin olor a humedad.' },
      { q: '¿Cuánto tarda?', a: 'Unos días más que una prenda común por el secado. Te avisamos por WhatsApp cuando está listo.' },
      { q: '¿Lo pueden retirar de mi casa?', a: 'En zonas seleccionadas de Mar del Plata, sí. Pasanos tu dirección por WhatsApp y te confirmamos.' },
    ],
    related: ['limpieza-de-cortinas', 'valet-de-ropa', 'limpieza-de-camperas'],
  },
  {
    slug: 'limpieza-de-camisas',
    keyword: 'limpieza y planchado de camisas en Mar del Plata',
    metaTitle: 'Limpieza y planchado de camisas en Mar del Plata',
    metaDescription:
      'Limpieza y planchado de camisas en Mar del Plata. Cuello y puños firmes, entregadas en percha. Precio por cantidad. Pedí por WhatsApp.',
    eyebrow: 'Limpieza de camisas · Mar del Plata',
    h1: 'Limpieza de camisas',
    h1Thin: 'planchadas y en percha',
    lead: 'Camisas limpias y planchadas, con cuello y puños firmes y sin marcas de plancha. Ideales para la semana de trabajo.',
    image: 'camisas',
    description:
      'Limpieza y planchado de camisas para tu semana de trabajo: cuello y puños firmes, sin marcas de plancha y entregadas en percha. Atendemos pedidos sueltos y por cantidad para oficinas, consultorios y comercios de Mar del Plata, con opción de retiro y entrega a domicilio.',
    items: ['Camisas de vestir', 'Camisas de lino', 'Blusas', 'Chombas y remeras de uniforme', 'Solo planchado', 'Camisas por cantidad'],
    faqs: [
      { q: '¿Hacen solo planchado?', a: 'Sí. Si ya las lavaste, las planchamos y te las entregamos en percha.' },
      { q: '¿Tienen precio por cantidad?', a: 'Sí, para varias camisas o pedidos semanales.' },
      { q: '¿Las pueden retirar de mi casa u oficina?', a: 'En zonas seleccionadas de Mar del Plata, sí. Pasanos tu dirección por WhatsApp y te confirmamos.' },
    ],
    related: ['limpieza-de-trajes', 'valet-de-ropa', 'limpieza-de-prendas-delicadas'],
  },
  {
    slug: 'limpieza-de-camperas',
    keyword: 'limpieza de camperas en Mar del Plata',
    metaTitle: 'Limpieza de camperas en Mar del Plata',
    metaDescription:
      'Limpieza de camperas de pluma, inflables, de paño e impermeables en Mar del Plata. Listas para el frío y en percha. Pedí por WhatsApp.',
    eyebrow: 'Limpieza de camperas · Mar del Plata',
    h1: 'Limpieza de camperas',
    h1Thin: 'listas para el invierno',
    lead: 'Camperas de pluma, paño, gamuza sintética e impermeables, limpias, con el relleno suelto y entregadas en percha.',
    image: 'saco-lana',
    description:
      'Limpieza de camperas de pluma, inflables, de paño, impermeables y de gamuza sintética en Mar del Plata. Las dejamos limpias, con el relleno suelto y listas para el frío, y te las entregamos en percha. Si te queda más cómodo, consultá por el retiro a domicilio.',
    items: ['Camperas de pluma e inflables', 'Tapados y abrigos de paño', 'Impermeables y rompevientos', 'Gamuza y cuero sintético', 'Parkas con capucha', 'Ropa de nieve'],
    faqs: [
      { q: '¿Limpian camperas de pluma?', a: 'Sí, y te las devolvemos secas y con el relleno suelto.' },
      { q: '¿Cuánto tarda?', a: 'Entre 48 y 72 horas hábiles. Te avisamos por WhatsApp cuando está lista.' },
      { q: '¿La pueden retirar de mi casa?', a: 'En zonas seleccionadas de Mar del Plata, sí. Pasanos tu dirección por WhatsApp y te confirmamos.' },
    ],
    related: ['limpieza-de-trajes', 'limpieza-de-acolchados', 'limpieza-de-prendas-delicadas'],
  },
  {
    slug: 'limpieza-de-prendas-delicadas',
    keyword: 'limpieza de vestidos de fiesta en Mar del Plata',
    metaTitle: 'Limpieza de prendas delicadas en Mar del Plata',
    metaDescription:
      'Limpieza de vestidos de fiesta, de novia, seda, lana fina y bordados en Mar del Plata. Revisión detalle por detalle y entrega en funda.',
    eyebrow: 'Prendas delicadas · Mar del Plata',
    h1: 'Limpieza de prendas delicadas',
    h1Thin: 'y vestidos de fiesta',
    lead: 'Vestidos de fiesta y de novia, seda, encaje y bordados. Limpios, cuidados y entregados en funda, listos para usar o guardar.',
    image: 'control-prenda',
    description:
      'Limpieza de vestidos de fiesta, vestidos de novia y prendas delicadas de seda, satén, encaje o lana fina. Revisamos cada detalle, pedrería y bordados incluidos, y te entregamos la prenda en funda para usarla o guardarla. En Mar del Plata, con opción de retiro y entrega a domicilio.',
    items: ['Vestidos de fiesta', 'Vestidos de novia', 'Seda y satén', 'Encajes y bordados', 'Lana fina y cashmere', 'Trajes de ceremonia'],
    faqs: [
      { q: '¿Limpian vestidos con pedrería?', a: 'Sí. Si algún aplique está flojo, te lo avisamos al recibirlo.' },
      { q: '¿Con cuánta anticipación lo traigo para un evento?', a: 'Te recomendamos una semana antes.' },
      { q: '¿Lo pueden retirar de mi casa?', a: 'En zonas seleccionadas de Mar del Plata, sí. Pasanos tu dirección por WhatsApp y te confirmamos.' },
    ],
    related: ['limpieza-de-trajes', 'limpieza-de-camisas', 'limpieza-de-camperas'],
  },
  {
    slug: 'limpieza-de-cortinas',
    keyword: 'limpieza de cortinas en Mar del Plata',
    metaTitle: 'Limpieza de cortinas en Mar del Plata',
    metaDescription:
      'Limpieza de cortinas, manteles, sábanas y almohadones en Mar del Plata. Para casas, alquileres temporarios y hoteles. Pedí por WhatsApp.',
    eyebrow: 'Limpieza de cortinas · Mar del Plata',
    h1: 'Limpieza de cortinas',
    h1Thin: 'y blanquería',
    lead: 'Cortinas, manteles, sábanas y almohadones limpios y planchados. Para tu casa o por volumen para alquileres temporarios, hoteles y restaurantes.',
    image: 'blanqueria',
    description:
      'Limpieza de cortinas, manteles, sábanas, toallas y almohadones para casas, alquileres temporarios, hoteles y restaurantes de Mar del Plata. Te las devolvemos limpias, planchadas y listas para colgar o usar. Para negocios, armamos un retiro programado con facturación mensual.',
    items: ['Cortinas de tela y voile', 'Cortinas blackout', 'Manteles y servilletas', 'Sábanas y fundas', 'Toallas y toallones', 'Almohadones y fundas de sillón'],
    faqs: [
      // TODO: confirmar si ofrecen descolgado y colocación de cortinas
      { q: '¿Las retiran de mi casa?', a: 'En zonas seleccionadas de Mar del Plata, sí. Descolgalas, pasanos tu dirección por WhatsApp y te confirmamos.' },
      { q: '¿Trabajan con alquileres temporarios y hoteles?', a: 'Sí, con retiro y entrega programados y facturación mensual.' },
      { q: '¿Cuánto tarda?', a: 'Según el volumen, entre 3 y 5 días hábiles. Te avisamos por WhatsApp.' },
    ],
    related: ['limpieza-de-acolchados', 'valet-de-ropa', 'limpieza-de-camisas'],
  },
  {
    slug: 'valet-de-ropa',
    keyword: 'lavandería en Mar del Plata',
    metaTitle: 'Lavandería y valet de ropa en Mar del Plata',
    metaDescription:
      'Lavandería en Mar del Plata: tu ropa de todos los días limpia, seca y doblada, lista para guardar. Valet de ropa. Pedí por WhatsApp.',
    eyebrow: 'Lavandería · Mar del Plata',
    h1: 'Lavandería y valet de ropa',
    h1Thin: 'limpia, seca y doblada',
    lead: 'Tu ropa de todos los días, lista para guardar. Sin lavarropas, sin tender y sin esperar: la lavamos, la secamos y te la devolvemos doblada.',
    image: 'toallas',
    description:
      'Nuestro servicio de lavandería en Mar del Plata, también llamado valet de ropa, es la forma más simple de tener la ropa de todos los días al día: la lavamos, la secamos y te la entregamos doblada y lista para guardar. Ideal si no tenés tiempo, lavarropas o lugar para tender. Traela al local o consultá por el retiro a domicilio.',
    items: ['Ropa de todos los días', 'Jeans y pantalones', 'Ropa deportiva', 'Sábanas y fundas', 'Toallas y toallones', 'Ropa de trabajo'],
    // TODO: confirmar si incluye planchado y cómo se cobra (por bolsa, kilo o carga)
    faqs: [
      { q: '¿Qué incluye?', a: 'Limpieza, secado y doblado. El planchado se suma si lo pedís.' },
      { q: '¿Cuánto tarda?', a: 'Entre 24 y 48 horas hábiles, según el volumen.' },
      { q: '¿Es lo mismo que una lavandería?', a: 'Sí. Es el lavado de la ropa de todos los días, con secado y doblado, además de la tintorería para las prendas que necesitan otro cuidado.' },
      { q: '¿La pueden retirar de mi casa?', a: 'En zonas seleccionadas de Mar del Plata, sí. Pasanos tu dirección por WhatsApp y te confirmamos.' },
    ],
    related: ['limpieza-de-camisas', 'limpieza-de-acolchados', 'limpieza-de-cortinas'],
  },
];

export const getServiceContent = (slug: string) => SERVICE_CONTENT.find((s) => s.slug === slug);
