import type { Metadata } from 'next';
import { notFound } from 'next/navigation';
import { ServiceLanding } from '../../ServiceLanding';
import { SERVICE_CONTENT, getServiceContent } from '../content';
import { pageMetadata } from '../../seo';

export const dynamicParams = false;

export function generateStaticParams() {
  return SERVICE_CONTENT.map((s) => ({ slug: s.slug }));
}

export async function generateMetadata({ params }: { params: Promise<{ slug: string }> }): Promise<Metadata> {
  const c = getServiceContent((await params).slug);
  if (!c) return {};
  return pageMetadata({
    title: c.metaTitle,
    description: c.metaDescription,
    path: `/servicios/${c.slug}`,
    image: c.image,
    imageAlt: c.imageAlt,
  });
}

export default async function ServicePage({ params }: { params: Promise<{ slug: string }> }) {
  const c = getServiceContent((await params).slug);
  if (!c) notFound();
  return <ServiceLanding content={c} />;
}
