import type { Metadata, Viewport } from 'next';
import { Sora } from 'next/font/google';
import Script from 'next/script';
import './brand.css';
import './sections.css';
import { CookieConsent, CookieSettingsButton } from './CookieConsent';
import { GA_ID, consentBootstrap } from './ga';
import { Icon } from './Icon';
import { Logo } from './Logo';
import { IS_PRODUCTION, LEGAL_PAGES, NAV, SERVICES, SITE, absoluteUrl } from './site';
import { TrackedLink } from './TrackedLink';
import { PageWhatsAppLink } from './PageWhatsAppLink';
import { Waves } from './Blocks';
import { ServicesMenu } from './ServicesMenu';
import { imageUrl } from './imageUrl';

const sora = Sora({
  subsets: ['latin', 'latin-ext'],
  weight: ['200', '400', '600', '700'],
  variable: '--font-sora',
  display: 'swap',
});

export const metadata: Metadata = {
  metadataBase: new URL(SITE.url),
  title: {
    default: `${SITE.name} | Tintorería en Mar del Plata`,
    template: `%s | ${SITE.name}`,
  },
  description: SITE.description,
  applicationName: SITE.name,
  openGraph: {
    type: 'website',
    locale: 'es_AR',
    siteName: SITE.name,
    title: `${SITE.name} | Tintorería en Mar del Plata`,
    description: SITE.description,
    images: [{ url: imageUrl('camisas', 1376), width: 1376, height: 768, alt: 'Camisas limpias y planchadas en percha' }],
  },
  twitter: { card: 'summary_large_image' },
  // Las vistas previas de Vercel no se indexan.
  robots: IS_PRODUCTION ? { index: true, follow: true } : { index: false, follow: false },
  formatDetection: { telephone: false },
};

export const viewport: Viewport = {
  themeColor: '#4e2158',
  width: 'device-width',
  initialScale: 1,
};

const DAY: Record<string, string> = {
  Mo: 'Monday',
  Tu: 'Tuesday',
  We: 'Wednesday',
  Th: 'Thursday',
  Fr: 'Friday',
  Sa: 'Saturday',
  Su: 'Sunday',
};

const jsonLd = {
  '@context': 'https://schema.org',
  '@graph': [
    {
      '@type': 'DryCleaningOrLaundry',
      '@id': absoluteUrl('/#negocio'),
      name: SITE.name,
      description: SITE.description,
      url: SITE.url,
      logo: absoluteUrl('/brand/logo.svg'),
      image: [absoluteUrl(imageUrl('camisas')), absoluteUrl(imageUrl('control-prenda'))],
      telephone: `+${SITE.whatsapp}`,
      ...(SITE.email ? { email: SITE.email } : {}),
      priceRange: SITE.priceRange,
      address: {
        '@type': 'PostalAddress',
        streetAddress: SITE.address.street,
        addressLocality: SITE.city,
        addressRegion: SITE.region,
        postalCode: SITE.address.postalCode,
        addressCountry: SITE.country,
      },
      ...(SITE.geo ? { geo: { '@type': 'GeoCoordinates', latitude: SITE.geo.lat, longitude: SITE.geo.lng } } : {}),
      hasMap: SITE.mapsUrl,
      areaServed: [
        { '@type': 'City', name: 'Mar del Plata' },
        { '@type': 'Place', name: `Barrio ${SITE.address.neighborhood}, Mar del Plata` },
      ],
      openingHoursSpecification: SITE.hours.map((h) => ({
        '@type': 'OpeningHoursSpecification',
        dayOfWeek: h.days.map((d) => `https://schema.org/${DAY[d]}`),
        opens: h.opens,
        closes: h.closes,
      })),
      sameAs: Object.values(SITE.social).filter(Boolean),
      hasOfferCatalog: {
        '@type': 'OfferCatalog',
        name: 'Servicios de tintorería',
        itemListElement: SERVICES.map((s) => ({
          '@type': 'Offer',
          itemOffered: { '@type': 'Service', name: s.name, description: s.short, areaServed: 'Mar del Plata' },
        })),
      },
    },
    {
      '@type': 'WebSite',
      '@id': absoluteUrl('/#web'),
      url: SITE.url,
      name: SITE.name,
      inLanguage: 'es-AR',
      publisher: { '@id': absoluteUrl('/#negocio') },
    },
  ],
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="es-AR" className={sora.variable} suppressHydrationWarning>
      <head>
        <script dangerouslySetInnerHTML={{ __html: "document.documentElement.classList.add('js')" }} />
        <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }} />
        {GA_ID && (
          <>
            <script dangerouslySetInnerHTML={{ __html: consentBootstrap }} />
            <Script src={`https://www.googletagmanager.com/gtag/js?id=${GA_ID}`} strategy="afterInteractive" />
          </>
        )}
      </head>
      <body>
        <a href="#contenido" className="skip">
          Ir al contenido
        </a>
        <Header />
        <main id="contenido">{children}</main>
        <Footer />
        <PageWhatsAppLink placement="flotante" className="wa-float" label="Pedir por WhatsApp">
          <span className="wa-float-text">Pedir por WhatsApp</span>
        </PageWhatsAppLink>
        <CookieConsent />
      </body>
    </html>
  );
}

function Header() {
  return (
    <header className="site-header">
      <div className="wrap header-inner">
        <a href="/" className="header-logo" aria-label={`${SITE.name}, inicio`}>
          <Logo />
        </a>
        <nav className="header-nav" aria-label="Principal">
          <ul>
            {NAV.map((n) => (
              <li key={n.href}>{n.href === '/servicios' ? <ServicesMenu /> : <a href={n.href}>{n.label}</a>}</li>
            ))}
          </ul>
        </nav>
        <PageWhatsAppLink placement="header" className="btn btn-wa header-cta" label="Pedir retiro por WhatsApp">
          <span className="header-cta-long">Pedir retiro</span>
        </PageWhatsAppLink>
        <details className="menu">
          <summary aria-label="Abrir menú">
            <span />
            <span />
          </summary>
          <nav aria-label="Menú móvil">
            <ul>
              {NAV.map((n) => (
                <li key={n.href}>
                  <a href={n.href}>{n.label}</a>
                </li>
              ))}
            </ul>
          </nav>
        </details>
      </div>
    </header>
  );
}

function Footer() {
  const year = new Date().getFullYear();
  return (
    <footer className="site-footer on-dark">
      <Waves id="ft" color="#fff" opacity={0.05} />
      <div className="wrap footer-grid">
        <div className="footer-brand">
          <Logo iso="var(--orange)" word="#fff" />
          <p>{SITE.tagline}</p>
          <PageWhatsAppLink placement="footer" />
        </div>
        <div>
          <h2 className="footer-h">Servicios</h2>
          <ul className="footer-list">
            {SERVICES.map((s) => (
              <li key={s.slug}>
                <a href={`/servicios/${s.slug}`}>{s.name}</a>
              </li>
            ))}
          </ul>
        </div>
        <div>
          <h2 className="footer-h">Visitanos</h2>
          <ul className="footer-list">
            <li>
              <Icon name="pin" />
              <TrackedLink href={SITE.mapsUrl} target="_blank" rel="noopener" event="map_click" params={{ placement: 'footer' }}>
                {SITE.address.street}, {SITE.city}
              </TrackedLink>
            </li>
            {SITE.hours.map((h) => (
              <li key={h.label}>
                <Icon name="clock" />
                <span>
                  {h.label}: {h.opens} a {h.closes}
                </span>
              </li>
            ))}
            <li>
              <Icon name="whatsapp" />
              <span>{SITE.phoneDisplay}</span>
            </li>
          </ul>
        </div>
      </div>
      <div className="wrap footer-bottom">
        <small>
          © {year} {SITE.name} · Mar del Plata
        </small>
        <ul className="footer-legal">
          {LEGAL_PAGES.map((l) => (
            <li key={l.href}>
              <a href={l.href}>{l.label}</a>
            </li>
          ))}
          <li>
            <CookieSettingsButton />
          </li>
        </ul>
      </div>
    </footer>
  );
}
