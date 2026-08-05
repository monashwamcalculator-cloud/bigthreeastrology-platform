import { Metadata } from "next";
import { buildMetadata } from "@/lib/seo";

export const metadata: Metadata = buildMetadata({
  title: "Privacy Policy | BIGThreeAstrology",
  description: "How BIGThreeAstrology handles calculator inputs, cookies, analytics, and user privacy protection.",
  path: "/privacy-policy"
});

export default function PrivacyPolicyPage() {
  return (
    <div className="glass-card max-w-4xl mx-auto p-8 md:p-14 space-y-8 my-8 bg-black/40 border-emerald-500/30">
      <div className="space-y-3">
        <div className="badge badge-emerald mb-2">🔒 Privacy & Data Protection</div>
        <h1 className="text-3xl md:text-4xl font-display font-bold gradient-text">Privacy Policy</h1>
        <p className="text-xs text-emerald-300">Effective Date: August 5, 2026</p>
      </div>

      <div className="space-y-6 text-sm text-emerald-100/90 leading-relaxed">
        <section className="space-y-2">
          <h2 className="text-xl font-display font-semibold text-white">1. Overview & Commitment</h2>
          <p>
            BIGThreeAstrology ("we", "our", or "us") operates the website <strong>https://bigthreeastrology.online</strong>. We are committed to safeguarding the privacy of our visitors. This Privacy Policy outlines what information is processed when you use our 16 online astrology and numerology calculators.
          </p>
        </section>

        <section className="space-y-2">
          <h2 className="text-xl font-display font-semibold text-white">2. Calculator Input Processing</h2>
          <p>
            When you enter birth details (such as birth date, time, or location) or names into our calculators (Big Three, Kundali Milan, Choghadia, Numerology, etc.), these inputs are processed locally in your web browser or in temporary server memory solely to generate your results. We <strong>do not sell or monetize your personal birth chart inputs</strong> to third parties.
          </p>
        </section>

        <section className="space-y-2">
          <h2 className="text-xl font-display font-semibold text-white">3. Cookies & Local Storage</h2>
          <p>
            Our website uses browser LocalStorage and standard session cookies to remember your calculator preferences (such as Western vs Vedic toggles or active tool tabs) to enhance your browsing experience. You can clear cookies and local storage through your browser settings at any time.
          </p>
        </section>

        <section className="space-y-2">
          <h2 className="text-xl font-display font-semibold text-white">4. Third-Party Analytics & Advertising</h2>
          <p>
            We may use privacy-conscious analytics tools (such as Google Analytics) and advertising partners (such as Google AdSense) to measure traffic and maintain our free services. These third-party services may place cookies to serve non-personalized or relevant advertisements based on general Web browsing patterns.
          </p>
        </section>

        <section className="space-y-2">
          <h2 className="text-xl font-display font-semibold text-white">5. Data Protection Rights & Inquiries</h2>
          <p>
            Depending on your jurisdiction (such as GDPR in Europe or CCPA in California), you have rights regarding your personal data processing. For privacy inquiries, data requests, or questions, please contact our Data Privacy Officer at:
          </p>
          <div className="p-4 rounded-xl bg-black/60 border border-emerald-500/40 inline-block mt-2">
            <a href="mailto:asbusiness276@gmail.com" className="text-amber-300 font-bold hover:underline">
              asbusiness276@gmail.com
            </a>
          </div>
        </section>
      </div>
    </div>
  );
}
