import { Metadata } from "next";
import { notFound } from "next/navigation";
import { MASTER_TOOLS_LIST } from "@/lib/all-tools-registry";
import { buildMetadata } from "@/lib/seo";
import { ToolPageHeader } from "@/components/tool-page-header";
import { ToolCalculatorIsland } from "@/components/tool-calculator-island";
import { ToolSections } from "@/components/tool-guide";

type Props = {
  params: { slug: string };
};

export async function generateStaticParams() {
  return MASTER_TOOLS_LIST.map((tool) => ({
    slug: tool.slug
  }));
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const tool = MASTER_TOOLS_LIST.find((t) => t.slug === params.slug);
  if (!tool) return {};

  return buildMetadata({
    title: tool.metaTitle,
    description: tool.metaDesc,
    path: `/tools/${tool.slug}`
  });
}

/**
 * Dynamic tool page — a SERVER shell (Programme P1, 3 Nov 2026), identical in
 * structure to the custom tool pages: canonical ToolPageHeader (breadcrumb +
 * pill + H1 + subtitle), the client calculator island, then ToolSections
 * (schema, guide, FAQs, related calculators). Replaces the retired
 * master-tool-renderer, which re-implemented these sections client-side.
 */
export default function DynamicToolPage({ params }: Props) {
  const tool = MASTER_TOOLS_LIST.find((t) => t.slug === params.slug);
  if (!tool) {
    notFound();
  }

  return (
    <div className="py-6 space-y-8">
      <ToolPageHeader slug={tool.slug} title={tool.name} />
      <ToolCalculatorIsland tool={tool} />
      <ToolSections slug={tool.slug} />
    </div>
  );
}
