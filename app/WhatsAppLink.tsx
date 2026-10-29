import type { ReactNode } from 'react';
import { waLink } from './site';
import { TrackedLink } from './TrackedLink';
import { Icon } from './Icon';

type Props = {
  message: string;
  /** dónde está el botón: hero, header, flotante, servicio, etc. */
  placement: string;
  className?: string;
  children?: ReactNode;
  icon?: boolean;
  label?: string;
};

/** Link a wa.me con mensaje precargado + evento generate_lead / whatsapp_click. */
export function WhatsAppLink({ message, placement, className = 'btn btn-wa', children, icon = true, label }: Props) {
  return (
    <TrackedLink
      href={waLink(message)}
      target="_blank"
      rel="noopener"
      className={className}
      event="whatsapp_click"
      params={{ placement }}
      aria-label={label}
    >
      {icon && <Icon name="whatsapp" />}
      {children ?? 'Pedir por WhatsApp'}
    </TrackedLink>
  );
}
