import { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import { ListingStatus } from "@prisma/client";
import { prisma } from "@/lib/prisma";
import { supportedCitySlugs, citySlugToName } from "@/lib/cities";
import { absoluteUrl, buildMetadata } from "@/lib/seo";

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
  const metadata = buildMetadata({
    title: `Astrology in ${city} | BIGThreeAstrology`,
    description: `Astrology in ${city}: free birth-chart, kundli and compatibility calculators from BIGThreeAstrology. Local astrologer listings for ${city} are coming soon.`,
    path: `/${params.slug}`
  });
  // Protective (3 Nov 2026): city listing pages stay noindex until real,
  // approved astrologers are actually listed for the city.
  metadata.robots = { index: false, follow: true };
  return metadata;
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
  // No sample/fallback listings: only real, approved astrologers from the
  // database are ever shown. When there are none, the page says so honestly.
  const itemListSchema = listings.length > 0
    ? {
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
      }
    : null;

  return (
    <div className="space-y-4">
      {itemListSchema && (
        <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(itemListSchema) }} />
      )}
      <h1 className="text-2xl font-bold">Astrologers in {city}</h1>
      {listings.length === 0 ? (
        <>
          <p>
            No astrologers are listed in {city} yet. We only list real, approved practitioners, and none have been
            approved for {city} so far — please check back later.
          </p>
          <p>Meanwhile, you can explore your chart free with our calculators:</p>
          <ul className="list-disc space-y-1 pl-5">
            <li><Link href="/tools/big-three">Big Three Calculator — Sun, Moon &amp; Rising signs</Link></li>
            <li><Link href="/tools/kundli">Free Kundli — Janam Kundli by date of birth</Link></li>
            <li><Link href="/tools/kundali-milan">Kundali Milan — horoscope matching</Link></li>
          </ul>
        </>
      ) : (
        <>
          <p>Astrologers currently listed in {city}.</p>
          {listings.map((l) => (
            <div key={l.id} className="rounded-xl border border-indigo-400/30 bg-[#EFF7F2] p-4">
              <h2 className="text-lg font-semibold"><Link href={`/astrologers/${l.id}`}>{l.name}</Link></h2>
              <p>{l.specialization}</p>
            </div>
          ))}
        </>
      )}
    </div>
  );
}
