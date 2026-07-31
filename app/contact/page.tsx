import { Metadata } from "next";
import { buildMetadata } from "@/lib/seo";

export const metadata: Metadata = buildMetadata({
  title: "Contact BIGThreeAstrology",
  description: "Contact support for blog publishing, listing updates, account help, and platform inquiries.",
  path: "/contact"
});

export default function ContactPage() {
  return (
    <div className="prose prose-invert max-w-3xl">
      <h1>Contact Us</h1>
      <p>
        For partnerships, support, blog publishing questions, or listing issues, email support@bigthreeastrology.com. Business response time is
        typically within one to two business days.
      </p>
      <p>
        If you are an astrologer listing owner and your profile was marked non-indexable, log in to your dashboard, update your profile details, and
        save changes. This signals freshness and restores normal listing visibility when status requirements are met.
      </p>
    </div>
  );
}
