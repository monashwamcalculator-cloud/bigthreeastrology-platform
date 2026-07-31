import { Metadata } from "next";
import Link from "next/link";
import { CosmicToolsSuite } from "@/components/cosmic-tools-suite";
import { AdSlot } from "@/components/ad-slot";
import { buildMetadata, absoluteUrl } from "@/lib/seo";
import { StatsCounter } from "@/components/stats-counter";
import { Testimonials } from "@/components/testimonials";

export const metadata: Metadata = buildMetadata({
  title: "Sun Moon Rising Sign Calculator Free | BIGThreeAstrology",
  description:
    "Use our sun moon rising sign calculator free tool to discover your big three signs with a practical explanation for personality, relationships, and life direction.",
  path: "/"
});

export default function HomePage() {
  const pageDescription =
    "Use our sun moon rising sign calculator free tool to discover your big three signs with practical, beginner-friendly interpretation.";
  const websiteSchema = {
    "@context": "https://schema.org",
    "@type": "WebSite",
    name: "BIGThreeAstrology",
    url: absoluteUrl("/")
  };

  const webPageSchema = {
    "@context": "https://schema.org",
    "@type": "WebPage",
    name: "Sun Moon Rising Sign Calculator Free",
    url: absoluteUrl("/"),
    description: pageDescription
  };

  const appSchema = {
    "@context": "https://schema.org",
    "@type": "WebApplication",
    name: "BIGThreeAstrology Calculator",
    applicationCategory: "LifestyleApplication",
    operatingSystem: "All",
    url: absoluteUrl("/"),
    description: "Calculate your big three astrology signs."
  };

  const faqSchema = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: [
      {
        "@type": "Question",
        name: "How accurate is a sun moon rising calculator?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "Accuracy depends on exact birth date, time, and location. This tool gives a fast estimate and helps you interpret the symbolism in practical terms."
        }
      },
      {
        "@type": "Question",
        name: "What is my moon and rising sign used for?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "Moon sign points to emotional style, and rising sign describes first impressions and outward behavior. Combined with your sun sign, they create your big three profile."
        }
      }
    ]
  };

  return (
    <div className="space-y-16 py-8">
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(websiteSchema) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(webPageSchema) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(appSchema) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }} />
      
      {/* Hero Section */}
      <section className="relative flex flex-col items-center text-center pt-16 pb-20 px-4 min-h-[70vh] justify-center overflow-hidden">
        {/* Glow Orbs */}
        <div className="absolute top-1/4 left-1/4 w-64 h-64 bg-accent-rose/20 rounded-full blur-[100px] pointer-events-none animate-pulse-glow" />
        <div className="absolute top-1/3 right-1/4 w-72 h-72 bg-accent-cyan/20 rounded-full blur-[100px] pointer-events-none animate-pulse-glow animate-delay-300" />
        <div className="absolute bottom-1/4 left-1/2 w-80 h-80 bg-accent-gold/20 rounded-full blur-[120px] pointer-events-none animate-pulse-glow animate-delay-500" />

        <div className="z-10 flex flex-col items-center animate-fade-in">
          <div className="badge badge-emerald mb-6 animate-slide-up">
            🔮 Free Sun Moon Rising Calculator
          </div>
          
          <h1 className="font-display text-5xl sm:text-6xl md:text-7xl font-bold mb-6 tracking-tight animate-slide-up animate-delay-100">
            <span className="text-white drop-shadow-md">Discover Your </span>
            <br className="sm:hidden" />
            <span className="gradient-text">Cosmic Identity</span>
          </h1>
          
          <p className="max-w-2xl text-lg sm:text-xl text-cosmic-200 mb-10 animate-slide-up animate-delay-200">
            Uncover the deep meaning behind your sun, moon, and rising signs. Enter your birth details below for an instant, beginner-friendly interpretation of your unique astrological blueprint.
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4 w-full sm:w-auto animate-slide-up animate-delay-300">
            <Link href="#calculator" className="btn-glow px-8 py-3 text-lg w-full sm:w-auto text-center">
              Calculate Now ✨
            </Link>
            <Link href="/blog" className="btn-secondary px-8 py-3 text-lg w-full sm:w-auto text-center">
              Explore Blog &rarr;
            </Link>
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="w-full">
        <StatsCounter />
      </section>

      {/* Calculator Section */}
      <section id="calculator" className="stars-bg rounded-3xl p-6 sm:p-10 shadow-2xl relative overflow-hidden border border-indigo-500/20 scroll-mt-24">
        <div className="absolute inset-0 bg-gradient-to-b from-transparent to-black/60 pointer-events-none" />
        <div className="relative z-10">
          <div className="text-center mb-8">
            <h2 className="text-3xl font-display font-bold text-white mb-2">Calculate Your Big Three ♈</h2>
            <p className="text-cosmic-300">Enter your birth details for the most accurate results.</p>
          </div>
          <CosmicToolsSuite />
        </div>
      </section>

      {/* SEO Content Section */}
      <section className="glass-card p-8 sm:p-12 prose prose-invert prose-indigo max-w-4xl mx-auto rounded-3xl shadow-xl">
        <h2 className="text-3xl font-display font-bold gradient-text-gold mb-6">Understand Your Sun, Moon, and Rising Sign Clearly</h2>
        <p className="text-lg leading-relaxed text-cosmic-200 mb-6">
          BIGThreeAstrology is built for people who ask, "what is my sun moon and rising sign?" and want a straightforward answer without
          unnecessary complexity. If you are searching for a rising sign calculator, a sun moon rising calculator, or a simple way to compare signs
          with a partner, this page is designed to help you move from curiosity to clarity in a few minutes.
        </p>
        <p className="text-lg leading-relaxed text-cosmic-200 mb-8">
          Your sun sign reflects your core identity and conscious purpose. Your moon sign highlights emotional reactions, comfort patterns, and
          the ways you process stress. Your rising sign, often called the ascendant, represents your social expression and the energy people notice
          first. When these three pieces are read together, you get a complete first layer of your natal chart that is practical for daily decisions.
        </p>
        
        <h3 className="text-2xl font-display font-semibold text-white mt-10 mb-4">Why Big Three Interpretation Matters ♋</h3>
        <p className="text-lg leading-relaxed text-cosmic-200 mb-6">
          People often rely only on sun-sign horoscopes and then wonder why they do not fully relate. The reason is simple: a moon sign can alter
          emotional needs dramatically, and a rising sign can shift communication style and pacing. For example, someone with a bold fire sun might
          still need gentle, predictable routines if their moon is in an earth sign. Likewise, a quiet water sun can appear socially confident when
          paired with an air rising sign.
        </p>
        <p className="text-lg leading-relaxed text-cosmic-200 mb-8">
          This is why "finding rising sun moon signs" is now one of the most searched astrology topics. Users want a complete snapshot rather than
          isolated keywords. Our calculator and educational content are structured around that intent, so each output gives both identity context and
          day-to-day relevance.
        </p>
        
        <h3 className="text-2xl font-display font-semibold text-white mt-10 mb-4">How to Use This Calculator Better ♎</h3>
        <p className="text-lg leading-relaxed text-cosmic-200 mb-6">
          Enter your name, birth date, and birth time if available. Birth time matters most for rising sign precision. If time is unknown, the tool
          still gives a directional result so you can begin learning. After calculating, read each sign as a role: the sun as your anchor, the moon
          as your inner regulator, and the rising as your outward channel.
        </p>
        <p className="text-lg leading-relaxed text-cosmic-200 mb-8">
          For stronger insight, pair your result with the blog guides on this site and review a professional profile in the astrologers directory.
          Many users use this flow: calculate first, read practical examples second, then book a targeted consultation if they want chart-level depth.
          That sequence keeps astrology useful, grounded, and easy to apply in career planning, relationship communication, and personal growth.
        </p>

        <h3 className="text-2xl font-display font-semibold text-white mt-10 mb-4">Frequently Asked Practical Questions ♑</h3>
        <p className="text-lg leading-relaxed text-cosmic-200 mb-6">
          If you are asking, "what is my moon and rising sign?" you are usually trying to understand emotional compatibility, mood cycles, and social
          dynamics. If you are searching for "sun moon rising sign calculator free," your goal is often speed and clarity. If you are looking for
          "what is my sun moon and rising sign," you likely want all three in one result and a beginner-friendly explanation. This page addresses each
          of those intents naturally and keeps language simple enough for first-time learners.
        </p>
        <p className="text-lg leading-relaxed text-cosmic-200 mb-6">
          Astrology is symbolic, not deterministic. Use your big three as a framework for reflection, communication, and better choices. Revisit your
          interpretation over time, especially when life circumstances change. As your self-awareness grows, these same symbols become more useful and
          nuanced, helping you make decisions with greater confidence and less confusion.
        </p>
      </section>

      {/* FAQ Section Visualized */}
      <section className="max-w-4xl mx-auto py-8">
        <h3 className="text-3xl font-display font-bold text-center text-white mb-10">Common Questions ♓</h3>
        <div className="grid gap-6">
          {faqSchema.mainEntity.map((faq, idx) => (
            <div key={idx} className="glass-card-hover p-6 rounded-2xl border border-indigo-500/20">
              <h4 className="text-xl font-semibold text-accent-gold mb-3 flex items-start gap-3">
                <span className="text-2xl">✨</span> {faq.name}
              </h4>
              <p className="text-cosmic-200 pl-9 leading-relaxed">{faq.acceptedAnswer.text}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Testimonials */}
      <section className="py-8">
        <Testimonials />
      </section>

      {/* CTA Banner */}
      <section className="relative overflow-hidden rounded-3xl p-10 sm:p-16 text-center my-12 bg-gradient-to-r from-indigo-900/40 via-purple-900/40 to-indigo-900/40 border border-indigo-400/30">
        <div className="absolute inset-0 stars-bg opacity-50" />
        <div className="relative z-10 flex flex-col items-center">
          <h2 className="text-3xl sm:text-4xl font-display font-bold text-white mb-4">Ready for a Deeper Reading? 🌟</h2>
          <p className="text-lg text-cosmic-200 mb-8 max-w-2xl">
            Connect with experienced astrologers who can guide you through the intricate details of your full natal chart and answer your specific life questions.
          </p>
          <Link href="/astrologers" className="btn-primary px-10 py-4 text-lg">
            Find an Astrologer
          </Link>
        </div>
      </section>

      {/* AdSlot */}
      <div className="max-w-4xl mx-auto w-full pb-8">
        <AdSlot label="Below calculator ad unit (AdSense-ready slot)" />
      </div>
    </div>
  );
}
