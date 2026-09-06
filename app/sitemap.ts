import type { MetadataRoute } from 'next';
import { meta } from '@/content/clovis-ca';

export default function sitemap(): MetadataRoute.Sitemap {
  return [
    {
      url: `https://${meta.domain}`,
      lastModified: new Date(),
      changeFrequency: 'monthly',
      priority: 1,
    },
  ];
}
