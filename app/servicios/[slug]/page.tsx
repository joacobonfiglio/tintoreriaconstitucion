import type { Metadata } from 'next';
import { notFound } from 'next/navigation';
import { ServiceLanding } from '../../ServiceLanding';
import { SERVICE_CONTENT, getServiceContent } from '../content';
import { seoTitle } from '../../site';

export const dynamicParams = false;

export function generateStaticParams() {
  return SERVICE_CONTENT.map((s) => ({ slug: s.slug }));
}

export async function generateMetadata({ params }: { params: Promise<{ slug: string }> }): Promise<Metadata> {
  const c = getServiceContent((await params).slug);
  if (!c) return {};
  const path = `/servicios/${c.slug}`;
  return {
    title: { absolute: seoTitle(c.metaTitle) },
    description: c.metaDescription,
    alternates: { canonical: path },
    openGraph: {
      title: c.metaTitle,
      description: c.metaDescription,
      url: path,
      images: [{ url: `/img/${c.image}-480.webp`, alt: c.imageAlt }],
    },
  };
}

export default async function ServicePage({ params }: { params: Promise<{ slug: string }> }) {
  const c = getServiceContent((await params).slug);
  if (!c) notFound();
  return <ServiceLanding content={c} />;
}
