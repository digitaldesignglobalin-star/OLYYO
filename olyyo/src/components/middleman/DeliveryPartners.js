"use client";

import { Truck, MapPin, Phone, Plus } from "lucide-react";

export default function DeliveryPartners() {
  const partners = [
    {
      id: 1,
      name: "John Delivery",
      vehicle: "Bike",
      orders: "12",
      rating: "4.9",
      status: "active",
      location: "1.2 km away",
    },
    {
      id: 2,
      name: "Mike Rider",
      vehicle: "Scooter",
      orders: "8",
      rating: "4.7",
      status: "on_delivery",
      location: "3.5 km away",
    },
    {
      id: 3,
      name: "Sarah Express",
      vehicle: "Car",
      orders: "15",
      rating: "4.8",
      status: "active",
      location: "2.1 km away",
    },
    {
      id: 4,
      name: "Alex Swift",
      vehicle: "Bike",
      orders: "10",
      rating: "4.6",
      status: "offline",
      location: "Offline",
    },
    {
      id: 5,
      name: "David Rider",
      vehicle: "Scooter",
      orders: "7",
      rating: "4.9",
      status: "on_delivery",
      location: "4.2 km away",
    },
  ];

  const statusColors = {
    active: "bg-green-500/10 text-green-400",
    on_delivery: "bg-blue-500/10 text-blue-400",
    offline: "bg-red-500/10 text-red-400",
  };

  return (
    <div className="bg-gray-900 border border-gray-800 rounded-2xl p-6">
      <div className="flex items-center justify-between mb-6">
        <div>
          <h3 className="text-lg font-bold text-white">Delivery Partners</h3>
          <p className="text-gray-400 text-sm">
            Manage and coordinate with delivery partners
          </p>
        </div>
        <div className="flex items-center space-x-2">
          <button className="text-sm text-green-400 hover:text-green-300 flex items-center">
            Add Partner <Plus className="w-4 h-4 ml-1" />
          </button>
        </div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-4">
        {partners.map((partner) => (
          <div
            key={partner.id}
            className="p-4 rounded-lg bg-gray-800/30 hover:bg-gray-800/50 transition-colors border border-gray-800"
          >
            <div className="flex items-start justify-between mb-3">
              <div className="flex items-center space-x-3">
                <div className="w-12 h-12 bg-gradient-to-br from-blue-500/20 to-cyan-500/20 rounded-full flex items-center justify-center">
                  <Truck className="w-6 h-6 text-blue-400" />
                </div>
                <div>
                  <h4 className="text-sm font-medium text-white">
                    {partner.name}
                  </h4>
                  <p className="text-xs text-gray-400">{partner.vehicle}</p>
                </div>
              </div>
              <span
                className={`px-2 py-1 text-xs rounded-full ${
                  statusColors[partner.status]
                }`}
              >
                {partner.status.replace("_", " ")}
              </span>
            </div>

            <div className="grid grid-cols-2 gap-3 mt-4">
              <div className="text-center p-2 bg-gray-800/50 rounded-lg">
                <div className="text-xs text-gray-400">Orders</div>
                <div className="text-sm font-bold text-white">
                  {partner.orders}
                </div>
              </div>
              <div className="text-center p-2 bg-gray-800/50 rounded-lg">
                <div className="text-xs text-gray-400">Rating</div>
                <div className="text-sm font-bold text-yellow-400">
                  {partner.rating}
                </div>
              </div>
            </div>

            <div className="mt-4 text-xs text-gray-400">
              <div className="flex items-center justify-between">
                <div className="flex items-center">
                  <MapPin className="w-3 h-3 mr-1" />
                  {partner.location}
                </div>
                <div className="text-green-400 font-medium">
                  {partner.earnings}
                </div>
              </div>
            </div>

            <div className="flex space-x-2 mt-4">
              <button className="flex-1 px-3 py-1.5 text-xs bg-gradient-to-r from-blue-500 to-cyan-500 text-white rounded hover:opacity-90">
                Assign Order
              </button>
              <button className="p-1.5 hover:bg-gray-700 rounded">
                <Phone className="w-4 h-4 text-gray-400" />
              </button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}