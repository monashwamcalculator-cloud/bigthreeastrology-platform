import Link from "next/link";
import Image from "next/image";
import { Metadata } from "next";
import { prisma } from "@/lib/prisma";
import { AdSlot } from "@/components/ad-slot";
import { absoluteUrl, buildMetadata } from "@/lib/seo";
import { SAMPLE_BLOG_POSTS } from "@/lib/sample-data";

export const metadata: Metadata = buildMetadata({
  title: "Astrology Blog & Cosmic Guides | BIGThreeAstrology",
  description: "In-depth guides on Sun Moon Rising signs, Spouse Prediction, 36 Guna Kundali Milan, Daily Choghadia Muhurat, and Sade Sati.",
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
        <div className="badge badge-emerald mb-2">📚 Educational Astrology & Timing Guides</div>
        <h1 className="text-4xl md:text-5xl font-display font-bold gradient-text animate-fade-in">Astrology & Cosmic Guides</h1>
        <p className="text-emerald-200 text-base sm:text-lg max-w-2xl mx-auto animate-slide-up animate-delay-100">
          In-depth guides to unlock your Big Three signs, predict your future spouse, match Kundalis, and master daily auspicious timing.
        </p>
      </div>

      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
        {posts.map((post, i) => (
          <article 
            key={post.id} 
            className="glass-card-hover p-5 flex flex-col justify-between animate-slide-up group border-emerald-500/20 bg-black/40"
            style={{ animationDelay: `${(i % 5) * 100 + 100}ms` }}
          >
            <div>
              {post.image && (
                <div className="relative w-full h-48 rounded-xl overflow-hidden mb-4 border border-emerald-500/30">
                  <Image
                    src={post.image}
                    alt={post.title}
                    fill
                    className="object-cover group-hover:scale-105 transition-transform duration-300"
                  />
                </div>
              )}

              {post.categories && post.categories.length > 0 && (
                <div className="mb-2">
                  <span className="badge badge-emerald text-[11px]">{post.categories[0]}</span>
                </div>
              )}

              <h2 className="text-lg font-display font-bold text-white mb-2 leading-snug group-hover:text-amber-300 transition-colors">
                <Link href={`/blog/${post.slug}`}>
                  {post.title}
                </Link>
              </h2>
              
              <p className="text-xs text-emerald-200/80 line-clamp-3 mb-4 leading-relaxed">{post.metaDescription}</p>
            </div>

            <Link 
              href={`/blog/${post.slug}`} 
              className="text-emerald-300 hover:text-amber-300 transition-colors inline-flex items-center text-xs font-bold mt-auto pt-2 border-t border-emerald-500/20"
            >
              Read Full 1,500+ Word Manual <span className="ml-1">→</span>
            </Link>
          </article>
        ))}
      </div>

      <AdSlot label="Blog content ad slot" />

      <section className="glass-card p-6 md:p-10 mt-12 prose prose-invert max-w-none bg-black/50 border-emerald-500/30">
        <h2 className="text-2xl sm:text-3xl font-display font-bold gradient-text">Astrology Learning Hub & Practical Guides</h2>
        <p className="text-sm text-emerald-100 leading-relaxed">
          The BIGThreeAstrology blog is built to answer real questions with practical clarity. Our articles map directly to our 20 tools—including our **[Big Three Calculator](/tools/big-three)**, **[Spouse Predictor](/tools/spouse-predictor)**, **[Vedic Kundali Milan](/tools/kundali-milan)**, **[Daily Choghadia Muhurat](/tools/choghadia)**, and **[Sade Sati Phase Checker](/tools/sade-sati)**.
        </p>
      </section>
    </div>
  );
}
