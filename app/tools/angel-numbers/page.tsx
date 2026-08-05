import { Metadata } from "next";
import { AngelNumberCalculator } from "@/components/angel-number-calculator";
import { ToolSchema } from "@/components/tool-schema";
import { buildMetadata } from "@/lib/seo";

export const metadata: Metadata = buildMetadata({
  title: "Angel Number Decoder & Cosmic Frequency Guide",
  description: "Decode 111, 222, 333, 444, 555, 777, 888 angel numbers and unlock manifestation frequencies.",
  path: "/tools/angel-numbers"
});

export default function AngelNumbersPage() {
  return (
    <div className="py-6 space-y-6">
      <ToolSchema
        name="Angel Number Decoder & Frequency Guide"
        description="Decode 111, 222, 333, 444, 555, 777, 888 angel numbers and unlock manifestation frequencies."
        path="/tools/angel-numbers"
        faqs={[
          {
            question: "What are Angel Numbers?",
            answer: "Angel numbers are repeating number sequences (111, 444, 777, etc.) that convey spiritual guidance and Solfeggio frequency alignment."
          }
        ]}
      />
      <AngelNumberCalculator />
    </div>
  );
}
