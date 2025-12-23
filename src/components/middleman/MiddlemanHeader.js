"use client";

import { Search, Bell, Settings } from "lucide-react";

export default function MiddlemanHeader({ activeTab, searchQuery, setSearchQuery }) {
  const getPlaceholder = () => {
    switch (activeTab) {
      case "restaurants":
        return "Search restaurants...";
      case "delivery":
        return "Search delivery partners...";
      case "orders":
        return "Search orders...";
      case "disputes":
        return "Search disputes...";
      case "commission":
        return "Search transactions...";
      default:
        return "Search...";
    }
  };

  return (
    <header className="sticky top-0 z-30 bg-gray-900 border-b border-gray-800 p-6">
      <div className="flex flex-col md:flex-row md:items-center justify-between gap-4">
        <div className="mb-4 lg:mb-0 ml-auto lg:ml-0 text-right lg:text-left">
          <h2 className="text-2xl font-bold text-white capitalize">
            {activeTab === "dashboard"
              ? "Middleman Dashboard"
              : activeTab === "restaurants"
              ? "Restaurant Partners"
              : activeTab === "delivery"
              ? "Delivery Partners"
              : activeTab === "orders"
              ? "Active Orders"
              : activeTab === "disputes"
              ? "Dispute Resolution"
              : activeTab === "commission"
              ? "Commission Management"
              : activeTab}
          </h2>
          <p className="text-gray-400">
            {activeTab === "dashboard"
              ? "Welcome to your coordination panel"
              : activeTab === "restaurants"
              ? "Manage restaurant partnerships and coordination"
              : activeTab === "delivery"
              ? "Manage and coordinate with delivery partners"
              : activeTab === "orders"
              ? "Coordinate and manage active orders"
              : activeTab === "disputes"
              ? "Resolve conflicts between restaurants and delivery partners"
              : activeTab === "commission"
              ? "Track commission earnings and performance"
              : "Middleman coordination panel"}
          </p>
        </div>

        {/* Search & Actions */}
        <div className="flex items-center space-x-4">
          <div className="relative">
            <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 w-5 h-5 text-gray-500" />
            <input
              type="text"
              placeholder={getPlaceholder()}
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="pl-10 pr-4 py-2.5 bg-gray-800 border border-gray-700 rounded-lg 
                       text-gray-300 placeholder-gray-500 focus:outline-none focus:border-green-500 
                       w-full md:w-64"
            />
          </div>

          <button className="relative p-2.5 hover:bg-gray-800 rounded-lg">
            <Bell className="w-5 h-5" />
            <span className="absolute -top-1 -right-1 w-2 h-2 bg-red-500 rounded-full"></span>
          </button>

          <button className="p-2.5 hover:bg-gray-800 rounded-lg">
            <Settings className="w-5 h-5" />
          </button>
        </div>
      </div>
    </header>
  );
}