import { NextResponse } from "next/server";
import bcrypt from "bcryptjs";
import { connectDB } from "@/lib/mongodb";
import User from "@/models/User";

export async function POST(req) {
  try {
    const { username, email, password, confirmPassword, role } =
      await req.json();

    // ✅ Basic validation
    if (!username || !email || !password || !confirmPassword || !role) {
      return NextResponse.json(
        { message: "All fields are required" },
        { status: 400 }
      );
    }

    // 🔐 ROLE VALIDATION (ADD THIS HERE)
const allowedRoles = ["user", "restaurant", "middleman"];

if (!allowedRoles.includes(role)) {
  return NextResponse.json(
    { message: "Invalid role" },
    { status: 400 }
  );
}


    // ✅ Password match check
    if (password !== confirmPassword) {
      return NextResponse.json(
        { message: "Passwords do not match" },
        { status: 400 }
      );
    }

    await connectDB();

    // ✅ Check existing user
    const existingUser = await User.findOne({ email });
    if (existingUser) {
      return NextResponse.json(
        { message: "User already exists" },
        { status: 400 }
      );
    }

    // ✅ Hash password
    const hashedPassword = await bcrypt.hash(password, 10);

    // ✅ Create user
    await User.create({
      name: username,      // 👈 map username → name
      email,
      password: hashedPassword,
      role,
    });

    return NextResponse.json(
      { message: "Registered successfully" },
      { status: 201 }
    );
  } catch (error) {
    console.error(error);
    return NextResponse.json(
      { message: "Server error" },
      { status: 500 }
    );
  }
}
