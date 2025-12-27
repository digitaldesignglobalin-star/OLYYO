"use client";

import { useState } from "react";
import { Truck, Menu, X } from "lucide-react";

export default function DeliveryNavigation() {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  return (
    <nav className="fixed top-0 w-full bg-white/90 backdrop-blur-lg border-b border-orange-100 z-50 shadow-sm">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          <div className="flex items-center">
            <div className="flex items-center space-x-2">
              <div className="w-10 h-10 bg-gradient-to-r from-orange-500 to-red-500 rounded-lg flex items-center justify-center">
                <Truck className="w-6 h-6 text-white" />
              </div>
              <span className="text-xl font-bold text-orange-600">OLYYO Delivery</span>
            </div>
          </div>

          <div className="hidden md:flex items-center space-x-8">
            <a href="#benefits" className="text-gray-600 hover:text-orange-600 transition-colors">
              Benefits
            </a>
            <a href="#requirements" className="text-gray-600 hover:text-orange-600 transition-colors">
              Requirements
            </a>
            <a href="#earnings" className="text-gray-600 hover:text-orange-600 transition-colors">
              Earnings
            </a>
            <a href="#contact" className="text-gray-600 hover:text-orange-600 transition-colors">
              Contact
            </a>
            <button
              onClick={() => document.getElementById('applyForm').scrollIntoView({ behavior: 'smooth' })}
              className="px-6 py-2 bg-gradient-to-r from-orange-500 to-red-500 text-white rounded-lg font-medium hover:shadow-lg hover:shadow-orange-200 transition-all duration-300"
            >
              Apply Now
            </button>
          </div>

          <button
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            className="md:hidden p-2 rounded-lg hover:bg-orange-50"
          >
            {isMobileMenuOpen ? <X className="w-6 h-6 text-gray-700" /> : <Menu className="w-6 h-6 text-gray-700" />}
          </button>
        </div>

        {isMobileMenuOpen && (
          <div className="md:hidden pb-4 border-t border-orange-100 mt-2">
            <div className="flex flex-col space-y-4 pt-4">
              <a href="#benefits" className="text-gray-600 hover:text-orange-600 transition-colors">
                Benefits
              </a>
              <a href="#requirements" className="text-gray-600 hover:text-orange-600 transition-colors">
                Requirements
              </a>
              <a href="#earnings" className="text-gray-600 hover:text-orange-600 transition-colors">
                Earnings
              </a>
              <a href="#contact" className="text-gray-600 hover:text-orange-600 transition-colors">
                Contact
              </a>
              <button
                onClick={() => {
                  document.getElementById('applyForm').scrollIntoView({ behavior: 'smooth' });
                  setIsMobileMenuOpen(false);
                }}
                className="px-6 py-2 bg-gradient-to-r from-orange-500 to-red-500 text-white rounded-lg font-medium"
              >
                Apply Now
              </button>
            </div>
          </div>
        )}
      </div>
    </nav>
  );
}