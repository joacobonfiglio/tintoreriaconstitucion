import { ChatPreview } from './ChatPreview';
import { Clothesline, GuideCards, Process, Ribbon, Waves } from './Blocks';
import { ScrollRail } from './ScrollRail';
import { Icon } from './Icon';
import { Img } from './Img';
import { Isotipo } from './Logo';
import { Motion } from './Motion';
import { FAQ, SERVICES, SITE } from './site';
import { TrackedLink } from './TrackedLink';
import { WhatsAppLink } from './WhatsAppLink';

const faqLd = {
  '@context': 'https://schema.org',
  '@type': 'FAQPage',
  mainEntity: FAQ.map((f) => ({ '@type': 'Question', name: f.q, acceptedAnswer: { '@type': 'Answer', text: f.a } })),
};

const STEPS = [
  { icon: 'camera', title: 'Mandá una foto', text: 'Por WhatsApp, de la prenda y de su etiqueta. Si tiene una mancha, contanos de qué es.' },
  { icon: 'tag', title: 'Te pasamos el precio', text: 'Precio y plazo antes de que la traigas. Lo que te decimos es lo que pagás.' },
  { icon: 'hanger', title: 'La revisamos con vos', text: 'Al recibirla miramos fibra, manchas, botones y bolsillos, y lo anotamos en tu ticket.' },
  { icon: 'bell', title: 'Te avisamos que está lista', text: 'Te escribimos por WhatsApp. La retirás limpia, planchada y protegida.' },
] as const;

const CHECKS = [
  'Leemos la etiqueta y confirmamos la fibra',
  'Marcamos manchas y zonas gastadas antes de empezar',
  'Revisamos bolsillos, botones y cierres',
  'Elegimos el proceso según la prenda, no al revés',
  'Control final de planchado y terminación',
  'Entrega en percha y funda, lista para guardar',
];

const GUIDES = [
  {
    icon: 'drop',
    tag: 'Manchas',
    title: 'Qué hacer con una mancha en los primeros minutos',
    text: 'Lo que hacés antes de traer la prenda define cuánto sale. La regla: absorber, nunca frotar.',
    tips: [
      'Apoyá papel o un paño blanco y presioná, sin frotar.',
      'No pongas agua caliente ni planches encima: fija la mancha.',
      'Evitá quitamanchas caseros en seda, lana o prendas de color.',
      'Traela cuanto antes y contanos de qué es la mancha.',
    ],
  },
  {
    icon: 'towels',
    tag: 'Acolchados',
    title: 'Cada cuánto lavar el acolchado (y por qué en tintorería)',
    text: 'En Mar del Plata la humedad se queda en el relleno. Un lavado al cambiar de estación lo mantiene sano.',
    tips: [
      'Lavalo una o dos veces por año, antes de guardarlo.',
      'El secado completo importa más que el lavado: evita olor y hongos.',
      'Guardalo en funda de tela, nunca en bolsa de nylon cerrada.',
      'Si es de pluma, airealo al sol suave unas horas al usarlo.',
    ],
  },
  {
    icon: 'jacket',
    tag: 'Trajes y sacos',
    title: 'Cómo hacer que un traje dure años',
    text: 'Un traje no necesita lavarse seguido: necesita descanso, percha correcta y limpieza en seco a tiempo.',
    tips: [
      'Usá percha ancha de hombro, no de alambre.',
      'Dejalo descansar un día entre usos.',
      'Limpieza en seco cada 5 a 8 usos, o ante cualquier mancha.',
      'Entre limpiezas, vapor para sacar arrugas en lugar de plancha.',
    ],
  },
] as const;

export default function Home() {
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqLd) }} />

      {/* ───────── HERO ───────── */}
      <section className="hero on-dark">
        <Waves id="hero" color="#fff" opacity={0.04} />
        <div className="wrap hero-grid">
          <div className="hero-copy">
            <span className="eyebrow">Tintorería en Mar del Plata · Barrio Constitución</span>
            <h1 className="h-xl">
              Tu ropa vuelve <span className="thin">como</span> <span className="accent">la primera vez.</span>
            </h1>
            <p className="lead">
              Limpieza en seco, acolchados, camisas y prendas delicadas. Revisamos cada prenda antes de tocarla,
              te damos el precio antes de que la dejes y te avisamos por WhatsApp cuando está lista.
            </p>
            <div className="hero-ctas">
              <WhatsAppLink message="Hola! Quiero pedir un precio." placement="hero">
                Pedí precio por WhatsApp
              </WhatsAppLink>
              <a href="#servicios" className="btn btn-ghost">
                Ver servicios
              </a>
            </div>
            <ul className="hero-proof">
              <li>
                <Icon name="check" /> Precio antes de dejarla
              </li>
              <li>
                <Icon name="check" /> Revisión prenda por prenda
              </li>
              <li>
                <Icon name="check" /> Aviso por WhatsApp
              </li>
            </ul>
          </div>

          <div className="hero-media">
            <div className="hero-photo hero-photo-a">
              <Img name="control-prenda" alt="Prenda clara revisada a contraluz antes de entregarla" priority sizes="(min-width: 900px) 460px, 80vw" />
            </div>
            <div className="hero-photo hero-photo-b">
              <Img name="camisas" alt="Camisas limpias y planchadas colgadas en perchas de madera" sizes="(min-width: 900px) 300px, 50vw" />
            </div>
            <div className="hero-ticket" aria-hidden="true">
              <span className="ticket-hole" />
              <span className="ticket-k">Tu prenda</span>
              <span className="ticket-v">Revisada</span>
              <span className="ticket-v">Limpia</span>
              <span className="ticket-v ok">Lista ✓</span>
            </div>
          </div>
        </div>
      </section>

      <Ribbon
        items={[
          'Precio antes de dejar la prenda',
          'Revisión prenda por prenda',
          'Aviso por WhatsApp cuando está lista',
          'Entrega en percha y funda',
          'Acolchados con secado completo',
          'Empresas, hoteles y temporarios',
        ]}
      />

      {/* ───────── SERVICIOS ───────── */}
      <section id="servicios" className="section">
        <div className="wrap section-head">
          <Motion>
            <span className="eyebrow">Servicios</span>
            <h2 className="h-l">
              Cada prenda tiene <span className="thin">su forma</span> de cuidarse.
            </h2>
          </Motion>
          <Motion as="p" className="lead" delay={100}>
            Trabajamos limpieza en seco y lavado al agua según la fibra, la etiqueta y el estado de cada prenda.
            Seguí bajando para recorrer todo lo que hacemos.
          </Motion>
        </div>
        <ScrollRail count={SERVICES.length}>
          <Clothesline services={SERVICES} />
        </ScrollRail>
      </section>

      {/* ───────── CÓMO FUNCIONA ───────── */}
      <section id="como-funciona" className="section section-tint">
        <div className="wrap">
          <div className="section-head">
            <Motion>
              <span className="eyebrow">Cómo funciona</span>
              <h2 className="h-l">
                Sin vueltas, <span className="thin">sin sorpresas.</span>
              </h2>
            </Motion>
            <Motion as="p" className="lead" delay={100}>
              Sabés cuánto vas a pagar y cuándo la retirás antes de dejar la prenda. Así de simple.
            </Motion>
          </div>
          <Process steps={STEPS.map((s) => ({ ...s }))} />
        </div>
      </section>

      {/* ───────── SELECTOR + WHATSAPP ───────── */}
      <section className="section">
        <div className="wrap split">
          <Motion className="split-copy">
            <span className="eyebrow">Cotizá en un minuto</span>
            <h2 className="h-l">
              Elegí qué querés limpiar <span className="thin">y escribinos.</span>
            </h2>
            <p className="lead">
              Te dejamos el mensaje armado. Sumale una foto de la prenda y de la etiqueta y te respondemos con precio y
              plazo.
            </p>
          </Motion>
          <Motion variant="scale" delay={120}>
            <ChatPreview services={SERVICES} />
          </Motion>
        </div>
      </section>

      {/* ───────── CONFIANZA: CONTROL DE CADA PRENDA ───────── */}
      <section id="cuidado" className="section trust on-dark">
        <Waves id="trust" color="#fff" opacity={0.05} />
        <div className="wrap trust-grid">
          <Motion variant="scale" className="trust-media">
            <Img name="maquinas" alt="Lavarropas industriales de carga frontal" sizes="(min-width: 900px) 560px, 100vw" />
            <div className="trust-badge">
              <Isotipo color="var(--orange)" />
              <span>
                Proceso
                <br />
                profesional
              </span>
            </div>
          </Motion>
          <div>
            <Motion>
              <span className="eyebrow">Por qué confiar</span>
              <h2 className="h-l">
                Tratamos tu ropa <span className="thin">como si fuera</span> nuestra.
              </h2>
              <p className="lead">
                Una prenda arruinada no se arregla con una disculpa. Por eso cada pieza pasa por el mismo control antes
                y después del proceso.
              </p>
            </Motion>
            <ul className="checklist">
              {CHECKS.map((c, i) => (
                <Motion as="li" key={c} delay={i * 70}>
                  <span className="check-dot">
                    <Icon name="check" strokeWidth={2.2} />
                  </span>
                  {c}
                </Motion>
              ))}
            </ul>
          </div>
        </div>
      </section>

      {/* ───────── EMPRESAS ───────── */}
      <section className="section">
        <div className="wrap">
          <Motion className="biz">
            <div className="biz-copy">
              <span className="eyebrow">Empresas y alojamientos</span>
              <h2 className="h-m">Hoteles, alquileres temporarios, restaurantes y consultorios.</h2>
              <p>
                Blanquería, mantelería, uniformes y cortinas con retiro y entrega coordinados y facturación mensual.
                Ideal para la temporada en Mar del Plata.
              </p>
              <WhatsAppLink message="Hola! Tengo un negocio y quiero consultar por servicio para empresas." placement="empresas" className="btn">
                Consultar para mi negocio
              </WhatsAppLink>
            </div>
            <div className="biz-media">
              <Img name="toallas" alt="Toallas blancas dobladas y apiladas" sizes="(min-width: 900px) 380px, 100vw" />
            </div>
          </Motion>
        </div>
      </section>

      {/* ───────── GUÍA DE CUIDADO ───────── */}
      <section className="section section-tint">
        <div className="wrap">
          <div className="section-head">
            <Motion>
              <span className="eyebrow">Guía de cuidado</span>
              <h2 className="h-l">
                Lo que sabemos, <span className="thin">para que lo uses en casa.</span>
              </h2>
            </Motion>
          </div>
          <GuideCards guides={GUIDES.map((g) => ({ ...g, tips: [...g.tips] }))} />
        </div>
      </section>

      {/* ───────── PREGUNTAS ───────── */}
      <section id="preguntas" className="section">
        <div className="wrap faq-grid">
          <Motion>
            <span className="eyebrow">Preguntas frecuentes</span>
            <h2 className="h-l">
              Lo que más <span className="thin">nos preguntan.</span>
            </h2>
            <p className="lead">¿No está tu duda? Escribinos y te respondemos.</p>
          </Motion>
          <div className="faq">
            {FAQ.map((f, i) => (
              <details key={f.q} open={i === 0}>
                <summary>
                  <span>{f.q}</span>
                  <span className="faq-plus" aria-hidden="true" />
                </summary>
                <p>{f.a}</p>
              </details>
            ))}
          </div>
        </div>
      </section>

      {/* ───────── CONTACTO ───────── */}
      <section id="contacto" className="section contact">
        <div className="wrap">
          <Motion className="contact-card">
            <div className="contact-copy">
              <span className="eyebrow">Visitanos</span>
              <h2 className="h-l">
                Estamos en <span className="accent">Constitución</span>, Mar del Plata.
              </h2>
              <ul className="contact-list">
                <li>
                  <Icon name="pin" />
                  <div>
                    <strong>{SITE.address.street}</strong>
                    <span>
                      Barrio {SITE.address.neighborhood}, {SITE.city}
                    </span>
                  </div>
                </li>
                <li>
                  <Icon name="clock" />
                  <div>
                    {SITE.hours.map((h) => (
                      <span key={h.label}>
                        <strong>{h.label}:</strong> {h.opens} a {h.closes} h
                      </span>
                    ))}
                  </div>
                </li>
              </ul>
              <div className="hero-ctas">
                <WhatsAppLink message="Hola! Quiero hacer una consulta." placement="contacto" />
                <TrackedLink href={SITE.mapsUrl} target="_blank" rel="noopener" className="btn btn-ghost" event="map_click" params={{ placement: 'contacto' }}>
                  <Icon name="pin" /> Cómo llegar
                </TrackedLink>
              </div>
            </div>
            <div className="contact-media">
              <Img name="local" alt="Mostrador de atención luminoso con prendas en percheros" sizes="(min-width: 900px) 480px, 100vw" />
            </div>
          </Motion>
        </div>
      </section>
    </>
  );
}
