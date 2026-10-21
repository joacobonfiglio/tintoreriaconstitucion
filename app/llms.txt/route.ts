import { FAQ, SERVICES, SITE, absoluteUrl } from '../site';

export const dynamic = 'force-static';

// Resumen en texto plano para asistentes de IA (llmstxt.org).
export function GET() {
  const body = `# ${SITE.name}

> ${SITE.description}

- Ciudad: ${SITE.city}, ${SITE.region}, Argentina
- Barrio: ${SITE.address.neighborhood}
- Dirección: ${SITE.address.street}
- WhatsApp: +${SITE.whatsapp}
- Horario: ${SITE.hours.map((h) => `${h.label} ${h.opens}–${h.closes}`).join('; ')}
- Web: ${SITE.url}

## Servicios

${SERVICES.map((s) => `- [${s.name}](${absoluteUrl(`/servicios/${s.slug}`)}): ${s.short}`).join('\n')}

## Cómo trabajamos

1. La persona manda una foto de la prenda y la etiqueta por WhatsApp.
2. Le pasamos precio y plazo antes de que la deje.
3. Revisamos la prenda con ella al recibirla.
4. Avisamos por WhatsApp cuando está lista.

## Preguntas frecuentes

${FAQ.map((f) => `### ${f.q}\n${f.a}`).join('\n\n')}
`;
  return new Response(body, { headers: { 'Content-Type': 'text/plain; charset=utf-8' } });
}
