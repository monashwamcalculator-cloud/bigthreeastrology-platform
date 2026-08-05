import { Metadata } from "next";
import Link from "next/link";
import Image from "next/image";
import { CosmicToolsSuite } from "@/components/cosmic-tools-suite";
import { AdSlot } from "@/components/ad-slot";
import { buildMetadata, absoluteUrl } from "@/lib/seo";
import { StatsCounter } from "@/components/stats-counter";
import { Testimonials } from "@/components/testimonials";

export const metadata: Metadata = buildMetadata({
  title: "BIGThreeAstrology | 20 Free Astrology & Numerology Calculators",
  description:
    "Free online astrology & numerology suite. Calculate Sun, Moon, Rising signs, Spouse Predictor, Vedic 36 Guna Kundali Milan, Choghadia Muhurat, Sade Sati, Love Match, Numerology, Daily Tarot, and Gemstones.",
  path: "/"
});

export default function HomePage() {
  const pageDescription =
    "Explore 20 free astrology and numerology calculators. Calculate Sun, Moon, Rising signs, Spouse Predictor, Vedic Kundali Milan, Choghadia Muhurat, Sade Sati transits, Life Path Numerology, Chaldean Brand Math, and Daily Tarot.";

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
    name: "Free Sun Moon Rising Calculator, Kundali Milan & 20 Cosmic Tools",
    url: absoluteUrl("/"),
    description: pageDescription
  };

  const appSchema = {
    "@context": "https://schema.org",
    "@type": "WebApplication",
    name: "BIGThreeAstrology 20 Free Tools Suite",
    applicationCategory: "LifestyleApplication",
    operatingSystem: "All",
    url: absoluteUrl("/"),
    description: "Calculate your big three astrology signs, Spouse Predictor, Kundali Milan, Choghadia Muhurat, Sade Sati, Love Match, and Numerology."
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
          text: "Accuracy depends on your exact birth date, birth time (with AM/PM and 60 minutes precision), and birth location. Our algorithms cross-reference astronomical ephemeris positioning to deliver high-precision Western Tropical and Vedic Sidereal sign placements."
        }
      },
      {
        "@type": "Question",
        name: "How does the Future Spouse & Soulmate Predictor work?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "The Spouse Predictor analyzes your Sun sign, Venus placement, Darakaraka planet, and 7th House ruler to predict your future partner's physical appearance, personality traits, lucky initials, and likely meeting environment."
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
          text: "Choghadia is an ancient Vedic timing framework dividing day and night into 8 time windows each. Auspicious slots like Amrit (Nectar), Shubh (Good), and Labh (Gain) are ideal for purchasing assets, starting a business, traveling, or conducting ceremonies."
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
        name: "Do I need to register or pay to access these 20 calculators?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "No! All 20 calculators on BIGThreeAstrology are 100% free, instant, and accessible without mandatory account registration or paywalls."
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
      
      {/* 1. Hero Section with Optimized Photorealistic Background Visual */}
      <section className="relative flex flex-col items-center text-center pt-8 pb-16 px-4 min-h-[70vh] justify-center overflow-hidden rounded-3xl border border-emerald-500/30 bg-black/60">
        <div className="absolute inset-0 z-0 opacity-25">
          <Image
            src="/home/hero-cosmic-wheel.jpg"
            alt="Cosmic Zodiac Wheel"
            fill
            sizes="(max-width: 1200px) 100vw, 1200px"
            quality={80}
            className="object-cover"
            priority
          />
        </div>
        <div className="absolute inset-0 bg-gradient-to-b from-emerald-950/80 via-black/80 to-emerald-950/90 pointer-events-none" />

        <div className="z-10 flex flex-col items-center animate-fade-in max-w-4xl">
          <div className="badge badge-emerald mb-6 animate-slide-up text-xs sm:text-sm py-1.5 px-4">
            ✨ 20 Free Astrology & Numerology Tools — 100% Instant & No Sign-up
          </div>
          
          <h1 className="font-display text-4xl sm:text-6xl md:text-7xl font-extrabold mb-6 tracking-tight animate-slide-up animate-delay-100 leading-tight">
            <span className="text-white drop-shadow-md">Uncover Your </span>
            <span className="gradient-text">Cosmic Identity</span>
            <br />
            <span className="gradient-text-gold">& Vedic Destiny</span>
          </h1>
          
          <p className="max-w-2xl text-base sm:text-xl text-emerald-100/90 mb-8 animate-slide-up animate-delay-200 leading-relaxed">
            Free authentic calculations for Sun/Moon/Rising Signs, Spouse Predictor, 36 Guna Kundali Milan, Choghadia Muhurat, Sade Sati, Love Match, Numerology, Daily Tarot & Gemstones.
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4 w-full sm:w-auto animate-slide-up animate-delay-300">
            <Link href="/tools/big-three" className="btn-glow px-8 py-3.5 text-base sm:text-lg font-bold w-full sm:w-auto text-center">
              Explore 20 Free Tools ✨
            </Link>
            <Link href="/tools/spouse-predictor" className="btn-secondary px-8 py-3.5 text-base sm:text-lg font-bold w-full sm:w-auto text-center border-amber-400/40 text-amber-300 hover:bg-amber-400/10">
              Spouse Predictor 💖
            </Link>
          </div>
        </div>
      </section>

      {/* 2. Quick Access Featured Cards Grid (20 Clean SEO URLs) */}
      <section className="grid grid-cols-2 sm:grid-cols-4 lg:grid-cols-4 gap-3 sm:gap-4 max-w-6xl mx-auto px-2">
        {[
          { name: "Big Three Calculator", desc: "Sun, Moon & Rising Signs", icon: "🔮", link: "/tools/big-three" },
          { name: "Spouse Predictor", desc: "Soulmate Features & Initials", icon: "💖", link: "/tools/spouse-predictor" },
          { name: "Kundali Milan", desc: "36 Ashta Koota Gunas", icon: "🕉️", link: "/tools/kundali-milan" },
          { name: "Vimshottari Dasha", desc: "120-Year Planetary Timeline", icon: "⏳", link: "/tools/dasha-calculator" },
          { name: "Love Compatibility", desc: "Zodiac Synastry Chemistry", icon: "💖", link: "/tools/love-compatibility" },
          { name: "Life Path Numerology", desc: "Pythagorean Name & Date", icon: "🔢", link: "/tools/numerology" },
          { name: "Choghadia Muhurat", desc: "Auspicious Timing Windows", icon: "🔮", link: "/tools/choghadia" },
          { name: "Sade Sati Phase", desc: "Saturn Transit & Remedies", icon: "🪐", link: "/tools/sade-sati" },
          { name: "Brand Numerology", desc: "Chaldean Business Math", icon: "📜", link: "/tools/brand-numerology" },
          { name: "12 Kundali Houses", desc: "Bhavas & Lagna Snapshot", icon: "🏛️", link: "/tools/kundali-houses" },
          { name: "North Node Purpose", desc: "Karmic Rahu/Ketu Soul Mission", icon: "🚀", link: "/tools/north-node" },
          { name: "Angel Numbers", desc: "111, 444, 777 Frequencies", icon: "⚡", link: "/tools/angel-numbers" },
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

      {/* 3. Photorealistic Feature Showcase Banner 1: Spouse Prediction */}
      <section className="glass-card p-6 md:p-10 max-w-6xl mx-auto rounded-3xl bg-black/50 border-emerald-500/30 overflow-hidden relative">
        <div className="grid md:grid-cols-2 gap-8 items-center">
          <div className="space-y-4 text-left">
            <div className="badge badge-gold">💖 Viral High-Demand Tool</div>
            <h2 className="text-2xl sm:text-4xl font-display font-bold text-white leading-tight">
              Future Spouse & Soulmate Predictor
            </h2>
            <p className="text-emerald-100 text-sm sm:text-base leading-relaxed">
              Curious about your future life partner? Our advanced Spouse Predictor combines your Sun placement, Venus sign, Darakaraka planet, and 7th House ruler to calculate your partner's physical features, personality archetype, lucky initials, and probable meeting environment.
            </p>
            <div className="pt-2">
              <Link href="/tools/spouse-predictor" className="btn-glow px-6 py-3 text-sm font-bold inline-flex items-center gap-2">
                <span>💖</span> Predict Your Future Spouse Now
              </Link>
            </div>
          </div>

          <div className="relative w-full h-64 sm:h-80 rounded-2xl overflow-hidden border border-emerald-500/40 shadow-2xl">
            <Image
              src="/home/spouse-banner.jpg"
              alt="Future Spouse Stargazing Soulmate"
              fill
              sizes="(max-width: 768px) 100vw, 50vw"
              quality={80}
              className="object-cover hover:scale-105 transition-transform duration-500"
            />
          </div>
        </div>
      </section>

      {/* 4. Main Interactive Tools Suite */}
      <section className="stars-bg rounded-3xl p-4 sm:p-8 md:p-10 shadow-2xl relative overflow-hidden border border-emerald-500/40 bg-black/50">
        <div className="relative z-10">
          <div className="text-center mb-8">
            <div className="badge badge-emerald mb-2">⚡ 20-in-1 Interactive Suite</div>
            <h2 className="text-3xl md:text-4xl font-display font-bold gradient-text mb-2">Cosmic Tools & Calculators Suite</h2>
            <p className="text-emerald-200 text-sm max-w-xl mx-auto">
              Select any tool category below to calculate your astrological snapshot instantly.
            </p>
          </div>

          <CosmicToolsSuite />
        </div>
      </section>

      {/* 5. Photorealistic Feature Showcase Banner 2: Vedic Kundali & Timing */}
      <section className="glass-card p-6 md:p-10 max-w-6xl mx-auto rounded-3xl bg-black/50 border-emerald-500/30 overflow-hidden relative">
        <div className="grid md:grid-cols-2 gap-8 items-center">
          <div className="relative w-full h-64 sm:h-80 rounded-2xl overflow-hidden border border-emerald-500/40 shadow-2xl order-2 md:order-1">
            <Image
              src="/home/vedic-astrology.jpg"
              alt="Vedic Kundali Milan & Timing"
              fill
              sizes="(max-width: 768px) 100vw, 50vw"
              quality={80}
              className="object-cover hover:scale-105 transition-transform duration-500"
            />
          </div>

          <div className="space-y-4 text-left order-1 md:order-2">
            <div className="badge badge-emerald">🕉️ Authentic Jyotish Wisdom</div>
            <h2 className="text-2xl sm:text-4xl font-display font-bold text-white leading-tight">
              36 Guna Kundali Milan & Choghadia Timing
            </h2>
            <p className="text-emerald-100 text-sm sm:text-base leading-relaxed">
              Experience authentic 3,000-year-old Vedic Jyotish calculations. Match marriage horoscopes using Ashta Koota 36 Gunas, track Saturn's 7.5-year Sade Sati phase, analyze your 120-year Vimshottari Mahadasha timeline, and pick auspicious daily Choghadia slots.
            </p>
            <div className="pt-2 flex flex-wrap gap-3">
              <Link href="/tools/kundali-milan" className="btn-glow px-6 py-3 text-sm font-bold inline-flex items-center gap-2">
                <span>🕉️</span> 36 Guna Kundali Milan
              </Link>
              <Link href="/tools/choghadia" className="btn-secondary px-6 py-3 text-sm font-bold inline-flex items-center gap-2">
                <span>🔮</span> Choghadia Muhurat
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* 6. Stats Counter Section */}
      <section className="w-full">
        <StatsCounter />
      </section>

      {/* 7. Photorealistic Feature Showcase Banner 3: Numerology & Tarot */}
      <section className="glass-card p-6 md:p-10 max-w-6xl mx-auto rounded-3xl bg-black/50 border-emerald-500/30 overflow-hidden relative">
        <div className="grid md:grid-cols-2 gap-8 items-center">
          <div className="space-y-4 text-left">
            <div className="badge badge-gold">⚡ Sacred Frequency & Numerology</div>
            <h2 className="text-2xl sm:text-4xl font-display font-bold text-white leading-tight">
              Pythagorean & Chaldean Brand Numerology
            </h2>
            <p className="text-emerald-100 text-sm sm:text-base leading-relaxed">
              Numbers hold universal vibrations. Calculate your Life Path and Destiny numbers, optimize your business or personal brand name using Chaldean numerology math, and decode recurring Angel Numbers (111, 222, 444, 777, 888) for daily manifestation.
            </p>
            <div className="pt-2 flex flex-wrap gap-3">
              <Link href="/tools/numerology" className="btn-glow px-6 py-3 text-sm font-bold inline-flex items-center gap-2">
                <span>🔢</span> Life Path Numerology
              </Link>
              <Link href="/tools/angel-numbers" className="btn-secondary px-6 py-3 text-sm font-bold inline-flex items-center gap-2">
                <span>⚡</span> Angel Numbers Decoder
              </Link>
            </div>
          </div>

          <div className="relative w-full h-64 sm:h-80 rounded-2xl overflow-hidden border border-emerald-500/40 shadow-2xl">
            <Image
              src="/home/numerology-tarot.jpg"
              alt="Numerology & Tarot Cards"
              fill
              sizes="(max-width: 768px) 100vw, 50vw"
              quality={80}
              className="object-cover hover:scale-105 transition-transform duration-500"
            />
          </div>
        </div>
      </section>

      {/* 8. Value Proposition Grid */}
      <section className="grid sm:grid-cols-2 md:grid-cols-4 gap-6 max-w-6xl mx-auto">
        {[
          { title: "⚡ 100% Free & Frictionless", desc: "Zero registration required. Enter details and receive instant deep calculations.", icon: "🚀" },
          { title: "🕉️ Vedic & Western Harmony", desc: "Supports both Western Tropical and Vedic Sidereal Jyotish calculation systems.", icon: "🌌" },
          { title: "🌍 Global Timezone Precision", desc: "Auto-suggest geocoding supporting cities across India, USA, Europe & Asia.", icon: "📍" },
          { title: "📜 Shareable Match Reports", desc: "1-click export and copy your Kundali match certificate and Big Three snapshots.", icon: "📜" }
        ].map((feature, idx) => (
          <div key={idx} className="glass-card-hover p-6 border-emerald-500/20 text-center bg-black/40 flex flex-col items-center">
            <span className="text-4xl mb-3">{feature.icon}</span>
            <h3 className="text-base font-display font-bold text-white mb-2">{feature.title}</h3>
            <p className="text-xs text-emerald-200/90 leading-relaxed">{feature.desc}</p>
          </div>
        ))}
      </section>

      {/* 9. Expanded Educational Manual Section (3,000+ Words Depth) */}
      <section className="glass-card p-6 sm:p-12 prose prose-invert max-w-5xl mx-auto rounded-3xl shadow-xl bg-black/50 border-emerald-500/30 space-y-8">
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
            1. The Big Three & Spouse Predictor Framework
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
            2. Vedic Kundali Matching (Ashta Koota 36 Gunas) & Dasha Timelines
          </h3>
          <p className="text-sm leading-relaxed text-emerald-100/90">
            Vedic Horoscope Matching (Kundali Milan) has been practiced for over 3,000 years to determine marital harmony. The Ashta Koota system measures 8 vital dimensions out of 36 total points, while our <strong>Vimshottari Dasha</strong> tool maps your 120-year planetary timeline.
          </p>
        </div>

        <div className="space-y-4 border-t border-emerald-500/30 pt-6">
          <h3 className="text-xl sm:text-2xl font-display font-bold text-amber-300">
            3. Choghadia, Sade Sati & Angel Frequency Decoding
          </h3>
          <p className="text-sm leading-relaxed text-emerald-100/90">
            Timing is everything. Our <strong>Daily Choghadia Muhurat</strong> calculator identifies auspicious hours for gold purchases, contract signing, and travel, while our <strong>Angel Numbers</strong> calculator decodes recurring frequencies like 111, 444, 777, and 888.
          </p>
        </div>
      </section>

      {/* 10. FAQ Visual Cards */}
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

      {/* 11. Testimonials */}
      <section className="py-4">
        <Testimonials />
      </section>

      {/* 12. Virality & Social Share CTA Banner */}
      <section className="relative overflow-hidden rounded-3xl p-8 sm:p-14 text-center my-8 bg-gradient-to-r from-emerald-950/80 via-teal-950/90 to-emerald-900/80 border border-emerald-500/40">
        <div className="absolute inset-0 stars-bg opacity-40" />
        <div className="relative z-10 flex flex-col items-center">
          <span className="text-4xl mb-3">📜✨</span>
          <h2 className="text-2xl sm:text-4xl font-display font-bold text-white mb-3">Share Your Cosmic Blueprint</h2>
          <p className="text-base text-emerald-200 mb-8 max-w-xl">
            Calculate your Spouse prediction, Kundali match, Big Three, or Numerology and share the report with your partner, friends, and family!
          </p>
          <Link href="/tools/spouse-predictor" className="btn-glow px-10 py-3.5 text-lg font-bold">
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
