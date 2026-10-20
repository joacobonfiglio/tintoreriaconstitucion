// Google Analytics 4 con Consent Mode v2.
// Sin GA_ID no se carga nada. Hasta que la persona acepta, GA corre en modo
// "denied" (sin cookies, solo pings anónimos).

export const GA_ID = process.env.NEXT_PUBLIC_GA_ID ?? ''; // TODO: G-XXXXXXX en Vercel

export const CONSENT_KEY = 'tc-consent';
export type Consent = 'granted' | 'denied';

type Gtag = (...args: unknown[]) => void;
declare global {
  interface Window {
    gtag?: Gtag;
    dataLayer?: unknown[];
  }
}

export function readConsent(): Consent | null {
  try {
    const v = localStorage.getItem(CONSENT_KEY);
    return v === 'granted' || v === 'denied' ? v : null;
  } catch {
    return null;
  }
}

export function setConsent(value: Consent) {
  try {
    localStorage.setItem(CONSENT_KEY, value);
  } catch {}
  window.gtag?.('consent', 'update', {
    analytics_storage: value,
    ad_storage: 'denied',
    ad_user_data: 'denied',
    ad_personalization: 'denied',
  });
  window.dispatchEvent(new CustomEvent('tc-consent', { detail: value }));
}

/** Servicio inferido de la URL, para segmentar conversiones por página. */
export function serviceFromPath(pathname: string): string {
  const seg = pathname.split('/').filter(Boolean);
  if (seg[0] === 'servicios' && seg[1]) return seg[1];
  if (seg[0]) return seg[0];
  return 'home';
}

export function track(event: string, params: Record<string, string | number> = {}) {
  if (typeof window === 'undefined') return;
  window.gtag?.('event', event, {
    service: serviceFromPath(window.location.pathname),
    ...params,
  });
}

/** Script inline que va en <head>: define defaults antes de que cargue gtag.js. */
export const consentBootstrap = `
window.dataLayer=window.dataLayer||[];function gtag(){dataLayer.push(arguments)}window.gtag=gtag;
var c=null;try{c=localStorage.getItem('${CONSENT_KEY}')}catch(e){}
gtag('consent','default',{analytics_storage:c==='granted'?'granted':'denied',ad_storage:'denied',ad_user_data:'denied',ad_personalization:'denied',wait_for_update:500});
gtag('js',new Date());gtag('config','${GA_ID}',{anonymize_ip:true});
`;
