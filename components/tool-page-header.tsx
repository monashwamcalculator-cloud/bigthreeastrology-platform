import Link from "next/link";
import { MASTER_TOOLS_LIST } from "@/lib/all-tools-registry";

type ToolPageHeaderProps = {
  /** Registry slug of the tool — used for the category pill, subtitle and breadcrumb. */
  slug: string;
  /** The page's H1 text. Preserved per page — never rewritten by this component. */
  title: string;
  /**
   * Optional intro paragraph rendered under the subtitle. Used by pages whose
   * previous bespoke header carried a longer intro line; palette body colour.
   */
  intro?: string;
};

/**
 * ToolPageHeader — the ONE canonical header for every tool page (Programme P1,
 * 3 Nov 2026). Renders, in order:
 *  1. a visible breadcrumb  Home > Tools > Category > Tool Name  that mirrors
 *     the BreadcrumbList JSON-LD emitted by ToolSections/ToolSchema;
 *  2. the tool's category pill;
 *  3. the page H1 (text supplied by the page, wording preserved);
 *  4. a one-line subtitle — the tool's short registry description;
 *  5. an optional intro paragraph.
 * Palette-true classes only (no legacy amber/gold utilities).
 */
export function ToolPageHeader({ slug, title, intro }: ToolPageHeaderProps) {
  const tool = MASTER_TOOLS_LIST.find((t) => t.slug === slug);
  if (!tool) return null;

  return (
    <div className="space-y-5">
      <nav
        aria-label="Breadcrumb"
        className="flex flex-wrap items-center gap-x-2 gap-y-1 text-xs sm:text-sm text-[#2C473F]/60"
      >
        <Link href="/" className="text-[#08745A] transition-colors hover:text-[#075433]">
          Home
        </Link>
        <span aria-hidden="true">&gt;</span>
        <Link href="/tools" className="text-[#08745A] transition-colors hover:text-[#075433]">
          Tools
        </Link>
        <span aria-hidden="true">&gt;</span>
        <Link
          href={`/tools#${tool.category}`}
          className="text-[#08745A] transition-colors hover:text-[#075433]"
        >
          {tool.categoryName}
        </Link>
        <span aria-hidden="true">&gt;</span>
        <span aria-current="page" className="font-medium text-[#042F2A]">
          {tool.name}
        </span>
      </nav>

      <div className="mx-auto max-w-3xl space-y-3 text-center">
        <span className="inline-block rounded-full border border-[#A9EAD1] bg-[#DFF5EC] px-3 py-1 text-[11px] font-semibold uppercase tracking-wider text-[#075433] sm:text-xs">
          {tool.categoryName}
        </span>
        <h1 className="font-display text-3xl font-bold leading-tight text-[#042F2A] sm:text-4xl md:text-5xl">
          {title}
        </h1>
        <p className="text-sm text-[#2C473F] sm:text-base">{tool.shortDesc}</p>
        {intro && (
          <p className="text-sm leading-relaxed text-[#2C473F] md:text-base">{intro}</p>
        )}
      </div>
    </div>
  );
}
