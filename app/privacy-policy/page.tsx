import { Metadata } from "next";
import { buildMetadata } from "@/lib/seo";

export const metadata: Metadata = buildMetadata({
  title: "Privacy Policy | BIGThreeAstrology",
  description: "How BIGThreeAstrology handles calculator and user data privacy.",
  path: "/privacy-policy"
});

export default function PrivacyPolicyPage() {
  return (
    <div className="glass-card max-w-4xl mx-auto p-8 md:p-12 space-y-6 my-8">
      <div className="badge badge-emerald mb-2">🔒 Data Protection</div>
      <h1 className="text-3xl font-display font-bold gradient-text">Privacy Policy</h1>
      <p className="text-emerald-100 leading-relaxed text-base">
        This Privacy Policy explains what data BIGThreeAstrology collects, why we collect it, how we use it, and what choices you have. BIGThreeAstrology is a free, instant, and frictionless astrology and numerology calculator suite. We prioritize user privacy and avoid unnecessary tracking.
      </p>

      <h2 className="text-xl font-display font-semibold text-white">Data Usage & Privacy</h2>
      <p className="text-emerald-200 leading-relaxed text-sm">
        Input details entered into our 16 interactive calculators (such as birth date, time, or name) are processed in real-time to generate your astrological results. We do not store or sell your private personal birth data.
      </p>

      <h2 className="text-xl font-display font-semibold text-white">Contact & Support</h2>
      <p className="text-emerald-200 leading-relaxed text-sm">
        For privacy questions, data requests, or platform inquiries, email us at{" "}
        <a href="mailto:asbusiness276@gmail.com" className="text-amber-300 font-bold hover:underline">
          asbusiness276@gmail.com
        </a>.
      </p>
    </div>
  );
}
