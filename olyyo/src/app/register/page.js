"use client";

import { useState } from "react";
import Link from "next/link";
// import { useAuth } from "@/context/AuthContext";

export default function RegisterPage() {
  // const { register } = useAuth();

  const [username, setUsername] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");

  const handleRegister = (e) => {
    e.preventDefault();

    if (password !== confirmPassword) {
      alert("Passwords do not match");
      return;
    }

    register({
      username,
      email,
      password,
      confirmPassword,
    });
  };

  return (
    <div className="h-screen w-full flex items-center justify-center bg-[#FFF9F5] p-4 overflow-hidden font-sans">
      <div className="bg-white w-full max-w-5xl h-full max-h-[650px] rounded-[3rem] shadow-2xl shadow-orange-100 flex overflow-hidden p-6 gap-8 flex-row-reverse">

        {/* Left Side (Form Side) */}
        <div className="w-full lg:w-1/2 flex flex-col justify-center px-6 lg:px-12">
          <div className="text-center mb-6">
            <h1 className="text-4xl font-black text-gray-900 mb-2 tracking-tight">
              Join OLYYO
            </h1>
            <p className="text-gray-500 text-sm">
              Experience the fastest delivery in{" "}
              <span className="text-orange-600 font-black italic">
                10 mins
              </span>
              .
            </p>
          </div>

          <form onSubmit={handleRegister} className="space-y-3.5">
            {/* Username */}
            <input
              type="text"
              placeholder="Username"
              value={username}
              onChange={(e) => setUsername(e.target.value)}
              className="w-full px-6 py-3.5 rounded-full border border-orange-50 bg-gray-50 focus:bg-white focus:ring-2 focus:ring-orange-400 outline-none transition-all text-sm shadow-inner"
              required
            />

            {/* Email */}
            <input
              type="email"
              placeholder="Email Address"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              className="w-full px-6 py-3.5 rounded-full border border-orange-50 bg-gray-50 focus:bg-white focus:ring-2 focus:ring-orange-400 outline-none transition-all text-sm shadow-inner"
              required
            />

            {/* Password */}
            <input
              type="password"
              placeholder="Create Password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              className="w-full px-6 py-3.5 rounded-full border border-orange-50 bg-gray-50 focus:bg-white focus:ring-2 focus:ring-orange-400 outline-none transition-all text-sm shadow-inner"
              required
            />

            {/* Confirm Password */}
            <input
              type="password"
              placeholder="Confirm Password"
              value={confirmPassword}
              onChange={(e) => setConfirmPassword(e.target.value)}
              className="w-full px-6 py-3.5 rounded-full border border-orange-50 bg-gray-50 focus:bg-white focus:ring-2 focus:ring-orange-400 outline-none transition-all text-sm shadow-inner"
              required
            />

            <button className="w-full py-4 bg-[#1A1A1A] text-white font-bold rounded-full text-sm shadow-xl hover:bg-black active:scale-[0.98] transition-all uppercase tracking-widest mt-2">
              Create Account
            </button>
          </form>

          <div className="relative flex py-5 items-center">
            <div className="flex-grow border-t border-gray-100"></div>
            <span className="flex-shrink mx-4 text-gray-400 text-xs font-medium uppercase tracking-tight">
              or sign up with
            </span>
            <div className="flex-grow border-t border-gray-100"></div>
          </div>

          <div className="flex gap-4">
            <button className="flex-1 py-3 border border-gray-200 rounded-full flex items-center justify-center gap-2 text-xs font-semibold hover:bg-gray-50">
              <img
                src="https://www.gstatic.com/firebasejs/ui/2.0.0/images/auth/google.svg"
                className="w-4 h-4"
                alt="Google"
              />
              Google
            </button>
            <button className="flex-1 py-3 border border-gray-200 rounded-full flex items-center justify-center gap-2 text-xs font-semibold hover:bg-gray-50">
              <img
                src="https://upload.wikimedia.org/wikipedia/commons/b/b8/2021_Facebook_icon.svg"
                className="w-4 h-4"
                alt="Facebook"
              />
              Facebook
            </button>
          </div>

          <p className="mt-4 text-center text-xs text-gray-500 font-medium">
            Already part of the family?
            <Link
              href="/login"
              className="text-orange-600 font-black hover:underline ml-1"
            >
              Login here
            </Link>
          </p>
        </div>

        {/* Right Side (Image Side) */}
        <div className="hidden lg:block w-1/2 h-full relative">
          <img
            src="https://images.unsplash.com/photo-1546069901-ba9599a7e63c?q=80&w=2080&auto=format&fit=crop"
            alt="Healthy Bowl"
            className="w-full h-full object-cover rounded-[2.5rem]"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-orange-600/30 to-transparent rounded-[2.5rem]"></div>
        </div>
      </div>
    </div>
  );
}
