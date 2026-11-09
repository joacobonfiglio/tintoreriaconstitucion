import { DeliveryBand, PageHero } from './Blocks';
import { Icon } from './Icon';
import { Img } from './Img';
import { shareImage } from './imageUrl';
import { Motion } from './Motion';
import { DELIVERY, SERVICES, SITE, absoluteUrl } from './site';
import type { ServiceContent } from './servicios/content';
import { GUIDES } from './guias/content';
import { WhatsAppLink } from './WhatsAppLink';

/** Plantilla de página de servicio: qué incluye, retiro a domicilio y pedido. Texto en servicios/content.ts. */
export function ServiceLanding({ content: c }: { content: ServiceContent }) {
  const service = SERVICES.find((s) => s.slug === c.slug)!;
  const url = absoluteUrl(`/servicios/${c.slug}`);
  const related = c.related.map((slug) => SERVICES.find((s) => s.slug === slug)!).filter(Boolean);
  // Las guías declaran a qué servicios aplican: desde acá se lee al revés, así que
  // no hay una segunda lista que mantener ni se puede desincronizar.
  const guides = GUIDES.filter((g) => g.services.includes(c.slug)).slice(0, 3);

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
        image: absoluteUrl(shareImage(c.image, service.imageAlt).url),
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
        imageAlt={service.imageAlt}
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
            <h2 className="h-m">
              {service.name} en {SITE.city}
            </h2>
            <p className="svc-desc">{c.description}</p>
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
                <Icon name="tag" /> Precio antes de empezar
              </li>
              <li>
                <Icon name="bell" /> Aviso por WhatsApp cuando está lista
              </li>
              <li>
                <Icon name="truck" /> Opción de retiro a domicilio
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
              Dudas sobre <span className="thin">{service.name.toLowerCase()}</span>
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

      {/* Guías sobre este servicio */}
      {guides.length > 0 && (
        <section className="section">
          <div className="wrap">
            <div className="section-head">
              <Motion>
                <span className="eyebrow">Guías</span>
                <h2 className="h-l">
                  Antes de traerla, <span className="thin">mirá esto</span>
                </h2>
              </Motion>
              <Motion as="p" className="lead" delay={100}>
                Lo que se puede hacer en casa y lo que conviene dejarnos a nosotros.
              </Motion>
            </div>
            <div className="guide-grid">
              {guides.map((g, i) => (
                <Motion as="article" key={g.slug} className="guide-card" delay={i * 90}>
                  <a href={`/guias/${g.slug}`} className="guide-card-media" tabIndex={-1} aria-hidden="true">
                    <Img name={g.image} alt="" sizes="(min-width: 900px) 380px, 100vw" />
                  </a>
                  <div className="guide-card-body">
                    <span className="guide-tag">{g.category}</span>
                    <h3>
                      <a href={`/guias/${g.slug}`}>{g.title}</a>
                    </h3>
                    <p>{g.excerpt}</p>
                  </div>
                </Motion>
              ))}
            </div>
            <Motion as="p" className="zones-note" delay={180}>
              <Icon name="check" strokeWidth={2.2} /> <a href="/guias">Ver todas las guías y consejos</a>
            </Motion>
          </div>
        </section>
      )}

      {/* Relacionados */}
      <section className="section section-tint">
        <div className="wrap">
          <div className="section-head">
            <Motion>
              <span className="eyebrow">Otros servicios</span>
              <h2 className="h-l">
                Sumalo <span className="thin">al mismo pedido</span>
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
