'use client';

import { useEffect, useRef, type ReactNode } from 'react';

/**
 * Fija el perchero de servicios en pantalla y lo desplaza en horizontal a medida que se hace scroll.
 * Sin JS queda un carrusel deslizable con el dedo; con movimiento reducido, una grilla.
 */
export function ScrollRail({ children, count }: { children: ReactNode; count: number }) {
  const outer = useRef<HTMLDivElement>(null);
  const bar = useRef<HTMLSpanElement>(null);
  const label = useRef<HTMLSpanElement>(null);

  useEffect(() => {
    const el = outer.current;
    if (!el) return;
    if (window.matchMedia('(prefers-reduced-motion: reduce)').matches) {
      el.dataset.mode = 'grid';
      return;
    }
    const track = el.querySelector<HTMLElement>('.hangers');
    const viewport = el.querySelector<HTMLElement>('.clothesline');
    if (!track || !viewport) return;

    let distance = 0;
    let frame = 0;

    const measure = () => {
      el.dataset.mode = 'pin';
      track.style.transform = '';
      distance = Math.max(0, track.scrollWidth - viewport.clientWidth);
      el.style.height = distance ? `calc(var(--rail-h) + ${distance}px)` : '';
      if (!distance) el.dataset.mode = 'static';
      update();
    };

    const update = () => {
      frame = 0;
      if (!distance) return;
      const p = Math.min(1, Math.max(0, -el.getBoundingClientRect().top / distance));
      track.style.transform = `translate3d(${-p * distance}px,0,0)`;
      if (bar.current) bar.current.style.transform = `scaleX(${p})`;
      if (label.current) label.current.textContent = String(Math.min(count, Math.floor(p * (count - 1) + 1.5)));
    };

    const onScroll = () => {
      if (!frame) frame = requestAnimationFrame(update);
    };

    // Con teclado: llevar el scroll hasta la tarjeta que recibe el foco.
    const onFocus = (e: FocusEvent) => {
      if (!distance) return;
      const item = (e.target as HTMLElement).closest<HTMLElement>('.hanger-item');
      if (!item) return;
      viewport.scrollLeft = 0;
      const target = Math.min(distance, Math.max(0, item.offsetLeft - 24));
      const top = el.getBoundingClientRect().top + window.scrollY + target;
      window.scrollTo({ top, behavior: 'instant' as ScrollBehavior });
    };

    measure();
    // El alto del perchero cambia al medir: si se llegó con un #ancla que está más abajo, volver a ubicarla.
    const target = location.hash && document.getElementById(decodeURIComponent(location.hash.slice(1)));
    if (target && target.compareDocumentPosition(el) & Node.DOCUMENT_POSITION_PRECEDING) {
      target.scrollIntoView();
    }
    track.addEventListener('focusin', onFocus);
    const ro = new ResizeObserver(measure);
    ro.observe(viewport);
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => {
      ro.disconnect();
      track.removeEventListener('focusin', onFocus);
      window.removeEventListener('scroll', onScroll);
      cancelAnimationFrame(frame);
    };
  }, [count]);

  return (
    <div ref={outer} className="rail-pin">
      <div className="rail-sticky">
        {children}
        <div className="rail-progress" aria-hidden="true">
          <span className="rail-count">
            <span ref={label}>1</span> / {count}
          </span>
          <span className="rail-bar">
            <span ref={bar} />
          </span>
          <span className="rail-hint">Seguí bajando</span>
        </div>
      </div>
    </div>
  );
}
