import { Metadata } from "next";
import Link from "next/link";
import { CosmicToolsSuite } from "@/components/cosmic-tools-suite";
import { AdSlot } from "@/components/ad-slot";
import { buildMetadata, absoluteUrl } from "@/lib/seo";
import { StatsCounter } from "@/components/stats-counter";
import { Testimonials } from "@/components/testimonials";

export const metadata: Metadata = buildMetadata({
  title: "Free Sun Moon Rising Calculator & Vedic Kundali Milan | BIGThreeAstrology",
  description:
    "Free online astrology & numerology suite. Calculate Sun, Moon, Rising signs, Vedic 36 Guna Kundali Milan, Zodiac Love Match, Numerology, Daily Tarot, and Gemstone remedies.",
  path: "/"
});

export default function HomePage() {
  const pageDescription =
    "Explore 9 free astrology and numerology calculators. Calculate Sun, Moon, Rising signs, Vedic Kundali Milan, Zodiac Love Compatibility, Life Path Numerology, and Daily Tarot.";

  const websiteSchema = {
    "@context": "https://schema.org",
    "@type": "WebSite",
    name: "BIGThreeAstrology",
    url: absoluteUrl("/")
  };

  const webPageSchema = {
    "@context": "https://schema.org",
    "@type": "WebPage",
    name: "Free Sun Moon Rising Calculator & Vedic Kundali Milan",
    url: absoluteUrl("/"),
    description: pageDescription
  };

  const appSchema = {
    "@context": "https://schema.org",
    "@type": "WebApplication",
    name: "BIGThreeAstrology Free Tools Suite",
    applicationCategory: "LifestyleApplication",
    operatingSystem: "All",
    url: absoluteUrl("/"),
    description: "Calculate your big three astrology signs, Kundali Milan, Love Match, and Numerology."
  };

  const faqSchema = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: [
      {
        "@type": "Question",
        name: "How accurate is the Sun Moon Rising calculator?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "Accuracy depends on your exact birth date, birth time, and location. Our tool provides precise Western (Tropical) and Vedic (Sidereal) calculations for deep self-awareness."
        }
      },
      {
        "@type": "Question",
        name: "What is Vedic Kundali Milan (36 Guna System)?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "Kundali Milan evaluates 8 dimensions (Ashta Koota) of matrimonial compatibility between a Groom and Bride out of 36 points, assessing health, love, temperament, and family welfare."
        }
      },
      {
        "@type": "Question",
        name: "Do I need to create an account or sign up to use these tools?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "No! All 9 astrology and numerology tools on BIGThreeAstrology are 100% free, instant, and require zero registration or sign-up."
        }
      }
    ]
  };

  return (
    <div className="space-y-16 py-6 md:py-10">
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(websiteSchema) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(webPageSchema) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(appSchema) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }} />
      
      {/* Hero Section */}
      <section className="relative flex flex-col items-center text-center pt-10 pb-16 px-4 min-h-[65vh] justify-center overflow-hidden">
        {/* Glow Orbs */}
        <div className="absolute top-1/4 left-1/4 w-72 h-72 bg-accent-rose/20 rounded-full blur-[110px] pointer-events-none animate-pulse-glow" />
        <div className="absolute top-1/3 right-1/4 w-80 h-80 bg-accent-cyan/20 rounded-full blur-[110px] pointer-events-none animate-pulse-glow animate-delay-300" />
        <div className="absolute bottom-1/4 left-1/2 w-96 h-96 bg-accent-gold/20 rounded-full blur-[130px] pointer-events-none animate-pulse-glow animate-delay-500" />

        <div className="z-10 flex flex-col items-center animate-fade-in max-w-4xl">
          <div className="badge badge-emerald mb-6 animate-slide-up text-xs sm:text-sm py-1.5 px-4">
            ✨ 9 Free Astrology & Numerology Tools — 100% Instant & No Sign-up
          </div>
          
          <h1 className="font-display text-4xl sm:text-6xl md:text-7xl font-extrabold mb-6 tracking-tight animate-slide-up animate-delay-100 leading-tight">
            <span className="text-white drop-shadow-md">Uncover Your </span>
            <span className="gradient-text-gold">Cosmic Identity</span>
            <br />
            <span className="gradient-text">& Vedic Destiny</span>
          </h1>
          
          <p className="max-w-2xl text-base sm:text-xl text-cosmic-200 mb-8 animate-slide-up animate-delay-200 leading-relaxed">
            Free authentic calculations for Sun/Moon/Rising Signs, 36 Guna Kundali Milan, Zodiac Love Match, Life Path Numerology, Daily Tarot & Gemstones.
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4 w-full sm:w-auto animate-slide-up animate-delay-300">
            <Link href="#tools" className="btn-glow px-8 py-3.5 text-base sm:text-lg font-bold w-full sm:w-auto text-center">
              Explore All 9 Tools ✨
            </Link>
            <Link href="/tools/kundali-milan" className="btn-secondary px-8 py-3.5 text-base sm:text-lg font-bold w-full sm:w-auto text-center border-accent-gold/40 text-accent-gold hover:bg-accent-gold/10">
              Kundali Milan (36 Gunas) 🕉️
            </Link>
          </div>
        </div>
      </section>

      {/* Quick Access Featured Cards */}
      <section className="grid grid-cols-2 sm:grid-cols-4 lg:grid-cols-4 gap-3 sm:gap-4 max-w-6xl mx-auto px-2">
        {[
          { name: "Big Three Calculator", desc: "Sun, Moon & Rising Signs", icon: "🔮", link: "#tools" },
          { name: "Kundali Milan", desc: "36 Ashta Koota Gunas", icon: "🕉️", link: "/tools/kundali-milan" },
          { name: "Love Compatibility", desc: "Zodiac Synastry Chemistry", icon: "💖", link: "/tools/love-compatibility" },
          { name: "Life Path Numerology", desc: "Pythagorean Name & Date", icon: "🔢", link: "/tools/numerology" },
          { name: "Daily Horoscope", desc: "Energy Meter & Vibe", icon: "🌟", link: "#tools" },
          { name: "3-Card Tarot Reader", desc: "Past, Present & Future", icon: "🎴", link: "#tools" },
          { name: "Gemstone & Remedy", desc: "Planetary Ratna & Mantra", icon: "💎", link: "#tools" },
          { name: "Birth Star Nakshatra", desc: "27 Nakshatras & Deity", icon: "⭐", link: "#tools" }
        ].map((tool, idx) => (
          <Link
            key={idx}
            href={tool.link}
            className="glass-card-hover p-4 flex flex-col items-center text-center group border-cosmic-400/20 hover:border-accent-gold/50 bg-black/40"
          >
            <span className="text-3xl mb-2 group-hover:scale-110 transition-transform">{tool.icon}</span>
            <h3 className="text-xs sm:text-sm font-display font-bold text-white group-hover:text-accent-gold transition-colors">
              {tool.name}
            </h3>
            <span className="text-[10px] text-cosmic-300 mt-1 line-clamp-1">{tool.desc}</span>
          </Link>
        ))}
      </section>

      {/* Stats Section */}
      <section className="w-full">
        <StatsCounter />
      </section>

      {/* Main Interactive Tools Suite */}
      <section id="calculator" className="stars-bg rounded-3xl p-4 sm:p-8 md:p-10 shadow-2xl relative overflow-hidden border border-accent-gold/30 scroll-mt-24 bg-black/40">
        <div className="absolute inset-0 bg-gradient-to-b from-transparent via-purple-950/20 to-black/80 pointer-events-none" />
        <div className="relative z-10">
          <div className="text-center mb-8">
            <div className="badge badge-gold mb-2">⚡ 9-in-1 Interactive Suite</div>
            <h2 className="text-3xl md:text-4xl font-display font-bold gradient-text-gold mb-2">Cosmic Tools & Calculators Suite</h2>
            <p className="text-cosmic-300 text-sm max-w-xl mx-auto">
              Select any tool tab below to calculate your astrological snapshot instantly.
            </p>
          </div>

          <CosmicToolsSuite />
        </div>
      </section>

      {/* Value Proposition Grid */}
      <section className="grid sm:grid-cols-2 md:grid-cols-4 gap-6 max-w-6xl mx-auto">
        {[
          { title: "⚡ 100% Free & Frictionless", desc: "Zero registration required. Enter details and receive instant deep calculations.", icon: "🚀" },
          { title: "🕉️ Vedic & Western Harmony", desc: "Supports both Western Tropical and Vedic Sidereal Jyotish calculation systems.", icon: "🌌" },
          { title: "🌍 Global Timezone Precision", desc: "Timezone-immune date parsing supporting cities across India, USA, Europe & Asia.", icon: "📍" },
          { title: "📜 Shareable Match Reports", desc: "1-click export and copy your Kundali match certificate and Big Three snapshots.", icon: "📜" }
        ].map((feature, idx) => (
          <div key={idx} className="glass-card-hover p-6 border-cosmic-500/20 text-center bg-black/40 flex flex-col items-center">
            <span className="text-4xl mb-3">{feature.icon}</span>
            <h3 className="text-base font-display font-bold text-white mb-2">{feature.title}</h3>
            <p className="text-xs text-cosmic-200 leading-relaxed">{feature.desc}</p>
          </div>
        ))}
      </section>

      {/* SEO Educational Content Section */}
      <section className="glass-card p-6 sm:p-10 prose prose-invert prose-indigo max-w-4xl mx-auto rounded-3xl shadow-xl bg-black/40">
        <h2 className="text-2xl sm:text-3xl font-display font-bold gradient-text-gold mb-6">
          Complete Astrology & Numerology Wisdom for Modern Lives
        </h2>
        <p className="text-base leading-relaxed text-cosmic-200 mb-6">
          BIGThreeAstrology delivers authentic, beginner-friendly tools for anyone seeking clarity on self-identity, relationships, career decisions, and personal timing. Whether you are calculating your **Sun, Moon, and Rising signs**, testing **Vedic Kundali Milan (36 Gunas)** for marriage, or discovering your **Life Path Numerology**, our algorithms provide instant clarity.
        </p>

        <h3 className="text-xl font-display font-semibold text-white mt-8 mb-4">What Makes Your Big Three Unique?</h3>
        <p className="text-base leading-relaxed text-cosmic-200 mb-6">
          Your **Sun sign** represents your core purpose and conscious ego. Your **Moon sign** controls emotional processing, instincts, and comfort needs. Your **Rising sign (Ascendant)** dictates your outward persona, first impressions, and life approach. When read together, they create a balanced 3-dimensional snapshot of your natal chart.
        </p>

        <h3 className="text-xl font-display font-semibold text-white mt-8 mb-4">Authentic Vedic 36 Guna Kundali Milan</h3>
        <p className="text-base leading-relaxed text-cosmic-200 mb-6">
          Our Kundali Matching engine calculates the authentic **Ashta Koota** framework (Varna, Vashya, Tara, Yoni, Graha Maitri, Gana, Bhakoot, and Nadi) out of 36 total points. Enter the exact birth date, 12-hour AM/PM time, and birth place of the Bride and Groom for an accurate compatibility score.
        </p>
      </section>

      {/* FAQ Visual Cards */}
      <section className="max-w-4xl mx-auto py-4">
        <h3 className="text-3xl font-display font-bold text-center text-white mb-8">Frequently Asked Questions 🔮</h3>
        <div className="grid gap-4">
          {faqSchema.mainEntity.map((faq, idx) => (
            <div key={idx} className="glass-card-hover p-6 rounded-2xl border border-cosmic-500/20 bg-black/40">
              <h4 className="text-lg font-semibold text-accent-gold mb-2 flex items-start gap-3">
                <span className="text-xl">✨</span> {faq.name}
              </h4>
              <p className="text-cosmic-200 text-sm pl-8 leading-relaxed">{faq.acceptedAnswer.text}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Testimonials */}
      <section className="py-4">
        <Testimonials />
      </section>

      {/* Virality & Social Share CTA Banner */}
      <section className="relative overflow-hidden rounded-3xl p-8 sm:p-14 text-center my-8 bg-gradient-to-r from-purple-950/60 via-cosmic-900/80 to-indigo-950/60 border border-accent-gold/40">
        <div className="absolute inset-0 stars-bg opacity-40" />
        <div className="relative z-10 flex flex-col items-center">
          <span className="text-4xl mb-3">📜✨</span>
          <h2 className="text-2xl sm:text-4xl font-display font-bold text-white mb-3">Share Your Cosmic Blueprint</h2>
          <p className="text-base text-cosmic-200 mb-8 max-w-xl">
            Calculate your Kundali match, Big Three, or Numerology and share the report with your partner, friends, and family!
          </p>
          <Link href="#tools" className="btn-glow px-10 py-3.5 text-lg font-bold">
            Start Free Calculation Now 🔮
          </Link>
        </div>
      </section>

      {/* AdSlot */}
      <div className="max-w-4xl mx-auto w-full pb-6">
        <AdSlot label="Below homepage tools ad unit (AdSense-ready slot)" />
      </div>
    </div>
  );
}
