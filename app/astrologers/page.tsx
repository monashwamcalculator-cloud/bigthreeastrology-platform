import Link from "next/link";
import { Metadata } from "next";
import { ListingStatus } from "@prisma/client";
import { prisma } from "@/lib/prisma";
import { AdSlot } from "@/components/ad-slot";
import { absoluteUrl, buildMetadata } from "@/lib/seo";
import { supportedCitySlugs, citySlugToName } from "@/lib/cities";

export const metadata: Metadata = buildMetadata({
  title: "Best Astrologers Directory | BIGThreeAstrology",
  description: "Browse approved astrologer profiles by city, specialization, and services, then connect directly for consultations.",
  path: "/astrologers"
});

export default async function AstrologersPage() {
  let listings: any[] = [];
  try {
    listings = await prisma.astrologerProfile.findMany({
      where: { status: ListingStatus.APPROVED, isIndexable: true },
      orderBy: { createdAt: "desc" }
    });
  } catch (e) {
    console.error("Database query failed for astrologer profiles:", e);
  }

  const itemListSchema = {
    "@context": "https://schema.org",
    "@type": "ItemList",
    name: "Astrologers Directory",
    itemListElement: listings.map((listing, index) => ({
      "@type": "ListItem",
      position: index + 1,
      url: absoluteUrl(`/astrologers/${listing.id}`),
      name: listing.name
    }))
  };

  return (
    <div className="container-main space-y-10 pb-16">
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(itemListSchema) }} />
      
      <div className="text-center space-y-4 py-10 animate-fade-in">
        <h1 className="text-4xl md:text-5xl font-display font-bold">
          Find Your Perfect <span className="gradient-text">Astrologer</span>
        </h1>
        <p className="text-cosmic-200 text-lg max-w-2xl mx-auto">
          Browse verified astrologer profiles by city and specialization, and connect directly for a personalized reading.
        </p>
      </div>

      <div className="glass-card p-6 animate-slide-up animate-delay-100">
        <p className="font-semibold text-cosmic-100 mb-4 font-display text-lg">Browse by City</p>
        <div className="flex flex-wrap gap-3">
          {supportedCitySlugs.map((slug) => (
            <Link 
              key={slug} 
              className="px-4 py-2 rounded-full glass-card hover:bg-white/10 hover:border-accent-cyan hover:text-accent-cyan transition-all text-sm text-cosmic-100" 
              href={`/astrologers/city/${slug}`}
            >
              {citySlugToName(slug)}
            </Link>
          ))}
        </div>
      </div>

      {listings.length > 0 ? (
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {listings.map((l, i) => (
            <div 
              key={l.id} 
              className="glass-card-hover p-6 flex flex-col items-center text-center animate-slide-up"
              style={{ animationDelay: `${(i % 5) * 100 + 100}ms` }}
            >
              <div className="w-20 h-20 rounded-full bg-gradient-to-br from-indigo-500 to-purple-600 flex items-center justify-center text-3xl font-display font-bold text-white shadow-lg shadow-purple-900/20 mb-4 border-2 border-white/10">
                {l.name.charAt(0).toUpperCase()}
              </div>
              <h2 className="text-xl font-display font-semibold mb-2 text-cosmic-50">
                {l.name}
              </h2>
              <div className="badge mb-3">{l.specialization}</div>
              <p className="text-cosmic-200/80 mb-6 flex items-center justify-center gap-1 text-sm">
                <span>📍</span> {l.city}, {l.state}
              </p>
              <Link href={`/astrologers/${l.id}`} className="btn-secondary w-full text-sm py-2 mt-auto">
                View Profile →
              </Link>
            </div>
          ))}
        </div>
      ) : (
        /* Genuine empty state callout when no real astrologers registered yet */
        <div className="glass-card p-10 text-center max-w-2xl mx-auto border-accent-gold/40 space-y-6">
          <div className="text-5xl">🔮</div>
          <h3 className="text-2xl font-display font-bold text-white">Are You a Professional Astrologer?</h3>
          <p className="text-cosmic-200 leading-relaxed max-w-lg mx-auto">
            Our directory is growing! Be among the first astrologers to list your services, showcase your expertise, and connect with thousands of users seeking chart readings.
          </p>
          <div className="pt-2">
            <Link href="/signup" className="btn-primary px-8 py-3 text-lg inline-flex items-center gap-2">
              <span>✨</span> Register Your Profile
            </Link>
          </div>
        </div>
      )}

      <AdSlot label="Astrologer listing ad slot" />

      <section className="glass-card p-6 md:p-8 prose prose-invert max-w-none prose-headings:font-display prose-headings:gradient-text prose-p:text-cosmic-200 mt-12">
        <h2>How to Choose the Right Astrologer for Your Goal</h2>
        <p>
          This directory helps users move from broad search intent to a practical consultation decision. People who arrive here often begin with
          educational queries like what is my moon and rising sign or sun moon rising calculator, then realize they want personalized interpretation.
          A listing page should make that transition easy: clear profile details, transparent specialization, location context, and direct contact
          options. Our goal is to keep that flow simple for both seekers and astrologers.
        </p>
        <p>
          Every profile in this index is tied to an account so the owner can keep information current. We prioritize readability and trust signals over
          noisy design. Users can compare cities, service focus, and communication channels quickly, then open a detailed profile for deeper context.
          If a listing goes stale and is not updated for a prolonged period, it is removed from indexable views until refreshed.
        </p>
        <h3>What to Review Before Contacting an Astrologer</h3>
        <p>
          Start with specialization. Some astrologers focus on relationship synastry, while others support career transitions, timing strategies, or
          life-pattern analysis. Then check experience years and service formatting. A strong listing should clearly state session style, what clients
          should prepare, and realistic outcomes from a consultation. Pricing transparency also helps users qualify quickly and reduce friction.
        </p>
      </section>
    </div>
  );
}
