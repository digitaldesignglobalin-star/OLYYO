"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";
import { Lock, Mail, Eye, EyeOff, ArrowRight, User, ShieldCheck, Phone } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import logoImage from "../../../../../public/olyyo-logo.png";

export default function MiddlemanRegister() {
  const [showPassword, setShowPassword] = useState(false);
  const [isLoading, setIsLoading] = useState(false);

  const [username, setUsername] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");

  const router = useRouter();

  const handleRegister = async (e) => {
    e.preventDefault();
    setIsLoading(true);

    try {
      const res = await fetch("http://localhost:2000/api/auth/middleman/register", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          username,
          email,
          password,
          confirmPassword,
        }),
      });

      const data = await res.json();

      if (!res.ok) {
        alert(data.message || "Registration failed");
        setIsLoading(false);
        return;
      }

      alert("Registration successful!");
      router.push("/middleman/login");
    } catch (err) {
      alert("Backend not reachable");
      setIsLoading(false);
    }
  };

  return (
    <div className="h-screen w-full flex items-center justify-center relative bg-[#0a0c18] overflow-hidden font-sans">
      <div className="absolute top-[-10%] right-[-10%] w-[400px] h-[400px] bg-emerald-600/15 blur-[100px] rounded-full" />
      <div className="absolute bottom-[-10%] left-[-5%] w-[400px] h-[400px] bg-blue-600/10 blur-[100px] rounded-full" />

      <div className="relative z-10 w-full max-w-[550px] px-4">
        <div className="absolute -top-12 left-1/2 -translate-x-1/2 z-30">
          <div className="w-24 h-24 rounded-full bg-[#0d1117] border-[3px] border-emerald-500/40 flex flex-col items-center justify-center shadow-lg backdrop-blur-md p-3">
            <Image src={logoImage} alt="Olyyo" width={60} height={20} className="object-contain" />
            <span className="text-emerald-400 text-[8px] uppercase tracking-widest mt-1 font-bold">
              Middleman
            </span>
          </div>
        </div>

        <div className="relative bg-white/5 backdrop-blur-2xl border border-white/10 rounded-[35px] p-6 pt-16 shadow-2xl overflow-hidden">
          <div className="text-center mb-6">
            <h2 className="text-xl font-bold text-white uppercase tracking-tight">
              Coordination Partner Join
            </h2>
          </div>

          <form onSubmit={handleRegister} className="space-y-4 relative z-10">
            <input
              type="text"
              placeholder="Username"
              value={username}
              onChange={(e) => setUsername(e.target.value)}
              className="w-full bg-black/20 border border-white/10 rounded-xl py-3 pl-4 text-white"
              required
            />

            <input
              type="email"
              placeholder="Coordination Email Address"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              className="w-full bg-black/20 border border-white/10 rounded-xl py-3 pl-4 text-white"
              required
            />

            <input
              type={showPassword ? "text" : "password"}
              placeholder="Secure Password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              className="w-full bg-black/20 border border-white/10 rounded-xl py-3 pl-4 text-white"
              required
            />

            <input
              type="password"
              placeholder="Confirm Password"
              value={confirmPassword}
              onChange={(e) => setConfirmPassword(e.target.value)}
              className="w-full bg-black/20 border border-white/10 rounded-xl py-3 pl-4 text-white"
              required
            />

            <button
              type="submit"
              disabled={isLoading}
              className="w-full bg-gradient-to-r from-emerald-500 to-green-600 text-white font-bold py-3.5 rounded-xl flex items-center justify-center space-x-3 hover:brightness-110 transition-all"
            >
              <span>{isLoading ? "Registering..." : "Register as Middleman"}</span>
              <ArrowRight size={16} />
            </button>
          </form>

          <div className="mt-6 text-center">
            <p className="text-gray-400 text-xs">
              Already managing orders?
              <Link href="/middleman/login" className="text-emerald-500 font-bold hover:underline ml-1">
                Login here
              </Link>
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
