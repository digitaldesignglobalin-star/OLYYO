"use client";

import {
  Truck,
  Smartphone,
  Download,
  ChevronRight,
  ZapIcon,
  ClockIcon,
  ShieldIcon,
  CalendarIcon,
  TrendingUpIcon,
  QrCode,
  IndianRupee,
} from "lucide-react";

export default function DeliveryHeroSection() {
  return (
    <div className="pt-24 pb-16 px-4 sm:px-6 lg:px-8 bg-gradient-to-b from-orange-500/5 to-transparent">
      <div className="max-w-7xl mx-auto">
        <div className="flex flex-col lg:flex-row items-center justify-between gap-12">
          {/* Left Column - Text Content */}
          <div className="lg:w-1/2 text-left">
            {/* Delivery Partner Badge */}
            <div className="inline-flex items-center px-4 py-2 bg-orange-100 text-orange-700 rounded-full text-sm font-medium mb-6">
              <ZapIcon className="w-4 h-4 mr-2" />
              EARN WHILE YOU DELIVER
            </div>
            
            <h1 className="text-4xl md:text-6xl font-bold text-gray-900 mb-6">
              Start Earning <span className="bg-gradient-to-r from-orange-500 to-red-500 bg-clip-text text-transparent">
              ₹50,000/Month
              </span>
            </h1>
            
            <p className="text-xl text-gray-600 mb-8 max-w-2xl">
              Become an OLYYO Delivery Partner - India's fastest growing delivery platform. 
              Work on your schedule, earn great money, and build your career.
            </p>

            {/* Quick Stats for Partners */}
            <div className="grid grid-cols-2 gap-6 mb-8">
              <div className="flex items-center space-x-3">
                <div className="w-10 h-10 bg-gradient-to-r from-orange-500/10 to-red-500/10 rounded-lg flex items-center justify-center">
                  <ClockIcon className="w-5 h-5 text-orange-500" />
                </div>
                <div>
                  <div className="text-lg font-bold text-orange-600">24/7</div>
                  <div className="text-sm text-gray-600">Flexible Hours</div>
                </div>
              </div>
              
              <div className="flex items-center space-x-3">
                <div className="w-10 h-10 bg-gradient-to-r from-orange-500/10 to-red-500/10 rounded-lg flex items-center justify-center">
                  <ShieldIcon className="w-5 h-5 text-orange-500" />
                </div>
                <div>
                  <div className="text-lg font-bold text-orange-600">100%</div>
                  <div className="text-sm text-gray-600">Insurance Covered</div>
                </div>
              </div>
              
              <div className="flex items-center space-x-3">
                <div className="w-10 h-10 bg-gradient-to-r from-orange-500/10 to-red-500/10 rounded-lg flex items-center justify-center">
                  <CalendarIcon className="w-5 h-5 text-orange-500" />
                </div>
                <div>
                  <div className="text-lg font-bold text-orange-600">7 Days</div>
                  <div className="text-sm text-gray-600">Weekly Payments</div>
                </div>
              </div>
              
              <div className="flex items-center space-x-3">
                <div className="w-10 h-10 bg-gradient-to-r from-orange-500/10 to-red-500/10 rounded-lg flex items-center justify-center">
                  <TrendingUpIcon className="w-5 h-5 text-orange-500" />
                </div>
                <div>
                  <div className="text-lg font-bold text-orange-600">₹5,000+</div>
                  <div className="text-sm text-gray-600">Weekly Bonus</div>
                </div>
              </div>
            </div>

            <button
              onClick={() => document.getElementById('applyForm').scrollIntoView({ behavior: 'smooth' })}
              className="px-8 py-4 bg-gradient-to-r from-orange-500 to-red-500 text-white text-lg font-bold rounded-xl hover:shadow-2xl hover:shadow-orange-200 hover:scale-105 transition-all duration-300"
            >
              Apply Now & Start Earning
              <ChevronRight className="w-5 h-5 inline ml-2" />
            </button>
          </div>

          {/* Right Column - QR Code & Download Card */}
          <div className="lg:w-1/2 flex justify-center">
            <div className="bg-white border-2 border-orange-200 rounded-2xl p-8 shadow-xl max-w-md">
              <div className="text-center mb-6">
                <div className="inline-flex items-center justify-center w-16 h-16 bg-gradient-to-r from-orange-500 to-red-500 rounded-2xl mb-4">
                  <Smartphone className="w-8 h-8 text-white" />
                </div>
                <h3 className="text-2xl font-bold text-gray-900 mb-2">
                  Download the App Now!
                </h3>
                <p className="text-gray-600">
                  Scan QR code to download OLYYO Delivery Partner App
                </p>
              </div>

              {/* QR Code Container - Black QR Code */}
              <div className="relative mb-6">
                <div className="bg-white p-6 rounded-2xl border-2 border-gray-300 shadow-lg">
                  <div className="bg-white rounded-lg p-4 relative overflow-hidden border border-gray-200">
                    {/* Black QR Code */}
                    <div className="relative h-full flex items-center justify-center">
                      <div className="grid grid-cols-11 gap-1">
                        {/* QR Pattern - Black Squares */}
                        {Array.from({ length: 121 }).map((_, i) => {
                          const row = Math.floor(i / 11);
                          const col = i % 11;
                          
                          // Create QR pattern (position markers and data)
                          const isCorner = (
                            (row <= 2 && col <= 2) || 
                            (row <= 2 && col >= 8) || 
                            (row >= 8 && col <= 2)
                          );
                          
                          const isPattern = isCorner || (
                            row >= 4 && row <= 6 && col >= 4 && col <= 6
                          ) || (
                            Math.random() > 0.5 && !isCorner
                          );
                          
                          return (
                            <div
                              key={i}
                              className={`w-2 h-2 ${isPattern ? 'bg-black' : 'bg-white'}`}
                            />
                          );
                        })}
                      </div>
                    </div>
                  </div>
                  
                  {/* Scan Animation - Black */}
                  <div className="absolute top-0 left-1/2 transform -translate-x-1/2 w-full h-1 bg-gradient-to-r from-transparent via-black to-transparent animate-scan rounded-full opacity-60"></div>
                </div>

                <style jsx>{`
                  @keyframes scan {
                    0% {
                      top: 0%;
                      opacity: 0.3;
                    }
                    50% {
                      opacity: 0.8;
                    }
                    100% {
                      top: 100%;
                      opacity: 0.3;
                    }
                  }
                  
                  .animate-scan {
                    animation: scan 2s ease-in-out infinite;
                  }
                `}</style>
              </div>

              {/* Download Instructions */}
              <div className="space-y-4">
                <div className="flex items-center space-x-3 p-3 bg-orange-50 rounded-lg">
                  <div className="w-10 h-10 bg-gradient-to-r from-orange-500 to-red-500 rounded-lg flex items-center justify-center">
                    <QrCode className="w-5 h-5 text-white" />
                  </div>
                  <div>
                    <div className="font-medium text-gray-900">Scan with Phone Camera</div>
                    <div className="text-sm text-gray-600">Point your camera at the QR code</div>
                  </div>
                </div>
                
                <div className="flex items-center space-x-3 p-3 bg-orange-50 rounded-lg">
                  <div className="w-10 h-10 bg-gradient-to-r from-green-500 to-emerald-500 rounded-lg flex items-center justify-center">
                    <Download className="w-5 h-5 text-white" />
                  </div>
                  <div>
                    <div className="font-medium text-gray-900">Install App</div>
                    <div className="text-sm text-gray-600">Click download link in browser</div>
                  </div>
                </div>

                {/* Direct Download Button */}
                <a
                  href="https://play.google.com/store/apps/details?id=com.olyyo.delivery"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center justify-center space-x-2 w-full p-4 bg-gradient-to-r from-orange-500 to-red-500 text-white rounded-xl hover:shadow-lg hover:shadow-orange-200 transition-all duration-300"
                >
                  <Smartphone className="w-5 h-5" />
                  <span className="font-bold">Download Directly</span>
                </a>
                
                <div className="text-center">
                  <p className="text-sm text-gray-500">
                    Available on Google Play Store
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}