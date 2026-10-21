'use client';

import { useEffect, useRef, type ElementType, type ReactNode, type CSSProperties } from 'react';

type Props = {
  as?: ElementType;
  variant?: 'up' | 'fade' | 'scale';
  delay?: number;
  className?: string;
  children: ReactNode;
  id?: string;
  href?: string;
};

// Un solo IntersectionObserver compartido para toda la página.
let observer: IntersectionObserver | null = null;
function getObserver() {
  if (!observer) {
    observer = new IntersectionObserver(
      (entries) => {
        for (const e of entries) {
          if (e.isIntersecting) {
            e.target.classList.add('is-in');
            observer?.unobserve(e.target);
          }
        }
      },
      { rootMargin: '0px 0px -8% 0px', threshold: 0.12 },
    );
  }
  return observer;
}

/** Aparición suave al entrar en pantalla. Sin JS o con movimiento reducido, se ve igual. */
export function Motion({ as: Tag = 'div', variant = 'up', delay = 0, className, children, id, href }: Props) {
  const ref = useRef<HTMLElement>(null);
  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    const io = getObserver();
    io.observe(el);
    return () => io.unobserve(el);
  }, []);
  return (
    <Tag
      ref={ref}
      id={id}
      href={href}
      data-motion={variant}
      className={className}
      style={delay ? ({ '--d': `${delay}ms` } as CSSProperties) : undefined}
    >
      {children}
    </Tag>
  );
}
