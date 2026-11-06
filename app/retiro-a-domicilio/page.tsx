import { DeliveryBand, PageHero } from '../Blocks';
import { Icon } from '../Icon';
import { Img } from '../Img';
import { Motion } from '../Motion';
import { pageMetadata } from '../seo';
import { DELIVERY, GREETING, SERVICES, SITE, absoluteUrl } from '../site';
import { WhatsAppLink } from '../WhatsAppLink';

export const metadata = pageMetadata({
  title: 'Retiro y entrega a domicilio',
  description:
    'Retiro y entrega de tintorería y lavandería a domicilio en zonas seleccionadas de Mar del Plata. Pasanos tu dirección por WhatsApp y te confirmamos.',
  path: DELIVERY.href,
  image: 'entrega',
  imageAlt: 'Repartidor entregando un pedido de ropa limpia en la puerta de una casa',
});

const ORDER = `${GREETING} Quiero consultar por el retiro a domicilio.`;

// TODO: confirmar las zonas exactas, horarios de retiro y costo del servicio.
const FAQS = [
  {
    q: '¿En qué zonas retiran?',
    a: `En zonas seleccionadas de ${SITE.city}. Pasanos tu dirección por WhatsApp y te confirmamos si llegamos y en qué día y horario.`,
  },
  { q: '¿Y si no llegan a mi zona?', a: `Podés acercar tus prendas al local, en ${SITE.address.street}, barrio ${SITE.address.neighborhood}.` },
  { q: '¿Cómo pago?', a: 'Te pasamos el precio antes de empezar y pagás al recibir tu ropa.' },
  { q: '¿Tengo que estar en casa?', a: 'Sí, o dejá a alguien que entregue y reciba. Coordinamos el horario que te quede cómodo.' },
  { q: '¿Puedo mezclar servicios en un mismo retiro?', a: 'Sí. Trajes, camisas, acolchados, cortinas o la ropa de lavandería van en el mismo pedido.' },
];

const jsonLd = {
  '@context': 'https://schema.org',
  '@graph': [
    {
      '@type': 'Service',
      name: DELIVERY.title,
      serviceType: 'Tintorería con retiro a domicilio',
      description: `${DELIVERY.short} ${DELIVERY.zones}`,
      url: absoluteUrl(DELIVERY.href),
      provider: { '@id': absoluteUrl('/#negocio') },
      areaServed: { '@type': 'City', name: SITE.city },
    },
    {
      '@type': 'BreadcrumbList',
      itemListElement: [
        { '@type': 'ListItem', position: 1, name: 'Inicio', item: absoluteUrl('/') },
        { '@type': 'ListItem', position: 2, name: 'Retiro a domicilio', item: absoluteUrl(DELIVERY.href) },
      ],
    },
    { '@type': 'FAQPage', mainEntity: FAQS.map((f) => ({ '@type': 'Question', name: f.q, acceptedAnswer: { '@type': 'Answer', text: f.a } })) },
  ],
};

export default function Retiro() {
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }} />
      <nav className="crumbs wrap" aria-label="Ruta de navegación">
        <ol>
          <li>
            <a href="/">Inicio</a>
          </li>
          <li aria-current="page">Retiro a domicilio</li>
        </ol>
      </nav>
      <PageHero
        eyebrow={`Retiro a domicilio · ${SITE.city}`}
        title={
          <>
            Retiro y entrega <span className="thin">a domicilio</span>
          </>
        }
        lead={`Si te queda más cómodo, pasamos a buscar tu ropa y te la devolvemos limpia en tu casa o tu trabajo. Disponible en zonas seleccionadas de ${SITE.city}.`}
        image="entrega"
        imageAlt="Repartidor entregando un pedido de ropa limpia en la puerta de una casa"
        message={ORDER}
        cta="Consultar el retiro"
      >
        <a href="/servicios" className="btn btn-ghost">
          Ver servicios
        </a>
      </PageHero>

      <DeliveryBand
        id="como-funciona"
        link={false}
        badge="Paso a paso"
        title={
          <>
            Cómo <span className="thin">funciona</span>
          </>
        }
      />

      {/* Qué podés mandar */}
      <section className="section">
        <div className="wrap">
          <div className="section-head">
            <Motion>
              <span className="eyebrow">En el mismo retiro</span>
              <h2 className="h-l">
                Todo lo que <span className="thin">podés mandar</span>
              </h2>
            </Motion>
          </div>
          <div className="svc-related svc-index">
            {SERVICES.map((s, i) => (
              <Motion as="a" key={s.slug} href={`/servicios/${s.slug}`} className="svc-card" delay={(i % 3) * 90}>
                <div className="svc-card-media">
                  <Img name={s.image} alt="" sizes="(min-width: 860px) 360px, 100vw" />
                  <span className="garment-icon">
                    <Icon name={s.icon} />
                  </span>
                </div>
                <div className="svc-card-body">
                  <h3>{s.name}</h3>
                  <p>{s.short}</p>
                  <span className="link-arrow">Ver servicio</span>
                </div>
              </Motion>
            ))}
          </div>
        </div>
      </section>

      {/* Preguntas */}
      <section className="section section-tint">
        <div className="wrap faq-grid">
          <Motion>
            <span className="eyebrow">Preguntas frecuentes</span>
            <h2 className="h-l">
              Zonas, pagos <span className="thin">y horarios</span>
            </h2>
            <div className="hero-ctas">
              <WhatsAppLink message={ORDER} placement="retiro_faq">
                Consultar mi zona
              </WhatsAppLink>
            </div>
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
