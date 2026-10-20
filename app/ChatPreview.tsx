import { Icon } from './Icon';
import { Isotipo } from './Logo';
import { SITE, type Service } from './site';
import { WhatsAppLink } from './WhatsAppLink';

/**
 * Selector de servicio + vista previa del mensaje de WhatsApp.
 * Sin JavaScript: radios + :has() muestran la burbuja y el botón del servicio elegido.
 */
export function ChatPreview({ services }: { services: Service[] }) {
  const rules = services
    .map(
      (s) =>
        `.chat:has(#svc-${s.slug}:checked) [data-svc="${s.slug}"]{display:flex}` +
        `.chat:has(#svc-${s.slug}:checked) label[for="svc-${s.slug}"]{background:var(--violet);color:#fff;border-color:var(--violet)}`,
    )
    .join('');

  return (
    <div className="chat">
      <style>{rules}</style>
      <fieldset className="chat-picker">
        <legend>¿Qué necesitás limpiar?</legend>
        <div className="chips">
          {services.map((s, i) => (
            <span key={s.slug}>
              <input type="radio" name="svc" id={`svc-${s.slug}`} defaultChecked={i === 0} className="sr-only" />
              <label htmlFor={`svc-${s.slug}`} className="chip">
                <Icon name={s.icon} />
                {s.name}
              </label>
            </span>
          ))}
        </div>
      </fieldset>

      <div className="phone" aria-label="Vista previa del mensaje">
        <div className="phone-bar">
          <span className="phone-avatar">
            <Isotipo color="#fff" />
          </span>
          <span>
            <strong>{SITE.name}</strong>
            <small>Respondemos en horario de atención</small>
          </span>
        </div>
        <div className="phone-body">
          {services.map((s) => (
            <div key={s.slug} className="bubble out" data-svc={s.slug}>
              <p>{s.message}</p>
              <p className="bubble-hint">
                <Icon name="camera" /> Adjuntá una foto de la prenda y su etiqueta
              </p>
            </div>
          ))}
          <div className="bubble in">
            <p>¡Hola! Con la foto te pasamos el precio y el plazo antes de que vengas.</p>
          </div>
        </div>
        <div className="phone-send">
          {services.map((s) => (
            <div key={s.slug} data-svc={s.slug} className="phone-send-row">
              <WhatsAppLink message={s.message} placement={`selector_${s.slug}`}>
                Enviar este mensaje
              </WhatsAppLink>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
