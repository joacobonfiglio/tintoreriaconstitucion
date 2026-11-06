import type { Metadata } from 'next';
import { Isotipo } from './Logo';
import { GREETING, NAV, SERVICES, SITE } from './site';
import { WhatsAppLink } from './WhatsAppLink';

// La 404 no se indexa, pero sus enlaces se siguen: así Google y las personas
// encuentran igual los servicios desde una dirección vieja o mal escrita.
export const metadata: Metadata = {
  title: 'Página no encontrada',
  description: `La página que buscás no existe o cambió de dirección. Mirá los servicios de ${SITE.name} o escribinos por WhatsApp.`,
  robots: { index: false, follow: true },
};

export default function NotFound() {
  return (
    <section className="notfound">
      <div className="wrap">
        <Isotipo color="var(--orange)" />
        <p className="notfound-code">Error 404</p>
        <h1 className="h-l">Esta página no existe</h1>
        <p>
          La dirección que abriste no existe o cambió. Te dejamos los accesos de siempre, o escribinos y lo vemos por
          WhatsApp.
        </p>
        <div className="hero-ctas">
          <a href="/" className="btn">
            Ir al inicio
          </a>
          <WhatsAppLink message={`${GREETING} Quiero hacer un pedido.`} placement="404" className="btn btn-ghost" />
        </div>

        <nav className="notfound-links" aria-label="Páginas principales">
          <h2 className="footer-h">Nuestros servicios</h2>
          <ul>
            {SERVICES.map((s) => (
              <li key={s.slug}>
                <a href={`/servicios/${s.slug}`}>{s.name}</a>
              </li>
            ))}
          </ul>
          <h2 className="footer-h">Secciones</h2>
          <ul>
            {NAV.map((n) => (
              <li key={n.href}>
                <a href={n.href}>{n.label}</a>
              </li>
            ))}
          </ul>
        </nav>
      </div>
    </section>
  );
}
