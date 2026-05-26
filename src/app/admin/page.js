"use client";

import { useState, useEffect } from "react";
import {
  LayoutDashboard,
  Store,
  Users,
  Truck,
  User,
  TrendingUp,
  TrendingDown,
  DollarSign,
  ShoppingCart,
  Search,
  Bell,
  Settings,
  LogOut,
  Menu,
  X,
  Activity,
  Shield,
  Star,
  Clock,
  CheckCircle,
  XCircle,
  AlertCircle,
  Zap,
  Users as UsersIcon,
  ShoppingBag,
  CreditCard,
  RefreshCw,
  MapPin,
  Phone,
  Mail,
  Percent,
  ShieldCheck,
  Clock4,
  PackageCheck,
  UserCheck,
  UserX,
  MessageCircle,
  AlertTriangle,
  ChefHat,
  Utensils,
  Coffee,
  Pizza,
  Hamburger,
  ThumbsUp,
  ThumbsDown,
  Wifi,
  WifiOff,
  PhoneCall,
  Mail as MailIcon,
  Globe,
  MapPin as MapPinIcon,
  Check,
  X as XIcon,
  CalendarDays,
  Edit,
  Eye,
  MoreVertical,
  Download,
  Filter,
  TrendingUp as TrendingUpIcon,
  TrendingDown as TrendingDownIcon,
  Target,
  Trophy,
  BarChart3,
  PieChart,
  LineChart,
  ChevronRight,
  IndianRupee,
} from "lucide-react";

// Animated Sidebar Component
function AdminSidebar({
  activeTab,
  setActiveTab,
  isMobileOpen,
  setIsMobileOpen,
}) {
  const menuItems = [
    {
      id: "dashboard",
      icon: <LayoutDashboard className="w-5 h-5" />,
      label: "Dashboard (Super admin)",
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
      label: "Track Delivery partner",
      count: "48",
      color: "from-green-500/20 to-green-600/20",
    },
    {
      id: "customers",
      icon: <User className="w-5 h-5" />,
      label: "Track customer",
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

  return (
    <>
      {/* Mobile Menu Button */}
      <button
        onClick={() => setIsMobileOpen(true)}
        className="lg:hidden fixed top-6 left-6 z-50 p-2 bg-gradient-to-r from-gray-800 to-gray-900 border border-gray-700 rounded-lg shadow-lg"
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
        {/* Logo with glow effect */}
        <div className="p-6 border-b border-gray-800 relative overflow-hidden">
          <div className="absolute inset-0 bg-gradient-to-r from-orange-500/5 to-red-500/5"></div>
          <div className="relative flex items-center space-x-3">
            <div className="relative">
              <div className="absolute inset-0 bg-gradient-to-r from-orange-500 to-red-500 rounded-lg blur-lg opacity-50"></div>
              <div className="relative w-12 h-12 bg-gradient-to-r from-gray-800 to-gray-900 border border-gray-700 rounded-lg flex items-center justify-center group">
                <Shield className="w-6 h-6 text-white group-hover:scale-110 transition-transform duration-300" />
                <div className="absolute inset-0 bg-gradient-to-r from-orange-500/20 to-red-500/20 rounded-lg opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
              </div>
            </div>
            <div>
              <h1 className="text-xl font-bold text-white animate-pulse">
                Super admin (shop keeper)
              </h1>
              <p className="text-xs text-gray-400">Control Panel v2.0</p>
            </div>
          </div>

          
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
            <button className="p-2 hover:bg-gray-800 rounded-lg transition-colors">
              <LogOut className="w-5 h-5 text-gray-400" />
            </button>
          </div>
        </div>

        {/* Close button for mobile */}
        <button
          onClick={() => setIsMobileOpen(false)}
          className="lg:hidden absolute top-4 right-4 p-2 hover:bg-gray-800 rounded-lg"
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

// Restaurant Data and Components
function RestaurantManagement() {
  const [selectedFilter, setSelectedFilter] = useState("all");
  const [selectedRestaurant, setSelectedRestaurant] = useState(null);

  // Sample restaurant data
  const restaurants = [
    {
      id: 1,
      name: "Pizza Palace",
      status: "active",
      category: "Italian",
      rating: 4.7,
      totalOrders: 245,
      revenue: "₹8,45004",
      location: "Downtown",
      phone: "+1 234-567-8900",
      email: "info@pizzapalace.com",
      website: "www.pizzapalace.com",
      description: "Authentic Italian pizza with fresh ingredients",
      lastActive: "2 hours ago",
      icon: <Pizza className="w-6 h-6" />,
      color: "from-orange-500/10 to-orange-600/10",
      borderColor: "border-orange-500/20",
    },
    {
      id: 2,
      name: "Burger Barn",
      status: "active",
      category: "American",
      rating: 4.5,
      totalOrders: 198,
      revenue: "₹6,82046",
      location: "Shopping Mall",
      phone: "+1 234-567-8901",
      email: "contact@burgerbarn.com",
      website: "www.burgerbarn.com",
      description: "Juicy burgers with premium beef patties",
      lastActive: "1 hour ago",
      icon: <Hamburger className="w-6 h-6" />,
      color: "from-yellow-500/10 to-yellow-600/10",
      borderColor: "border-yellow-500/20",
    },
    {
      id: 3,
      name: "Sushi Zen",
      status: "active",
      category: "Japanese",
      rating: 4.8,
      totalOrders: 156,
      revenue: "₹5,980324",
      location: "Business District",
      phone: "+1 234-567-8902",
      email: "reservations@sushizen.com",
      website: "www.sushizen.com",
      description: "Traditional Japanese sushi and sashimi",
      lastActive: "3 hours ago",
      icon: <Store className="w-6 h-6" />,
      color: "from-blue-500/10 to-blue-600/10",
      borderColor: "border-blue-500/20",
    },
    {
      id: 4,
      name: "Taco Fiesta",
      status: "inactive",
      category: "Mexican",
      rating: 4.4,
      totalOrders: 142,
      revenue: "₹4,75000",
      location: "West Side",
      phone: "+1 234-567-8903",
      email: "hello@tacofiesta.com",
      website: "www.tacofiesta.com",
      description: "Authentic Mexican street tacos",
      lastActive: "3 days ago",
      icon: <Store className="w-6 h-6" />,
      color: "from-red-500/10 to-red-600/10",
      borderColor: "border-red-500/20",
    },
    {
      id: 5,
      name: "Coffee Corner",
      status: "active",
      category: "Cafe",
      rating: 4.6,
      totalOrders: 128,
      revenue: "₹4,25078",
      location: "Central Park",
      phone: "+1 234-567-8904",
      email: "brew@coffeecorner.com",
      website: "www.coffeecorner.com",
      description: "Specialty coffee and pastries",
      lastActive: "30 minutes ago",
      icon: <Coffee className="w-6 h-6" />,
      color: "from-brown-500/10 to-brown-600/10",
      borderColor: "border-brown-500/20",
    },
    {
      id: 6,
      name: "Noodle House",
      status: "inactive",
      category: "Asian",
      rating: 4.3,
      totalOrders: 98,
      revenue: "₹3,12078",
      location: "Chinatown",
      phone: "+1 234-567-8905",
      email: "info@noodlehouse.com",
      website: "www.noodlehouse.com",
      description: "Hand-pulled noodles and Asian fusion",
      lastActive: "5 days ago",
      icon: <Store className="w-6 h-6" />,
      color: "from-green-500/10 to-green-600/10",
      borderColor: "border-green-500/20",
    },
    {
      id: 7,
      name: "Steak House",
      status: "active",
      category: "Steakhouse",
      rating: 4.9,
      totalOrders: 178,
      revenue: "₹9,85043",
      location: "Uptown",
      phone: "+1 234-567-8906",
      email: "reserve@steakhouse.com",
      website: "www.steakhouse.com",
      description: "Premium steaks and fine dining",
      lastActive: "Just now",
      icon: <Store className="w-6 h-6" />,
      color: "from-purple-500/10 to-purple-600/10",
      borderColor: "border-purple-500/20",
    },
    {
      id: 8,
      name: "Vegan Delight",
      status: "inactive",
      category: "Vegan",
      rating: 4.2,
      totalOrders: 76,
      revenue: "₹2,45034",
      location: "East Side",
      phone: "+1 234-567-8907",
      email: "hello@vegandelight.com",
      website: "www.vegandelight.com",
      description: "Plant-based gourmet cuisine",
      lastActive: "1 week ago",
      icon: <Store className="w-6 h-6" />,
      color: "from-emerald-500/10 to-emerald-600/10",
      borderColor: "border-emerald-500/20",
    },
  ];

  // Filter restaurants based on selection
  const filteredRestaurants = restaurants.filter((restaurant) => {
    if (selectedFilter === "all") return true;
    if (selectedFilter === "active") return restaurant.status === "active";
    if (selectedFilter === "inactive") return restaurant.status === "inactive";
    return true;
  });

  // Calculate stats
  const activeRestaurants = restaurants.filter(
    (r) => r.status === "active"
  ).length;
  const inactiveRestaurants = restaurants.filter(
    (r) => r.status === "inactive"
  ).length;
  const totalRestaurants = restaurants.length;

  // Performance metrics
  const getPerformanceMetrics = () => {
    const filtered =
      selectedFilter === "all"
        ? restaurants
        : restaurants.filter((r) => r.status === selectedFilter);

    const avg = (
      filtered.reduce((acc, r) => acc + r.rating, 0) / filtered.length
    ).toFixed(1);
    const revenue = filtered
      .reduce(
        (acc, r) =>
          acc + parseFloat(r.revenue.replace("₹", "").replace(",", "")),
        0
      )
      .toLocaleString("en-US", {
        style: "currency",
        currency: "USD",
        minimumFractionDigits: 0,
        maximumFractionDigits: 0,
      });
    const orders = filtered.reduce((acc, r) => acc + r.totalOrders, 0);
    const count = filtered.length;

    return {
      satisfactionRate: `${((avg / 5) * 100).toFixed(0)}%`,
      avgRating: avg,
      totalRevenue: revenue,
      totalOrders: orders,
      restaurantCount: count,
    };
  };

  const performanceMetrics = getPerformanceMetrics();

  return (
    <div className="space-y-6 animate-fade-in">
      {/* Interactive Chart */}
      <div
        className="relative bg-gradient-to-br from-gray-900 to-gray-950 border border-gray-800 rounded-2xl p-6 
                      hover:border-gray-700 transition-all duration-500 group"
      >
        <div className="absolute inset-0 bg-gradient-to-r from-orange-500/5 to-red-500/5 rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>

        <div className="relative">
          <div className="flex flex-col lg:flex-row lg:items-center justify-between mb-8">
            <div>
              <h3 className="text-xl font-bold text-white flex items-center">
                Restaurant Performance Analytics
                <div className="ml-3 w-2 h-2 bg-gradient-to-r from-orange-500 to-red-500 rounded-full animate-pulse"></div>
              </h3>
              <p className="text-gray-400 text-sm mt-1">
                Showing data for{" "}
                {selectedFilter === "all"
                  ? "all restaurants"
                  : selectedFilter + " restaurants"}
              </p>
            </div>
          </div>

          {/* Quick Filter Buttons */}
          <div className="flex gap-4
    overflow-x-auto
    whitespace-nowrap
    scrollbar-hide
    -mx-4 px-4
    lg:overflow-visible lg:mx-0 lg:px-0 ">
            <button
              onClick={() => setSelectedFilter("all")}
              className={`px-6 py-3 rounded-xl font-medium transition-all duration-300 mb-2 ${
                selectedFilter === "all"
                  ? "bg-gradient-to-r from-orange-500 to-red-500 text-white shadow-lg "
                  : "bg-gray-800 text-gray-400 hover:text-white hover:bg-gray-700"
              }`}
            >
              All Restaurants
            </button>
            <button
              onClick={() => setSelectedFilter("active")}
              className={`px-6 py-3 rounded-xl font-medium transition-all duration-300 mb-2 ${
                selectedFilter === "active"
                  ? "bg-gradient-to-r from-green-500 to-emerald-500 text-white shadow-lg"
                  : "bg-gray-800 text-gray-400 hover:text-white hover:bg-gray-700"
              }`}
            >
              Active Only
            </button>
            <button
              onClick={() => setSelectedFilter("inactive")}
              className={`px-6 py-3 rounded-xl font-medium transition-all duration-300 mb-2 ${
                selectedFilter === "inactive"
                  ? "bg-gradient-to-r from-red-500 to-pink-500 text-white shadow-lg"
                  : "bg-gray-800 text-gray-400 hover:text-white hover:bg-gray-700"
              }`}
            >
              Inactive Only
            </button>
          </div>
        </div>
      </div>

      {/* Restaurant Summary Cards */}
      <div className="bg-gradient-to-br from-gray-900 to-gray-950 border border-gray-800 rounded-2xl p-6">
        <h3 className="text-lg font-bold text-white mb-6">
          Restaurant Status Summary
        </h3>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-6">
          {/* Active Restaurants Card */}
          <button
            onClick={() => setSelectedFilter("active")}
            className={`bg-gradient-to-br from-green-500/10 to-green-600/10 border border-green-500/20 rounded-xl p-6 text-left 
                        hover:scale-105 hover:shadow-xl hover:border-green-500/40 transition-all duration-300 
                        ${
                          selectedFilter === "active"
                            ? "ring-2 ring-green-500/50"
                            : ""
                        }`}
          >
            <div className="flex items-center justify-between">
              <div>
                <div className="text-3xl font-bold text-white">
                  {activeRestaurants}
                </div>
                <div className="text-sm text-gray-400 mt-1">
                  Active Restaurants
                </div>
              </div>
              <div className="relative">
                <div className="absolute inset-0 bg-green-500/20 rounded-full blur-md"></div>
                <div className="relative p-3 bg-green-500/10 rounded-full">
                  <CheckCircle className="w-8 h-8 text-green-500" />
                </div>
              </div>
            </div>
            <div className="flex items-center mt-4 text-green-400 text-sm">
              <Wifi className="w-4 h-4 mr-2" />
              <span>Online and accepting orders</span>
            </div>
          </button>

          {/* Inactive Restaurants Card */}
          <button
            onClick={() => setSelectedFilter("inactive")}
            className={`bg-gradient-to-br from-red-500/10 to-red-600/10 border border-red-500/20 rounded-xl p-6 text-left 
                        hover:scale-105 hover:shadow-xl hover:border-red-500/40 transition-all duration-300 
                        ${
                          selectedFilter === "inactive"
                            ? "ring-2 ring-red-500/50"
                            : ""
                        }`}
          >
            <div className="flex items-center justify-between">
              <div>
                <div className="text-3xl font-bold text-white">
                  {inactiveRestaurants}
                </div>
                <div className="text-sm text-gray-400 mt-1">
                  Inactive Restaurants
                </div>
              </div>
              <div className="relative">
                <div className="absolute inset-0 bg-red-500/20 rounded-full blur-md"></div>
                <div className="relative p-3 bg-red-500/10 rounded-full">
                  <XCircle className="w-8 h-8 text-red-500" />
                </div>
              </div>
            </div>
            <div className="flex items-center mt-4 text-red-400 text-sm">
              <WifiOff className="w-4 h-4 mr-2" />
              <span>Temporarily offline</span>
            </div>
          </button>

          {/* All Restaurants Card */}
          <button
            onClick={() => setSelectedFilter("all")}
            className={`bg-gradient-to-br from-blue-500/10 to-blue-600/10 border border-blue-500/20 rounded-xl p-6 text-left 
                        hover:scale-105 hover:shadow-xl hover:border-blue-500/40 transition-all duration-300 
                        ${
                          selectedFilter === "all"
                            ? "ring-2 ring-blue-500/50"
                            : ""
                        }`}
          >
            <div className="flex items-center justify-between">
              <div>
                <div className="text-3xl font-bold text-white">
                  {totalRestaurants}
                </div>
                <div className="text-sm text-gray-400 mt-1">
                  Total Restaurants
                </div>
              </div>
              <div className="relative">
                <div className="absolute inset-0 bg-blue-500/20 rounded-full blur-md"></div>
                <div className="relative p-3 bg-blue-500/10 rounded-full">
                  <Store className="w-8 h-8 text-blue-500" />
                </div>
              </div>
            </div>
            <div className="flex items-center mt-4 text-blue-400 text-sm">
              <Store className="w-4 h-4 mr-2" />
              <span>All registered restaurants</span>
            </div>
          </button>
        </div>

        {/* Selected Filter Status */}
        <div className="mb-6">
          <div className="flex items-center justify-between">
            <h4 className="text-sm font-medium text-gray-400">
              Currently showing:{" "}
              <span className="text-white capitalize">
                {selectedFilter} restaurants
              </span>
            </h4>
            <div className="text-sm text-gray-500">
              {filteredRestaurants.length} restaurants found
            </div>
          </div>
        </div>
      </div>

      {/* Performance Metrics */}
      <div className="bg-gradient-to-br from-gray-900 to-gray-950 border border-gray-800 rounded-2xl p-6">
        <h3 className="text-lg font-bold text-white mb-6">
          Performance Metrics
        </h3>

        <div className="grid grid-cols-2 lg:grid-cols-4 gap-4">
          <div className="text-center p-6 bg-gradient-to-br from-purple-500/10 to-purple-600/10 border border-purple-500/20 rounded-xl">
            <div className="text-3xl font-bold text-white mb-2">
              {performanceMetrics.satisfactionRate}
            </div>
            <div className="flex items-center justify-center mb-2">
              <Star className="w-5 h-5 text-yellow-500 fill-current" />
              <span className="text-sm text-gray-400 ml-2">
                {performanceMetrics.avgRating}/5.0
              </span>
            </div>
            <p className="text-sm text-gray-400">Satisfaction Rate</p>
          </div>

          <div className="text-center p-6 bg-gradient-to-br from-green-500/10 to-green-600/10 border border-green-500/20 rounded-xl">
            <div className="text-3xl font-bold text-white mb-2">
              {performanceMetrics.totalOrders.toLocaleString()}
            </div>
            <div className="flex items-center justify-center mb-2">
              <ShoppingCart className="w-5 h-5 text-green-500" />
            </div>
            <p className="text-sm text-gray-400">Total Orders</p>
          </div>

          <div className="text-center p-6 bg-gradient-to-br from-orange-500/10 to-orange-600/10 border border-orange-500/20 rounded-xl">
            <div className="text-3xl font-bold text-white mb-2">
              {performanceMetrics.totalRevenue}
            </div>
            <div className="flex items-center justify-center mb-2">
              <IndianRupee className="w-5 h-5 text-orange-500" />
            </div>
            <p className="text-sm text-gray-400">Total Revenue</p>
          </div>

          <div className="text-center p-6 bg-gradient-to-br from-blue-500/10 to-blue-600/10 border border-blue-500/20 rounded-xl">
            <div className="text-3xl font-bold text-white mb-2">
              {performanceMetrics.restaurantCount}
            </div>
            <div className="flex items-center justify-center mb-2">
              <Store className="w-5 h-5 text-blue-500" />
            </div>
            <p className="text-sm text-gray-400">Restaurants</p>
          </div>
        </div>
      </div>

      {/* Restaurant Grid */}
      <div className="bg-gradient-to-br from-gray-900 to-gray-950 border border-gray-800 rounded-2xl p-6">
        <div className="flex items-center justify-between mb-6">
          <h3 className="text-lg font-bold text-white">
            {selectedFilter === "all"
              ? "All Restaurants"
              : selectedFilter === "active"
              ? "Active Restaurants"
              : "Inactive Restaurants"}
          </h3>
          <div className="text-sm text-gray-400">
            Showing {filteredRestaurants.length} of {restaurants.length}{" "}
            restaurants
          </div>
        </div>

        {/* Restaurant Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {filteredRestaurants.map((restaurant) => (
            <div
              key={restaurant.id}
              onClick={() => setSelectedRestaurant(restaurant)}
              className={`bg-gradient-to-br ${restaurant.color} ${
                restaurant.borderColor
              } rounded-xl p-5 
                        hover:scale-105 hover:shadow-xl hover:border-opacity-50 transition-all duration-300 
                        cursor-pointer border ${
                          selectedRestaurant?.id === restaurant.id
                            ? "ring-2 ring-white/20"
                            : ""
                        }`}
            >
              {/* Restaurant Header */}
              <div className="flex items-start justify-between mb-4">
                <div className="flex items-center space-x-3">
                  <div className="p-2 bg-white/10 rounded-lg">
                    {restaurant.icon}
                  </div>
                  <div>
                    <h4 className="text-lg font-bold text-white">
                      {restaurant.name}
                    </h4>
                    <p className="text-sm text-gray-400">
                      {restaurant.category}
                    </p>
                  </div>
                </div>
                <div
                  className={`px-3 py-1 rounded-full text-xs font-medium ${
                    restaurant.status === "active"
                      ? "bg-green-500/10 text-green-400"
                      : "bg-red-500/10 text-red-400"
                  }`}
                >
                  {restaurant.status === "active" ? (
                    <span className="flex items-center">
                      <div className="w-2 h-2 bg-green-500 rounded-full mr-2 animate-pulse"></div>
                      Active
                    </span>
                  ) : (
                    <span className="flex items-center">
                      <div className="w-2 h-2 bg-red-500 rounded-full mr-2"></div>
                      Inactive
                    </span>
                  )}
                </div>
              </div>

              {/* Restaurant Info */}
              <div className="space-y-3 mb-4">
                <div className="flex items-center text-sm text-gray-300">
                  <MapPinIcon className="w-4 h-4 mr-2 text-gray-400" />
                  {restaurant.location}
                </div>
                <div className="flex items-center text-sm text-gray-300">
                  <PhoneCall className="w-4 h-4 mr-2 text-gray-400" />
                  {restaurant.phone}
                </div>
                <p className="text-sm text-gray-400">
                  {restaurant.description}
                </p>
              </div>

              {/* Restaurant Stats */}
              <div className="grid grid-cols-3 gap-3 pt-4 border-t border-white/10">
                <div className="text-center">
                  <div className="text-xl font-bold text-white">
                    {restaurant.rating}
                  </div>
                  <div className="text-xs text-gray-400">Rating</div>
                </div>
                <div className="text-center">
                  <div className="text-xl font-bold text-white">
                    {restaurant.totalOrders}
                  </div>
                  <div className="text-xs text-gray-400">Orders</div>
                </div>
                <div className="text-center">
                  <div className="text-xl font-bold text-white">
                    {restaurant.revenue}
                  </div>
                  <div className="text-xs text-gray-400">Revenue</div>
                </div>
              </div>

              {/* Last Active */}
              <div className="mt-4 pt-3 border-t border-white/10">
                <div className="flex items-center justify-between text-xs text-gray-500">
                  <span>Last active:</span>
                  <span>{restaurant.lastActive}</span>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Selected Restaurant Details */}
      {selectedRestaurant && (
        <div className="bg-gradient-to-br from-gray-900 to-gray-950 border border-gray-800 rounded-2xl p-6">
          <div className="flex items-center justify-between mb-6">
            <h3 className="text-lg font-bold text-white">Restaurant Details</h3>
            <button
              onClick={() => setSelectedRestaurant(null)}
              className="p-2 hover:bg-gray-800 rounded-lg transition-colors"
            >
              <X className="w-5 h-5" />
            </button>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
            {/* Left Column - Basic Info */}
            <div className="lg:col-span-2 space-y-6">
              <div className="bg-gradient-to-br from-gray-800/50 to-gray-900/50 border border-gray-800 rounded-xl p-6">
                <div className="flex items-center space-x-4 mb-6">
                  <div className="p-3 bg-white/10 rounded-lg">
                    {selectedRestaurant.icon}
                  </div>
                  <div>
                    <h4 className="text-2xl font-bold text-white">
                      {selectedRestaurant.name}
                    </h4>
                    <p className="text-gray-400">
                      {selectedRestaurant.category}
                    </p>
                  </div>
                </div>

                <div className="grid grid-cols-2 gap-4">
                  <div className="p-4 bg-gray-900/50 rounded-lg">
                    <div className="text-sm text-gray-400 mb-1">Status</div>
                    <div
                      className={`flex items-center text-lg font-medium ${
                        selectedRestaurant.status === "active"
                          ? "text-green-400"
                          : "text-red-400"
                      }`}
                    >
                      {selectedRestaurant.status === "active" ? (
                        <>
                          <CheckCircle className="w-5 h-5 mr-2" />
                          Active
                        </>
                      ) : (
                        <>
                          <XCircle className="w-5 h-5 mr-2" />
                          Inactive
                        </>
                      )}
                    </div>
                  </div>

                  <div className="p-4 bg-gray-900/50 rounded-lg">
                    <div className="text-sm text-gray-400 mb-1">Rating</div>
                    <div className="flex items-center text-lg font-medium text-white">
                      <Star className="w-5 h-5 text-yellow-500 fill-current mr-2" />
                      {selectedRestaurant.rating}/5.0
                    </div>
                  </div>
                </div>
              </div>

              {/* Contact Information */}
              <div className="bg-gradient-to-br from-gray-800/50 to-gray-900/50 border border-gray-800 rounded-xl p-6">
                <h4 className="text-lg font-bold text-white mb-4">
                  Contact Information
                </h4>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div className="flex items-center space-x-3 p-3 bg-gray-900/30 rounded-lg">
                    <PhoneCall className="w-5 h-5 text-blue-400" />
                    <div>
                      <div className="text-sm text-gray-400">Phone</div>
                      <div className="text-white">
                        {selectedRestaurant.phone}
                      </div>
                    </div>
                  </div>
                  <div className="flex items-center space-x-3 p-3 bg-gray-900/30 rounded-lg">
                    <MailIcon className="w-5 h-5 text-purple-400" />
                    <div>
                      <div className="text-sm text-gray-400">Email</div>
                      <div className="text-white">
                        {selectedRestaurant.email}
                      </div>
                    </div>
                  </div>
                  <div className="flex items-center space-x-3 p-3 bg-gray-900/30 rounded-lg">
                    <Globe className="w-5 h-5 text-green-400" />
                    <div>
                      <div className="text-sm text-gray-400">Website</div>
                      <div className="text-white">
                        {selectedRestaurant.website}
                      </div>
                    </div>
                  </div>
                  <div className="flex items-center space-x-3 p-3 bg-gray-900/30 rounded-lg">
                    <MapPinIcon className="w-5 h-5 text-orange-400" />
                    <div>
                      <div className="text-sm text-gray-400">Location</div>
                      <div className="text-white">
                        {selectedRestaurant.location}
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Right Column - Performance */}
            <div className="space-y-6">
              <div className="bg-gradient-to-br from-gray-800/50 to-gray-900/50 border border-gray-800 rounded-xl p-6">
                <h4 className="text-lg font-bold text-white mb-4">
                  Performance Metrics
                </h4>
                <div className="space-y-4">
                  <div>
                    <div className="text-sm text-gray-400 mb-1">
                      Total Orders
                    </div>
                    <div className="text-2xl font-bold text-white">
                      {selectedRestaurant.totalOrders}
                    </div>
                  </div>
                  <div>
                    <div className="text-sm text-gray-400 mb-1">
                      Total Revenue
                    </div>
                    <div className="text-2xl font-bold text-white">
                      {selectedRestaurant.revenue}
                    </div>
                  </div>
                  <div>
                    <div className="text-sm text-gray-400 mb-1">
                      Last Active
                    </div>
                    <div className="text-lg text-white">
                      {selectedRestaurant.lastActive}
                    </div>
                  </div>
                </div>
              </div>

              {/* Quick Actions */}
              <div className="bg-gradient-to-br from-gray-800/50 to-gray-900/50 border border-gray-800 rounded-xl p-6">
                <h4 className="text-lg font-bold text-white mb-4">
                  Quick Actions
                </h4>
                <div className="space-y-3">
                  <button
                    className="w-full px-4 py-3 bg-gradient-to-r from-blue-500/10 to-blue-600/10 text-blue-400 
                                    rounded-lg hover:bg-blue-500/20 transition-colors flex items-center justify-center"
                  >
                    <Edit className="w-4 h-4 mr-2" />
                    Edit Restaurant
                  </button>
                  <button
                    className="w-full px-4 py-3 bg-gradient-to-r from-green-500/10 to-green-600/10 text-green-400 
                                    rounded-lg hover:bg-green-500/20 transition-colors flex items-center justify-center"
                  >
                    <Eye className="w-4 h-4 mr-2" />
                    View Menu
                  </button>
                  <button
                    className={`w-full px-4 py-3 rounded-lg transition-colors flex items-center justify-center ${
                      selectedRestaurant.status === "active"
                        ? "bg-gradient-to-r from-red-500/10 to-red-600/10 text-red-400 hover:bg-red-500/20"
                        : "bg-gradient-to-r from-green-500/10 to-green-600/10 text-green-400 hover:bg-green-500/20"
                    }`}
                  >
                    {selectedRestaurant.status === "active" ? (
                      <>
                        <XCircle className="w-4 h-4 mr-2" />
                        Deactivate
                      </>
                    ) : (
                      <>
                        <CheckCircle className="w-4 h-4 mr-2" />
                        Activate
                      </>
                    )}
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}

// Interactive Graph Component
function InteractiveChart({ title, type = "line", data }) {
  const [hoveredIndex, setHoveredIndex] = useState(null);
  const [timeRange, setTimeRange] = useState("month");

  const chartPoints = data || [
    { name: "Jan", value: 65, target: 50 },
    { name: "Feb", value: 78, target: 60 },
    { name: "Mar", value: 90, target: 70 },
    { name: "Apr", value: 85, target: 75 },
    { name: "May", value: 105, target: 85 },
    { name: "Jun", value: 120, target: 100 },
    { name: "Jul", value: 135, target: 115 },
  ];

  const maxValue = Math.max(
    ...chartPoints.map((d) => Math.max(d.value, d.target || 0))
  );

  return (
    <div
      className="relative bg-gradient-to-br from-gray-900 to-gray-950 border border-gray-800 rounded-2xl p-6 
                  hover:border-gray-700 transition-all duration-500 group"
    >
      {/* Glow effect */}
      <div className="absolute inset-0 bg-gradient-to-r from-orange-500/5 to-red-500/5 rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>

      <div className="relative">
        {/* Header */}
        <div className="flex flex-col lg:flex-row lg:items-center justify-between mb-8">
          <div>
            <h3 className="text-xl font-bold text-white flex items-center">
              {title}
              <div className="ml-3 w-2 h-2 bg-gradient-to-r from-orange-500 to-red-500 rounded-full animate-pulse"></div>
            </h3>
            <p className="text-gray-400 text-sm mt-1">
              Real-time performance metrics
            </p>
          </div>

          {/* Time Range Selector */}
          <div className="flex items-center space-x-4 mt-4 lg:mt-0">
            <div className="flex bg-gray-800 rounded-xl p-1">
              {["day", "week", "month", "year"].map((range) => (
                <button
                  key={range}
                  onClick={() => setTimeRange(range)}
                  className={`px-4 py-2 rounded-lg text-sm font-medium capitalize transition-all duration-300 ${
                    timeRange === range
                      ? "bg-gradient-to-r from-gray-700 to-gray-800 text-white shadow-lg"
                      : "text-gray-400 hover:text-white"
                  }`}
                >
                  {range}
                </button>
              ))}
            </div>
          </div>
        </div>

        {/* Visible Chart Area */}
        <div className="relative h-64">
          {/* Grid Background */}
          <div className="absolute inset-0 grid grid-cols-7 grid-rows-5 gap-0">
            {Array.from({ length: 35 }).map((_, i) => (
              <div key={i} className="border border-gray-800/30"></div>
            ))}
          </div>

          {/* Y-axis labels */}
          <div className="absolute left-0 top-0 bottom-0 w-12 flex flex-col justify-between py-4">
            {[0, 25, 50, 75, 100].map((value) => (
              <div
                key={value}
                className="text-xs text-gray-500 text-right pr-2"
              >
                {value}%
              </div>
            ))}
          </div>

          {/* Chart Container */}
          <div className="ml-12 h-full relative pr-4">
            {/* Chart Lines */}
            <div className="absolute inset-0 flex items-end space-x-4 px-2">
              {chartPoints.map((point, index) => {
                const heightPercent = (point.value / maxValue) * 100;

                return (
                  <div
                    key={index}
                    className="flex-1 flex flex-col items-center relative group/card"
                    onMouseEnter={() => setHoveredIndex(index)}
                    onMouseLeave={() => setHoveredIndex(null)}
                  >
                    {/* Value Tooltip */}
                    {hoveredIndex === index && (
                      <div className="absolute -top-16 left-1/2 transform -translate-x-1/2 bg-gray-900 border border-gray-700 rounded-lg p-3 shadow-2xl z-10 animate-fade-in">
                        <div className="text-sm font-bold text-white">
                          ${point.value}K
                        </div>
                        <div className="text-xs text-gray-400">
                          {point.name} 2024
                        </div>
                      </div>
                    )}

                    {/* Chart Bar/Line */}
                    <div className="relative w-full flex justify-center">
                      <div
                        className={`w-3/4 rounded-t-xl transition-all duration-500 bg-gradient-to-t from-blue-500/30 to-blue-500 group-hover/card:w-full group-hover/card:shadow-lg`}
                        style={{ height: `${heightPercent}%` }}
                      >
                        {/* Sparkle effect on hover */}
                        {hoveredIndex === index && (
                          <div className="absolute inset-0 bg-gradient-to-t from-white/20 to-transparent rounded-t-xl"></div>
                        )}
                      </div>
                    </div>

                    {/* X-axis label */}
                    <div
                      className={`mt-4 text-sm font-medium transition-all duration-300 ${
                        hoveredIndex === index
                          ? "text-white scale-110"
                          : "text-gray-500"
                      }`}
                    >
                      {point.name}
                    </div>

                    {/* Data Point Indicator */}
                    <div
                      className={`absolute -top-2 transform -translate-y-full transition-all duration-300 ${
                        hoveredIndex === index ? "opacity-100" : "opacity-0"
                      }`}
                    >
                      <div className="text-xs font-bold text-white bg-gray-900 px-2 py-1 rounded-lg shadow-lg">
                        ${point.value}K
                      </div>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

// Detailed Info Component for Track sections
function TrackDetailInfo({ type }) {
  const getDataByType = () => {
    switch (type) {
      case "middlemen":
        return {
          title: "Middle Man Analytics",
          stats: [
            {
              label: "Active Middlemen",
              value: "12",
              icon: <UserCheck className="w-5 h-5" />,
              color: "from-blue-500/10 to-blue-600/10",
            },
            {
              label: "Avg Commission Rate",
              value: "15%",
              icon: <Percent className="w-5 h-5" />,
              color: "from-green-500/10 to-green-600/10",
            },
            {
              label: "Verified Middlemen",
              value: "10",
              icon: <ShieldCheck className="w-5 h-5" />,
              color: "from-purple-500/10 to-purple-600/10",
            },
            {
              label: "Pending Verifications",
              value: "2",
              icon: <Clock4 className="w-5 h-5" />,
              color: "from-yellow-500/10 to-yellow-600/10",
            },
          ],
          recentActivities: [
            {
              name: "Mike Johnson",
              action: "New order processed",
              time: "10 min ago",
              status: "success",
            },
            {
              name: "Sarah Miller",
              action: "Commission withdrawn",
              time: "25 min ago",
              status: "success",
            },
            {
              name: "David Chen",
              action: "Verification pending",
              time: "1 hour ago",
              status: "pending",
            },
            {
              name: "Alex Wilson",
              action: "Reported issue",
              time: "2 hours ago",
              status: "warning",
            },
          ],
          topPerformers: [
            {
              name: "Mike Johnson",
              orders: "142",
              commission: "₹68,504",
              rating: "4.9",
            },
            {
              name: "Sarah Miller",
              orders: "128",
              commission: "₹73,450",
              rating: "4.8",
            },
            {
              name: "Robert Kim",
              orders: "95",
              commission: "₹61,820",
              rating: "4.7",
            },
            {
              name: "Lisa Wang",
              orders: "87",
              commission: "₹71,650",
              rating: "4.6",
            },
          ],
        };

      case "delivery":
        return {
          title: "Delivery Partner Analytics",
          stats: [
            {
              label: "Active Partners",
              value: "48",
              icon: <Truck className="w-5 h-5" />,
              color: "from-green-500/10 to-green-600/10",
            },
            {
              label: "On-duty Now",
              value: "32",
              icon: <Activity className="w-5 h-5" />,
              color: "from-orange-500/10 to-orange-600/10",
            },
            {
              label: "Avg Delivery Time",
              value: "18 min",
              icon: <Clock className="w-5 h-5" />,
              color: "from-blue-500/10 to-blue-600/10",
            },
            {
              label: "Success Rate",
              value: "98.2%",
              icon: <PackageCheck className="w-5 h-5" />,
              color: "from-emerald-500/10 to-emerald-600/10",
            },
          ],
          recentActivities: [
            {
              name: "John Delivery",
              action: "Order #7842 delivered",
              time: "5 min ago",
              status: "success",
            },
            {
              name: "Maria Garcia",
              action: "Picked up order #7843",
              time: "12 min ago",
              status: "success",
            },
            {
              name: "Tom Wilson",
              action: "Route delay reported",
              time: "30 min ago",
              status: "warning",
            },
            {
              name: "Sam Chen",
              action: "Completed 10 deliveries",
              time: "1 hour ago",
              status: "success",
            },
          ],
          topPerformers: [
            {
              name: "John Delivery",
              deliveries: "45",
              rating: "4.9",
              earnings: "₹71,250",
            },
            {
              name: "Maria Garcia",
              deliveries: "38",
              rating: "4.8",
              earnings: "₹61,080",
            },
            {
              name: "Sam Chen",
              deliveries: "35",
              rating: "4.9",
              earnings: "₹58,980",
            },
            {
              name: "Alex Kumar",
              deliveries: "32",
              rating: "4.7",
              earnings: "₹47,890",
            },
          ],
        };

      case "customers":
        return {
          title: "Customer Analytics",
          stats: [
            {
              label: "Total Customers",
              value: "1,248",
              icon: <User className="w-5 h-5" />,
              color: "from-purple-500/10 to-purple-600/10",
            },
            {
              label: "Active Today",
              value: "842",
              icon: <Activity className="w-5 h-5" />,
              color: "from-green-500/10 to-green-600/10",
            },
            {
              label: "New This Month",
              value: "156",
              icon: <TrendingUp className="w-5 h-5" />,
              color: "from-blue-500/10 to-blue-600/10",
            },
            {
              label: "Avg Order Value",
              value: "₹250.50",
              icon: <DollarSign className="w-5 h-5" />,
              color: "from-emerald-500/10 to-emerald-600/10",
            },
          ],
          recentActivities: [
            {
              name: "Emily Smith",
              action: "Placed order #7845",
              time: "8 min ago",
              status: "success",
            },
            {
              name: "Michael Brown",
              action: "Created new account",
              time: "15 min ago",
              status: "success",
            },
            {
              name: "Jessica Lee",
              action: "Submitted review",
              time: "25 min ago",
              status: "success",
            },
            {
              name: "David Wilson",
              action: "Reported issue",
              time: "45 min ago",
              status: "warning",
            },
          ],
          topPerformers: [
            {
              name: "Sarah Johnson",
              orders: "42",
              spent: "₹93,850",
              loyalty: "Platinum",
            },
            {
              name: "Mike Chen",
              orders: "38",
              spent: "₹81,620",
              loyalty: "Gold",
            },
            {
              name: "Lisa Brown",
              orders: "35",
              spent: "₹81,480",
              loyalty: "Gold",
            },
            {
              name: "Tom Wilson",
              orders: "28",
              spent: "₹81,150",
              loyalty: "Silver",
            },
          ],
        };

      default:
        return {
          title: "Analytics",
          stats: [],
          recentActivities: [],
          topPerformers: [],
        };
    }
  };

  const data = getDataByType();

  return (
    <div className="space-y-6">
      {/* Stats Cards */}
      <div className="grid grid-cols-2 lg:grid-cols-4 gap-4">
        {data.stats.map((stat, index) => (
          <div
            key={index}
            className={`bg-gradient-to-br ${stat.color} border border-gray-800 rounded-xl p-4`}
          >
            <div className="flex items-center justify-between mb-3">
              <div className="p-2 bg-gray-800/50 rounded-lg">{stat.icon}</div>
              <span className="text-xs text-gray-400">Today</span>
            </div>
            <div className="text-2xl font-bold text-white mb-1">
              {stat.value}
            </div>
            <div className="text-sm text-gray-400">{stat.label}</div>
          </div>
        ))}
      </div>

      {/* Detailed Info Grid */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        {/* Recent Activities */}
        <div className="bg-gradient-to-br from-gray-900 to-gray-950 border border-gray-800 rounded-2xl p-6">
          <div className="flex items-center justify-between mb-6">
            <h3 className="text-lg font-bold text-white">Recent Activities</h3>
            {/* <button className="text-sm text-gray-400 hover:text-white transition-colors">
              View All →
            </button> */}
          </div>
          <div className="space-y-4">
            {data.recentActivities.map((activity, index) => (
              <div
                key={index}
                className="flex items-center justify-between p-3 bg-gray-800/30 rounded-xl hover:bg-gray-800/50 transition-colors"
              >
                <div className="flex items-center space-x-3">
                  <div
                    className={`w-2 h-2 rounded-full ${
                      activity.status === "success"
                        ? "bg-green-500"
                        : activity.status === "warning"
                        ? "bg-yellow-500"
                        : "bg-blue-500"
                    }`}
                  ></div>
                  <div>
                    <p className="text-sm font-medium text-white">
                      {activity.name}
                    </p>
                    <p className="text-xs text-gray-400">{activity.action}</p>
                  </div>
                </div>
                <span className="text-xs text-gray-500">{activity.time}</span>
              </div>
            ))}
          </div>
        </div>

        {/* Top Performers */}
        <div className="bg-gradient-to-br from-gray-900 to-gray-950 border border-gray-800 rounded-2xl p-6">
          <div className="flex items-center justify-between mb-6">
            <h3 className="text-lg font-bold text-white">Top Performers</h3>
            {/* <button className="text-sm text-gray-400 hover:text-white transition-colors">
              View All →
            </button> */}
          </div>
          <div className="space-y-4">
            {data.topPerformers.map((performer, index) => (
              <div
                key={index}
                className="flex items-center justify-between p-3 bg-gray-800/30 rounded-xl hover:bg-gray-800/50 transition-colors"
              >
                <div className="flex items-center space-x-3">
                  <div className="w-10 h-10 bg-gradient-to-br from-gray-800 to-gray-900 rounded-lg flex items-center justify-center">
                    <span className="font-bold text-white">
                      {performer.name.charAt(0)}
                    </span>
                  </div>
                  <div>
                    <p className="text-sm font-medium text-white">
                      {performer.name}
                    </p>
                    <p className="text-xs text-gray-400">
                      {type === "middlemen"
                        ? `${performer.orders} orders`
                        : type === "delivery"
                        ? `${performer.deliveries} deliveries`
                        : `${performer.orders} orders`}
                    </p>
                  </div>
                </div>
                <div className="text-right">
                  <p className="text-sm font-bold text-white">
                    {type === "middlemen"
                      ? performer.commission
                      : type === "delivery"
                      ? performer.earnings
                      : performer.spent}
                  </p>
                  <div className="flex items-center justify-end space-x-1">
                    <Star className="w-3 h-3 text-yellow-500 fill-current" />
                    <span className="text-xs text-gray-400">
                      {performer.rating || performer.loyalty}
                    </span>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Additional Metrics */}
      <div className="bg-gradient-to-br from-gray-900 to-gray-950 border border-gray-800 rounded-2xl p-6">
        <h3 className="text-lg font-bold text-white mb-6">
          Performance Metrics
        </h3>
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-4">
          <div className="text-center p-4 bg-gray-800/30 rounded-xl">
            <div className="text-2xl font-bold text-white mb-2">
              {type === "middlemen"
                ? "92%"
                : type === "delivery"
                ? "98.2%"
                : "94.5%"}
            </div>
            <p className="text-sm text-gray-400">Satisfaction Rate</p>
          </div>
          <div className="text-center p-4 bg-gray-800/30 rounded-xl">
            <div className="text-2xl font-bold text-white mb-2">
              {type === "middlemen" ? "24" : type === "delivery" ? "142" : "45"}
            </div>
            <p className="text-sm text-gray-400">
              {type === "middlemen"
                ? "Avg Orders/Month"
                : type === "delivery"
                ? "Avg Deliveries/Day"
                : "Avg Orders/Week"}
            </p>
          </div>
          <div className="text-center p-4 bg-gray-800/30 rounded-xl">
            <div className="text-2xl font-bold text-white mb-2">
              {type === "middlemen"
                ? "₹23,850"
                : type === "delivery"
                ? "₹23,980"
                : "₹61,450"}
            </div>
            <p className="text-sm text-gray-400">
              {type === "middlemen"
                ? "Avg Monthly Earnings"
                : type === "delivery"
                ? "Avg Weekly Earnings"
                : "Avg Monthly Spending"}
            </p>
          </div>
          <div className="text-center p-4 bg-gray-800/30 rounded-xl">
            <div className="text-2xl font-bold text-green-400 mb-2">
              {type === "middlemen"
                ? "+18%"
                : type === "delivery"
                ? "+24%"
                : "+15%"}
            </div>
            <p className="text-sm text-gray-400">Growth This Month</p>
          </div>
        </div>
      </div>
    </div>
  );
}

// Feedback Page Component
function FeedbackPage() {
  const feedbacks = [
    {
      id: 1,
      customer: "Sarah Johnson",
      rating: 5,
      comment: "Excellent service! Delivery was on time and food was hot.",
      date: "2 hours ago",
      type: "positive",
      restaurant: "Pizza Palace",
    },
    {
      id: 2,
      customer: "Mike Chen",
      rating: 4,
      comment: "Good food but packaging could be better.",
      date: "5 hours ago",
      type: "positive",
      restaurant: "Burger Barn",
    },
    {
      id: 3,
      customer: "Lisa Brown",
      rating: 3,
      comment: "Average experience, delivery was a bit late.",
      date: "1 day ago",
      type: "neutral",
      restaurant: "Sushi Zen",
    },
    {
      id: 4,
      customer: "Tom Wilson",
      rating: 5,
      comment: "Best pizza in town! Will order again.",
      date: "2 days ago",
      type: "positive",
      restaurant: "Pizza Palace",
    },
    {
      id: 5,
      customer: "Emily Davis",
      rating: 2,
      comment: "Missing items from my order.",
      date: "3 days ago",
      type: "negative",
      restaurant: "Taco Fiesta",
    },
    {
      id: 6,
      customer: "Robert Kim",
      rating: 4,
      comment: "Good quality food, reasonable prices.",
      date: "4 days ago",
      type: "positive",
      restaurant: "Coffee Corner",
    },
  ];

  const [selectedType, setSelectedType] = useState("all");

  const filteredFeedbacks =
    selectedType === "all"
      ? feedbacks
      : feedbacks.filter((f) => f.type === selectedType);

  return (
    <div className="space-y-6 animate-fade-in">
      <div className="bg-gradient-to-br from-gray-900 to-gray-950 border border-gray-800 rounded-2xl p-6">
        <div className="flex flex-col lg:flex-row lg:items-center justify-between mb-6">
          <div>
            <h2 className="text-2xl font-bold text-white">Customer Feedback</h2>
            <p className="text-gray-400">Total 156 feedbacks received</p>
          </div>

          {/* Filter Buttons */}
          <div className="flex space-x-2 mt-4 lg:mt-0">
            <button
              onClick={() => setSelectedType("all")}
              className={`px-4 py-2 rounded-lg text-sm font-medium transition-all duration-300 ${
                selectedType === "all"
                  ? "bg-gradient-to-r from-orange-500 to-red-500 text-white"
                  : "bg-gray-800 text-gray-400 hover:text-white"
              }`}
            >
              All
            </button>
            <button
              onClick={() => setSelectedType("positive")}
              className={`px-4 py-2 rounded-lg text-sm font-medium transition-all duration-300 ${
                selectedType === "positive"
                  ? "bg-gradient-to-r from-green-500 to-emerald-500 text-white"
                  : "bg-gray-800 text-gray-400 hover:text-white"
              }`}
            >
              Positive
            </button>
            <button
              onClick={() => setSelectedType("negative")}
              className={`px-4 py-2 rounded-lg text-sm font-medium transition-all duration-300 ${
                selectedType === "negative"
                  ? "bg-gradient-to-r from-red-500 to-pink-500 text-white"
                  : "bg-gray-800 text-gray-400 hover:text-white"
              }`}
            >
              Negative
            </button>
          </div>
        </div>

        {/* Feedback Stats */}
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-4 mb-8">
          <div className="bg-gradient-to-br from-green-500/10 to-green-600/10 border border-green-500/20 rounded-xl p-4">
            <div className="text-2xl font-bold text-white mb-1">124</div>
            <div className="text-sm text-gray-400">Positive</div>
          </div>
          <div className="bg-gradient-to-br from-red-500/10 to-red-600/10 border border-red-500/20 rounded-xl p-4">
            <div className="text-2xl font-bold text-white mb-1">18</div>
            <div className="text-sm text-gray-400">Negative</div>
          </div>
          <div className="bg-gradient-to-br from-yellow-500/10 to-yellow-600/10 border border-yellow-500/20 rounded-xl p-4">
            <div className="text-2xl font-bold text-white mb-1">14</div>
            <div className="text-sm text-gray-400">Neutral</div>
          </div>
          <div className="bg-gradient-to-br from-blue-500/10 to-blue-600/10 border border-blue-500/20 rounded-xl p-4">
            <div className="text-2xl font-bold text-white mb-1">4.6</div>
            <div className="text-sm text-gray-400">Avg Rating</div>
          </div>
        </div>

        {/* Feedback List */}
        <div className="space-y-4">
          {filteredFeedbacks.map((feedback) => (
            <div
              key={feedback.id}
              className="p-4 bg-gray-800/30 border border-gray-800 rounded-xl hover:bg-gray-800/50 transition-colors"
            >
              <div className="flex items-start justify-between">
                <div className="flex items-center space-x-3">
                  <div className="w-10 h-10 bg-gradient-to-br from-gray-800 to-gray-900 rounded-lg flex items-center justify-center">
                    <span className="font-bold text-white">
                      {feedback.customer.charAt(0)}
                    </span>
                  </div>
                  <div>
                    <p className="text-sm font-medium text-white">
                      {feedback.customer}
                    </p>
                    <p className="text-xs text-gray-400">
                      {feedback.restaurant}
                    </p>
                  </div>
                </div>
                <div className="flex items-center space-x-2">
                  <div className="flex">
                    {[...Array(5)].map((_, i) => (
                      <Star
                        key={i}
                        className={`w-4 h-4 ${
                          i < feedback.rating
                            ? "text-yellow-500 fill-current"
                            : "text-gray-600"
                        }`}
                      />
                    ))}
                  </div>
                  <span className="text-xs text-gray-500">{feedback.date}</span>
                </div>
              </div>
              <p className="mt-3 text-sm text-gray-300">{feedback.comment}</p>
              <div className="flex items-center justify-between mt-3">
                <div
                  className={`px-3 py-1 rounded-full text-xs ${
                    feedback.type === "positive"
                      ? "bg-green-500/10 text-green-400"
                      : feedback.type === "negative"
                      ? "bg-red-500/10 text-red-400"
                      : "bg-yellow-500/10 text-yellow-400"
                  }`}
                >
                  {feedback.type.charAt(0).toUpperCase() +
                    feedback.type.slice(1)}
                </div>
                <div className="flex space-x-2">
                  <button className="p-1.5 hover:bg-gray-800 rounded-lg transition-colors">
                    <ThumbsUp className="w-4 h-4 text-gray-400" />
                  </button>
                  <button className="p-1.5 hover:bg-gray-800 rounded-lg transition-colors">
                    <MoreVertical className="w-4 h-4 text-gray-400" />
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

// Complaints Page Component
function ComplaintsPage() {
  const complaints = [
    {
      id: 1,
      customer: "David Wilson",
      issue: "Late Delivery",
      status: "pending",
      priority: "high",
      date: "Today, 10:30 AM",
      restaurant: "Burger Barn",
    },
    {
      id: 2,
      customer: "Jessica Lee",
      issue: "Wrong Order",
      status: "resolved",
      priority: "medium",
      date: "Yesterday, 3:15 PM",
      restaurant: "Pizza Palace",
    },
    {
      id: 3,
      customer: "Michael Brown",
      issue: "Food Quality",
      status: "in-progress",
      priority: "high",
      date: "2 days ago",
      restaurant: "Sushi Zen",
    },
    {
      id: 4,
      customer: "Sarah Johnson",
      issue: "Missing Items",
      status: "resolved",
      priority: "low",
      date: "3 days ago",
      restaurant: "Taco Fiesta",
    },
    {
      id: 5,
      customer: "Mike Chen",
      issue: "Rude Delivery",
      status: "pending",
      priority: "high",
      date: "4 days ago",
      restaurant: "Coffee Corner",
    },
    {
      id: 6,
      customer: "Lisa Brown",
      issue: "Overcharged",
      status: "resolved",
      priority: "medium",
      date: "5 days ago",
      restaurant: "Burger Barn",
    },
  ];

  const [selectedStatus, setSelectedStatus] = useState("all");

  const filteredComplaints =
    selectedStatus === "all"
      ? complaints
      : complaints.filter((c) => c.status === selectedStatus);

  const getStatusColor = (status) => {
    switch (status) {
      case "pending":
        return "from-red-500/10 to-red-600/10 text-red-400 border-red-500/20";
      case "in-progress":
        return "from-yellow-500/10 to-yellow-600/10 text-yellow-400 border-yellow-500/20";
      case "resolved":
        return "from-green-500/10 to-green-600/10 text-green-400 border-green-500/20";
      default:
        return "from-gray-500/10 to-gray-600/10 text-gray-400 border-gray-500/20";
    }
  };

  const getPriorityColor = (priority) => {
    switch (priority) {
      case "high":
        return "bg-red-500/20 text-red-400";
      case "medium":
        return "bg-yellow-500/20 text-yellow-400";
      case "low":
        return "bg-green-500/20 text-green-400";
      default:
        return "bg-gray-500/20 text-gray-400";
    }
  };

  return (
    <div className="space-y-6 animate-fade-in">
      <div className="bg-gradient-to-br from-gray-900 to-gray-950 border border-gray-800 rounded-2xl p-6">
        <div className="flex flex-col lg:flex-row lg:items-center justify-between mb-6">
          <div>
            <h2 className="text-2xl font-bold text-white">
              Customer Complaints
            </h2>
            <p className="text-gray-400">Total 24 complaints reported</p>
          </div>

          {/* Status Filter Buttons */}
          <div className="flex space-x-2 mt-4 lg:mt-0">
            <button
              onClick={() => setSelectedStatus("all")}
              className={`px-4 py-2 rounded-lg text-sm font-medium transition-all duration-300 ${
                selectedStatus === "all"
                  ? "bg-gradient-to-r from-orange-500 to-red-500 text-white"
                  : "bg-gray-800 text-gray-400 hover:text-white"
              }`}
            >
              All
            </button>
            <button
              onClick={() => setSelectedStatus("pending")}
              className={`px-4 py-2 rounded-lg text-sm font-medium transition-all duration-300 ${
                selectedStatus === "pending"
                  ? "bg-gradient-to-r from-red-500 to-pink-500 text-white"
                  : "bg-gray-800 text-gray-400 hover:text-white"
              }`}
            >
              Pending
            </button>
            <button
              onClick={() => setSelectedStatus("in-progress")}
              className={`px-4 py-2 rounded-lg text-sm font-medium transition-all duration-300 ${
                selectedStatus === "in-progress"
                  ? "bg-gradient-to-r from-yellow-500 to-orange-500 text-white"
                  : "bg-gray-800 text-gray-400 hover:text-white"
              }`}
            >
              In Progress
            </button>
            <button
              onClick={() => setSelectedStatus("resolved")}
              className={`px-4 py-2 rounded-lg text-sm font-medium transition-all duration-300 ${
                selectedStatus === "resolved"
                  ? "bg-gradient-to-r from-green-500 to-emerald-500 text-white"
                  : "bg-gray-800 text-gray-400 hover:text-white"
              }`}
            >
              Resolved
            </button>
          </div>
        </div>

        {/* Complaint Stats */}
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-4 mb-8">
          <div className="bg-gradient-to-br from-red-500/10 to-red-600/10 border border-red-500/20 rounded-xl p-4">
            <div className="text-2xl font-bold text-white mb-1">8</div>
            <div className="text-sm text-gray-400">Pending</div>
          </div>
          <div className="bg-gradient-to-br from-yellow-500/10 to-yellow-600/10 border border-yellow-500/20 rounded-xl p-4">
            <div className="text-2xl font-bold text-white mb-1">6</div>
            <div className="text-sm text-gray-400">In Progress</div>
          </div>
          <div className="bg-gradient-to-br from-green-500/10 to-green-600/10 border border-green-500/20 rounded-xl p-4">
            <div className="text-2xl font-bold text-white mb-1">10</div>
            <div className="text-sm text-gray-400">Resolved</div>
          </div>
          <div className="bg-gradient-to-br from-orange-500/10 to-orange-600/10 border border-orange-500/20 rounded-xl p-4">
            <div className="text-2xl font-bold text-white mb-1">75%</div>
            <div className="text-sm text-gray-400">Resolution Rate</div>
          </div>
        </div>

        {/* Complaints List */}
        <div className="space-y-4">
          {filteredComplaints.map((complaint) => (
            <div
              key={complaint.id}
              className="p-4 bg-gray-800/30 border border-gray-800 rounded-xl hover:bg-gray-800/50 transition-colors"
            >
              <div className="flex items-start justify-between">
                <div className="flex items-center space-x-3">
                  <div className="w-10 h-10 bg-gradient-to-br from-gray-800 to-gray-900 rounded-lg flex items-center justify-center">
                    <span className="font-bold text-white">
                      {complaint.customer.charAt(0)}
                    </span>
                  </div>
                  <div>
                    <p className="text-sm font-medium text-white">
                      {complaint.customer}
                    </p>
                    <p className="text-xs text-gray-400">
                      {complaint.restaurant}
                    </p>
                  </div>
                </div>
                <div className="text-right">
                  <span className="text-xs text-gray-500">
                    {complaint.date}
                  </span>
                  <div
                    className={`mt-1 px-3 py-1 rounded-full text-xs ${getPriorityColor(
                      complaint.priority
                    )}`}
                  >
                    {complaint.priority.toUpperCase()}
                  </div>
                </div>
              </div>

              <div className="mt-3">
                <p className="text-sm font-medium text-white mb-2">
                  {complaint.issue}
                </p>
                <div className="flex items-center justify-between">
                  <div
                    className={`px-3 py-1.5 rounded-lg text-xs font-medium bg-gradient-to-br ${getStatusColor(
                      complaint.status
                    )}`}
                  >
                    {complaint.status === "in-progress"
                      ? "In Progress"
                      : complaint.status.charAt(0).toUpperCase() +
                        complaint.status.slice(1)}
                  </div>
                  <div className="flex space-x-2">
                    <button className="px-3 py-1.5 bg-gradient-to-r from-blue-500/10 to-blue-600/10 text-blue-400 rounded-lg text-sm hover:bg-blue-500/20 transition-colors">
                      View Details
                    </button>
                    <button className="p-1.5 hover:bg-gray-800 rounded-lg transition-colors">
                      <MoreVertical className="w-4 h-4 text-gray-400" />
                    </button>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

// Main Admin Dashboard Component
export default function AdminDashboard() {
  const [activeTab, setActiveTab] = useState("dashboard");
  const [isMobileOpen, setIsMobileOpen] = useState(false);
  const [searchQuery, setSearchQuery] = useState("");
  const [activeOrder, setActiveOrder] = useState(null);

  // Load and sync live active orders
  useEffect(() => {
    if (typeof window !== "undefined") {
      const savedOrder = localStorage.getItem("olyyo_active_order");
      if (savedOrder) {
        try {
          setActiveOrder(JSON.parse(savedOrder));
        } catch (e) {
          console.error(e);
        }
      }

      const handleStorageChange = (e) => {
        if (e.key === "olyyo_active_order") {
          if (e.newValue) {
            try {
              setActiveOrder(JSON.parse(e.newValue));
            } catch (err) {
              console.error(err);
            }
          } else {
            setActiveOrder(null);
          }
        }
      };

      const interval = setInterval(() => {
        const order = localStorage.getItem("olyyo_active_order");
        if (order) {
          try {
            const parsed = JSON.parse(order);
            if (!activeOrder || activeOrder.status !== parsed.status) {
              setActiveOrder(parsed);
            }
          } catch (err) {}
        } else if (activeOrder) {
          setActiveOrder(null);
        }
      }, 1000);

      window.addEventListener("storage", handleStorageChange);
      return () => {
        window.removeEventListener("storage", handleStorageChange);
        clearInterval(interval);
      };
    }
  }, [activeOrder]);

  const handleUpdateOrderStatus = (newStatus) => {
    if (!activeOrder) return;
    const updated = { ...activeOrder, status: newStatus };
    setActiveOrder(updated);
    if (typeof window !== "undefined") {
      localStorage.setItem("olyyo_active_order", JSON.stringify(updated));
    }
  };

  const handleCancelActiveOrder = () => {
    if (typeof window !== "undefined") {
      localStorage.removeItem("olyyo_active_order");
    }
    setActiveOrder(null);
  };

  return (
    <div className="relative flex min-h-screen bg-gradient-to-br from-gray-950 via-black to-gray-950 text-gray-300">
      <AdminSidebar
        activeTab={activeTab}
        setActiveTab={setActiveTab}
        isMobileOpen={isMobileOpen}
        setIsMobileOpen={setIsMobileOpen}
      />

      <div className="flex-1 w-full overflow-x-hidden">
        {/* Animated Header */}
        <header
          className="fixed top-0 right-0 left-0 lg:left-64 z-30
            bg-gradient-to-r from-gray-900/95 via-gray-900/95 to-black/95
            backdrop-blur-lg border-b border-gray-800 p-3  shadow-2xl"
        >
          <div className="max-w-[1600px] mx-auto flex flex-col lg:flex-row lg:items-center justify-between">
            <div className="mb-4 lg:mb-0">
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

        {/* Main Content with Animation */}
        <main className=" pt-25 max-w-[1600px] mx-auto mt-16 lg:mt-0">
          {/* Show different content based on active tab */}
          {activeTab === "dashboard" && (
            <div className="space-y-6 animate-fade-in">
              {/* Glowing Live Active Order Alert Card */}
              {activeOrder && (
                <div className="relative bg-gradient-to-br from-gray-900 via-gray-950 to-black border-2 border-orange-500/50 rounded-3xl p-6 shadow-2xl overflow-hidden animate-pulse">
                  {/* Decorative background gradients */}
                  <div className="absolute top-0 right-0 w-32 h-32 bg-orange-500/10 rounded-full blur-3xl pointer-events-none"></div>
                  <div className="absolute -bottom-8 -left-8 w-32 h-32 bg-red-500/10 rounded-full blur-3xl pointer-events-none"></div>
                  
                  {/* Glowing light bars */}
                  <div className="absolute top-0 left-0 right-0 h-[1.5px] bg-gradient-to-r from-transparent via-orange-500 to-transparent"></div>

                  <div className="flex flex-col md:flex-row justify-between items-start md:items-center gap-6 mb-6">
                    <div className="space-y-2">
                      <div className="flex items-center space-x-3">
                        <span className="relative flex h-3.5 w-3.5">
                          <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-orange-400 opacity-75"></span>
                          <span className="relative inline-flex rounded-full h-3.5 w-3.5 bg-orange-500"></span>
                        </span>
                        <span className="text-xs font-black tracking-widest text-orange-400 uppercase bg-orange-500/10 px-3 py-1 rounded-full border border-orange-500/20">
                          Incoming Live Order
                        </span>
                      </div>
                      <h2 className="text-2xl font-black text-white tracking-tight">
                        Order #{activeOrder.id}
                      </h2>
                      <p className="text-sm text-gray-400">
                        Placed from: <span className="font-bold text-gray-200">{activeOrder.restaurant}</span> • Qty: <span className="font-bold text-gray-200">{activeOrder.items?.reduce((sum, item) => sum + item.quantity, 0) || 0} items</span>
                      </p>
                    </div>

                    <div className="text-right bg-gray-900 border border-gray-800 rounded-2xl px-5 py-3 min-w-[150px]">
                      <p className="text-xs text-gray-500 uppercase tracking-widest font-black mb-0.5">Grand Total</p>
                      <p className="text-2xl font-black text-transparent bg-clip-text bg-gradient-to-r from-orange-400 to-red-500">
                        ₹{activeOrder.totalAmount}
                      </p>
                    </div>
                  </div>

                  {/* Order Details list */}
                  <div className="bg-black/40 rounded-2xl border border-gray-800/80 p-4 mb-6 text-sm text-gray-400">
                    <div className="divide-y divide-gray-900 max-h-[140px] overflow-y-auto pr-1">
                      {activeOrder.items?.map((item) => (
                        <div key={item.id} className="py-2.5 flex justify-between items-center">
                          <span className="font-bold text-gray-200">{item.name} <span className="text-gray-500 font-normal">x{item.quantity}</span></span>
                          <span className="font-bold text-gray-300">₹{item.price * item.quantity}</span>
                        </div>
                      ))}
                    </div>
                    <div className="border-t border-gray-900 pt-3 mt-1.5 flex flex-col sm:flex-row justify-between text-xs text-gray-500 gap-2">
                      <span>Delivery: <strong className="text-gray-400 font-bold">{activeOrder.address}</strong></span>
                      <span className="sm:text-right">Payment: <strong className="text-orange-400 font-black uppercase">{activeOrder.paymentMethod}</strong></span>
                    </div>
                  </div>

                  {/* Dashboard Live Console Controls */}
                  <div className="flex flex-col sm:flex-row items-center justify-between gap-4 bg-gray-950/80 border border-gray-900 rounded-2xl p-4">
                    <div className="text-sm">
                      <span className="text-gray-500 font-medium">Status:</span>{" "}
                      <span className="text-white bg-gray-900 border border-gray-800 px-3 py-1 rounded-full text-xs font-bold capitalize">
                        {activeOrder.status === "pending" ? "Placed (Awaiting Action)" : activeOrder.status}
                      </span>
                    </div>

                    <div className="flex items-center gap-3 w-full sm:w-auto justify-end">
                      {activeOrder.status === "pending" && (
                        <>
                          <button
                            onClick={handleCancelActiveOrder}
                            className="px-5 py-2.5 bg-red-950/40 hover:bg-red-950/80 border border-red-900/40 hover:border-red-950 text-red-400 text-xs font-bold rounded-xl transition-all"
                          >
                            Reject
                          </button>
                          
                          <button
                            onClick={() => handleUpdateOrderStatus("preparing")}
                            className="px-6 py-2.5 bg-gradient-to-r from-orange-500 to-red-500 hover:from-orange-600 hover:to-red-600 text-white text-xs font-black rounded-xl transition-all shadow-md shadow-orange-500/10 hover:shadow-orange-500/20"
                          >
                            Accept & Start Preparation
                          </button>
                        </>
                      )}

                      {activeOrder.status === "preparing" && (
                        <button
                          onClick={() => handleUpdateOrderStatus("out_for_delivery")}
                          className="px-6 py-2.5 bg-gradient-to-r from-yellow-500 to-orange-500 text-white text-xs font-black rounded-xl transition-all shadow-md shadow-orange-500/10 animate-bounce"
                        >
                          Assign Partner (Rider Rajesh Kumar)
                        </button>
                      )}

                      {activeOrder.status === "out_for_delivery" && (
                        <span className="text-xs text-orange-400 font-bold flex items-center gap-1.5 animate-pulse">
                          <Truck className="w-4 h-4" /> Rider Rajesh is delivering the order...
                        </span>
                      )}

                      {activeOrder.status === "delivered" && (
                        <>
                          <span className="text-xs text-green-400 font-bold flex items-center gap-1.5">
                            <CheckCircle className="w-4 h-4" /> Delivered & Live Revenue updated
                          </span>
                          
                          <button
                            onClick={handleCancelActiveOrder}
                            className="px-5 py-2 bg-gray-800 hover:bg-gray-700 text-gray-300 text-xs font-bold rounded-xl transition-all"
                          >
                            Clear Board
                          </button>
                        </>
                      )}
                    </div>
                  </div>
                </div>
              )}

              {/* Total Revenue Card */}
              <div className="bg-gradient-to-br from-gray-900 to-gray-950 border border-gray-800 rounded-2xl p-6 mb-6">
                <div className="text-center">
                  <h1 className="text-4xl lg:text-5xl font-bold text-white mb-2">
                    ₹{activeOrder && activeOrder.status === "delivered" ? (4258000 + parseFloat(activeOrder.totalAmount)).toLocaleString("en-IN") : "42,58,000"}
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
                        <h3 className="text-2xl font-bold text-white">
                          {activeOrder ? "3,285" : "3,284"}
                        </h3>
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
            Real-time analytics dashboard with interactive visualizations
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
