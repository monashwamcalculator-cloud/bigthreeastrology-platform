import { Metadata } from "next";
import { NumerologyCalculator } from "@/components/numerology-calculator";
import { buildMetadata, absoluteUrl } from "@/lib/seo";

export const metadata: Metadata = buildMetadata({
  title: "Free Life Path & Expression Numerology Calculator | BIGThreeAstrology",
  description: "Calculate your Life Path Number and Name Expression Number free. Discover your innate destiny, career strengths, and core personality traits.",
  path: "/tools/numerology"
});

export default function NumerologyPage() {
  const toolSchema = {
    "@context": "https://schema.org",
    "@type": "WebApplication",
    name: "BIGThreeAstrology Life Path Numerology Calculator",
    applicationCategory: "LifestyleApplication",
    operatingSystem: "All",
    url: absoluteUrl("/tools/numerology"),
    description: "Calculate your numerology Life Path Number and Expression Number with comprehensive interpretation."
  };

  return (
    <div className="container-main space-y-10 py-8">
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(toolSchema) }} />
      
      <div className="text-center space-y-4 max-w-3xl mx-auto">
        <h1 className="text-4xl md:text-5xl font-display font-bold">
          Free <span className="gradient-text-gold">Numerology Calculator</span>
        </h1>
        <p className="text-cosmic-200 text-lg">
          Uncover the hidden mathematical frequencies governing your life path, character, and destiny.
        </p>
      </div>

      <NumerologyCalculator />

      <section className="glass-card p-8 prose prose-invert max-w-none prose-headings:font-display prose-headings:gradient-text prose-p:text-cosmic-200">
        <h2>What Is a Life Path Number in Numerology?</h2>
        <p>
          In numerology, your **Life Path Number** is considered the single most significant number in your entire birth chart. It acts as a compass, outlining your overarching life purpose, key traits, inherent strengths, and the major lessons you will encounter throughout your lifetime.
        </p>

        <h3>How Is the Life Path Number Calculated?</h3>
        <p>
          Your Life Path Number is derived by adding together all the digits of your full birth date (Month, Day, and Year) and reducing them down to a single digit between 1 and 9. The only exceptions are the Master Numbers: **11, 22, and 33**, which possess elevated spiritual frequencies and are kept intact.
        </p>

        <h3>What Is Name Expression Numerology?</h3>
        <p>
          While your Life Path Number reveals your innate trajectory, your **Expression Number** (calculated from the letters of your full birth name using the Pythagorean alphabet scale) represents how you communicate your talents and project your energy outward into society.
        </p>
      </section>
    </div>
  );
}
