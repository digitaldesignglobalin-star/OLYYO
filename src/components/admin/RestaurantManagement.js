"use client";

import { useState } from "react";
import {
  Store,
  Pizza,
  Hamburger,
  Coffee,
  CheckCircle,
  XCircle,
  Wifi,
  WifiOff,
  Store as StoreIcon,
  MapPin as MapPinIcon,
  PhoneCall,
  Star,
  ShoppingCart,
  IndianRupee,
  Edit,
  Eye,
  X,
  Globe,
  Mail as MailIcon,
} from "lucide-react";

// Restaurant Data and Components
export default function RestaurantManagement() {
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
          <div
            className="flex gap-4
    overflow-x-auto
    whitespace-nowrap
    scrollbar-hide
    -mx-4 px-4
    lg:overflow-visible lg:mx-0 lg:px-0 "
          >
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
                  <StoreIcon className="w-8 h-8 text-blue-500" />
                </div>
              </div>
            </div>
            <div className="flex items-center mt-4 text-blue-400 text-sm">
              <StoreIcon className="w-4 h-4 mr-2" />
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
              <StoreIcon className="w-5 h-5 text-blue-500" />
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