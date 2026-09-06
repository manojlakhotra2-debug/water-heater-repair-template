import type { Metadata } from 'next';
import { meta } from '@/content/clovis-ca';

export function generateMetadata(): Metadata {
  const title = `${meta.businessName} | Water Heater Repair & Replacement in ${meta.city}, ${meta.state}`;
  const description = `Same-day water heater repair and replacement in ${meta.city}, ${meta.state}. Emergency service, upfront pricing, all major brands serviced. Call ${meta.phone}.`;

  return {
    metadataBase: new URL(`https://${meta.domain}`),
    title,
    description,
    alternates: {
      canonical: `https://${meta.domain}`,
    },
    openGraph: {
      title,
      description,
      url: `https://${meta.domain}`,
      siteName: meta.businessName,
      locale: 'en_US',
      type: 'website',
      images: [
        {
          url: '/og-image.png',
          width: 1200,
          height: 630,
          alt: `${meta.businessName} — Water Heater Repair & Replacement in ${meta.city}, ${meta.state}`,
        },
      ],
    },
    twitter: {
      card: 'summary_large_image',
      title,
      description,
      images: ['/og-image.png'],
    },
    robots: {
      index: true,
      follow: true,
    },
  };
}
