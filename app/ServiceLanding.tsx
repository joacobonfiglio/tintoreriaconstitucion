import { DeliveryBand, PageHero } from './Blocks';
import { Icon } from './Icon';
import { Img } from './Img';
import { imageUrl } from './imageUrl';
import { Motion } from './Motion';
import { DELIVERY, SERVICES, SITE, absoluteUrl } from './site';
import type { ServiceContent } from './servicios/content';
import { WhatsAppLink } from './WhatsAppLink';

/** Plantilla de página de servicio: qué incluye, retiro a domicilio y pedido. Texto en servicios/content.ts. */
export function ServiceLanding({ content: c }: { content: ServiceContent }) {
  const service = SERVICES.find((s) => s.slug === c.slug)!;
  const url = absoluteUrl(`/servicios/${c.slug}`);
  const related = c.related.map((slug) => SERVICES.find((s) => s.slug === slug)!).filter(Boolean);

  const jsonLd = {
    '@context': 'https://schema.org',
    '@graph': [
      {
        '@type': 'Service',
        '@id': `${url}#servicio`,
        name: service.name,
        serviceType: c.keyword,
        description: c.metaDescription,
        url,
        image: absoluteUrl(imageUrl(c.image, 1200)),
        provider: { '@id': absoluteUrl('/#negocio') },
        areaServed: { '@type': 'City', name: SITE.city },
      },
      {
        '@type': 'BreadcrumbList',
        itemListElement: [
          { '@type': 'ListItem', position: 1, name: 'Inicio', item: absoluteUrl('/') },
          { '@type': 'ListItem', position: 2, name: 'Servicios', item: absoluteUrl('/servicios') },
          { '@type': 'ListItem', position: 3, name: service.name, item: url },
        ],
      },
      {
        '@type': 'FAQPage',
        mainEntity: c.faqs.map((f) => ({ '@type': 'Question', name: f.q, acceptedAnswer: { '@type': 'Answer', text: f.a } })),
      },
    ],
  };

  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }} />

      <nav className="crumbs wrap" aria-label="Ruta de navegación">
        <ol>
          <li>
            <a href="/">Inicio</a>
          </li>
          <li>
            <a href="/servicios">Servicios</a>
          </li>
          <li aria-current="page">{service.name}</li>
        </ol>
      </nav>

      <PageHero
        eyebrow={c.eyebrow}
        title={
          <>
            {c.h1} <span className="thin">{c.h1Thin}</span>
          </>
        }
        lead={c.lead}
        image={c.image}
        imageAlt={c.imageAlt}
        message={service.message}
        cta="Pedir por WhatsApp"
      >
        <a href={DELIVERY.href} className="btn btn-ghost">
          <Icon name="truck" /> Retiro a domicilio
        </a>
      </PageHero>

      {/* Qué incluye + pedido */}
      <section className="section">
        <div className="wrap svc-order">
          <Motion className="svc-order-list">
            <span className="eyebrow">Qué limpiamos</span>
            <h2 className="h-m">{service.name}</h2>
            <ul className="svc-chips">
              {c.items.map((it) => (
                <li key={it}>
                  <Icon name="check" strokeWidth={2.2} />
                  {it}
                </li>
              ))}
            </ul>
          </Motion>
          <Motion className="svc-order-card" delay={100}>
            <h2 className="h-m">Hacé tu pedido</h2>
            <ul>
              <li>
                <Icon name="truck" /> Retiro y entrega a domicilio
              </li>
              <li>
                <Icon name="tag" /> Precio antes de empezar
              </li>
              <li>
                <Icon name="bell" /> Aviso por WhatsApp cuando está lista
              </li>
            </ul>
            <WhatsAppLink message={service.message} placement={`pedido_${c.slug}`}>
              Pedir por WhatsApp
            </WhatsAppLink>
          </Motion>
        </div>
      </section>

      <DeliveryBand id="retiro" message={service.message} />

      {/* Preguntas */}
      <section className="section">
        <div className="wrap faq-grid">
          <Motion>
            <span className="eyebrow">Preguntas frecuentes</span>
            <h2 className="h-l">
              {service.name} <span className="thin">en {SITE.city}.</span>
            </h2>
          </Motion>
          <div className="faq">
            {c.faqs.map((f, i) => (
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

      {/* Relacionados */}
      <section className="section section-tint">
        <div className="wrap">
          <div className="section-head">
            <Motion>
              <span className="eyebrow">Otros servicios</span>
              <h2 className="h-l">
                Sumalo <span className="thin">al mismo retiro.</span>
              </h2>
            </Motion>
          </div>
          <div className="svc-related">
            {related.map((r, i) => (
              <Motion as="a" key={r.slug} href={`/servicios/${r.slug}`} className="svc-card" delay={i * 90}>
                <div className="svc-card-media">
                  <Img name={r.image} alt="" sizes="(min-width: 860px) 360px, 100vw" />
                </div>
                <div className="svc-card-body">
                  <h3>{r.name}</h3>
                  <p>{r.short}</p>
                  <span className="link-arrow">Ver servicio</span>
                </div>
              </Motion>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
