'use client';

import type { AnchorHTMLAttributes, ReactNode } from 'react';
import { track } from './ga';

type Props = AnchorHTMLAttributes<HTMLAnchorElement> & {
  event: string;
  params?: Record<string, string | number>;
  children: ReactNode;
};

/** <a> que manda un evento de GA4 al hacer clic (llamadas, mapa, mail, etc.). */
export function TrackedLink({ event, params, onClick, children, ...rest }: Props) {
  return (
    <a
      {...rest}
      onClick={(e) => {
        track(event, { link_url: rest.href ?? '', ...params });
        onClick?.(e);
      }}
    >
      {children}
    </a>
  );
}
