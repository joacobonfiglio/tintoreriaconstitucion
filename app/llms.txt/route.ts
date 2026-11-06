import { GUIDES } from '../guias/content';
import { ZONES } from '../zonas/content';
import { DELIVERY, FAQ, SERVICES, SITE, absoluteUrl } from '../site';

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

## Retiro y entrega a domicilio

${DELIVERY.short} ${DELIVERY.zones} Más información: ${absoluteUrl(DELIVERY.href)}

${DELIVERY.steps.map((s, i) => `${i + 1}. ${s.title}: ${s.text}`).join('\n')}

## Zonas de retiro y entrega

${ZONES.map((z) => `- [${z.name}](${absoluteUrl(`/zonas/${z.slug}`)}): ${z.lead}`).join('\n')}

## Empresas y alojamientos

Blanquería, mantelería y uniformes para hoteles, alquileres temporarios, restaurantes y consultorios,
con retiro programado y facturación mensual: ${absoluteUrl('/empresas')}

## Guías y consejos

${GUIDES.map((g) => `- [${g.title}](${absoluteUrl(`/guias/${g.slug}`)}): ${g.excerpt}`).join('\n')}

## Preguntas frecuentes

${FAQ.map((f) => `### ${f.q}\n${f.a}`).join('\n\n')}
`;
  return new Response(body, { headers: { 'Content-Type': 'text/plain; charset=utf-8' } });
}
