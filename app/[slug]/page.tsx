import { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import { ListingStatus } from "@prisma/client";
import { prisma } from "@/lib/prisma";
import { supportedCitySlugs, citySlugToName } from "@/lib/cities";
import { absoluteUrl, buildMetadata } from "@/lib/seo";

import { SAMPLE_ASTROLOGERS } from "@/lib/sample-data";

type Props = { params: { slug: string } };

function extractCitySlug(slug: string) {
  if (!slug.startsWith("astrologers-in-")) return null;
  return slug.replace("astrologers-in-", "");
}

export async function generateStaticParams() {
  return supportedCitySlugs.map((city) => ({ slug: `astrologers-in-${city}` }));
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const citySlug = extractCitySlug(params.slug);
  if (!citySlug) return {};
  const city = citySlugToName(citySlug);
  return buildMetadata({
    title: `Best Astrologers in ${city} | BIGThreeAstrology`,
    description: `Discover verified astrologers in ${city} for chart reading, guidance, and consultations.`,
    path: `/${params.slug}`
  });
}

export default async function CityAstrologersPage({ params }: Props) {
  const citySlug = extractCitySlug(params.slug);
  if (!citySlug) notFound();

  const city = citySlugToName(citySlug);
  let listings: any[] = [];
  try {
    listings = await prisma.astrologerProfile.findMany({
      where: { city: { equals: city, mode: "insensitive" }, status: ListingStatus.APPROVED, isIndexable: true }
    });
  } catch (e) {
    console.error(`Database query failed for astrologers in ${city}:`, e);
  }
  if (!listings || listings.length === 0) {
    listings = SAMPLE_ASTROLOGERS.filter((a) => a.city.toLowerCase() === city.toLowerCase());
  }
  const itemListSchema = {
    "@context": "https://schema.org",
    "@type": "ItemList",
    name: `Astrologers in ${city}`,
    itemListElement: listings.map((listing, index) => ({
      "@type": "ListItem",
      position: index + 1,
      item: {
        "@type": "Person",
        name: listing.name,
        url: absoluteUrl(`/astrologers/${listing.id}`)
      }
    }))
  };

  return (
    <div className="space-y-4">
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(itemListSchema) }} />
      <h1 className="text-2xl font-bold">Astrologers in {city}</h1>
      <p>City-specific listings with local visibility and SEO-ready metadata.</p>
      {listings.map((l) => (
        <div key={l.id} className="rounded-xl border border-indigo-400/30 bg-black/30 p-4">
          <h2 className="text-lg font-semibold"><Link href={`/astrologers/${l.id}`}>{l.name}</Link></h2>
          <p>{l.specialization}</p>
        </div>
      ))}
    </div>
  );
}
