import { Metadata } from "next";
import { buildMetadata } from "@/lib/seo";

export const metadata: Metadata = buildMetadata({
  title: "Contact Us | BIGThreeAstrology",
  description: "Contact support for partnerships, feature suggestions, calculator feedback, and platform inquiries.",
  path: "/contact"
});

export default function ContactPage() {
  return (
    <div className="glass-card max-w-3xl mx-auto p-8 md:p-12 space-y-6 my-8">
      <div className="badge badge-emerald mb-2">📩 Get in Touch</div>
      <h1 className="text-3xl font-display font-bold gradient-text">Contact Support & Business Inquiries</h1>
      <p className="text-emerald-100 leading-relaxed text-base">
        Have questions about your calculation, feedback on our 16 cosmic tools, or partnership inquiries? Feel free to reach out to us directly.
      </p>

      <div className="p-6 rounded-2xl bg-black/50 border border-emerald-500/40 space-y-3">
        <h2 className="text-xs font-semibold uppercase tracking-widest text-emerald-300">Official Business Email</h2>
        <a
          href="mailto:asbusiness276@gmail.com"
          className="text-xl md:text-2xl font-display font-bold text-amber-300 hover:text-emerald-200 transition-colors block"
        >
          asbusiness276@gmail.com
        </a>
        <p className="text-xs text-emerald-300">
          Response time is typically within 12 to 24 business hours.
        </p>
      </div>
    </div>
  );
}
