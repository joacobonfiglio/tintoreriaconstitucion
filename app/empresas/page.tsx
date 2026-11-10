import type { Metadata } from 'next';
import { PageHero } from '../Blocks';
import { Icon } from '../Icon';
import { Img } from '../Img';
import { Motion } from '../Motion';
import { pageMetadata } from '../seo';
import { DELIVERY, GREETING, SITE, absoluteUrl } from '../site';
import { WhatsAppLink } from '../WhatsAppLink';

export const metadata: Metadata = pageMetadata({
  title: 'Lavandería para hoteles y alquileres temporarios',
  description:
    'Blanquería, mantelería y uniformes para hoteles, alquileres temporarios, restaurantes y consultorios de Mar del Plata. Retiro programado y facturación mensual.',
  path: '/empresas',
  image: 'blanqueria',
  imageAlt: 'Toallas y blanquería blanca dobladas y apiladas junto a una planta',
});

const ORDER = `${GREETING} Quiero el servicio para mi negocio.`;

// Rubros y prendas que se atienden. Solo lo que ya hacemos: nada de frecuencias,
// mínimos ni formas de cobro que el cliente no confirmó.
// TODO: confirmar esquema de retiro, mínimos, forma de cobro y capacidad en temporada.
const SECTORS = [
  {
    icon: 'building',
    title: 'Hoteles y hosterías',
    text: 'Sábanas, toallas, toallones y cubrecamas.',
  },
  {
    icon: 'hanger',
    title: 'Alquileres temporarios',
    text: 'El juego de blanquería listo entre un huésped y el siguiente.',
  },
  {
    icon: 'basin',
    title: 'Restaurantes y bares',
    text: 'Manteles, servilletas, repasadores y delantales.',
  },
  {
    icon: 'shirt',
    title: 'Consultorios y centros de estética',
    text: 'Ambos, toallas, sábanas de camilla y uniformes.',
  },
] as const;

const BENEFITS = [
  'Blanquería, mantelería y uniformes en un mismo lugar',
  'Retiro y entrega programados',
  'Facturación mensual',
  'Un contacto directo por WhatsApp',
  'Tintorería y lavandería para el resto de las prendas',
];

const FAQS = [
  {
    q: '¿Desde qué volumen trabajan?',
    a: 'Contanos cuántas plazas, cubiertos o uniformes manejás y te decimos cómo lo podemos resolver.',
  },
  {
    q: '¿Cómo es el presupuesto?',
    a: 'Lo armamos sobre tu caso concreto. Escribinos por WhatsApp con el detalle y te lo pasamos antes de empezar.',
  },
  {
    q: '¿Retiran en toda la ciudad?',
    a: `El retiro regular está en el barrio ${SITE.address.neighborhood} y el centro de ${SITE.city}. Si tu negocio está fuera de esas zonas, escribinos y lo vemos.`,
  },
  {
    q: '¿Trabajan en temporada de verano?',
    a: 'Sí. Como en diciembre y enero sube el volumen de toda la ciudad, conviene escribirnos con tiempo para organizarlo.',
  },
];

const jsonLd = {
  '@context': 'https://schema.org',
  '@graph': [
    {
      '@type': 'Service',
      '@id': `${absoluteUrl('/empresas')}#servicio`,
      name: 'Lavandería y tintorería para empresas',
      serviceType: 'Lavandería industrial para hoteles, alquileres temporarios y gastronomía',
      description:
        'Blanquería, mantelería y uniformes para hoteles, alquileres temporarios, restaurantes y consultorios de Mar del Plata, con retiro programado y facturación mensual.',
      url: absoluteUrl('/empresas'),
      provider: { '@id': absoluteUrl('/#negocio') },
      areaServed: { '@type': 'City', name: SITE.city },
      audience: { '@type': 'BusinessAudience', name: 'Hoteles, alquileres temporarios, restaurantes y consultorios' },
      hasOfferCatalog: {
        '@type': 'OfferCatalog',
        name: 'Servicios para empresas',
        itemListElement: SECTORS.map((s) => ({
          '@type': 'Offer',
          itemOffered: { '@type': 'Service', name: s.title, description: s.text, areaServed: SITE.city },
        })),
      },
    },
    {
      '@type': 'BreadcrumbList',
      itemListElement: [
        { '@type': 'ListItem', position: 1, name: 'Inicio', item: absoluteUrl('/') },
        { '@type': 'ListItem', position: 2, name: 'Empresas', item: absoluteUrl('/empresas') },
      ],
    },
    {
      '@type': 'FAQPage',
      mainEntity: FAQS.map((f) => ({ '@type': 'Question', name: f.q, acceptedAnswer: { '@type': 'Answer', text: f.a } })),
    },
  ],
};

export default function Empresas() {
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }} />
      <nav className="crumbs wrap" aria-label="Ruta de navegación">
        <ol>
          <li>
            <a href="/">Inicio</a>
          </li>
          <li aria-current="page">Empresas</li>
        </ol>
      </nav>

      <PageHero
        eyebrow={`Empresas y alojamientos · ${SITE.city}`}
        title={
          <>
            Blanquería y uniformes <span className="thin">para tu negocio</span>
          </>
        }
        lead="Hoteles, alquileres temporarios, restaurantes y consultorios. Blanquería, mantelería y uniformes con retiro y entrega programados y facturación mensual."
        image="blanqueria"
        imageAlt="Toallas y blanquería blanca dobladas y apiladas junto a una planta"
        message={ORDER}
        cta="Pedir presupuesto"
      >
        <a href="/servicios" className="btn btn-ghost">
          Ver servicios
        </a>
      </PageHero>

      {/* Rubros */}
      <section className="section">
        <div className="wrap">
          <div className="section-head">
            <Motion>
              <span className="eyebrow">A quiénes atendemos</span>
              <h2 className="h-l">
                Cada rubro <span className="thin">tiene su ritmo</span>
              </h2>
            </Motion>
            <Motion as="p" className="lead" delay={100}>
              Cada rubro necesita otra cosa. Contanos qué manejás y armamos el esquema sobre tu caso.
            </Motion>
          </div>
          <div className="sector-grid">
            {SECTORS.map((s, i) => (
              <Motion as="article" key={s.title} className="sector-card" delay={(i % 2) * 90}>
                <span className="sector-icon">
                  <Icon name={s.icon} />
                </span>
                <h3>{s.title}</h3>
                <p>{s.text}</p>
              </Motion>
            ))}
          </div>
        </div>
      </section>

      {/* Qué incluye */}
      <section className="section section-tint">
        <div className="wrap biz-split">
          <Motion>
            <span className="eyebrow">Cómo trabajamos</span>
            <h2 className="h-l">
              Un esquema fijo, <span className="thin">y un solo contacto</span>
            </h2>
            <ul className="checklist">
              {BENEFITS.map((b) => (
                <li key={b}>
                  <span className="check-dot">
                    <Icon name="check" strokeWidth={2.2} />
                  </span>
                  {b}
                </li>
              ))}
            </ul>
            <div className="hero-ctas">
              <WhatsAppLink message={ORDER} placement="empresas_como">
                Pedir presupuesto
              </WhatsAppLink>
              <a href="/abonos" className="btn btn-ghost">
                <Icon name="tag" /> Abonos para una persona
              </a>
            </div>
          </Motion>
          <Motion variant="scale" className="biz-split-media" delay={100}>
            <Img name="maquinas" alt="Lavarropas industriales de carga frontal" sizes="(min-width: 900px) 520px, 100vw" />
          </Motion>
        </div>
      </section>

      {/* Temporada */}
      <section className="section">
        <div className="wrap">
          <Motion className="season">
            <span className="eyebrow">Temporada alta</span>
            <h2 className="h-m">En verano conviene organizarlo antes</h2>
            <p>
              En diciembre y enero la ciudad multiplica las plazas ocupadas y la blanquería se vuelve el cuello de
              botella de cualquier alojamiento. Si vas a necesitar más volumen, escribinos con tiempo y lo vemos juntos.
            </p>
            <WhatsAppLink message={`${GREETING} Quiero consultar por el servicio para la temporada.`} placement="empresas_temporada">
              Consultar por la temporada
            </WhatsAppLink>
          </Motion>
        </div>
      </section>

      {/* Preguntas */}
      <section className="section section-tint">
        <div className="wrap faq-grid">
          <Motion>
            <span className="eyebrow">Preguntas frecuentes</span>
            <h2 className="h-l">
              Antes de <span className="thin">pedir presupuesto</span>
            </h2>
            <p className="lead">{DELIVERY.zones}</p>
          </Motion>
          <div className="faq">
            {FAQS.map((f, i) => (
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
    </>
  );
}
