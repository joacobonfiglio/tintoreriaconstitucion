import type { Metadata } from 'next';
import { shareImage } from './imageUrl';
import { IS_PRODUCTION, SITE, seoTitle } from './site';

type PageSeo = {
  /** título sin la marca; se le agrega " | Tintorería Constitución" si entra en ~60 caracteres */
  title: string;
  /** título completo tal cual, sin agregar la marca (para la home) */
  fullTitle?: string;
  description: string;
  path: string;
  image?: string;
  imageAlt?: string;
  noindex?: boolean;
};

/**
 * Metadatos completos de una página: title, description, canonical, Open Graph, Twitter y robots.
 * Next no combina openGraph entre layout y página, por eso cada página arma el bloque entero acá.
 */
export function pageMetadata({ title, fullTitle, description, path, image = 'camisas', imageAlt, noindex = false }: PageSeo): Metadata {
  const t = fullTitle ?? seoTitle(title);
  const og = shareImage(image, imageAlt ?? title);
  return {
    title: { absolute: t },
    description,
    alternates: { canonical: path },
    openGraph: {
      type: 'website',
      locale: 'es_AR',
      siteName: SITE.name,
      url: path,
      title: t,
      description,
      images: [og],
    },
    twitter: { card: 'summary_large_image', title: t, description, images: [og.url] },
    robots: noindex || !IS_PRODUCTION ? { index: false, follow: !noindex || IS_PRODUCTION } : { index: true, follow: true },
  };
}
