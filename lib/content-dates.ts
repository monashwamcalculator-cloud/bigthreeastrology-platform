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
