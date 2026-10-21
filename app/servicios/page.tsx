import type { Metadata } from 'next';
import { PageHero } from '../Blocks';
import { Icon } from '../Icon';
import { Img } from '../Img';
import { Motion } from '../Motion';
import { SERVICES, absoluteUrl } from '../site';

export const metadata: Metadata = {
  title: { absolute: 'Servicios de tintorería en Mar del Plata' },
  description:
    'Limpieza en seco, lavado de acolchados, camisas, camperas, cortinas y prendas delicadas en Mar del Plata. Precio antes de dejar la prenda y aviso por WhatsApp.',
  alternates: { canonical: '/servicios' },
};

const jsonLd = {
  '@context': 'https://schema.org',
  '@type': 'BreadcrumbList',
  itemListElement: [
    { '@type': 'ListItem', position: 1, name: 'Inicio', item: absoluteUrl('/') },
    { '@type': 'ListItem', position: 2, name: 'Servicios', item: absoluteUrl('/servicios') },
  ],
};

export default function Servicios() {
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }} />
      <nav className="crumbs wrap" aria-label="Ruta de navegación">
        <ol>
          <li>
            <a href="/">Inicio</a>
          </li>
          <li aria-current="page">Servicios</li>
        </ol>
      </nav>
      <PageHero
        eyebrow="Servicios · Mar del Plata"
        title={
          <>
            Servicios de tintorería <span className="thin">en Mar del Plata.</span>
          </>
        }
        lead="Limpieza en seco y lavado al agua según la fibra, la etiqueta y el estado de cada prenda. Elegí el servicio para ver qué incluye, cómo trabajamos y cómo pedir precio."
        image="percheros"
        imageAlt="Perchero con prendas limpias en fundas"
        message="Hola! Quiero consultar por un servicio."
      />
      <section className="section">
        <div className="wrap svc-related svc-index">
          {SERVICES.map((s, i) => (
            <Motion as="a" key={s.slug} href={`/servicios/${s.slug}`} className="svc-card" delay={(i % 3) * 90}>
              <div className="svc-card-media">
                <Img name={s.image} alt="" sizes="(min-width: 860px) 360px, 100vw" />
                <span className="garment-icon">
                  <Icon name={s.icon} />
                </span>
              </div>
              <div className="svc-card-body">
                <h2>{s.name}</h2>
                <p>{s.short}</p>
                <span className="link-arrow">Ver servicio</span>
              </div>
            </Motion>
          ))}
        </div>
      </section>
    </>
  );
}
