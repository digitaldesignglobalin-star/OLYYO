import { NextResponse } from "next/server";

export function middleware(request) {
   console.log("🔥 MIDDLEWARE HIT:", request.nextUrl.pathname);

  const { pathname } = request.nextUrl;

  const auth = request.cookies.get("auth")?.value;
  const role = request.cookies.get("role")?.value;

  // ================= ADMIN =================
  if (pathname.startsWith("/admin")) {

    // allow ONLY admin login page
    if (pathname === "/admin/login") {
      return NextResponse.next();
    }

    // block if not logged in
    if (!auth) {
      return NextResponse.redirect(
        new URL("/admin/login", request.url)
      );
    }

    // block if not admin
    if (role !== "admin") {
      return NextResponse.redirect(new URL("/", request.url));
    }
  }

  // ================= CUSTOMER =================
  if (pathname.startsWith("/customer")) {

    if (pathname === "/customer/login") {
      return NextResponse.next();
    }

    if (!auth) {
      return NextResponse.redirect(
        new URL("/customer/login", request.url)
      );
    }

    if (role !== "user") {
      return NextResponse.redirect(new URL("/", request.url));
    }
  }

  // ================= RESTAURANT =================
  if (pathname.startsWith("/restaurant")) {

    if (pathname === "/restaurant/login") {
      return NextResponse.next();
    }

    if (!auth) {
      return NextResponse.redirect(
        new URL("/restaurant/login", request.url)
      );
    }

    if (role !== "restaurant") {
      return NextResponse.redirect(new URL("/", request.url));
    }
  }

  // ================= DELIVERY =================
  if (pathname.startsWith("/delivery")) {

    if (pathname === "/delivery/login") {
      return NextResponse.next();
    }

    if (!auth) {
      return NextResponse.redirect(
        new URL("/delivery/login", request.url)
      );
    }

    if (role !== "delivery") {
      return NextResponse.redirect(new URL("/", request.url));
    }
  }

  return NextResponse.next();
}
