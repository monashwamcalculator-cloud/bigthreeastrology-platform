import { Metadata } from "next";
import { AngelNumberCalculator } from "@/components/angel-number-calculator";
import { buildMetadata } from "@/lib/seo";

export const metadata: Metadata = buildMetadata({
  title: "Angel Number Decoder & Cosmic Frequency Guide",
  description: "Decode 111, 222, 333, 444, 555, 777, 888 angel numbers and unlock manifestation frequencies.",
  path: "/tools/angel-numbers"
});

export default function AngelNumbersPage() {
  return (
    <div className="py-8 space-y-6">
      <AngelNumberCalculator />
    </div>
  );
}
