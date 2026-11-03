import { Metadata } from "next";
import { LoveCompatibilityCalculator } from "@/components/love-compatibility";
import { buildMetadata, absoluteUrl } from "@/lib/seo";
import { ToolSections } from "@/components/tool-guide";
import { ToolPageHeader } from "@/components/tool-page-header";

export const metadata: Metadata = buildMetadata({
  title: "Zodiac Love Match & Synastry Compatibility Free | BIGThreeAstrology",
  description: "Free zodiac love compatibility calculator. Test romantic chemistry between any two signs, elemental dynamics, and advice for lasting harmony.",
  path: "/tools/love-compatibility"
});

export default function LoveCompatibilityPage() {
  const toolSchema = {
    "@context": "https://schema.org",
    "@type": "WebApplication",
    name: "BIGThreeAstrology Zodiac Love Compatibility Calculator",
    applicationCategory: "LifestyleApplication",
    operatingSystem: "All",
    url: absoluteUrl("/tools/love-compatibility"),
    description: "Check astrological love compatibility between any two zodiac signs."
  };

  return (
    <div className="space-y-10 py-8">
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(toolSchema) }} />
      
      <ToolPageHeader slug="love-compatibility" title="Zodiac Love Matcher" intro="Discover the cosmic chemistry, elemental synergy, and relationship potential between you and your partner." />

      <LoveCompatibilityCalculator />
      <ToolSections slug="love-compatibility" />

      <section className="glass-card p-8 prose max-w-none prose-headings:font-display prose-headings:gradient-text prose-p:text-cosmic-200">
        <h2>How Zodiac Love Compatibility Works</h2>
        <p>
          Astrological relationship compatibility (known as **Synastry**) analyzes the interplay between two people's birth charts. The fundamental foundation rests upon **Elemental Harmony**:
        </p>

        <ul>
          <li><strong>Fire + Air (Aries, Leo, Sag + Gemini, Libra, Aqua):</strong> Passionate, inspiring, and full of mutual enthusiasm.</li>
          <li><strong>Earth + Water (Taurus, Virgo, Cap + Cancer, Scorpio, Pisces):</strong> Deeply grounding, emotionally supportive, and enduring.</li>
          <li><strong>Fire + Fire / Earth + Earth / Air + Air / Water + Water:</strong> High intrinsic understanding and shared lifestyle rhythm.</li>
        </ul>

        <h3>Beyond Sun Signs</h3>
        <p>
          For the most profound compatibility analysis, combine your Sun sign match with your **Moon sign** (emotional compatibility) and **Rising sign** (lifestyle pacing).
        </p>
      </section>
    </div>
  );
}
