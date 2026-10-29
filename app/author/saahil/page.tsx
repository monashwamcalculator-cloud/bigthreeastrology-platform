import { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { absoluteUrl, buildMetadata } from "@/lib/seo";
import { AUTHOR } from "@/lib/author";
import { SAMPLE_BLOG_POSTS } from "@/lib/sample-data";

export const metadata: Metadata = buildMetadata({
  title: `About ${AUTHOR.name} — Founder & Author | BIGThreeAstrology`,
  description: `Meet ${AUTHOR.name}, founder of BIGThreeAstrology and author of its astrology guides. Digital marketing professional researching Vedic and Western astrology, builder of 100 free calculators.`,
  path: AUTHOR.pageUrl,
});

export default function AuthorPage() {
  const personSchema = {
    "@context": "https://schema.org",
    "@type": "Person",
    name: AUTHOR.name,
    jobTitle: "Founder & Editor",
    description: AUTHOR.shortBio,
    image: absoluteUrl(AUTHOR.image),
    url: absoluteUrl(AUTHOR.pageUrl),
    sameAs: [AUTHOR.linkedin],
    worksFor: {
      "@type": "Organization",
      name: "BIGThreeAstrology",
      url: absoluteUrl("/"),
    },
  };

  const articles = [...SAMPLE_BLOG_POSTS].reverse();

  return (
    <div className="container-main py-10 space-y-10 animate-fade-in">
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(personSchema) }} />

      {/* Author hero */}
      <section className="glass-card max-w-4xl mx-auto p-8 sm:p-12 border border-amber-500/30 bg-black/80 text-center">
        <Image
          src={AUTHOR.image}
          alt={`${AUTHOR.name}, ${AUTHOR.role}`}
          width={200}
          height={200}
          priority
          className="rounded-full object-cover border-4 border-amber-400/60 shadow-2xl w-[200px] h-[200px] mx-auto mb-6"
        />
        <p className="text-[11px] font-bold uppercase tracking-widest text-amber-400 mb-2">Author &amp; Founder</p>
        <h1 className="text-4xl sm:text-5xl font-display font-extrabold text-white mb-3">{AUTHOR.name}</h1>
        <p className="text-sm text-amber-300 font-medium mb-6">{AUTHOR.role}</p>
        <p className="text-base text-amber-100/90 leading-relaxed max-w-2xl mx-auto mb-8">{AUTHOR.shortBio}</p>
        <a
          href={AUTHOR.linkedin}
          target="_blank"
          rel="noopener noreferrer"
          className="btn-glow px-6 py-3 text-sm font-bold inline-block"
        >
          Connect on LinkedIn
        </a>
      </section>

      {/* Full bio */}
      <section className="glass-card max-w-4xl mx-auto p-8 sm:p-10 border border-amber-500/30 bg-black/80">
        <h2 className="text-2xl font-display font-bold text-white mb-5">About {AUTHOR.name}</h2>
        <div className="space-y-4">
          {AUTHOR.longBio.map((para, i) => (
            <p key={i} className="text-sm sm:text-base text-amber-100/85 leading-relaxed">{para}</p>
          ))}
        </div>

        <h3 className="text-xl font-display font-bold text-white mt-10 mb-4">Areas of focus</h3>
        <ul className="grid sm:grid-cols-2 gap-3">
          {AUTHOR.expertise.map((item) => (
            <li key={item} className="flex items-start gap-2.5 text-sm text-amber-100/85">
              <span className="mt-1.5 w-2 h-2 rounded-full bg-amber-400 shrink-0" />
              {item}
            </li>
          ))}
        </ul>

        <h3 className="text-xl font-display font-bold text-white mt-10 mb-4">Editorial approach</h3>
        <p className="text-sm sm:text-base text-amber-100/85 leading-relaxed">
          Every guide published on BIGThreeAstrology is written or reviewed by {AUTHOR.name}, checked against classical
          Vedic and Western astrology sources, and built around a free working calculator so readers can verify each
          idea against their own chart. Content is updated when calculations, methods or reader feedback show it can
          be made more accurate or more useful.
        </p>
      </section>

      {/* Articles by the author */}
      <section className="max-w-4xl mx-auto">
        <h2 className="text-2xl font-display font-bold text-white text-center mb-6">Latest guides by {AUTHOR.name}</h2>
        <div className="grid sm:grid-cols-2 gap-4">
          {articles.map((post) => (
            <Link
              key={post.slug}
              href={`/blog/${post.slug}`}
              className="glass-card-hover p-5 border border-amber-500/20 bg-black/40 group"
            >
              <span className="text-[11px] text-amber-400 font-semibold">
                {new Date(post.createdAt).toLocaleDateString("en-US", { year: "numeric", month: "long", day: "numeric" })}
              </span>
              <h3 className="text-base font-display font-bold text-white group-hover:text-amber-300 transition-colors mt-1.5 leading-snug">
                {post.title}
              </h3>
              <p className="text-xs text-amber-200/80 mt-2 line-clamp-2">{post.metaDescription}</p>
            </Link>
          ))}
        </div>
        <div className="text-center mt-8">
          <Link href="/tools" className="btn-glow px-8 py-3 text-sm font-bold inline-block">
            Explore 100 Free Calculators
          </Link>
        </div>
      </section>
    </div>
  );
}
