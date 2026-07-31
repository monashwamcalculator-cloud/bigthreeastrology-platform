import { PrismaClient, Role, ListingStatus } from "@prisma/client";
import bcrypt from "bcryptjs";

const prisma = new PrismaClient();

async function main() {
  const pwd = await bcrypt.hash("Pass@12345", 10);

  const [admin, editor, astrologer, user] = await Promise.all([
    prisma.user.upsert({
      where: { email: "admin@bigthree.local" },
      update: {},
      create: { email: "admin@bigthree.local", name: "Admin User", role: Role.ADMIN, passwordHash: pwd }
    }),
    prisma.user.upsert({
      where: { email: "editor@bigthree.local" },
      update: {},
      create: { email: "editor@bigthree.local", name: "Editor User", role: Role.EDITOR, passwordHash: pwd }
    }),
    prisma.user.upsert({
      where: { email: "astro@bigthree.local" },
      update: {},
      create: { email: "astro@bigthree.local", name: "Maya Astro", role: Role.ASTROLOGER, passwordHash: pwd }
    }),
    prisma.user.upsert({
      where: { email: "user@bigthree.local" },
      update: {},
      create: { email: "user@bigthree.local", name: "Regular User", role: Role.USER, passwordHash: pwd }
    })
  ]);

  await prisma.astrologerProfile.upsert({
    where: { userId: astrologer.id },
    update: {},
    create: {
      userId: astrologer.id,
      name: "Maya Astro",
      bio: "Practical Vedic astrologer focused on career and relationship guidance.",
      experienceYears: 8,
      specialization: "Vedic, Career, Relationship",
      services: "Birth chart reading, compatibility, transit consultation",
      pricing: "From $49/session",
      phone: "+12125550100",
      whatsapp: "+12125550100",
      email: "astro@bigthree.local",
      city: "New York",
      state: "NY",
      country: "USA",
      status: ListingStatus.APPROVED
    }
  });

  await prisma.blogPost.upsert({
    where: { slug: "how-to-read-big-three" },
    update: {},
    create: {
      title: "How to Read Your Big Three",
      slug: "how-to-read-big-three",
      metaDescription: "Learn how sun, moon, and rising signs shape personality.",
      content: "# Big Three Basics\n\nYour sun is identity, moon is emotions, and rising is first impression.",
      categories: ["Astrology Basics"],
      tags: ["big three", "beginners"],
      published: true,
      authorId: editor.id
    }
  });

  await prisma.inquiry.create({
    data: {
      profileId: (await prisma.astrologerProfile.findFirstOrThrow({ where: { userId: astrologer.id } })).id,
      senderId: user.id,
      name: "Regular User",
      email: "user@bigthree.local",
      message: "I want a compatibility consultation for next week."
    }
  });

  console.log("Seed complete");
}

main()
  .catch((e) => {
    console.error(e);
    process.exit(1);
  })
  .finally(async () => {
    await prisma.$disconnect();
  });
