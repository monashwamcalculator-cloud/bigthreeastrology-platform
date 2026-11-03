import { MASTER_TOOLS_LIST } from "@/lib/all-tools-registry";
import { renderOgCard } from "@/lib/og-card";

/**
 * Per-tool social card (re-audit F2): /og/tool/<slug> renders the tool's
 * registry name, category and short description as a 1200x630 PNG.
 * Referenced from every tool page's metadata via buildMetadata (lib/seo.ts).
 */
export function GET(_request: Request, { params }: { params: { slug: string } }) {
  const tool = MASTER_TOOLS_LIST.find((t) => t.slug === params.slug);
  if (!tool) {
    return new Response("Not found", { status: 404 });
  }
  return renderOgCard({
    eyebrow: tool.categoryName,
    title: tool.name,
    subtitle: tool.shortDesc
  });
}
