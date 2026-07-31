import { MetadataRoute } from 'next';
import { prisma } from '@/lib/prisma';
import { getSiteUrl } from '@/lib/seo';
import { supportedCitySlugs } from '@/lib/cities';
import { ListingStatus } from '@prisma/client';

export default async function sitemap(): Promise<MetadataRoute.Sitemap> {
  const siteUrl = getSiteUrl();

  // Static routes
  const staticRoutes = [
    '',
    '/about',
    '/contact',
    '/blog',
    '/astrologers',
    '/privacy-policy',
    '/terms-and-conditions',
    '/disclaimer',
  ].map((route) => ({
    url: `${siteUrl}${route}`,
    lastModified: new Date(),
    changeFrequency: 'weekly' as const,
    priority: route === '' ? 1 : 0.8,
  }));

  // City pages
  const cityRoutes = supportedCitySlugs.map((slug) => ({
    url: `${siteUrl}/astrologers-in-${slug}`,
    lastModified: new Date(),
    changeFrequency: 'weekly' as const,
    priority: 0.8,
  }));

  // Dynamic blog posts & astrologer profiles
  let blogRoutes: MetadataRoute.Sitemap = [];
  let astrologerRoutes: MetadataRoute.Sitemap = [];

  try {
    const blogPosts = await prisma.blogPost.findMany({
      where: { published: true },
      select: { slug: true, updatedAt: true },
    });

    blogRoutes = blogPosts.map((post) => ({
      url: `${siteUrl}/blog/${post.slug}`,
      lastModified: post.updatedAt,
      changeFrequency: 'weekly' as const,
      priority: 0.7,
    }));

    const astrologers = await prisma.astrologerProfile.findMany({
      where: { status: ListingStatus.APPROVED },
      select: { id: true, updatedAt: true },
    });

    astrologerRoutes = astrologers.map((profile) => ({
      url: `${siteUrl}/astrologers/${profile.id}`,
      lastModified: profile.updatedAt,
      changeFrequency: 'weekly' as const,
      priority: 0.7,
    }));
  } catch (e) {
    console.error("Sitemap DB fetch warning:", e);
  }

  return [...staticRoutes, ...cityRoutes, ...blogRoutes, ...astrologerRoutes];
}
