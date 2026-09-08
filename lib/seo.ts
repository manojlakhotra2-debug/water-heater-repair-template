import type { Metadata } from 'next';
import { meta } from '@/content/clovis-ca';

export function generateMetadata(): Metadata {
  const title = 'Water Heater Repair Clovis, CA';
  const description = `Water Heater Repair Clovis. Expert water heater repair in Clovis, CA for tank, tankless, gas and electric systems. Emergency water heater repair available 24/7. Upfront repair pricing. Serving Clovis and the greater Central Valley. Call now.`;

  return {
    metadataBase: new URL(`https://${meta.domain}`),
    title,
    description,

    keywords:
  'Water Heater Repair Clovis, Water Heater Repair Clovis CA, Water Heater Replacement Clovis, Emergency Water Heater Repair Clovis, Tank Water Heater Repair Clovis, Tankless Water Heater Repair Clovis, Gas Water Heater Repair Clovis, Electric Water Heater Repair Clovis, Commercial Water Heater Repair Clovis, Water Heater Installation Clovis, Hot Water Heater Repair Clovis, Clovis Water Heater Pros',

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