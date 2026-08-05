import { Metadata } from "next";
import { buildMetadata } from "@/lib/seo";

export const metadata: Metadata = buildMetadata({
  title: "Contact Us | BIGThreeAstrology Support",
  description: "Get in touch with the BIGThreeAstrology team. Email us at asbusiness276@gmail.com for support or inquiries.",
  path: "/contact"
});

export default function ContactPage() {
  return (
    <div className="container-main py-12 max-w-3xl mx-auto space-y-10">
      <div className="text-center space-y-4">
        <div className="badge badge-emerald">📩 Contact & Support</div>
        <h1 className="text-4xl sm:text-5xl font-display font-bold gradient-text">We'd Love to Hear From You</h1>
        <p className="text-emerald-200 text-base sm:text-lg">
          Have feedback, feature requests, or technical questions about our 20 astrology calculators?
        </p>
      </div>

      <div className="glass-card p-8 md:p-10 text-center bg-black/50 border-emerald-500/30 space-y-6">
        <div className="p-4 rounded-2xl bg-emerald-950/80 border border-emerald-500/30 inline-block">
          <span className="text-xs uppercase tracking-widest text-emerald-300 font-semibold block mb-1">Official Contact Email</span>
          <a href="mailto:asbusiness276@gmail.com" className="text-xl sm:text-2xl font-display font-bold text-amber-300 hover:underline">
            asbusiness276@gmail.com
          </a>
        </div>

        <p className="text-xs text-emerald-200/80 leading-relaxed max-w-md mx-auto">
          We reply to all legitimate user inquiries within 24 to 48 business hours.
        </p>
      </div>

      {/* Contact FAQs */}
      <section className="glass-card p-8 bg-black/50 border-emerald-500/30">
        <h2 className="text-2xl font-display font-bold text-white mb-6 text-center">Contact Frequently Asked Questions</h2>
        <div className="space-y-4">
          <div className="p-4 rounded-xl bg-emerald-950/60 border border-emerald-500/20">
            <h3 className="text-sm font-semibold text-amber-300 mb-1">How quickly will I receive a response?</h3>
            <p className="text-xs text-emerald-100">Our support team monitors <a href="mailto:asbusiness276@gmail.com" className="text-amber-300 underline">asbusiness276@gmail.com</a> daily and responds within 24–48 hours.</p>
          </div>
          <div className="p-4 rounded-xl bg-emerald-950/60 border border-emerald-500/20">
            <h3 className="text-sm font-semibold text-amber-300 mb-1">Can I request new astrology tools or features?</h3>
            <p className="text-xs text-emerald-100">Absolutely! We welcome feature suggestions. Email us your ideas anytime.</p>
          </div>
        </div>
      </section>
    </div>
  );
}
