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
      { q: '¿Lo pueden retirar de mi casa?', a: 'Sí, en el barrio Constitución y el centro de Mar del Plata. Pasanos tu dirección por WhatsApp y coordinamos.' },
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
      { q: '¿Lo pueden retirar de mi casa?', a: 'Sí, en el barrio Constitución y el centro de Mar del Plata. Pasanos tu dirección por WhatsApp y coordinamos.' },
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
      { q: '¿Las pueden retirar de mi casa u oficina?', a: 'Sí, en el barrio Constitución y el centro de Mar del Plata. Pasanos tu dirección por WhatsApp y coordinamos.' },
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
      { q: '¿La pueden retirar de mi casa?', a: 'Sí, en el barrio Constitución y el centro de Mar del Plata. Pasanos tu dirección por WhatsApp y coordinamos.' },
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
      { q: '¿Lo pueden retirar de mi casa?', a: 'Sí, en el barrio Constitución y el centro de Mar del Plata. Pasanos tu dirección por WhatsApp y coordinamos.' },
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
      { q: '¿Las retiran de mi casa?', a: 'Sí, en el barrio Constitución y el centro de Mar del Plata. Descolgalas, pasanos tu dirección y coordinamos.' },
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
      { q: '¿La pueden retirar de mi casa?', a: 'Sí, en el barrio Constitución y el centro de Mar del Plata. Pasanos tu dirección por WhatsApp y coordinamos.' },
    ],
    related: ['limpieza-de-camisas', 'limpieza-de-acolchados', 'limpieza-de-cortinas'],
  },
  {
    slug: 'limpieza-de-alfombras',
    keyword: 'limpieza de alfombras en Mar del Plata',
    metaTitle: 'Limpieza de alfombras y tapizados en Mar del Plata',
    metaDescription:
      'Limpieza de alfombras, carpetas y tapizados de sillones y sillas en Mar del Plata. Sin olor a humedad y entregadas secas. Pedí por WhatsApp.',
    eyebrow: 'Alfombras y tapizados · Mar del Plata',
    h1: 'Limpieza de alfombras',
    h1Thin: 'y tapizados',
    lead: 'Alfombras, carpetas y el tapizado de sillones y sillas. Les sacamos el polvo acumulado, las manchas y el olor, y te las devolvemos secas.',
    image: 'sala',
    description:
      'Una alfombra junta años de polvo, pelo y humedad antes de que se note a simple vista: para cuando cambió de color ya hace rato que el problema está. Limpiamos alfombras y carpetas de todo tipo, además del tapizado de sillones, sillas y almohadones. El punto crítico en Mar del Plata es el mismo de siempre, el secado: una alfombra que vuelve a su lugar todavía húmeda es olor a humedad asegurado en una semana.',
    items: ['Alfombras y carpetas', 'Alfombras de lana', 'Tapizados de sillas y sillones', 'Almohadones y fundas', 'Pie de cama y alfombras de pasillo', 'Alfombras con olor a humedad'],
    // TODO: confirmar con el cliente si los sillones grandes se limpian en el local,
    // en el domicilio, o si directamente no se toman. Mientras tanto la respuesta queda abierta.
    faqs: [
      {
        q: '¿Cómo les hago llegar una alfombra o un sillón?',
        a: 'Contanos el tamaño y el tipo por WhatsApp, con una foto si podés, y vemos cómo conviene resolverlo en cada caso.',
      },
      { q: '¿Cuánto tardan?', a: 'Más que una prenda, por el secado. Te damos el plazo al recibirla y te avisamos por WhatsApp cuando está.' },
      {
        q: '¿Le sacan el olor a humedad?',
        a: 'En la mayoría de los casos sí: el olor viene de lo que creció en la fibra con la humedad, y se va con la limpieza y un secado completo.',
      },
    ],
    related: ['limpieza-de-cortinas', 'limpieza-de-acolchados', 'valet-de-ropa'],
  },
  {
    slug: 'limpieza-de-zapatillas',
    keyword: 'limpieza de zapatillas en Mar del Plata',
    metaTitle: 'Limpieza de zapatillas en Mar del Plata',
    metaDescription:
      'Limpieza de zapatillas de lona, running y cuero sintético en Mar del Plata. Por fuera, por dentro, cordones y suela. Pedí por WhatsApp.',
    eyebrow: 'Zapatillas · Mar del Plata',
    h1: 'Limpieza de zapatillas',
    h1Thin: 'por dentro y por fuera',
    lead: 'Lona, running y cuero sintético. Les sacamos la tierra, las manchas y el olor, y les limpiamos cordones, plantilla y suela.',
    image: 'maquinas',
    description:
      'Meter las zapatillas en el lavarropas es la forma más rápida de despegar la suela y deformar el contrafuerte. Nosotros las limpiamos por partes: la tela o el cuero sintético por fuera, el interior donde está el olor, los cordones y la plantilla aparte, y la suela y los laterales de goma, que es lo que más se nota. Después secan solas, sin calor, que es lo que las arruina.',
    items: ['Zapatillas de lona', 'Zapatillas de running', 'Cuero sintético', 'Zapatillas blancas', 'Cordones y plantillas', 'Suelas y laterales de goma'],
    // TODO: confirmar plazo y si se toman gamuza y cuero natural.
    faqs: [
      {
        q: '¿Quedan como nuevas?',
        a: 'Mejoran muchísimo, pero depende del estado y del material: una mancha vieja de aceite o una tela ya desgastada tienen un límite. Te decimos qué esperar al recibirlas.',
      },
      {
        q: '¿Limpian zapatillas de gamuza o de cuero?',
        a: 'Esos materiales llevan otro tratamiento. Mandanos una foto por WhatsApp y te confirmamos antes de que te muevas.',
      },
      {
        q: '¿Por qué no las lavo en el lavarropas?',
        a: 'El golpeteo del tambor despega la suela y deforma el talón, y el calor termina de arruinar el pegamento. Se nota después del segundo o tercer lavado.',
      },
    ],
    related: ['valet-de-ropa', 'limpieza-de-camperas', 'limpieza-de-alfombras'],
  },
  {
    slug: 'arreglos-de-ropa',
    keyword: 'arreglos de ropa en Mar del Plata',
    metaTitle: 'Arreglos de ropa y costura en Mar del Plata',
    metaDescription:
      'Dobladillos, cierres, botones y ajustes de talle en Mar del Plata. Arreglos de ropa con o sin limpieza, en el mismo pedido. Consultá por WhatsApp.',
    eyebrow: 'Arreglos y costura · Mar del Plata',
    h1: 'Arreglos y costura',
    h1Thin: 'de la ropa que ya tenés',
    lead: 'Un dobladillo, un cierre que no cierra o un pantalón que te queda grande. Cosas chicas que dejan una prenda guardada durante años.',
    image: 'manos-tela',
    description:
      'La mayoría de la ropa que termina en el fondo del placard no está rota: le falta un arreglo de diez minutos. Hacemos dobladillos, cambios de cierre, botones, ojales, ajustes de cintura y de talle, y arreglos de forro. Podés traer la prenda solo para el arreglo, o combinarlo con la limpieza en el mismo pedido y retirar todo junto.',
    items: ['Dobladillos de pantalón', 'Ruedos de vestidos y polleras', 'Ajuste de cintura y de talle', 'Cambio de cierres', 'Botones y ojales', 'Arreglo de forros'],
    // TODO: confirmar plazos por tipo de arreglo y si se toman prendas de cuero.
    faqs: [
      {
        q: '¿Cuánto tarda un arreglo?',
        a: 'Depende de qué sea: un dobladillo no es lo mismo que cambiar un cierre o entallar un saco. Te damos el plazo y el precio al ver la prenda.',
      },
      {
        q: '¿Tengo que probarme la prenda?',
        a: 'Para un dobladillo o un ajuste de talle, sí: viene con el pantalón o el vestido puesto y lo marcamos en el momento. Para un botón o un cierre no hace falta.',
      },
      {
        q: '¿Puedo pedir el arreglo y la limpieza juntos?',
        a: 'Sí, y conviene: va en el mismo pedido y retirás todo de una sola vez.',
      },
    ],
    related: ['limpieza-de-trajes', 'limpieza-de-prendas-delicadas', 'limpieza-de-camisas'],
  },
];

export const getServiceContent = (slug: string) => SERVICE_CONTENT.find((s) => s.slug === slug);
