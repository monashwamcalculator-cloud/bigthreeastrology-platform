"use server";

import { Role } from "@prisma/client";
import bcrypt from "bcryptjs";
import { prisma } from "@/lib/prisma";
import { sendSignupEmail } from "@/lib/mail";
import { signIn } from "@/lib/auth";

export async function registerAction(formData: FormData) {
  const name = String(formData.get("name") ?? "");
  const email = String(formData.get("email") ?? "").toLowerCase();
  const password = String(formData.get("password") ?? "");
  const roleInput = String(formData.get("role") ?? "USER");
  const role = roleInput === "ASTROLOGER" ? Role.ASTROLOGER : Role.USER;

  const passwordHash = await bcrypt.hash(password, 10);
  await prisma.user.create({ data: { name, email, passwordHash, role } });
  await sendSignupEmail(email, name);
  await signIn("credentials", { email, password, redirectTo: "/dashboard" });
}
