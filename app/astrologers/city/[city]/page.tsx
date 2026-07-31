import Link from "next/link";
import { notFound } from "next/navigation";
import { ListingStatus } from "@prisma/client";
import { prisma } from "@/lib/prisma";
import { citySlugToName, supportedCitySlugs } from "@/lib/cities";

import { SAMPLE_ASTROLOGERS } from "@/lib/sample-data";

const PAGE_SIZE = 20;

type Props = {
  params: { city: string };
  searchParams: { page?: string };
};

export default async function CityListingsPage({ params, searchParams }: Props) {
  if (!supportedCitySlugs.includes(params.city as (typeof supportedCitySlugs)[number])) notFound();

  const cityName = citySlugToName(params.city);
  const page = Math.max(Number(searchParams.page ?? "1") || 1, 1);
  const skip = (page - 1) * PAGE_SIZE;

  const where = {
    status: ListingStatus.APPROVED,
    isIndexable: true,
    city: { equals: cityName, mode: "insensitive" as const }
  };

  let total = 0;
  let listings: any[] = [];

  try {
    [total, listings] = await Promise.all([
      prisma.astrologerProfile.count({ where }),
      prisma.astrologerProfile.findMany({
        where,
        orderBy: { createdAt: "desc" },
        skip,
        take: PAGE_SIZE
      })
    ]);
  } catch (e) {
    console.error("City listings DB query error:", e);
  }

  if (!listings || listings.length === 0) {
    listings = SAMPLE_ASTROLOGERS.filter((a) => a.city.toLowerCase() === cityName.toLowerCase());
    total = listings.length;
  }

  const totalPages = Math.max(Math.ceil(total / PAGE_SIZE), 1);
  const previousPage = page > 1 ? page - 1 : null;
  const nextPage = page < totalPages ? page + 1 : null;

  return (
    <div className="space-y-4">
      <h1 className="text-2xl font-bold">Astrologers in {cityName}</h1>
      <p className="text-indigo-100">City-wise listing view with pagination (20 per page).</p>
      {listings.length === 0 && <p>No approved listings in this city yet.</p>}
      {listings.map((listing) => (
        <div key={listing.id} className="rounded-xl border border-indigo-400/30 bg-black/30 p-4">
          <h2 className="text-lg font-semibold">
            <Link href={`/astrologers/${listing.id}`}>{listing.name}</Link>
          </h2>
          <p>{listing.specialization}</p>
          <p>{listing.city}, {listing.state}</p>
        </div>
      ))}
      <div className="flex flex-wrap items-center gap-3">
        <Link href="/astrologers" className="rounded bg-indigo-700 px-3 py-2">All Listings</Link>
        {previousPage && <Link href={`/astrologers/city/${params.city}?page=${previousPage}`} className="rounded bg-indigo-600 px-3 py-2">Previous</Link>}
        <span className="text-sm text-indigo-100">Page {page} / {totalPages}</span>
        {nextPage && <Link href={`/astrologers/city/${params.city}?page=${nextPage}`} className="rounded bg-indigo-600 px-3 py-2">Next</Link>}
      </div>
    </div>
  );
}
