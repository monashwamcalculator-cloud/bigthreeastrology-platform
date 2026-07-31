import { redirect } from "next/navigation";
import slugify from "slugify";
import { auth } from "@/lib/auth";
import { prisma } from "@/lib/prisma";

export default async function BlogDashboardPage() {
  const session = await auth();
  if (!session?.user) redirect("/login");
  if (!["ADMIN", "EDITOR"].includes(session.user.role)) redirect("/dashboard");

  const posts = await prisma.blogPost.findMany({ orderBy: { createdAt: "desc" } });

  return (
    <div className="space-y-5">
      <h1 className="text-2xl font-bold">Blog Publisher</h1>
      <form
        className="grid gap-2 rounded-xl border border-indigo-400/30 bg-black/30 p-4"
        action={async (fd) => {
          "use server";
          const id = String(fd.get("id") ?? "");
          const title = String(fd.get("title"));
          const data = {
            title,
            slug: slugify(title, { lower: true, strict: true }),
            metaDescription: String(fd.get("metaDescription")),
            content: String(fd.get("content")),
            categories: [],
            tags: [],
            published: fd.get("published") === "on"
          };
          if (id) {
            await prisma.blogPost.update({ where: { id }, data });
            return;
          }
          await prisma.blogPost.create({ data: { ...data, authorId: session.user.id } });
        }}
      >
        <p className="font-semibold">Create or update post</p>
        <input name="id" placeholder="Optional post id (for update)" className="rounded bg-black/40 p-2" />
        <input name="title" placeholder="Title" className="rounded bg-black/40 p-2" required />
        <input name="metaDescription" placeholder="Meta description" className="rounded bg-black/40 p-2" required />
        <textarea name="content" rows={7} placeholder="Markdown content" className="rounded bg-black/40 p-2" required />
        <label><input type="checkbox" name="published" /> Publish now</label>
        <button className="rounded bg-indigo-600 p-2">Save Post</button>
      </form>
      <p className="text-sm text-indigo-100">Simple workflow: create new by leaving id blank, or paste a post id to update and republish.</p>
      <div className="space-y-2">
        {posts.map((p) => (
          <form key={p.id} className="rounded border border-indigo-400/30 p-3" action={async (fd) => {
            "use server";
            const id = String(fd.get("id"));
            if (fd.get("actionType") === "delete") {
              await prisma.blogPost.delete({ where: { id } });
              return;
            }
            await prisma.blogPost.update({
              where: { id },
              data: { published: fd.get("actionType") === "publish" }
            });
          }}>
            <input type="hidden" name="id" value={p.id} />
            <p className="font-semibold">{p.title}</p>
            <p className="text-sm">{p.slug} · {p.published ? "Published" : "Draft"} · ID: {p.id}</p>
            <div className="mt-2 flex gap-2">
              <button name="actionType" value={p.published ? "unpublish" : "publish"} className="rounded bg-indigo-600 px-2 py-1 text-sm">
                {p.published ? "Move to draft" : "Publish"}
              </button>
              <button name="actionType" value="delete" className="rounded bg-red-700 px-2 py-1 text-sm">Delete</button>
            </div>
          </form>
        ))}
      </div>
    </div>
  );
}
