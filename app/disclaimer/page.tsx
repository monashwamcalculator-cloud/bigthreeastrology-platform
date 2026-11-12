import { Metadata } from "next";
import { buildMetadata, absoluteUrl } from "@/lib/seo";

export const metadata: Metadata = buildMetadata({
  title: "Astrological Disclaimer | BIGThreeAstrology",
  description: "Astrological and legal disclaimer for BIGThreeAstrology calculations. Free and instant — no sign-up, no download, works on any device you own.",
  path: "/disclaimer"
});

export default function DisclaimerPage() {
  const disclaimerSchema = {
    "@context": "https://schema.org",
    "@type": "WebPage",
    name: "Astrological Disclaimer | BIGThreeAstrology",
    url: absoluteUrl("/disclaimer"),
    description:
      "Astrological and legal disclaimer for BIGThreeAstrology calculations. Free and instant \u2014 no sign-up, no download, works on any device you own.",
    isPartOf: { "@type": "WebSite", name: "BIGThreeAstrology", url: absoluteUrl("/") }
  };

  return (
    <div className="glass-card max-w-4xl mx-auto p-8 md:p-14 space-y-8 my-8 bg-white border-emerald-500/30">
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(disclaimerSchema) }} />

      <div className="space-y-3">
        <div className="badge badge-emerald mb-2">⚖ Legal & Astrological Disclaimer</div>
        <h1 className="text-3xl md:text-4xl font-display font-bold gradient-text">Astrological Disclaimer</h1>
        <p className="text-xs text-[#075433]">Effective Date: August 5, 2026</p>
      </div>

      <div className="space-y-6 text-sm text-[#2C473F] leading-relaxed">
        <section className="space-y-2">
          <h2 className="text-xl font-display font-semibold text-[#042F2A]">1. Self-Awareness & Guidance Purpose</h2>
          <p>
            Everything you get from this site — the calculations, planetary placements, 36 Gunas Kundali match scores, Choghadia Muhurat timings, Sade Sati phases and numerology readings — is meant for your own self-awareness, learning and entertainment. Nothing more, nothing less.
          </p>
        </section>

        <section className="space-y-2">
          <h2 className="text-xl font-display font-semibold text-[#042F2A]">2. No Professional Advice</h2>
          <p>
            Please do not treat an astrological reading as professional advice. Money, health, legal matters and your mental wellbeing deserve qualified people who know your situation. Talk to a licensed professional for life&apos;s big decisions — and always use your own judgement.
          </p>
        </section>

        <section className="space-y-2">
          <h2 className="text-xl font-display font-semibold text-[#042F2A]">3. Contact Us</h2>
          <p>
            Questions about this disclaimer? Email us at:{" "}
            <a href="mailto:asbusiness276@gmail.com" className="text-[#075433] font-bold hover:underline">
              asbusiness276@gmail.com
            </a>.
          </p>
        </section>
      </div>
    </div>
  );
}
