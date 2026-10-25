import type { MetadataRoute } from 'next';
import { IS_PRODUCTION, absoluteUrl } from './site';

export default function robots(): MetadataRoute.Robots {
  return {
    rules: IS_PRODUCTION ? [{ userAgent: '*', allow: '/' }] : [{ userAgent: '*', disallow: '/' }],
    sitemap: absoluteUrl('/sitemap.xml'),
  };
}
