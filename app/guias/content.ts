// Guías y consejos (/guias). Acá se agregan las notas nuevas: es el contenido con
// el que la web pelea búsquedas que no son "tintorería en Mar del Plata".
//
// Para sumar una guía: copiá un objeto de GUIDES, cambiá el slug (va en la URL y no
// se cambia después) y escribí el cuerpo con los bloques de abajo. No hace falta
// tocar el sitemap ni el menú: salen solos de esta lista.
//
// Bloques disponibles:
//   { t: 'p',     text }                        párrafo
//   { t: 'h2',    text }                        subtítulo (sin punto final)
//   { t: 'h3',    text }                        sub-subtítulo
//   { t: 'ul',    items: [] }                   lista con viñetas
//   { t: 'ol',    items: [] }                   lista numerada
//   { t: 'steps', items: [{ title, text }] }    pasos numerados y destacados
//   { t: 'note',  title, text }                 recuadro de aviso
//   { t: 'table', head: [], rows: [[]] }        tabla

export type Block =
  | { t: 'p'; text: string }
  | { t: 'h2'; text: string }
  | { t: 'h3'; text: string }
  | { t: 'ul'; items: string[] }
  | { t: 'ol'; items: string[] }
  | { t: 'steps'; items: { title: string; text: string }[] }
  | { t: 'note'; title: string; text: string }
  | { t: 'table'; head: string[]; rows: string[][] };

export type Guide = {
  /** Va en la URL: /guias/<slug>. Una vez publicado no se cambia. */
  slug: string;
  /** Búsqueda principal de la nota: aparece en el title, el H1 y el primer párrafo. */
  keyword: string;
  metaTitle: string;
  metaDescription: string;
  /** H1 de la nota. Sin punto final. */
  title: string;
  /** Resumen de una o dos líneas para la tarjeta del índice. */
  excerpt: string;
  /** Etiqueta corta para agrupar notas en el índice. */
  category: string;
  /** Fecha de publicación, en formato AAAA-MM-DD. */
  date: string;
  /** Fecha de la última edición, si se actualizó. */
  updated?: string;
  image: string;
  imageAlt: string;
  body: Block[];
  faqs?: { q: string; a: string }[];
  /** Slugs de /servicios relacionados: se enlazan al pie de la nota. */
  services: string[];
  /** Slugs de otras guías relacionadas. */
  related: string[];
};

export const GUIDES: Guide[] = [
  {
    slug: 'como-lavar-un-acolchado-de-plumas',
    keyword: 'cómo lavar un acolchado de plumas',
    metaTitle: 'Cómo lavar un acolchado de plumas sin arruinarlo',
    metaDescription:
      'Guía paso a paso para lavar un acolchado de plumas en casa: programa, detergente, secado y los errores que lo apelmazan. Por qué el secado es lo difícil.',
    title: 'Cómo lavar un acolchado de plumas sin arruinarlo',
    excerpt:
      'El lavado es la parte fácil. Lo que arruina un acolchado de plumas es el secado, y en una ciudad húmeda como Mar del Plata eso se nota todavía más.',
    category: 'Acolchados',
    date: '2026-11-06',
    image: 'acolchados',
    imageAlt: 'Tres acolchados enrollados en gris, celeste y rosa',
    body: [
      {
        t: 'p',
        text: 'Saber cómo lavar un acolchado de plumas es, en realidad, saber cómo secarlo. Lavarlo es sencillo: agua fría, poco detergente y un programa suave. El problema aparece después, cuando el relleno queda con humedad adentro, se apelmaza y aparece ese olor a guardado que ya no se va con un lavado más.',
      },
      { t: 'h2', text: 'Antes de meterlo al lavarropas' },
      {
        t: 'ul',
        items: [
          'Leé la etiqueta. Si tiene un círculo, el fabricante pide limpieza profesional y el lavado en casa corre por tu cuenta.',
          'Revisá las costuras. Un hilo flojo se abre dentro del tambor y termina con plumas por todo el lavarropas.',
          'Mirá la capacidad de tu lavarropas. Para un acolchado de dos plazas necesitás 8 kg o más. Si entra apretado, no se lava: se amasa.',
          'Sacale las fundas y lavalas aparte, con su propio programa.',
        ],
      },
      {
        t: 'note',
        title: 'Si tu lavarropas tiene agitador central',
        text: 'Los modelos de carga superior con paleta en el medio enganchan y estiran las costuras internas del acolchado. En ese caso es mejor no intentarlo en casa.',
      },
      { t: 'h2', text: 'El lavado, paso a paso' },
      {
        t: 'steps',
        items: [
          {
            title: 'Programa delicado y agua fría',
            text: 'Hasta 30 °C. El agua caliente desengrasa la pluma y le saca la capacidad de inflarse, que es justamente lo que abriga.',
          },
          {
            title: 'Detergente líquido neutro, y poco',
            text: 'La mitad de lo que usarías para una carga de ropa. El detergente en polvo no se disuelve del todo y queda atrapado en el relleno.',
          },
          {
            title: 'Nada de suavizante ni lavandina',
            text: 'El suavizante recubre la pluma y la apelmaza. La lavandina directamente la quema y la vuelve quebradiza.',
          },
          {
            title: 'Doble enjuague',
            text: 'Es el paso que más gente saltea. El jabón que queda adentro es lo que después endurece el relleno.',
          },
          {
            title: 'Centrifugado suave y largo',
            text: 'Cuanta menos agua salga del lavarropas, más horas de secado te esperan.',
          },
        ],
      },
      { t: 'h2', text: 'El secado es la parte difícil' },
      {
        t: 'p',
        text: 'Un acolchado de plumas necesita horas de secadora a temperatura baja, no un rato. Tirá dos o tres pelotas de tenis limpias adentro del tambor: golpean el relleno y lo vuelven a separar mientras se seca. Cada 30 o 40 minutos sacalo, sacudilo bien y deshacé con la mano los grumos que encuentres.',
      },
      {
        t: 'p',
        text: 'Colgarlo al sol no alcanza. La superficie se seca en unas horas y el centro queda húmedo durante días, y en Mar del Plata, con la humedad que viene del mar, eso no cambia ni en pleno verano. Ese núcleo húmedo es exactamente donde después aparece el olor.',
      },
      { t: 'h3', text: 'Cómo saber si quedó realmente seco' },
      {
        t: 'ul',
        items: [
          'Apretalo con la mano en varios puntos: no tiene que haber ninguna zona más pesada o más fría que el resto.',
          'Olelo de cerca, sobre todo en el centro. Cualquier olor a encierro significa que le falta.',
          'Sacudilo: si las plumas se distribuyen parejas y vuelve a inflarse, está listo.',
        ],
      },
      { t: 'h2', text: 'Los cinco errores que más lo arruinan' },
      {
        t: 'ol',
        items: [
          'Usar agua caliente, que le saca el poder de abrigo a la pluma.',
          'Poner suavizante, que la apelmaza sin vuelta atrás.',
          'Saltear el segundo enjuague y dejar jabón adentro.',
          'Darlo por seco cuando solo se secó por fuera.',
          'Guardarlo en una bolsa de plástico cerrada, donde la poca humedad que queda no tiene por dónde salir.',
        ],
      },
      { t: 'h2', text: 'Cada cuánto lavarlo' },
      {
        t: 'p',
        text: 'Una o dos veces al año alcanza: al final del invierno, antes de guardarlo, y al sacarlo si estuvo mucho tiempo en un placard. Si usás funda y la lavás cada dos semanas, el acolchado casi no se ensucia y le estirás la vida bastante.',
      },
      { t: 'h2', text: 'Cuándo conviene llevarlo' },
      {
        t: 'p',
        text: 'Si es de plumón, si es de dos plazas y tu lavarropas es chico, si no tenés secadora grande o si ya tiene olor a humedad de un lavado anterior, el lavado en casa suele terminar peor que como empezó. Nosotros lo lavamos y lo secamos en equipos industriales, que es lo que le devuelve el volumen, y te lo entregamos seco de punta a punta.',
      },
    ],
    faqs: [
      {
        q: '¿Se puede lavar un acolchado de plumas en el lavarropas de casa?',
        a: 'Sí, si el tambor es de 8 kg o más, no tiene agitador central y contás con una secadora grande. Sin secadora, el relleno queda húmedo por dentro y aparece olor.',
      },
      {
        q: '¿Por qué mi acolchado quedó duro y con grumos?',
        a: 'Casi siempre por dos motivos: quedó jabón adentro porque faltó enjuague, o se secó mal y las plumas se pegaron entre sí. Un lavado y secado profesional suele recuperarlo.',
      },
      {
        q: '¿Cuánto tarda la limpieza de un acolchado?',
        a: 'Unos días más que una prenda común, justamente por el secado. Te avisamos por WhatsApp cuando está listo.',
      },
    ],
    services: ['limpieza-de-acolchados', 'limpieza-de-cortinas'],
    related: ['como-guardar-la-ropa-de-invierno', 'simbolos-de-las-etiquetas-de-la-ropa'],
  },

  {
    slug: 'como-sacar-manchas-de-la-ropa',
    keyword: 'cómo sacar manchas de la ropa',
    metaTitle: 'Cómo sacar manchas de la ropa según el tipo',
    metaDescription:
      'Vino, aceite, sangre, transpiración, lapicera o pasto: qué hacer con cada mancha, qué no hacer nunca y en qué momento conviene parar y llevar la prenda.',
    title: 'Cómo sacar manchas de la ropa según el tipo',
    excerpt:
      'No todas las manchas se tratan igual, y la mayoría de las prendas no se arruinan por la mancha sino por lo que se hace para sacarla.',
    category: 'Manchas',
    date: '2026-11-06',
    image: 'manos-tela',
    imageAlt: 'Manos revisando una tela celeste sobre una mesa de trabajo',
    body: [
      {
        t: 'p',
        text: 'La pregunta de cómo sacar manchas de la ropa casi nunca tiene una sola respuesta: depende de qué cayó y sobre qué tela. Pero hay cinco reglas que sirven para todas, y seguirlas ya evita la mayoría de los desastres.',
      },
      { t: 'h2', text: 'Las cinco reglas que valen para cualquier mancha' },
      {
        t: 'ol',
        items: [
          'Actuá rápido. Una mancha fresca sale con agua; la misma mancha a los tres días ya se fijó a la fibra.',
          'Absorbé, no frotes. Apoyá un paño limpio y presioná. Frotar abre la mancha y levanta las fibras, dejando una zona opaca que después se nota más que la mancha.',
          'Agua fría, salvo que sepas que es grasa. El agua caliente cocina las manchas de origen animal o vegetal (sangre, huevo, leche, vino) y las vuelve permanentes.',
          'Probá en un lugar escondido. El ruedo interno o la costura de la costura lateral te dicen si el producto destiñe antes de que sea tarde.',
          'Nada de secadora ni plancha hasta estar seguro. El calor es lo que convierte una mancha tratable en una definitiva.',
        ],
      },
      { t: 'h2', text: 'Qué hacer con cada mancha' },
      { t: 'h3', text: 'Vino tinto' },
      {
        t: 'p',
        text: 'Absorbé todo el líquido que puedas con papel o un paño. Cubrí la mancha con sal fina o talco y dejá que chupe unos minutos. Después enjuagá con agua fría desde el revés de la tela, para empujar la mancha hacia afuera y no hacia adentro. El agua caliente y la sal gruesa no ayudan.',
      },
      { t: 'h3', text: 'Café y té' },
      {
        t: 'p',
        text: 'Agua fría desde el revés, de inmediato. Si ya se secó, dejá la zona en remojo en agua fría una media hora antes de lavar. En prendas claras, un poco de jabón blanco suave sobre la mancha húmeda ayuda.',
      },
      { t: 'h3', text: 'Aceite y grasa' },
      {
        t: 'p',
        text: 'Es la única familia donde el agua no es tu aliada. Cubrí con talco, fécula de maíz o incluso polvo de hornear y dejá al menos 20 minutos para que absorba. Sacudí el polvo, poné una gota de detergente de cocina sobre la mancha, dejá actuar y recién ahí lavá con agua tibia.',
      },
      { t: 'h3', text: 'Sangre' },
      {
        t: 'p',
        text: 'Agua fría y nada más que fría, cuanto antes. Si ya está seca, remojá en agua fría con sal. El agua caliente coagula la proteína y la fija a la fibra para siempre.',
      },
      { t: 'h3', text: 'Transpiración y desodorante' },
      {
        t: 'p',
        text: 'Esas marcas amarillas de las axilas son la mezcla del aluminio del desodorante con la transpiración, y se acumulan lavado tras lavado. Dejá la zona en remojo con agua fría y un poco de bicarbonato antes del lavado normal. Si la camisa ya está rígida y amarilla en esa zona, es un trabajo de tintorería.',
      },
      { t: 'h3', text: 'Lapicera y tinta' },
      {
        t: 'p',
        text: 'Poné un paño limpio debajo de la mancha, para que reciba lo que salga. Mojá un algodón con alcohol y tocá la mancha desde arriba, sin frotar, cambiando el paño de abajo a medida que se ensucia. Enjuagá y lavá.',
      },
      { t: 'h3', text: 'Barro y pasto' },
      {
        t: 'p',
        text: 'Con el barro, lo contrario de la regla general: dejalo secar del todo y cepillá la tierra suelta antes de mojar nada. El pasto, en cambio, responde bien al alcohol aplicado con un algodón antes del lavado.',
      },
      { t: 'h3', text: 'Maquillaje y base' },
      {
        t: 'p',
        text: 'Casi todas las bases tienen aceite, así que se tratan como una mancha de grasa: nunca agua primero. Un poco de detergente de cocina sobre la mancha seca, dejar actuar y lavar.',
      },
      { t: 'h3', text: 'Chicle y cera' },
      {
        t: 'p',
        text: 'Hielo en una bolsita sobre la mancha hasta que endurezca, y después desprendela con el borde de una cuchara. Para la cera de vela, lo que queda sale poniendo papel absorbente encima y pasando la plancha tibia, para que el papel chupe la cera derretida.',
      },
      { t: 'h2', text: 'Tabla rápida' },
      {
        t: 'table',
        head: ['Mancha', 'Agua', 'Primer paso'],
        rows: [
          ['Vino tinto', 'Fría', 'Absorber y cubrir con sal fina'],
          ['Café', 'Fría', 'Enjuagar desde el revés'],
          ['Aceite', 'Nunca primero', 'Talco o fécula, 20 minutos'],
          ['Sangre', 'Fría', 'Enjuagar de inmediato'],
          ['Transpiración', 'Fría', 'Remojo con bicarbonato'],
          ['Tinta', 'Después', 'Alcohol con paño debajo'],
          ['Barro', 'Después', 'Dejar secar y cepillar'],
          ['Chicle', 'No', 'Hielo y raspar'],
        ],
      },
      { t: 'h2', text: 'Cuándo conviene parar' },
      {
        t: 'p',
        text: 'Hay un punto donde seguir probando cuesta más caro que la limpieza. Pará y traenos la prenda si es de seda, lana, cuero o gamuza; si tiene forro, bordados o pedrería; si es un vestido o un traje de ceremonia; si la mancha ya pasó por la secadora; o si lo que probaste dejó un halo más claro alrededor.',
      },
      {
        t: 'note',
        title: 'Contanos qué cayó',
        text: 'Cuando nos traigas la prenda, decinos qué la manchó y cuánto hace. Con ese dato elegimos el tratamiento correcto desde el principio, en lugar de ir probando.',
      },
    ],
    faqs: [
      {
        q: '¿Sirve la lavandina para cualquier mancha?',
        a: 'No. En prendas de color destiñe y en lana o seda directamente quema la fibra. Incluso en algodón blanco, usada seguido, amarillea la tela.',
      },
      {
        q: '¿Se puede sacar una mancha vieja?',
        a: 'Muchas veces sí, sobre todo las de origen graso. Las que ya pasaron por calor son las más difíciles, pero conviene que las vea alguien antes de darlas por perdidas.',
      },
      {
        q: '¿Qué hago si la mancha ya pasó por el secarropas?',
        a: 'No la trates más en casa: el calor la fijó y cada intento adicional suele dejar un halo. Traela y la vemos.',
      },
    ],
    services: ['limpieza-de-prendas-delicadas', 'limpieza-de-camisas', 'limpieza-de-trajes'],
    related: ['cada-cuanto-limpiar-un-traje', 'simbolos-de-las-etiquetas-de-la-ropa'],
  },

  {
    slug: 'cada-cuanto-limpiar-un-traje',
    keyword: 'cada cuánto limpiar un traje',
    metaTitle: 'Cada cuánto limpiar un traje (y cómo cuidarlo entre limpiezas)',
    metaDescription:
      'Cada cuántos usos conviene limpiar un saco, por qué limpiar de más también lo desgasta y qué hacer entre limpieza y limpieza para que dure años.',
    title: 'Cada cuánto limpiar un traje y cómo cuidarlo entre limpiezas',
    excerpt:
      'Limpiar poco arruina un traje, pero limpiar de más también. El punto justo depende de cuánto lo usás, y de lo que hagas las otras semanas.',
    category: 'Trajes',
    date: '2026-11-06',
    image: 'vaporizado',
    imageAlt: 'Vaporizadora de mano pasando sobre una prenda oscura',
    body: [
      {
        t: 'p',
        text: 'La respuesta corta a cada cuánto limpiar un traje: el saco, cada tres o cuatro usos completos, o dos a tres veces por temporada si lo usás poco. El pantalón, bastante más seguido, porque roza, se sienta y toma olor antes.',
      },
      { t: 'h2', text: 'Por qué no conviene limpiarlo todas las semanas' },
      {
        t: 'p',
        text: 'Cada limpieza, por cuidada que sea, pasa solventes o agua por la lana y mueve las entretelas que le dan forma al saco. Un traje que entra a la tintorería todas las semanas pierde cuerpo en los hombros y brillo en los codos mucho antes que uno que entra cuatro veces al año. La idea no es limpiar seguido, es limpiar cuando hace falta.',
      },
      { t: 'h2', text: 'Las señales de que ya le toca' },
      {
        t: 'ul',
        items: [
          'Guarda olor después de airearlo una noche entera.',
          'El cuello o los puños se ven más oscuros que el resto.',
          'La tela perdió caída y queda arrugada aunque esté colgada.',
          'Hay manchas, por chicas que sean: cuanto más esperan, menos salen.',
          'Termina la temporada y lo vas a guardar varios meses.',
        ],
      },
      {
        t: 'note',
        title: 'Saco y pantalón, siempre juntos',
        text: 'Aunque solo esté sucio uno de los dos. Si los limpiás por separado, con el tiempo toman tonos distintos y el traje deja de verse como un conjunto.',
      },
      { t: 'h2', text: 'Qué hacer entre limpieza y limpieza' },
      {
        t: 'steps',
        items: [
          {
            title: 'Colgalo apenas te lo sacás',
            text: 'En percha ancha, de hombro curvo. Las perchas de alambre finitas deforman el hombro del saco en pocas semanas.',
          },
          {
            title: 'Dejalo airear 24 horas',
            text: 'Fuera del placard, en un lugar ventilado. La mayor parte del olor se va solo, sin ningún producto.',
          },
          {
            title: 'Cepillalo en el sentido de la tela',
            text: 'Un cepillo de cerda suave saca el polvo y las fibras que, acumuladas, son lo que apaga el color de la lana.',
          },
          {
            title: 'Vaporizá en lugar de planchar',
            text: 'El vapor relaja las arrugas sin aplastar la tela. La plancha directa sobre la lana deja brillos que después no se van.',
          },
          {
            title: 'Vaciá los bolsillos antes de colgarlo',
            text: 'Un celular o un manojo de llaves olvidado deforma la caída del saco mientras está guardado.',
          },
        ],
      },
      { t: 'h2', text: 'Cada cuánto, según la prenda' },
      {
        t: 'table',
        head: ['Prenda', 'Cada cuánto', 'Nota'],
        rows: [
          ['Saco de traje', 'Cada 3 o 4 usos', 'Siempre junto al pantalón'],
          ['Pantalón de vestir', 'Cada 2 o 3 usos', 'Se ensucia antes que el saco'],
          ['Camisa', 'Cada uso', 'La transpiración amarillea el cuello'],
          ['Corbata', 'Solo si se mancha', 'Nunca lavar en casa'],
          ['Tapado de paño', '1 o 2 veces por temporada', 'Siempre antes de guardarlo'],
        ],
      },
      { t: 'h2', text: 'Antes de guardarlo por varios meses' },
      {
        t: 'p',
        text: 'Esta es la regla que más se saltea: un traje se guarda limpio, siempre. Las manchas que no se ven igual están ahí, y durante el verano se oxidan y aparecen marcadas en marzo. Además, los restos de comida y transpiración son justamente lo que atrae a las polillas. Guardalo en funda de tela, nunca en bolsa de plástico cerrada.',
      },
      {
        t: 'p',
        text: 'Si querés, te lo retiramos, lo limpiamos y te lo devolvemos planchado, en percha y con funda, listo para guardar o para usar.',
      },
    ],
    faqs: [
      {
        q: '¿Puedo lavar un traje en casa?',
        a: 'Salvo que la etiqueta lo permita expresamente, no. La lana encoge y las entretelas del saco se deforman con el agua, y eso no tiene arreglo.',
      },
      {
        q: '¿Cuánto tarda la limpieza de un traje?',
        a: 'Entre 48 y 72 horas hábiles. Te avisamos por WhatsApp cuando está listo.',
      },
      {
        q: '¿Qué hago si solo se manchó el saco?',
        a: 'Traelo con el pantalón igual. Limpiarlos por separado hace que con el tiempo queden de tonos distintos.',
      },
    ],
    services: ['limpieza-de-trajes', 'limpieza-de-camisas'],
    related: ['como-guardar-la-ropa-de-invierno', 'como-sacar-manchas-de-la-ropa'],
  },

  {
    slug: 'como-guardar-la-ropa-de-invierno',
    keyword: 'cómo guardar la ropa de invierno',
    metaTitle: 'Cómo guardar la ropa de invierno sin que se arruine',
    metaDescription:
      'Qué lavar antes de guardar, cómo evitar el olor a humedad y las polillas, y qué prendas se cuelgan y cuáles se doblan. Pensado para el clima de la costa.',
    title: 'Cómo guardar la ropa de invierno sin que se arruine',
    excerpt:
      'La ropa casi nunca se arruina en invierno: se arruina guardada. Humedad, manchas invisibles y polillas hacen el trabajo mientras no la mirás.',
    category: 'Guardado',
    date: '2026-11-06',
    image: 'perchas',
    imageAlt: 'Prendas en fundas plásticas colgadas en perchas de madera',
    body: [
      {
        t: 'p',
        text: 'Cuando alguien pregunta cómo guardar la ropa de invierno, casi siempre está pensando en dónde ponerla. Pero lo que define si en abril la vas a encontrar impecable o con manchas amarillas y olor a encierro pasa antes de guardarla.',
      },
      { t: 'h2', text: 'Primera regla: todo limpio, sin excepciones' },
      {
        t: 'p',
        text: 'Una prenda guardada sucia no se queda igual: empeora. Los restos de transpiración, perfume y comida se oxidan con los meses y aparecen como manchas amarillentas que no estaban cuando la guardaste, y que después salen mucho peor. Y son justo esos restos, no la lana en sí, lo que atrae a las polillas.',
      },
      {
        t: 'note',
        title: 'Ojo con la prenda que usaste una sola vez',
        text: 'Es la que más se guarda sin lavar, porque "está casi nueva". También es la que más veces aparece manchada en la primera semana de frío.',
      },
      { t: 'h2', text: 'Segunda regla: completamente seca' },
      {
        t: 'p',
        text: 'Acá en Mar del Plata esto pesa más que en otros lados. El aire de la costa es húmedo todo el año, y una campera que se guarda apenas húmeda pasa seis meses en un placard cerrado fermentando ese poquito de agua. El resultado es el olor a humedad, y en el peor caso, manchas de moho que ya no salen.',
      },
      {
        t: 'p',
        text: 'Antes de guardar cualquier abrigo voluminoso, dejalo un día entero extendido en un lugar ventilado, aunque venga de la secadora. El relleno tarda mucho más que la tela de afuera.',
      },
      { t: 'h2', text: 'Qué se cuelga y qué se dobla' },
      {
        t: 'table',
        head: ['Prenda', 'Cómo', 'Por qué'],
        rows: [
          ['Sweaters y lana', 'Doblados', 'Colgados se estiran del hombro y quedan deformes'],
          ['Sacos y tapados', 'Colgados', 'Percha ancha, para que no se marque el hombro'],
          ['Camperas de pluma', 'Colgadas o sueltas', 'Nunca comprimidas: la pluma pierde volumen'],
          ['Bufandas y gorros', 'Doblados', 'En caja o cajón, lejos de la luz'],
          ['Acolchados', 'Sueltos en funda de tela', 'Al vacío por meses, el relleno se apelmaza'],
        ],
      },
      { t: 'h2', text: 'Dónde guardarla' },
      {
        t: 'ul',
        items: [
          'Seco, oscuro y con algo de ventilación. La luz directa decolora y el encierro total concentra la humedad.',
          'Nunca en el piso ni contra una pared exterior: son los dos puntos donde más condensa.',
          'Fundas de tela o algodón, no bolsas de plástico cerradas. El plástico no deja salir la humedad y la encierra contra la prenda.',
          'Si usás cajas, que sean de cartón o tela, y no las llenes hasta arriba.',
        ],
      },
      { t: 'h2', text: 'Polillas, sin arruinar la ropa' },
      {
        t: 'p',
        text: 'Las bolsitas de lavanda y las maderitas de cedro funcionan bien y no dejan olor desagradable, pero hay que renovarlas: a los pocos meses pierden efecto. La naftalina es efectiva pero deja un olor que cuesta sacar, así que si la usás, que nunca toque la tela directamente. Y si encontrás un agujerito, revisá todo el placard: nunca viene solo.',
      },
      { t: 'h2', text: 'A mitad de temporada, revisá' },
      {
        t: 'p',
        text: 'Una vez en el verano, abrí, mirá y ventilá media hora. Es poco trabajo y es la diferencia entre encontrar un problema a tiempo y encontrarlo cuando ya no tiene arreglo.',
      },
      {
        t: 'p',
        text: 'Si querés sacarte de encima la parte del lavado, podés mandarnos todo junto antes de guardar: acolchados, camperas, tapados y sweaters van en el mismo pedido y te los devolvemos limpios, secos y en funda.',
      },
    ],
    faqs: [
      {
        q: '¿Puedo guardar la ropa en bolsas de plástico al vacío?',
        a: 'Para ropa de algodón y sintéticos, por poco tiempo, sí. Para plumas y lana no conviene: la compresión hace que el relleno pierda volumen y no siempre lo recupera.',
      },
      {
        q: '¿Cómo saco el olor a guardado?',
        a: 'Si es leve, ventilar unas horas suele alcanzar. Si persiste, es humedad que quedó en la fibra y hace falta un lavado y secado completo.',
      },
      {
        q: '¿Hay que limpiar los abrigos antes de guardarlos aunque se vean limpios?',
        a: 'Sí. Las manchas de transpiración y perfume no se ven, pero se oxidan durante el verano y aparecen marcadas al sacarlos.',
      },
    ],
    services: ['limpieza-de-camperas', 'limpieza-de-acolchados', 'limpieza-de-trajes'],
    related: ['como-lavar-un-acolchado-de-plumas', 'cada-cuanto-limpiar-un-traje'],
  },

  {
    slug: 'simbolos-de-las-etiquetas-de-la-ropa',
    keyword: 'símbolos de las etiquetas de la ropa',
    metaTitle: 'Símbolos de las etiquetas de la ropa: qué significa cada uno',
    metaDescription:
      'El balde, el triángulo, el cuadrado, la plancha y el círculo. Qué pide cada símbolo de la etiqueta, qué significan los puntos y las rayas, y qué prohíbe la cruz.',
    title: 'Símbolos de las etiquetas de la ropa y qué significa cada uno',
    excerpt:
      'Son cinco figuras y una sola lógica. Una vez que la entendés, cualquier etiqueta del mundo se lee en diez segundos.',
    category: 'Etiquetas',
    date: '2026-11-06',
    image: 'control-prenda',
    imageAlt: 'Mujer revisando un vestido claro dentro de su funda',
    body: [
      {
        t: 'p',
        text: 'Los símbolos de las etiquetas de la ropa parecen muchos, pero son cinco figuras, siempre en el mismo orden, y tres modificadores que se repiten en todas. Con eso ya alcanza.',
      },
      { t: 'h2', text: 'Las cinco figuras' },
      {
        t: 'table',
        head: ['Figura', 'De qué habla'],
        rows: [
          ['Balde con agua', 'Lavado: si se puede y a qué temperatura'],
          ['Triángulo', 'Blanqueo: si acepta lavandina'],
          ['Cuadrado', 'Secado: al aire o en secarropas'],
          ['Plancha', 'Planchado: a qué temperatura'],
          ['Círculo', 'Limpieza profesional: tintorería'],
        ],
      },
      { t: 'h2', text: 'Los tres modificadores' },
      {
        t: 'ul',
        items: [
          'La cruz encima de cualquier figura significa prohibido. Es el símbolo más importante de toda la etiqueta.',
          'Los puntos dentro de la figura indican temperatura: un punto es baja, dos es media, tres es alta. En el balde, a veces el número directamente dice los grados.',
          'Las rayas debajo de la figura piden suavidad: una raya es ciclo delicado, dos rayas es muy delicado.',
        ],
      },
      { t: 'h3', text: 'El balde, en detalle' },
      {
        t: 'ul',
        items: [
          'Balde con un número (30, 40, 60): temperatura máxima del agua en grados.',
          'Balde con una mano adentro: solo lavado a mano, con agua tibia o fría.',
          'Balde tachado: no se lava con agua. Casi siempre viene acompañado de un círculo.',
        ],
      },
      { t: 'h3', text: 'El cuadrado, en detalle' },
      {
        t: 'ul',
        items: [
          'Cuadrado con un círculo adentro: se puede usar secarropas. Los puntos indican la temperatura.',
          'Cuadrado con una raya horizontal: secar en plano. Es el de los sweaters de lana, que colgados se estiran.',
          'Cuadrado con una raya diagonal en la esquina: secar a la sombra.',
          'Cuadrado con el círculo tachado: no va a la secadora.',
        ],
      },
      { t: 'h3', text: 'El círculo, en detalle' },
      {
        t: 'p',
        text: 'Este es el que te habla directamente a nosotros. Un círculo con una letra adentro le indica a la tintorería qué solvente usar: la P y la F son para limpieza en seco con distintos productos, y la W es para limpieza al agua controlada. Las rayas debajo piden un ciclo más suave. Un círculo tachado significa que la prenda no acepta ningún proceso profesional.',
      },
      {
        t: 'note',
        title: 'No hace falta que la descifres',
        text: 'Si la prenda tiene círculo, traenos la etiqueta puesta y listo: esas letras están escritas para nosotros, no para vos.',
      },
      { t: 'h2', text: 'Tres cosas que la etiqueta no te dice' },
      {
        t: 'ol',
        items: [
          'La etiqueta marca el máximo, no lo recomendable. Si dice 40 °C, lavar a 30 siempre es más seguro.',
          'No contempla los accesorios. Una prenda "lavable" con botones de nácar o apliques pegados puede perderlos igual.',
          'No habla de lo que ya le pasó a la prenda. Una tela debilitada por el sol o por años de uso aguanta menos de lo que dice su etiqueta.',
        ],
      },
      { t: 'h2', text: 'Si la prenda no tiene etiqueta' },
      {
        t: 'p',
        text: 'Pasa seguido: se cortó porque molestaba, o se borró con los lavados. En ese caso, la regla práctica es tratar la prenda por lo más delicado que parezca: agua fría, ciclo suave, secado al aire y plancha tibia desde el revés. Y si es una prenda que te importa, mejor que la vea alguien antes del primer lavado.',
      },
    ],
    faqs: [
      {
        q: '¿Qué significa el círculo en la etiqueta de la ropa?',
        a: 'Que la prenda pide limpieza profesional. La letra de adentro le indica a la tintorería qué proceso usar, y las rayas de abajo, cuán suave tiene que ser.',
      },
      {
        q: '¿Puedo lavar igual una prenda que dice "solo limpieza en seco"?',
        a: 'Podés, pero el riesgo es tuyo y suele terminar en encogimiento o pérdida de forma, sobre todo en lana, seda y prendas con entretela.',
      },
      {
        q: '¿Qué hago si la prenda no tiene etiqueta?',
        a: 'Tratala como la más delicada: agua fría, ciclo suave y secado al aire. Si te importa la prenda, consultanos antes.',
      },
    ],
    services: ['limpieza-de-prendas-delicadas', 'limpieza-de-trajes', 'valet-de-ropa'],
    related: ['como-sacar-manchas-de-la-ropa', 'como-lavar-un-acolchado-de-plumas'],
  },
];

export const getGuide = (slug: string) => GUIDES.find((g) => g.slug === slug);

/** Guías de la más nueva a la más vieja. Es el orden del índice. */
export const guidesByDate = () => [...GUIDES].sort((a, b) => b.date.localeCompare(a.date));

/** Texto plano de la nota, para contar palabras. */
function plainText(body: Block[]) {
  return body
    .map((b) => {
      if (b.t === 'ul' || b.t === 'ol') return b.items.join(' ');
      if (b.t === 'steps') return b.items.map((i) => `${i.title} ${i.text}`).join(' ');
      if (b.t === 'note') return `${b.title} ${b.text}`;
      if (b.t === 'table') return [...b.head, ...b.rows.flat()].join(' ');
      return b.text;
    })
    .join(' ');
}

/** Minutos de lectura, a 200 palabras por minuto. */
export const readingMinutes = (body: Block[]) => Math.max(1, Math.round(plainText(body).split(/\s+/).length / 200));

const MONTHS = ['enero', 'febrero', 'marzo', 'abril', 'mayo', 'junio', 'julio', 'agosto', 'septiembre', 'octubre', 'noviembre', 'diciembre'];

/** "2026-11-06" → "6 de noviembre de 2026" */
export function formatDate(iso: string) {
  const [y, m, d] = iso.split('-').map(Number);
  return `${d} de ${MONTHS[m - 1]} de ${y}`;
}
