"use client";

import { Pizza, Hamburger, Utensils, Coffee, Clock, CheckCircle, XCircle } from "lucide-react";

export default function CurrentlyAvailableDishes() {
  const dishes = [
    {
      id: 1,
      name: "Margherita Pizza",
      category: "Pizza",
      available: true,
      prepTime: "15 min",
      icon: <Pizza className="w-5 h-5" />,
    },
    {
      id: 2,
      name: "Classic Burger",
      category: "Burger",
      available: true,
      prepTime: "10 min",
      icon: <Hamburger className="w-5 h-5" />,
    },
    {
      id: 3,
      name: "Pasta Carbonara",
      category: "Pasta",
      available: false,
      prepTime: "20 min",
      icon: <Utensils className="w-5 h-5" />,
    },
    {
      id: 4,
      name: "Cappuccino",
      category: "Drinks",
      available: true,
      prepTime: "5 min",
      icon: <Coffee className="w-5 h-5" />,
    },
    {
      id: 5,
      name: "Pepperoni Pizza",
      category: "Pizza",
      available: true,
      prepTime: "18 min",
      icon: <Pizza className="w-5 h-5" />,
    },
    {
      id: 6,
      name: "Caesar Salad",
      category: "Salads",
      available: true,
      prepTime: "8 min",
      icon: <Utensils className="w-5 h-5" />,
    },
  ];

  return (
    <div className="bg-gray-900 border border-gray-800 rounded-2xl p-6">
      <div className="flex items-center justify-between mb-6">
        <div>
          <h3 className="text-lg font-bold text-white">
            Currently Available Dishes
          </h3>
          <p className="text-gray-400 text-sm">Menu items ready for ordering</p>
        </div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
        {dishes.map((dish) => (
          <div
            key={dish.id}
            className="p-4 rounded-lg bg-gray-800/30 hover:bg-gray-800/50 transition-colors border border-gray-800"
          >
            <div className="flex items-start justify-between mb-3">
              <div
                className={`p-2.5 rounded-lg ${
                  dish.available
                    ? "bg-gradient-to-br from-green-500/20 to-emerald-500/20"
                    : "bg-gradient-to-br from-red-500/20 to-pink-500/20"
                }`}
              >
                {dish.icon}
              </div>
              <div className="flex items-center">
                {dish.available ? (
                  <CheckCircle className="w-5 h-5 text-green-400" />
                ) : (
                  <XCircle className="w-5 h-5 text-red-400" />
                )}
              </div>
            </div>

            <h4 className="text-sm font-medium text-white mb-1">{dish.name}</h4>
            <div className="flex items-center justify-between mt-4">
              <div>
                <span className="text-xs text-gray-400">{dish.category}</span>
                <div className="flex items-center text-xs text-gray-500 mt-1">
                  <Clock className="w-3 h-3 mr-1" />
                  {dish.prepTime}
                </div>
              </div>

              <div
                className={`px-2.5 py-1 text-xs rounded-full ${
                  dish.available
                    ? "bg-green-500/10 text-green-400"
                    : "bg-red-500/10 text-red-400"
                }`}
              >
                {dish.available ? "Available" : "Unavailable"}
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}