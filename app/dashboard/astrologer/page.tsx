import { redirect } from "next/navigation";
import { ListingStatus } from "@prisma/client";
import { auth } from "@/lib/auth";
import { sendListingCreatedEmail } from "@/lib/mail";
import { prisma } from "@/lib/prisma";

export default async function AstrologerDashboardPage() {
  const session = await auth();
  if (!session?.user) redirect("/login");

  const isAdmin = session.user.role === "ADMIN";
  const existing = await prisma.astrologerProfile.findUnique({ where: { userId: session.user.id } });
  const adminListings = isAdmin ? await prisma.astrologerProfile.findMany({ orderBy: { createdAt: "desc" } }) : [];

  return (
    <div className="space-y-4">
      <h1 className="text-2xl font-bold">Astrologer Listing Dashboard</h1>
      <form
        className="grid gap-2 rounded-xl border border-indigo-400/30 bg-black/30 p-4"
        action={async (fd) => {
          "use server";
          if (!["ASTROLOGER", "ADMIN"].includes(session.user.role)) return;
          const existingProfile = await prisma.astrologerProfile.findUnique({
            where: { userId: session.user.id },
            select: { id: true, email: true, name: true }
          });
          const listing = await prisma.astrologerProfile.upsert({
            where: { userId: session.user.id },
            update: {
              name: String(fd.get("name")), bio: String(fd.get("bio")), experienceYears: Number(fd.get("experienceYears")),
              specialization: String(fd.get("specialization")), services: String(fd.get("services")), pricing: String(fd.get("pricing")),
              phone: String(fd.get("phone")), whatsapp: String(fd.get("whatsapp")), email: String(fd.get("email")),
              city: String(fd.get("city")), state: String(fd.get("state")), country: String(fd.get("country")),
              status: session.user.role === "ADMIN" ? ListingStatus.APPROVED : ListingStatus.PENDING,
              lastOwnerUpdateAt: new Date(),
              isIndexable: true
            },
            create: {
              userId: session.user.id, name: String(fd.get("name")), profilePhoto: String(fd.get("profilePhoto") || ""),
              bio: String(fd.get("bio")), experienceYears: Number(fd.get("experienceYears")), specialization: String(fd.get("specialization")),
              services: String(fd.get("services")), pricing: String(fd.get("pricing")), phone: String(fd.get("phone")), whatsapp: String(fd.get("whatsapp")),
              email: String(fd.get("email")), city: String(fd.get("city")), state: String(fd.get("state")), country: String(fd.get("country")),
              status: session.user.role === "ADMIN" ? ListingStatus.APPROVED : ListingStatus.PENDING,
              lastOwnerUpdateAt: new Date(),
              isIndexable: true
            }
          });
          if (!existingProfile) {
            await sendListingCreatedEmail({ to: listing.email, name: listing.name });
          }
        }}
      >
        <p className="font-semibold">Create/Update Your Profile</p>
        <input name="name" defaultValue={existing?.name} placeholder="Name" className="rounded bg-black/40 p-2" required />
        <input name="profilePhoto" defaultValue={existing?.profilePhoto ?? ""} placeholder="Profile photo URL" className="rounded bg-black/40 p-2" />
        <textarea name="bio" defaultValue={existing?.bio} placeholder="Bio" className="rounded bg-black/40 p-2" required />
        <input name="experienceYears" type="number" defaultValue={existing?.experienceYears ?? 1} className="rounded bg-black/40 p-2" required />
        <input name="specialization" defaultValue={existing?.specialization} placeholder="Specialization" className="rounded bg-black/40 p-2" required />
        <input name="services" defaultValue={existing?.services} placeholder="Services" className="rounded bg-black/40 p-2" required />
        <input name="pricing" defaultValue={existing?.pricing} placeholder="Pricing" className="rounded bg-black/40 p-2" required />
        <input name="phone" defaultValue={existing?.phone} placeholder="Phone" className="rounded bg-black/40 p-2" required />
        <input name="whatsapp" defaultValue={existing?.whatsapp} placeholder="WhatsApp" className="rounded bg-black/40 p-2" required />
        <input name="email" defaultValue={existing?.email ?? session.user.email ?? ""} placeholder="Email" className="rounded bg-black/40 p-2" required />
        <input name="city" defaultValue={existing?.city} placeholder="City" className="rounded bg-black/40 p-2" required />
        <input name="state" defaultValue={existing?.state} placeholder="State" className="rounded bg-black/40 p-2" required />
        <input name="country" defaultValue={existing?.country ?? "USA"} placeholder="Country" className="rounded bg-black/40 p-2" required />
        <button className="rounded bg-indigo-600 p-2">Save Listing</button>
      </form>
      <p className="text-sm text-indigo-100">
        Keep your profile current. If you do not update your listing for an extended period, it may be marked noindex until you log in and refresh details.
      </p>
      {isAdmin && (
        <div className="space-y-2">
          <h2 className="text-lg font-semibold">Admin Moderation</h2>
          {adminListings.map((l) => (
            <form key={l.id} className="flex items-center justify-between rounded border border-indigo-400/30 p-2" action={async (fd) => {
              "use server";
              await prisma.astrologerProfile.update({
                where: { id: String(fd.get("id")) },
                data: { status: fd.get("status") as ListingStatus }
              });
            }}>
              <input type="hidden" name="id" value={l.id} />
              <span>{l.name} - {l.city} ({l.status})</span>
              <select name="status" defaultValue={l.status} className="rounded bg-black/40 p-1">
                <option value="PENDING">PENDING</option>
                <option value="APPROVED">APPROVED</option>
                <option value="REJECTED">REJECTED</option>
              </select>
              <button className="rounded bg-indigo-600 px-2 py-1">Update</button>
            </form>
          ))}
        </div>
      )}
    </div>
  );
}
