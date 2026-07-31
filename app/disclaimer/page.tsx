import { Metadata } from "next";
import { buildMetadata } from "@/lib/seo";

export const metadata: Metadata = buildMetadata({
  title: "Disclaimer | BIGThreeAstrology",
  description: "Important disclaimer for astrology tools, content, and third-party listings.",
  path: "/disclaimer"
});

export default function DisclaimerPage() {
  return (
    <div className="prose prose-invert max-w-3xl">
      <h1>Disclaimer</h1>
      <p>
        Content and tools on BIGThreeAstrology are intended for educational, personal reflection, and entertainment use. Astrology can be useful for
        introspection and communication, but it should not be interpreted as deterministic fact or guaranteed prediction. Individual outcomes vary.
      </p>
      <p>
        Calculator outputs are directional interpretations based on user-provided information. Accuracy depends on input quality, especially birth time.
        The tool is not a substitute for professional chart consultation, medical care, legal guidance, or financial planning.
      </p>
      <p>
        Third-party astrologer listings are provided as a discovery marketplace. BIGThreeAstrology does not independently verify every claim related to
        credentials, pricing outcomes, or service promises. Users should evaluate providers carefully, ask clarifying questions, and exercise personal
        judgment before purchasing services.
      </p>
    </div>
  );
}
