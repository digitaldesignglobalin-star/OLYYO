"use client";

import { useState, useEffect } from "react";
import { useRouter } from "next/navigation";
import { Phone, Lock, ArrowRight, ArrowLeft, Loader2, ShieldCheck, Sparkles } from "lucide-react";

export default function LoginPage() {
  const router = useRouter();
  const [phoneNumber, setPhoneNumber] = useState("");
  const [otpCode, setOtpCode] = useState("");
  const [step, setStep] = useState(1); // 1 = Phone Input, 2 = OTP Input
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");
  const [resendTimer, setResendTimer] = useState(30);
  const [canResend, setCanResend] = useState(false);

  // Timer for OTP resend
  useEffect(() => {
    let interval = null;
    if (step === 2 && resendTimer > 0) {
      interval = setInterval(() => {
        setResendTimer((prev) => prev - 1);
      }, 1000);
    } else if (resendTimer === 0) {
      setCanResend(true);
      if (interval) clearInterval(interval);
    }
    return () => {
      if (interval) clearInterval(interval);
    };
  }, [step, resendTimer]);

  const handleSendOtp = async (e) => {
    e.preventDefault();
    setError("");
    
    // Simple verification
    const cleaned = phoneNumber.replace(/\D/g, "");
    if (cleaned.length < 10) {
      setError("Please enter a valid 10-digit mobile number.");
      return;
    }

    setLoading(true);
    try {
      const response = await fetch("http://localhost:5000/auth/send-otp", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ phone: cleaned }),
      });

      const data = await response.json();
      if (!response.ok) {
        throw new Error(data.message || "Something went wrong. Please try again.");
      }

      setStep(2);
      setResendTimer(30);
      setCanResend(false);
    } catch (err) {
      setError(err.message);
    } finally {
      setLoading(false);
    }
  };

  const handleVerifyOtp = async (e) => {
    e.preventDefault();
    setError("");

    if (otpCode.length < 6) {
      setError("Please enter the 6-digit OTP code.");
      return;
    }

    setLoading(true);
    try {
      const response = await fetch("http://localhost:5000/auth/verify-otp", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          phone: phoneNumber.replace(/\D/g, ""),
          code: otpCode,
        }),
      });

      const data = await response.json();
      if (!response.ok) {
        throw new Error(data.message || "Invalid OTP code.");
      }

      // Save token and user details in local storage
      localStorage.setItem("olyyo_token", data.token);
      localStorage.setItem("olyyo_user", JSON.stringify(data.user));

      // Redirect depending on user role
      const role = data.user.role;
      if (role === "admin") {
        router.push("/admin");
      } else if (role === "restaurant") {
        router.push("/restaurant");
      } else if (role === "delivery") {
        router.push("/delivery");
      } else if (role === "middleman") {
        router.push("/middleman");
      } else {
        router.push("/user");
      }
    } catch (err) {
      setError(err.message);
    } finally {
      setLoading(false);
    }
  };

  const handleResendOtp = async () => {
    if (!canResend) return;
    setError("");
    setLoading(true);
    try {
      const response = await fetch("http://localhost:5000/auth/send-otp", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ phone: phoneNumber.replace(/\D/g, "") }),
      });

      const data = await response.json();
      if (!response.ok) {
        throw new Error(data.message || "Failed to resend OTP.");
      }

      setResendTimer(30);
      setCanResend(false);
      setOtpCode("");
    } catch (err) {
      setError(err.message);
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="min-h-screen relative flex items-center justify-center bg-[#0d0f14] overflow-hidden px-4 py-12">
      {/* Background abstract glowing blobs */}
      <div className="absolute top-[-20%] left-[-10%] w-[60%] h-[60%] rounded-full bg-gradient-to-br from-orange-600/20 to-red-600/0 blur-[120px] pointer-events-none" />
      <div className="absolute bottom-[-20%] right-[-10%] w-[60%] h-[60%] rounded-full bg-gradient-to-tl from-red-600/25 to-orange-600/0 blur-[120px] pointer-events-none" />

      {/* Main glass card container */}
      <div className="relative w-full max-w-md bg-white/5 backdrop-blur-xl rounded-3xl p-8 shadow-2xl border border-white/10 overflow-hidden transition-all duration-500 hover:border-orange-500/30">
        <div className="absolute top-0 left-0 w-full h-[3px] bg-gradient-to-r from-orange-500 via-red-500 to-amber-500" />
        
        {/* Header */}
        <div className="text-center mb-8">
          <div className="inline-flex items-center justify-center p-3.5 bg-gradient-to-br from-orange-500 to-red-500 rounded-2xl shadow-lg shadow-orange-500/20 mb-4 animate-pulse">
            <ShieldCheck className="w-8 h-8 text-white" />
          </div>
          <h2 className="text-3xl font-extrabold text-white tracking-tight flex items-center justify-center gap-1.5">
            OLYYO <span className="text-orange-500 text-sm font-semibold px-2 py-0.5 rounded-full bg-orange-500/10 border border-orange-500/20">Auth</span>
          </h2>
          <p className="text-gray-400 text-sm mt-2 font-medium">
            {step === 1 ? "Enter your mobile number to sign in or register" : "Verify your mobile number to continue"}
          </p>
        </div>

        {/* Error Alert */}
        {error && (
          <div className="mb-6 p-4 bg-red-500/15 border border-red-500/30 text-red-200 rounded-xl text-sm font-medium animate-shake">
            {error}
          </div>
        )}

        {/* Step 1: Phone input */}
        {step === 1 && (
          <form onSubmit={handleSendOtp} className="space-y-6">
            <div>
              <label className="block text-xs font-bold text-gray-400 uppercase tracking-widest mb-2.5">
                Phone Number
              </label>
              <div className="relative">
                <span className="absolute left-4 top-1/2 transform -translate-y-1/2 text-gray-400 font-semibold text-sm">
                  +91
                </span>
                <input
                  type="tel"
                  required
                  placeholder="Enter 10-digit mobile number"
                  value={phoneNumber}
                  onChange={(e) => setPhoneNumber(e.target.value.replace(/\D/g, ""))}
                  className="w-full pl-14 pr-4 py-3.5 bg-white/5 border border-white/10 rounded-xl text-white placeholder-gray-500 focus:outline-none focus:border-orange-500 focus:ring-2 focus:ring-orange-500/20 transition-all font-semibold"
                  disabled={loading}
                />
                <Phone className="absolute right-4 top-1/2 transform -translate-y-1/2 w-5 h-5 text-gray-500" />
              </div>
            </div>

            <button
              type="submit"
              disabled={loading}
              className="w-full py-4 bg-gradient-to-r from-orange-500 to-red-500 hover:from-orange-600 hover:to-red-600 text-white font-bold rounded-xl shadow-lg shadow-orange-500/10 hover:shadow-orange-500/20 flex items-center justify-center gap-2 transition-all duration-300 disabled:opacity-50 disabled:cursor-not-allowed group cursor-pointer"
            >
              {loading ? (
                <Loader2 className="w-5 h-5 animate-spin" />
              ) : (
                <>
                  Send OTP Code
                  <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
                </>
              )}
            </button>
          </form>
        )}

        {/* Step 2: OTP input */}
        {step === 2 && (
          <form onSubmit={handleVerifyOtp} className="space-y-6">
            <div>
              <div className="flex justify-between items-center mb-2.5">
                <label className="block text-xs font-bold text-gray-400 uppercase tracking-widest">
                  Enter 6-Digit OTP
                </label>
                <button
                  type="button"
                  onClick={() => setStep(1)}
                  className="text-xs text-orange-400 hover:text-orange-300 flex items-center gap-1 transition-colors cursor-pointer"
                >
                  <ArrowLeft className="w-3.5 h-3.5" />
                  Edit Phone
                </button>
              </div>
              <div className="relative">
                <input
                  type="text"
                  required
                  maxLength={6}
                  placeholder="Enter 6-digit code"
                  value={otpCode}
                  onChange={(e) => setOtpCode(e.target.value.replace(/\D/g, ""))}
                  className="w-full px-4 py-3.5 bg-white/5 border border-white/10 rounded-xl text-white text-center tracking-[0.5em] text-lg placeholder-gray-500 focus:outline-none focus:border-orange-500 focus:ring-2 focus:ring-orange-500/20 transition-all font-bold"
                  disabled={loading}
                />
                <Lock className="absolute right-4 top-1/2 transform -translate-y-1/2 w-5 h-5 text-gray-500" />
              </div>
              <p className="text-gray-500 text-xs mt-2.5 text-center">
                OTP sent to +91 {phoneNumber}
              </p>
            </div>

            <button
              type="submit"
              disabled={loading}
              className="w-full py-4 bg-gradient-to-r from-orange-50 to-red-500 hover:from-orange-100 hover:to-red-600 text-white font-bold rounded-xl shadow-lg shadow-orange-500/10 hover:shadow-orange-500/20 flex items-center justify-center gap-2 transition-all duration-300 disabled:opacity-50 disabled:cursor-not-allowed cursor-pointer"
              style={{
                background: "linear-gradient(to right, #f97316, #ef4444)"
              }}
            >
              {loading ? (
                <Loader2 className="w-5 h-5 animate-spin" />
              ) : (
                <>
                  Verify & Log In
                  <Sparkles className="w-5 h-5" />
                </>
              )}
            </button>

            {/* Resend timer */}
            <div className="text-center pt-2">
              {canResend ? (
                <button
                  type="button"
                  onClick={handleResendOtp}
                  disabled={loading}
                  className="text-orange-400 hover:text-orange-300 text-sm font-semibold transition-colors decoration-2 hover:underline cursor-pointer"
                >
                  Resend OTP Code
                </button>
              ) : (
                <span className="text-gray-400 text-sm font-medium">
                  Resend OTP in <span className="text-orange-500 font-semibold">{resendTimer}s</span>
                </span>
              )}
            </div>
          </form>
        )}
      </div>
    </div>
  );
}
