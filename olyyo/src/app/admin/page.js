"use client";

import { useState } from "react";
import {
  Store,
  Users,
  Truck,
  User,
  TrendingUp,
  ShoppingBag,
  CreditCard,
  AlertCircle,
  IndianRupee,
  Star,
  ShoppingCart,
  Zap,
} from "lucide-react";
import Link from "next/link";
// import RestaurantManagement from "../components/RestaurantManagement";
// import TrackDetailInfo from "../components/TrackDetailInfo";
import AdminSidebar from "@/components/admin/AdminSidebar";
import DashboardHeader from "@/components/admin/DashboardHeader";
import ComplaintsPage from "@/components/admin/ComplaintsPage";
import FeedbackPage from "@/components/admin/FeedbackPage";
import InteractiveChart from "@/components/admin/InteractiveChart";
import RestaurantManagement from "@/components/admin/RestaurantManagement";
import TrackDetailInfo from "@/components/admin/TrackDetailInfo";

// Main Admin Dashboard Component
export default function AdminDashboard() {
  const [activeTab, setActiveTab] = useState("dashboard");
  const [isMobileOpen, setIsMobileOpen] = useState(false);
  const [searchQuery, setSearchQuery] = useState("");

  return (
    <div className="relative flex min-h-screen bg-gradient-to-br from-gray-950 via-black to-gray-950 text-gray-300">
      <AdminSidebar
        activeTab={activeTab}
        setActiveTab={setActiveTab}
        isMobileOpen={isMobileOpen}
        setIsMobileOpen={setIsMobileOpen}
      />

      <div className="flex-1 w-full overflow-x-hidden">
        <DashboardHeader 
          activeTab={activeTab} 
          searchQuery={searchQuery} 
          setSearchQuery={setSearchQuery} 
        />

        {/* Main Content with Animation */}
        <main className=" pt-25 max-w-[1600px] mx-auto mt-16 lg:mt-0">
          {/* Show different content based on active tab */}
          {activeTab === "dashboard" && (
            <div className="space-y-6 animate-fade-in">
              {/* Total Revenue Card */}
              <div className="bg-gradient-to-br from-gray-900 to-gray-950 border border-gray-800 rounded-2xl p-6 mb-6">
                <div className="text-center">
                  <h1 className="text-4xl lg:text-5xl font-bold text-white mb-2">
                    ₹42,58000
                  </h1>
                  <p className="text-gray-400 text-lg">Total Revenue</p>
                </div>
              </div>

              {/* Main dashboard grid matching the image */}
              <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 items-stretch">
                {/* Left column: Revenue Analytics and Total Orders */}
                <div className="lg:col-span-2 space-y-6">
                  <InteractiveChart title="Revenue Analytics" type="line" />

                  {/* Total Orders card */}
                  <div className="bg-gradient-to-br from-gray-900 to-gray-950 border border-gray-800 rounded-2xl p-6">
                    <div className="flex items-center justify-between mb-4">
                      <div>
                        <h3 className="text-2xl font-bold text-white">3,284</h3>
                        <p className="text-gray-400">Total Orders</p>
                      </div>
                      <div className="flex items-center px-3 py-1.5 rounded-full bg-green-500/10 text-green-400 text-sm font-medium">
                        <TrendingUp className="w-4 h-4 mr-2" />
                        +8.2%
                      </div>
                    </div>
                    <div className="text-sm text-gray-500">
                      Search analytics...
                    </div>
                  </div>
                </div>

                {/* Right column: Active Users and Track sections */}
                <div className="space-y-6">
                  {/* Active Users card */}
                  <div className="bg-gradient-to-br from-gray-900 to-gray-950 border border-gray-800 rounded-2xl p-6">
                    <div className="flex items-center justify-between mb-4">
                      <div>
                        <h3 className="text-2xl font-bold text-white">
                          12,458
                        </h3>
                        <p className="text-gray-400">Active Users</p>
                      </div>
                      <div className="flex items-center px-3 py-1.5 rounded-full bg-green-500/10 text-green-400 text-sm font-medium">
                        <TrendingUp className="w-4 h-4 mr-2" />
                        +5.7%
                      </div>
                    </div>
                  </div>

                  {/* Dashboard (Admin) Track section */}
                  <div className="bg-gradient-to-br from-gray-900 to-gray-950 border border-gray-800 rounded-2xl p-6">
                    <h3 className="text-xl font-bold text-white mb-4">
                      Dashboard (Admin)
                    </h3>
                    <div className="grid grid-cols-2 gap-4">
                      <div className="bg-gradient-to-br from-orange-500/10 to-orange-600/10 border border-orange-500/20 rounded-xl p-4">
                        <div className="flex items-center justify-between mb-2">
                          <Store className="w-5 h-5 text-orange-400" />
                          <span className="text-xs text-orange-400 bg-orange-500/10 px-2 py-1 rounded-full">
                            24
                          </span>
                        </div>
                        <p className="text-sm font-medium text-white">
                          Track Restaurant
                        </p>
                      </div>

                      <div className="bg-gradient-to-br from-blue-500/10 to-blue-600/10 border border-blue-500/20 rounded-xl p-4">
                        <div className="flex items-center justify-between mb-2">
                          <Users className="w-5 h-5 text-blue-400" />
                          <span className="text-xs text-blue-400 bg-blue-500/10 px-2 py-1 rounded-full">
                            12
                          </span>
                        </div>
                        <p className="text-sm font-medium text-white">
                          Track Middle Man
                        </p>
                      </div>

                      <div className="bg-gradient-to-br from-green-500/10 to-green-600/10 border border-green-500/20 rounded-xl p-4">
                        <div className="flex items-center justify-between mb-2">
                          <Truck className="w-5 h-5 text-green-400" />
                          <span className="text-xs text-green-400 bg-green-500/10 px-2 py-1 rounded-full">
                            48
                          </span>
                        </div>
                        <p className="text-sm font-medium text-white">
                          Track Delivery Partner
                        </p>
                      </div>

                      <div className="bg-gradient-to-br from-purple-500/10 to-purple-600/10 border border-purple-500/20 rounded-xl p-4">
                        <div className="flex items-center justify-between mb-2">
                          <User className="w-5 h-5 text-purple-400" />
                          <span className="text-xs text-purple-400 bg-purple-500/10 px-2 py-1 rounded-full">
                            37
                          </span>
                        </div>
                        <p className="text-sm font-medium text-white">
                          Track Customer (User)
                        </p>
                      </div>
                    </div>

                    {/* Issue section */}
                    <div className="mt-6 p-4 bg-gradient-to-br from-red-500/10 to-red-600/10 border border-red-500/20 rounded-xl">
                      <div className="flex items-center justify-between mb-2">
                        <div className="flex items-center">
                          <AlertCircle className="w-5 h-5 text-red-400 mr-2" />
                          <span className="text-sm font-medium text-white">
                            1 issue
                          </span>
                        </div>
                        <span className="text-xs text-gray-400">X</span>
                      </div>
                      <p className="text-sm text-gray-400">Zoom</p>
                    </div>
                  </div>
                </div>
              </div>

              {/* Bottom row: Recent Activity, Top Performers, and Quick Stats */}
              <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
                {/* Recent Activity with specific items from image */}
                <div className="bg-gradient-to-br from-gray-900 to-gray-950 border border-gray-800 rounded-2xl p-6">
                  <h3 className="text-xl font-bold text-white mb-6">
                    Recent Activity
                  </h3>
                  <div className="space-y-4">
                    {/* Order */}
                    <div className="flex items-center justify-between p-3 bg-gray-800/30 rounded-xl">
                      <div className="flex items-center">
                        <div className="p-2 bg-blue-500/10 rounded-lg mr-3">
                          <ShoppingBag className="w-4 h-4 text-blue-400" />
                        </div>
                        <div>
                          <p className="text-sm font-medium text-white">
                            #ORD-7842
                          </p>
                          <p className="text-xs text-gray-400">
                            Pizza Palace - ₹429934
                          </p>
                        </div>
                      </div>
                    </div>

                    {/* Payment */}
                    <div className="flex items-center justify-between p-3 bg-gray-800/30 rounded-xl">
                      <div className="flex items-center">
                        <div className="p-2 bg-green-500/10 rounded-lg mr-3">
                          <CreditCard className="w-4 h-4 text-green-400" />
                        </div>
                        <div>
                          <p className="text-sm font-medium text-white">
                            Payment
                          </p>
                          <p className="text-xs text-gray-400">
                            Credit Card - $128.75
                          </p>
                        </div>
                      </div>
                      <span className="text-xs text-gray-500">15 min ago</span>
                    </div>

                    {/* New User */}
                    <div className="flex items-center justify-between p-3 bg-gray-800/30 rounded-xl">
                      <div className="flex items-center">
                        <div className="p-2 bg-purple-500/10 rounded-lg mr-3">
                          <User className="w-4 h-4 text-purple-400" />
                        </div>
                        <div>
                          <p className="text-sm font-medium text-white">
                            New User Registered
                          </p>
                          <p className="text-xs text-gray-400">
                            Premium Customer
                          </p>
                        </div>
                      </div>
                    </div>

                    {/* Delivery Issue */}
                    <div className="flex items-center justify-between p-3 bg-red-500/10 border border-red-500/20 rounded-xl">
                      <div className="flex items-center">
                        <div className="p-2 bg-red-500/10 rounded-lg mr-3">
                          <AlertCircle className="w-4 h-4 text-red-400" />
                        </div>
                        <div>
                          <p className="text-sm font-medium text-white">
                            Delivery issue
                          </p>
                          <p className="text-xs text-gray-400">Hours ago</p>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>

                {/* Top Performers with specific items from image */}
                <div className="bg-gradient-to-br from-gray-900 to-gray-950 border border-gray-800 rounded-2xl p-6">
                  <h3 className="text-xl font-bold text-white mb-6">
                    Top Performers
                  </h3>
                  <div className="space-y-4">
                    {[
                      {
                        name: "John",
                        role: "Delivery",
                        metric: "Delivery trips",
                        change: "+18%",
                        icon: "🚚",
                      },
                      {
                        name: "Bugger Barn",
                        role: "Restaurant",
                        metric: "Restaurant",
                        change: "+12%",
                        icon: "🍔",
                      },
                      {
                        name: "Mike Middleman",
                        role: "Middleman",
                        metric: "Middleman",
                        change: "+8%",
                        icon: "👨‍💼",
                      },
                      {
                        name: "Sarah Customer",
                        role: "Customer",
                        metric: "Customer",
                        change: "+32%",
                        icon: "👩",
                      },
                    ].map((performer, index) => (
                      <div
                        key={index}
                        className="flex items-center justify-between p-3 bg-gray-800/30 rounded-xl"
                      >
                        <div className="flex items-center">
                          <div className="w-10 h-10 bg-gray-800 rounded-lg flex items-center justify-center mr-3">
                            <span className="text-lg">{performer.icon}</span>
                          </div>
                          <div>
                            <p className="text-sm font-medium text-white">
                              {performer.name}
                            </p>
                            <p className="text-xs text-gray-400">
                              {performer.role} • {performer.metric}
                            </p>
                          </div>
                        </div>
                        <div className="text-right">
                          <p className="text-sm font-medium text-green-400">
                            {performer.change}
                          </p>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>

                {/* Quick Stats with specific metrics from image */}
                <div className="bg-gradient-to-br from-gray-900 to-gray-950 border border-gray-800 rounded-2xl p-6">
                  <h3 className="text-xl font-bold text-white mb-6">
                    Performance Metrics
                  </h3>
                  <div className="space-y-6">
                    <div className="text-center">
                      <div className="text-3xl font-bold text-white mb-2">
                        18 min
                      </div>
                      <p className="text-gray-400">Delivery time</p>
                    </div>

                    <div className="text-center">
                      <div className="flex items-center justify-center mb-2">
                        <Star className="w-5 h-5 text-yellow-500 fill-current mr-2" />
                        <span className="text-3xl font-bold text-white">
                          4.8
                        </span>
                      </div>
                      <p className="text-gray-400">Customer Rating</p>
                    </div>

                    <div className="grid grid-cols-2 gap-4">
                      <div className="text-center p-3 bg-gray-800/30 rounded-xl">
                        <div className="text-lg font-bold text-white">92%</div>
                        <p className="text-xs text-gray-400">Success Rate</p>
                      </div>
                      <div className="text-center p-3 bg-gray-800/30 rounded-xl">
                        <div className="text-lg font-bold text-green-400">
                          +24%
                        </div>
                        <p className="text-xs text-gray-400">Growth</p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          )}

          {/* Restaurant Tracking */}
          {activeTab === "restaurants" && <RestaurantManagement />}

          {/* Middle Man Tracking */}
          {activeTab === "middlemen" && (
            <div className="space-y-6 animate-fade-in">
              <InteractiveChart
                title="Middle Man Commission Analytics"
                type="line"
              />
              <TrackDetailInfo type="middlemen" />
            </div>
          )}

          {/* Delivery Partner Tracking */}
          {activeTab === "delivery" && (
            <div className="space-y-6 animate-fade-in">
              <InteractiveChart
                title="Delivery Performance Analytics"
                type="bar"
              />
              <TrackDetailInfo type="delivery" />
            </div>
          )}

          {/* Customer Tracking */}
          {activeTab === "customers" && (
            <div className="space-y-6 animate-fade-in">
              <InteractiveChart title="Customer Growth Analytics" type="area" />
              <TrackDetailInfo type="customers" />
            </div>
          )}

          {/* Feedback Page */}
          {activeTab === "feedback" && <FeedbackPage />}

          {/* Complaints Page */}
          {activeTab === "complaints" && <ComplaintsPage />}
        </main>

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
        className="fixed bottom-6 right-6 w-14 h-14 bg-gradient-to-r from-orange-500 to-red-500 
                       rounded-full flex items-center justify-center shadow-2xl hover:scale-110 
                       transition-transform duration-300 z-40 group"
      >
        <Zap className="w-6 h-6 text-white group-hover:rotate-12 transition-transform duration-300" />
        <div className="absolute inset-0 bg-gradient-to-r from-orange-500 to-red-500 rounded-full blur-lg opacity-50 group-hover:opacity-70 transition-opacity duration-300"></div>
      </button>
    </div>
  );
}