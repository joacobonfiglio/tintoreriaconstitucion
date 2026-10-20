import type { ReactNode } from 'react';
import { Icon, type AnyIcon } from './Icon';
import { Img } from './Img';
import { Isotipo } from './Logo';
import { Motion } from './Motion';
import { WhatsAppLink } from './WhatsAppLink';
import type { Service } from './site';

/* ───────── Waves: patrón de ondas del manual (pág. 13 y 17) ───────── */
export function Waves({ id = 'w', color = 'currentColor', opacity = 0.08, className }: { id?: string; color?: string; opacity?: number; className?: string }) {
  return (
    <svg className={`waves ${className ?? ''}`} aria-hidden="true" width="100%" height="100%">
      <defs>
        <pattern id={`waves-${id}`} width="200" height="120" patternUnits="userSpaceOnUse">
          <path
            d="M-50 30c25 0 25 60 50 60s25-60 50-60 25 60 50 60 25-60 50-60 25 60 50 60 25-60 50-60"
            fill="none"
            stroke={color}
            strokeWidth="24"
            strokeLinecap="round"
            opacity={opacity}
          />
        </pattern>
      </defs>
      <rect width="100%" height="100%" fill={`url(#waves-${id})`} />
    </svg>
  );
}

/* ───────── PageHero: cabecera de páginas internas ───────── */
export function PageHero({
  eyebrow,
  title,
  lead,
  image,
  imageAlt,
  message,
  children,
}: {
  eyebrow: string;
  title: ReactNode;
  lead: string;
  image: string;
  imageAlt: string;
  message: string;
  children?: ReactNode;
}) {
  return (
    <section className="page-hero on-dark">
      <Waves id="ph" color="#fff" opacity={0.06} />
      <div className="wrap page-hero-grid">
        <div>
          <span className="eyebrow">{eyebrow}</span>
          <h1 className="h-l">{title}</h1>
          <p className="lead">{lead}</p>
          <div className="hero-ctas">
            <WhatsAppLink message={message} placement="page_hero">
              Pedí precio por WhatsApp
            </WhatsAppLink>
            {children}
          </div>
        </div>
        <div className="page-hero-media">
          <Img name={image} alt={imageAlt} priority sizes="(min-width: 900px) 480px, 100vw" />
        </div>
      </div>
    </section>
  );
}

/* ───────── Ribbon: cinta de confianza en movimiento ───────── */
export function Ribbon({ items }: { items: string[] }) {
  const row = (hidden: boolean) => (
    <ul className="ribbon-row" aria-hidden={hidden || undefined}>
      {items.map((t) => (
        <li key={t}>
          <Isotipo className="ribbon-iso" />
          <span>{t}</span>
        </li>
      ))}
    </ul>
  );
  return (
    <div className="ribbon" role="region" aria-label="Lo que nos distingue">
      <div className="ribbon-track">
        {row(false)}
        {row(true)}
      </div>
    </div>
  );
}

/* ───────── Clothesline: servicios colgados en un perchero (scroll-snap) ───────── */
export function Clothesline({ services }: { services: Service[] }) {
  return (
    <div className="clothesline">
      <div className="rail" aria-hidden="true" />
      <ul className="hangers" aria-label="Servicios">
        {services.map((s, i) => (
          <li key={s.slug} className="hanger-item" style={{ ['--i' as string]: i }}>
            <svg className="hook" viewBox="0 0 120 60" aria-hidden="true">
              <path d="M60 22a8 8 0 1 0-8-8M60 22v4L8 56h104L60 26" fill="none" stroke="currentColor" strokeWidth="3.5" strokeLinecap="round" strokeLinejoin="round" />
            </svg>
            <article className="garment" id={s.slug}>
              <div className="garment-media">
                <Img name={s.image} alt={s.name} sizes="(min-width: 700px) 340px, 78vw" />
                <span className="garment-icon">
                  <Icon name={s.icon} />
                </span>
              </div>
              <div className="garment-body">
                <h3>{s.name}</h3>
                <p>{s.short}</p>
                <WhatsAppLink message={s.message} placement={`servicio_${s.slug}`} className="link-arrow" icon={false}>
                  Consultar precio
                </WhatsAppLink>
              </div>
            </article>
          </li>
        ))}
      </ul>
    </div>
  );
}

/* ───────── Process: pasos numerados ───────── */
export function Process({ steps }: { steps: { icon: AnyIcon; title: string; text: string }[] }) {
  return (
    <ol className="process">
      {steps.map((s, i) => (
        <Motion as="li" key={s.title} delay={i * 110} className="step">
          <span className="step-n" aria-hidden="true">
            {String(i + 1).padStart(2, '0')}
          </span>
          <span className="step-icon">
            <Icon name={s.icon} />
          </span>
          <h3>{s.title}</h3>
          <p>{s.text}</p>
        </Motion>
      ))}
    </ol>
  );
}

/* ───────── GuideCards: guía de cuidado (contenido útil + SEO) ───────── */
export function GuideCards({ guides }: { guides: { icon: AnyIcon; tag: string; title: string; text: string; tips: string[] }[] }) {
  return (
    <div className="guides">
      {guides.map((g, i) => (
        <Motion as="article" key={g.title} delay={i * 90} className="guide">
          <div className="guide-top">
            <span className="guide-icon">
              <Icon name={g.icon} />
            </span>
            <span className="guide-tag">{g.tag}</span>
          </div>
          <h3>{g.title}</h3>
          <p>{g.text}</p>
          <details>
            <summary>Ver consejos</summary>
            <ul>
              {g.tips.map((t) => (
                <li key={t}>
                  <Icon name="check" />
                  <span>{t}</span>
                </li>
              ))}
            </ul>
          </details>
        </Motion>
      ))}
    </div>
  );
}
