import { meta } from '@/content/clovis-ca';
import { faqs } from '@/content/clovis-ca';

export function getLocalBusinessSchema() {
  return {
    '@context': 'https://schema.org',
    '@type': 'LocalBusiness',
    '@id': `https://${meta.domain}`,
    name: meta.businessName,
    description: `Water heater repair and replacement services in ${meta.city}, ${meta.state}.`,
    telephone: meta.phone,
    email: meta.email,
    url: `https://${meta.domain}`,
    address: {
      '@type': 'PostalAddress',
      addressLocality: meta.city,
      addressRegion: meta.state,
      addressCountry: 'US',
    },
    areaServed: `${meta.city}, ${meta.state} and surrounding areas`,
    openingHours: 'Mo-Sa 07:00-19:00',
    priceRange: '$$',
  };
}

export function getFAQSchema() {
  return {
    '@context': 'https://schema.org',
    '@type': 'FAQPage',
    mainEntity: faqs.map((faq) => ({
      '@type': 'Question',
      name: faq.question,
      acceptedAnswer: {
        '@type': 'Answer',
        text: faq.answer,
      },
    })),
  };
}

export function getBreadcrumbSchema() {
  return {
    '@context': 'https://schema.org',
    '@type': 'BreadcrumbList',
    itemListElement: [
      {
        '@type': 'ListItem',
        position: 1,
        name: 'Home',
        item: `https://${meta.domain}`,
      },
      {
        '@type': 'ListItem',
        position: 2,
        name: 'Water Heater Repair',
        item: `https://${meta.domain}/#services`,
      },
    ],
  };
}

export function getAllSchemas() {
  return [
    getLocalBusinessSchema(),
    getFAQSchema(),
    getBreadcrumbSchema(),
  ];
}
