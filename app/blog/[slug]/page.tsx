import { notFound } from "next/navigation";
import { Metadata } from "next";
import { remark } from "remark";
import html from "remark-html";
import remarkGfm from "remark-gfm";
import { prisma } from "@/lib/prisma";
import { absoluteUrl, buildMetadata } from "@/lib/seo";
import Link from "next/link";
import Image from "next/image";
import { SAMPLE_BLOG_POSTS } from "@/lib/sample-data";

type Props = { params: { slug: string } };

export async function generateStaticParams() {
  return SAMPLE_BLOG_POSTS.map((p) => ({ slug: p.slug }));
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  let post = null;
  try {
    post = await prisma.blogPost.findFirst({ where: { slug: params.slug, published: true } });
  } catch (e) {}
  if (!post) {
    post = SAMPLE_BLOG_POSTS.find((p) => p.slug === params.slug) || null;
  }
  if (!post) return {};
  return buildMetadata({
    title: `${post.title} | BIGThreeAstrology`,
    description: post.metaDescription,
    path: `/blog/${params.slug}`
  });
}

export default async function BlogPostPage({ params }: Props) {
  let post: any = null;
  try {
    post = await prisma.blogPost.findFirst({ where: { slug: params.slug, published: true } });
  } catch (e) {}
  if (!post) {
    post = SAMPLE_BLOG_POSTS.find((p) => p.slug === params.slug) || null;
  }
  if (!post) notFound();

  // Process Markdown with remark-gfm for tables, callouts, and clean HTML
  const processed = await remark().use(remarkGfm).use(html).process(post.content);

  const articleSchema = {
    "@context": "https://schema.org",
    "@type": "Article",
    headline: post.title,
    description: post.metaDescription,
    datePublished: post.createdAt.toISOString(),
    dateModified: post.updatedAt.toISOString(),
    mainEntityOfPage: absoluteUrl(`/blog/${post.slug}`)
  };
  const breadcrumbSchema = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: [
      { "@type": "ListItem", position: 1, name: "Home", item: absoluteUrl("/") },
      { "@type": "ListItem", position: 2, name: "Blog", item: absoluteUrl("/blog") },
      { "@type": "ListItem", position: 3, name: post.title, item: absoluteUrl(`/blog/${post.slug}`) }
    ]
  };

  return (
    <div className="container-main py-8 space-y-8 animate-fade-in">
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(articleSchema) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }} />
      
      {/* Breadcrumb Navigation */}
      <nav className="text-xs sm:text-sm text-amber-200/80 mb-4 flex items-center space-x-2">
        <Link href="/" className="hover:text-white transition-colors">Home</Link>
        <span>&gt;</span>
        <Link href="/blog" className="hover:text-white transition-colors">Blog</Link>
        <span>&gt;</span>
        <span className="text-white font-medium truncate max-w-xs">{post.title}</span>
      </nav>

      {/* Main Blog Post Detail Container */}
      <article className="glass-card max-w-4xl mx-auto p-6 sm:p-10 border border-amber-500/30 bg-black/80">
        <header className="mb-10 border-b border-amber-500/20 pb-8 text-center">
          <div className="inline-block px-3.5 py-1 rounded-full bg-amber-950/80 border border-amber-400/40 text-amber-300 text-xs font-bold uppercase tracking-wider mb-4">
            Astrology &amp; Soul Guidance
          </div>
          <h1 className="text-3xl sm:text-4xl md:text-5xl font-display font-extrabold text-white mb-4 leading-tight">
            {post.title}
          </h1>
          <p className="text-sm sm:text-base text-amber-200/90 max-w-2xl mx-auto mb-6 leading-relaxed">
            {post.metaDescription}
          </p>
          <div className="flex items-center justify-center gap-4 text-xs text-amber-300">
            <time className="bg-amber-950/60 border border-amber-500/30 px-3.5 py-1.5 rounded-full inline-block">
              Published: {new Date(post.createdAt).toLocaleDateString('en-US', {
                year: 'numeric',
                month: 'long',
                day: 'numeric'
              })}
            </time>
            <span className="bg-amber-950/60 border border-amber-500/30 px-3.5 py-1.5 rounded-full">
              📜 Astrological Guide
            </span>
          </div>
        </header>

        {/* Featured Image */}
        {post.image && (
          <div className="relative w-full h-[260px] sm:h-[400px] rounded-2xl overflow-hidden mb-10 border border-amber-500/30 shadow-2xl">
            <Image
              src={post.image}
              alt={post.title}
              fill
              sizes="(max-width: 768px) 100vw, 800px"
              className="object-cover"
              priority
            />
          </div>
        )}

        {/* Rendered Markdown Content with Rich Formatting */}
        <div 
          className="prose max-w-none"
          dangerouslySetInnerHTML={{ __html: processed.toString() }} 
        />
      </article>

      {/* Navigation Footer CTAs */}
      <div className="max-w-4xl mx-auto flex flex-col sm:flex-row items-center justify-between gap-4 mt-8 pt-8 border-t border-amber-500/20">
        <Link href="/blog" className="btn-secondary w-full sm:w-auto text-center px-6 py-3">
          ← Back to All Articles
        </Link>
        <Link href="/tools/big-three" className="btn-glow w-full sm:w-auto text-center px-6 py-3">
          Explore 100 Calculators &amp; Tools →
        </Link>
      </div>
    </div>
  );
}
