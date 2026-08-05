import { Metadata } from "next";
import { buildMetadata } from "@/lib/seo";

export const metadata: Metadata = buildMetadata({
  title: "Contact BIGThreeAstrology",
  description: "Contact support for partnerships, feature suggestions, calculator feedback, and platform inquiries.",
  path: "/contact"
});

export default function ContactPage() {
  return (
    <div className="glass-card max-w-3xl mx-auto p-8 md:p-12 space-y-6 my-8">
      <h1 className="text-3xl font-display font-bold gradient-text-gold">Contact Support</h1>
      <p className="text-cosmic-100 leading-relaxed text-base">
        Have questions about your calculation, feedback on our 12 cosmic tools, or partnership inquiries? Feel free to reach out to us directly.
      </p>

      <div className="p-6 rounded-2xl bg-black/40 border border-accent-gold/30 space-y-3">
        <h2 className="text-sm font-semibold uppercase tracking-widest text-accent-gold">Direct Email Support</h2>
        <a
          href="mailto:monashwamcalculator@gmail.com"
          className="text-xl md:text-2xl font-display font-bold text-accent-cyan hover:text-accent-gold transition-colors block"
        >
          monashwamcalculator@gmail.com
        </a>
        <p className="text-xs text-cosmic-300">
          Response time is typically within 12 to 24 business hours.
        </p>
      </div>
    </div>
  );
}
