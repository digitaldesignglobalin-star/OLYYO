import "dotenv/config";
import bcrypt from "bcryptjs";
import { connectDB } from "../src/lib/mongodb.js";
import User from "../src/models/User.js";
// import User from "@/Models/User.js";

async function createAdmin() {
  try {
    await connectDB();

    const existing = await User.findOne({
      email: "admin@olyyo.com",
    });

    if (existing) {
      console.log("❌ Admin already exists");
      process.exit(0);
    }

    const hashedPassword = await bcrypt.hash("admin123", 10);

    await User.create({
      name: "Super Admin",
      email: "admin@olyyo.com",
      password: hashedPassword,
      role: "admin",
    });

    console.log("✅ Admin created successfully");
    process.exit(0);
  } catch (err) {
    console.error("❌ Error:", err);
    process.exit(1);
  }
}

createAdmin();
