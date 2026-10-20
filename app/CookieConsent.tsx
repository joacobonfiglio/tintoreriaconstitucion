'use client';

import { useEffect, useState } from 'react';
import { GA_ID, readConsent, setConsent } from './ga';

/** Aviso de cookies. Solo aparece si GA está configurado y la persona no eligió. */
export function CookieConsent() {
  const [open, setOpen] = useState(false);

  useEffect(() => {
    if (!GA_ID) return;
    if (readConsent() === null) setOpen(true);
    const reopen = () => setOpen(true);
    window.addEventListener('tc-open-consent', reopen);
    return () => window.removeEventListener('tc-open-consent', reopen);
  }, []);

  if (!open) return null;

  const choose = (v: 'granted' | 'denied') => {
    setConsent(v);
    setOpen(false);
  };

  return (
    <div className="consent" role="dialog" aria-live="polite" aria-label="Preferencias de cookies">
      <p>
        Usamos cookies de medición para saber qué secciones sirven y mejorar la web. No usamos publicidad.
      </p>
      <div className="consent-actions">
        <button type="button" className="btn btn-ghost" onClick={() => choose('denied')}>
          Rechazar
        </button>
        <button type="button" className="btn" onClick={() => choose('granted')}>
          Aceptar
        </button>
      </div>
    </div>
  );
}

/** Botón del footer para volver a elegir. */
export function CookieSettingsButton() {
  if (!GA_ID) return null;
  return (
    <button type="button" className="footer-link-btn" onClick={() => window.dispatchEvent(new Event('tc-open-consent'))}>
      Preferencias de cookies
    </button>
  );
}
