"use client";

import { useState } from "react";
import { Upload, AlertTriangle, Plus } from "lucide-react";
import Link from "next/link";
import Complaints from "@/components/restaurant/Complaints";
import CurrentlyAvailableDishes from "@/components/restaurant/CurrentlyAvailableDishes";
import CustomerFeedback from "@/components/restaurant/CustomerFeedback";
import DeliveryStatus from "@/components/restaurant/DeliveryStatus";
import RecentOrders from "@/components/restaurant/RecentOrders";
import RestaurantHeader from "@/components/restaurant/RestaurantHeader";
import RestaurantSidebar from "@/components/restaurant/RestaurantSidebar";
import RestaurantStats from "@/components/restaurant/RestaurantStats";
import TodaysOrdersTimeline from "@/components/restaurant/TodaysOrdersTimeline";

export default function RestaurantDashboard() {
  const [activeTab, setActiveTab] = useState("dashboard");
  const [isMobileOpen, setIsMobileOpen] = useState(false);
  const [searchQuery, setSearchQuery] = useState("");

  const renderContent = () => {
    switch (activeTab) {
      case "dashboard":
        return (
          <>
            <RestaurantStats />

            <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 mb-8">
              <TodaysOrdersTimeline />
              <RecentOrders />
            </div>

            {/* Full width for Currently Available Dishes */}
            <div className="mb-8">
              <CurrentlyAvailableDishes />
            </div>
          </>
        );

      case "dishes":
        return (
          <>
            <div className="mb-6">
              <div className="flex items-center justify-between mb-4">
                <h2 className="text-xl font-bold text-white">
                  Uploaded Dishes
                </h2>
                <button className="flex items-center bg-gradient-to-r from-orange-500 to-red-500 text-white px-4 py-2 rounded-lg hover:opacity-90">
                  <Upload className="w-4 h-4 mr-2" />
                  Upload New Dish
                </button>
              </div>
              <p className="text-gray-400">Manage your menu items and dishes</p>
            </div>

            <CurrentlyAvailableDishes />
          </>
        );

      case "delivery":
        return (
          <>
            <div className="mb-6">
              <div className="flex items-center justify-between mb-4">
                <h2 className="text-xl font-bold text-white">
                  Delivery Status
                </h2>
                <p className="text-gray-400">
                  Real-time delivery tracking and management
                </p>
              </div>
            </div>

            <DeliveryStatus />
          </>
        );

      case "orders":
        return (
          <>
            <div className="mb-6">
              <div className="flex items-center justify-between mb-4">
                <h2 className="text-xl font-bold text-white">Current Orders</h2>
              </div>
              <p className="text-gray-400">
                Manage and track your current orders
              </p>
            </div>

            <RecentOrders />
          </>
        );

      case "complaints":
        return (
          <>
            <div className="mb-6">
              <div className="flex items-center justify-between mb-4">
                <h2 className="text-xl font-bold text-white">
                  Customer Complaints
                </h2>
                <div className="flex items-center space-x-2">
                </div>
              </div>
              <p className="text-gray-400">
                Manage and resolve customer complaints
              </p>
            </div>

            <Complaints />
          </>
        );

      case "feedback":
        return (
          <>
            <div className="mb-6">
              <div className="flex items-center justify-between mb-4">
                <h2 className="text-xl font-bold text-white">
                  Customer Feedback
                </h2>
              </div>
              <p className="text-gray-400">
                Reviews and ratings from your customers
              </p>
            </div>

            <CustomerFeedback />
          </>
        );

      default:
        return <RestaurantStats />;
    }
  };

  return (
    <div className="flex min-h-screen bg-gray-950 text-gray-300">
      <RestaurantSidebar
        activeTab={activeTab}
        setActiveTab={setActiveTab}
        isMobileOpen={isMobileOpen}
        setIsMobileOpen={setIsMobileOpen}
      />

      <div className="flex-1 lg:ml-64 min-w-0 overflow-hidden">
        <RestaurantHeader
          activeTab={activeTab}
          searchQuery={searchQuery}
          setSearchQuery={setSearchQuery}
        />

        {/* Main Content */}
        <main className="p-5">{renderContent()}</main>

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
        className="fixed bottom-6 right-6 w-12 h-12 bg-gradient-to-r from-orange-500 to-red-500 
                       rounded-full flex items-center justify-center shadow-xl hover:scale-110 
                       transition-transform duration-300 z-40"
      >
        <Plus className="w-6 h-6 text-white" />
      </button>
    </div>
  );
}