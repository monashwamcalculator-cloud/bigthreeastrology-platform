import { Metadata } from "next";
import { RahuKaalTracker } from "@/components/rahu-kaal";
import { buildMetadata } from "@/lib/seo";

export const metadata: Metadata = buildMetadata({
  title: "Daily Rahu Kaal & Shubh Muhurat Tracker",
  description: "Check daily Rahu Kaal windows to avoid inauspicious timing for major investments or decisions.",
  path: "/tools/rahu-kaal"
});

export default function RahuKaalPage() {
  return (
    <div className="py-8 space-y-6">
      <RahuKaalTracker />
    </div>
  );
}
