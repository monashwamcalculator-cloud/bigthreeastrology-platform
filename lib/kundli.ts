/**
 * kundli.ts — Janam Kundli (Vedic birth chart) computation for
 * BIGThreeAstrology, built entirely on lib/astro-engine.ts.
 *
 * Everything here is sidereal (Lahiri ayanamsa, exactly as the engine's
 * toSidereal implements it) with whole-sign houses counted from the Lagna,
 * the standard Parashari Rashi-chart method. Positions are astronomical
 * approximations (see the engine header for accuracies) — sign and
 * nakshatra level, not arc-minute ephemeris work.
 *
 * Grahas: Sun, Moon, Mars, Mercury, Jupiter, Venus, Saturn, plus Rahu
 * (Moon's mean ascending node) and Ketu (always exactly opposite Rahu).
 */

import {
  ascendant,
  jupiterLongitude,
  lahiriAyanamsa,
  marsLongitude,
  meanNodeLongitude,
  mercuryLongitude,
  moonLongitude,
  nakshatraOf,
  saturnLongitude,
  signOf,
  sunLongitude,
  toSidereal,
  venusLongitude,
} from "@/lib/astro-engine";

function rev(x: number): number {
  return x - Math.floor(x / 360) * 360;
}

export type GrahaKey =
  | "lagna"
  | "sun"
  | "moon"
  | "mars"
  | "mercury"
  | "jupiter"
  | "venus"
  | "saturn"
  | "rahu"
  | "ketu";

export interface GrahaPlacement {
  key: GrahaKey;
  name: string;
  /** Short label used inside the chart cells, e.g. "Su", "Mo", "As". */
  abbr: string;
  /** Sidereal ecliptic longitude, 0–360. */
  longitude: number;
  sign: string;
  signIndex: number;
  /** Degrees within the sign, 0–30. */
  degreeInSign: number;
  /** Whole-sign house counted from the Lagna (1–12). Lagna itself is house 1. */
  house: number;
  nakshatra: string;
  pada: number;
}

export interface KundliChart {
  /** The Lagna placement (house is always 1). */
  lagna: GrahaPlacement;
  /** The nine grahas in traditional order: Sun, Moon, Mars, Mercury, Jupiter, Venus, Saturn, Rahu, Ketu. */
  grahas: GrahaPlacement[];
  /** Convenience pointer to the Moon placement (rashi + nakshatra live here). */
  moon: GrahaPlacement;
  /** Lahiri ayanamsa applied, in degrees. */
  ayanamsa: number;
}

function placement(
  key: GrahaKey,
  name: string,
  abbr: string,
  siderealLon: number,
  lagnaSignIndex: number
): GrahaPlacement {
  const s = signOf(siderealLon);
  const nak = nakshatraOf(siderealLon);
  return {
    key,
    name,
    abbr,
    longitude: rev(siderealLon),
    sign: s.name,
    signIndex: s.index,
    degreeInSign: s.degreeInSign,
    house: ((s.index - lagnaSignIndex + 12) % 12) + 1,
    nakshatra: nak.name,
    pada: nak.pada,
  };
}

/**
 * Compute the full sidereal kundli for a birth moment and place.
 * `utcDate` is the birth moment as a JS Date (UTC); lat/lon in degrees
 * (east positive), exactly as the engine's ascendant() expects.
 */
export function computeKundli(utcDate: Date, lat: number, lon: number): KundliChart {
  const sid = (tropicalLon: number) => toSidereal(tropicalLon, utcDate);

  const lagnaLon = sid(ascendant(utcDate, lat, lon));
  const lagnaSignIndex = signOf(lagnaLon).index;

  const rahuLon = sid(meanNodeLongitude(utcDate));
  const ketuLon = rev(rahuLon + 180);

  const lagna = placement("lagna", "Lagna (Ascendant)", "As", lagnaLon, lagnaSignIndex);

  const grahas = [
    placement("sun", "Sun", "Su", sid(sunLongitude(utcDate)), lagnaSignIndex),
    placement("moon", "Moon", "Mo", sid(moonLongitude(utcDate)), lagnaSignIndex),
    placement("mars", "Mars", "Ma", sid(marsLongitude(utcDate)), lagnaSignIndex),
    placement("mercury", "Mercury", "Me", sid(mercuryLongitude(utcDate)), lagnaSignIndex),
    placement("jupiter", "Jupiter", "Ju", sid(jupiterLongitude(utcDate)), lagnaSignIndex),
    placement("venus", "Venus", "Ve", sid(venusLongitude(utcDate)), lagnaSignIndex),
    placement("saturn", "Saturn", "Sa", sid(saturnLongitude(utcDate)), lagnaSignIndex),
    placement("rahu", "Rahu", "Ra", rahuLon, lagnaSignIndex),
    placement("ketu", "Ketu", "Ke", ketuLon, lagnaSignIndex),
  ];

  return {
    lagna,
    grahas,
    moon: grahas[1],
    ayanamsa: lahiriAyanamsa(utcDate),
  };
}

/** Format a degree-in-sign as e.g. 14°32′ for display. */
export function formatDegree(degreeInSign: number): string {
  const deg = Math.floor(degreeInSign);
  const min = Math.floor((degreeInSign - deg) * 60);
  return `${deg}°${String(min).padStart(2, "0")}′`;
}
