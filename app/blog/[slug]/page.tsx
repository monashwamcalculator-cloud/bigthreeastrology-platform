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
import { BlogCard, toBlogCardPost } from "@/components/blog-card";
import { AuthorBio } from "@/components/author-bio";
import { AUTHOR } from "@/lib/author";
import { extractFaqs } from "@/lib/faq-extract";

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
    path: `/blog/${params.slug}`,
    // Prisma BlogPost has no image column; sample posts do — read it loosely.
    image: (post as { image?: string }).image || undefined
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
    ...(post.image ? { image: [absoluteUrl(post.image)] } : {}),
    datePublished: post.createdAt.toISOString(),
    dateModified: post.updatedAt.toISOString(),
    author: {
      "@type": "Person",
      name: AUTHOR.name,
      url: absoluteUrl(AUTHOR.pageUrl),
      sameAs: [AUTHOR.linkedin]
    },
    mainEntityOfPage: absoluteUrl(`/blog/${post.slug}`)
  };
  const postFaqs = extractFaqs(post.content ?? "");
  const faqSchema = postFaqs.length >= 2 ? {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: postFaqs.map((faq) => ({
      "@type": "Question",
      name: faq.question,
      acceptedAnswer: {
        "@type": "Answer",
        text: faq.answer
      }
    }))
  } : null;
  const showUpdated =
    new Date(post.updatedAt).getTime() > new Date(post.createdAt).getTime() + 86400000;
  const breadcrumbSchema = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: [
      { "@type": "ListItem", position: 1, name: "Home", item: absoluteUrl("/") },
      { "@type": "ListItem", position: 2, name: "Blog", item: absoluteUrl("/blog") },
      { "@type": "ListItem", position: 3, name: post.title, item: absoluteUrl(`/blog/${post.slug}`) }
    ]
  };

  // Related posts: same featured tool first, then same category, then latest —
  // always drawn from the sample catalogue and never including the current post.
  const currentSamplePost = SAMPLE_BLOG_POSTS.find((p) => p.slug === params.slug);
  const relatedPool = SAMPLE_BLOG_POSTS.filter((p) => p.slug !== params.slug);
  const byNewest = (a: (typeof SAMPLE_BLOG_POSTS)[number], b: (typeof SAMPLE_BLOG_POSTS)[number]) =>
    new Date(b.createdAt).getTime() - new Date(a.createdAt).getTime();
  const relatedPosts = currentSamplePost
    ? [
        ...relatedPool.filter((p) => p.toolSlug === currentSamplePost.toolSlug).sort(byNewest),
        ...relatedPool
          .filter((p) => p.toolSlug !== currentSamplePost.toolSlug && p.category === currentSamplePost.category)
          .sort(byNewest),
        ...relatedPool.filter((p) => p.category !== currentSamplePost.category).sort(byNewest),
      ].slice(0, 3)
    : [...relatedPool].sort(byNewest).slice(0, 3);

  return (
    <div className="py-8 space-y-8 animate-fade-in">
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(articleSchema) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }} />
      {faqSchema && (
        <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }} />
      )}
      
      {/* Breadcrumb Navigation — visible trail matching the BreadcrumbList
          schema above, styled on the P1 tool-header pattern */}
      <nav
        aria-label="Breadcrumb"
        className="flex flex-wrap items-center gap-x-2 gap-y-1 text-xs sm:text-sm text-[#2C473F]/60 mb-4"
      >
        <Link href="/" className="text-[#08745A] transition-colors hover:text-[#075433]">
          Home
        </Link>
        <span aria-hidden="true">&gt;</span>
        <Link href="/blog" className="text-[#08745A] transition-colors hover:text-[#075433]">
          Blog
        </Link>
        <span aria-hidden="true">&gt;</span>
        <span aria-current="page" className="font-medium text-[#042F2A] truncate max-w-xs sm:max-w-md">
          {post.title}
        </span>
      </nav>

      {/* Main Blog Post Detail Container */}
      <article className="glass-card max-w-[720px] mx-auto p-6 sm:p-10 border border-[rgba(8,116,90,0.35)] bg-white">
        <header className="mb-10 border-b border-[rgba(8,116,90,0.22)] pb-8 text-center">
          <div className="inline-block px-3.5 py-1 rounded-full bg-[#DFF5EC] border border-[rgba(8,116,90,0.4)] text-[#075433] text-xs font-bold uppercase tracking-wider mb-4">
            {post.category ?? "Astrological Guide"}
          </div>
          <h1 className="text-3xl sm:text-4xl md:text-5xl font-display font-extrabold text-[#042F2A] mb-4 leading-tight">
            {post.title}
          </h1>
          <p className="text-sm sm:text-base text-[rgba(61,82,69,0.92)] max-w-2xl mx-auto mb-6 leading-relaxed">
            {post.metaDescription}
          </p>
          <div className="flex flex-wrap items-center justify-center gap-4 text-xs text-[#075433]">
            <Link href={AUTHOR.pageUrl} className="bg-[#DFF5EC] border border-[rgba(8,116,90,0.35)] px-3.5 py-1.5 rounded-full inline-flex items-center gap-2 hover:border-[rgba(8,116,90,0.7)] transition-colors">
              <Image src={AUTHOR.image} alt={AUTHOR.name} width={32} height={32} className="rounded-full object-cover w-8 h-8" />
              <span>By <span className="text-[#042F2A] font-semibold">{AUTHOR.name}</span></span>
            </Link>
            <time className="bg-[#DFF5EC] border border-[rgba(8,116,90,0.35)] px-3.5 py-1.5 rounded-full inline-block">
              Published: {new Date(post.createdAt).toLocaleDateString('en-US', {
                year: 'numeric',
                month: 'long',
                day: 'numeric'
              })}
            </time>
            {showUpdated && (
              <time className="bg-[#DFF5EC] border border-[rgba(8,116,90,0.35)] px-3.5 py-1.5 rounded-full inline-block">
                Updated: {new Date(post.updatedAt).toLocaleDateString('en-US', {
                  year: 'numeric',
                  month: 'long',
                  day: 'numeric'
                })}
              </time>
            )}
          </div>
        </header>

        {/* Featured Image */}
        {post.image && (
          <div className="relative w-full aspect-[16/9] rounded-2xl overflow-hidden mb-10 border border-[rgba(8,116,90,0.35)] shadow-2xl">
            <Image
              src={post.image}
              alt={post.title}
              fill
              sizes="(max-width: 768px) 100vw, 720px"
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

      <AuthorBio />

      {/* Related Posts */}
      {relatedPosts.length > 0 && (
        <section className="max-w-4xl mx-auto">
          <h2 className="text-2xl sm:text-3xl font-display font-bold text-[#042F2A] mb-6">Related Guides</h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {relatedPosts.map((related) => (
              <BlogCard key={related.slug} post={toBlogCardPost(related)} headingLevel={3} />
            ))}
          </div>
        </section>
      )}

      {/* Navigation Footer CTAs */}
      <div className="max-w-4xl mx-auto flex flex-col sm:flex-row items-center justify-between gap-4 mt-8 pt-8 border-t border-[rgba(8,116,90,0.22)]">
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
