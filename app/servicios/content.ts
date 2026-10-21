// Contenido de cada página de servicio (/servicios/[slug]).
// Una búsqueda principal por página: está en el title, el H1 y el primer párrafo.
// Los plazos se repiten de FAQ en site.ts: si cambian, cambiar los dos (TODO: confirmar con el cliente).

import type { AnyIcon } from '../Icon';

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
  intro: string[];
  items: { title: string; text: string }[];
  steps: { icon: AnyIcon; title: string; text: string }[];
  priceFactors: string[];
  care: { title: string; tips: string[] };
  faqs: { q: string; a: string }[];
  related: string[];
};

export const SERVICE_CONTENT: ServiceContent[] = [
  {
    slug: 'limpieza-en-seco',
    keyword: 'limpieza en seco en Mar del Plata',
    metaTitle: 'Limpieza en seco en Mar del Plata',
    metaDescription:
      'Limpieza en seco de trajes, sacos, tapados y vestidos en Mar del Plata. Revisión prenda por prenda, precio antes de dejarla y aviso por WhatsApp.',
    eyebrow: 'Limpieza en seco · Mar del Plata',
    h1: 'Limpieza en seco',
    h1Thin: 'para lo que no va al lavarropas.',
    lead: 'Trajes, sacos, tapados, vestidos y prendas de lana o seda. Limpiamos sin agua para que no encojan, no pierdan la forma ni el color.',
    image: 'traje',
    imageAlt: 'Detalle de un saco azul oscuro con botón',
    intro: [
      'La limpieza en seco usa un solvente en lugar de agua. Por eso es el proceso indicado para fibras que con agua se deforman, se encogen o destiñen: lana, seda, viscosa, paño y muchas mezclas.',
      'Antes de empezar leemos la etiqueta, confirmamos la fibra y marcamos manchas y zonas gastadas con vos en el mostrador. Después de limpiar, cada prenda se plancha o vaporiza según su tela y se entrega en percha con funda.',
    ],
    items: [
      { title: 'Trajes y sacos', text: 'Limpieza, vaporizado y planchado con forma de hombro y solapa.' },
      { title: 'Tapados y abrigos de paño', text: 'Sin encoger ni apelmazar la lana.' },
      { title: 'Vestidos y polleras', text: 'Cuidamos forros, pliegues y terminaciones.' },
      { title: 'Pantalones de vestir', text: 'Con raya marcada o sin ella, como lo uses.' },
      { title: 'Sweaters y tejidos finos', text: 'Lana, cashmere y mezclas que no toleran el lavarropas.' },
      { title: 'Corbatas y pañuelos de seda', text: 'Sin perder brillo ni color.' },
    ],
    steps: [
      { icon: 'tag', title: 'Lectura de etiqueta', text: 'Confirmamos fibra y símbolos de cuidado. Si la prenda no tiene etiqueta, te lo decimos y elegimos el proceso más suave.' },
      { icon: 'drop', title: 'Pretratamiento de manchas', text: 'Cada mancha se trata según su origen y la tela antes de entrar a máquina.' },
      { icon: 'washer', title: 'Limpieza en seco', text: 'Ciclo con solvente, sin agua, que respeta forma, color y forros.' },
      { icon: 'iron', title: 'Planchado y control', text: 'Vaporizado o planchado según la tela, control final y entrega en percha con funda.' },
    ],
    priceFactors: ['Tipo de prenda y largo', 'Fibra y forros', 'Manchas que necesitan tratamiento aparte', 'Detalles como pliegues, bordados o apliques'],
    care: {
      title: 'Cómo cuidar un traje entre limpiezas',
      tips: [
        'Colgalo en percha ancha de hombro y dejalo descansar un día entre usos.',
        'Cepillalo suave después de usarlo para sacar polvo y pelusa.',
        'Para arrugas leves usá vapor, no plancha directa.',
        'Traelo ante cualquier mancha: cuanto más tiempo pasa, más difícil sale.',
      ],
    },
    faqs: [
      { q: '¿La limpieza en seco encoge la ropa?', a: 'No. Al no usar agua, la fibra no se contrae como en un lavado común. Por eso es el proceso indicado para lana, seda y paño.' },
      { q: '¿Cada cuánto conviene limpiar un traje?', a: 'Entre 5 y 8 usos, o antes si tiene una mancha. Limpiarlo demasiado seguido también lo desgasta.' },
      { q: '¿Cuánto tarda?', a: 'La mayoría de las prendas están listas en 48 a 72 horas hábiles. Te avisamos por WhatsApp cuando podés retirarla.' },
      { q: '¿Qué pasa si la etiqueta dice “no limpiar en seco”?', a: 'Respetamos la etiqueta. Te proponemos el proceso al agua adecuado o, si vemos riesgo, te lo decimos antes de tocar la prenda.' },
    ],
    related: ['prendas-delicadas', 'camperas-y-abrigos', 'camisas'],
  },
  {
    slug: 'acolchados-y-frazadas',
    keyword: 'lavado de acolchados en Mar del Plata',
    metaTitle: 'Lavado de acolchados en Mar del Plata',
    metaDescription:
      'Lavado de acolchados de pluma, vellón y sintéticos, frazadas y mantas en Mar del Plata. Secado completo para que vuelvan esponjosos y sin olor a humedad.',
    eyebrow: 'Acolchados y frazadas · Mar del Plata',
    h1: 'Lavado de acolchados',
    h1Thin: 'que vuelven esponjosos.',
    lead: 'Acolchados de pluma, vellón y sintéticos, frazadas, mantas y almohadas. Lavado a fondo y, sobre todo, secado completo: es lo que evita olor a humedad y relleno apelmazado.',
    image: 'acolchados',
    imageAlt: 'Tres acolchados enrollados en gris, celeste y rosa',
    intro: [
      'Un acolchado no entra bien en un lavarropas de casa y casi nunca se seca del todo en un tender. En Mar del Plata, con la humedad del mar, ese resto de agua en el relleno termina en olor, manchas y hongos.',
      'Lo lavamos en máquinas de carga grande con un ciclo según el relleno y lo secamos hasta adentro, con movimiento para que la pluma o el vellón se separen y recuperen volumen.',
    ],
    items: [
      { title: 'Acolchados de pluma y plumón', text: 'Ciclo suave y secado largo para que la pluma no se apelmace.' },
      { title: 'Acolchados de vellón y sintéticos', text: 'Lavado a fondo sin deformar las costuras del relleno.' },
      { title: 'Frazadas y mantas', text: 'De lana, polar o algodón, sin encoger ni hacer bolitas.' },
      { title: 'Cubrecamas y quilts', text: 'Cuidamos costuras, volados y terminaciones.' },
      { title: 'Almohadas', text: 'De pluma o fibra, con secado completo.' },
      { title: 'Fundas nórdicas y protectores', text: 'Junto con el acolchado o por separado.' },
    ],
    steps: [
      { icon: 'tag', title: 'Revisión del relleno', text: 'Confirmamos el tipo de relleno y revisamos costuras y manchas antes de lavar.' },
      { icon: 'washer', title: 'Lavado en carga grande', text: 'Máquina con espacio para que el acolchado se mueva y el agua llegue al centro.' },
      { icon: 'clock', title: 'Secado completo', text: 'Secado largo y con movimiento hasta que el relleno quede seco por dentro.' },
      { icon: 'towels', title: 'Doblado y entrega', text: 'Te lo entregamos doblado y en bolsa, listo para usar o guardar.' },
    ],
    priceFactors: ['Tamaño (1 plaza, 2 plazas, queen o king)', 'Tipo de relleno', 'Manchas o tratamiento especial', 'Cantidad de piezas'],
    care: {
      title: 'Cómo guardar el acolchado hasta el invierno',
      tips: [
        'Guardalo limpio y bien seco: la humedad guardada es la que genera olor.',
        'Usá una funda de tela o algodón, nunca una bolsa de nylon cerrada.',
        'Elegí un lugar alto y ventilado, lejos de paredes frías.',
        'Al sacarlo, airealo unas horas antes de usarlo.',
      ],
    },
    faqs: [
      { q: '¿Se puede lavar un acolchado de plumas?', a: 'Sí. La clave es un ciclo suave y un secado largo y completo para que la pluma no quede apelmazada ni con olor.' },
      { q: '¿Cada cuánto conviene lavar el acolchado?', a: 'Una o dos veces por año, idealmente antes de guardarlo al terminar el invierno.' },
      { q: '¿Cuánto tarda el lavado de un acolchado?', a: 'Por el secado, puede llevar algunos días más que una prenda común. Te avisamos por WhatsApp cuando está listo.' },
      { q: '¿Lavan acolchados de alquileres temporarios u hoteles?', a: 'Sí. Para volumen armamos un circuito de retiro y entrega con facturación mensual.' },
    ],
    related: ['cortinas-y-blanqueria', 'camperas-y-abrigos', 'limpieza-en-seco'],
  },
  {
    slug: 'camisas',
    keyword: 'lavado y planchado de camisas en Mar del Plata',
    metaTitle: 'Lavado y planchado de camisas en Mar del Plata',
    metaDescription:
      'Lavado y planchado de camisas en Mar del Plata: cuello y puños firmes, entregadas en percha. Para el día a día o por cantidad para oficinas y uniformes.',
    eyebrow: 'Camisas y planchado · Mar del Plata',
    h1: 'Camisas lavadas y planchadas',
    h1Thin: 'listas para usar.',
    lead: 'Cuello y puños firmes, sin brillos ni marcas de plancha. Te las entregamos en percha para que vayan del local al placard.',
    image: 'camisas',
    imageAlt: 'Camisas celestes y blancas colgadas en perchas de madera',
    intro: [
      'Planchar bien una camisa lleva tiempo y oficio: cuello, puños, canesú y mangas sin pliegues de más. Nosotros lo hacemos todos los días.',
      'Antes de lavar revisamos cuello y puños, que es donde se marca el uso, y tratamos manchas de desodorante, transpiración o comida. Las camisas de vestir, de algodón o lino, y las blusas se planchan a mano según la tela.',
    ],
    items: [
      { title: 'Camisas de vestir', text: 'Algodón, mezclas y popelín, con cuello y puños firmes.' },
      { title: 'Camisas de lino', text: 'Planchado cuidadoso, sin brillo en la tela.' },
      { title: 'Blusas', text: 'Telas finas, volados y botones delicados.' },
      { title: 'Chombas y remeras de uniforme', text: 'Para equipos de trabajo y comercios.' },
      { title: 'Solo planchado', text: 'Si ya las lavaste en casa, las planchamos nosotros.' },
      { title: 'Camisas por cantidad', text: 'Para oficinas, consultorios y restaurantes.' },
    ],
    steps: [
      { icon: 'shirt', title: 'Revisión de cuello y puños', text: 'Detectamos manchas de uso y revisamos botones.' },
      { icon: 'drop', title: 'Pretratamiento', text: 'Desodorante, transpiración, maquillaje o comida, cada una con su tratamiento.' },
      { icon: 'washer', title: 'Lavado según tela', text: 'Temperatura y ciclo según algodón, lino o mezcla.' },
      { icon: 'hanger', title: 'Planchado y percha', text: 'Planchado a mano y entrega en percha.' },
    ],
    priceFactors: ['Cantidad de camisas', 'Solo planchado o lavado y planchado', 'Tela (lino o seda llevan más trabajo)', 'Manchas que necesitan tratamiento aparte'],
    care: {
      title: 'Para que tus camisas duren más',
      tips: [
        'Desabrochá todos los botones antes de lavarlas o traerlas.',
        'Esperá a que el desodorante se seque antes de ponerte la camisa.',
        'Colgalas en percha apenas llegan, sin amontonarlas.',
        'Rotá entre varias: una camisa que descansa se gasta menos.',
      ],
    },
    faqs: [
      { q: '¿Hacen solo planchado?', a: 'Sí. Si las lavás en casa, las traés y te las planchamos y entregamos en percha.' },
      { q: '¿Sacan la mancha amarilla del cuello?', a: 'En la mayoría de los casos sí, con pretratamiento. Si la mancha es muy vieja puede quedar atenuada; te lo decimos al recibirla.' },
      { q: '¿Tienen precio por cantidad?', a: 'Consultanos por WhatsApp: para varias camisas o clientes frecuentes armamos un precio por cantidad.' },
    ],
    related: ['limpieza-en-seco', 'prendas-delicadas', 'cortinas-y-blanqueria'],
  },
  {
    slug: 'camperas-y-abrigos',
    keyword: 'limpieza de camperas en Mar del Plata',
    metaTitle: 'Limpieza de camperas en Mar del Plata',
    metaDescription:
      'Limpieza de camperas de pluma, inflables, de paño, impermeables y de gamuza sintética en Mar del Plata. Cuidamos rellenos, cierres y terminaciones.',
    eyebrow: 'Camperas y abrigos · Mar del Plata',
    h1: 'Limpieza de camperas',
    h1Thin: 'que vuelven a abrigar.',
    lead: 'Camperas de pluma e inflables, de paño, impermeables y de gamuza sintética. Elegimos el proceso según el relleno y la tela, y cuidamos cierres, puños y terminaciones.',
    image: 'saco-lana',
    imageAlt: 'Detalle de un abrigo de paño color camel',
    intro: [
      'Una campera junta mucho uso: cuello y puños con grasa de la piel, bolsillos, manchas de lluvia y sal del aire de la costa. Lavarla mal puede apelmazar el relleno o arruinar la impermeabilidad.',
      'Por eso cada campera pasa por revisión de etiqueta, relleno, cierres y bolsillos antes de elegir entre limpieza en seco o lavado al agua.',
    ],
    items: [
      { title: 'Camperas de pluma e inflables', text: 'Secado completo para recuperar el volumen.' },
      { title: 'Tapados y abrigos de paño', text: 'Limpieza en seco para no encoger la lana.' },
      { title: 'Impermeables y rompevientos', text: 'Proceso que respeta la tela técnica.' },
      { title: 'Gamuza y cuero sintético', text: 'Limpieza suave según el material.' },
      { title: 'Parkas con capucha y piel sintética', text: 'Cuidamos el pelo de la piel y los ajustes.' },
      { title: 'Ropa de nieve', text: 'Camperas y pantalones antes y después del viaje.' },
    ],
    steps: [
      { icon: 'tag', title: 'Etiqueta y relleno', text: 'Definimos si va en seco o al agua según tela y relleno.' },
      { icon: 'hanger', title: 'Revisión de detalles', text: 'Cierres, broches, bolsillos, puños y capucha.' },
      { icon: 'washer', title: 'Limpieza', text: 'Ciclo adecuado al material, con pretratamiento de cuello y puños.' },
      { icon: 'clock', title: 'Secado y terminación', text: 'Secado completo y entrega en percha.' },
    ],
    priceFactors: ['Tipo de campera y largo', 'Relleno (pluma, sintético o sin relleno)', 'Material (paño, técnico, gamuza sintética)', 'Capucha o piel desmontable'],
    care: {
      title: 'Antes de guardar la campera de invierno',
      tips: [
        'Guardala limpia: las manchas de uso se oxidan con el tiempo.',
        'Vaciá los bolsillos y cerrá los cierres.',
        'Las inflables, colgadas o dobladas sueltas, nunca comprimidas por meses.',
        'Elegí un lugar seco y ventilado.',
      ],
    },
    faqs: [
      { q: '¿Se puede lavar una campera de pluma?', a: 'Sí, con un ciclo suave y un secado largo y completo para que la pluma no se apelmace.' },
      { q: '¿Pierde la impermeabilidad?', a: 'Elegimos un proceso que respeta la tela técnica. Si la campera ya tiene la capa gastada, te lo comentamos al recibirla.' },
      { q: '¿Limpian cuero o gamuza natural?', a: 'Consultanos con una foto por WhatsApp y te decimos si podemos hacerlo y cómo.' },
    ],
    related: ['limpieza-en-seco', 'acolchados-y-frazadas', 'prendas-delicadas'],
  },
  {
    slug: 'cortinas-y-blanqueria',
    keyword: 'lavado de cortinas en Mar del Plata',
    metaTitle: 'Lavado de cortinas en Mar del Plata',
    metaDescription:
      'Lavado de cortinas, manteles, sábanas, toallas y almohadones en Mar del Plata. Para casas, alquileres temporarios, hoteles y restaurantes.',
    eyebrow: 'Cortinas y blanquería · Mar del Plata',
    h1: 'Lavado de cortinas',
    h1Thin: 'y blanquería para casa y negocio.',
    lead: 'Cortinas, manteles, sábanas, toallas y almohadones. Para tu casa o por volumen para alquileres temporarios, hoteles y restaurantes.',
    image: 'blanqueria',
    imageAlt: 'Toallas blancas dobladas y apiladas junto a una planta',
    intro: [
      'Las cortinas juntan polvo, humo y la sal del aire de Mar del Plata. Lavarlas en casa suele terminar en telas encogidas o dobladillos desparejos.',
      'Las lavamos según la tela, desde voile y lino hasta blackout, y te las entregamos planchadas y dobladas o en percha, listas para colgar. La blanquería de casa y de negocio sale limpia, planchada y doblada.',
    ],
    items: [
      { title: 'Cortinas de tela y voile', text: 'Lavado según tela, sin encoger.' },
      { title: 'Cortinas blackout', text: 'Proceso que cuida la capa oscurecedora.' },
      { title: 'Manteles y servilletas', text: 'Manchas de comida y vino, planchado prolijo.' },
      { title: 'Sábanas y fundas', text: 'Lavadas, planchadas y dobladas.' },
      { title: 'Toallas y toallones', text: 'Suaves y sin olor a humedad.' },
      { title: 'Almohadones y fundas de sillón', text: 'Fundas desmontables y rellenos lavables.' },
    ],
    steps: [
      { icon: 'tag', title: 'Medidas y tela', text: 'Revisamos tela, forros, ganchos y dobladillos.' },
      { icon: 'drop', title: 'Pretratamiento', text: 'Manchas de comida, vino, humo o humedad.' },
      { icon: 'washer', title: 'Lavado según tela', text: 'Temperatura y ciclo según la fibra.' },
      { icon: 'iron', title: 'Planchado y doblado', text: 'Listas para colgar o guardar.' },
    ],
    priceFactors: ['Metros de tela o tamaño', 'Tipo de tela y forros', 'Cantidad de piezas', 'Frecuencia (para negocios)'],
    care: {
      title: 'Blanquería para la temporada',
      tips: [
        'Hacé un recambio antes de enero: la temporada no da tiempo.',
        'Separá manteles con manchas de vino y traelos rápido.',
        'Guardá la ropa de cama limpia en un lugar seco y ventilado.',
        'Para alquileres, conviene tener dos juegos por cama.',
      ],
    },
    faqs: [
      { q: '¿Tengo que descolgar las cortinas yo?', a: 'Sí, por ahora las recibimos descolgadas. Sacales los ganchos si se pueden quitar.' }, // TODO: confirmar si ofrecen descolgado
      { q: '¿Trabajan con alquileres temporarios y hoteles?', a: 'Sí. Armamos un circuito fijo de retiro y entrega con facturación mensual.' },
      { q: '¿Las cortinas encogen al lavarlas?', a: 'Elegimos el proceso según la tela para evitarlo. Si la tela es propensa a encoger, te lo avisamos antes.' },
    ],
    related: ['acolchados-y-frazadas', 'camisas', 'limpieza-en-seco'],
  },
  {
    slug: 'prendas-delicadas',
    keyword: 'limpieza de vestidos de fiesta en Mar del Plata',
    metaTitle: 'Limpieza de vestidos de fiesta en Mar del Plata',
    metaDescription:
      'Limpieza de vestidos de fiesta, de novia, seda, lana fina y prendas bordadas en Mar del Plata. Revisamos fibra y detalles antes de tocarlas.',
    eyebrow: 'Prendas delicadas · Mar del Plata',
    h1: 'Vestidos de fiesta',
    h1Thin: 'y prendas delicadas.',
    lead: 'Vestidos de fiesta y de novia, seda, lana fina, encaje y bordados. Revisamos fibra, etiqueta y cada detalle antes de tocarlos, y te consultamos si vemos algún riesgo.',
    image: 'control-prenda',
    imageAlt: 'Mujer revisando un vestido claro en su funda',
    intro: [
      'Un vestido de fiesta tiene telas finas, pedrería, encajes y costuras que no perdonan un error. La prisa es lo que más arruina estas prendas.',
      'Por eso las revisamos con vos al recibirlas: marcamos manchas (maquillaje, bebida, ruedo con tierra) y detalles frágiles, y elegimos el proceso más suave que las deje limpias. Se entregan en funda y percha, listas para guardar.',
    ],
    items: [
      { title: 'Vestidos de fiesta', text: 'Ruedos, maquillaje y bebidas, con cuidado de pedrería.' },
      { title: 'Vestidos de novia', text: 'Limpieza y entrega en funda para conservarlo.' },
      { title: 'Seda y satén', text: 'Sin marcas de agua ni pérdida de brillo.' },
      { title: 'Encajes y bordados', text: 'Revisión de detalles antes y después.' },
      { title: 'Lana fina y cashmere', text: 'Sin encoger ni deformar.' },
      { title: 'Trajes de comunión y ceremonia', text: 'Para la fecha y para guardarlos después.' },
    ],
    steps: [
      { icon: 'tag', title: 'Revisión con vos', text: 'Marcamos manchas y detalles frágiles en el ticket.' },
      { icon: 'spray', title: 'Pretratamiento a mano', text: 'Cada mancha según su origen y la tela.' },
      { icon: 'washer', title: 'Proceso suave', text: 'Limpieza en seco o al agua según fibra y apliques.' },
      { icon: 'hanger', title: 'Terminación y funda', text: 'Vaporizado, control final y entrega en funda.' },
    ],
    priceFactors: ['Largo y volumen de la prenda', 'Pedrería, encajes o bordados', 'Manchas a tratar', 'Tela (seda y satén llevan más cuidado)'],
    care: {
      title: 'Después de la fiesta',
      tips: [
        'Traelo cuanto antes: las manchas de bebida azucarada se oscurecen con el tiempo.',
        'No apliques quitamanchas ni agua sobre seda o satén.',
        'Colgalo en una percha acolchada, no de alambre.',
        'Para guardarlo, funda de tela que respire.',
      ],
    },
    faqs: [
      { q: '¿Limpian vestidos con pedrería o bordados?', a: 'Sí. Los revisamos antes y elegimos un proceso suave. Si algún aplique está flojo, te lo mostramos al recibirlo.' },
      { q: '¿Cuánto antes tengo que traer un vestido para un evento?', a: 'Te recomendamos una semana antes. Consultanos el plazo por WhatsApp según la prenda.' },
      { q: '¿Sale la mancha de maquillaje del cuello?', a: 'En general sí, con pretratamiento. Contanos de qué es la mancha cuando lo traigas.' },
    ],
    related: ['limpieza-en-seco', 'camisas', 'camperas-y-abrigos'],
  },
];

export const getServiceContent = (slug: string) => SERVICE_CONTENT.find((s) => s.slug === slug);
