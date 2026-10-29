import { Metadata } from "next";
import Link from "next/link";
import Image from "next/image";
import { CosmicToolsSuite } from "@/components/cosmic-tools-suite";
import { buildMetadata, absoluteUrl } from "@/lib/seo";
import { StatsCounter } from "@/components/stats-counter";
import { CosmicIcon } from "@/components/cosmic-icons";
import { SAMPLE_BLOG_POSTS } from "@/lib/sample-data";

export const metadata: Metadata = buildMetadata({
  title: "BIGThreeAstrology | 100 Free Astrology & Numerology Calculators",
  description:
    "Free online suite of 100 astrology, Vedic Jyotish, numerology, synastry & tarot calculators. Sun Moon Rising signs, Spouse Predictor, 36 Guna Kundali Milan, Choghadia, Sade Sati & Daily Horoscope.",
  path: "/"
});

export default function HomePage() {
  const pageDescription =
    "Explore 100 free astrology and numerology calculators. Calculate Sun, Moon, Rising signs, Spouse Predictor, Vedic Kundali Milan, Choghadia Muhurat, Sade Sati transits, Life Path Numerology, Chaldean Brand Math, and Daily Tarot.";

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
    name: "Free Sun Moon Rising Calculator, Kundali Milan & 100 Cosmic Tools",
    url: absoluteUrl("/"),
    description: pageDescription
  };

  const appSchema = {
    "@context": "https://schema.org",
    "@type": "WebApplication",
    name: "BIGThreeAstrology 100 Free Tools Suite",
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
        name: "Do I need to register or pay to access these 100 calculators?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "No! All 100 calculators on BIGThreeAstrology are 100% free, instant, and accessible without mandatory account registration or paywalls."
        }
      }
    ]
  };

  return (
    <div className="space-y-8 md:space-y-10 py-4 md:py-6">
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(websiteSchema) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(webPageSchema) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(appSchema) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }} />
      
      {/* 1. Sleek Hero Section */}
      <section className="relative flex flex-col items-center text-center py-8 md:py-12 px-4 min-h-[50vh] justify-center overflow-hidden rounded-2xl border border-amber-500/30 bg-black/60">
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
        <div className="absolute inset-0 bg-gradient-to-b from-white/85 via-white/70 to-[#eaf1e6]/90 pointer-events-none" />

        <div className="z-10 flex flex-col items-center animate-fade-in max-w-4xl">
          <div className="badge badge-gold mb-4 animate-slide-up text-xs py-1 px-3">
             100 Free Astrology & Numerology Tools — 100% Instant & No Sign-up
          </div>
          
          <h1 className="font-display text-3xl sm:text-5xl md:text-6xl font-extrabold mb-4 tracking-tight animate-slide-up animate-delay-100 leading-tight">
            <span className="text-white drop-shadow-md">Uncover Your </span>
            <span className="gradient-text-gold">Cosmic Identity</span>
            <br />
            <span className="gradient-text-gold">& Vedic Destiny</span>
          </h1>
          
          <p className="max-w-2xl text-sm sm:text-base text-amber-100/90 mb-6 animate-slide-up animate-delay-200 leading-relaxed">
            Free authentic calculations for Sun/Moon/Rising Signs, Spouse Predictor, 36 Guna Kundali Milan, Choghadia Muhurat, Sade Sati, Love Match, Numerology, Daily Tarot & Gemstones.
          </p>
          
          <div className="flex flex-col sm:flex-row gap-3 w-full sm:w-auto animate-slide-up animate-delay-300">
            <Link href="/tools" className="btn-glow px-6 py-2.5 text-sm sm:text-base font-bold w-full sm:w-auto text-center">
              Explore 100 Free Tools 
            </Link>
            <Link href="/tools/spouse-predictor" className="btn-secondary px-6 py-2.5 text-sm sm:text-base font-bold w-full sm:w-auto text-center border-amber-400/40 text-amber-300 hover:bg-amber-400/10">
              Spouse Predictor 
            </Link>
          </div>
        </div>
      </section>

      {/* 2. Quick Access Featured Cards Grid */}
      <section className="grid grid-cols-2 sm:grid-cols-4 lg:grid-cols-4 gap-2.5 sm:gap-3 max-w-6xl mx-auto px-1">
        {[
          { name: "Big Three Calculator", desc: "Sun, Moon & Rising Signs", icon: "zodiac", link: "/tools/big-three" },
          { name: "Spouse Predictor", desc: "Soulmate Features & Initials", icon: "spouse", link: "/tools/spouse-predictor" },
          { name: "Kundali Milan", desc: "36 Ashta Koota Gunas", icon: "vedic", link: "/tools/kundali-milan" },
          { name: "Vimshottari Dasha", desc: "120-Year Planetary Timeline", icon: "vedic", link: "/tools/dasha-calculator" },
          { name: "Love Compatibility", desc: "Zodiac Synastry Chemistry", icon: "spouse", link: "/tools/love-compatibility" },
          { name: "Life Path Numerology", desc: "Pythagorean Name & Date", icon: "numerology", link: "/tools/numerology" },
          { name: "Choghadia Muhurat", desc: "Auspicious Timing Windows", icon: "clock", link: "/tools/choghadia" },
          { name: "Sade Sati Phase", desc: "Saturn Transit & Remedies", icon: "saturn", link: "/tools/sade-sati" },
          { name: "Brand Numerology", desc: "Chaldean Business Math", icon: "numerology", link: "/tools/brand-numerology" },
          { name: "12 Kundali Houses", desc: "Bhavas & Lagna Snapshot", icon: "vedic", link: "/tools/kundali-houses" },
          { name: "North Node Purpose", desc: "Karmic Rahu/Ketu Soul Mission", icon: "sparkle", link: "/tools/north-node" },
          { name: "Angel Numbers", desc: "111, 444, 777 Frequencies", icon: "numerology", link: "/tools/angel-numbers" },
          { name: "Venus Sign", desc: "Love & Attraction Style", icon: "venus", link: "/tools/venus-sign" },
          { name: "Mercury Sign", desc: "Mind & Communication", icon: "mercury", link: "/tools/mercury-sign" },
          { name: "Chiron Healing", desc: "Soul Wounded Healer", icon: "sparkle", link: "/tools/chiron" },
          { name: "Birth Star Nakshatra", desc: "27 Vedic Stars & Deity", icon: "zodiac", link: "/tools/nakshatra" }
        ].map((tool, idx) => (
          <Link
            key={idx}
            href={tool.link}
            className="glass-card-hover p-3 flex flex-col items-center text-center group border-amber-500/20 hover:border-amber-400/60 bg-black/40"
          >
            <span className="mb-1 group-hover:scale-110 transition-transform flex justify-center"><CosmicIcon name={tool.icon} className="w-8 h-8" /></span>
            <h3 className="text-xs font-display font-bold text-white group-hover:text-amber-300 transition-colors">
              {tool.name}
            </h3>
            <span className="text-[10px] text-amber-200/80 mt-0.5 line-clamp-1">{tool.desc}</span>
          </Link>
        ))}
      </section>

      {/* 3. Photorealistic Feature Showcase Banner 1: Spouse Prediction */}
      <section className="glass-card p-5 md:p-8 max-w-6xl mx-auto rounded-2xl bg-black/50 border-amber-500/30 overflow-hidden relative">
        <div className="grid md:grid-cols-2 gap-6 items-center">
          <div className="space-y-3 text-left">
            <div className="badge badge-gold"> Viral High-Demand Tool</div>
            <h2 className="text-xl sm:text-3xl font-display font-bold text-white leading-tight">
              Future Spouse & Soulmate Predictor
            </h2>
            <p className="text-amber-100 text-xs sm:text-sm leading-relaxed">
              Curious about your future life partner? Our advanced Spouse Predictor combines your Sun placement, Venus sign, Darakaraka planet, and 7th House ruler to calculate your partner's physical features, personality archetype, lucky initials, and probable meeting environment.
            </p>
            <div className="pt-1">
              <Link href="/tools/spouse-predictor" className="btn-glow px-5 py-2.5 text-xs font-bold inline-flex items-center gap-2">
                <span></span> Predict Your Future Spouse Now
              </Link>
            </div>
          </div>

          <div className="relative w-full h-48 sm:h-64 rounded-xl overflow-hidden border border-amber-500/40 shadow-xl">
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
      <section className="stars-bg rounded-2xl p-4 sm:p-6 md:p-8 shadow-2xl relative overflow-hidden border border-amber-500/40 bg-black/50">
        <div className="relative z-10">
          <div className="text-center mb-6">
            <div className="badge badge-gold mb-2"> 100-in-1 Interactive Suite</div>
            <h2 className="text-2xl md:text-3xl font-display font-bold gradient-text-gold mb-1">Cosmic Tools & Calculators Suite</h2>
            <p className="text-amber-200 text-xs sm:text-sm max-w-xl mx-auto">
              Select any tool category below to calculate your astrological snapshot instantly.
            </p>
          </div>

          <CosmicToolsSuite />
        </div>
      </section>

      {/* 5. Photorealistic Feature Showcase Banner 2: Vedic Kundali & Timing */}
      <section className="glass-card p-5 md:p-8 max-w-6xl mx-auto rounded-2xl bg-black/50 border-amber-500/30 overflow-hidden relative">
        <div className="grid md:grid-cols-2 gap-6 items-center">
          <div className="relative w-full h-48 sm:h-64 rounded-xl overflow-hidden border border-amber-500/40 shadow-xl order-2 md:order-1">
            <Image
              src="/home/vedic-astrology.jpg"
              alt="Vedic Kundali Milan & Timing"
              fill
              sizes="(max-width: 768px) 100vw, 50vw"
              quality={80}
              className="object-cover hover:scale-105 transition-transform duration-500"
            />
          </div>

          <div className="space-y-3 text-left order-1 md:order-2">
            <div className="badge badge-gold"> Authentic Jyotish Wisdom</div>
            <h2 className="text-xl sm:text-3xl font-display font-bold text-white leading-tight">
              36 Guna Kundali Milan & Choghadia Timing
            </h2>
            <p className="text-amber-100 text-xs sm:text-sm leading-relaxed">
              Experience authentic 3,000-year-old Vedic Jyotish calculations. Match marriage horoscopes using Ashta Koota 36 Gunas, track Saturn's 7.5-year Sade Sati phase, analyze your 120-year Vimshottari Mahadasha timeline, and pick auspicious daily Choghadia slots.
            </p>
            <div className="pt-1 flex flex-wrap gap-2">
              <Link href="/tools/kundali-milan" className="btn-glow px-5 py-2.5 text-xs font-bold inline-flex items-center gap-2">
                <span></span> 36 Guna Kundali Milan
              </Link>
              <Link href="/tools/choghadia" className="btn-secondary px-5 py-2.5 text-xs font-bold inline-flex items-center gap-2">
                <span></span> Choghadia Muhurat
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
      <section className="glass-card p-5 md:p-8 max-w-6xl mx-auto rounded-2xl bg-black/50 border-amber-500/30 overflow-hidden relative">
        <div className="grid md:grid-cols-2 gap-6 items-center">
          <div className="space-y-3 text-left">
            <div className="badge badge-gold"> Sacred Frequency & Numerology</div>
            <h2 className="text-xl sm:text-3xl font-display font-bold text-white leading-tight">
              Pythagorean & Chaldean Brand Numerology
            </h2>
            <p className="text-amber-100 text-xs sm:text-sm leading-relaxed">
              Numbers hold universal vibrations. Calculate your Life Path and Destiny numbers, optimize your business or personal brand name using Chaldean numerology math, and decode recurring Angel Numbers (111, 222, 444, 777, 888) for daily manifestation.
            </p>
            <div className="pt-1 flex flex-wrap gap-2">
              <Link href="/tools/numerology" className="btn-glow px-5 py-2.5 text-xs font-bold inline-flex items-center gap-2">
                <span></span> Life Path Numerology
              </Link>
              <Link href="/tools/angel-numbers" className="btn-secondary px-5 py-2.5 text-xs font-bold inline-flex items-center gap-2">
                <span></span> Angel Numbers Decoder
              </Link>
            </div>
          </div>

          <div className="relative w-full h-48 sm:h-64 rounded-xl overflow-hidden border border-amber-500/40 shadow-xl">
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
      <section className="grid sm:grid-cols-2 md:grid-cols-4 gap-4 max-w-6xl mx-auto">
        {[
          { title: "100% Free & Frictionless", desc: "Zero registration required. Enter details and receive instant deep calculations.", icon: "sparkle" },
          { title: "Vedic & Western Harmony", desc: "Supports both Western Tropical and Vedic Sidereal Jyotish calculation systems.", icon: "zodiac" },
          { title: "Global Timezone Precision", desc: "Auto-suggest geocoding supporting cities across India, USA, Europe & Asia.", icon: "clock" },
          { title: "Shareable Match Reports", desc: "1-click export and copy your Kundali match certificate and Big Three snapshots.", icon: "vedic" }
        ].map((feature, idx) => (
          <div key={idx} className="glass-card-hover p-4 border-amber-500/20 text-center bg-black/40 flex flex-col items-center">
            <span className="mb-2 flex justify-center"><CosmicIcon name={feature.icon} className="w-9 h-9" /></span>
            <h3 className="text-sm font-display font-bold text-white mb-1">{feature.title}</h3>
            <p className="text-xs text-amber-200/90 leading-relaxed">{feature.desc}</p>
          </div>
        ))}
      </section>

      {/* 9. Compact Educational Manual Section */}
      <section className="glass-card p-5 sm:p-8 prose prose-invert max-w-5xl mx-auto rounded-2xl shadow-xl bg-black/50 border-amber-500/30 space-y-6">
        <div>
          <h2 className="text-xl sm:text-3xl font-display font-bold gradient-text-gold mb-3">
            Mastering Your Astrological & Numerological Blueprint
          </h2>
          <p className="text-xs sm:text-sm leading-relaxed text-amber-100/90">
            Astrology and numerology are ancient symbolic frameworks designed to foster profound self-awareness, psychological clarity, and timing mastery. At BIGThreeAstrology, we combine classic Western Tropical astrology with authentic Vedic Sidereal Jyotish and Pythagorean/Chaldean numerology systems.
          </p>
        </div>

        <div className="space-y-3 border-t border-amber-500/30 pt-4">
          <h3 className="text-lg sm:text-xl font-display font-bold text-amber-300">
            1. The Big Three & Spouse Predictor Framework
          </h3>
          <p className="text-xs sm:text-sm leading-relaxed text-amber-100/90">
            In modern astrology, your natal chart is anchored by your <strong>Big Three</strong>:
          </p>
          <ul className="list-disc pl-5 space-y-1 text-xs sm:text-sm text-amber-200/90">
            <li><strong>Sun Sign:</strong> Dictates your core conscious identity, vitality, ego, and primary life purpose.</li>
            <li><strong>Moon Sign:</strong> Governs your subconscious mind, emotional instincts, reactions, and inner comfort needs.</li>
            <li><strong>Rising Sign (Ascendant):</strong> Represents your physical appearance, outward persona, and the lens through which you experience the external world.</li>
          </ul>
        </div>
      </section>


      {/* 9b. Browse Tools by Category (static links for discovery) */}
      <section className="max-w-6xl mx-auto space-y-4">
        <h2 className="text-2xl md:text-3xl font-display font-bold text-center text-white">Browse All 100 Tools by Category</h2>
        <div className="grid grid-cols-2 md:grid-cols-3 gap-3">
          {[
            { name: "Birth Chart & Planets", count: 20, link: "/tools#planetary", icon: "zodiac" },
            { name: "Vedic Jyotish & Timing", count: 20, link: "/tools#vedic", icon: "vedic" },
            { name: "Numerology & Name Math", count: 20, link: "/tools#numerology", icon: "numerology" },
            { name: "Tarot & Soul Guidance", count: 15, link: "/tools#guidance", icon: "tarot" },
            { name: "Synastry & Relationships", count: 15, link: "/tools#synastry", icon: "spouse" },
            { name: "Career & Wealth Astrology", count: 10, link: "/tools#career", icon: "saturn" }
          ].map((cat) => (
            <Link key={cat.link} href={cat.link} className="glass-card-hover p-4 text-center border-amber-500/20 hover:border-amber-400/60 bg-black/40 group">
              <span className="block mb-1 group-hover:scale-110 transition-transform flex justify-center"><CosmicIcon name={cat.icon} className="w-8 h-8" /></span>
              <span className="text-sm font-display font-bold text-white group-hover:text-amber-300 block">{cat.name}</span>
              <span className="text-[11px] text-amber-200/80">{cat.count} free tools</span>
            </Link>
          ))}
        </div>
      </section>

      {/* 9c. Latest Guides from the Blog */}
      <section className="max-w-6xl mx-auto space-y-4">
        <h2 className="text-2xl md:text-3xl font-display font-bold text-center text-white">Latest Astrology Guides</h2>
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-4">
          {SAMPLE_BLOG_POSTS.slice(0, 4).map((post) => (
            <Link key={post.slug} href={`/blog/${post.slug}`} className="glass-card-hover rounded-xl overflow-hidden border border-amber-500/20 hover:border-amber-400/60 bg-black/40 group flex flex-col">
              <div className="relative w-full aspect-video overflow-hidden">
                <Image src={post.image} alt={post.title} fill sizes="(max-width: 768px) 100vw, 25vw" className="object-cover group-hover:scale-105 transition-transform duration-500" />
              </div>
              <div className="p-4 space-y-2">
                <h3 className="text-sm font-display font-bold text-white group-hover:text-amber-300 leading-snug">{post.title}</h3>
                <p className="text-[11px] text-amber-200/80 leading-relaxed line-clamp-3">{post.metaDescription}</p>
              </div>
            </Link>
          ))}
        </div>
        <div className="text-center">
          <Link href="/blog" className="btn-secondary px-5 py-2.5 text-xs font-bold inline-flex items-center gap-2">Read All Guides </Link>
        </div>
      </section>

      {/* 10. FAQ Visual Cards */}
      <section className="max-w-4xl mx-auto py-2">
        <h3 className="text-2xl font-display font-bold text-center text-white mb-6">Frequently Asked Questions </h3>
        <div className="grid gap-3">
          {faqSchema.mainEntity.map((faq, idx) => (
            <div key={idx} className="glass-card-hover p-4 rounded-xl border border-amber-500/20 bg-black/40">
              <h4 className="text-sm sm:text-base font-semibold text-amber-300 mb-1 flex items-start gap-2">
                <span className="text-base"></span> {faq.name}
              </h4>
              <p className="text-amber-100 text-xs sm:text-sm pl-6 leading-relaxed">{faq.acceptedAnswer.text}</p>
            </div>
          ))}
        </div>
      </section>


      {/* 12. Virality & Social Share CTA Banner */}
      <section className="theme-dark relative overflow-hidden rounded-2xl p-6 sm:p-10 text-center my-4 bg-gradient-to-r from-[#102e20] via-[#16402b] to-[#16402b] border border-[#16402b]">
        <div className="absolute inset-0 stars-bg opacity-40" />
        <div className="relative z-10 flex flex-col items-center">
          <span className="mb-2 flex justify-center"><CosmicIcon name="sparkle" className="w-9 h-9" /></span>
          <h2 className="text-xl sm:text-3xl font-display font-bold text-white mb-2">Share Your Cosmic Blueprint</h2>
          <p className="text-xs sm:text-sm text-amber-200 mb-6 max-w-xl">
            Calculate your Spouse prediction, Kundali match, Big Three, or Numerology and share the report with your partner, friends, and family!
          </p>
          <Link href="/tools/spouse-predictor" className="btn-glow px-8 py-3 text-base font-bold">
            Start Free Calculation Now 
          </Link>
        </div>
      </section>

    </div>
  );
}
