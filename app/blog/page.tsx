import Link from "next/link";
import { Metadata } from "next";
import { prisma } from "@/lib/prisma";
import { AdSlot } from "@/components/ad-slot";
import { absoluteUrl, buildMetadata } from "@/lib/seo";
import { SAMPLE_BLOG_POSTS } from "@/lib/sample-data";
import { BlogList } from "@/components/blog-list";
import { toBlogCardPost } from "@/components/blog-card";

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
    posts = [...SAMPLE_BLOG_POSTS].sort((a, b) => new Date(b.createdAt).getTime() - new Date(a.createdAt).getTime());
  }
  const postCards = posts.map((post: any) => toBlogCardPost(post));
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
    <div className="space-y-8 pb-16">
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(blogSchema) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }} />
      
      <div className="text-center space-y-4 py-8">
        <div className="badge badge-gold mb-2"> Educational Astrology &amp; Timing Guides</div>
        <h1 className="text-4xl md:text-5xl font-display font-bold gradient-text-gold animate-fade-in">Astrology &amp; Cosmic Guides</h1>
        <p className="text-[#43584A] text-base sm:text-lg max-w-2xl mx-auto animate-slide-up">
          In-depth guides to your Big Three signs, your future spouse, Kundli matching, and daily auspicious timing — explained step by step.
        </p>
      </div>

      <BlogList posts={postCards} />

      <AdSlot label="Blog content ad slot" />

      <section className="glass-card p-6 md:p-10 mt-12 prose max-w-none bg-white border-[rgba(8,116,90,0.35)]">
        <h2 className="text-2xl sm:text-3xl font-display font-bold gradient-text-gold">Astrology Learning Hub &amp; Practical Guides</h2>
        <p className="text-sm text-[rgba(46,61,51,0.92)] leading-relaxed">
          The BIGThreeAstrology blog is built to answer real questions with practical clarity. Our articles map directly to our 100+ tools—including our{" "}
          <Link href="/tools/big-three" className="font-bold text-[#075433] underline underline-offset-2 hover:text-[#08745A]">Big Three Calculator</Link>,{" "}
          <Link href="/tools/spouse-predictor" className="font-bold text-[#075433] underline underline-offset-2 hover:text-[#08745A]">Spouse Predictor</Link>,{" "}
          <Link href="/tools/kundali-milan" className="font-bold text-[#075433] underline underline-offset-2 hover:text-[#08745A]">Vedic Kundali Milan</Link>,{" "}
          <Link href="/tools/choghadia" className="font-bold text-[#075433] underline underline-offset-2 hover:text-[#08745A]">Daily Choghadia Muhurat</Link>, and{" "}
          <Link href="/tools/sade-sati" className="font-bold text-[#075433] underline underline-offset-2 hover:text-[#08745A]">Sade Sati Phase Checker</Link>.
        </p>
      </section>
    </div>
  );
}
