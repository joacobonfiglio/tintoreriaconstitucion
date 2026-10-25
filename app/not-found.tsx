import { Isotipo } from './Logo';
import { GREETING } from './site';
import { WhatsAppLink } from './WhatsAppLink';

export const metadata = {
  title: 'Página no encontrada',
  description: 'La página que buscás no existe o cambió de dirección.',
  robots: { index: false, follow: true },
};

export default function NotFound() {
  return (
    <section className="notfound">
      <div className="wrap">
        <Isotipo color="var(--orange)" />
        <h1 className="h-l">Esta página se perdió en el lavado.</h1>
        <p>La dirección no existe o cambió. Volvé al inicio o escribinos y te ayudamos.</p>
        <div className="hero-ctas">
          <a href="/" className="btn">
            Ir al inicio
          </a>
          <WhatsAppLink message={`${GREETING} Llegué a una página que no existe y quiero hacer una consulta.`} placement="404" className="btn btn-ghost" />
        </div>
      </div>
    </section>
  );
}
