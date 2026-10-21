import { PageHero, Process } from './Blocks';
import { Icon } from './Icon';
import { Img } from './Img';
import { Motion } from './Motion';
import { SERVICES, SITE, absoluteUrl } from './site';
import type { ServiceContent } from './servicios/content';
import { WhatsAppLink } from './WhatsAppLink';

/** Plantilla de página de servicio. Todo el texto viene de servicios/content.ts. */
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
        image: absoluteUrl(`/img/${c.image}-480.webp`),
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
      >
        <a href="#que-limpiamos" className="btn btn-ghost">
          Qué limpiamos
        </a>
      </PageHero>

      {/* Intro + lista de prendas */}
      <section id="que-limpiamos" className="section">
        <div className="wrap svc-intro">
          <Motion className="svc-intro-copy">
            <span className="eyebrow">Qué limpiamos</span>
            <h2 className="h-l">{service.name}</h2>
            {c.intro.map((p) => (
              <p key={p.slice(0, 24)} className="lead">
                {p}
              </p>
            ))}
          </Motion>
          <ul className="svc-items">
            {c.items.map((it, i) => (
              <Motion as="li" key={it.title} delay={i * 60}>
                <span className="check-dot">
                  <Icon name="check" strokeWidth={2.2} />
                </span>
                <div>
                  <h3>{it.title}</h3>
                  <p>{it.text}</p>
                </div>
              </Motion>
            ))}
          </ul>
        </div>
      </section>

      {/* Proceso */}
      <section className="section section-tint">
        <div className="wrap">
          <div className="section-head">
            <Motion>
              <span className="eyebrow">Cómo lo hacemos</span>
              <h2 className="h-l">
                El proceso, <span className="thin">paso a paso.</span>
              </h2>
            </Motion>
            <Motion as="p" className="lead" delay={100}>
              Cada prenda pasa por los mismos controles. Si algo no nos convence, te consultamos antes de seguir.
            </Motion>
          </div>
          <Process steps={c.steps} />
        </div>
      </section>

      {/* Precio + cuidado */}
      <section className="section">
        <div className="wrap svc-duo">
          <Motion className="svc-price">
            <span className="eyebrow">Precio</span>
            <h2 className="h-m">Te pasamos el precio antes de que la traigas.</h2>
            <p>Mandanos una foto por WhatsApp con la prenda y la etiqueta. El precio depende de:</p>
            <ul>
              {c.priceFactors.map((f) => (
                <li key={f}>
                  <Icon name="tag" />
                  {f}
                </li>
              ))}
            </ul>
            <WhatsAppLink message={service.message} placement={`precio_${c.slug}`}>
              Pedí precio por WhatsApp
            </WhatsAppLink>
          </Motion>
          <Motion className="svc-care" delay={120}>
            <span className="eyebrow">Consejo de cuidado</span>
            <h2 className="h-m">{c.care.title}</h2>
            <ul>
              {c.care.tips.map((t) => (
                <li key={t}>
                  <Icon name="check" />
                  <span>{t}</span>
                </li>
              ))}
            </ul>
          </Motion>
        </div>
      </section>

      {/* Preguntas */}
      <section className="section section-tint">
        <div className="wrap faq-grid">
          <Motion>
            <span className="eyebrow">Preguntas frecuentes</span>
            <h2 className="h-l">
              Sobre {service.name.toLowerCase()} <span className="thin">en {SITE.city}.</span>
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
      <section className="section">
        <div className="wrap">
          <div className="section-head">
            <Motion>
              <span className="eyebrow">También hacemos</span>
              <h2 className="h-l">
                Otros servicios <span className="thin">que te pueden servir.</span>
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
