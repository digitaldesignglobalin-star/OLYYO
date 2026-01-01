"use client";

import {
  LayoutDashboard,
  Store,
  Users,
  Truck,
  User,
  MessageCircle,
  AlertTriangle,
  Home,
  Shield,
  LogOut,
  Menu,
  X,
  CheckCircle,
  XCircle,
  Wifi,
  WifiOff,
  Store as StoreIcon,
} from "lucide-react";
import Link from "next/link";
import { signOut } from "next-auth/react";

// Animated Sidebar Component
export default function AdminSidebar({
  activeTab,
  setActiveTab,
  isMobileOpen,
  setIsMobileOpen,
}) {
  const menuItems = [
    {
      id: "dashboard",
      icon: <LayoutDashboard className="w-5 h-5" />,
      label: "Dashboard (Admin)",
      count: null,
    },
    {
      id: "restaurants",
      icon: <Store className="w-5 h-5" />,
      label: "Track Restaurant",
      count: "24",
      color: "from-orange-500/20 to-orange-600/20",
    },
    {
      id: "middlemen",
      icon: <Users className="w-5 h-5" />,
      label: "Track Middle Man",
      count: "12",
      color: "from-blue-500/20 to-blue-600/20",
    },
    {
      id: "delivery",
      icon: <Truck className="w-5 h-5" />,
      label: "Track Delivery Partner",
      count: "48",
      color: "from-green-500/20 to-green-600/20",
    },
    {
      id: "customers",
      icon: <User className="w-5 h-5" />,
      label: "Track Customer (User)",
      count: "1.2K",
      color: "from-purple-500/20 to-purple-600/20",
    },
    {
      id: "feedback",
      icon: <MessageCircle className="w-5 h-5" />,
      label: "Feedback",
      count: "156",
      color: "from-cyan-500/20 to-cyan-600/20",
    },
    {
      id: "complaints",
      icon: <AlertTriangle className="w-5 h-5" />,
      label: "Complaints",
      count: "24",
      color: "from-red-500/20 to-red-600/20",
    },
  ];

  const handleLogout = async () => {
    await signOut({
      callbackUrl: "/admin/login",
    });
  };

  return (
    <>
      {/* Mobile Menu Button */}
      <button
        onClick={() => setIsMobileOpen(true)}
        className="lg:hidden fixed top-7 left-7 z-50 p-2 bg-gradient-to-r from-gray-800 to-gray-900 border border-gray-700 rounded-lg shadow-lg"
      >
        <Menu className="w-6 h-6 text-white" />
      </button>

      {/* Sidebar */}
      <aside
        className={`
        fixed inset-y-0 left-0 z-40 w-64 bg-gradient-to-b from-gray-900 via-gray-900 to-black
        border-r border-gray-800 shadow-2xl transform transition-all duration-500 ease-out
        ${isMobileOpen ? "translate-x-0" : "-translate-x-full lg:translate-x-0"}
      `}
      >
        <div className="h-20 border-b border-gray-800 flex items-center px-6 justify-between">
          {/* Desktop / Tablet Logo */}
          <Link href="/" className="hidden lg:flex items-center space-x-3">
            <div className="w-10 h-10 bg-gradient-to-r from-orange-500 to-red-500 rounded-lg flex items-center justify-center">
              <Shield className="w-6 h-6 text-white" />
            </div>
            <div>
              <h1 className="text-xl font-bold text-white">OLYYO Admin</h1>
              <p className="text-xs text-gray-500">Control Panel v2.0</p>
            </div>
          </Link>

          {/* Mobile Home Icon */}
          <Link
            href="/"
            className="lg:hidden absolute top-7 left-50 flex items-center justify-center w-10 h-10 rounded-lg bg-gray-800 hover:bg-gray-700"
          >
            <Home className="w-5 h-5 text-white" />
          </Link>
        </div>

        {/* Menu with hover effects */}
        <div className="p-4 space-y-2 overflow-y-auto h-[calc(100vh-120px)]">
          <div className="mb-6">
            <div className="px-4 mb-4">
              <div className="w-20 h-1 bg-gradient-to-r from-orange-500 to-red-500 rounded-full"></div>
            </div>
            <div className="space-y-2">
              {menuItems.map((item) => (
                <button
                  key={item.id}
                  onClick={() => {
                    setActiveTab(item.id);
                    setIsMobileOpen(false);
                  }}
                  className={`w-full flex items-center justify-between px-4 py-3 rounded-xl transition-all duration-300 group relative overflow-hidden ${
                    activeTab === item.id
                      ? "bg-gradient-to-r from-gray-800 to-gray-900 text-white shadow-lg"
                      : "text-gray-400 hover:text-white hover:bg-gray-800/50"
                  }`}
                >
                  {/* Background gradient on hover */}
                  <div
                    className={`absolute inset-0 bg-gradient-to-r ${
                      item.color || "from-gray-800/20 to-gray-900/20"
                    } opacity-0 group-hover:opacity-100 transition-opacity duration-300`}
                  ></div>

                  <div className="relative flex items-center space-x-3">
                    <div
                      className={`p-2 rounded-lg ${
                        activeTab === item.id
                          ? "bg-gradient-to-r from-orange-500/20 to-red-500/20"
                          : "bg-gray-800/50"
                      } group-hover:scale-110 transition-transform duration-300`}
                    >
                      {item.icon}
                    </div>
                    <span className="font-medium">{item.label}</span>
                  </div>

                  {item.count && (
                    <span
                      className={`relative px-2.5 py-1 text-xs rounded-full transition-all duration-300 ${
                        activeTab === item.id
                          ? "bg-gradient-to-r from-orange-500 to-red-500 text-white"
                          : "bg-gray-800 text-gray-400 group-hover:bg-gray-700"
                      }`}
                    >
                      {item.count}
                    </span>
                  )}

                  {/* Active indicator */}
                  {activeTab === item.id && (
                    <div className="absolute right-0 top-1/2 transform -translate-y-1/2 w-1 h-8 bg-gradient-to-b from-orange-500 to-red-500 rounded-l-full"></div>
                  )}
                </button>
              ))}
            </div>
          </div>

          {/* Quick Stats */}
          <div className="mt-8 p-4 bg-gradient-to-br from-gray-800/50 to-gray-900/50 border border-gray-800 rounded-xl">
            <div className="flex items-center justify-between mb-3">
              <span className="text-xs text-gray-400">Live Stats</span>
              <div className="w-2 h-2 bg-green-500 rounded-full animate-pulse"></div>
            </div>
            <div className="space-y-2">
              <div className="flex items-center justify-between">
                <span className="text-sm text-gray-300">Active Sessions</span>
                <span className="text-sm font-bold text-green-400">142</span>
              </div>
              <div className="flex items-center justify-between">
                <span className="text-sm text-gray-300">Orders Today</span>
                <span className="text-sm font-bold text-orange-400">284</span>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom Profile */}
        <div className="absolute bottom-0 left-0 right-0 p-4 border-t border-gray-800 bg-gradient-to-t from-black/50 to-transparent">
          <div className="flex items-center space-x-3 group cursor-pointer">
            <div className="relative">
              <div className="absolute inset-0 bg-gradient-to-r from-orange-500 to-red-500 rounded-full blur-md opacity-50 group-hover:opacity-70 transition-opacity duration-300"></div>
              <div className="relative w-10 h-10 bg-gradient-to-r from-gray-800 to-gray-900 border border-gray-700 rounded-full flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
                <span className="font-bold text-white">AD</span>
              </div>
            </div>
            <div className="flex-1">
              <p className="text-sm font-medium text-white">Super Admin</p>
              <p className="text-xs text-gray-500">admin@olyyo.com</p>
            </div>
            <button
              onClick={handleLogout}
              className="p-2 hover:bg-gray-800 rounded-lg transition-colors"
            >
              <LogOut className="w-5 h-5 text-gray-400" />
            </button>
          </div>
        </div>

        {/* Close button for mobile */}
        <button
          onClick={() => setIsMobileOpen(false)}
          className="lg:hidden absolute top-7 -right-17 p-2 bg-black hover:bg-gray-800 rounded-lg"
        >
          <X className="w-5 h-5" />
        </button>
      </aside>

      {/* Overlay */}
      {isMobileOpen && (
        <div
          onClick={() => setIsMobileOpen(false)}
          className="lg:hidden fixed inset-0 bg-black/70 backdrop-blur-sm z-30"
        />
      )}
    </>
  );
}
