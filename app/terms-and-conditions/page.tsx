import { Metadata } from "next";
import { buildMetadata } from "@/lib/seo";

export const metadata: Metadata = buildMetadata({
  title: "Terms and Conditions | BIGThreeAstrology",
  description: "Terms of service and user agreement for BIGThreeAstrology.",
  path: "/terms-and-conditions"
});

export default function TermsPage() {
  return (
    <div className="glass-card max-w-4xl mx-auto p-8 md:p-14 space-y-8 my-8 bg-black/40 border-emerald-500/30">
      <div className="space-y-3">
        <div className="badge badge-emerald mb-2">📜 Terms & User Agreement</div>
        <h1 className="text-3xl md:text-4xl font-display font-bold gradient-text">Terms and Conditions</h1>
        <p className="text-xs text-emerald-300">Effective Date: August 5, 2026</p>
      </div>

      <div className="space-y-6 text-sm text-emerald-100/90 leading-relaxed">
        <section className="space-y-2">
          <h2 className="text-xl font-display font-semibold text-white">1. Acceptance of Terms</h2>
          <p>
            By accessing and using BIGThreeAstrology (<strong>https://bigthreeastrology.online</strong>), you agree to be bound by these Terms and Conditions. If you do not agree with any part of these terms, you should discontinue using the website.
          </p>
        </section>

        <section className="space-y-2">
          <h2 className="text-xl font-display font-semibold text-white">2. Free Educational & Entertainment Service</h2>
          <p>
            BIGThreeAstrology provides 16 interactive astrology and numerology calculators for personal, educational, self-awareness, and entertainment purposes. Calculator outputs do not constitute professional legal, financial, medical, or psychological advice.
          </p>
        </section>

        <section className="space-y-2">
          <h2 className="text-xl font-display font-semibold text-white">3. Intellectual Property Rights</h2>
          <p>
            All website design, logos, custom calculator engines, text content, and UI components are the exclusive property of BIGThreeAstrology. You may share report snapshots for personal or social media use with attribution.
          </p>
        </section>

        <section className="space-y-2">
          <h2 className="text-xl font-display font-semibold text-white">4. Support & Inquiries</h2>
          <p>
            For questions regarding these Terms and Conditions, please contact us at:{" "}
            <a href="mailto:asbusiness276@gmail.com" className="text-amber-300 font-bold hover:underline">
              asbusiness276@gmail.com
            </a>.
          </p>
        </section>
      </div>
    </div>
  );
}
