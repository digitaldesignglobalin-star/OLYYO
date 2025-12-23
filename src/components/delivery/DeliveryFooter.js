"use client";

import {
  Truck,
  Smartphone,
  PhoneIcon,
  Mail,
  MapPin,
} from "lucide-react";
import Link from "next/link";

export default function DeliveryFooter() {
  return (
    <footer className="bg-gray-900 text-white py-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          <div>
            <div className="flex items-center space-x-2 mb-4">
              <div className="w-10 h-10 bg-gradient-to-r from-orange-500 to-red-500 rounded-lg flex items-center justify-center">
                <Truck className="w-6 h-6 text-white" />
              </div>
              <span className="text-xl font-bold text-white">OLYYO Delivery</span>
            </div>
            <p className="text-gray-400 text-sm">
              Empowering delivery partners across India with flexible earning opportunities.
            </p>
          </div>
          
          <div>
            <h4 className="text-lg font-bold text-white mb-4">Contact</h4>
            <div className="space-y-2">
              <div className="flex items-center space-x-2 text-gray-400">
                <PhoneIcon className="w-4 h-4" />
                <span>+1-800-OLYYO-123</span>
              </div>
              <div className="flex items-center space-x-2 text-gray-400">
                <Mail className="w-4 h-4" />
                <span>partners@olyyo.com</span>
              </div>
              <div className="flex items-center space-x-2 text-gray-400">
                <MapPin className="w-4 h-4" />
                <span>New Delhi, India</span>
              </div>
            </div>
          </div>
          
          <div>
            <h4 className="text-lg font-bold text-white mb-4">Quick Links</h4>
            <div className="space-y-2">
              <a href="#benefits" className="block text-gray-400 hover:text-orange-300 transition-colors">
                Benefits
              </a>
              <a href="#requirements" className="block text-gray-400 hover:text-orange-300 transition-colors">
                Requirements
              </a>
              <a href="#earnings" className="block text-gray-400 hover:text-orange-300 transition-colors">
                Earnings
              </a>
              <a href="#applyForm" className="block text-gray-400 hover:text-orange-300 transition-colors">
                Apply Now
              </a>
            </div>
          </div>
          
          <div>
            <h4 className="text-lg font-bold text-white mb-4">Download App</h4>
            <div className="space-y-3">
              <a
                href="https://play.google.com/store/apps/details?id=com.olyyo.delivery"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center space-x-2 p-3 bg-gray-800 rounded-lg hover:bg-gray-700 transition-colors"
              >
                <Smartphone className="w-5 h-5 text-orange-400" />
                <span className="text-white">Android App</span>
              </a>
              <a
                href="https://apps.apple.com/app/olyyo-delivery-partner"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center space-x-2 p-3 bg-gray-800 rounded-lg hover:bg-gray-700 transition-colors"
              >
                <Smartphone className="w-5 h-5 text-orange-400" />
                <span className="text-white">iOS App</span>
              </a>
            </div>
          </div>
        </div>
        
        <div className="mt-8 pt-8 border-t border-gray-800 text-center text-gray-500 text-sm">
          <p>© {new Date().getFullYear()} OLYYO Delivery. All rights reserved.</p>

          <p className="mt-1 text-xs">
            ❤️Proudly developed by{" "}
            <Link href="https://designglobal.in/" target="_blank">
              Design Global Technology
            </Link>
          </p>
        </div>
      </div>
    </footer>
  );
}