import { CookieSettingsButton } from '../CookieConsent';
import { LegalPage, legalMetadata } from '../LegalPage';
import { SITE } from '../site';

export const metadata = legalMetadata('Política de cookies', '/politica-de-cookies');

export default function Page() {
  return (
    <LegalPage title="Política de cookies">
      <h2>Qué son las cookies</h2>
      <p>
        Son pequeños archivos que una web guarda en tu navegador para recordar información entre visitas. También
        usamos el almacenamiento local del navegador para recordar tu elección sobre las cookies.
      </p>

      <h2>Qué cookies usa esta web</h2>
      <ul>
        <li>
          <strong>Necesarias:</strong> una entrada en el almacenamiento local (<code>tc-consent</code>) que guarda si
          aceptaste o rechazaste la medición. No identifica a nadie.
        </li>
        <li>
          <strong>De medición (Google Analytics 4):</strong> cookies como <code>_ga</code> y <code>_ga_*</code>, que
          nos dicen qué páginas se visitan y qué botones se usan, con datos agregados. Solo se activan si las aceptás.
        </li>
      </ul>
      <p>No usamos cookies de publicidad ni de redes sociales.</p>

      <h2>Cómo cambiar tu elección</h2>
      <p>
        Podés aceptar o rechazar la medición en el aviso que aparece al entrar, y cambiarla cuando quieras desde
        «Preferencias de cookies» en el pie de página. También podés borrar las cookies desde la configuración de tu
        navegador.
      </p>
      <CookieSettingsButton />

      <h2>Más información</h2>
      <p>
        Para saber cómo tratamos tus datos, leé la <a href="/politica-de-privacidad">política de privacidad</a>. Ante
        cualquier duda, escribinos por WhatsApp al {SITE.phoneDisplay}.
      </p>
    </LegalPage>
  );
}
