"use client";

import { useState, useEffect } from "react";
import Image from "next/image";
import { FaGoogle, FaApple, FaQrcode } from "react-icons/fa";
import { Smartphone, Download, ChevronDown } from "lucide-react";
import qrImage from "../../../public/DG QR.png";

export default function AppDownload() {
  const [showQR, setShowQR] = useState(false);
  const [bubbles, setBubbles] = useState([]);

  // ✅ Fix hydration error (random only on client)
  useEffect(() => {
    const generated = Array.from({ length: 10 }).map((_, i) => ({
      id: i,
      top: Math.random() * 100,
      left: Math.random() * 100,
      delay: i * 0.5,
      duration: 3 + Math.random() * 2,
    }));

    setBubbles(generated);
  }, []);

  return (
    <section className="py-16 bg-gradient-to-r from-orange-500 to-red-500 relative overflow-hidden">
      {/* Animated background bubbles */}
      <div className="absolute inset-0 overflow-hidden">
        {bubbles.map((bubble) => (
          <div
            key={bubble.id}
            className="absolute w-4 h-4 bg-white/10 rounded-full animate-float"
            style={{
              top: `${bubble.top}%`,
              left: `${bubble.left}%`,
              animationDelay: `${bubble.delay}s`,
              animationDuration: `${bubble.duration}s`,
            }}
          />
        ))}
      </div>

      <div className="container mx-auto px-4 relative z-10">
        <div className="max-w-4xl mx-auto text-center text-white animate-slide-up">
          <div className="inline-block mb-4">
            <Smartphone className="w-12 h-12 mx-auto mb-2 animate-bounce" />
          </div>

          <h2 className="text-4xl font-bold mb-4">
            Download Our App
          </h2>

          <p className="text-xl mb-8 opacity-90">
            Get the <span className="font-semibold">fastest</span> food delivery
            experience with our mobile app
          </p>

          {/* QR Code Section */}
          <div className="mb-8">
            <button
              onClick={() => setShowQR(!showQR)}
              className="flex items-center justify-center mx-auto text-white/80 hover:text-white 
<<<<<<< HEAD:olyyo/src/components/home/AppDownload.js
                         transition-colors duration-300 group mb-4 cursor-pointer"
=======
                       transition-colors duration-300 group mb-4 cursor-pointer"
>>>>>>> e7986252fded341eb9838272fd96bda28472bdf6:src/components/home/AppDownload.js
            >
              <FaQrcode className="w-5 h-5 mr-2 group-hover:scale-110 transition-transform duration-300" />
              Scan QR Code
              <ChevronDown
                className={`w-4 h-4 ml-1 transition-transform duration-300 ${
                  showQR ? "rotate-180" : ""
                }`}
              />
            </button>

            {showQR && (
              <div className="animate-scale max-w-xs mx-auto bg-white/10 backdrop-blur-sm rounded-2xl p-4">
                <div className="bg-white p-4 rounded-xl inline-block shadow-lg">
                  <Image
                    src={qrImage}
                    alt="Download app QR code"
                    width={128}
                    height={128}
                    className="rounded-lg"
                    priority
                  />
                </div>
                <p className="mt-2 text-sm">Scan to download</p>
              </div>
            )}
          </div>

          {/* App Store Buttons */}
<<<<<<< HEAD:olyyo/src/components/home/AppDownload.js
          <div className="flex flex-col sm:flex-row justify-center gap-6">
            <button
              className="bg-black text-white px-8 py-4 rounded-xl flex items-center justify-center 
                         space-x-3 hover:bg-gray-900 transition-all duration-300 hover:scale-105 
                         active:scale-95 group"
            >
=======
          <div className="flex flex-col sm:flex-row justify-center gap-6 animate-slide-up " style={{animationDelay: '0.2s'}}>
            <button className="bg-black text-white px-8 py-4 rounded-xl flex items-center justify-center 
                             space-x-3 hover:bg-gray-900 transition-all duration-300 hover:scale-105 
                             active:scale-95 group ripple-effect cursor-pointer">
>>>>>>> e7986252fded341eb9838272fd96bda28472bdf6:src/components/home/AppDownload.js
              <FaApple className="w-6 h-6 group-hover:scale-110 transition-transform duration-300" />
              <div className="text-left">
                <div className="text-sm opacity-90">Download on the</div>
                <div className="text-xl font-bold flex items-center">
                  App Store
                  <Download className="w-4 h-4 ml-2 opacity-0 group-hover:opacity-100 
                                    group-hover:translate-y-1 transition-all duration-300" />
                </div>
              </div>
            </button>
<<<<<<< HEAD:olyyo/src/components/home/AppDownload.js

            <button
              className="bg-white text-gray-800 px-8 py-4 rounded-xl flex items-center justify-center 
                         space-x-3 hover:bg-gray-100 transition-all duration-300 hover:scale-105 
                         active:scale-95 group"
            >
=======
            
            <button className="bg-white text-gray-800 px-8 py-4 rounded-xl flex items-center justify-center 
                             space-x-3 hover:bg-gray-100 transition-all duration-300 hover:scale-105 
                             active:scale-95 group ripple-effect cursor-pointer">
>>>>>>> e7986252fded341eb9838272fd96bda28472bdf6:src/components/home/AppDownload.js
              <FaGoogle className="w-6 h-6 group-hover:scale-110 transition-transform duration-300" />
              <div className="text-left ">
                <div className="text-sm">Get it on</div>
                <div className="text-xl font-bold flex items-center">
                  Google Play
                  <Download className="w-4 h-4 ml-2 opacity-0 group-hover:opacity-100 
                                    group-hover:translate-y-1 transition-all duration-300" />
                </div>
              </div>
            </button>
          </div>

          {/* Stats */}
          <div className="mt-12 grid grid-cols-3 gap-4 max-w-md mx-auto">
            <div className="text-center">
              <div className="text-2xl font-bold">4.8★</div>
              <div className="text-sm opacity-90">App Rating</div>
            </div>
            <div className="text-center">
              <div className="text-2xl font-bold">1M+</div>
              <div className="text-sm opacity-90">Downloads</div>
            </div>
            <div className="text-center">
              <div className="text-2xl font-bold">50K+</div>
              <div className="text-sm opacity-90">Reviews</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
