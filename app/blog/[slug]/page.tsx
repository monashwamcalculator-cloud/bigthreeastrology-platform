import { notFound } from "next/navigation";
import { Metadata } from "next";
import { remark } from "remark";
import html from "remark-html";
import { prisma } from "@/lib/prisma";
import { absoluteUrl, buildMetadata } from "@/lib/seo";
import Link from "next/link";

import { SAMPLE_BLOG_POSTS } from "@/lib/sample-data";

type Props = { params: { slug: string } };

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
  const processed = await remark().use(html).process(post.content);
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
      
      <nav className="text-sm text-cosmic-200 mb-6 flex items-center space-x-2">
        <Link href="/" className="hover:text-accent-gold transition-colors">Home</Link>
        <span>&gt;</span>
        <Link href="/blog" className="hover:text-accent-gold transition-colors">Blog</Link>
        <span>&gt;</span>
        <span className="text-cosmic-100 truncate">{post.title}</span>
      </nav>

      <article className="glass-card max-w-4xl mx-auto p-6 md:p-10">
        <header className="mb-8 border-b border-white/10 pb-8 text-center">
          <h1 className="text-3xl sm:text-4xl font-display font-bold gradient-text mb-4 leading-tight">
            {post.title}
          </h1>
          <p className="text-lg text-cosmic-200/80 mb-4">{post.metaDescription}</p>
          <time className="text-sm text-cosmic-300 bg-white/5 px-3 py-1.5 rounded-full inline-block">
            {new Date(post.createdAt).toLocaleDateString('en-US', {
              year: 'numeric',
              month: 'long',
              day: 'numeric'
            })}
          </time>
        </header>

        <div 
          className="prose prose-invert prose-headings:font-display prose-headings:gradient-text prose-a:text-accent-cyan hover:prose-a:text-accent-gold prose-a:transition-colors max-w-none prose-p:text-cosmic-100 prose-li:text-cosmic-100"
          dangerouslySetInnerHTML={{ __html: processed.toString() }} 
        />
      </article>

      <div className="max-w-4xl mx-auto flex flex-col sm:flex-row items-center justify-between gap-4 mt-8 pt-8 border-t border-white/10">
        <Link href="/blog" className="btn-secondary w-full sm:w-auto text-center">
          Back to Blog
        </Link>
        <Link href="/" className="btn-primary w-full sm:w-auto text-center">
          Calculate Your Big Three →
        </Link>
      </div>
    </div>
  );
}
