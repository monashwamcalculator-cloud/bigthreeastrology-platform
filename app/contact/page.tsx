import { Metadata } from "next";
import { buildMetadata } from "@/lib/seo";

export const metadata: Metadata = buildMetadata({
  title: "Contact Us | BIGThreeAstrology Support",
  description: "Get in touch with the BIGThreeAstrology team. Email us at asbusiness276@gmail.com for support or inquiries. Free — no sign-up, no download needed.",
  path: "/contact"
});

export default function ContactPage() {
  return (
    <div className="py-12 max-w-3xl mx-auto space-y-10">
      <div className="text-center space-y-4">
        <div className="badge badge-emerald"> Contact & Support</div>
        <h1 className="text-4xl sm:text-5xl font-display font-bold gradient-text">We'd Love to Hear From You</h1>
        <p className="text-[#3A5747] text-base sm:text-lg">
          Have feedback, feature requests, or technical questions about our 100 astrology calculators?
        </p>
      </div>

      <div className="glass-card p-8 md:p-10 text-center bg-white border-emerald-500/30 space-y-6">
        <div className="p-4 rounded-2xl bg-[#DFF5EC] border border-emerald-500/30 inline-block">
          <span className="text-xs uppercase tracking-widest text-[#075433] font-semibold block mb-1">Official Contact Email</span>
          <a href="mailto:asbusiness276@gmail.com" className="text-xl sm:text-2xl font-display font-bold text-[#075433] hover:underline">
            asbusiness276@gmail.com
          </a>
        </div>

        <p className="text-xs text-[#3D5C46] leading-relaxed max-w-md mx-auto">
          We reply to all legitimate user inquiries within 24 to 48 business hours.
        </p>
      </div>

      {/* Contact FAQs */}
      <section className="glass-card p-8 bg-white border-emerald-500/30">
        <h2 className="text-2xl font-display font-bold text-[#042F2A] mb-6 text-center">Contact Frequently Asked Questions</h2>
        <div className="grid gap-3">
          <div className="glass-card-hover p-4 rounded-xl">
            <h3 className="text-sm font-semibold text-[#256b42] mb-1">How quickly will I receive a response?</h3>
            <p className="text-[#33463a] text-xs sm:text-sm leading-relaxed">Our support team monitors <a href="mailto:asbusiness276@gmail.com" className="text-[#256b42] underline">asbusiness276@gmail.com</a> daily and responds within 24–48 hours.</p>
          </div>
          <div className="glass-card-hover p-4 rounded-xl">
            <h3 className="text-sm font-semibold text-[#256b42] mb-1">Can I request new astrology tools or features?</h3>
            <p className="text-[#33463a] text-xs sm:text-sm leading-relaxed">Absolutely! We welcome feature suggestions. Email us your ideas anytime.</p>
          </div>
        </div>
      </section>
    </div>
  );
}
