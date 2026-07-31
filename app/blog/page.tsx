import Link from "next/link";
import { Metadata } from "next";
import { prisma } from "@/lib/prisma";
import { AdSlot } from "@/components/ad-slot";
import { absoluteUrl, buildMetadata } from "@/lib/seo";

import { SAMPLE_BLOG_POSTS } from "@/lib/sample-data";

export const metadata: Metadata = buildMetadata({
  title: "Astrology Blog | BIGThreeAstrology",
  description: "Practical guides for sun moon rising calculator users, compatibility questions, and easy astrology learning.",
  path: "/blog"
});

export default async function BlogPage() {
  let posts: any[] = [];
  try {
    posts = await prisma.blogPost.findMany({ where: { published: true }, orderBy: { createdAt: "desc" } });
  } catch (e) {
    console.error("Database query failed for blog posts:", e);
  }
  if (!posts || posts.length === 0) {
    posts = SAMPLE_BLOG_POSTS;
  }
  const blogSchema = {
    "@context": "https://schema.org",
    "@type": "Blog",
    name: "BIGThreeAstrology Blog",
    url: absoluteUrl("/blog")
  };
  const breadcrumbSchema = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: [
      { "@type": "ListItem", position: 1, name: "Home", item: absoluteUrl("/") },
      { "@type": "ListItem", position: 2, name: "Blog", item: absoluteUrl("/blog") }
    ]
  };

  return (
    <div className="container-main space-y-8 pb-16">
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(blogSchema) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }} />
      
      <div className="text-center space-y-4 py-8">
        <h1 className="text-4xl md:text-5xl font-display font-bold gradient-text animate-fade-in">Astrology Blog</h1>
        <p className="text-cosmic-200 text-lg max-w-2xl mx-auto animate-slide-up animate-delay-100">
          Explore celestial wisdom, cosmic guides, and practical insights for your astrological journey.
        </p>
      </div>

      <div className="grid md:grid-cols-2 gap-6">
        {posts.map((post, i) => (
          <article 
            key={post.id} 
            className={`glass-card-hover p-6 flex flex-col justify-between animate-slide-up`}
            style={{ animationDelay: `${(i % 5) * 100 + 100}ms` }}
          >
            <div>
              {post.categories && post.categories.length > 0 && (
                <div className="mb-3">
                  <span className="badge">{post.categories[0]}</span>
                </div>
              )}
              <h2 className="text-xl font-display font-semibold mb-2">
                <Link href={`/blog/${post.slug}`} className="hover:text-accent-gold transition-colors">
                  {post.title}
                </Link>
              </h2>
              <p className="text-cosmic-200/70 line-clamp-3 mb-4">{post.metaDescription}</p>
            </div>
            <Link 
              href={`/blog/${post.slug}`} 
              className="text-accent-cyan hover:text-accent-gold transition-colors inline-flex items-center text-sm font-medium mt-auto"
            >
              Read More <span className="ml-1">→</span>
            </Link>
          </article>
        ))}
      </div>

      <AdSlot label="Blog content ad slot" />

      <section className="glass-card p-6 md:p-8 mt-12 prose prose-invert max-w-none prose-headings:font-display prose-headings:gradient-text prose-p:text-cosmic-200">
        <h2>Astrology Learning Hub for Real Questions</h2>
        <p>
          The BIGThreeAstrology blog is designed for readers who want practical answers, not abstract language. Most visitors arrive after searching
          for terms like rising sign calculator, sun moon rising calculator, or what is my moon and rising sign. Instead of repeating definitions,
          our editorial approach maps each article to a real decision: understanding relationship patterns, improving communication, selecting better
          consultation questions, or learning how to interpret chart combinations in daily life.
        </p>
        <p>
          If you already used the calculator, this section gives context so your result becomes actionable. You can learn why two people with the same
          sun sign may feel emotionally opposite, how rising signs influence first impressions at work, and how moon placement can explain recurring
          triggers. These explanations are written for beginners first, then layered with enough depth for returning readers.
        </p>
        <h3>How We Structure Every Article</h3>
        <p>
          Each post follows a consistent publishing format so readers can scan quickly: plain-language definition, practical examples, common mistakes,
          and a short action checklist. We avoid jargon unless it adds value. This style supports users who search with clear intent and want a direct
          answer before exploring deeper chart topics. It also helps creators publish useful content consistently through our streamlined blog CMS.
        </p>
        <p>
          We cluster topics semantically rather than stuffing keywords. For example, an article may naturally include phrases such as what is my sun
          moon and rising sign, finding rising sun moon signs, and how to compare signs in relationships. The purpose is relevance and readability,
          not density. Search visibility improves most when content mirrors genuine user intent and keeps the reading experience clean.
        </p>
        <h3>What You Can Expect From This Blog</h3>
        <p>
          You will find explainers on the big three foundation, sign combinations, compatibility basics, communication styles, and beginner chart
          interpretation. We also publish local discovery content connected to astrologer listings, helping readers move from learning to booking.
          When appropriate, posts link to profile pages so users can connect with astrologers aligned to their question and city.
        </p>
        <p>
          If you publish through this platform as an editor, focus on clarity over complexity. Use short paragraphs, meaningful headings, and concrete
          examples. The most useful astrology writing is transparent about what it can and cannot do. That approach builds trust, improves engagement,
          and supports long-term organic growth for both articles and service pages.
        </p>
        <p>
          We also encourage topic depth through connected clusters. A foundational guide can lead into compatibility, timing, and communication
          subtopics so readers continue learning without confusion. This structure helps users who search repeatedly for variants such as what is my sun
          moon and rising sign, sun and moon personality balance, or rising sign behavior patterns. When content is organized in meaningful sequence,
          users stay longer, understand more, and return with stronger trust.
        </p>
        <p>
          Editorially, consistency matters as much as creativity. Use strong intros, semantic headings, and concise conclusions. Keep examples practical
          and avoid overpromising outcomes. When a topic calls for professional interpretation, guide readers toward directory profiles that match the
          specific intent. This content-to-service bridge is central to BIGThreeAstrology and allows the blog to support both education and conversion.
        </p>
      </section>
    </div>
  );
}
