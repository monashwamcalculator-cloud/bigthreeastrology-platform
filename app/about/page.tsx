import { Metadata } from "next";
import Link from "next/link";
import { buildMetadata } from "@/lib/seo";

export const metadata: Metadata = buildMetadata({
  title: "About Us | BIGThreeAstrology Platform",
  description: "Learn about BIGThreeAstrology's mission to provide 20 free, accurate Vedic and Western astrology calculators globally.",
  path: "/about"
});

export default function AboutPage() {
  return (
    <div className="container-main py-12 max-w-4xl mx-auto space-y-10">
      <div className="text-center space-y-4">
        <div className="badge badge-emerald">🌟 About BIGThreeAstrology</div>
        <h1 className="text-4xl sm:text-5xl font-display font-bold gradient-text">Empowering Self-Awareness Through Astrology</h1>
        <p className="text-emerald-200 text-lg max-w-2xl mx-auto">
          Providing 20 free, instant, precision calculators combining Western Tropical and Vedic Sidereal Jyotish systems.
        </p>
      </div>

      <div className="glass-card p-8 md:p-10 space-y-6 bg-black/50 border-emerald-500/30">
        <h2 className="text-2xl font-display font-bold text-amber-300">Our Mission</h2>
        <p className="text-emerald-100 text-sm leading-relaxed">
          At BIGThreeAstrology, our mission is to make authentic astrological wisdom accessible to everyone worldwide without paywalls, subscriptions, or invasive data collection. Whether you are discovering your Sun, Moon, and Rising signs, predicting future spouse traits, or selecting an auspicious Choghadia Muhurat, our platform delivers high-precision Ephemeris and Vedic mathematical calculations instantly.
        </p>

        <h2 className="text-2xl font-display font-bold text-emerald-300 pt-4 border-t border-emerald-500/20">Why Choose BIGThreeAstrology?</h2>
        <ul className="list-disc pl-6 space-y-2 text-sm text-emerald-100/90">
          <li><strong>20 Free Tools:</strong> Comprehensive suite covering planetary placements, Kundali Milan, Numerology, and Tarot.</li>
          <li><strong>Global Timezone Precision:</strong> Auto-suggesting location geocoding for cities across India and worldwide.</li>
          <li><strong>100% Privacy Protection:</strong> Your birth details are calculated locally on your browser and never stored on private servers.</li>
          <li><strong>Official Support:</strong> Reach our editorial team anytime at <a href="mailto:asbusiness276@gmail.com" className="text-amber-300 underline font-bold">asbusiness276@gmail.com</a>.</li>
        </ul>
      </div>

      {/* About FAQs */}
      <section className="glass-card p-8 bg-black/50 border-emerald-500/30">
        <h2 className="text-2xl font-display font-bold text-white mb-6 text-center">Frequently Asked Questions</h2>
        <div className="space-y-4">
          <div className="p-4 rounded-xl bg-emerald-950/60 border border-emerald-500/20">
            <h3 className="text-sm font-semibold text-amber-300 mb-1">Are all 20 calculators on BIGThreeAstrology really free?</h3>
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
