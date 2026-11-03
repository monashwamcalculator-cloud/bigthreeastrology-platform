"use client";

import { type ToolDefinition } from "@/lib/all-tools-registry";

// Interactive calculator components (client islands). Extracted unchanged
// from the retired master-tool-renderer in Programme P1 (3 Nov 2026): the
// dynamic [slug] route is now a server shell (ToolPageHeader + this island +
// ToolSections); the slug → calculator mapping below is byte-equivalent to
// the renderer's original switch.
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

export function ToolCalculatorIsland({ tool }: { tool: ToolDefinition }) {
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
}
