import { Metadata } from "next";
import { buildMetadata, absoluteUrl } from "@/lib/seo";

export const metadata: Metadata = buildMetadata({
  title: "Terms and Conditions | BIGThreeAstrology",
  description: "Terms of service and user agreement for BIGThreeAstrology. Includes how the method works, what your result means and FAQs — free, instant, no sign-up.",
  path: "/terms-and-conditions"
});

export default function TermsPage() {
  const termsSchema = {
    "@context": "https://schema.org",
    "@type": "WebPage",
    name: "Terms and Conditions | BIGThreeAstrology",
    url: absoluteUrl("/terms-and-conditions"),
    description:
      "Terms of service and user agreement for BIGThreeAstrology. Includes how the method works, what your result means and FAQs \u2014 free, instant, no sign-up.",
    isPartOf: { "@type": "WebSite", name: "BIGThreeAstrology", url: absoluteUrl("/") }
  };

  return (
    <div className="glass-card max-w-4xl mx-auto p-8 md:p-14 space-y-8 my-8 bg-white border-emerald-500/30">
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(termsSchema) }} />

      <div className="space-y-3">
        <div className="badge badge-emerald mb-2"> Terms & User Agreement</div>
        <h1 className="text-3xl md:text-4xl font-display font-bold gradient-text">Terms and Conditions</h1>
        <p className="text-xs text-[#075433]">Effective Date: August 5, 2026</p>
      </div>

      <div className="space-y-6 text-sm text-[#2C473F] leading-relaxed">
        <section className="space-y-2">
          <h2 className="text-xl font-display font-semibold text-[#042F2A]">1. Acceptance of Terms</h2>
          <p>
            By accessing and using BIGThreeAstrology (<strong>https://bigthreeastrology.online</strong>), you agree to be bound by these Terms and Conditions. If you do not agree with any part of these terms, you should discontinue using the website.
          </p>
        </section>

        <section className="space-y-2">
          <h2 className="text-xl font-display font-semibold text-[#042F2A]">2. Free Educational & Entertainment Service</h2>
          <p>
            BIGThreeAstrology provides 100+ interactive astrology and numerology calculators for personal, educational, self-awareness, and entertainment purposes. Calculator outputs do not constitute professional legal, financial, medical, or psychological advice.
          </p>
        </section>

        <section className="space-y-2">
          <h2 className="text-xl font-display font-semibold text-[#042F2A]">3. Intellectual Property Rights</h2>
          <p>
            All website design, logos, custom calculator engines, text content, and UI components are the exclusive property of BIGThreeAstrology. You may share report snapshots for personal or social media use with attribution.
          </p>
        </section>

        <section className="space-y-2">
          <h2 className="text-xl font-display font-semibold text-[#042F2A]">4. Support & Inquiries</h2>
          <p>
            For questions regarding these Terms and Conditions, please contact us at:{" "}
            <a href="mailto:asbusiness276@gmail.com" className="text-[#075433] font-bold hover:underline">
              asbusiness276@gmail.com
            </a>.
          </p>
        </section>
      </div>
    </div>
  );
}
