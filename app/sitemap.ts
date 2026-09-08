import type { MetadataRoute } from 'next';
import { meta } from '@/content/clovis-ca';

export default function sitemap(): MetadataRoute.Sitemap {
  const baseUrl = `https://${meta.domain}`;

  return [
    {
      url: baseUrl,
      lastModified: new Date(),
      changeFrequency: 'weekly',
      priority: 1,
    },
    {
      url: `${baseUrl}/contact`,
      lastModified: new Date(),
      changeFrequency: 'monthly',
      priority: 0.8,
    },
  ];
}