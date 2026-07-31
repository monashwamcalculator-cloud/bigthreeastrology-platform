import { Metadata } from "next";
import { buildMetadata } from "@/lib/seo";

export const metadata: Metadata = buildMetadata({
  title: "Privacy Policy | BIGThreeAstrology",
  description: "How BIGThreeAstrology handles account, listing, inquiry, and analytics data.",
  path: "/privacy-policy"
});

export default function PrivacyPolicyPage() {
  return (
    <div className="prose prose-invert max-w-3xl">
      <h1>Privacy Policy</h1>
      <p>
        This Privacy Policy explains what data BIGThreeAstrology collects, why we collect it, how we use it, and what choices you have. The platform
        includes a calculator experience, blog content, account login, astrologer listings, and inquiry forms. Each feature requires different data
        types to work properly. We keep data collection proportional to function and avoid unnecessary tracking.
      </p>
      <p>
        Account registration may include name, email address, encrypted password, role, and related authentication metadata. Astrologer listings may
        include public business-facing details such as profile name, service description, contact channels, city, and pricing format. Inquiry forms may
        include visitor-provided name, email, phone, and message so astrologers can respond. We process these details to deliver the services users
        explicitly request.
      </p>
      <h2>Data Usage and Retention</h2>
      <p>
        We use account data for login security, dashboard access, role-based permissions, and communication related to service operations. Listing data
        is used to publish profiles, build city discovery pages, and maintain search quality. We send operational emails such as signup confirmations,
        listing confirmation notices, and periodic listing update reminders to keep directory information accurate. We do not sell personal information.
      </p>
      <p>
        We retain data for as long as it is needed to provide services, comply with legal obligations, resolve disputes, and enforce platform terms.
        If a user requests account deletion, we review the request and remove or anonymize data where legally and operationally appropriate.
      </p>
      <h2>Cookies, Analytics, and Advertising</h2>
      <p>
        Cookies may be used for session continuity, authentication state, and basic measurement. If ad technology is enabled, ad-related cookies may be
        used according to provider policies. You can control many cookie preferences through browser settings, though disabling cookies may reduce
        functionality such as persistent login or preference memory.
      </p>
      <h2>User Rights and Contact</h2>
      <p>
        You may request access, correction, or deletion of your data by contacting support. If your request relates to a public listing, we may keep
        minimal records to preserve abuse prevention and legal compliance. For questions about this policy, email support@bigthreeastrology.com.
      </p>
    </div>
  );
}
