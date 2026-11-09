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
//
// Lo que se escribe acá tiene que ser cierto. Nada de plazos, días de recorrido ni
// "lo que más nos piden" si no lo confirmó el cliente: son promesas que se reclaman.

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
  /**
   * Otros barrios que cubre esta misma página, tal cual figuran en AREAS de site.ts.
   * Se usa cuando son chicos y linderos: una página con contenido real sirve más que
   * cuatro casi iguales. Van al areaServed del JSON-LD junto con el barrio principal.
   */
  covers?: string[];
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
        text: 'Si estás a unas cuadras, traerla al local suele ser lo más rápido: dejás la prenda y te avisamos por WhatsApp cuando está.',
      },
      {
        title: 'O la pasamos a buscar',
        text: 'Si preferís no moverte, coordinás el retiro por WhatsApp y pasamos por tu casa.',
      },
      {
        title: 'Tintorería y lavandería juntas',
        text: 'Lo que necesita cuidado especial y la ropa de todos los días van en el mismo pedido.',
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
        q: '¿En qué horario atienden?',
        a: 'Escribinos por WhatsApp y te lo confirmamos.',
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
      'Funciona igual para un departamento o para una oficina. Contanos qué prendas son y dónde estás, y el resto lo arreglamos por mensaje.',
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
        text: 'Juegos de blanquería entre huésped y huésped. Si manejás varios departamentos, consultanos por el servicio para empresas.',
      },
    ],
    image: 'clienta-celular',
    imageAlt: 'Clienta coordinando el retiro de su ropa desde el celular',
    faqs: [
      {
        q: '¿Cómo coordinamos el retiro?',
        a: 'Pasanos tu dirección por WhatsApp y arreglamos el día y el horario que te quede cómodo.',
      },
      {
        q: '¿Puedo mandar tintorería y lavandería en el mismo retiro?',
        a: 'Sí. Trajes, camisas, acolchados y la ropa de todos los días van en el mismo pedido y los separamos nosotros.',
      },
      {
        q: '¿Cuánto tarda?',
        a: 'Depende de la prenda. Te damos el plazo al recibirla y te avisamos por WhatsApp cuando está lista.',
      },
    ],
  },
  {
    slug: 'los-troncos',
    name: 'Los Troncos',
    shortName: 'Los Troncos',
    keyword: 'tintorería en Los Troncos',
    metaTitle: 'Tintorería en Los Troncos, Mar del Plata',
    metaDescription:
      'Retiro y entrega de tintorería y lavandería en Los Troncos, Mar del Plata. Trajes, abrigos de paño, cortinas y blanquería. Coordinalo por WhatsApp.',
    h1: 'Tintorería con retiro',
    h1Thin: 'en Los Troncos',
    lead: 'Pasamos a buscar tu ropa por Los Troncos y te la devolvemos limpia, planchada y en percha. Lo coordinás por WhatsApp, sin moverte de casa.',
    intro: [
      'Los Troncos es un barrio de casas grandes y calles arboladas, y eso se traduce en mucha tela: cortinas de ventanal, manteles, acolchados y blanquería que no entran en un lavarropas común. Todo eso va en el mismo retiro.',
      'También está la ropa que pide tintorería de verdad: trajes, tapados de paño, prendas de lana fina y vestidos de ceremonia. Los limpiamos, los planchamos y te los devolvemos en percha y con funda.',
    ],
    highlights: [
      {
        title: 'Cortinas y blanquería de casa',
        text: 'Cortinas, visillos, manteles, acolchados y fundas de sillón entran en un solo pedido.',
      },
      {
        title: 'Trajes y abrigos de paño',
        text: 'Sin brillos, con la forma original y entregados en percha con funda.',
      },
      {
        title: 'Todo junto, sin separar',
        text: 'La tintorería y la ropa de todos los días van en el mismo retiro. De separarlas nos ocupamos nosotros.',
      },
    ],
    image: 'traje',
    imageAlt: 'Detalle de un saco de traje azul oscuro con botón',
    faqs: [
      { q: '¿Retiran en todo Los Troncos?', a: 'Sí. Pasanos tu dirección por WhatsApp y coordinamos el día y el horario.' },
      {
        q: '¿Se pueden llevar las cortinas de toda la casa?',
        a: 'Sí. Descolgalas y contanos cuántas son y de qué tela; te pasamos el precio antes de empezar.',
      },
      { q: '¿Y si prefiero acercarme?', a: 'El local está en Av. Constitución 5491, barrio Constitución.' },
    ],
  },
  {
    slug: 'stella-maris',
    name: 'Stella Maris',
    shortName: 'Stella Maris',
    keyword: 'tintorería en Stella Maris',
    metaTitle: 'Tintorería en Stella Maris, Mar del Plata',
    metaDescription:
      'Retiro y entrega de tintorería y lavandería en Stella Maris, Mar del Plata. Prendas delicadas, abrigos y ropa de guardar. Pedilo por WhatsApp.',
    h1: 'Tintorería con retiro',
    h1Thin: 'en Stella Maris',
    lead: 'Uno de los barrios más antiguos de la ciudad, sobre la loma. Pasamos a buscar tu ropa y te la devolvemos lista para usar o para guardar.',
    intro: [
      'Stella Maris mezcla casonas históricas con edificios, y en los dos casos aparece el mismo tipo de prenda: la que se usa poco y se guarda mucho. Abrigos de paño, vestidos de ceremonia, prendas de lana fina y ropa de temporada que pasa meses en un placard.',
      'Esa ropa necesita entrar limpia al placard, porque las manchas que no se ven se oxidan con los meses y aparecen marcadas al sacarla. Te la devolvemos en funda, lista para guardar.',
    ],
    highlights: [
      {
        title: 'Prendas delicadas y de ceremonia',
        text: 'Seda, encaje, bordados y pedrería, revisados detalle por detalle y entregados en funda.',
      },
      {
        title: 'Ropa de guardar entre temporadas',
        text: 'Abrigos, tapados y acolchados limpios y secos antes de que pasen el verano en el placard.',
      },
      {
        title: 'Casas y edificios por igual',
        text: 'Coordinamos el retiro en la puerta, sea una casa o un departamento.',
      },
    ],
    image: 'percheros',
    imageAlt: 'Prendas limpias en fundas colgadas en el perchero de la tintorería',
    faqs: [
      { q: '¿Retiran en todo Stella Maris?', a: 'Sí. Pasanos tu dirección por WhatsApp y coordinamos el día y el horario.' },
      {
        q: '¿Limpian vestidos de fiesta y de novia?',
        a: 'Sí, y te los entregamos en funda. Si algún aplique viene flojo, te lo avisamos al recibirlo.',
      },
      {
        q: '¿Conviene limpiar la ropa antes de guardarla?',
        a: 'Sí. Las manchas de transpiración y perfume no se ven, pero se oxidan durante el verano y aparecen al sacar la prenda.',
      },
    ],
  },
  {
    slug: 'playa-grande',
    name: 'Playa Grande',
    shortName: 'Playa Grande',
    keyword: 'lavandería en Playa Grande',
    metaTitle: 'Tintorería y lavandería en Playa Grande',
    metaDescription:
      'Retiro y entrega en Playa Grande, Mar del Plata. Lavandería para departamentos y blanquería para alquileres temporarios. Coordinalo por WhatsApp.',
    h1: 'Lavandería con retiro',
    h1Thin: 'en Playa Grande',
    lead: 'Departamentos sin lugar para tender y alquileres temporarios que necesitan la blanquería lista. Pasamos a buscarla y te la devolvemos limpia.',
    intro: [
      'Playa Grande es zona de edificios, y en un departamento el problema casi nunca es lavar: es tender. El valet de ropa resuelve justo eso, porque te devolvemos la ropa de la semana limpia, seca y doblada, lista para guardar.',
      'La otra mitad del barrio son los alquileres temporarios. Si manejás uno o varios, los juegos de sábanas y toallas entre huésped y huésped son un pedido más, y si el volumen lo justifica lo vemos como cuenta de empresa.',
    ],
    highlights: [
      {
        title: 'Departamentos sin lugar para tender',
        text: 'Te devolvemos la ropa de todos los días limpia, seca y doblada.',
      },
      {
        title: 'Alquileres temporarios',
        text: 'Sábanas, toallas y cubrecamas entre un huésped y el siguiente.',
      },
      {
        title: 'Ropa de verano y de playa',
        text: 'Lo que vuelve con arena, protector solar o agua salada también entra en el pedido.',
      },
    ],
    image: 'blanqueria',
    imageAlt: 'Toallas y blanquería blanca dobladas y apiladas junto a una planta',
    faqs: [
      { q: '¿Retiran en todo Playa Grande?', a: 'Sí. Pasanos tu dirección por WhatsApp y coordinamos el día y el horario.' },
      {
        q: '¿Trabajan con alquileres temporarios?',
        a: 'Sí. Si manejás varios departamentos, consultanos por el servicio para empresas, con retiro programado y facturación mensual.',
      },
      {
        q: '¿Puedo mandar tintorería y ropa de todos los días juntas?',
        a: 'Sí, en el mismo pedido. Las separamos nosotros.',
      },
    ],
  },
  {
    slug: 'chauvin',
    name: 'Chauvín',
    shortName: 'Chauvín',
    keyword: 'tintorería en Chauvín',
    metaTitle: 'Tintorería en Chauvín, Mar del Plata',
    metaDescription:
      'Retiro y entrega de tintorería y lavandería en Chauvín, Mar del Plata. Acolchados, cortinas y la ropa de toda la familia. Pedilo por WhatsApp.',
    h1: 'Tintorería con retiro',
    h1Thin: 'en Chauvín',
    lead: 'Barrio de chalets, a pocas cuadras de La Perla. Pasamos a buscar la ropa de la casa y te la devolvemos limpia y planchada.',
    intro: [
      'Chauvín es un barrio de chalets de piedra y techos de tejas, de casas de familia. Lo que más espacio ocupa en una casa así no es la ropa: son los acolchados, las frazadas y las cortinas, que se lavan pocas veces al año y nunca entran bien en un lavarropas de casa.',
      'Al estar a pocas cuadras del centro, el retiro se coordina sin vueltas. Lo pedís por WhatsApp, pasamos, y te devolvemos todo seco y listo para volver a su lugar.',
    ],
    highlights: [
      {
        title: 'Acolchados y frazadas',
        text: 'Cuando termina el invierno van todos juntos, en un solo retiro, y vuelven secos y esponjosos.',
      },
      {
        title: 'Cortinas de toda la casa',
        text: 'Descolgalas y las retiramos junto con el resto del pedido.',
      },
      {
        title: 'La ropa de la familia',
        text: 'Lavandería para la ropa de todos los días y tintorería para lo que necesita otro cuidado.',
      },
    ],
    image: 'acolchados',
    imageAlt: 'Tres acolchados enrollados en gris, celeste y rosa',
    faqs: [
      { q: '¿Retiran en todo Chauvín?', a: 'Sí. Pasanos tu dirección por WhatsApp y coordinamos el día y el horario.' },
      {
        q: '¿Cuántos acolchados puedo mandar juntos?',
        a: 'Los que necesites. Contanos cuántos son y de qué tipo de relleno y te pasamos el precio antes de empezar.',
      },
      {
        q: '¿Los acolchados vuelven secos?',
        a: 'Sí, completamente. El secado es la parte crítica: con humedad en el relleno aparece el olor a los pocos días.',
      },
    ],
  },
  {
    slug: 'la-perla',
    name: 'La Perla',
    shortName: 'La Perla',
    keyword: 'tintorería en La Perla',
    metaTitle: 'Tintorería en La Perla, Mar del Plata',
    metaDescription:
      'Retiro y entrega de tintorería y lavandería en La Perla y La Perla Norte, Mar del Plata. Departamentos y casas. Coordinalo por WhatsApp.',
    h1: 'Tintorería con retiro',
    h1Thin: 'en La Perla',
    lead: 'La Perla y La Perla Norte, la zona de playa de barrio. Pasamos a buscar tu ropa y te la devolvemos limpia donde estés.',
    intro: [
      'La Perla es una de las zonas más antiguas de la ciudad y mezcla chalecitos con edificios, así que acá entra de todo: desde la ropa de la semana de un departamento hasta los acolchados y las cortinas de una casa.',
      'La Perla Norte nos queda especialmente cerca, sobre nuestro lado de la ciudad. Si estás por ahí, podés pedir el retiro o acercarte al local, lo que te resulte más práctico.',
    ],
    highlights: [
      {
        title: 'Cerca del local',
        text: 'La Perla Norte queda de nuestro lado: podés pedir el retiro o acercar las prendas vos.',
      },
      {
        title: 'Departamentos y casas',
        text: 'Ropa de todos los días doblada, o acolchados y cortinas si tenés casa.',
      },
      {
        title: 'Un solo pedido',
        text: 'Tintorería y lavandería van juntas y vuelven juntas.',
      },
    ],
    image: 'toallas',
    imageAlt: 'Ropa limpia doblada y apilada: jeans, remeras y toallas',
    faqs: [
      {
        q: '¿Retiran en La Perla y en La Perla Norte?',
        a: 'En las dos. Pasanos tu dirección por WhatsApp y coordinamos el día y el horario.',
      },
      { q: '¿Qué es el valet de ropa?', a: 'Es la ropa de todos los días: la lavamos, la secamos y te la devolvemos doblada y lista para guardar.' },
      { q: '¿Y si prefiero acercarme?', a: 'El local está en Av. Constitución 5491, barrio Constitución.' },
    ],
  },
  {
    slug: 'guemes',
    name: 'Güemes',
    shortName: 'Güemes',
    keyword: 'tintorería en la zona de Güemes',
    metaTitle: 'Tintorería y lavandería en Güemes, Mar del Plata',
    metaDescription:
      'Retiro y entrega en la zona de Güemes, Mar del Plata. Mantelería y uniformes para comercios y gastronomía, y tintorería para tu casa.',
    h1: 'Tintorería y lavandería',
    h1Thin: 'en la zona de Güemes',
    lead: 'El corredor comercial de la ciudad: cafés, restaurantes y locales. Retiramos mantelería y uniformes, y también la ropa de tu casa.',
    intro: [
      'Güemes y Olavarría son el corredor de tiendas, cafés y restaurantes de Mar del Plata, así que acá el retiro tiene dos caras. Por un lado los comercios: manteles, servilletas, repasadores, delantales y uniformes, que se ensucian todos los días y no pueden faltar.',
      'Por el otro, los vecinos: la misma tintorería y lavandería de siempre, con retiro en la puerta. Trajes, camisas, acolchados, cortinas y la ropa de todos los días.',
    ],
    highlights: [
      {
        title: 'Mantelería y delantales',
        text: 'Manteles, servilletas y repasadores sin manchas de vino ni de grasa.',
      },
      {
        title: 'Uniformes de local',
        text: 'Ropa de trabajo de bares, cafés y comercios, limpia y planchada.',
      },
      {
        title: 'También para tu casa',
        text: 'Si vivís en la zona, el retiro funciona igual que en el resto de los barrios.',
      },
    ],
    image: 'vaporizado',
    imageAlt: 'Vaporizadora de mano pasando sobre una prenda oscura',
    faqs: [
      { q: '¿Retiran en toda la zona de Güemes?', a: 'Sí. Pasanos tu dirección por WhatsApp y coordinamos el día y el horario.' },
      {
        q: '¿Tienen servicio para comercios?',
        a: 'Sí. Mantelería, uniformes y blanquería con retiro programado y facturación mensual. Mirá la página de empresas o escribinos.',
      },
      { q: '¿Atienden también a particulares?', a: 'Claro. El retiro es el mismo, vivas o trabajes en la zona.' },
    ],
  },
  {
    slug: 'caisamar',
    name: 'Caisamar',
    shortName: 'Caisamar',
    keyword: 'tintorería en Caisamar',
    metaTitle: 'Tintorería en Caisamar, Mar del Plata',
    metaDescription:
      'Tintorería y lavandería en Caisamar, Mar del Plata. Estamos a pocas cuadras, sobre Av. Constitución. Retiro a domicilio o traela al local.',
    h1: 'Tintorería y lavandería',
    h1Thin: 'en Caisamar',
    lead: 'Caisamar es de los barrios que más cerca nos quedan: el local está sobre Av. Constitución, a pocas cuadras. Podés acercarte o pedir el retiro.',
    intro: [
      'Caisamar es un barrio residencial y tranquilo, de casas, y queda a pocas cuadras de Av. Constitución, que es justamente donde estamos. Esa cercanía es toda la ventaja: no hay que cruzar la ciudad ni para dejar ni para retirar.',
      'Hacemos los dos servicios. Tintorería para lo que necesita cuidado especial —trajes, abrigos, acolchados, cortinas y prendas delicadas— y lavandería para la ropa de todos los días, que vuelve limpia, seca y doblada.',
    ],
    highlights: [
      {
        title: 'Somos el barrio de al lado',
        text: 'El local está sobre Av. Constitución, a pocas cuadras. Podés traer la ropa cuando te quede de paso.',
      },
      {
        title: 'O pedís el retiro',
        text: 'Si preferís no moverte, lo coordinás por WhatsApp y pasamos por tu casa.',
      },
      {
        title: 'Acolchados y cortinas de casa',
        text: 'Lo que no entra en un lavarropas común va en el mismo pedido y vuelve seco.',
      },
    ],
    image: 'camisas',
    imageAlt: 'Camisas celestes y blancas colgadas en perchas de madera',
    faqs: [
      { q: '¿Dónde queda el local?', a: 'En Av. Constitución 5491, a pocas cuadras de Caisamar.' },
      { q: '¿Retiran igual si estoy cerca?', a: 'Sí. Podés elegir lo que te resulte más cómodo: acercarte o pedir el retiro.' },
      { q: '¿Qué puedo mandar?', a: 'Todo junto: trajes, camisas, acolchados, cortinas, zapatillas y la ropa de todos los días.' },
    ],
  },
  {
    slug: 'parque-luro',
    name: 'Parque Luro',
    shortName: 'Parque Luro',
    keyword: 'tintorería en Parque Luro',
    metaTitle: 'Tintorería en Parque Luro, Mar del Plata',
    metaDescription:
      'Retiro y entrega de tintorería y lavandería en Parque Luro, Mar del Plata. Casas y PH, acolchados y ropa de todos los días. Pedilo por WhatsApp.',
    h1: 'Tintorería con retiro',
    h1Thin: 'en Parque Luro',
    lead: 'Pasamos a buscar tu ropa por Parque Luro y te la devolvemos limpia y planchada. Lo coordinás por WhatsApp en un minuto.',
    intro: [
      'Parque Luro es un barrio residencial de casas y PH, de los que tienen patio chico y poco lugar para tender. Ahí la lavandería resuelve más de lo que parece: te devolvemos la ropa de la semana limpia, seca y doblada, sin que tengas que colgar nada.',
      'Y cuando aparece lo grande —un acolchado al final del invierno, las cortinas de la casa, un traje para un evento— va en el mismo retiro. No hace falta hacer dos pedidos.',
    ],
    highlights: [
      {
        title: 'Poco lugar para tender',
        text: 'El valet de ropa es para eso: la lavamos, la secamos y te la devolvemos doblada.',
      },
      {
        title: 'Acolchados y cortinas',
        text: 'Lo que no entra en el lavarropas de casa entra en el mismo pedido.',
      },
      {
        title: 'Un solo retiro',
        text: 'Tintorería y lavandería van juntas. De separarlas nos ocupamos nosotros.',
      },
    ],
    image: 'perchas',
    imageAlt: 'Prendas en fundas plásticas colgadas en perchas de madera',
    faqs: [
      { q: '¿Retiran en todo Parque Luro?', a: 'Sí. Pasanos tu dirección por WhatsApp y coordinamos el día y el horario.' },
      { q: '¿Qué es el valet de ropa?', a: 'Es la ropa de todos los días: la lavamos, la secamos y te la devolvemos doblada y lista para guardar.' },
      { q: '¿Y si prefiero acercarme?', a: 'El local está en Av. Constitución 5491, barrio Constitución.' },
    ],
  },
  {
    slug: 'santa-monica',
    name: 'Santa Mónica',
    shortName: 'Santa Mónica',
    keyword: 'tintorería en Santa Mónica',
    metaTitle: 'Tintorería en Santa Mónica, Mar del Plata',
    metaDescription:
      'Retiro y entrega de tintorería y lavandería en Santa Mónica, Mar del Plata. Acolchados, ropa de cama y la ropa de la casa. Pedilo por WhatsApp.',
    h1: 'Tintorería con retiro',
    h1Thin: 'en Santa Mónica',
    lead: 'Barrio residencial de casas, sobre el límite con Pinos de Anchorena. Pasamos a buscar la ropa de la casa y te la devolvemos lista.',
    intro: [
      'Santa Mónica es un barrio de casas, tranquilo y bien conectado con el resto de la ciudad. En una casa con varios dormitorios lo que más se acumula no son las prendas sueltas: son los acolchados, las frazadas y la ropa de cama, que se lavan pocas veces al año y nunca entran bien en un lavarropas familiar.',
      'Todo eso lo retiramos junto con la ropa de todos los días, y te lo devolvemos seco y listo para volver a la cama o al placard.',
    ],
    highlights: [
      {
        title: 'Acolchados y ropa de cama',
        text: 'De varios dormitorios, en un solo retiro, y vuelven secos y esponjosos.',
      },
      {
        title: 'La ropa de toda la casa',
        text: 'Lavandería para lo de todos los días y tintorería para lo que necesita otro cuidado.',
      },
      {
        title: 'Coordinado por WhatsApp',
        text: 'Pasanos tu dirección y arreglamos el día y el horario que te quede cómodo.',
      },
    ],
    image: 'saco-lana',
    imageAlt: 'Detalle de un abrigo de paño color camel',
    faqs: [
      { q: '¿Retiran en todo Santa Mónica?', a: 'Sí. Pasanos tu dirección por WhatsApp y coordinamos el día y el horario.' },
      {
        q: '¿Cuántos acolchados puedo mandar juntos?',
        a: 'Los que necesites. Contanos cuántos son y de qué relleno y te pasamos el precio antes de empezar.',
      },
      { q: '¿Y si prefiero acercarme?', a: 'El local está en Av. Constitución 5491, barrio Constitución.' },
    ],
  },
  {
    slug: 'camet',
    name: 'Félix U. Camet',
    shortName: 'Camet',
    covers: ['Jardín de Alto Camet', 'Las Dalias', 'Parque Peña'],
    keyword: 'tintorería en Camet',
    metaTitle: 'Tintorería en Camet y la zona norte, Mar del Plata',
    metaDescription:
      'Retiro y entrega de tintorería y lavandería en Camet, Alto Camet, Las Dalias y Parque Peña. No hace falta bajar al centro. Pedilo por WhatsApp.',
    h1: 'Tintorería con retiro',
    h1Thin: 'en Camet y la zona norte',
    lead: 'Camet, Jardín de Alto Camet, Las Dalias y Parque Peña. Pasamos a buscar tu ropa por la zona norte costera y te la devolvemos limpia.',
    intro: [
      'La zona norte costera —Félix U. Camet, Jardín de Alto Camet, Las Dalias y Parque Peña— tiene un problema conocido: casi todo lo que necesitás resolver queda más cerca del centro que de tu casa. Una tintorería no debería ser uno de esos viajes.',
      'Por eso el retiro llega hasta acá. Coordinás el día por WhatsApp, pasamos a buscar la ropa y te la devolvemos limpia, planchada y en percha, sin que tengas que bajar a la ciudad por una prenda.',
    ],
    highlights: [
      {
        title: 'Sin bajar al centro',
        text: 'El retiro y la entrega son en tu puerta: no hace falta hacer el viaje dos veces.',
      },
      {
        title: 'Cuatro barrios, un mismo recorrido',
        text: 'Camet, Alto Camet, Las Dalias y Parque Peña entran en la misma zona de retiro.',
      },
      {
        title: 'Conviene juntar varias cosas',
        text: 'Acolchados, cortinas, trajes y la ropa de la semana en un solo pedido.',
      },
    ],
    image: 'entrega',
    imageAlt: 'Repartidor entregando un pedido de ropa limpia en la puerta de una casa',
    faqs: [
      {
        q: '¿A qué barrios de la zona norte llegan?',
        a: 'A Félix U. Camet, Jardín de Alto Camet, Las Dalias y Parque Peña. Si estás cerca y no ves tu barrio, escribinos igual.',
      },
      { q: '¿Cómo coordinamos?', a: 'Pasanos tu dirección por WhatsApp y arreglamos el día y el horario.' },
      {
        q: '¿Puedo mandar varias cosas de una vez?',
        a: 'Sí, y conviene: acolchados, cortinas, trajes y la ropa de todos los días van en el mismo retiro.',
      },
    ],
  },
];

export const getZone = (slug: string) => ZONES.find((z) => z.slug === slug);
