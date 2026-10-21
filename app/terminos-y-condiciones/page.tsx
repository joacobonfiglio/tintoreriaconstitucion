import { LegalPage, legalMetadata, responsible } from '../LegalPage';
import { SITE } from '../site';

export const metadata = legalMetadata('Términos y condiciones', '/terminos-y-condiciones');

// TODO: el cliente tiene que revisar y confirmar estas condiciones (plazos de retiro, responsabilidad, pagos).
export default function Page() {
  return (
    <LegalPage title="Términos y condiciones">
      <h2>Sobre esta web</h2>
      <p>
        Esta web es de {responsible()}, tintorería ubicada en {SITE.address.street}, {SITE.city}. Sirve para informar
        sobre nuestros servicios y para que puedas consultarnos por WhatsApp. No se hacen compras ni pagos online.
      </p>

      <h2>Precios y presupuestos</h2>
      <p>
        Los precios que te pasamos por WhatsApp a partir de una foto son orientativos. El precio final se confirma al
        recibir la prenda en el local, después de revisarla con vos. Si al revisarla cambia, te lo decimos antes de
        empezar.
      </p>

      <h2>Revisión y cuidado de las prendas</h2>
      <ul>
        <li>Al recibir cada prenda la revisamos y dejamos registradas manchas, desgastes o detalles frágiles.</li>
        <li>Seguimos las indicaciones de la etiqueta. Si una prenda no tiene etiqueta, elegimos el proceso más suave y te lo informamos.</li>
        <li>
          Algunas manchas antiguas o fijadas por calor pueden no salir del todo. Si vemos riesgo para la prenda, te
          consultamos antes de seguir.
        </li>
        <li>No respondemos por objetos olvidados en bolsillos: revisalos antes de dejar la prenda.</li>
      </ul>

      <h2>Plazos y retiro</h2>
      <p>
        Te avisamos por WhatsApp cuando tu prenda está lista. Te pedimos retirarla dentro de un plazo razonable; las
        prendas no retiradas por un período prolongado pueden quedar sujetas a lo que establezca la normativa vigente.
      </p>

      <h2>Contenido de la web</h2>
      <p>
        Los textos, el logo y el diseño de esta web son de {SITE.name}. Los consejos de cuidado son orientativos y no
        reemplazan las indicaciones de la etiqueta de cada prenda.
      </p>

      <h2>Datos personales</h2>
      <p>
        Tratamos tus datos según nuestra <a href="/politica-de-privacidad">política de privacidad</a> y nuestra{' '}
        <a href="/politica-de-cookies">política de cookies</a>.
      </p>

      <h2>Ley aplicable</h2>
      <p>
        Estos términos se rigen por las leyes de la República Argentina, incluida la Ley 24.240 de Defensa del
        Consumidor.
      </p>
    </LegalPage>
  );
}
