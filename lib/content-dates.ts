/**
 * content-dates.ts — honest, maintained content-review dates used for the
 * sitemap <lastmod> (added 2 Nov 2026, 10/10 programme Phase A2).
 *
 * Until now the sitemap stamped every URL with the build timestamp, which
 * made <lastmod> meaningless. These dates record when each page's content
 * was last substantively reviewed or enriched:
 * - Every calculator passed the full-site calculator QA + content review on
 *   29 Oct 2026 — that is the default date for tools.
 * - Tools enriched since then carry their real enrichment date below.
 * - Blog posts use their own updatedAt from lib/sample-data.ts.
 * When a tool's guide/content is next substantively edited, update its
 * entry here in the same commit.
 */

export const SITE_REVIEW_DATE = "2026-10-29";

export const TOOL_UPDATED_AT: Record<string, string> = {
  "moon-phase": "2026-10-30",
  "angel-numbers": "2026-11-02",
  "kundali-milan": "2026-11-02",
  // Phase B enrichment batch 1 (2 Nov 2026)
  "neptune-sign": "2026-11-02",
  "saturn-sign": "2026-11-02",
  "pluto-sign": "2026-11-02",
  "uranus-sign": "2026-11-02",
  "friendship-compatibility": "2026-11-02",
  "personal-month": "2026-11-02",
  "challenge-numbers": "2026-11-02",
  "venus-mars-synastry": "2026-11-02",
  // Phase B enrichment batches 2-3 (2 Nov 2026)
  "jupiter-transit": "2026-11-02",
  "communication-compatibility": "2026-11-02",
  "intimacy-compatibility": "2026-11-02",
  "juno": "2026-11-02",
  "nordic-runes": "2026-11-02",
  "soul-contract": "2026-11-02",
  "crystal-matcher": "2026-11-02",
  "pinnacle-cycles": "2026-11-02",
  "amatyakaraka": "2026-11-02",
  "business-partner-compatibility": "2026-11-02",
  "love-tarot": "2026-11-02",
  "soulmate-initials": "2026-11-02",
  "elemental-compatibility": "2026-11-02",
  "parent-child-astrology": "2026-11-02",
  "spirit-animal": "2026-11-02",
  "gemstone": "2026-11-02",
  // Phase B enrichment batches 4-5 + GSC striking-distance pulls (2 Nov 2026)
  "vertex": "2026-11-02",
  "horoscope": "2026-11-02",
  "in-laws-compatibility": "2026-11-02",
  "pitra-dosha": "2026-11-02",
  "career-tarot": "2026-11-02",
  "composite-chart": "2026-11-02",
  "breakup-recovery": "2026-11-02",
  "shani-dhaiya": "2026-11-02",
  "vehicle-numerology": "2026-11-02",
  "aura-color": "2026-11-02",
  "daily-panchang": "2026-11-02",
  "personal-day": "2026-11-02",
  "house-numerology": "2026-11-02",
  "jupiter-sign": "2026-11-02",
  "chakra-balance": "2026-11-02",
  "leadership-astrology": "2026-11-02",
  "dhan-yoga-calculator": "2026-11-02",
  "lifepath-compatibility": "2026-11-02",
  // Phase B enrichment batches 6-7 (2 Nov 2026)
  "shadow-work": "2026-11-02",
  "yes-no-oracle": "2026-11-02",
  "business-name-numerology": "2026-11-02",
  "atmakaraka": "2026-11-02",
  "brand-numerology": "2026-11-02",
  "financial-astrology-cycles": "2026-11-02",
  "higher-self-oracle": "2026-11-02",
  "past-life-tarot": "2026-11-02",
  "personality-number": "2026-11-02",
  "twin-flame-matcher": "2026-11-02",
  "black-moon-lilith": "2026-11-02",
  "personal-year": "2026-11-02",
  "10th-house-career": "2026-11-02",
  "baby-name-numerology": "2026-11-02",
  "karmic-relationship": "2026-11-02",
  "workplace-astrology": "2026-11-02",
};

export function toolLastModified(slug: string): Date {
  return new Date(TOOL_UPDATED_AT[slug] ?? SITE_REVIEW_DATE);
}

export const STATIC_UPDATED_AT: Record<string, string> = {
  "": "2026-10-30",
  "/tools": "2026-11-02",
  "/blog": "2026-11-02",
  "/about": "2026-11-02",
  "/author/saahil": "2026-10-29",
  "/contact": "2026-10-29",
  "/privacy-policy": "2026-10-29",
  "/terms-and-conditions": "2026-10-29",
  "/disclaimer": "2026-10-29",
};

export function staticLastModified(route: string): Date {
  return new Date(STATIC_UPDATED_AT[route] ?? SITE_REVIEW_DATE);
}
