import { Metadata } from "next";
import Link from "next/link";
import { CosmicToolsSuite } from "@/components/cosmic-tools-suite";
import { AdSlot } from "@/components/ad-slot";
import { buildMetadata, absoluteUrl } from "@/lib/seo";
import { StatsCounter } from "@/components/stats-counter";
import { Testimonials } from "@/components/testimonials";

export const metadata: Metadata = buildMetadata({
  title: "BIGThreeAstrology | 16 Free Astrology & Numerology Calculators",
  description:
    "Free online astrology & numerology suite. Calculate Sun, Moon, Rising signs, Vedic 36 Guna Kundali Milan, Choghadia Muhurat, Sade Sati, Love Match, Numerology, Daily Tarot, and Gemstones.",
  path: "/"
});

export default function HomePage() {
  const pageDescription =
    "Explore 16 free astrology and numerology calculators. Calculate Sun, Moon, Rising signs, Vedic Kundali Milan, Choghadia Muhurat, Sade Sati transits, Life Path Numerology, Chaldean Brand Math, and Daily Tarot.";

  const websiteSchema = {
    "@context": "https://schema.org",
    "@type": "WebSite",
    name: "BIGThreeAstrology",
    url: absoluteUrl("/"),
    description: pageDescription,
    publisher: {
      "@type": "Organization",
      name: "BIGThreeAstrology",
      email: "asbusiness276@gmail.com",
      url: absoluteUrl("/")
    }
  };

  const webPageSchema = {
    "@context": "https://schema.org",
    "@type": "WebPage",
    name: "Free Sun Moon Rising Calculator, Kundali Milan & 16 Cosmic Tools",
    url: absoluteUrl("/"),
    description: pageDescription
  };

  const appSchema = {
    "@context": "https://schema.org",
    "@type": "WebApplication",
    name: "BIGThreeAstrology 16 Free Tools Suite",
    applicationCategory: "LifestyleApplication",
    operatingSystem: "All",
    url: absoluteUrl("/"),
    description: "Calculate your big three astrology signs, Kundali Milan, Choghadia Muhurat, Sade Sati, Love Match, and Numerology."
  };

  const faqSchema = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: [
      {
        "@type": "Question",
        name: "How accurate is the Sun Moon Rising calculator on BIGThreeAstrology?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "Accuracy depends on your exact birth date, birth time, and birth location. Our algorithms cross-reference astronomical ephemeris positioning to deliver high-precision Western Tropical and Vedic Sidereal sign placements."
        }
      },
      {
        "@type": "Question",
        name: "What is Vedic Kundali Milan (Ashta Koota 36 Gunas System)?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "Kundali Milan evaluates 8 dimensions (Ashta Koota) of matrimonial compatibility between a Groom and Bride out of 36 points: Varna (1), Vashya (2), Tara (3), Yoni (4), Graha Maitri (5), Gana (6), Bhakoot (7), and Nadi (8). Scores above 18 Gunas indicate a favorable match."
        }
      },
      {
        "@type": "Question",
        name: "What is Daily Choghadia Muhurat and how is it used?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "Choghadia is an ancient Vedic timing framework dividing day and night into 8 time windows each. Auspicious slots like Amrit (Nectar), Shubh (Good), and Labh (Gain) are ideal for purchasing assets, starting a business, traveling, or conducting auspicious ceremonies."
        }
      },
      {
        "@type": "Question",
        name: "How do I calculate my Sade Sati phase and what are the remedies?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "Saturn's 7.5-year transit across the sign preceding, containing, and following your natal Moon sign creates Sade Sati. Our Sade Sati tool identifies your active phase (First, Second, or Third Dhaiya) and provides Vedic remedies such as Hanuman Chalisa recitation and Shani Daan."
        }
      },
      {
        "@type": "Question",
        name: "What is the difference between Pythagorean and Chaldean Numerology?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "Pythagorean numerology assigns numbers 1 through 9 sequentially to the alphabet (A=1, B=2, C=3...). Chaldean numerology assigns numbers 1 through 8 based on sound vibrations and letter frequencies, omitting 9 as a sacred number."
        }
      },
      {
        "@type": "Question",
        name: "Do I need to register or pay to access these 16 calculators?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "No! All 16 calculators on BIGThreeAstrology are 100% free, instant, and accessible without mandatory account registration or paywalls."
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
        <div className="absolute top-1/4 left-1/4 w-72 h-72 bg-emerald-500/20 rounded-full blur-[110px] pointer-events-none animate-pulse-glow" />
        <div className="absolute top-1/3 right-1/4 w-80 h-80 bg-teal-400/20 rounded-full blur-[110px] pointer-events-none animate-pulse-glow animate-delay-300" />
        <div className="absolute bottom-1/4 left-1/2 w-96 h-96 bg-amber-400/20 rounded-full blur-[130px] pointer-events-none animate-pulse-glow animate-delay-500" />

        <div className="z-10 flex flex-col items-center animate-fade-in max-w-4xl">
          <div className="badge badge-emerald mb-6 animate-slide-up text-xs sm:text-sm py-1.5 px-4">
            ✨ 16 Free Astrology & Numerology Tools — 100% Instant & No Sign-up
          </div>
          
          <h1 className="font-display text-4xl sm:text-6xl md:text-7xl font-extrabold mb-6 tracking-tight animate-slide-up animate-delay-100 leading-tight">
            <span className="text-white drop-shadow-md">Uncover Your </span>
            <span className="gradient-text">Cosmic Identity</span>
            <br />
            <span className="gradient-text-gold">& Vedic Destiny</span>
          </h1>
          
          <p className="max-w-2xl text-base sm:text-xl text-emerald-100/90 mb-8 animate-slide-up animate-delay-200 leading-relaxed">
            Free authentic calculations for Sun/Moon/Rising Signs, 36 Guna Kundali Milan, Choghadia Muhurat, Sade Sati, Love Match, Numerology, Daily Tarot & Gemstones.
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4 w-full sm:w-auto animate-slide-up animate-delay-300">
            <Link href="/tools/big-three" className="btn-glow px-8 py-3.5 text-base sm:text-lg font-bold w-full sm:w-auto text-center">
              Explore 16 Free Tools ✨
            </Link>
            <Link href="/tools/kundali-milan" className="btn-secondary px-8 py-3.5 text-base sm:text-lg font-bold w-full sm:w-auto text-center border-amber-400/40 text-amber-300 hover:bg-amber-400/10">
              Kundali Milan (36 Gunas) 🕉️
            </Link>
          </div>
        </div>
      </section>

      {/* Quick Access Featured Cards Grid (16 Clean SEO URLs) */}
      <section className="grid grid-cols-2 sm:grid-cols-4 lg:grid-cols-4 gap-3 sm:gap-4 max-w-6xl mx-auto px-2">
        {[
          { name: "Big Three Calculator", desc: "Sun, Moon & Rising Signs", icon: "🔮", link: "/tools/big-three" },
          { name: "Kundali Milan", desc: "36 Ashta Koota Gunas", icon: "🕉️", link: "/tools/kundali-milan" },
          { name: "Love Compatibility", desc: "Zodiac Synastry Chemistry", icon: "💖", link: "/tools/love-compatibility" },
          { name: "Life Path Numerology", desc: "Pythagorean Name & Date", icon: "🔢", link: "/tools/numerology" },
          { name: "Choghadia Muhurat", desc: "Auspicious Timing Windows", icon: "🔮", link: "/tools/choghadia" },
          { name: "Sade Sati Phase", desc: "Saturn Transit & Remedies", icon: "🪐", link: "/tools/sade-sati" },
          { name: "Brand Numerology", desc: "Chaldean Business Math", icon: "📜", link: "/tools/brand-numerology" },
          { name: "12 Kundali Houses", desc: "Bhavas & Lagna Snapshot", icon: "🏛️", link: "/tools/kundali-houses" },
          { name: "Venus Sign", desc: "Love & Attraction Style", icon: "♀️", link: "/tools/venus-sign" },
          { name: "Mercury Sign", desc: "Mind & Communication", icon: "☿️", link: "/tools/mercury-sign" },
          { name: "Chiron Healing", desc: "Soul Wounded Healer", icon: "⚕️", link: "/tools/chiron" },
          { name: "Birth Star Nakshatra", desc: "27 Vedic Stars & Deity", icon: "⭐", link: "/tools/nakshatra" }
        ].map((tool, idx) => (
          <Link
            key={idx}
            href={tool.link}
            className="glass-card-hover p-4 flex flex-col items-center text-center group border-emerald-500/20 hover:border-emerald-400/60 bg-black/40"
          >
            <span className="text-3xl mb-2 group-hover:scale-110 transition-transform">{tool.icon}</span>
            <h3 className="text-xs sm:text-sm font-display font-bold text-white group-hover:text-amber-300 transition-colors">
              {tool.name}
            </h3>
            <span className="text-[10px] text-emerald-200/80 mt-1 line-clamp-1">{tool.desc}</span>
          </Link>
        ))}
      </section>

      {/* Stats Section */}
      <section className="w-full">
        <StatsCounter />
      </section>

      {/* Main Interactive Tools Suite */}
      <section className="stars-bg rounded-3xl p-4 sm:p-8 md:p-10 shadow-2xl relative overflow-hidden border border-emerald-500/40 bg-black/50">
        <div className="relative z-10">
          <div className="text-center mb-8">
            <div className="badge badge-emerald mb-2">⚡ 16-in-1 Interactive Suite</div>
            <h2 className="text-3xl md:text-4xl font-display font-bold gradient-text mb-2">Cosmic Tools & Calculators Suite</h2>
            <p className="text-emerald-200 text-sm max-w-xl mx-auto">
              Select any tool category below to calculate your astrological snapshot instantly.
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
          <div key={idx} className="glass-card-hover p-6 border-emerald-500/20 text-center bg-black/40 flex flex-col items-center">
            <span className="text-4xl mb-3">{feature.icon}</span>
            <h3 className="text-base font-display font-bold text-white mb-2">{feature.title}</h3>
            <p className="text-xs text-emerald-200/90 leading-relaxed">{feature.desc}</p>
          </div>
        ))}
      </section>

      {/* Expanded Educational & Guide Section */}
      <section className="glass-card p-6 sm:p-12 prose prose-invert max-w-4xl mx-auto rounded-3xl shadow-xl bg-black/50 border-emerald-500/30 space-y-8">
        <div>
          <h2 className="text-2xl sm:text-4xl font-display font-bold gradient-text mb-4">
            Mastering Your Astrological & Numerological Blueprint
          </h2>
          <p className="text-base leading-relaxed text-emerald-100/90">
            Astrology and numerology are ancient symbolic frameworks designed to foster profound self-awareness, psychological clarity, and timing mastery. At BIGThreeAstrology, we combine classic Western Tropical astrology with authentic Vedic Sidereal Jyotish and Pythagorean/Chaldean numerology systems.
          </p>
        </div>

        <div className="space-y-4 border-t border-emerald-500/30 pt-6">
          <h3 className="text-xl sm:text-2xl font-display font-bold text-amber-300">
            1. The Big Three: Sun, Moon, and Rising Signs Explained
          </h3>
          <p className="text-sm leading-relaxed text-emerald-100/90">
            In modern astrology, your natal chart is anchored by your <strong>Big Three</strong>:
          </p>
          <ul className="list-disc pl-6 space-y-2 text-sm text-emerald-200/90">
            <li><strong>Sun Sign:</strong> Dictates your core conscious identity, vitality, ego, and primary life purpose.</li>
            <li><strong>Moon Sign:</strong> Governs your subconscious mind, emotional instincts, reactions, and inner comfort needs.</li>
            <li><strong>Rising Sign (Ascendant):</strong> Represents your physical appearance, outward persona, and the lens through which you experience the external world.</li>
          </ul>
        </div>

        <div className="space-y-4 border-t border-emerald-500/30 pt-6">
          <h3 className="text-xl sm:text-2xl font-display font-bold text-emerald-300">
            2. Vedic Kundali Matching (Ashta Koota 36 Gunas)
          </h3>
          <p className="text-sm leading-relaxed text-emerald-100/90">
            Vedic Horoscope Matching (Kundali Milan) has been practiced for over 3,000 years to determine marital harmony. The Ashta Koota system measures 8 vital dimensions:
          </p>
          <div className="grid sm:grid-cols-2 gap-3 text-xs text-emerald-200/90 pt-2">
            <div className="p-3 rounded-xl bg-black/40 border border-emerald-500/20"><strong>1. Varna (1 Point):</strong> Spiritual and ego compatibility.</div>
            <div className="p-3 rounded-xl bg-black/40 border border-emerald-500/20"><strong>2. Vashya (2 Points):</strong> Mutual attraction and dominance balance.</div>
            <div className="p-3 rounded-xl bg-black/40 border border-emerald-500/20"><strong>3. Tara (3 Points):</strong> Destiny, longevity, and mutual health.</div>
            <div className="p-3 rounded-xl bg-black/40 border border-emerald-500/20"><strong>4. Yoni (4 Points):</strong> Intimate chemistry and physical harmony.</div>
            <div className="p-3 rounded-xl bg-black/40 border border-emerald-500/20"><strong>5. Graha Maitri (5 Points):</strong> Intellectual friendship and mental affinity.</div>
            <div className="p-3 rounded-xl bg-black/40 border border-emerald-500/20"><strong>6. Gana (6 Points):</strong> Temperament and behavioral nature.</div>
            <div className="p-3 rounded-xl bg-black/40 border border-emerald-500/20"><strong>7. Bhakoot (7 Points):</strong> Emotional bonding and family prosperity.</div>
            <div className="p-3 rounded-xl bg-black/40 border border-emerald-500/20"><strong>8. Nadi (8 Points):</strong> Genetic, physiological, and health harmony.</div>
          </div>
        </div>

        <div className="space-y-4 border-t border-emerald-500/30 pt-6">
          <h3 className="text-xl sm:text-2xl font-display font-bold text-amber-300">
            3. Choghadia & Sade Sati Vedic Timing Mastery
          </h3>
          <p className="text-sm leading-relaxed text-emerald-100/90">
            Timing is everything in astrology. Our <strong>Daily Choghadia Muhurat</strong> calculator identifies auspicious hours for gold purchases, contract signing, and travel. Meanwhile, our <strong>Sade Sati Phase Checker</strong> helps you understand Saturn's 7.5-year cycle over your natal Moon, offering practical remedies such as Hanuman Chalisa recitation and Shani Daan.
          </p>
        </div>
      </section>

      {/* FAQ Visual Cards */}
      <section className="max-w-4xl mx-auto py-4">
        <h3 className="text-3xl font-display font-bold text-center text-white mb-8">Frequently Asked Questions 🔮</h3>
        <div className="grid gap-4">
          {faqSchema.mainEntity.map((faq, idx) => (
            <div key={idx} className="glass-card-hover p-6 rounded-2xl border border-emerald-500/20 bg-black/40">
              <h4 className="text-lg font-semibold text-amber-300 mb-2 flex items-start gap-3">
                <span className="text-xl">✨</span> {faq.name}
              </h4>
              <p className="text-emerald-100 text-sm pl-8 leading-relaxed">{faq.acceptedAnswer.text}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Testimonials */}
      <section className="py-4">
        <Testimonials />
      </section>

      {/* Virality & Social Share CTA Banner */}
      <section className="relative overflow-hidden rounded-3xl p-8 sm:p-14 text-center my-8 bg-gradient-to-r from-emerald-950/80 via-teal-950/90 to-emerald-900/80 border border-emerald-500/40">
        <div className="absolute inset-0 stars-bg opacity-40" />
        <div className="relative z-10 flex flex-col items-center">
          <span className="text-4xl mb-3">📜✨</span>
          <h2 className="text-2xl sm:text-4xl font-display font-bold text-white mb-3">Share Your Cosmic Blueprint</h2>
          <p className="text-base text-emerald-200 mb-8 max-w-xl">
            Calculate your Kundali match, Big Three, or Numerology and share the report with your partner, friends, and family!
          </p>
          <Link href="/tools/big-three" className="btn-glow px-10 py-3.5 text-lg font-bold">
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
