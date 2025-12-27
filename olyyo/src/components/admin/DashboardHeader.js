"use client";

import { Search, Bell, Settings } from "lucide-react";

export default function DashboardHeader({ activeTab, searchQuery, setSearchQuery }) {
  return (
    <header
      className="fixed top-0 right-0 left-0 lg:left-64 z-30
            bg-gradient-to-r from-gray-900/95 via-gray-900/95 to-black/95
            backdrop-blur-lg border-b border-gray-800 p-3  shadow-2xl"
    >
      <div className="max-w-[1600px] mx-auto flex flex-col lg:flex-row lg:items-center justify-between">
        <div className="mb-4 lg:mb-0 ml-auto lg:ml-0 text-right lg:text-left">
          <h2 className="text-2xl lg:text-3xl font-bold text-white capitalize">
            {activeTab === "dashboard"
              ? "Dashboard"
              : activeTab === "restaurants"
              ? "Track Restaurant"
              : activeTab === "middlemen"
              ? "Track Middle Man"
              : activeTab === "delivery"
              ? "Track Delivery Partner"
              : activeTab === "customers"
              ? "Track Customer (User)"
              : activeTab === "feedback"
              ? "Feedback"
              : "Complaints"}
          </h2>
          <p className="text-gray-400 text-sm mt-1">
            {activeTab === "dashboard"
              ? "Welcome to your command center"
              : activeTab === "feedback"
              ? "Customer feedback and reviews"
              : activeTab === "complaints"
              ? "Customer complaints and issues"
              : "Detailed analytics and tracking information"}
          </p>
        </div>

        <div className="flex items-center space-x-4">
          {/* Search */}
          <div className="relative">
            <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 w-5 h-5 text-gray-500" />
            <input
              type="text"
              placeholder="Search analytics..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="pl-10 pr-4 py-2.5 bg-gray-800/50 border border-gray-700 rounded-xl 
                           text-gray-300 placeholder-gray-500 focus:outline-none focus:border-orange-500/50 
                           focus:ring-2 focus:ring-orange-500/20 transition-all duration-300 w-64"
            />
          </div>

          {/* Notifications */}
          <button className="relative p-2.5 hover:bg-gray-800/50 rounded-xl transition-all duration-300 hover:scale-110">
            <Bell className="w-5 h-5" />
            <span className="absolute -top-1 -right-1 w-2 h-2 bg-gradient-to-r from-orange-500 to-red-500 rounded-full animate-ping"></span>
          </button>

          {/* Settings */}
          <button className="p-2.5 hover:bg-gray-800/50 rounded-xl transition-all duration-300 hover:scale-110">
            <Settings className="w-5 h-5" />
          </button>
        </div>
      </div>
    </header>
  );
}