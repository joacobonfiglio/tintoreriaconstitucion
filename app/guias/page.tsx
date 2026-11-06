import type { Metadata } from 'next';
import { PageHero } from '../Blocks';
import { Img } from '../Img';
import { Motion } from '../Motion';
import { pageMetadata } from '../seo';
import { GREETING, SITE, absoluteUrl } from '../site';
import { formatDate, guidesByDate, readingMinutes } from './content';

export const metadata: Metadata = pageMetadata({
  title: 'Guías y consejos de tintorería y lavandería',
  description:
    'Cómo lavar un acolchado de plumas, sacar manchas, leer las etiquetas y guardar la ropa de invierno. Guías de Tintorería Constitución, Mar del Plata.',
  path: '/guias',
  image: 'manos-tela',
  imageAlt: 'Manos revisando una tela celeste sobre una mesa de trabajo',
});

const guides = guidesByDate();

const jsonLd = {
  '@context': 'https://schema.org',
  '@graph': [
    {
      '@type': 'Blog',
      '@id': absoluteUrl('/guias#blog'),
      name: `Guías y consejos | ${SITE.name}`,
      description: 'Guías de cuidado de la ropa escritas por una tintorería de Mar del Plata.',
      url: absoluteUrl('/guias'),
      inLanguage: 'es-AR',
      publisher: { '@id': absoluteUrl('/#negocio') },
      blogPost: guides.map((g) => ({
        '@type': 'BlogPosting',
        headline: g.title,
        description: g.excerpt,
        datePublished: g.date,
        dateModified: g.updated ?? g.date,
        url: absoluteUrl(`/guias/${g.slug}`),
        author: { '@id': absoluteUrl('/#negocio') },
      })),
    },
    {
      '@type': 'BreadcrumbList',
      itemListElement: [
        { '@type': 'ListItem', position: 1, name: 'Inicio', item: absoluteUrl('/') },
        { '@type': 'ListItem', position: 2, name: 'Guías', item: absoluteUrl('/guias') },
      ],
    },
  ],
};

export default function Guias() {
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }} />
      <nav className="crumbs wrap" aria-label="Ruta de navegación">
        <ol>
          <li>
            <a href="/">Inicio</a>
          </li>
          <li aria-current="page">Guías</li>
        </ol>
      </nav>

      <PageHero
        eyebrow="Guías y consejos"
        title={
          <>
            Guías para cuidar tu ropa <span className="thin">entre lavado y lavado</span>
          </>
        }
        lead="Lo que aprendimos atendiendo el mostrador, escrito para que lo puedas hacer en casa. Y cuando no conviene hacerlo en casa, también te lo decimos."
        image="manos-tela"
        imageAlt="Manos revisando una tela celeste sobre una mesa de trabajo"
        message={`${GREETING} Tengo una consulta sobre el cuidado de una prenda.`}
        cta="Hacer una consulta"
      >
        <a href="/servicios" className="btn btn-ghost">
          Ver servicios
        </a>
      </PageHero>

      <section className="section">
        <div className="wrap">
          <div className="guide-grid">
            {guides.map((g, i) => (
              <Motion as="article" key={g.slug} className="guide-card" delay={(i % 3) * 90}>
                <a href={`/guias/${g.slug}`} className="guide-card-media" tabIndex={-1} aria-hidden="true">
                  <Img name={g.image} alt="" sizes="(min-width: 900px) 380px, 100vw" />
                </a>
                <div className="guide-card-body">
                  <span className="guide-tag">{g.category}</span>
                  <h2>
                    <a href={`/guias/${g.slug}`}>{g.title}</a>
                  </h2>
                  <p>{g.excerpt}</p>
                  <p className="guide-meta">
                    <time dateTime={g.date}>{formatDate(g.date)}</time>
                    <span aria-hidden="true">·</span>
                    <span>{readingMinutes(g.body)} min de lectura</span>
                  </p>
                </div>
              </Motion>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
