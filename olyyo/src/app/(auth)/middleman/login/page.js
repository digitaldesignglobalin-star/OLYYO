"use client";

import { useState } from "react";
import { Lock, Mail, Eye, EyeOff, ArrowRight } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import logoImage from "../../../../../public/olyyo-logo.png";
// import { useAuth } from "@/context/AuthContext";
import { signIn, getSession } from "next-auth/react";
import { useRouter } from "next/navigation";





export default function MiddlemanLogin() {
  const [showPassword, setShowPassword] = useState(false);
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");

  // const { login } = useAuth();
  const router = useRouter();
  

const handleLogin = async (e) => {
  e.preventDefault();

  const res = await signIn("credentials", {
    username,
    password,
    redirect: false,
  });

  if (!res || res.error) {
    alert("Invalid credentials");
    return;
  }

  const session = await getSession();

  if (session.user.role !== "middleman") {
    alert("Unauthorized");
    return;
  }

  router.push("/middleman");
};

  return (
    <div className="h-screen w-full flex items-center justify-center relative bg-[#0a0c18] overflow-hidden">
      <div className="absolute top-[-10%] right-[-10%] w-[400px] h-[400px] bg-emerald-600/15 blur-[100px] rounded-full" />

      <div className="relative z-10 w-full max-w-[420px] px-4">
        <div className="absolute -top-12 left-1/2 -translate-x-1/2 z-30">
          <div className="w-24 h-24 rounded-full bg-[#0d1117] border-[3px] border-emerald-500/40 flex flex-col items-center justify-center shadow-lg backdrop-blur-md p-3">
            <Image
              src={logoImage}
              alt="Olyyo"
              width={60}
              height={20}
              className="object-contain"
            />
            <span className="text-emerald-400 text-[8px] uppercase tracking-widest mt-1 font-bold">
              Middleman
            </span>
          </div>
        </div>

        <div className="bg-white/5 backdrop-blur-2xl border border-white/10 rounded-[35px] p-8 pt-16 shadow-2xl">
          <h2 className="text-xl font-bold text-white text-center uppercase tracking-tight mb-8">
            Middleman Login
          </h2>

          <form onSubmit={handleLogin} className="space-y-5">
            {/* Username */}
            <div className="relative group">
              <div className="absolute inset-y-0 left-0 w-10 flex items-center justify-center border-r border-white/10">
                <Mail
                  size={18}
                  className="text-gray-500 group-focus-within:text-emerald-400"
                />
              </div>
              <input
                type="text"
                placeholder="Username"
                value={username}
                onChange={(e) => setUsername(e.target.value)}
                className="w-full bg-black/20 border border-white/10 rounded-xl py-3.5 pl-12 text-white outline-none focus:border-emerald-500/50"
                required
              />
            </div>

            {/* Password */}
            <div className="relative group">
              <div className="absolute inset-y-0 left-0 w-10 flex items-center justify-center border-r border-white/10">
                <Lock
                  size={18}
                  className="text-gray-500 group-focus-within:text-emerald-400"
                />
              </div>
              <input
                type={showPassword ? "text" : "password"}
                placeholder="Password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                className="w-full bg-black/20 border border-white/10 rounded-xl py-3.5 pl-12 pr-12 text-white outline-none focus:border-emerald-500/50"
                required
              />
              <button
                type="button"
                onClick={() => setShowPassword(!showPassword)}
                className="absolute right-3 top-1/2 -translate-y-1/2 text-gray-500"
              >
                {showPassword ? <EyeOff size={18} /> : <Eye size={18} />}
              </button>
            </div>

            <button
              type="submit"
              className="w-full bg-gradient-to-r from-emerald-500 to-green-600 text-white font-bold py-4 rounded-xl flex items-center justify-center space-x-3 hover:brightness-110 shadow-lg"
            >
              <span>LOG IN TO HUB</span>
              <ArrowRight size={18} />
            </button>
          </form>

          <p className="mt-8 text-center text-gray-400 text-xs">
            Need coordination access?
            <Link
              href="/middleman/register"
              className="text-emerald-500 font-bold hover:underline ml-1"
            >
              Register Hub
            </Link>
          </p>
        </div>
      </div>
    </div>
  );
}
