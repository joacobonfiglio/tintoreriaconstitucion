import type { Metadata } from 'next';
import { PageHero } from '../Blocks';
import { Icon } from '../Icon';
import { Img } from '../Img';
import { Motion } from '../Motion';
import { pageMetadata } from '../seo';
import { DELIVERY, GREETING, SITE, absoluteUrl } from '../site';
import { ZONES } from './content';

export const metadata: Metadata = pageMetadata({
  title: 'Zonas de retiro a domicilio en Mar del Plata',
  description:
    'Dónde retiramos y entregamos: barrio Constitución y centro de Mar del Plata. Mirá tu zona o pasanos tu dirección por WhatsApp y te confirmamos.',
  path: '/zonas',
  image: 'entrega',
  imageAlt: 'Repartidor entregando un pedido de ropa limpia en la puerta de una casa',
});

const jsonLd = {
  '@context': 'https://schema.org',
  '@graph': [
    {
      '@type': 'ItemList',
      name: 'Zonas de retiro y entrega',
      itemListElement: ZONES.map((z, i) => ({
        '@type': 'ListItem',
        position: i + 1,
        name: z.name,
        url: absoluteUrl(`/zonas/${z.slug}`),
      })),
    },
    {
      '@type': 'BreadcrumbList',
      itemListElement: [
        { '@type': 'ListItem', position: 1, name: 'Inicio', item: absoluteUrl('/') },
        { '@type': 'ListItem', position: 2, name: 'Zonas', item: absoluteUrl('/zonas') },
      ],
    },
  ],
};

export default function Zonas() {
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }} />
      <nav className="crumbs wrap" aria-label="Ruta de navegación">
        <ol>
          <li>
            <a href="/">Inicio</a>
          </li>
          <li aria-current="page">Zonas</li>
        </ol>
      </nav>

      <PageHero
        eyebrow={`Zonas de retiro · ${SITE.city}`}
        title={
          <>
            Dónde retiramos <span className="thin">y entregamos</span>
          </>
        }
        lead={DELIVERY.zonesLong}
        image="entrega"
        imageAlt="Repartidor entregando un pedido de ropa limpia en la puerta de una casa"
        message={`${GREETING} Quiero saber si llegan a mi zona.`}
        cta="Consultar mi zona"
      >
        <a href="/retiro-a-domicilio" className="btn btn-ghost">
          Cómo funciona
        </a>
      </PageHero>

      <section className="section">
        <div className="wrap">
          <div className="guide-grid">
            {ZONES.map((z, i) => (
              <Motion as="article" key={z.slug} className="guide-card" delay={i * 90}>
                <a href={`/zonas/${z.slug}`} className="guide-card-media" tabIndex={-1} aria-hidden="true">
                  <Img name={z.image} alt="" sizes="(min-width: 900px) 420px, 100vw" />
                </a>
                <div className="guide-card-body">
                  <span className="guide-tag">{z.hasLocal ? 'Local y retiro' : 'Retiro a domicilio'}</span>
                  <h2>
                    <a href={`/zonas/${z.slug}`}>{z.name}</a>
                  </h2>
                  <p>{z.lead}</p>
                  <span className="link-arrow">Ver la zona</span>
                </div>
              </Motion>
            ))}
          </div>

          <Motion as="p" className="zones-note" delay={180}>
            <Icon name="pin" /> ¿No ves tu barrio? Escribinos igual: según el día y el volumen podemos llegar un poco
            más lejos, y si no, podés acercar tus prendas al local en {SITE.address.street}.
          </Motion>
        </div>
      </section>
    </>
  );
}
