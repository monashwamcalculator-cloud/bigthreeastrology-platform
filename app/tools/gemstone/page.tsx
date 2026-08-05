import { Metadata } from "next";
import { GemstoneFinder } from "@/components/gemstone-finder";
import { buildMetadata } from "@/lib/seo";

export const metadata: Metadata = buildMetadata({
  title: "Gemstone & Remedy Finder | Vedic Ratna & Mantras",
  description: "Discover your favorable Vedic gemstones (Ratna), setting metals, and planetary mantras based on your sign.",
  path: "/tools/gemstone"
});

export default function GemstonePage() {
  return (
    <div className="py-8 space-y-6">
      <GemstoneFinder />
    </div>
  );
}
