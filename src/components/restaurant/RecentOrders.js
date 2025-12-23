"use client";

import { useState } from "react";
import { ShoppingBag, Clock, Truck, Check } from "lucide-react";

export default function RecentOrders() {
  const [orders, setOrders] = useState([
    {
      id: "#7842",
      customer: "John Smith",
      items: "2x Pizza, 1x Coke",
      status: "preparing",
      time: "5 min ago",
    },
    {
      id: "#7841",
      customer: "Emma Wilson",
      items: "Burger + Fries + Shake",
      status: "ready",
      time: "12 min ago",
    },
    {
      id: "#7840",
      customer: "Michael Brown",
      items: "Sushi Platter (Large)",
      status: "delivered",
      time: "25 min ago",
    },
    {
      id: "#7839",
      customer: "Sarah Johnson",
      items: "Pasta Carbonara + Garlic Bread",
      status: "preparing",
      time: "8 min ago",
    },
    {
      id: "#7838",
      customer: "David Lee",
      items: "Chicken Wrap + Salad",
      status: "ready",
      time: "3 min ago",
    },
  ]);

  const statusColors = {
    preparing: "bg-yellow-500/10 text-yellow-400",
    ready: "bg-green-500/10 text-green-400",
    delivered: "bg-blue-500/10 text-blue-400",
    cancelled: "bg-red-500/10 text-red-400",
  };

  const handleMarkReady = (orderId) => {
    setOrders(
      orders.map((order) =>
        order.id === orderId ? { ...order, status: "ready" } : order
      )
    );
  };

  const handleMarkDelivered = (orderId) => {
    setOrders(
      orders.map((order) =>
        order.id === orderId ? { ...order, status: "delivered" } : order
      )
    );
  };

  return (
    <div className="bg-gray-900 border border-gray-800 rounded-2xl p-6">
      <div className="flex items-center justify-between mb-6">
        <div>
          <h3 className="text-lg font-bold text-white">Current Orders</h3>
          <p className="text-gray-400 text-sm">Manage active customer orders</p>
        </div>
      </div>

      <div className="space-y-4">
        {orders.map((order) => (
          <div
            key={order.id}
            className="
    flex flex-col gap-3
    p-3 sm:p-4
    rounded-xl
    bg-gray-800/30 hover:bg-gray-800/50
    transition-colors
    w-full max-w-full overflow-hidden
  "
          >
            {/* LEFT SECTION */}
            <div className="flex gap-3 items-start flex-1 min-w-0">
              {/* Icon */}
              <div
                className={`w-10 h-10 shrink-0 rounded-lg flex items-center justify-center ${
                  order.status === "preparing"
                    ? "bg-yellow-500/20"
                    : order.status === "ready"
                    ? "bg-green-500/20"
                    : "bg-blue-500/20"
                }`}
              >
                <ShoppingBag
                  className={`w-5 h-5 ${
                    order.status === "preparing"
                      ? "text-yellow-400"
                      : order.status === "ready"
                      ? "text-green-400"
                      : "text-blue-400"
                  }`}
                />
              </div>

              {/* Text */}
              <div className="min-w-0">
                <div className="flex flex-wrap items-center gap-2">
                  <h4 className="text-sm font-semibold text-white">
                    {order.id}
                  </h4>
                  <span className="text-xs text-gray-500">•</span>
                  <span className="text-sm text-gray-300 truncate">
                    {order.customer}
                  </span>
                </div>

                <p className="text-sm text-gray-400 mt-1 truncate">
                  {order.items}
                </p>
              </div>
            </div>

            {/* RIGHT SECTION */}
            <div className="flex flex-col gap-2 md:items-end">
              {/* Time */}
              <div className="text-xs text-gray-500 flex items-center">
                <Clock className="w-3 h-3 mr-1" />
                {order.time}
              </div>

              {/* Status */}
              <span
                className={`px-3 py-1 text-xs rounded-full w-fit ${
                  statusColors[order.status]
                }`}
              >
                {order.status.charAt(0).toUpperCase() + order.status.slice(1)}
              </span>

              {/* Actions */}
              {order.status === "preparing" && (
                <button
                  onClick={() => handleMarkReady(order.id)}
                  className="
          w-full md:w-auto
          px-4 py-2 text-xs
          bg-gradient-to-r from-green-500 to-emerald-500
          text-white rounded-lg
          hover:opacity-90
          flex items-center justify-center
        "
                >
                  <Check className="w-3 h-3 mr-1" />
                  Mark Ready
                </button>
              )}

              {order.status === "ready" && (
                <button
                  onClick={() => handleMarkDelivered(order.id)}
                  className="
          w-full md:w-auto
          px-4 py-2 text-xs
          bg-gradient-to-r from-blue-500 to-cyan-500
          text-white rounded-lg
          hover:opacity-90
          flex items-center justify-center
        "
                >
                  <Truck className="w-3 h-3 mr-1" />
                  Mark Delivered
                </button>
              )}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}