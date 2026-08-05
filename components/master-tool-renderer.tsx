"use client";

import Link from "next/link";
import { ToolDefinition } from "@/lib/all-tools-registry";
import { ToolSchema } from "@/components/tool-schema";

// Import existing custom interactive components
import { BigThreeCalculator } from "@/components/calculator";
import { KundaliMilanCalculator } from "@/components/kundali-milan";
import { LoveCompatibilityCalculator } from "@/components/love-compatibility";
import { NumerologyCalculator } from "@/components/numerology-calculator";
import { DailyHoroscope } from "@/components/daily-horoscope";
import { TarotReader } from "@/components/tarot-reader";
import { GemstoneFinder } from "@/components/gemstone-finder";
import { NakshatraFinder } from "@/components/nakshatra-finder";
import { RahuKaalTracker } from "@/components/rahu-kaal";
import { VenusCalculator } from "@/components/venus-calculator";
import { MercuryCalculator } from "@/components/mercury-calculator";
import { ChironCalculator } from "@/components/chiron-calculator";
import { ChoghadiaCalculator } from "@/components/choghadia-calculator";
import { SadeSatiChecker } from "@/components/sade-sati-checker";
import { BrandNumerologyCalculator } from "@/components/brand-numerology";
import { KundaliHouseCalculator } from "@/components/kundali-house-calculator";
import { SpousePredictor } from "@/components/spouse-predictor";
import { DashaCalculator } from "@/components/dasha-calculator";
import { NorthNodeCalculator } from "@/components/north-node-calculator";
import { AngelNumberCalculator } from "@/components/angel-number-calculator";
import { SoulmateInitialsCalculator } from "@/components/soulmate-initials";
import { LifePathCompatibilityCalculator } from "@/components/life-path-compatibility";
import { SaturnReturnCalculator } from "@/components/saturn-return-calculator";
import { RisingSignCalculator } from "@/components/rising-sign-calculator";
import { JupiterTransitCalculator } from "@/components/jupiter-transit-calculator";
import { MarsSignCalculator } from "@/components/mars-sign-calculator";
import { DestinyNumberCalculator } from "@/components/destiny-number-calculator";
import { MoonPhaseCalculator } from "@/components/moon-phase-calculator";
import { GenericAstrologyCalculator } from "@/components/generic-astrology-calculator";

type MasterToolRendererProps = {
  tool: ToolDefinition;
};

export function MasterToolRenderer({ tool }: MasterToolRendererProps) {
  // Render specific interactive component if built, or rich generic interactive calculator
  const renderInteractiveCalculator = () => {
    switch (tool.slug) {
      case "big-three": return <BigThreeCalculator />;
      case "spouse-predictor": return <SpousePredictor />;
      case "soulmate-initials": return <SoulmateInitialsCalculator />;
      case "rising-sign": return <RisingSignCalculator />;
      case "mars-sign": return <MarsSignCalculator />;
      case "venus-sign": return <VenusCalculator />;
      case "mercury-sign": return <MercuryCalculator />;
      case "chiron": return <ChironCalculator />;
      case "nakshatra": return <NakshatraFinder />;
      case "kundali-milan": return <KundaliMilanCalculator />;
      case "dasha-calculator": return <DashaCalculator />;
      case "jupiter-transit": return <JupiterTransitCalculator />;
      case "choghadia": return <ChoghadiaCalculator />;
      case "sade-sati": return <SadeSatiChecker />;
      case "saturn-return": return <SaturnReturnCalculator />;
      case "kundali-houses": return <KundaliHouseCalculator />;
      case "love-compatibility": return <LoveCompatibilityCalculator />;
      case "gemstone": return <GemstoneFinder />;
      case "rahu-kaal": return <RahuKaalTracker />;
      case "numerology": return <NumerologyCalculator />;
      case "destiny-number": return <DestinyNumberCalculator />;
      case "lifepath-compatibility": return <LifePathCompatibilityCalculator />;
      case "brand-numerology": return <BrandNumerologyCalculator />;
      case "angel-numbers": return <AngelNumberCalculator />;
      case "horoscope": return <DailyHoroscope />;
      case "moon-phase": return <MoonPhaseCalculator />;
      case "tarot": return <TarotReader />;
      case "north-node": return <NorthNodeCalculator />;
      default: return <GenericAstrologyCalculator tool={tool} />;
    }
  };

  return (
    <div className="space-y-8 py-4 md:py-6">
      {/* Schema.org Structured Data */}
      <ToolSchema
        name={tool.name}
        description={tool.metaDesc}
        path={`/tools/${tool.slug}`}
        faqs={tool.faqs}
      />

      {/* Interactive Tool Header & Calculator */}
      <div>
        <div className="text-center mb-4">
          <div className="badge badge-gold mb-2">{tool.badge}</div>
          <h1 className="font-display text-3xl sm:text-4xl md:text-5xl font-extrabold text-white tracking-tight mb-2">
            {tool.name}
          </h1>
          <p className="text-sky-200 text-xs sm:text-sm max-w-xl mx-auto">
            {tool.shortDesc}
          </p>
        </div>

        {renderInteractiveCalculator()}
      </div>

      {/* Full-Page Rich Educational Guide & Explanation */}
      <section className="glass-card p-5 sm:p-8 prose prose-invert max-w-4xl mx-auto rounded-2xl bg-black/60 border-sky-500/30 space-y-4">
        <h2 className="text-xl sm:text-2xl font-display font-bold gradient-text">
          {tool.educationalTitle}
        </h2>
        <p className="text-xs sm:text-sm text-sky-100/90 leading-relaxed">
          {tool.educationalContent}
        </p>

        <div className="border-t border-sky-500/20 pt-4 mt-4">
          <h3 className="text-base font-semibold text-amber-300 mb-2">Why Use This Tool?</h3>
          <ul className="list-disc pl-5 text-xs sm:text-sm text-sky-200/90 space-y-1">
            <li>100% Free calculation with zero account registration required.</li>
            <li>Precision algorithms cross-referencing authentic Vedic & Western astronomical placements.</li>
            <li>Instant actionable remedies, timing windows, and personalized guidance.</li>
          </ul>
        </div>
      </section>

      {/* Frequently Asked Questions */}
      {tool.faqs && tool.faqs.length > 0 && (
        <section className="max-w-4xl mx-auto">
          <h3 className="text-xl font-display font-bold text-center text-white mb-4">
            Frequently Asked Questions 🔮
          </h3>
          <div className="grid gap-3">
            {tool.faqs.map((faq, idx) => (
              <div key={idx} className="glass-card-hover p-4 rounded-xl border border-sky-500/20 bg-black/40">
                <h4 className="text-sm font-semibold text-amber-300 mb-1 flex items-start gap-2">
                  <span>✨</span> {faq.question}
                </h4>
                <p className="text-sky-100 text-xs sm:text-sm pl-6 leading-relaxed">
                  {faq.answer}
                </p>
              </div>
            ))}
          </div>
        </section>
      )}

      {/* CTA Navigation Banner */}
      <div className="text-center pt-2">
        <Link href="/tools/big-three" className="btn-glow px-6 py-2.5 text-xs sm:text-sm font-bold inline-flex items-center gap-2">
          <span>✨</span> Explore All 100 Calculators & Tools
        </Link>
      </div>
    </div>
  );
}
