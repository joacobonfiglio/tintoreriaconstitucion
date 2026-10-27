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
    slug: 'lavado-de-valet',
    keyword: 'lavado de valet en Mar del Plata',
    metaTitle: 'Lavado de valet en Mar del Plata',
    metaDescription:
      'Lavado de valet en Mar del Plata: tu ropa de todos los días lavada, secada y doblada. Dejás la bolsa y te avisamos por WhatsApp cuando está lista.',
    eyebrow: 'Lavado de valet · Mar del Plata',
    h1: 'Lavado de valet',
    h1Thin: 'tu ropa lavada, secada y doblada.',
    lead: 'Traés la ropa de todos los días en una bolsa y te la devolvemos lavada, seca y doblada, lista para guardar. Sin lavarropas, sin tender y sin esperar a que se seque.',
    image: 'toallas',
    imageAlt: 'Ropa limpia doblada y apilada: jeans, remeras y toallas',
    intro: [
      'El valet es el servicio para la ropa de uso diario: remeras, jeans, ropa interior, ropa deportiva, toallas y sábanas. Es ideal cuando no tenés tiempo, no tenés dónde tender o en Mar del Plata la humedad no deja secar nada.',
      'Antes de lavar separamos las prendas por color y tipo de tela, revisamos bolsillos y apartamos lo que necesita un cuidado distinto. Después secamos todo por completo y lo doblamos prenda por prenda.',
    ],
    items: [
      { title: 'Ropa de todos los días', text: 'Remeras, buzos, pantalones, jeans y ropa interior.' },
      { title: 'Ropa deportiva', text: 'Lavado que respeta telas técnicas y elásticas.' },
      { title: 'Sábanas y fundas', text: 'Lavadas, secadas y dobladas.' },
      { title: 'Toallas y toallones', text: 'Suaves y sin olor a humedad.' },
      { title: 'Ropa de bebé y de chicos', text: 'Separada del resto y con el cuidado que necesita.' },
      { title: 'Ropa de trabajo', text: 'Uniformes, ambos y delantales de uso diario.' },
    ],
    steps: [
      { icon: 'basin', title: 'Separamos', text: 'Por color y tipo de tela, y revisamos bolsillos antes de lavar.' },
      { icon: 'washer', title: 'Lavamos', text: 'Ciclo y temperatura según cada carga.' },
      { icon: 'clock', title: 'Secamos', text: 'Secado completo, sin olor a humedad.' },
      { icon: 'towels', title: 'Doblamos', text: 'Prenda por prenda, y te la entregamos en bolsa lista para guardar.' },
    ],
    priceFactors: ['Cantidad de ropa o de bolsas', 'Si incluye ropa de cama o toallas', 'Prendas que necesitan un lavado aparte', 'Si sumás planchado'],
    care: {
      title: 'Para preparar tu bolsa de valet',
      tips: [
        'Vaciá los bolsillos: monedas, papeles y pañuelos arruinan una carga.',
        'Avisanos si hay prendas que destiñen o que son nuevas.',
        'Separá las prendas delicadas o de vestir: van por otro servicio.',
        'Si alguna prenda tiene una mancha, contanos de qué es.',
      ],
    },
    // TODO: confirmar con el cliente si el valet incluye planchado y cómo se cobra (por bolsa, por kilo o por carga).
    faqs: [
      { q: '¿Qué incluye el lavado de valet?', a: 'Lavado, secado y doblado de la ropa de uso diario. Si querés que planchemos alguna prenda, avisanos y lo sumamos.' },
      { q: '¿Cuánto tarda?', a: 'En general está listo en 24 a 48 horas hábiles, según el volumen. Te avisamos por WhatsApp cuando podés retirarlo.' },
      { q: '¿Puedo mandar ropa delicada en el valet?', a: 'Mejor separala: trajes, vestidos, seda o lana fina tienen su propio servicio para que no corran riesgo.' },
      { q: '¿Cómo sé cuánto me va a salir?', a: 'Escribinos por WhatsApp contándonos cuánta ropa es y te pasamos el precio antes de que la traigas.' },
    ],
    related: ['lavado-de-camisas', 'lavado-de-acolchados', 'lavado-de-cortinas'],
  },
  {
    slug: 'lavado-de-trajes',
    keyword: 'lavado de trajes en Mar del Plata',
    metaTitle: 'Lavado de trajes en Mar del Plata',
    metaDescription:
      'Lavado de trajes, sacos, tapados y pantalones de vestir en Mar del Plata. Revisión prenda por prenda, precio antes de dejarla y aviso por WhatsApp.',
    eyebrow: 'Lavado de trajes · Mar del Plata',
    h1: 'Lavado de trajes',
    h1Thin: 'que vuelven con su forma.',
    lead: 'Trajes, sacos, tapados y pantalones de vestir. Los lavamos según la fibra para que no encojan, no pierdan la forma ni el color, y te los entregamos planchados.',
    image: 'traje',
    imageAlt: 'Detalle de un saco azul oscuro con botón',
    intro: [
      'Un traje no se lava como el resto de la ropa: la lana, el paño, los forros y las entretelas reaccionan distinto al agua, al calor y al planchado. Por eso elegimos el proceso según la fibra y la etiqueta de cada prenda.',
      'Antes de empezar leemos la etiqueta, confirmamos la fibra y marcamos manchas y zonas gastadas con vos en el mostrador. Después del lavado, cada prenda se plancha o vaporiza según su tela y se entrega en percha con funda.',
    ],
    items: [
      { title: 'Trajes y sacos', text: 'Lavado, vaporizado y planchado con forma de hombro y solapa.' },
      { title: 'Tapados y abrigos de paño', text: 'Sin encoger ni apelmazar la lana.' },
      { title: 'Pantalones de vestir', text: 'Con raya marcada o sin ella, como lo uses.' },
      { title: 'Chalecos y polleras de vestir', text: 'Cuidamos forros, pliegues y terminaciones.' },
      { title: 'Sweaters y tejidos finos', text: 'Lana, cashmere y mezclas que no toleran el lavarropas.' },
      { title: 'Corbatas y pañuelos', text: 'Sin perder brillo ni color.' },
    ],
    steps: [
      { icon: 'tag', title: 'Lectura de etiqueta', text: 'Confirmamos fibra y símbolos de cuidado. Si la prenda no tiene etiqueta, te lo decimos y elegimos el proceso más suave.' },
      { icon: 'drop', title: 'Pretratamiento de manchas', text: 'Cada mancha se trata según su origen y la tela antes de lavar.' },
      { icon: 'washer', title: 'Lavado según la fibra', text: 'Ciclo y temperatura adecuados para que la prenda no encoja ni pierda forma.' },
      { icon: 'iron', title: 'Planchado y control', text: 'Vaporizado o planchado según la tela, control final y entrega en percha con funda.' },
    ],
    priceFactors: ['Tipo de prenda y largo', 'Fibra y forros', 'Manchas que necesitan tratamiento aparte', 'Detalles como pliegues, bordados o apliques'],
    care: {
      title: 'Cómo cuidar un traje entre lavados',
      tips: [
        'Colgalo en percha ancha de hombro y dejalo descansar un día entre usos.',
        'Cepillalo suave después de usarlo para sacar polvo y pelusa.',
        'Para arrugas leves usá vapor, no plancha directa.',
        'Traelo ante cualquier mancha: cuanto más tiempo pasa, más difícil sale.',
      ],
    },
    faqs: [
      { q: '¿El traje puede encoger?', a: 'No, si se lava según su fibra. Por eso leemos la etiqueta y elegimos ciclo y temperatura para cada prenda antes de empezar.' },
      { q: '¿Cada cuánto conviene lavar un traje?', a: 'Entre 5 y 8 usos, o antes si tiene una mancha. Lavarlo demasiado seguido también lo desgasta.' },
      { q: '¿Cuánto tarda?', a: 'La mayoría de las prendas están listas en 48 a 72 horas hábiles. Te avisamos por WhatsApp cuando podés retirarla.' },
      { q: '¿Qué pasa si la prenda no tiene etiqueta?', a: 'Te lo decimos al recibirla y elegimos el proceso más suave. Si vemos algún riesgo, te consultamos antes de tocar la prenda.' },
    ],
    related: ['lavado-de-prendas-delicadas', 'lavado-de-camperas', 'lavado-de-camisas'],
  },
  {
    slug: 'lavado-de-acolchados',
    keyword: 'lavado de acolchados en Mar del Plata',
    metaTitle: 'Lavado de acolchados en Mar del Plata',
    metaDescription:
      'Lavado de acolchados de pluma, vellón y sintéticos, frazadas y mantas en Mar del Plata. Secado completo para que vuelvan esponjosos y sin olor a humedad.',
    eyebrow: 'Lavado de acolchados · Mar del Plata',
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
    related: ['lavado-de-cortinas', 'lavado-de-camperas', 'lavado-de-trajes'],
  },
  {
    slug: 'lavado-de-camisas',
    keyword: 'lavado y planchado de camisas en Mar del Plata',
    metaTitle: 'Lavado y planchado de camisas en Mar del Plata',
    metaDescription:
      'Lavado y planchado de camisas en Mar del Plata: cuello y puños firmes, entregadas en percha. Para el día a día o por cantidad para oficinas y uniformes.',
    eyebrow: 'Lavado de camisas · Mar del Plata',
    h1: 'Lavado de camisas',
    h1Thin: 'planchadas y listas para usar.',
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
    related: ['lavado-de-trajes', 'lavado-de-prendas-delicadas', 'lavado-de-cortinas'],
  },
  {
    slug: 'lavado-de-camperas',
    keyword: 'lavado de camperas en Mar del Plata',
    metaTitle: 'Lavado de camperas en Mar del Plata',
    metaDescription:
      'Lavado de camperas de pluma, inflables, de paño, impermeables y de gamuza sintética en Mar del Plata. Cuidamos rellenos, cierres y terminaciones.',
    eyebrow: 'Lavado de camperas · Mar del Plata',
    h1: 'Lavado de camperas',
    h1Thin: 'que vuelven a abrigar.',
    lead: 'Camperas de pluma e inflables, de paño, impermeables y de gamuza sintética. Elegimos el proceso según el relleno y la tela, y cuidamos cierres, puños y terminaciones.',
    image: 'saco-lana',
    imageAlt: 'Detalle de un abrigo de paño color camel',
    intro: [
      'Una campera junta mucho uso: cuello y puños con grasa de la piel, bolsillos, manchas de lluvia y sal del aire de la costa. Lavarla mal puede apelmazar el relleno o arruinar la impermeabilidad.',
      'Por eso cada campera pasa por revisión de etiqueta, relleno, cierres y bolsillos antes de elegir el ciclo de lavado.',
    ],
    items: [
      { title: 'Camperas de pluma e inflables', text: 'Secado completo para recuperar el volumen.' },
      { title: 'Tapados y abrigos de paño', text: 'Lavado según la fibra para no encoger la lana.' },
      { title: 'Impermeables y rompevientos', text: 'Proceso que respeta la tela técnica.' },
      { title: 'Gamuza y cuero sintético', text: 'Lavado suave según el material.' },
      { title: 'Parkas con capucha y piel sintética', text: 'Cuidamos el pelo de la piel y los ajustes.' },
      { title: 'Ropa de nieve', text: 'Camperas y pantalones antes y después del viaje.' },
    ],
    steps: [
      { icon: 'tag', title: 'Etiqueta y relleno', text: 'Definimos el ciclo de lavado según tela y relleno.' },
      { icon: 'hanger', title: 'Revisión de detalles', text: 'Cierres, broches, bolsillos, puños y capucha.' },
      { icon: 'washer', title: 'Lavado', text: 'Ciclo adecuado al material, con pretratamiento de cuello y puños.' },
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
      { q: '¿Lavan cuero o gamuza natural?', a: 'Consultanos con una foto por WhatsApp y te decimos si podemos hacerlo y cómo.' },
    ],
    related: ['lavado-de-trajes', 'lavado-de-acolchados', 'lavado-de-prendas-delicadas'],
  },
  {
    slug: 'lavado-de-cortinas',
    keyword: 'lavado de cortinas en Mar del Plata',
    metaTitle: 'Lavado de cortinas en Mar del Plata',
    metaDescription:
      'Lavado de cortinas, manteles, sábanas, toallas y almohadones en Mar del Plata. Para casas, alquileres temporarios, hoteles y restaurantes.',
    eyebrow: 'Lavado de cortinas · Mar del Plata',
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
    related: ['lavado-de-acolchados', 'lavado-de-camisas', 'lavado-de-trajes'],
  },
  {
    slug: 'lavado-de-prendas-delicadas',
    keyword: 'lavado de prendas delicadas en Mar del Plata',
    metaTitle: 'Lavado de prendas delicadas en Mar del Plata',
    metaDescription:
      'Lavado de vestidos de fiesta, de novia, seda, lana fina y prendas bordadas en Mar del Plata. Revisamos fibra y detalles antes de tocarlas.',
    eyebrow: 'Lavado de prendas delicadas · Mar del Plata',
    h1: 'Lavado de prendas delicadas',
    h1Thin: 'y vestidos de fiesta.',
    lead: 'Vestidos de fiesta y de novia, seda, lana fina, encaje y bordados. Revisamos fibra, etiqueta y cada detalle antes de tocarlos, y te consultamos si vemos algún riesgo.',
    image: 'control-prenda',
    imageAlt: 'Mujer revisando un vestido claro en su funda',
    intro: [
      'Un vestido de fiesta tiene telas finas, pedrería, encajes y costuras que no perdonan un error. La prisa es lo que más arruina estas prendas.',
      'Por eso las revisamos con vos al recibirlas: marcamos manchas (maquillaje, bebida, ruedo con tierra) y detalles frágiles, y elegimos el proceso más suave que las deje limpias. Se entregan en funda y percha, listas para guardar.',
    ],
    items: [
      { title: 'Vestidos de fiesta', text: 'Ruedos, maquillaje y bebidas, con cuidado de pedrería.' },
      { title: 'Vestidos de novia', text: 'Lavado y entrega en funda para conservarlo.' },
      { title: 'Seda y satén', text: 'Sin marcas de agua ni pérdida de brillo.' },
      { title: 'Encajes y bordados', text: 'Revisión de detalles antes y después.' },
      { title: 'Lana fina y cashmere', text: 'Sin encoger ni deformar.' },
      { title: 'Trajes de comunión y ceremonia', text: 'Para la fecha y para guardarlos después.' },
    ],
    steps: [
      { icon: 'tag', title: 'Revisión con vos', text: 'Marcamos manchas y detalles frágiles en el ticket.' },
      { icon: 'spray', title: 'Pretratamiento a mano', text: 'Cada mancha según su origen y la tela.' },
      { icon: 'washer', title: 'Lavado suave', text: 'Ciclo delicado según fibra y apliques.' },
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
      { q: '¿Lavan vestidos con pedrería o bordados?', a: 'Sí. Los revisamos antes y elegimos un proceso suave. Si algún aplique está flojo, te lo mostramos al recibirlo.' },
      { q: '¿Cuánto antes tengo que traer un vestido para un evento?', a: 'Te recomendamos una semana antes. Consultanos el plazo por WhatsApp según la prenda.' },
      { q: '¿Sale la mancha de maquillaje del cuello?', a: 'En general sí, con pretratamiento. Contanos de qué es la mancha cuando lo traigas.' },
    ],
    related: ['lavado-de-trajes', 'lavado-de-camisas', 'lavado-de-camperas'],
  },
];

export const getServiceContent = (slug: string) => SERVICE_CONTENT.find((s) => s.slug === slug);
