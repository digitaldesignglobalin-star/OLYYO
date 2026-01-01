import { NextResponse } from "next/server";
import { getToken } from "next-auth/jwt";

export async function middleware(req) {
  const { pathname } = req.nextUrl;

  // ✅ Ignore Auth.js routes completely
  if (pathname.startsWith("/api/auth")) {
    return NextResponse.next();
  }

  // ✅ Allow public auth pages
  if (
    pathname === "/login" ||
    pathname === "/register" ||
    pathname === "/admin/login" ||
    pathname === "/restaurant/login" ||
    pathname === "/restaurant/register" ||
    pathname === "/middleman/login" ||
    pathname === "/middleman/register"
  ) {
    return NextResponse.next();
  }

  const token = await getToken({
    req,
    secret: process.env.NEXTAUTH_SECRET,
  });

  // 🔒 Protect admin dashboard (UNCHANGED)
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

  // 🔒 Protect restaurant dashboard
  if (pathname.startsWith("/restaurant")) {
    if (!token) {
      return NextResponse.redirect(
        new URL("/restaurant/login", req.url)
      );
    }

    if (token.role !== "restaurant") {
      return NextResponse.redirect(
        new URL("/", req.url)
      );
    }
  }

  // 🔒 Protect middleman dashboard
  if (pathname.startsWith("/middleman")) {
    if (!token) {
      return NextResponse.redirect(
        new URL("/middleman/login", req.url)
      );
    }

    if (token.role !== "middleman") {
      return NextResponse.redirect(
        new URL("/", req.url)
      );
    }
  }

  // 🔒 Protect user dashboard
  if (pathname.startsWith("/user")) {
    if (!token) {
      return NextResponse.redirect(
        new URL("/login", req.url)
      );
    }

    if (token.role !== "user") {
      return NextResponse.redirect(
        new URL("/", req.url)
      );
    }
  }

  return NextResponse.next();
}
