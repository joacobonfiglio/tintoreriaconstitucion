// Zonas donde retiramos y entregamos (/zonas/<slug>).
//
// Cada zona es una página propia, porque "tintorería en <barrio>" es una búsqueda
// distinta de "tintorería en Mar del Plata" y casi nadie la está peleando acá.
//
// IMPORTANTE: solo van zonas donde realmente llegamos. Una página de un barrio al que
// no vamos es una promesa que no se cumple, y Google las penaliza como páginas puerta.
// Para sumar una zona: copiá un objeto, cambiá el slug y escribí un `intro` propio.
// Dos zonas no pueden tener el mismo texto: ahí está todo el valor de la página.
//
// Al agregar una zona, sumala también a DELIVERY.areas en app/site.ts.

export type Zone = {
  /** Va en la URL: /zonas/<slug>. Una vez publicada no se cambia. */
  slug: string;
  /** Nombre completo, como aparece en los títulos. */
  name: string;
  /** Nombre corto, para textos corridos. */
  shortName: string;
  keyword: string;
  metaTitle: string;
  metaDescription: string;
  /** H1, sin punto final. */
  h1: string;
  h1Thin: string;
  lead: string;
  /** Párrafos propios de la zona. Lo que hace que la página no sea un molde repetido. */
  intro: string[];
  /** Para quién es, en esta zona en particular. */
  highlights: { title: string; text: string }[];
  /** true solo en la zona donde está el local. */
  hasLocal?: boolean;
  image: string;
  imageAlt: string;
  faqs: { q: string; a: string }[];
};

export const ZONES: Zone[] = [
  {
    slug: 'constitucion',
    name: 'Barrio Constitución',
    shortName: 'Constitución',
    keyword: 'tintorería en el barrio Constitución',
    metaTitle: 'Tintorería en el barrio Constitución, Mar del Plata',
    metaDescription:
      'Tintorería y lavandería en el barrio Constitución, Mar del Plata. Local en Av. Constitución 5491 y retiro a domicilio en todo el barrio. Pedí por WhatsApp.',
    h1: 'Tintorería y lavandería',
    h1Thin: 'en el barrio Constitución',
    lead: 'Es nuestro barrio: el local está sobre Av. Constitución y el retiro a domicilio llega a toda la zona. Podés acercarte caminando o pedir que pasemos.',
    hasLocal: true,
    intro: [
      'Tintorería Constitución está en Av. Constitución 5491, así que si vivís en el barrio sos, literalmente, nuestro vecino. Podés traer la ropa al local cuando te quede de paso, o pedir el retiro a domicilio y resolverlo sin moverte.',
      'Acá hacemos los dos servicios: tintorería para lo que necesita cuidado especial, como trajes, acolchados, camperas, cortinas y prendas delicadas, y lavandería para la ropa de todos los días, que te devolvemos limpia, seca y doblada.',
    ],
    highlights: [
      {
        title: 'Podés venir caminando',
        text: 'Si estás a unas cuadras, traerla al local suele ser lo más rápido: dejás la prenda, te pasamos el precio en el momento y te avisamos por WhatsApp cuando está.',
      },
      {
        title: 'Retiro el mismo día que lo pedís',
        text: 'Al ser nuestra zona, es donde más flexibilidad tenemos para coordinar el horario que te sirva.',
      },
      {
        title: 'Casas con acolchados y cortinas',
        text: 'Lo que más nos piden en el barrio: acolchados al final del invierno y cortinas de toda la casa en la misma pasada.',
      },
    ],
    image: 'local',
    imageAlt: 'Mostrador de atención de la tintorería con prendas en los percheros del fondo',
    faqs: [
      {
        q: '¿Dónde queda el local?',
        a: 'En Av. Constitución 5491, barrio Constitución, Mar del Plata.',
      },
      {
        q: '¿Hace falta pedir turno?',
        a: 'No. Venís en horario de atención, dejás la prenda y listo. Si preferís, avisanos antes por WhatsApp y te pasamos el precio estimado.',
      },
      {
        q: '¿Retiran en todo el barrio?',
        a: 'Sí. Pasanos tu dirección por WhatsApp y coordinamos el día y el horario.',
      },
    ],
  },
  {
    slug: 'centro',
    name: 'Centro de Mar del Plata',
    shortName: 'el centro',
    keyword: 'tintorería en el centro de Mar del Plata',
    metaTitle: 'Tintorería en el centro de Mar del Plata con retiro',
    metaDescription:
      'Retiro y entrega de tintorería y lavandería en el centro de Mar del Plata. Departamentos, oficinas y alquileres temporarios. Coordinalo por WhatsApp.',
    h1: 'Tintorería con retiro',
    h1Thin: 'en el centro de Mar del Plata',
    lead: 'Si vivís o trabajás en el centro, no hace falta que cruces la ciudad: pasamos a buscar tu ropa y te la devolvemos limpia donde estés.',
    intro: [
      'El centro es la otra zona donde hacemos retiro y entrega a domicilio. Coordinás el día y el horario por WhatsApp, pasamos a buscar la ropa y te la llevamos de vuelta limpia, planchada y en percha.',
      'Funciona igual para un departamento, para una oficina o para la recepción de un edificio. Si en tu horario no vas a estar, podés dejar el pedido con el encargado y avisarnos.',
    ],
    highlights: [
      {
        title: 'Departamentos sin lugar para tender',
        text: 'El valet de ropa resuelve justo eso: te devolvemos la ropa de la semana limpia, seca y doblada, sin que tengas que colgar nada.',
      },
      {
        title: 'Oficinas y camisas de la semana',
        text: 'Podés mandar las camisas por cantidad y recibirlas planchadas y en percha, listas para colgar.',
      },
      {
        title: 'Alquileres temporarios',
        text: 'Juegos de blanquería entre huésped y huésped, con retiro programado. Si manejás varios departamentos, lo vemos como cuenta de empresa.',
      },
    ],
    image: 'clienta-celular',
    imageAlt: 'Clienta coordinando el retiro de su ropa desde el celular',
    faqs: [
      {
        q: '¿Tengo que estar yo para la entrega?',
        a: 'No necesariamente. Podés dejar o recibir el pedido con el encargado del edificio, avisándonos antes.',
      },
      {
        q: '¿Puedo mandar tintorería y lavandería en el mismo retiro?',
        a: 'Sí. Trajes, camisas, acolchados y la ropa de todos los días van en el mismo pedido y los separamos nosotros.',
      },
      {
        q: '¿Cuánto tarda?',
        a: 'La mayoría de las prendas, entre 48 y 72 horas hábiles. Los acolchados, unos días más por el secado.',
      },
    ],
  },
];

export const getZone = (slug: string) => ZONES.find((z) => z.slug === slug);
