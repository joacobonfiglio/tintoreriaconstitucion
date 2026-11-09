import type { Metadata } from 'next';
import { PageHero } from '../Blocks';
import { Icon } from '../Icon';
import { Img } from '../Img';
import { Motion } from '../Motion';
import { GREETING, SERVICES, absoluteUrl } from '../site';
import { pageMetadata } from '../seo';

export const metadata: Metadata = pageMetadata({
  title: 'Servicios de tintorería y lavandería',
  description:
    'Limpieza de trajes, acolchados, camisas, cortinas y prendas delicadas, lavandería, alfombras, zapatillas y arreglos de ropa en Mar del Plata.',
  path: '/servicios',
  image: 'percheros',
  imageAlt: 'Prendas limpias en fundas colgadas en el perchero de la tintorería',
});

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
            Servicios de tintorería <span className="thin">y lavandería</span>
          </>
        }
        lead="Diez servicios en un mismo lugar: tintorería, lavandería, alfombras y tapizados, zapatillas y arreglos de costura. Elegí y pedilo por WhatsApp."
        image="percheros"
        imageAlt="Prendas limpias en fundas colgadas en el perchero de la tintorería"
        message={`${GREETING} Quiero hacer un pedido.`}
        cta="Hacer un pedido"
      />
      <section className="section">
        <div className="wrap">
          <Motion as="p" className="zones-note">
            <Icon name="building" /> ¿Es para un hotel, un alquiler temporario o un restaurante?{' '}
            <a href="/empresas">Mirá el servicio para empresas</a>
          </Motion>
        </div>
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
