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
        <h1 className="h-l">Esta página no existe.</h1>
        <p>Volvé al inicio o hacé tu pedido por WhatsApp.</p>
        <div className="hero-ctas">
          <a href="/" className="btn">
            Ir al inicio
          </a>
          <WhatsAppLink message={`${GREETING} Quiero pedir un retiro a domicilio.`} placement="404" className="btn btn-ghost" />
        </div>
      </div>
    </section>
  );
}
