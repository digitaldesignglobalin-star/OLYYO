"use client";

import {
  BarChart3,
  Package,
  Truck,
  ShoppingBag,
  AlertTriangle,
  MessageSquare,
  ChefHat,
  LogOut,
  Menu,
  X,
  Home,
} from "lucide-react";
import { signOut } from "next-auth/react";
import Link from "next/link";
import { useSession } from "next-auth/react";

export default function RestaurantSidebar({
  activeTab,
  setActiveTab,
  isMobileOpen,
  setIsMobileOpen,
}) {
  const menuItems = [
    {
      id: "dashboard",
      icon: <BarChart3 className="w-5 h-5" />,
      label: "Restaurant Dashboard",
      count: null,
    },
    {
      id: "dishes",
      icon: <Package className="w-5 h-5" />,
      label: "Uploaded Dishes",
      count: "48",
    },
    {
      id: "delivery",
      icon: <Truck className="w-5 h-5" />,
      label: "Delivery Status",
      count: "12",
    },
    {
      id: "orders",
      icon: <ShoppingBag className="w-5 h-5" />,
      label: "Current Orders",
      count: "8",
    },
    {
      id: "complaints",
      icon: <AlertTriangle className="w-5 h-5" />,
      label: "Complaints",
      count: "5",
    },
    {
      id: "feedback",
      icon: <MessageSquare className="w-5 h-5" />,
      label: "Customer Feedback",
      count: "23",
    },
  ];

  const { data: session } = useSession();

  const handleLogout = async () => {
    if (confirm("Are you sure you want to logout?")) {
      await signOut({ callbackUrl: "/restaurant/login" });
    }
  };

  return (
    <>
      {/* Mobile Menu Button */}
      <button
        onClick={() => setIsMobileOpen(true)}
        className="lg:hidden fixed top-5 left-6 z-50 p-2 bg-gradient-to-r from-gray-800 to-gray-900 border border-gray-700 rounded-lg shadow-lg"
      >
        <Menu className="w-6 h-6 text-white" />
      </button>

      {/* Sidebar */}
      <aside
        className={`
        fixed inset-y-0 left-0 z-40 w-64 bg-gray-900 border-r border-gray-800
        transform transition-transform duration-300
        ${isMobileOpen ? "translate-x-0" : "-translate-x-full lg:translate-x-0"}
      `}
      >
        {/* Logo */}
        <div className="h-20 border-b border-gray-800 flex items-center px-6 justify-between">
          {/* Desktop / Tablet Logo */}
          <Link href="/" className="hidden lg:flex items-center space-x-3">
            <div className="w-10 h-10 bg-gradient-to-r from-orange-500 to-red-500 rounded-lg flex items-center justify-center">
              <ChefHat className="w-6 h-6 text-white" />
            </div>
            <div>
              <h1 className="text-xl font-bold text-white">Pizza Palace</h1>
              <p className="text-xs text-gray-500">Restaurant Panel</p>
            </div>
          </Link>

          {/* Mobile Home Icon */}
          <Link
            href="/"
            className="lg:hidden absolute top-6 left-50 flex items-center justify-center w-10 h-10 rounded-lg bg-gray-800 hover:bg-gray-700"
          >
            <Home className="w-5 h-5 text-white" />
          </Link>
        </div>

        {/* Menu */}
        <div className="h-[calc(100vh-160px)] overflow-y-auto py-4">
          <div className="px-4">
            <div className="space-y-1">
              {menuItems.map((item) => (
                <button
                  key={item.id}
                  onClick={() => {
                    setActiveTab(item.id);
                    setIsMobileOpen(false);
                  }}
                  className={`
                    w-full flex items-center justify-between px-4 py-3 rounded-lg
                    transition-all duration-200
                    ${
                      activeTab === item.id
                        ? "bg-gray-800 text-white"
                        : "text-gray-400 hover:bg-gray-800 hover:text-white"
                    }
                  `}
                >
                  <div className="flex items-center space-x-3">
                    <div
                      className={`w-5 h-5 flex items-center justify-center ${
                        activeTab === item.id ? "text-white" : "text-gray-400"
                      }`}
                    >
                      {item.icon}
                    </div>
                    <span className="text-sm font-medium">{item.label}</span>
                  </div>
                  {item.count && (
                    <span
                      className={`px-2 py-1 text-xs rounded ${
                        activeTab === item.id
                          ? "bg-gray-700 text-white"
                          : "bg-gray-800 text-gray-400"
                      }`}
                    >
                      {item.count}
                    </span>
                  )}
                </button>
              ))}
            </div>
          </div>
        </div>

        {/* Restaurant Info */} 
        <div className="h-20 border-t border-gray-800 flex items-center px-4">
          <div className="flex items-center space-x-3 w-full">
            <div className="w-10 h-10 bg-gradient-to-r from-orange-500 to-red-500 rounded-full flex items-center justify-center">
              <ChefHat className="w-5 h-5 text-white" />
            </div>
            <p className="text-sm font-medium text-white truncate">
              {session?.user?.name}
            </p>
            <p className="text-xs text-gray-500 truncate">
              {session?.user?.email}
            </p>

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
          className="lg:hidden absolute top-6 -right-17 p-2 bg-black hover:bg-gray-800 rounded-lg"
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
