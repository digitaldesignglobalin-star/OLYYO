"use client";
import Link from "next/link";
import { useState } from "react";
import { useAuth } from "@/context/AuthContext";

export default function LoginPage() {
  const { login } = useAuth();

  const [form, setForm] = useState({
    username: "",
    password: "",
  });

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleLogin = (e) => {
    e.preventDefault();
    login(form); // 🔥 username + password sent to backend
  };

  return (
    <div className="h-screen w-full flex items-center justify-center bg-[#FFF9F5] p-4 overflow-hidden font-sans">
      <div className="bg-white w-full max-w-5xl h-full max-h-[650px] rounded-[3rem] shadow-2xl shadow-orange-100 flex overflow-hidden p-6 gap-8">

        {/* Left Side */}
        <div className="w-full lg:w-1/2 flex flex-col justify-center px-6 lg:px-12">
          <div className="text-center mb-10">
            <h1 className="text-4xl font-black text-gray-900 mb-2 tracking-tight">
              Welcome Back!
            </h1>
            <p className="text-gray-500 text-sm italic">
              Hungry? Login to start your 10-minute countdown.
            </p>
          </div>

          <form onSubmit={handleLogin} className="space-y-4">
            <input
              type="text"
              name="username"
              placeholder="Username"
              required
              value={form.username}
              onChange={handleChange}
              className="w-full px-6 py-4 rounded-full border border-orange-50 bg-gray-50 focus:bg-white focus:ring-2 focus:ring-orange-400 outline-none transition-all text-sm shadow-inner"
            />

            <div className="space-y-1">
              <input
                type="password"
                name="password"
                placeholder="Password"
                required
                value={form.password}
                onChange={handleChange}
                className="w-full px-6 py-4 rounded-full border border-orange-50 bg-gray-50 focus:bg-white focus:ring-2 focus:ring-orange-400 outline-none transition-all text-sm shadow-inner"
              />
              <div className="text-right px-4">
                <button
                  type="button"
                  className="text-[11px] font-bold text-orange-600 hover:text-red-600 transition-colors"
                >
                  Forgot Password?
                </button>
              </div>
            </div>

            <button
              type="submit"
              className="w-full py-4 bg-gradient-to-r from-[#FF8C00] to-[#FF4500] text-white font-bold rounded-full text-sm shadow-lg shadow-orange-200 hover:brightness-110 active:scale-[0.98] transition-all uppercase tracking-widest"
            >
              Login
            </button>
          </form>

          <div className="relative flex py-8 items-center">
            <div className="flex-grow border-t border-gray-100"></div>
            <span className="flex-shrink mx-4 text-gray-400 text-[10px] font-bold uppercase tracking-widest">or login with</span>
            <div className="flex-grow border-t border-gray-100"></div>
          </div>

          <div className="flex gap-4">
            <button className="flex-1 py-3 border border-gray-200 rounded-full flex items-center justify-center gap-2 text-xs font-bold hover:bg-orange-50 hover:border-orange-200 transition-all">
              <img src="https://www.gstatic.com/firebasejs/ui/2.0.0/images/auth/google.svg" className="w-4 h-4" alt="Google" />
              Google
            </button>
            <button className="flex-1 py-3 border border-gray-200 rounded-full flex items-center justify-center gap-2 text-xs font-bold hover:bg-orange-50 hover:border-orange-200 transition-all">
              <img src="https://upload.wikimedia.org/wikipedia/commons/b/b8/2021_Facebook_icon.svg" className="w-4 h-4" alt="Facebook" />
              Facebook
            </button>
          </div>

          <p className="mt-10 text-center text-xs text-gray-500 font-medium">
            New to OLYYO?
            <Link
              href="/register"
              className="text-orange-600 font-black hover:underline ml-1"
            >
              Register Now
            </Link>
          </p>
        </div>

        {/* Right Side Image */}
        <div className="hidden lg:block w-1/2 h-full relative">
          <img
            src="https://images.unsplash.com/photo-1513104890138-7c749659a591?q=80&w=2070&auto=format&fit=crop"
            alt="Delicious Pizza"
            className="w-full h-full object-cover rounded-[2.5rem]"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-orange-950/40 to-transparent rounded-[2.5rem]"></div>
        </div>
      </div>
    </div>
  );
}
