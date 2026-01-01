"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";
import {
  Lock,
  Mail,
  Eye,
  EyeOff,
  ArrowRight,
  Store,
  MapPin,
  Utensils,
} from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import logoImage from "../../../../../public/olyyo-logo.png";

export default function RestaurantRegister() {
  const [showPassword, setShowPassword] = useState(false);
  const [isLoading, setIsLoading] = useState(false);

  // ✅ FIXED STATES
  const [username, setUsername] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");

  const router = useRouter();

  const handleRegister = async (e) => {
    e.preventDefault();

    // ✅ FRONTEND CHECK (correct place)
    if (password !== confirmPassword) {
      alert("Passwords do not match");
      return;
    }

    setIsLoading(true);

    try {
      const res = await fetch("/api/register", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          username,
          email,
          password,
          confirmPassword,
          role: "restaurant",
        }),
      });

      const data = await res.json();

      if (!res.ok) {
        alert(data.message || "Registration failed");
        return;
      }

      alert("Restaurant registered successfully!");
      router.push("/restaurant/login");
    } catch (err) {
      alert("Backend not reachable");
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <div className="h-screen w-full flex items-center justify-center relative bg-[#0a0c18] overflow-hidden font-sans">
      <div className="absolute top-[-10%] right-[-10%] w-[400px] h-[400px] bg-orange-600/15 blur-[100px] rounded-full" />
      <div className="absolute bottom-[-10%] left-[-5%] w-[400px] h-[400px] bg-blue-600/10 blur-[100px] rounded-full" />

      <div className="relative z-10 w-full max-w-[550px] px-4">
        <div className="absolute -top-12 left-1/2 -translate-x-1/2 z-30">
          <div className="w-24 h-24 rounded-full bg-[#130b25] border-[3px] border-orange-500/40 flex flex-col items-center justify-center shadow-lg backdrop-blur-md p-3">
            <Image
              src={logoImage}
              alt="Olyyo"
              width={60}
              height={20}
              className="object-contain"
            />
            <span className="text-gray-400 text-[8px] uppercase tracking-widest mt-1">
              Partner
            </span>
          </div>
        </div>

        <div className="relative bg-white/5 backdrop-blur-2xl border border-white/10 rounded-[35px] p-6 pt-16 shadow-2xl overflow-hidden">
          <div className="text-center mb-6">
            <h2 className="text-xl font-bold text-white uppercase tracking-tight">
              Restaurant Registration
            </h2>
          </div>

          <form onSubmit={handleRegister} className="space-y-4 relative z-10">
            <div className="grid grid-cols-2 gap-3">
              <div className="relative group">
                <div className="absolute inset-y-0 left-0 w-10 flex items-center justify-center border-r border-white/10">
                  <Store size={16} className="text-gray-500" />
                </div>
                <input
                  type="text"
                  placeholder="Restaurant Name"
                  value={username}
                  onChange={(e) => setUsername(e.target.value)}
                  className="w-full bg-black/20 border border-white/10 rounded-xl py-3 pl-12 pr-4 text-sm text-white"
                  required
                />
              </div>

              <div className="relative group">
                <div className="absolute inset-y-0 left-0 w-10 flex items-center justify-center border-r border-white/10">
                  <Utensils size={16} className="text-gray-500" />
                </div>
                <select className="w-full bg-black/20 border border-white/10 rounded-xl py-3 pl-12 pr-4 text-sm text-gray-400">
                  <option>Select Category</option>
                  <option>Fast Food</option>
                  <option>Cafe</option>
                  <option>Fine Dining</option>
                </select>
              </div>
            </div>

            <div className="relative group">
              <div className="absolute inset-y-0 left-0 w-10 flex items-center justify-center border-r border-white/10">
                <Mail size={16} className="text-gray-500" />
              </div>
              <input
                type="email"
                placeholder="Business Email Address"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                className="w-full bg-black/20 border border-white/10 rounded-xl py-3 pl-12 pr-4 text-sm text-white"
                required
              />
            </div>

            {/* PASSWORD */}
            <div className="relative group">
              <div className="absolute inset-y-0 left-0 w-10 flex items-center justify-center border-r border-white/10">
                <Lock size={16} className="text-gray-500" />
              </div>
              <input
                type={showPassword ? "text" : "password"}
                placeholder="Create Password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                className="w-full bg-black/20 border border-white/10 rounded-xl py-3 pl-12 pr-12 text-sm text-white"
                required
              />
              <button
                type="button"
                onClick={() => setShowPassword(!showPassword)}
                className="absolute right-4 top-1/2 -translate-y-1/2 text-gray-500 hover:text-white"
              >
                {showPassword ? <EyeOff size={18} /> : <Eye size={18} />}
              </button>
            </div>

            {/* CONFIRM PASSWORD */}
            <div className="relative group">
              <div className="absolute inset-y-0 left-0 w-10 flex items-center justify-center border-r border-white/10">
                <Lock size={16} className="text-gray-500" />
              </div>
              <input
                type={showPassword ? "text" : "password"}
                placeholder="Confirm Password"
                value={confirmPassword}
                onChange={(e) => setConfirmPassword(e.target.value)}
                className="w-full bg-black/20 border border-white/10 rounded-xl py-3 pl-12 pr-12 text-sm text-white"
                required
              />
              <button
                type="button"
                onClick={() => setShowPassword(!showPassword)}
                className="absolute right-4 top-1/2 -translate-y-1/2 text-gray-500 hover:text-white"
              >
                {showPassword ? <EyeOff size={18} /> : <Eye size={18} />}
              </button>
            </div>

            <button
              type="submit"
              disabled={isLoading}
              className="w-full bg-gradient-to-r from-orange-500 to-red-600 text-white font-bold py-3.5 rounded-xl flex items-center justify-center space-x-3"
            >
              <span className="uppercase tracking-widest text-xs">
                {isLoading ? "Creating..." : "Create Account"}
              </span>
              <ArrowRight size={16} />
            </button>
          </form>

          <div className="mt-6 text-center">
            <p className="text-gray-400 text-xs">
              Joined us before?{" "}
              <Link
                href="/restaurant/login"
                className="text-orange-500 font-bold hover:underline ml-1"
              >
                Login here
              </Link>
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
