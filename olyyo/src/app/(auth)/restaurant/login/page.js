"use client";

import { useState } from "react";
import { Lock, Mail, Eye, EyeOff, ArrowRight } from "lucide-react";
import Link from "next/link";
import Image from "next/image";
import logoImage from "../../../../../public/olyyo-logo.png";
import { signIn } from "next-auth/react";
import { useRouter } from "next/navigation";
import { useSession } from "next-auth/react";

export default function RestaurantLogin() {
  // const [username, setUsername] = useState("");
  // const [password, setPassword] = useState("");

  const { data: session } = useSession();

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const [showPassword, setShowPassword] = useState(false);

  const router = useRouter();

  const handleLogin = async (e) => {
    e.preventDefault();

    const res = await signIn("credentials", {
      username: email,
      password,
      redirect: false,
    });

    if (!res || res.error) {
      alert("Invalid credentials");
      return;
    }

    // 🔥 CREATE RESTAURANT PROFILE (BACKEND STEP)
    // await fetch("/api/restaurants/profile", {
    //   method: "POST",
    //   headers: { "Content-Type": "application/json" },
    //   body: JSON.stringify({
    //     name: "My Restaurant",
    //     email: email,
    //   }),
    // });

    await fetch("http://localhost:5000/api/restaurants", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({
        name: "My Restaurant",
        email: email,
        userId: session.user.id, // 🔥 THIS WAS MISSING
      }),
    });

    // ✅ NOW GO TO DASHBOARD
    router.push("/restaurant");
  };

  return (
    <div className="min-h-screen w-full flex flex-col items-center justify-center relative bg-[#0a0c18] overflow-hidden">
      <div className="absolute top-[-10%] right-[-10%] w-[500px] h-[500px] bg-orange-500/10 blur-[120px] rounded-full" />

      <div className="relative z-10 w-full max-w-[420px] px-6">
        <div className="absolute -top-16 left-1/2 -translate-x-1/2 z-30">
          <div className="w-32 h-32 rounded-full bg-[#130b25] border-[3px] border-orange-500/40 flex flex-col items-center justify-center shadow-lg p-4">
            <Image src={logoImage} alt="Olyyo Logo" width={80} height={30} />
            <span className="text-gray-300 text-[10px] uppercase tracking-[0.3em]">
              Partner
            </span>
          </div>
        </div>

        <div className="bg-white/5 backdrop-blur-xl border border-white/10 rounded-[40px] p-10 pt-20 shadow-2xl">
          <h2 className="text-2xl font-bold text-white text-center mb-8">
            Restaurant Login
          </h2>
          {/* onSubmit={handleLogin} */}
          <form onSubmit={handleLogin} className="space-y-5">
            {/* USERNAME */}
            <div className="relative">
              <Mail className="absolute left-4 top-1/2 -translate-y-1/2 text-gray-500" />
              <input
                type="text"
                placeholder="Restaurant Email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                className="w-full bg-[#0f172a]/50 border border-white/10 rounded-2xl py-4 pl-12 text-white"
                required
              />
            </div>

            {/* PASSWORD */}
            <div className="relative">
              <Lock className="absolute left-4 top-1/2 -translate-y-1/2 text-gray-500" />
              <input
                type={showPassword ? "text" : "password"}
                placeholder="Password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                className="w-full bg-[#0f172a]/50 border border-white/10 rounded-2xl py-4 pl-12 pr-12 text-white"
                required
              />
              <button
                type="button"
                onClick={() => setShowPassword(!showPassword)}
                className="absolute right-4 top-1/2 -translate-y-1/2 text-gray-500"
              >
                {showPassword ? <EyeOff /> : <Eye />}
              </button>
            </div>

            <button
              type="submit"
              className="w-full bg-gradient-to-r from-orange-500 to-red-600 text-white font-bold py-4 rounded-2xl"
            >
              SIGN IN
            </button>
          </form>

          <p className="mt-6 text-center text-gray-400 text-sm">
            New to Olyyo?{" "}
            <Link href="/restaurant/register" className="text-orange-500">
              Register Restaurant
            </Link>
          </p>
        </div>
      </div>
    </div>
  );
}
