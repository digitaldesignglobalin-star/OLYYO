"use client";

import {
  IndianRupee,
  ShoppingBag,
  Truck,
  Package,
  TrendingUp,
  TrendingDown,
} from "lucide-react";

export default function RestaurantStats() {
  const stats = [
    {
      title: "Today's Revenue",
      value: "₹4,33,42,458",
      change: "+12.5%",
      isPositive: true,
      icon: IndianRupee,
      color: "from-green-500 to-emerald-500",
      delay: "100ms",
    },
    {
      title: "Active Orders",
      value: "24",
      change: "+8.2%",
      isPositive: true,
      icon: ShoppingBag,
      color: "from-blue-500 to-cyan-500",
      delay: "200ms",
    },
    {
      title: "Delivery Partners",
      value: "12",
      change: "+2",
      isPositive: true,
      icon: Truck,
      color: "from-orange-500 to-red-500",
      delay: "300ms",
    },
    {
      title: "Available Dishes",
      value: "48",
      change: "+5",
      isPositive: true,
      icon: Package,
      color: "from-purple-500 to-pink-500",
      delay: "400ms",
    },
  ];

  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
      {stats.map((stat, index) => {
        const Icon = stat.icon;
        return (
          <div
            key={index}
            className="bg-gray-900 border border-gray-800 rounded-xl p-6 hover:border-gray-700 transition-colors"
          >
            <div className="flex items-start justify-between mb-4">
              <div
                className={`p-3 rounded-lg bg-gradient-to-br ${stat.color} bg-opacity-10`}
              >
                <Icon
                  className="w-6 h-6"
                  style={{ color: stat.color.split(" ")[0].split("-")[1] }}
                />
              </div>
              <div
                className={`flex items-center text-sm ${
                  stat.isPositive ? "text-green-400" : "text-red-400"
                }`}
              >
                {stat.isPositive ? (
                  <TrendingUp className="w-4 h-4 mr-1" />
                ) : (
                  <TrendingDown className="w-4 h-4 mr-1" />
                )}
                {stat.change}
              </div>
            </div>
            <h3 className="text-2xl font-bold text-white mb-1 flex-wrap">
              {stat.value}
            </h3>
            <p className="text-gray-400 text-sm">{stat.title}</p>
          </div>
        );
      })}
    </div>
  );
}