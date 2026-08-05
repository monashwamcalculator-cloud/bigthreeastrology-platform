import { Metadata } from "next";
import { buildMetadata } from "@/lib/seo";

export const metadata: Metadata = buildMetadata({
  title: "Contact Us | BIGThreeAstrology",
  description: "Contact support for partnerships, feature suggestions, calculator feedback, and platform inquiries.",
  path: "/contact"
});

export default function ContactPage() {
  return (
    <div className="glass-card max-w-4xl mx-auto p-8 md:p-12 space-y-8 my-8 bg-black/40 border-emerald-500/30">
      <div className="text-center space-y-3">
        <div className="badge badge-emerald">📩 Support & Inquiries</div>
        <h1 className="text-3xl md:text-4xl font-display font-bold gradient-text">Contact BIGThreeAstrology</h1>
        <p className="text-emerald-200 text-sm md:text-base max-w-xl mx-auto leading-relaxed">
          Have feedback on our 16 cosmic tools, feature suggestions, advertising requests, or media inquiries? We welcome your message.
        </p>
      </div>

      <div className="p-8 rounded-2xl bg-black/60 border border-emerald-500/40 text-center space-y-4 max-w-2xl mx-auto">
        <span className="text-4xl">📧</span>
        <h2 className="text-xs font-semibold uppercase tracking-widest text-emerald-300">Official Business Email</h2>
        <a
          href="mailto:asbusiness276@gmail.com"
          className="text-2xl sm:text-3xl font-display font-bold text-amber-300 hover:text-emerald-200 transition-colors block"
        >
          asbusiness276@gmail.com
        </a>
        <p className="text-xs text-emerald-300/80">
          Response Commitment: Our support team reviews all incoming inquiries and typically responds within 12 to 24 business hours.
        </p>
      </div>

      <div className="space-y-6 border-t border-emerald-500/30 pt-8">
        <h3 className="text-xl font-display font-bold text-white text-center">Frequently Asked Inquiries</h3>
        <div className="grid sm:grid-cols-2 gap-4 text-sm">
          <div className="p-4 rounded-xl bg-emerald-950/60 border border-emerald-500/30">
            <h4 className="font-semibold text-amber-300 mb-1">💼 Business & Advertising</h4>
            <p className="text-xs text-emerald-100/90 leading-relaxed">
              Interested in advertising, sponsored tools, or brand collaborations? Send your proposal to our email above.
            </p>
          </div>

          <div className="p-4 rounded-xl bg-emerald-950/60 border border-emerald-500/30">
            <h4 className="font-semibold text-emerald-300 mb-1">💡 Feature Suggestions</h4>
            <p className="text-xs text-emerald-100/90 leading-relaxed">
              Want a new calculator or panchang feature added? We love user feedback and build high-demand community requests.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
