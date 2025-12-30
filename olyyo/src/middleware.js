import { NextResponse } from "next/server";
import { getToken } from "next-auth/jwt";

export async function middleware(req) {
  const { pathname } = req.nextUrl;

  // ✅ Ignore Auth.js routes completely
  if (pathname.startsWith("/api/auth")) {
    return NextResponse.next();
  }

  // ✅ Allow login pages
  if (
    pathname === "/login" ||
    pathname === "/admin/login" ||
    pathname === "/restaurant/login"
  ) {
    return NextResponse.next();
  }

  const token = await getToken({
    req,
    secret: process.env.NEXTAUTH_SECRET,
  });

  // 🔒 Protect admin dashboard
  if (pathname.startsWith("/admin")) {
    if (!token) {
      return NextResponse.redirect(
        new URL("/admin/login", req.url)
      );
    }

    if (token.role !== "admin") {
      return NextResponse.redirect(
        new URL("/", req.url)
      );
    }
  }

  return NextResponse.next();
}
