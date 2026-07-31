import { Metadata } from "next";
import { buildMetadata } from "@/lib/seo";

export const metadata: Metadata = buildMetadata({
  title: "Terms and Conditions | BIGThreeAstrology",
  description: "Terms governing use of BIGThreeAstrology tools, content, accounts, and listings.",
  path: "/terms-and-conditions"
});

export default function TermsPage() {
  return (
    <div className="prose prose-invert max-w-3xl">
      <h1>Terms and Conditions</h1>
      <p>
        By accessing or using BIGThreeAstrology, you agree to these Terms and Conditions. If you do not agree, please do not use the platform. These
        terms apply to all features, including calculator tools, blog content, account dashboards, astrologer listings, and inquiry forms.
      </p>
      <p>
        You agree to use the platform lawfully, respectfully, and with accurate information. Account owners are responsible for maintaining secure login
        credentials and for all activity under their account. You must not impersonate another person, submit misleading service claims, scrape private
        data, or attempt to disrupt site operations.
      </p>
      <h2>Content and Service Scope</h2>
      <p>
        Astrology content on this platform is provided for educational, reflective, and entertainment purposes. It does not constitute medical, legal,
        financial, or psychological advice. Users should consult qualified professionals for those domains. BIGThreeAstrology provides access tools and
        discovery infrastructure; it does not guarantee specific personal outcomes from reading content or consulting a listed astrologer.
      </p>
      <p>
        Blog publishing workflows are intentionally simple to support stable editorial operations. Editors and admins are responsible for ensuring that
        published material is accurate, readable, and compliant with applicable law. We may moderate, unpublish, or remove content that violates policy
        or creates legal risk.
      </p>
      <h2>Listing and Dashboard Responsibilities</h2>
      <p>
        Astrologer listing owners must keep profile details current. The platform may send reminder emails at regular intervals. Listings that are not
        refreshed within the configured threshold may be marked non-indexable and removed from public indexable listing pages until updated through the
        owner dashboard. This process helps maintain search quality and user trust.
      </p>
      <h2>Limitation of Liability</h2>
      <p>
        To the fullest extent permitted by law, BIGThreeAstrology is not liable for indirect, incidental, special, or consequential damages arising from
        use of the platform. We provide the service on an "as available" basis and do not warrant uninterrupted operation or error-free access.
      </p>
      <p>
        We may update these terms over time to reflect product changes, legal updates, or safety requirements. Continued use after updates indicates
        acceptance of revised terms.
      </p>
    </div>
  );
}
