import { Metadata } from "next";
import { NakshatraFinder } from "@/components/nakshatra-finder";
import { buildMetadata } from "@/lib/seo";

export const metadata: Metadata = buildMetadata({
  title: "Birth Star (Nakshatra) Finder | 27 Vedic Stars & Deities",
  description: "Find your birth star Nakshatra out of 27 lunar mansions, including Pada 1-4, Ruling Deity, and Dasha Lord.",
  path: "/tools/nakshatra"
});

export default function NakshatraPage() {
  return (
    <div className="py-8 space-y-6">
      <NakshatraFinder />
    </div>
  );
}
