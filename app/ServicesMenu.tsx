'use client';

import { useEffect, useRef, useState } from 'react';
import { Icon } from './Icon';
import { imageUrl } from './imageUrl';
import { Isotipo } from './Logo';
import { GREETING, SERVICES } from './site';
import { WhatsAppLink } from './WhatsAppLink';

/**
 * Desplegable de servicios del header (solo escritorio).
 * Se abre al pasar el mouse o con clic/teclado; Escape o clic afuera lo cierran.
 * Los enlaces están siempre en el HTML, así Google los sigue aunque el panel esté cerrado.
 */
export function ServicesMenu() {
  const [open, setOpen] = useState(false);
  const root = useRef<HTMLDivElement>(null);
  const timer = useRef<number | undefined>(undefined);

  useEffect(() => {
    if (!open) return;
    const onKey = (e: KeyboardEvent) => {
      if (e.key === 'Escape') {
        setOpen(false);
        root.current?.querySelector('button')?.focus();
      }
    };
    const onDown = (e: PointerEvent) => {
      if (!root.current?.contains(e.target as Node)) setOpen(false);
    };
    document.addEventListener('keydown', onKey);
    document.addEventListener('pointerdown', onDown);
    return () => {
      document.removeEventListener('keydown', onKey);
      document.removeEventListener('pointerdown', onDown);
    };
  }, [open]);

  const fine = () => window.matchMedia('(hover: hover) and (pointer: fine)').matches;
  const enter = () => {
    if (!fine()) return;
    window.clearTimeout(timer.current);
    setOpen(true);
  };
  const leave = () => {
    if (!fine()) return;
    timer.current = window.setTimeout(() => setOpen(false), 160);
  };

  return (
    <div className="mega" ref={root} onPointerEnter={enter} onPointerLeave={leave}>
      <button
        type="button"
        className="mega-trigger"
        aria-expanded={open}
        aria-controls="mega-servicios"
        onClick={() => setOpen((o) => (fine() ? true : !o))}
      >
        Servicios
        <svg viewBox="0 0 12 12" aria-hidden="true">
          <path d="M2.5 4.5 6 8l3.5-3.5" fill="none" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round" />
        </svg>
      </button>
      <div
        className="mega-panel"
        id="mega-servicios"
        data-open={open}
        onClick={(e) => {
          if ((e.target as Element).closest('a')) setOpen(false);
        }}
      >
        <ul className="mega-grid">
          {SERVICES.map((s) => (
            <li key={s.slug}>
              <a href={`/servicios/${s.slug}`}>
                <span className="mega-thumb">
                  <img src={imageUrl(s.image, 480)} alt="" width={88} height={66} loading="lazy" decoding="async" />
                  <span className="mega-icon">
                    <Icon name={s.icon} />
                  </span>
                </span>
                <span>
                  <strong>{s.name}</strong>
                  <small>{s.short}</small>
                </span>
              </a>
            </li>
          ))}
        </ul>
        <aside className="mega-aside">
          <Isotipo className="mega-iso" color="var(--orange)" />
          <p>Retiramos y entregamos a domicilio.</p>
          <WhatsAppLink message={`${GREETING} Quiero pedir un retiro a domicilio.`} placement="menu_servicios">
            Pedir retiro
          </WhatsAppLink>
          <a className="mega-all" href="/servicios">
            Ver todos los servicios →
          </a>
        </aside>
      </div>
    </div>
  );
}
