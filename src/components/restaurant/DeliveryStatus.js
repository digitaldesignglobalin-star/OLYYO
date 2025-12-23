"use client";

import { Truck, Package, Check, Clock } from "lucide-react";

export default function DeliveryStatus() {
  const deliveries = [
    {
      id: 1,
      driver: "John Delivery",
      order: "#7841",
      status: "on_way",
      eta: "5 min",
      location: "1.2 km away",
    },
    {
      id: 2,
      driver: "Mike Rider",
      order: "#7840",
      status: "picking_up",
      eta: "12 min",
      location: "3.5 km away",
    },
    {
      id: 3,
      driver: "Sarah Express",
      order: "#7839",
      status: "delivered",
      eta: "Arrived",
      location: "At destination",
    },
    {
      id: 4,
      driver: "Alex Swift",
      order: "#7838",
      status: "on_way",
      eta: "8 min",
      location: "2.1 km away",
    },
  ];

  const statusConfig = {
    on_way: {
      color: "bg-blue-500/10 text-blue-400",
      icon: <Truck className="w-4 h-4" />,
      label: "On the way",
    },
    picking_up: {
      color: "bg-yellow-500/10 text-yellow-400",
      icon: <Package className="w-4 h-4" />,
      label: "Picking up",
    },
    delivered: {
      color: "bg-green-500/10 text-green-400",
      icon: <Check className="w-4 h-4" />,
      label: "Delivered",
    },
  };

  return (
    <div className="bg-gray-900 border border-gray-800 rounded-2xl p-6">
      <div className="flex items-center justify-between mb-6">
        <div>
          <h3 className="text-lg font-bold text-white">Delivery Status</h3>
          <p className="text-gray-400 text-sm">Live delivery tracking</p>
        </div>
      </div>

      <div className="space-y-4">
        {deliveries.map((delivery) => (
          <div
            key={delivery.id}
            className="p-4 rounded-lg bg-gray-800/30 hover:bg-gray-800/50 transition-colors"
          >
            <div className="flex items-center justify-between">
              {/* Left side: Driver and order info */}
              <div className="flex items-center space-x-3">
                <div
                  className={`w-10 h-10 rounded-full flex items-center justify-center ${
                    delivery.status === "on_way"
                      ? "bg-blue-500/20"
                      : delivery.status === "picking_up"
                      ? "bg-yellow-500/20"
                      : "bg-green-500/20"
                  }`}
                >
                  {statusConfig[delivery.status].icon}
                </div>
                <div>
                  <div className="flex items-center space-x-2">
                    <h4 className="text-sm font-medium text-white">
                      {delivery.driver}
                    </h4>
                    <span className="text-xs text-gray-400">•</span>
                    <span className="text-xs text-gray-300">
                      Order {delivery.order}
                    </span>
                  </div>
                  <p className="text-xs text-gray-400 mt-1 flex items-center">
                    <Truck className="w-3 h-3 mr-1" />
                    {delivery.location}
                  </p>
                </div>
              </div>

              {/* Right side: Status and ETA */}
              <div className="flex flex-col items-end space-y-2">
                <span
                  className={`px-3 py-1.5 text-xs rounded-full flex items-center ${
                    statusConfig[delivery.status].color
                  }`}
                >
                  {statusConfig[delivery.status].icon}
                  <span className="ml-1.5">
                    {statusConfig[delivery.status].label}
                  </span>
                </span>

                <div className="text-right">
                  <div className="text-xs text-gray-400">ETA</div>
                  <div
                    className={`text-sm font-bold ${
                      delivery.status === "delivered"
                        ? "text-green-400"
                        : "text-white"
                    }`}
                  >
                    {delivery.eta}
                  </div>
                </div>
              </div>
            </div>

            {/* Simple status indicator */}
            <div className="mt-4 flex items-center justify-between text-xs text-gray-500">
              <div className="flex items-center">
                <div
                  className={`w-2 h-2 rounded-full mr-2 ${
                    delivery.status === "on_way"
                      ? "bg-blue-500"
                      : delivery.status === "picking_up"
                      ? "bg-yellow-500"
                      : "bg-green-500"
                  }`}
                ></div>
                {delivery.status === "on_way"
                  ? "In transit"
                  : delivery.status === "picking_up"
                  ? "Collecting order"
                  : "Delivery completed"}
              </div>
              <div className="flex items-center">
                <Clock className="w-3 h-3 mr-1" />
                Updated just now
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}