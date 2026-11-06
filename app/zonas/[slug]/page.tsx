import type { Metadata } from 'next';
import { notFound } from 'next/navigation';
import { DeliveryBand, PageHero } from '../../Blocks';
import { Icon } from '../../Icon';
import { Img } from '../../Img';
import { Motion } from '../../Motion';
import { pageMetadata } from '../../seo';
import { GREETING, SERVICES, SITE, absoluteUrl, placeName } from '../../site';
import { TrackedLink } from '../../TrackedLink';
import { WhatsAppLink } from '../../WhatsAppLink';
import { ZONES, getZone } from '../content';

export const dynamicParams = false;

export function generateStaticParams() {
  return ZONES.map((z) => ({ slug: z.slug }));
}

export async function generateMetadata({ params }: { params: Promise<{ slug: string }> }): Promise<Metadata> {
  const z = getZone((await params).slug);
  if (!z) return {};
  return pageMetadata({
    title: z.metaTitle,
    description: z.metaDescription,
    path: `/zonas/${z.slug}`,
    image: z.image,
    imageAlt: z.imageAlt,
  });
}

export default async function ZonePage({ params }: { params: Promise<{ slug: string }> }) {
  const z = getZone((await params).slug);
  if (!z) notFound();

  const url = absoluteUrl(`/zonas/${z.slug}`);
  const others = ZONES.filter((o) => o.slug !== z.slug);
  const ORDER = `${GREETING} Quiero hacer un pedido en ${z.name}.`;

  const jsonLd = {
    '@context': 'https://schema.org',
    '@graph': [
      {
        '@type': 'Service',
        '@id': `${url}#servicio`,
        name: `Tintorería y lavandería en ${z.name}`,
        serviceType: z.keyword,
        description: z.metaDescription,
        url,
        provider: { '@id': absoluteUrl('/#negocio') },
        areaServed: { '@type': 'Place', name: placeName(z.name) },
        hasOfferCatalog: {
          '@type': 'OfferCatalog',
          name: `Servicios en ${z.name}`,
          itemListElement: SERVICES.map((s) => ({
            '@type': 'Offer',
            itemOffered: { '@type': 'Service', name: s.name, description: s.short },
          })),
        },
      },
      {
        '@type': 'BreadcrumbList',
        itemListElement: [
          { '@type': 'ListItem', position: 1, name: 'Inicio', item: absoluteUrl('/') },
          { '@type': 'ListItem', position: 2, name: 'Zonas', item: absoluteUrl('/zonas') },
          { '@type': 'ListItem', position: 3, name: z.name, item: url },
        ],
      },
      {
        '@type': 'FAQPage',
        mainEntity: z.faqs.map((f) => ({ '@type': 'Question', name: f.q, acceptedAnswer: { '@type': 'Answer', text: f.a } })),
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
            <a href="/zonas">Zonas</a>
          </li>
          <li aria-current="page">{z.name}</li>
        </ol>
      </nav>

      <PageHero
        eyebrow={`${z.name} · ${SITE.city}`}
        title={
          <>
            {z.h1} <span className="thin">{z.h1Thin}</span>
          </>
        }
        lead={z.lead}
        image={z.image}
        imageAlt={z.imageAlt}
        message={ORDER}
        cta="Pedir por WhatsApp"
      >
        <a href="/servicios" className="btn btn-ghost">
          Ver servicios
        </a>
      </PageHero>

      {/* Qué contamos de la zona */}
      <section className="section">
        <div className="wrap zone-intro">
          <Motion className="prose">
            <h2 className="h-m">Tintorería y lavandería en {z.name}</h2>
            {z.intro.map((p) => (
              <p key={p}>{p}</p>
            ))}
          </Motion>

          <div className="zone-highlights">
            {z.highlights.map((h, i) => (
              <Motion as="article" key={h.title} className="zone-card" delay={i * 90}>
                <span className="zone-icon">
                  <Icon name="check" strokeWidth={2.2} />
                </span>
                <h3>{h.title}</h3>
                <p>{h.text}</p>
              </Motion>
            ))}
          </div>
        </div>
      </section>

      {/* El local, solo en la zona donde está */}
      {z.hasLocal && (
        <section className="section section-tint">
          <div className="wrap">
            <Motion className="biz">
              <div className="biz-copy">
                <span className="eyebrow">El local</span>
                <h2 className="h-m">
                  {SITE.address.street}, {SITE.city}
                </h2>
                <ul className="contact-list">
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
                        <span>Consultá el horario por WhatsApp</span>
                      )}
                    </div>
                  </li>
                </ul>
                <div className="hero-ctas">
                  <TrackedLink
                    href={SITE.mapsUrl}
                    target="_blank"
                    rel="noopener"
                    className="btn"
                    event="map_click"
                    params={{ placement: `zona_${z.slug}` }}
                  >
                    <Icon name="pin" /> Cómo llegar
                  </TrackedLink>
                </div>
              </div>
              <div className="biz-media">
                <Img name="percheros" alt="Prendas limpias en fundas colgadas en el perchero de la tintorería" sizes="(min-width: 900px) 380px, 100vw" />
              </div>
            </Motion>
          </div>
        </section>
      )}

      {/* Servicios disponibles en la zona */}
      <section className="section">
        <div className="wrap">
          <div className="section-head">
            <Motion>
              <span className="eyebrow">Servicios</span>
              <h2 className="h-l">
                Todo lo que podés <span className="thin">mandar desde {z.shortName}</span>
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

      <DeliveryBand
        id="retiro"
        message={ORDER}
        link={false}
        badge={`Retiro en ${z.shortName}`}
        title={
          <>
            Cómo pedirlo <span className="thin">desde {z.shortName}</span>
          </>
        }
      />

      {/* Preguntas */}
      <section className="section">
        <div className="wrap faq-grid">
          <Motion>
            <span className="eyebrow">Preguntas frecuentes</span>
            <h2 className="h-l">
              Sobre el servicio <span className="thin">en {z.shortName}</span>
            </h2>
            <div className="hero-ctas">
              <WhatsAppLink message={ORDER} placement={`zona_${z.slug}_faq`}>
                Pedir por WhatsApp
              </WhatsAppLink>
            </div>
          </Motion>
          <div className="faq">
            {z.faqs.map((f, i) => (
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

      {/* Otras zonas */}
      {others.length > 0 && (
        <section className="section section-tint">
          <div className="wrap">
            <div className="section-head">
              <Motion>
                <span className="eyebrow">Otras zonas</span>
                <h2 className="h-l">
                  También llegamos <span className="thin">acá</span>
                </h2>
              </Motion>
            </div>
            <div className="guide-grid">
              {others.map((o, i) => (
                <Motion as="article" key={o.slug} className="guide-card" delay={i * 90}>
                  <a href={`/zonas/${o.slug}`} className="guide-card-media" tabIndex={-1} aria-hidden="true">
                    <Img name={o.image} alt="" sizes="(min-width: 900px) 420px, 100vw" />
                  </a>
                  <div className="guide-card-body">
                    <span className="guide-tag">{o.hasLocal ? 'Local y retiro' : 'Retiro a domicilio'}</span>
                    <h3>
                      <a href={`/zonas/${o.slug}`}>{o.name}</a>
                    </h3>
                    <p>{o.lead}</p>
                  </div>
                </Motion>
              ))}
            </div>
          </div>
        </section>
      )}
    </>
  );
}
