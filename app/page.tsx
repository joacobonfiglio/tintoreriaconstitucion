import { ChatPreview } from './ChatPreview';
import { Clothesline, DeliveryBand, Ribbon, Waves } from './Blocks';
import { ScrollRail } from './ScrollRail';
import { Icon } from './Icon';
import { Img } from './Img';
import { Isotipo } from './Logo';
import { Motion } from './Motion';
import { FAQ, GREETING, SERVICES, SITE } from './site';
import { pageMetadata } from './seo';
import { TrackedLink } from './TrackedLink';
import { WhatsAppLink } from './WhatsAppLink';

export const metadata = pageMetadata({
  title: 'Tintorería y lavandería en Mar del Plata',
  // Título completo a mano: con la marca entera se pasa de 60 caracteres y Google lo corta.
  fullTitle: 'Tintorería y lavandería en Mar del Plata | Constitución',
  description: SITE.description,
  path: '/',
  image: 'camisas',
  imageAlt: 'Camisas limpias y planchadas colgadas en perchas de madera',
});

const faqLd = {
  '@context': 'https://schema.org',
  '@type': 'FAQPage',
  mainEntity: FAQ.map((f) => ({ '@type': 'Question', name: f.q, acceptedAnswer: { '@type': 'Answer', text: f.a } })),
};

const ORDER = `${GREETING} Quiero hacer un pedido.`;
const PICKUP = `${GREETING} Quiero consultar por el retiro a domicilio.`;

const REASONS = [
  'Cada prenda revisada antes y después',
  'Precio antes de empezar, sin sorpresas',
  'Entrega planchada, en percha y con funda',
  'Tintorería y lavandería en el mismo pedido',
  'Opción de retiro a domicilio en algunas zonas',
];

export default function Home() {
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqLd) }} />

      {/* ───────── HERO ───────── */}
      <section className="hero on-dark">
        <Waves id="hero" color="#fff" opacity={0.04} />
        <div className="wrap hero-grid">
          <div className="hero-copy">
            <span className="eyebrow">Mar del Plata · Barrio Constitución</span>
            <h1 className="h-xl">
              Tintorería y <span className="accent">lavandería</span> en Mar del Plata
            </h1>
            <p className="lead">
              Trajes, acolchados, camisas, cortinas y la ropa de todos los días. También alfombras, zapatillas y arreglos
              de costura. Pedilo por WhatsApp en un minuto.
            </p>
            <div className="hero-ctas">
              <WhatsAppLink message={ORDER} placement="hero">
                Pedir por WhatsApp
              </WhatsAppLink>
              <a href="#servicios" className="btn btn-ghost">
                Ver servicios
              </a>
            </div>
            <ul className="hero-proof">
              <li>
                <Icon name="check" /> Tintorería y lavandería
              </li>
              <li>
                <Icon name="check" /> Precio antes de empezar
              </li>
              <li>
                <Icon name="check" /> También retiramos a domicilio
              </li>
            </ul>
          </div>

          <div className="hero-media">
            <div className="hero-photo hero-photo-a">
              <Img name="percheros" alt="Prendas limpias en fundas colgadas en el perchero de la tintorería" priority sizes="(min-width: 900px) 460px, 80vw" />
            </div>
            <div className="hero-photo hero-photo-b">
              <Img name="camisas" alt="Camisas celestes y blancas limpias y planchadas en perchas de madera" sizes="(min-width: 900px) 300px, 50vw" />
            </div>
            <div className="hero-ticket" aria-hidden="true">
              <span className="ticket-hole" />
              <span className="ticket-k">Tu pedido</span>
              <span className="ticket-v">Recibido</span>
              <span className="ticket-v">Limpio</span>
              <span className="ticket-v ok">Listo ✓</span>
            </div>
          </div>
        </div>
      </section>

      <Ribbon
        items={[
          'Tintorería y lavandería',
          'Precio antes de empezar',
          'Aviso por WhatsApp cuando está lista',
          'Planchado, en percha y con funda',
          'Alfombras, zapatillas y arreglos',
          'Retiro a domicilio en algunas zonas',
          'Empresas, hoteles y temporarios',
        ]}
      />

      {/* ───────── SERVICIOS ───────── */}
      <section id="servicios" className="section">
        <div className="wrap section-head">
          <Motion>
            <span className="eyebrow">Servicios</span>
            <h2 className="h-l">
              ¿Qué <span className="thin">limpiamos hoy?</span>
            </h2>
          </Motion>
          <Motion as="p" className="lead" delay={100}>
            Tintorería para lo que necesita cuidado, lavandería para la ropa de todos los días, y además alfombras,
            zapatillas y arreglos de costura. Elegí el servicio y pedilo por WhatsApp.
          </Motion>
        </div>
        <ScrollRail count={SERVICES.length}>
          <Clothesline services={SERVICES} />
        </ScrollRail>
      </section>

      {/* ───────── PEDIDO EN UN MINUTO ───────── */}
      <section id="pedido" className="section section-tint">
        <div className="wrap">
          <div className="section-head">
            <Motion>
              <span className="eyebrow">Pedido en un minuto</span>
              <h2 className="h-l">
                Elegí, enviá <span className="thin">y listo</span>
              </h2>
            </Motion>
            <Motion as="p" className="lead" delay={100}>
              El mensaje ya está armado. Solo contanos qué prendas son y te pasamos el precio antes de empezar.
            </Motion>
          </div>
          <Motion variant="fade">
            <ChatPreview services={SERVICES} />
          </Motion>
        </div>
      </section>

      {/* ───────── POR QUÉ ELEGIRNOS ───────── */}
      <section id="por-que" className="section trust on-dark">
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
              <span className="eyebrow">Por qué elegirnos</span>
              <h2 className="h-l">
                Tu ropa, <span className="thin">en buenas manos</span>
              </h2>
            </Motion>
            <ul className="checklist">
              {REASONS.map((c, i) => (
                <Motion as="li" key={c} delay={i * 70}>
                  <span className="check-dot">
                    <Icon name="check" strokeWidth={2.2} />
                  </span>
                  {c}
                </Motion>
              ))}
            </ul>
            <div className="hero-ctas">
              <WhatsAppLink message={ORDER} placement="por_que">
                Pedir por WhatsApp
              </WhatsAppLink>
            </div>
          </div>
        </div>
      </section>

      {/* ───────── RETIRO A DOMICILIO (opción) ───────── */}
      <DeliveryBand id="retiro" message={PICKUP} />

      {/* ───────── EMPRESAS ───────── */}
      <section className="section">
        <div className="wrap">
          <Motion className="biz">
            <div className="biz-copy">
              <span className="eyebrow">Empresas y alojamientos</span>
              <h2 className="h-m">Hoteles, temporarios, restaurantes y consultorios</h2>
              <p>Blanquería, mantelería y uniformes con retiro programado y facturación mensual.</p>
              <div className="hero-ctas">
                <a href="/empresas" className="btn">
                  Ver el servicio para empresas
                </a>
                <WhatsAppLink
                  message={`${GREETING} Quiero el servicio para mi negocio.`}
                  placement="empresas"
                  className="btn btn-ghost"
                >
                  Pedir presupuesto
                </WhatsAppLink>
              </div>
            </div>
            <div className="biz-media">
              <Img name="entrega" alt="Repartidor entregando un pedido de ropa limpia en la puerta de una casa" sizes="(min-width: 900px) 380px, 100vw" />
            </div>
          </Motion>
        </div>
      </section>

      {/* ───────── PREGUNTAS ───────── */}
      <section id="preguntas" className="section section-tint">
        <div className="wrap faq-grid">
          <Motion>
            <span className="eyebrow">Preguntas frecuentes</span>
            <h2 className="h-l">
              Lo que <span className="thin">tenés que saber</span>
            </h2>
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
              <span className="eyebrow">Dónde estamos</span>
              <h2 className="h-l">
                Visitanos <span className="thin">en el barrio Constitución</span>
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
                    {SITE.hours.length ? (
                      SITE.hours.map((h) => (
                        <span key={h.label}>
                          <strong>{h.label}:</strong> {h.opens} a {h.closes} h
                        </span>
                      ))
                    ) : (
                      <span>Escribinos por WhatsApp y te confirmamos el horario</span>
                    )}
                  </div>
                </li>
              </ul>
              <div className="hero-ctas">
                <WhatsAppLink message={ORDER} placement="contacto">
                  Pedir por WhatsApp
                </WhatsAppLink>
                <TrackedLink href={SITE.mapsUrl} target="_blank" rel="noopener" className="btn btn-ghost" event="map_click" params={{ placement: 'contacto' }}>
                  <Icon name="pin" /> Cómo llegar
                </TrackedLink>
              </div>
            </div>
            <div className="contact-media">
              <Img name="local" alt="Mostrador de atención de la tintorería con prendas en los percheros del fondo" sizes="(min-width: 900px) 480px, 100vw" />
            </div>
          </Motion>
        </div>
      </section>
    </>
  );
}
