"use client";

import { ShoppingBag, Phone, MessageCircle, Plus } from "lucide-react";

export default function RestaurantsList() {
  const restaurants = [
    {
      id: 1,
      name: "Pizza Palace",
      type: "Italian",
      orders: "45",
      rating: "4.8",
      status: "active",
      contact: "John Manager",
      phone: "+1 234 567 8900",
    },
    {
      id: 2,
      name: "Burger King",
      type: "Fast Food",
      orders: "38",
      rating: "4.5",
      status: "active",
      contact: "Mike Owner",
      phone: "+1 234 567 8901",
    },
    {
      id: 3,
      name: "Sushi Bar",
      type: "Japanese",
      orders: "28",
      rating: "4.9",
      status: "busy",
      contact: "Sarah Chef",
      phone: "+1 234 567 8902",
    },
    {
      id: 4,
      name: "Coffee Shop",
      type: "Cafe",
      orders: "52",
      rating: "4.7",
      status: "active",
      contact: "Alex Manager",
      phone: "+1 234 567 8903",
    },
    {
      id: 5,
      name: "Pasta House",
      type: "Italian",
      orders: "31",
      rating: "4.6",
      status: "offline",
      contact: "David Owner",
      phone: "+1 234 567 8904",
    },
  ];

  const statusColors = {
    active: "bg-green-500/10 text-green-400",
    busy: "bg-yellow-500/10 text-yellow-400",
    offline: "bg-red-500/10 text-red-400",
  };

  return (
    <div className="bg-gray-900 border border-gray-800 rounded-2xl p-6 w-full max-w-full overflow-hidden">
      <div className="flex items-center justify-between mb-6">
        <div>
          <h3 className="text-lg font-bold text-white">Partner Restaurants</h3>
          <p className="text-gray-400 text-sm">
            Manage restaurant partnerships and coordination
          </p>
        </div>
        <button className="text-sm text-green-400 hover:text-green-300 flex items-center">
          Add Restaurant <Plus className="w-4 h-4 ml-1" />
        </button>
      </div>

      <div className="relative w-full overflow-x-auto">
        <table className="min-w-[900px] w-full whitespace-nowrap">
          <thead>
            <tr className="text-left text-xs text-gray-400 border-b border-gray-800">
              <th className="pb-3 px-4">Restaurant</th>
              <th className="pb-3 px-4">Type</th>
              <th className="pb-3 px-4">Orders</th>
              <th className="pb-3 px-4">Rating</th>
              <th className="pb-3 px-4">Contact</th>
              <th className="pb-3 px-4">Status</th>
              <th className="pb-3 px-4">Actions</th>
            </tr>
          </thead>
          <tbody className="divide-y divide-gray-800">
            {restaurants.map((restaurant) => (
              <tr
                key={restaurant.id}
                className="hover:bg-gray-800/30 transition-colors"
              >
                <td className="py-4 px-4">
                  <div className="flex items-center space-x-3">
                    <div className="w-10 h-10 bg-gradient-to-r from-orange-500/20 to-red-500/20 rounded-lg flex items-center justify-center">
                      <ShoppingBag className="w-5 h-5 text-orange-400" />
                    </div>
                    <div>
                      <div className="font-medium text-white">
                        {restaurant.name}
                      </div>
                    </div>
                  </div>
                </td>
                <td className="py-4 px-4">
                  <div className="text-sm text-gray-300">{restaurant.type}</div>
                </td>
                <td className="py-4 px-4">
                  <div className="text-sm font-bold text-white">
                    {restaurant.orders}
                  </div>
                  <div className="text-xs text-gray-500">Today</div>
                </td>
                <td className="py-4 px-4">
                  <div className="flex items-center">
                    <span className="text-sm text-white">
                      {restaurant.rating}
                    </span>
                  </div>
                </td>
                <td className="py-4 px-4">
                  <div>
                    <div className="text-sm text-white">
                      {restaurant.contact}
                    </div>
                    <div className="text-xs text-gray-500">
                      {restaurant.phone}
                    </div>
                  </div>
                </td>
                <td className="py-4 px-4">
                  <span
                    className={`px-3 py-1 text-xs rounded-full ${
                      statusColors[restaurant.status]
                    }`}
                  >
                    {restaurant.status.charAt(0).toUpperCase() +
                      restaurant.status.slice(1)}
                  </span>
                </td>
                <td className="py-4 px-4">
                  <div className="flex items-center space-x-2">
                    <button className="p-1.5 hover:bg-gray-700 rounded">
                      <Phone className="w-4 h-4 text-blue-400" />
                    </button>
                    <button className="p-1.5 hover:bg-gray-700 rounded">
                      <MessageCircle className="w-4 h-4 text-green-400" />
                    </button>
                  </div>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}