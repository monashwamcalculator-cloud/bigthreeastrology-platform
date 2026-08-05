import { Metadata } from "next";
import { buildMetadata } from "@/lib/seo";

export const metadata: Metadata = buildMetadata({
  title: "Astrological Disclaimer | BIGThreeAstrology",
  description: "Astrological and legal disclaimer for BIGThreeAstrology calculations.",
  path: "/disclaimer"
});

export default function DisclaimerPage() {
  return (
    <div className="glass-card max-w-4xl mx-auto p-8 md:p-14 space-y-8 my-8 bg-black/40 border-emerald-500/30">
      <div className="space-y-3">
        <div className="badge badge-emerald mb-2">⚖️ Legal & Astrological Disclaimer</div>
        <h1 className="text-3xl md:text-4xl font-display font-bold gradient-text">Astrological Disclaimer</h1>
        <p className="text-xs text-emerald-300">Effective Date: August 5, 2026</p>
      </div>

      <div className="space-y-6 text-sm text-emerald-100/90 leading-relaxed">
        <section className="space-y-2">
          <h2 className="text-xl font-display font-semibold text-white">1. Self-Awareness & Guidance Purpose</h2>
          <p>
            The calculations, planetary placements, 36 Gunas Kundali match scores, Choghadia Muhurat timings, Sade Sati phases, and numerology readings provided on BIGThreeAstrology are intended solely for personal self-awareness, entertainment, and educational guidance.
          </p>
        </section>

        <section className="space-y-2">
          <h2 className="text-xl font-display font-semibold text-white">2. No Professional Advice</h2>
          <p>
            Astrological insights should never replace professional financial, medical, legal, or psychological counseling. Users are encouraged to exercise personal judgment and consult licensed professionals for life decisions.
          </p>
        </section>

        <section className="space-y-2">
          <h2 className="text-xl font-display font-semibold text-white">3. Contact Us</h2>
          <p>
            If you have questions regarding this disclaimer, email us at:{" "}
            <a href="mailto:asbusiness276@gmail.com" className="text-amber-300 font-bold hover:underline">
              asbusiness276@gmail.com
            </a>.
          </p>
        </section>
      </div>
    </div>
  );
}
