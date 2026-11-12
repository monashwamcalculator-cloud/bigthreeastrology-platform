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
            By using BIGThreeAstrology (<strong>https://bigthreeastrology.online</strong>), you accept these Terms and Conditions. If any part of them does not work for you, please do not use the website.
          </p>
        </section>

        <section className="space-y-2">
          <h2 className="text-xl font-display font-semibold text-[#042F2A]">2. Free Educational & Entertainment Service</h2>
          <p>
            Our 100+ interactive astrology and numerology calculators are here for personal use — learning, self-awareness and entertainment. What a calculator tells you is not professional advice, and it is no substitute for a lawyer, a financial adviser, a doctor or a therapist.
          </p>
        </section>

        <section className="space-y-2">
          <h2 className="text-xl font-display font-semibold text-[#042F2A]">3. Intellectual Property Rights</h2>
          <p>
            Everything on this website — the design, logos, our custom calculator engines, the written content and the interface — belongs to BIGThreeAstrology. You are welcome to share snapshots of your results for personal use or on social media, as long as you credit us.
          </p>
        </section>

        <section className="space-y-2">
          <h2 className="text-xl font-display font-semibold text-[#042F2A]">4. Support & Inquiries</h2>
          <p>
            Questions about these terms? Please email us at:{" "}
            <a href="mailto:asbusiness276@gmail.com" className="text-[#075433] font-bold hover:underline">
              asbusiness276@gmail.com
            </a>.
          </p>
        </section>
      </div>
    </div>
  );
}
