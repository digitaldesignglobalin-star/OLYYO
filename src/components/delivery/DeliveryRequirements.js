"use client";

import { CheckCircle } from "lucide-react";

export default function DeliveryRequirements() {
  const requirements = [
    "Valid Driving License",
    "Smartphone with internet",
    "18+ years of age",
    "Bank account for payments",
    "Vehicle (Bike/Scooter/Car)",
  ];

  return (
    <div id="requirements" className="py-16 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        <h2 className="text-3xl md:text-4xl font-bold text-gray-900 text-center mb-12">
          Requirements to Join
        </h2>
        <div className="max-w-3xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {requirements.map((req, index) => (
              <div key={index} className="flex items-center space-x-3 bg-orange-50 rounded-xl p-4 border border-orange-100">
                <div className="w-10 h-10 bg-gradient-to-r from-orange-500/20 to-red-500/20 rounded-lg flex items-center justify-center">
                  <CheckCircle className="w-5 h-5 text-orange-500" />
                </div>
                <span className="text-gray-800">{req}</span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}