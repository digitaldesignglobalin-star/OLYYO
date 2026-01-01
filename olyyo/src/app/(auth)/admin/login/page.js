"use client";

import { useState } from "react";
// import { useRouter } from "next/navigation";
import { Lock, Mail, Eye, EyeOff, ArrowRight } from "lucide-react";
import Image from "next/image";
import logoImage from "../../../../../public/olyyo-logo.png";
// import { useAuth } from "@/context/AuthContext";
import { signIn } from "next-auth/react";
import { useRouter } from "next/navigation";

export default function AdminLogin() {
  const router = useRouter();

  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [showPassword, setShowPassword] = useState(false);

  // const router = useRouter();
  // const { adminLogin } = useAuth();

  //   const handleLogin = (e) => {
  //   e.preventDefault();
  //   adminLogin({ username, password });
  // };

  const handleLogin = async (e) => {
    e.preventDefault();

    console.log("Submitting admin login...");

    const res = await signIn("credentials", {
      username,
      password,
      redirect: false,
    });

    console.log("SignIn response:", res);

    if (!res) {
      alert("No response from Auth.js");
      return;
    }

    if (res.error) {
      alert("Invalid credentials");
      return;
    }

    if (res.ok) {
      router.push("/admin");
    }
  };

  return (
    <div className="min-h-screen w-full flex flex-col items-center justify-center relative bg-[#0f0721] overflow-hidden font-sans">
      {/* Background Abstract Glows */}
      <div className="absolute top-[-10%] left-[-10%] w-[500px] h-[500px] bg-purple-600/20 blur-[120px] rounded-full" />
      <div className="absolute bottom-[-10%] right-[-5%] w-[500px] h-[500px] bg-pink-600/20 blur-[120px] rounded-full" />

      {/* Main Container */}
      <div className="relative z-10 w-full max-w-[440px] px-6">
        {/* Floating Circular Logo Badge */}
        <div className="absolute -top-16 left-1/2 -translate-x-1/2 z-30">
          <div className="w-32 h-32 rounded-full bg-[#130b25] border-[3px] border-purple-500/40 flex flex-col items-center justify-center shadow-[0_0_30px_rgba(168,85,247,0.4)] backdrop-blur-md overflow-hidden p-4">
            <Image
              src={logoImage}
              alt="Olyyo Logo"
              width={80}
              height={30}
              className="object-contain mb-1"
            />
            <span className="text-gray-300 text-[10px] uppercase tracking-[0.3em] font-medium">
              Admin
            </span>
          </div>
        </div>

        {/* Glassmorphic Card */}
        <div className="relative bg-white/5 backdrop-blur-2xl border border-white/20 rounded-[45px] p-10 pt-24 shadow-[0_25px_50px_-12px_rgba(0,0,0,0.5)] overflow-hidden">
          {/* Subtle Shine Reflection */}
          <div className="absolute top-0 left-0 w-full h-full bg-gradient-to-br from-white/10 to-transparent pointer-events-none" />

          <form onSubmit={handleLogin} className="space-y-6 relative z-10">
            {/* Usernaem Field */}
            <div className="space-y-1">
              <div className="relative group">
                <div className="absolute inset-y-0 left-5 flex items-center pointer-events-none">
                  <Mail className="w-5 h-5 text-gray-400 group-focus-within:text-purple-400 transition-colors" />
                </div>
                <input
                  type="text"
                  value={username}
                  onChange={(e) => setUsername(e.target.value)}
                  placeholder="username"
                  className="w-full bg-[#2a2438]/50 border border-white/10 rounded-2xl py-4 pl-14 pr-4 text-white placeholder:text-gray-500 focus:outline-none focus:ring-2 focus:ring-purple-500/50 transition-all text-lg"
                  required
                />
              </div>
            </div>

            {/* Password Field */}
            <div className="space-y-1">
              <div className="relative group">
                <div className="absolute inset-y-0 left-5 flex items-center pointer-events-none">
                  <Lock className="w-5 h-5 text-gray-400 group-focus-within:text-purple-400 transition-colors" />
                </div>
                <input
                  type={showPassword ? "text" : "password"}
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                  placeholder="Password"
                  className="w-full bg-[#2a2438]/50 border border-white/10 rounded-2xl py-4 pl-14 pr-14 text-white placeholder:text-gray-500 focus:outline-none focus:ring-2 focus:ring-purple-500/50 transition-all text-lg"
                  required
                />
                <button
                  type="button"
                  onClick={() => setShowPassword(!showPassword)}
                  className="absolute inset-y-0 right-5 flex items-center text-gray-500 hover:text-white transition-colors"
                >
                  {showPassword ? <EyeOff size={22} /> : <Eye size={22} />}
                </button>
              </div>
            </div>

            {/* Remember & Forgot */}
            <div className="flex items-center justify-between px-2">
              <label className="flex items-center space-x-2 text-sm text-gray-400 cursor-pointer group">
                <div className="w-4 h-4 rounded border border-white/20 bg-white/5 group-hover:border-purple-500 transition-colors flex items-center justify-center">
                  <input
                    type="checkbox"
                    className="opacity-0 absolute w-4 h-4 cursor-pointer"
                  />
                  <div className="w-2 h-2 bg-purple-500 rounded-sm scale-0 transition-transform peer-checked:scale-100" />
                </div>
                <span>Remember me</span>
              </label>
              {/* <button type="button" className="text-sm text-gray-400 hover:text-purple-400 transition-colors italic">
                Forgot Password?
              </button> */}
            </div>

            {/* Login Button */}
            <button
              type="submit"
              className="w-full bg-gradient-to-r from-[#8b5cf6] via-[#ec4899] to-[#ef4444] text-white font-bold py-5 rounded-2xl flex items-center justify-center space-x-4 hover:brightness-110 active:scale-[0.98] transition-all shadow-[0_10px_20px_rgba(239,68,68,0.2)]"
            >
              {/* <span className="uppercase tracking-widest text-sm">
                Sign In to Dashboard
              </span> */}
              <span className="uppercase tracking-widest text-sm">Login</span>
              <div className="bg-white/20 p-1.5 rounded-lg">
                <ArrowRight size={20} />
              </div>
            </button>
          </form>
        </div>

        {/* <button className="mb-[-60.5] mt-3 w-full bg-gradient-to-r from-[#8b5cf6] via-[#ec4899] to-[#ef4444] text-white font-bold py-5 rounded-2xl flex items-center justify-center space-x-4 hover:brightness-110 active:scale-[0.98] transition-all shadow-[0_10px_20px_rgba(239,68,68,0.2)]">
          
          <span className="uppercase tracking-widest text-sm">
            back to home
          </span>
          <div className="bg-white/20 p-1.5 rounded-lg">
            <ArrowRight size={20} />
          </div>
        </button> */}

        {/* Footer info at the bottom */}
        {/* <div className="mt-12 text-center">
           <p className="text-gray-500 text-[10px] uppercase tracking-[0.3em] mb-6">
            OLYYO Admin Panel v2.0 • 2025 • All rights reserved
          </p>
          <div className="flex justify-center opacity-60">
             <Image src={logoImage} alt="Olyyo Logo" width={110} height={30} />
          </div>
        </div> */}
      </div>
    </div>
  );
}
