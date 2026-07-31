import Link from "next/link";
import { redirect } from "next/navigation";
import { auth, signOut } from "@/lib/auth";

export default async function DashboardPage() {
  const session = await auth();
  if (!session?.user) redirect("/login");

  return (
    <div className="space-y-4">
      <h1 className="text-2xl font-bold">Dashboard</h1>
      <p>Signed in as {session.user.email} ({session.user.role})</p>
      <p className="text-indigo-100">
        Use this dashboard to publish blog posts and keep your astrologer listing fresh. Updating your listing helps it stay indexable in search.
      </p>
      <div className="flex flex-wrap gap-3">
        <Link href="/dashboard/blog" className="rounded bg-indigo-600 px-3 py-2">Manage Blog</Link>
        <Link href="/dashboard/astrologer" className="rounded bg-indigo-600 px-3 py-2">Manage Astrologer Listing</Link>
        <Link href="/dashboard/astrologers" className="rounded bg-indigo-600 px-3 py-2">All Astrologers View</Link>
      </div>
      <form action={async () => { "use server"; await signOut({ redirectTo: "/" }); }}>
        <button className="rounded bg-red-700 px-3 py-2">Logout</button>
      </form>
    </div>
  );
}
