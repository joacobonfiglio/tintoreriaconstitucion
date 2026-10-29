// Contenido de cada página de servicio (/servicios/[slug]).
// Textos cortos y orientados a pedir: qué incluye, retiro a domicilio y botón de pedido.
// Una búsqueda principal por página: está en el title, el H1 y el lead.

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
  imageAlt: string;
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
      'Limpieza de trajes, sacos, tapados y pantalones de vestir en Mar del Plata. Retiro y entrega a domicilio. Pedí por WhatsApp.',
    eyebrow: 'Limpieza de trajes · Mar del Plata',
    h1: 'Limpieza de trajes',
    h1Thin: 'con retiro a domicilio.',
    lead: 'Trajes, sacos y tapados limpios, planchados y en percha. Los retiramos y te los devolvemos listos para usar.',
    image: 'traje',
    imageAlt: 'Detalle de un saco azul oscuro con botón',
    items: ['Trajes y sacos', 'Tapados y abrigos de paño', 'Pantalones de vestir', 'Chalecos y polleras', 'Sweaters y tejidos finos', 'Corbatas y pañuelos'],
    faqs: [
      { q: '¿Cuánto tarda?', a: 'Entre 48 y 72 horas hábiles. Te avisamos por WhatsApp cuando está listo.' },
      { q: '¿Me lo entregan planchado?', a: 'Sí, planchado y en percha con funda.' },
      { q: '¿Lo pueden retirar de mi casa?', a: 'Sí. Pedilo por WhatsApp y coordinamos día y horario.' },
    ],
    related: ['limpieza-de-camisas', 'limpieza-de-camperas', 'limpieza-de-prendas-delicadas'],
  },
  {
    slug: 'limpieza-de-acolchados',
    keyword: 'limpieza de acolchados en Mar del Plata',
    metaTitle: 'Limpieza de acolchados en Mar del Plata',
    metaDescription:
      'Limpieza de acolchados de pluma y sintéticos, frazadas y mantas en Mar del Plata. Secos y esponjosos. Retiro a domicilio por WhatsApp.',
    eyebrow: 'Limpieza de acolchados · Mar del Plata',
    h1: 'Limpieza de acolchados',
    h1Thin: 'secos y esponjosos.',
    lead: 'Acolchados, frazadas y mantas limpios y completamente secos. Los retiramos de tu casa y te los devolvemos listos para usar o guardar.',
    image: 'acolchados',
    imageAlt: 'Tres acolchados enrollados en gris, celeste y rosa',
    items: ['Acolchados de pluma y plumón', 'Acolchados sintéticos y de vellón', 'Frazadas y mantas', 'Cubrecamas y quilts', 'Almohadas', 'Fundas nórdicas'],
    faqs: [
      { q: '¿Limpian acolchados de plumas?', a: 'Sí, y te los devolvemos completamente secos, sin olor a humedad.' },
      { q: '¿Cuánto tarda?', a: 'Unos días más que una prenda común por el secado. Te avisamos por WhatsApp cuando está listo.' },
      { q: '¿Lo pueden retirar de mi casa?', a: 'Sí. Pedilo por WhatsApp y coordinamos día y horario.' },
    ],
    related: ['limpieza-de-cortinas', 'valet-de-ropa', 'limpieza-de-camperas'],
  },
  {
    slug: 'limpieza-de-camisas',
    keyword: 'limpieza y planchado de camisas en Mar del Plata',
    metaTitle: 'Limpieza y planchado de camisas en Mar del Plata',
    metaDescription:
      'Limpieza y planchado de camisas en Mar del Plata. Cuello y puños firmes, entregadas en percha. Retiro a domicilio y precio por cantidad.',
    eyebrow: 'Limpieza de camisas · Mar del Plata',
    h1: 'Limpieza de camisas',
    h1Thin: 'planchadas y en percha.',
    lead: 'Camisas limpias y planchadas, con cuello y puños firmes. Ideal para la semana de trabajo: las retiramos y te las devolvemos listas.',
    image: 'camisas',
    imageAlt: 'Camisas celestes y blancas colgadas en perchas de madera',
    items: ['Camisas de vestir', 'Camisas de lino', 'Blusas', 'Chombas y remeras de uniforme', 'Solo planchado', 'Camisas por cantidad'],
    faqs: [
      { q: '¿Hacen solo planchado?', a: 'Sí. Si ya las lavaste, las planchamos y te las entregamos en percha.' },
      { q: '¿Tienen precio por cantidad?', a: 'Sí, para varias camisas o pedidos semanales.' },
      { q: '¿Las pueden retirar de mi casa u oficina?', a: 'Sí. Pedilo por WhatsApp y coordinamos día y horario.' },
    ],
    related: ['limpieza-de-trajes', 'valet-de-ropa', 'limpieza-de-prendas-delicadas'],
  },
  {
    slug: 'limpieza-de-camperas',
    keyword: 'limpieza de camperas en Mar del Plata',
    metaTitle: 'Limpieza de camperas en Mar del Plata',
    metaDescription:
      'Limpieza de camperas de pluma, inflables, de paño e impermeables en Mar del Plata. Retiro y entrega a domicilio. Pedí por WhatsApp.',
    eyebrow: 'Limpieza de camperas · Mar del Plata',
    h1: 'Limpieza de camperas',
    h1Thin: 'listas para el invierno.',
    lead: 'Camperas de pluma, paño, gamuza sintética e impermeables, limpias y listas para usar. Las retiramos y te las devolvemos en percha.',
    image: 'saco-lana',
    imageAlt: 'Detalle de un abrigo de paño color camel',
    items: ['Camperas de pluma e inflables', 'Tapados y abrigos de paño', 'Impermeables y rompevientos', 'Gamuza y cuero sintético', 'Parkas con capucha', 'Ropa de nieve'],
    faqs: [
      { q: '¿Limpian camperas de pluma?', a: 'Sí, y te las devolvemos secas y con el relleno suelto.' },
      { q: '¿Cuánto tarda?', a: 'Entre 48 y 72 horas hábiles. Te avisamos por WhatsApp cuando está lista.' },
      { q: '¿La pueden retirar de mi casa?', a: 'Sí. Pedilo por WhatsApp y coordinamos día y horario.' },
    ],
    related: ['limpieza-de-trajes', 'limpieza-de-acolchados', 'limpieza-de-prendas-delicadas'],
  },
  {
    slug: 'limpieza-de-prendas-delicadas',
    keyword: 'limpieza de vestidos de fiesta en Mar del Plata',
    metaTitle: 'Limpieza de prendas delicadas en Mar del Plata',
    metaDescription:
      'Limpieza de vestidos de fiesta, de novia, seda, lana fina y bordados en Mar del Plata. Entrega en funda. Retiro a domicilio por WhatsApp.',
    eyebrow: 'Prendas delicadas · Mar del Plata',
    h1: 'Limpieza de prendas delicadas',
    h1Thin: 'y vestidos de fiesta.',
    lead: 'Vestidos de fiesta y de novia, seda, encaje y bordados. Limpios, cuidados y entregados en funda, listos para guardar.',
    image: 'control-prenda',
    imageAlt: 'Mujer revisando un vestido claro en su funda',
    items: ['Vestidos de fiesta', 'Vestidos de novia', 'Seda y satén', 'Encajes y bordados', 'Lana fina y cashmere', 'Trajes de ceremonia'],
    faqs: [
      { q: '¿Limpian vestidos con pedrería?', a: 'Sí. Si algún aplique está flojo, te lo avisamos al recibirlo.' },
      { q: '¿Con cuánta anticipación lo traigo para un evento?', a: 'Te recomendamos una semana antes.' },
      { q: '¿Lo pueden retirar de mi casa?', a: 'Sí. Pedilo por WhatsApp y coordinamos día y horario.' },
    ],
    related: ['limpieza-de-trajes', 'limpieza-de-camisas', 'limpieza-de-camperas'],
  },
  {
    slug: 'limpieza-de-cortinas',
    keyword: 'limpieza de cortinas en Mar del Plata',
    metaTitle: 'Limpieza de cortinas en Mar del Plata',
    metaDescription:
      'Limpieza de cortinas, manteles, sábanas y almohadones en Mar del Plata. Para casas, alquileres temporarios y hoteles. Retiro a domicilio.',
    eyebrow: 'Limpieza de cortinas · Mar del Plata',
    h1: 'Limpieza de cortinas',
    h1Thin: 'y blanquería.',
    lead: 'Cortinas, manteles, sábanas y almohadones limpios y planchados. Para tu casa o por volumen para alquileres temporarios, hoteles y restaurantes.',
    image: 'blanqueria',
    imageAlt: 'Toallas blancas dobladas y apiladas junto a una planta',
    items: ['Cortinas de tela y voile', 'Cortinas blackout', 'Manteles y servilletas', 'Sábanas y fundas', 'Toallas y toallones', 'Almohadones y fundas de sillón'],
    faqs: [
      // TODO: confirmar si ofrecen descolgado y colocación de cortinas
      { q: '¿Las retiran de mi casa?', a: 'Sí. Descolgalas, pedí el retiro por WhatsApp y coordinamos día y horario.' },
      { q: '¿Trabajan con alquileres temporarios y hoteles?', a: 'Sí, con retiro y entrega programados y facturación mensual.' },
      { q: '¿Cuánto tarda?', a: 'Según el volumen, entre 3 y 5 días hábiles. Te avisamos por WhatsApp.' },
    ],
    related: ['limpieza-de-acolchados', 'valet-de-ropa', 'limpieza-de-camisas'],
  },
  {
    slug: 'valet-de-ropa',
    keyword: 'valet de ropa en Mar del Plata',
    metaTitle: 'Valet de ropa en Mar del Plata',
    metaDescription:
      'Valet de ropa en Mar del Plata: tu ropa de todos los días limpia, seca y doblada. Retiro y entrega a domicilio. Pedí por WhatsApp.',
    eyebrow: 'Valet de ropa · Mar del Plata',
    h1: 'Valet de ropa',
    h1Thin: 'limpia, seca y doblada.',
    lead: 'Tu ropa de todos los días, lista para guardar. Sin lavarropas, sin tender y sin esperar. La retiramos y te la devolvemos doblada.',
    image: 'toallas',
    imageAlt: 'Ropa limpia doblada y apilada: jeans, remeras y toallas',
    items: ['Ropa de todos los días', 'Jeans y pantalones', 'Ropa deportiva', 'Sábanas y fundas', 'Toallas y toallones', 'Ropa de trabajo'],
    // TODO: confirmar si incluye planchado y cómo se cobra (por bolsa, kilo o carga)
    faqs: [
      { q: '¿Qué incluye?', a: 'Limpieza, secado y doblado. El planchado se suma si lo pedís.' },
      { q: '¿Cuánto tarda?', a: 'Entre 24 y 48 horas hábiles, según el volumen.' },
      { q: '¿La pueden retirar de mi casa?', a: 'Sí. Pedilo por WhatsApp y coordinamos día y horario.' },
    ],
    related: ['limpieza-de-camisas', 'limpieza-de-acolchados', 'limpieza-de-cortinas'],
  },
];

export const getServiceContent = (slug: string) => SERVICE_CONTENT.find((s) => s.slug === slug);
