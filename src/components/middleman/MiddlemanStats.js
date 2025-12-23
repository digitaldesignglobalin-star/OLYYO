"use client";

import {
  IndianRupee,
  ShoppingBag,
  Users,
  Truck,
  TrendingUp,
  TrendingDown,
} from "lucide-react";

export default function MiddlemanStats() {
  const stats = [
    {
      title: "Total Commission",
      value: "₹6,64,52,850",
      change: "+15.5%",
      isPositive: true,
      icon: IndianRupee,
      color: "from-green-500 to-emerald-500",
      delay: "100ms",
    },
    {
      title: "Active Orders",
      value: "18",
      change: "+4",
      isPositive: true,
      icon: ShoppingBag,
      color: "from-blue-500 to-cyan-500",
      delay: "200ms",
    },
    {
      title: "Restaurants",
      value: "24",
      change: "+3",
      isPositive: true,
      icon: Users,
      color: "from-orange-500 to-red-500",
      delay: "300ms",
    },
    {
      title: "Delivery Partners",
      value: "42",
      change: "+6",
      isPositive: true,
      icon: Truck,
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
            className="bg-gray-900 border border-gray-800 rounded-xl p-6 hover:border-gray-700 transition-colors group"
          >
            <div className="flex items-start justify-between mb-4">
              <div
                className={`p-3 rounded-lg bg-gradient-to-br ${stat.color} bg-opacity-10 group-hover:scale-110 transition-transform`}
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
            <h3 className="text-2xl font-bold text-white mb-1">{stat.value}</h3>
            <p className="text-gray-400 text-sm">{stat.title}</p>
          </div>
        );
      })}
    </div>
  );
}