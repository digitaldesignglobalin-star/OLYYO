"use client";

import { useState } from "react";
import {
  Plus,
  AlertTriangle,
  IndianRupee,
  Zap,
} from "lucide-react";
import Link from "next/link";
// import MiddlemanHeader from "../../components/MiddlemanHeader";
import ActiveOrders from "@/components/middleman/ActiveOrders";
import CommissionTracker from "@/components/middleman/CommissionTracker";
import CoordinationTimeline from "@/components/middleman/CoordinationTimeline";
import DeliveryPartners from "@/components/middleman/DeliveryPartners";
import Disputes from "@/components/middleman/Disputes";
import MiddlemanSidebar from "@/components/middleman/MiddlemanSidebar";
import MiddlemanStats from "@/components/middleman/MiddlemanStats";
import RestaurantsList from "@/components/middleman/RestaurantsList";
import MiddlemanHeader from "@/components/middleman/MiddlemanHeader";

export default function MiddlemanDashboard() {
  const [activeTab, setActiveTab] = useState("dashboard");
  const [isMobileOpen, setIsMobileOpen] = useState(false);
  const [searchQuery, setSearchQuery] = useState("");

  const renderContent = () => {
    switch (activeTab) {
      case "dashboard":
        return (
          <>
            <MiddlemanStats />

            <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 mb-8">
              <CoordinationTimeline />
              <ActiveOrders />
            </div>

            <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 min-w-0">
              <RestaurantsList />
              <DeliveryPartners />
            </div>
          </>
        );

      case "restaurants":
        return (
          <>
            <div className="mb-6">
              <div className="flex items-center justify-between mb-4">
                <h2 className="text-xl font-bold text-white">
                  Restaurant Partners
                </h2>
                <button className="flex items-center bg-gradient-to-r from-green-500 to-emerald-500 text-white px-4 py-2 rounded-lg hover:opacity-90">
                  <Plus className="w-4 h-4 mr-2" />
                  Add Restaurant
                </button>
              </div>
              <p className="text-gray-400">
                Manage restaurant partnerships and coordination
              </p>
            </div>

            <RestaurantsList />
          </>
        );

      case "delivery":
        return (
          <>
            <div className="mb-6">
              <div className="flex items-center justify-between mb-4">
                <h2 className="text-xl font-bold text-white">
                  Delivery Partners
                </h2>
              </div>
              <p className="text-gray-400">
                Manage and coordinate with delivery partners
              </p>
            </div>

            <DeliveryPartners />
          </>
        );

      case "orders":
        return (
          <>
            <div className="mb-6">
              <div className="flex items-center justify-between mb-4">
                <h2 className="text-xl font-bold text-white">Active Orders</h2>
              </div>
              <p className="text-gray-400">
                Coordinate and manage active orders
              </p>
            </div>

            <ActiveOrders />
          </>
        );

      case "disputes":
        return (
          <>
            <div className="mb-6">
              <div className="flex items-center justify-between mb-4">
                <h2 className="text-xl font-bold text-white">
                  Dispute Resolution
                </h2>
                <button className="flex items-center bg-gradient-to-r from-red-500 to-pink-500 text-white px-4 py-2 rounded-lg hover:opacity-90">
                  <AlertTriangle className="w-4 h-4 mr-2" />
                  Report New Dispute
                </button>
              </div>
              <p className="text-gray-400">
                Resolve conflicts between restaurants and delivery partners
              </p>
            </div>

            <Disputes />
          </>
        );

      case "commission":
        return (
          <>
            <div className="mb-6">
              <div className="flex items-center justify-between mb-4">
                <h2 className="text-xl font-bold text-white">
                  Commission Management
                </h2>
                <div className="flex items-center space-x-2">
                  <button className="flex items-center bg-gradient-to-r from-green-500 to-emerald-500 text-white px-4 py-2 rounded-lg hover:opacity-90">
                    <IndianRupee className="w-4 h-4 mr-2" />
                    View Payouts
                  </button>
                </div>
              </div>
              <p className="text-gray-400">
                Track commission earnings and performance
              </p>
            </div>

            <CommissionTracker />
          </>
        );

      default:
        return <MiddlemanStats />;
    }
  };

  return (
    <div className="flex min-h-screen bg-gray-950 text-gray-300">
      <MiddlemanSidebar
        activeTab={activeTab}
        setActiveTab={setActiveTab}
        isMobileOpen={isMobileOpen}
        setIsMobileOpen={setIsMobileOpen}
      />

      <div className="flex-1 ml-0 lg:ml-64 min-w-0 overflow-hidden">
        <MiddlemanHeader
          activeTab={activeTab}
          searchQuery={searchQuery}
          setSearchQuery={setSearchQuery}
        />

        {/* Main Content */}
        <main className="p-6">{renderContent()}</main>

        {/* Footer */}
        <footer className="p-6 border-t border-gray-800 text-center text-gray-500 text-sm">
          <p>
            OLYYO Admin Panel v2.0 • {new Date().getFullYear()} • All rights
            reserved
          </p>
          <p className="mt-1 text-xs">
            ❤️Proudly developed by{" "}
            <Link href="https://designglobal.in/" target="_blank">
              Design Global Technology
            </Link>
          </p>
        </footer>
      </div>

      {/* Floating Action Button */}
      <button
        className="fixed bottom-6 right-6 w-12 h-12 bg-gradient-to-r from-green-500 to-emerald-500 
                       rounded-full flex items-center justify-center shadow-xl hover:scale-110 
                       transition-transform duration-300 z-40"
      >
        <Plus className="w-6 h-6 text-white" />
      </button>
    </div>
  );
}