import { Metadata } from "next";
import { KundaliMilanCalculator } from "@/components/kundali-milan";
import { buildMetadata, absoluteUrl } from "@/lib/seo";

export const metadata: Metadata = buildMetadata({
  title: "Free Vedic Kundali Matching by Date of Birth & Time | 36 Guna Milan",
  description: "Check authentic Vedic Kundali Matching (Horoscope Match) for marriage. Calculate 36 Ashta Koota Guna Milan score between Boy and Girl with date, time, and birth place.",
  path: "/tools/kundali-milan"
});

export default function KundaliMilanPage() {
  const toolSchema = {
    "@context": "https://schema.org",
    "@type": "WebApplication",
    name: "BIGThreeAstrology Free Kundali Matching",
    applicationCategory: "LifestyleApplication",
    operatingSystem: "All",
    url: absoluteUrl("/tools/kundali-milan"),
    description: "Vedic Horoscope Kundali Matching calculator using Ashta Koota 36 Gunas system."
  };

  return (
    <div className="container-main space-y-10 py-8">
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(toolSchema) }} />
      
      <div className="text-center space-y-4 max-w-3xl mx-auto">
        <h1 className="text-4xl md:text-5xl font-display font-bold">
          Free Vedic <span className="gradient-text-gold">Kundali Matching</span>
        </h1>
        <p className="text-cosmic-200 text-lg">
          Check authentic Horoscope Match (Patrika Milan) for marriage using exact Date of Birth, Time, and Birth Place.
        </p>
      </div>

      <KundaliMilanCalculator />

      <section className="glass-card p-8 prose prose-invert max-w-none prose-headings:font-display prose-headings:gradient-text prose-p:text-cosmic-200">
        <h2>What Is Vedic Kundali Matching (Guna Milan)?</h2>
        <p>
          In Vedic Astrology (Jyotish), **Kundali Matching** (or Patrika Milan) is the ancient method of testing matrimonial compatibility between a Bride and Groom based on their natal Moon Nakshatras and Rashis at birth.
        </p>

        <h3>The 8 Kootas in 36 Guna Milan System</h3>
        <p>
          The **Ashta Koota** framework evaluates 8 distinct dimensions of relationship longevity and marital bliss (totaling 36 Points or Gunas):
        </p>

        <ol>
          <li><strong>Varna Koota (1 Point):</strong> Ego alignment & spiritual harmony.</li>
          <li><strong>Vashya Koota (2 Points):</strong> Mutual dominance and magnetic attraction.</li>
          <li><strong>Tara Koota (3 Points):</strong> Health, longevity, and mutual destiny.</li>
          <li><strong>Yoni Koota (4 Points):</strong> Intimate chemistry & physical compatibility.</li>
          <li><strong>Graha Maitri (5 Points):</strong> Psychological friendship & emotional resonance.</li>
          <li><strong>Gana Koota (6 Points):</strong> Temperament matching (Deva, Manushya, or Rakshasa).</li>
          <li><strong>Bhakoot Koota (7 Points):</strong> Family prosperity, financial growth, and love.</li>
          <li><strong>Nadi Koota (8 Points):</strong> Genetic compatibility, health, and progeny.</li>
        </ol>

        <h3>Understanding Your Score</h3>
        <ul>
          <li><strong>28 to 36 Gunas:</strong> Highly Auspicious / Excellent Match (Uttam)</li>
          <li><strong>18 to 27 Gunas:</strong> Good & Compatible Match (Madhyam)</li>
          <li><strong>Below 18 Gunas:</strong> Requires Astrological Consultation & Remedies</li>
        </ul>
      </section>
    </div>
  );
}
