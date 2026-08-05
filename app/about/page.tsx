import { Metadata } from "next";
import { buildMetadata } from "@/lib/seo";

export const metadata: Metadata = buildMetadata({
  title: "About Us | BIGThreeAstrology",
  description: "Learn about BIGThreeAstrology, our authentic calculation methodology, and 16 free astrology & numerology tools.",
  path: "/about"
});

export default function AboutPage() {
  return (
    <div className="glass-card max-w-4xl mx-auto p-8 md:p-12 space-y-8 my-8 bg-black/40">
      <div className="text-center space-y-3">
        <div className="badge badge-emerald">✨ Authentic Astrological Precision</div>
        <h1 className="text-3xl md:text-5xl font-display font-bold gradient-text">About BIGThreeAstrology</h1>
        <p className="text-emerald-200 text-base max-w-2xl mx-auto leading-relaxed">
          The premier free, instant, and frictionless platform delivering 16 Western & Vedic astrology tools and numerology calculators for seekers worldwide.
        </p>
      </div>

      <div className="grid md:grid-cols-2 gap-6">
        <div className="p-6 rounded-2xl bg-emerald-950/60 border border-emerald-500/30">
          <span className="text-3xl mb-2 block">🔮</span>
          <h3 className="text-lg font-display font-bold text-white mb-2">Our Mission</h3>
          <p className="text-sm text-emerald-100/90 leading-relaxed">
            To democratize access to authentic astrological insights and numerological self-awareness without paywalls, mandatory account sign-ups, or invasive data collection.
          </p>
        </div>

        <div className="p-6 rounded-2xl bg-emerald-950/60 border border-emerald-500/30">
          <span className="text-3xl mb-2 block">🕉️</span>
          <h3 className="text-lg font-display font-bold text-white mb-2">Dual Ephemeris Accuracy</h3>
          <p className="text-sm text-emerald-100/90 leading-relaxed">
            We bridge Western Tropical astrology with authentic Vedic Sidereal Jyotish, including the Ashta Koota 36 Gunas Milan system, Choghadia Muhurat, and Sade Sati transits.
          </p>
        </div>
      </div>

      <div className="space-y-4 border-t border-emerald-500/30 pt-6">
        <h2 className="text-2xl font-display font-bold text-white">Contact & Inquiries</h2>
        <p className="text-emerald-200 text-sm leading-relaxed">
          For business partnerships, advertising inquiries, or technical feedback, reach out to our official support team at{" "}
          <a href="mailto:asbusiness276@gmail.com" className="text-amber-300 font-bold hover:underline">
            asbusiness276@gmail.com
          </a>.
        </p>
      </div>
    </div>
  );
}
