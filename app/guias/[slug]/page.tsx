import type { Metadata } from 'next';
import { notFound } from 'next/navigation';
import { Icon } from '../../Icon';
import { Img } from '../../Img';
import { Motion } from '../../Motion';
import { shareImage } from '../../imageUrl';
import { pageMetadata } from '../../seo';
import { DELIVERY, GREETING, SERVICES, SITE, absoluteUrl } from '../../site';
import { WhatsAppLink } from '../../WhatsAppLink';
import { ArticleBody } from '../ArticleBody';
import { GUIDES, formatDate, getGuide, readingMinutes } from '../content';

export const dynamicParams = false;

export function generateStaticParams() {
  return GUIDES.map((g) => ({ slug: g.slug }));
}

export async function generateMetadata({ params }: { params: Promise<{ slug: string }> }): Promise<Metadata> {
  const g = getGuide((await params).slug);
  if (!g) return {};
  return pageMetadata({
    title: g.metaTitle,
    description: g.metaDescription,
    path: `/guias/${g.slug}`,
    image: g.image,
    imageAlt: g.imageAlt,
  });
}

export default async function GuidePage({ params }: { params: Promise<{ slug: string }> }) {
  const g = getGuide((await params).slug);
  if (!g) notFound();

  const url = absoluteUrl(`/guias/${g.slug}`);
  const services = g.services.map((slug) => SERVICES.find((s) => s.slug === slug)!).filter(Boolean);
  const related = g.related.map((slug) => GUIDES.find((x) => x.slug === slug)!).filter(Boolean);

  const jsonLd = {
    '@context': 'https://schema.org',
    '@graph': [
      {
        '@type': 'BlogPosting',
        '@id': `${url}#nota`,
        headline: g.metaTitle,
        description: g.metaDescription,
        url,
        mainEntityOfPage: url,
        datePublished: g.date,
        dateModified: g.updated ?? g.date,
        inLanguage: 'es-AR',
        image: absoluteUrl(shareImage(g.image, g.imageAlt).url),
        author: { '@id': absoluteUrl('/#negocio') },
        publisher: { '@id': absoluteUrl('/#negocio') },
        about: g.keyword,
        wordCount: readingMinutes(g.body) * 200,
      },
      {
        '@type': 'BreadcrumbList',
        itemListElement: [
          { '@type': 'ListItem', position: 1, name: 'Inicio', item: absoluteUrl('/') },
          { '@type': 'ListItem', position: 2, name: 'Guías', item: absoluteUrl('/guias') },
          { '@type': 'ListItem', position: 3, name: g.title, item: url },
        ],
      },
      ...(g.faqs
        ? [
            {
              '@type': 'FAQPage',
              mainEntity: g.faqs.map((f) => ({
                '@type': 'Question',
                name: f.q,
                acceptedAnswer: { '@type': 'Answer', text: f.a },
              })),
            },
          ]
        : []),
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
            <a href="/guias">Guías</a>
          </li>
          <li aria-current="page">{g.title}</li>
        </ol>
      </nav>

      <article>
        <header className="article-hero">
          <div className="wrap">
            <span className="eyebrow">{g.category}</span>
            <h1 className="h-l">{g.title}</h1>
            <p className="lead">{g.excerpt}</p>
            <p className="guide-meta">
              <time dateTime={g.updated ?? g.date}>{formatDate(g.updated ?? g.date)}</time>
              <span aria-hidden="true">·</span>
              <span>{readingMinutes(g.body)} min de lectura</span>
            </p>
          </div>
          <div className="wrap">
            <div className="article-cover">
              <Img name={g.image} alt={g.imageAlt} priority sizes="(min-width: 900px) 820px, 100vw" />
            </div>
          </div>
        </header>

        <div className="section">
          <div className="wrap article-layout">
            <ArticleBody body={g.body} />

            <aside className="article-aside">
              <div className="article-cta">
                <h2 className="h-m">¿Preferís que lo hagamos nosotros?</h2>
                <p>Tintorería y lavandería en {SITE.city}. Te pasamos el precio antes de empezar.</p>
                <WhatsAppLink message={`${GREETING} Quiero hacer un pedido.`} placement={`guia_${g.slug}`}>
                  Pedir por WhatsApp
                </WhatsAppLink>
                <p className="article-cta-note">
                  <Icon name="truck" /> {DELIVERY.zones}
                </p>
              </div>

              {services.length > 0 && (
                <nav className="article-links" aria-label="Servicios relacionados">
                  <h2 className="footer-h">Servicios relacionados</h2>
                  <ul>
                    {services.map((s) => (
                      <li key={s.slug}>
                        <a href={`/servicios/${s.slug}`}>
                          <Icon name={s.icon} />
                          {s.name}
                        </a>
                      </li>
                    ))}
                  </ul>
                </nav>
              )}
            </aside>
          </div>
        </div>

        {g.faqs && (
          <section className="section section-tint">
            <div className="wrap faq-grid">
              <Motion>
                <span className="eyebrow">Preguntas frecuentes</span>
                <h2 className="h-l">
                  Sobre <span className="thin">{g.category.toLowerCase()}</span>
                </h2>
              </Motion>
              <div className="faq">
                {g.faqs.map((f, i) => (
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
        )}
      </article>

      {related.length > 0 && (
        <section className="section">
          <div className="wrap">
            <div className="section-head">
              <Motion>
                <span className="eyebrow">Seguí leyendo</span>
                <h2 className="h-l">
                  Otras guías <span className="thin">que te pueden servir</span>
                </h2>
              </Motion>
            </div>
            <div className="guide-grid">
              {related.map((r, i) => (
                <Motion as="article" key={r.slug} className="guide-card" delay={i * 90}>
                  <a href={`/guias/${r.slug}`} className="guide-card-media" tabIndex={-1} aria-hidden="true">
                    <Img name={r.image} alt="" sizes="(min-width: 900px) 380px, 100vw" />
                  </a>
                  <div className="guide-card-body">
                    <span className="guide-tag">{r.category}</span>
                    <h3>
                      <a href={`/guias/${r.slug}`}>{r.title}</a>
                    </h3>
                    <p>{r.excerpt}</p>
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
