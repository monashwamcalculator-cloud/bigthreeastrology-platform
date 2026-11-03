import { Metadata } from "next";
import { buildMetadata } from "@/lib/seo";

export const metadata: Metadata = buildMetadata({
  title: "Privacy Policy | BIGThreeAstrology",
  description: "How BIGThreeAstrology handles calculator inputs, cookies, analytics, advertising, and user privacy protection. With the method explained, free and instant.",
  path: "/privacy-policy"
});

export default function PrivacyPolicyPage() {
  return (
    <div className="glass-card max-w-4xl mx-auto p-8 md:p-14 space-y-8 my-8 bg-white border-emerald-500/30">
      <div className="space-y-3">
        <div className="badge badge-emerald mb-2"> Privacy & Data Protection</div>
        <h1 className="text-3xl md:text-4xl font-display font-bold gradient-text">Privacy Policy</h1>
        <p className="text-xs text-[#075433]">Effective Date: August 5, 2026 · Last Updated: November 3, 2026</p>
      </div>

      <div className="space-y-6 text-sm text-[#2C473F] leading-relaxed">
        <section className="space-y-2">
          <h2 className="text-xl font-display font-semibold text-[#042F2A]">1. Overview & Commitment</h2>
          <p>
            BIGThreeAstrology ("we", "our", or "us") operates the website <strong>https://bigthreeastrology.online</strong>. We are committed to safeguarding the privacy of our visitors. This Privacy Policy outlines what information is processed when you use our 100+ free astrology and numerology calculators.
          </p>
        </section>

        <section className="space-y-2">
          <h2 className="text-xl font-display font-semibold text-[#042F2A]">2. Calculator Input Processing</h2>
          <p>
            When you enter birth details (such as birth date, time, or location) or names into our calculators (Big Three, Kundali Milan, Choghadia, Numerology, etc.), these inputs are processed locally in your web browser or in temporary server memory solely to generate your results. We <strong>do not sell or monetize your personal birth chart inputs</strong> to third parties.
          </p>
        </section>

        <section className="space-y-2">
          <h2 className="text-xl font-display font-semibold text-[#042F2A]">3. Cookies & Local Storage</h2>
          <p>
            Our website uses browser LocalStorage and cookies to remember your calculator preferences (such as Western vs Vedic toggles or active tool tabs) to enhance your browsing experience. If you sign in to an account, a secure session cookie is also used to keep you signed in. You can clear cookies and local storage through your browser settings at any time. Cookies set by Google and its advertising partners are described in Section 5 below.
          </p>
        </section>

        <section className="space-y-2">
          <h2 className="text-xl font-display font-semibold text-[#042F2A]">4. Analytics</h2>
          <p>
            We may use analytics tools (such as Google Analytics) to understand aggregate traffic patterns — for example, which calculators are used most — so we can improve the site. Analytics tools may place cookies on your device to distinguish one visit from another. We do not use analytics to identify individual visitors, and we do not sell personal data.
          </p>
        </section>

        <section className="space-y-2">
          <h2 className="text-xl font-display font-semibold text-[#042F2A]">5. Advertising & Cookies (Google AdSense)</h2>
          <p>
            We show advertising through Google AdSense so that our calculators can remain free for everyone. This section explains how advertising cookies work on this website:
          </p>
          <p>
            <strong>Third-party vendors, including Google, use cookies to serve ads based on your prior visits to this website or other websites.</strong>
          </p>
          <p>
            Google&apos;s use of advertising cookies — including the DoubleClick (DART) cookie — enables Google and its partners to serve personalised ads to you based on your visits to this site and/or other sites on the Internet.
          </p>
          <p>
            You may opt out of personalised advertising at any time by visiting{" "}
            <a href="https://adssettings.google.com" target="_blank" rel="noopener noreferrer" className="text-[#075433] font-semibold hover:underline">Google Ads Settings</a>
            . You can also opt out of some third-party vendors&apos; use of cookies for personalised advertising at{" "}
            <a href="https://www.aboutads.info/choices/" target="_blank" rel="noopener noreferrer" className="text-[#075433] font-semibold hover:underline">www.aboutads.info/choices</a>
            {" "}(in Europe:{" "}
            <a href="https://www.youronlinechoices.eu" target="_blank" rel="noopener noreferrer" className="text-[#075433] font-semibold hover:underline">www.youronlinechoices.eu</a>
            ).
          </p>
          <p>
            If you opt out of personalised advertising or block cookies in your browser settings, you may still see ads on this site, but they will not be personalised using advertising cookies. We do not control the cookies set by third-party advertisers; their use of cookies is governed by their own privacy policies.
          </p>
        </section>

        <section className="space-y-2">
          <h2 className="text-xl font-display font-semibold text-[#042F2A]">6. Accounts, Astrologer Listings & Contact Emails</h2>
          <p>
            Most of this website works without an account and with no sign-up. If you register for an account (for example, as an astrologer requesting a listing), we store the details you provide — such as your name, email address and profile information — in our database so that you can sign in and so that we can review and manage listings. Passwords are stored only as cryptographic hashes, never as plain text. When you email us, we receive your email address and the contents of your message, and we use them only to respond to you. We do not sell account, listing, or contact information to third parties.
          </p>
        </section>

        <section className="space-y-2">
          <h2 className="text-xl font-display font-semibold text-[#042F2A]">7. Data Protection Rights & Inquiries</h2>
          <p>
            Depending on your jurisdiction (such as GDPR in Europe or CCPA in California), you have rights regarding your personal data processing. For privacy inquiries, data requests, or questions, please contact our Data Privacy Officer at:
          </p>
          <div className="p-4 rounded-xl bg-white border border-emerald-500/40 inline-block mt-2">
            <a href="mailto:asbusiness276@gmail.com" className="text-[#075433] font-bold hover:underline">
              asbusiness276@gmail.com
            </a>
          </div>
        </section>
      </div>
    </div>
  );
}
