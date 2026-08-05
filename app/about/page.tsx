import { Metadata } from "next";
import { buildMetadata } from "@/lib/seo";

export const metadata: Metadata = buildMetadata({
  title: "About Us | BIGThreeAstrology",
  description: "Learn about BIGThreeAstrology, our authentic calculation methodology, transparency standards, and 16 free astrology & numerology tools.",
  path: "/about"
});

export default function AboutPage() {
  return (
    <div className="glass-card max-w-4xl mx-auto p-8 md:p-14 space-y-10 my-8 bg-black/40 border-emerald-500/30">
      <div className="text-center space-y-4">
        <div className="badge badge-emerald">✨ Authentic Astrological Precision</div>
        <h1 className="text-3xl md:text-5xl font-display font-bold gradient-text">About BIGThreeAstrology</h1>
        <p className="text-emerald-200 text-base md:text-lg max-w-2xl mx-auto leading-relaxed">
          The premier free, instant, and frictionless platform delivering 16 Western & Vedic astrology tools and numerology calculators for seekers worldwide.
        </p>
      </div>

      <div className="grid md:grid-cols-2 gap-6">
        <div className="p-6 rounded-2xl bg-emerald-950/60 border border-emerald-500/30 space-y-3">
          <span className="text-3xl block">🔮</span>
          <h3 className="text-xl font-display font-bold text-white">Our Mission & Purpose</h3>
          <p className="text-sm text-emerald-100/90 leading-relaxed">
            BIGThreeAstrology was founded to democratize authentic astrological insights and numerological self-awareness. We eliminate paywalls, mandatory account sign-ups, and invasive data tracking so users can calculate their birth placements instantly and privately.
          </p>
        </div>

        <div className="p-6 rounded-2xl bg-emerald-950/60 border border-emerald-500/30 space-y-3">
          <span className="text-3xl block">🕉️</span>
          <h3 className="text-xl font-display font-bold text-white">Dual Ephemeris Precision</h3>
          <p className="text-sm text-emerald-100/90 leading-relaxed">
            Our platform bridges Western Tropical astrology with authentic Vedic Sidereal Jyotish. Whether you are looking up your Big Three (Sun, Moon, Rising), evaluating 36 Gunas Kundali Milan, checking Choghadia timings, or calculating Sade Sati phases, our algorithms adhere strictly to traditional mathematical rules.
          </p>
        </div>
      </div>

      <div className="space-y-6 border-t border-emerald-500/30 pt-8">
        <h2 className="text-2xl font-display font-bold text-white">Our Calculation Philosophy</h2>
        <div className="space-y-4 text-emerald-100/90 text-sm leading-relaxed">
          <p>
            Astrology is both an ancient symbolic language and a mathematical study of astronomical cycles. We treat every birth detail entered into our system with utmost precision:
          </p>
          <ul className="list-disc pl-6 space-y-2 text-emerald-200/90">
            <li><strong>High-Precision Astronomical Algorithms:</strong> We calculate exact ecliptic longitudes to determine planetary signs, houses, and nakshatras.</li>
            <li><strong>Ashta Koota Vedic Matchmaking:</strong> Our Kundali Milan engine evaluates all 8 kootas (Varna, Vashya, Tara, Yoni, Graha Maitri, Gana, Bhakoot, and Nadi) with full 36 Guna scoring breakdown.</li>
            <li><strong>Chaldean & Pythagorean Numerology:</strong> We offer both Western linear (Pythagorean 1-9) and ancient sound-vibration (Chaldean 1-8) calculations for personal names and business titles.</li>
          </ul>
        </div>
      </div>

      <div className="space-y-4 border-t border-emerald-500/30 pt-8">
        <h2 className="text-2xl font-display font-bold text-white">Editorial Integrity & Support</h2>
        <p className="text-emerald-200 text-sm leading-relaxed">
          All educational guides and tool documentations are continuously audited for astrological accuracy. Have questions, feature suggestions, or business inquiries? Contact our official support team at:
        </p>
        <div className="p-4 rounded-xl bg-black/50 border border-emerald-500/40 inline-block">
          <a href="mailto:asbusiness276@gmail.com" className="text-lg font-display font-bold text-amber-300 hover:underline">
            asbusiness276@gmail.com
          </a>
        </div>
      </div>
    </div>
  );
}
