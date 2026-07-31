import { MetadataRoute } from 'next';
import { getSiteUrl } from '@/lib/seo';

export default function robots(): MetadataRoute.Robots {
  const siteUrl = getSiteUrl();

  return {
    rules: {
      userAgent: '*',
      allow: ['/', '/api/auth/'],
      disallow: ['/dashboard/', '/admin/', '/api/'],
    },
    sitemap: `${siteUrl}/sitemap.xml`,
  };
}
