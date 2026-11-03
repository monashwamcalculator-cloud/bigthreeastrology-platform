import { Metadata } from "next";
import Link from "next/link";
import Image from "next/image";
import { buildMetadata } from "@/lib/seo";
import { AUTHOR } from "@/lib/author";

export const metadata: Metadata = buildMetadata({
  title: "About Us | BIGThreeAstrology Platform",
  description: "Learn about BIGThreeAstrology's mission to provide 100 free, accurate Vedic and Western astrology calculators globally. Meet the founder, Saahil.",
  path: "/about"
});

export default function AboutPage() {
  return (
    <div className="py-12 max-w-4xl mx-auto space-y-10">
      <div className="text-center space-y-4">
        <div className="badge badge-emerald"> About BIGThreeAstrology</div>
        <h1 className="text-4xl sm:text-5xl font-display font-bold gradient-text">Empowering Self-Awareness Through Astrology</h1>
        <p className="text-emerald-200 text-lg max-w-2xl mx-auto">
          Providing 100 free, instant calculators combining Western Tropical and Vedic Sidereal Jyotish systems.
        </p>
      </div>

      <div className="glass-card p-8 md:p-10 space-y-6 bg-black/50 border-emerald-500/30">
        <h2 className="text-2xl font-display font-bold text-amber-300">Our Mission</h2>
        <p className="text-emerald-100 text-sm leading-relaxed">
          At BIGThreeAstrology, our mission is to make authentic astrological wisdom accessible to everyone worldwide without paywalls, subscriptions, or invasive data collection. Whether you are discovering your Sun, Moon, and Rising signs, exploring spouse and compatibility themes, or selecting an auspicious Choghadia Muhurat, our tools explain the method behind every result — so you always know what a number or sign is based on.
        </p>

        <h2 className="text-2xl font-display font-bold text-emerald-300 pt-4 border-t border-emerald-500/20">How Our Calculators Work</h2>
        <p className="text-emerald-100 text-sm leading-relaxed">
          Our flagship chart calculators — the Big Three, Nakshatra Finder, Venus and Mercury sign calculators, Kundali Milan, Sade Sati, Moon Phase, Dasha and Chiron tools — compute from real astronomical positions for your birth moment: planetary longitudes from ephemeris-based formulas, the Lahiri ayanamsa for Vedic (sidereal) placements, and full Ashtakoota scoring for Kundali Milan. The wider catalogue applies the classical tables and rules of each tradition — numerology reductions, muhurat cycles, synastry and reflection themes — and every tool page explains its own method in a “How This Result Is Calculated” section. We would rather show our working than promise precision we cannot back up.
        </p>

        <h2 className="text-2xl font-display font-bold text-emerald-300 pt-4 border-t border-emerald-500/20">Why Choose BIGThreeAstrology?</h2>
        <ul className="list-disc pl-6 space-y-2 text-sm text-emerald-100/90">
          <li><strong>100 Free Tools:</strong> Comprehensive suite covering planetary placements, Kundali Milan, Numerology, and Tarot.</li>
          <li><strong>Global Timezone Support:</strong> Auto-suggesting location geocoding for cities across India and worldwide.</li>
          <li><strong>100% Privacy Protection:</strong> Your birth details are calculated locally on your browser and never stored on private servers.</li>
          <li><strong>Official Support:</strong> Reach our editorial team anytime at <a href="mailto:asbusiness276@gmail.com" className="text-amber-300 underline font-bold">asbusiness276@gmail.com</a>.</li>
        </ul>
      </div>

      {/* Founder block (E-E-A-T, added 2 Nov 2026) */}
      <section className="glass-card p-8 md:p-10 bg-black/50 border-emerald-500/30">
        <div className="flex flex-col sm:flex-row gap-6 items-center sm:items-start">
          <Image
            src={AUTHOR.image}
            alt={`${AUTHOR.name}, founder of BIGThreeAstrology`}
            width={128}
            height={128}
            className="rounded-full object-cover w-28 h-28 sm:w-32 sm:h-32 border border-emerald-500/40"
          />
          <div className="space-y-3 text-center sm:text-left">
            <div>
              <h2 className="text-2xl font-display font-bold text-white">
                Meet {AUTHOR.name}
              </h2>
              <p className="text-amber-300 text-sm font-semibold">{AUTHOR.role}</p>
            </div>
            <p className="text-emerald-100 text-sm leading-relaxed">{AUTHOR.shortBio}</p>
            <div className="flex flex-wrap gap-2 justify-center sm:justify-start">
              {AUTHOR.expertise.slice(0, 4).map((item) => (
                <span
                  key={item}
                  className="text-[11px] px-2.5 py-1 rounded-full bg-emerald-950/60 border border-emerald-500/30 text-emerald-100"
                >
                  {item}
                </span>
              ))}
            </div>
            <p className="text-sm space-x-4">
              <Link href={AUTHOR.pageUrl} className="text-amber-300 underline font-semibold">
                Read {AUTHOR.name}&rsquo;s full profile &amp; articles
              </Link>
              <a
                href={AUTHOR.linkedin}
                target="_blank"
                rel="noopener noreferrer"
                className="text-amber-300 underline font-semibold"
              >
                Connect on LinkedIn
              </a>
            </p>
          </div>
        </div>
      </section>

      {/* About FAQs */}
      <section className="glass-card p-8 bg-black/50 border-emerald-500/30">
        <h2 className="text-2xl font-display font-bold text-white mb-6 text-center">Frequently Asked Questions</h2>
        <div className="space-y-4">
          <div className="p-4 rounded-xl bg-emerald-950/60 border border-emerald-500/20">
            <h3 className="text-sm font-semibold text-amber-300 mb-1">Are all 100 calculators on BIGThreeAstrology really free?</h3>
            <p className="text-xs text-emerald-100">Yes! Every calculator—from the Big Three and Spouse Predictor to Kundali Milan—is 100% free with no hidden charges.</p>
          </div>
          <div className="p-4 rounded-xl bg-emerald-950/60 border border-emerald-500/20">
            <h3 className="text-sm font-semibold text-amber-300 mb-1">How can I contact the BIGThreeAstrology team?</h3>
            <p className="text-xs text-emerald-100">You can email our official team directly at <a href="mailto:asbusiness276@gmail.com" className="text-amber-300 underline">asbusiness276@gmail.com</a>.</p>
          </div>
        </div>
      </section>
    </div>
  );
}
