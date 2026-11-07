import Link from "next/link";
import { MASTER_TOOLS_LIST, type ToolDefinition } from "@/lib/all-tools-registry";
import { BLOG_INDEX } from "@/lib/blog-index";
import { CosmicIcon } from "@/components/cosmic-icons";

/**
 * Related-tools linking module (added 2 Nov 2026, 10/10 programme Phase A1).
 *
 * Every tool page renders this module. Related tools are picked as the next
 * six tools in the same category, wrapping around the category list — a
 * circular selection, so every tool in a category also RECEIVES links from
 * six same-category peers. Together with the /tools hub link, that gives
 * every tool at least 7 internal links (audit 2 Nov 2026 found 60 tools
 * with exactly 1 inlink). Where a matching in-depth blog guide exists, it
 * is linked too, so guides and calculators support each other both ways.
 */
export function getRelatedTools(tool: ToolDefinition, count = 6): ToolDefinition[] {
  const peers = MASTER_TOOLS_LIST.filter((t) => t.category === tool.category);
  if (peers.length <= 1) return [];
  const idx = peers.findIndex((t) => t.slug === tool.slug);
  const out: ToolDefinition[] = [];
  for (let i = 1; i <= count && i < peers.length; i++) {
    out.push(peers[(idx + i) % peers.length]);
  }
  return out;
}

const BLOG_OVERRIDES: Record<string, string[]> = {
  "lifepath-compatibility": ["life-path-number-compatibility-guide"],
  "destiny-number": ["life-path-number-compatibility-guide"],
  numerology: ["life-path-number-compatibility-guide"],
  "spouse-predictor": [
    "spouse-appearance-astrology-guide",
    "future-spouse-prediction-vedic-astrology",
  ],
  "black-moon-lilith": ["lilith-sign-meaning-shadow-independence-authenticity"],
  // Sun-sign cluster (blogs 38-40, 7 Nov 2026): rail otherwise shows the
  // 31 Oct guide + a moon-sign post, and none of the new cluster blogs.
  "sun-sign": [
    "sun-sign-reading-element-modality-work-love",
    "sun-sign-cusp-dates-why-dates-shift",
  ],
};

export function getRelatedBlogSlugs(tool: ToolDefinition): string[] {
  if (tool.slug in BLOG_OVERRIDES) return BLOG_OVERRIDES[tool.slug];
  const key = tool.slug.replace(/-/g, "");
  return BLOG_INDEX.filter((p) =>
    p.slug.replace(/-/g, "").includes(key)
  )
    .map((p) => p.slug)
    .slice(0, 2);
}

export function RelatedTools({ tool }: { tool: ToolDefinition }) {
  const related = getRelatedTools(tool);
  const blogSlugs = getRelatedBlogSlugs(tool);
  const blogs = blogSlugs
    .map((slug) => BLOG_INDEX.find((p) => p.slug === slug))
    .filter((p): p is NonNullable<typeof p> => Boolean(p));

  if (related.length === 0 && blogs.length === 0) return null;

  return (
    <section className="max-w-4xl mx-auto">
      <h3 className="text-xl font-display font-bold text-center text-[#16402b] mb-4">
        Related Calculators
      </h3>
      <div className="grid grid-cols-2 md:grid-cols-3 gap-3">
        {related.map((rel) => (
          <Link
            key={rel.slug}
            href={`/tools/${rel.slug}`}
            className="glass-card-hover p-4 rounded-xl flex flex-col items-center text-center group"
          >
            <span className="w-10 h-10 rounded-full bg-[#eaf1e6] border border-[#cfe0cb] flex items-center justify-center mb-2">
              <CosmicIcon name={rel.slug} className="w-5 h-5" />
            </span>
            <span className="text-xs font-display font-bold text-[#1e2b22] group-hover:text-[#256b42] transition-colors">
              {rel.name}
            </span>
            <span className="text-[11px] text-[#52796f] mt-1 leading-snug">
              {rel.shortDesc}
            </span>
          </Link>
        ))}
      </div>

      {blogs.length > 0 && (
        <div className="mt-5 glass-card p-5 rounded-xl">
          <h4 className="text-sm font-display font-bold text-[#16402b] mb-2">
            Go Deeper: Read the Guide
          </h4>
          <ul className="space-y-1.5">
            {blogs.map((post) => (
              <li key={post.slug}>
                <Link
                  href={`/blog/${post.slug}`}
                  className="text-sm text-[#256b42] underline decoration-[#a9ead1] underline-offset-2 hover:text-[#16402b]"
                >
                  {post.title}
                </Link>
              </li>
            ))}
          </ul>
        </div>
      )}
    </section>
  );
}
