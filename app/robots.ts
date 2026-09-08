import type { MetadataRoute } from 'next';
import { meta } from '@/content/clovis-ca';

export default function robots(): MetadataRoute.Robots {
  return {
    rules: {
      userAgent: '*',
      allow: '/',
    },
    sitemap: `https://${meta.domain}/sitemap.xml`,
  };
}