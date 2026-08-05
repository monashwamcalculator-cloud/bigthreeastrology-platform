import { Metadata } from "next";
import { notFound } from "next/navigation";
import { MASTER_TOOLS_LIST } from "@/lib/all-tools-registry";
import { MasterToolRenderer } from "@/components/master-tool-renderer";
import { buildMetadata } from "@/lib/seo";

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

export default function DynamicToolPage({ params }: Props) {
  const tool = MASTER_TOOLS_LIST.find((t) => t.slug === params.slug);
  if (!tool) {
    notFound();
  }

  return <MasterToolRenderer tool={tool} />;
}
