import { NextResponse } from "next/server";
import { auth } from "@/lib/auth";

const protectedPrefixes = ["/dashboard", "/admin"];

export default auth((req) => {
  const path = req.nextUrl.pathname;
  if (!protectedPrefixes.some((prefix) => path.startsWith(prefix))) return NextResponse.next();

  if (!req.auth?.user) {
    const url = new URL("/login", req.nextUrl.origin);
    url.searchParams.set("callbackUrl", req.nextUrl.pathname);
    return NextResponse.redirect(url);
  }

  return NextResponse.next();
});

export const config = {
  matcher: ["/dashboard/:path*", "/admin/:path*"]
};
