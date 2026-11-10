import type { Metadata } from 'next';
import { PageHero } from '../Blocks';
import { Icon } from '../Icon';
import { Img } from '../Img';
import { Motion } from '../Motion';
import { pageMetadata } from '../seo';
import { DELIVERY, GREETING, SITE, absoluteUrl } from '../site';
import { WhatsAppLink } from '../WhatsAppLink';

export const metadata: Metadata = pageMetadata({
  title: 'Abonos mensuales de tintorería y lavandería',
  description:
    'Abonos mensuales de camisas, trajes y pantalones en Mar del Plata. Para quien usa la misma ropa de trabajo todas las semanas. Consultanos por WhatsApp.',
  path: '/abonos',
  image: 'camisas',
  imageAlt: 'Camisas celestes y blancas colgadas en perchas de madera',
});

const ORDER = `${GREETING} Quiero información sobre los abonos mensuales.`;

// Prendas con abono. TODO: confirmar qué incluye cada uno, con qué frecuencia y
// cómo se cobra. Hasta entonces la página dice que existen y manda a consultar:
// no inventamos precios ni condiciones.
const ABONOS = [
  {
    icon: 'shirt',
    title: 'Camisas',
    text: 'Para el que usa camisa todos los días. Limpias, planchadas y en percha, semana tras semana.',
    href: '/servicios/limpieza-de-camisas',
  },
  {
    icon: 'jacket',
    title: 'Trajes',
    text: 'Saco y pantalón juntos, con la frecuencia que te sirva, sin tener que acordarte cada vez.',
    href: '/servicios/limpieza-de-trajes',
  },
  {
    icon: 'hanger',
    title: 'Pantalones',
    text: 'Pantalones de vestir y de trabajo, listos y en percha.',
    href: '/servicios/limpieza-de-trajes',
  },
] as const;

const FAQS = [
  {
    q: '¿Qué prendas tienen abono?',
    a: 'Hoy tenemos abonos de camisas, trajes y pantalones. Si usás otra prenda todas las semanas, contanos cuál y lo vemos.',
  },
  {
    q: '¿Cuánto sale?',
    a: 'Depende de qué prendas son y de cuántas por semana. Escribinos con tu caso y te armamos el abono con el precio antes de empezar.',
  },
  {
    q: '¿Cómo empiezo?',
    a: 'Escribinos por WhatsApp contándonos qué prendas usás y con qué frecuencia. Con eso te pasamos la propuesta.',
  },
  {
    q: '¿Sirve para un estudio o un consultorio?',
    a: 'Sí. Si son varias personas y querés retiro programado y facturación mensual, mirá además el servicio para empresas.',
  },
  {
    q: '¿Lo pueden retirar de mi casa o mi oficina?',
    a: `Sí, en las zonas donde llega el retiro. ${DELIVERY.zones} Pasanos tu dirección y te confirmamos.`,
  },
];

const jsonLd = {
  '@context': 'https://schema.org',
  '@graph': [
    {
      '@type': 'Service',
      '@id': `${absoluteUrl('/abonos')}#servicio`,
      name: 'Abonos mensuales de tintorería y lavandería',
      serviceType: 'Abono mensual de limpieza de camisas, trajes y pantalones',
      description:
        'Abonos mensuales de camisas, trajes y pantalones para quien usa la misma ropa de trabajo todas las semanas, en Mar del Plata.',
      url: absoluteUrl('/abonos'),
      provider: { '@id': absoluteUrl('/#negocio') },
      areaServed: { '@type': 'City', name: SITE.city },
      hasOfferCatalog: {
        '@type': 'OfferCatalog',
        name: 'Abonos mensuales',
        itemListElement: ABONOS.map((a) => ({
          '@type': 'Offer',
          itemOffered: { '@type': 'Service', name: `Abono de ${a.title.toLowerCase()}`, description: a.text },
        })),
      },
    },
    {
      '@type': 'BreadcrumbList',
      itemListElement: [
        { '@type': 'ListItem', position: 1, name: 'Inicio', item: absoluteUrl('/') },
        { '@type': 'ListItem', position: 2, name: 'Abonos', item: absoluteUrl('/abonos') },
      ],
    },
    {
      '@type': 'FAQPage',
      mainEntity: FAQS.map((f) => ({ '@type': 'Question', name: f.q, acceptedAnswer: { '@type': 'Answer', text: f.a } })),
    },
  ],
};

export default function Abonos() {
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }} />
      <nav className="crumbs wrap" aria-label="Ruta de navegación">
        <ol>
          <li>
            <a href="/">Inicio</a>
          </li>
          <li aria-current="page">Abonos</li>
        </ol>
      </nav>

      <PageHero
        eyebrow="Abonos mensuales"
        title={
          <>
            Si usás la misma ropa <span className="thin">todas las semanas</span>
          </>
        }
        lead="Camisas, trajes y pantalones con abono mensual. Dejás de pedirlo cada vez: queda armado y tu ropa de trabajo siempre está lista."
        image="camisas"
        imageAlt="Camisas celestes y blancas colgadas en perchas de madera"
        message={ORDER}
        cta="Consultar los abonos"
      >
        <a href="/servicios" className="btn btn-ghost">
          Ver servicios
        </a>
      </PageHero>

      {/* El problema */}
      <section className="section">
        <div className="wrap">
          <div className="prose">
            <h2 className="h-m">Para quién es</h2>
            <p>
              Hay gente que usa la misma ropa de trabajo todos los días: abogados, contadores y escribanos con camisa y
              traje, médicos y odontólogos con ambo, gente de inmobiliarias, bancos y comercios con uniforme. Cinco
              camisas por semana son más de doscientas al año, y casi siempre se resuelven a último momento.
            </p>
            <p>
              El abono existe para sacarte eso de encima: en vez de hacer un pedido cada vez, queda armado una sola vez
              y la ropa entra y sale sin que tengas que pensarlo.
            </p>
          </div>
        </div>
      </section>

      {/* Qué abonos hay */}
      <section className="section section-tint">
        <div className="wrap">
          <div className="section-head">
            <Motion>
              <span className="eyebrow">Qué prendas</span>
              <h2 className="h-l">
                Los abonos <span className="thin">que tenemos hoy</span>
              </h2>
            </Motion>
          </div>
          <div className="sector-grid">
            {ABONOS.map((a, i) => (
              <Motion as="article" key={a.title} className="sector-card" delay={(i % 2) * 90}>
                <span className="sector-icon">
                  <Icon name={a.icon} />
                </span>
                <h3>{a.title}</h3>
                <p>{a.text}</p>
                <a className="link-arrow" href={a.href}>
                  Ver el servicio
                </a>
              </Motion>
            ))}
          </div>
          <Motion as="p" className="zones-note" delay={180}>
            <Icon name="check" strokeWidth={2.2} /> ¿Usás otra prenda todas las semanas? Contanos cuál y lo vemos.
          </Motion>
        </div>
      </section>

      {/* Cómo se arma */}
      <section className="section">
        <div className="wrap biz-split">
          <Motion>
            <span className="eyebrow">Cómo se arma</span>
            <h2 className="h-l">
              Se arma sobre <span className="thin">tu caso</span>
            </h2>
            <p className="lead">
              No hay un paquete cerrado: depende de qué prendas usás y de cuántas por semana. Escribinos con eso y te
              pasamos la propuesta con el precio antes de empezar.
            </p>
            <div className="hero-ctas">
              <WhatsAppLink message={ORDER} placement="abonos_como">
                Consultar los abonos
              </WhatsAppLink>
              <a href="/empresas" className="btn btn-ghost">
                <Icon name="building" /> Soy una empresa
              </a>
            </div>
          </Motion>
          <Motion variant="scale" className="biz-split-media" delay={100}>
            <Img name="percheros" alt="Prendas limpias en fundas colgadas en el perchero de la tintorería" sizes="(min-width: 900px) 520px, 100vw" />
          </Motion>
        </div>
      </section>

      {/* Preguntas */}
      <section className="section section-tint">
        <div className="wrap faq-grid">
          <Motion>
            <span className="eyebrow">Preguntas frecuentes</span>
            <h2 className="h-l">
              Antes de <span className="thin">consultar</span>
            </h2>
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
