import type { Metadata } from 'next';
import type { ReactNode } from 'react';
import { GREETING, LEGAL, SITE } from './site';
import { pageMetadata } from './seo';
import { WhatsAppLink } from './WhatsAppLink';

/** Las páginas legales no se indexan (no aportan a búsquedas) pero sus enlaces se siguen. */
export function legalMetadata(title: string, path: string): Metadata {
  return pageMetadata({ title, description: `${title} de ${SITE.name}, tintorería en ${SITE.city}.`, path, noindex: true });
}

export function LegalPage({ title, children }: { title: string; children: ReactNode }) {
  return (
    <>
      <nav className="crumbs wrap" aria-label="Ruta de navegación">
        <ol>
          <li>
            <a href="/">Inicio</a>
          </li>
          <li aria-current="page">{title}</li>
        </ol>
      </nav>
      <section className="legal-hero on-dark">
        <div className="wrap">
          <span className="eyebrow">Información legal</span>
          <h1 className="h-l">{title}</h1>
          <p className="lead">
            {SITE.name}, {SITE.address.street}, {SITE.city}. Si tenés una consulta sobre esta información, escribinos.
          </p>
        </div>
      </section>
      <section className="section">
        <div className="wrap">
          <article className="prose">
            {children}
            <p className="prose-updated">Última actualización: {LEGAL.updated}.</p>
            <WhatsAppLink message={`${GREETING} Tengo una consulta sobre la información legal de la web.`} placement="legal">
              Consultar por WhatsApp
            </WhatsAppLink>
          </article>
        </div>
      </section>
    </>
  );
}

/** "Tintorería Constitución (Titular, CUIT …)" solo con los datos que existan. */
export function responsible() {
  const extra = [LEGAL.holder, LEGAL.cuit && `CUIT ${LEGAL.cuit}`].filter(Boolean).join(', ');
  return extra ? `${SITE.name} (${extra})` : SITE.name;
}
