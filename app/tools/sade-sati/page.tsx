import { Metadata } from "next";
import { SadeSatiChecker } from "@/components/sade-sati-checker";
import { buildMetadata } from "@/lib/seo";

export const metadata: Metadata = buildMetadata({
  title: "Sade Sati Phase Checker & Saturn Remedies",
  description: "Check your Moon Sign for Shani Sade Sati transit phase and unlock authentic Vedic remedies.",
  path: "/tools/sade-sati"
});

export default function SadeSatiPage() {
  return (
    <div className="py-8 space-y-6">
      <SadeSatiChecker />
    </div>
  );
}
