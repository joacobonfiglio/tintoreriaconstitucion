'use client';

import { usePathname } from 'next/navigation';
import type { ComponentProps } from 'react';
import { whatsappMessageFor } from './site';
import { WhatsAppLink } from './WhatsAppLink';

/** Botón de WhatsApp cuyo mensaje cambia según la página (servicio, listado, legales o general). */
export function PageWhatsAppLink(props: Omit<ComponentProps<typeof WhatsAppLink>, 'message'>) {
  const pathname = usePathname() ?? '/';
  return <WhatsAppLink {...props} message={whatsappMessageFor(pathname)} />;
}
