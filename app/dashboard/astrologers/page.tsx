import Link from "next/link";
import { redirect } from "next/navigation";
import { ListingStatus } from "@prisma/client";
import { auth } from "@/lib/auth";
import { prisma } from "@/lib/prisma";

export default async function AllAstrologersDashboardPage() {
  const session = await auth();
  if (!session?.user) redirect("/login");

  const isAdmin = session.user.role === "ADMIN";
  const listings = await prisma.astrologerProfile.findMany({
    where: isAdmin ? {} : { status: ListingStatus.APPROVED, isIndexable: true },
    orderBy: { createdAt: "desc" }
  });

  return (
    <div className="space-y-4">
      <h1 className="text-2xl font-bold">All Astrologers</h1>
      <p className="text-indigo-100">
        {isAdmin ? "Admin view includes every listing and status." : "Showing approved listings only."}
      </p>
      {listings.map((listing) => (
        <div key={listing.id} className="rounded border border-indigo-400/30 bg-black/30 p-3">
          <p className="font-semibold">{listing.name}</p>
          <p className="text-sm">{listing.city}, {listing.state} · {listing.status}</p>
          <Link className="text-sm text-indigo-300 underline" href={`/astrologers/${listing.id}`}>
            Open public profile
          </Link>
        </div>
      ))}
    </div>
  );
}
