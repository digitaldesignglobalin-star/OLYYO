"use client";

import { useState } from "react";
import {
  Package,
  Clock,
  Truck,
  Phone,
  MessageCircle,
  MoreVertical,
} from "lucide-react";

export default function ActiveOrders() {
  const [orders, setOrders] = useState([
    {
      id: "#MM7842",
      restaurant: "Pizza Palace",
      delivery: "John Delivery",
      customer: "John Smith",
      items: "2x Pizza, 1x Coke",
      status: "coordinating",
      time: "5 min ago",
    },
    {
      id: "#MM7841",
      restaurant: "Burger King",
      delivery: "Mike Rider",
      customer: "Emma Wilson",
      items: "Burger + Fries",
      status: "assigned",
      time: "12 min ago",
    },
    {
      id: "#MM7840",
      restaurant: "Sushi Bar",
      delivery: "Sarah Express",
      customer: "Michael Brown",
      items: "Sushi Platter",
      status: "picked_up",
      time: "25 min ago",
    },
    {
      id: "#MM7839",
      restaurant: "Pasta House",
      delivery: "Alex Swift",
      customer: "Sarah Johnson",
      items: "Pasta + Salad",
      status: "coordinating",
      time: "8 min ago",
    },
    {
      id: "#MM7838",
      restaurant: "Coffee Shop",
      delivery: "David Rider",
      customer: "David Lee",
      items: "Coffee + Sandwich",
      status: "delivered",
      time: "3 min ago",
    },
  ]);

  const statusColors = {
    coordinating: "bg-yellow-500/10 text-yellow-400",
    assigned: "bg-blue-500/10 text-blue-400",
    picked_up: "bg-purple-500/10 text-purple-400",
    delivered: "bg-green-500/10 text-green-400",
  };

  const handleAssign = (orderId, deliveryPartner) => {
    setOrders(
      orders.map((order) =>
        order.id === orderId
          ? { ...order, status: "assigned", delivery: deliveryPartner }
          : order
      )
    );
  };

  return (
    <div className="bg-gray-900 border border-gray-800 rounded-2xl p-6">
      <div className="flex items-center justify-between mb-6">
        <div>
          <h3 className="text-lg font-bold text-white">
            Active Orders Coordination
          </h3>
          <p className="text-gray-400 text-sm">
            Manage and assign orders to delivery partners
          </p>
        </div>
      </div>

      <div className="space-y-4">
        {orders.map((order) => (
          <div
            key={order.id}
            className="p-4 rounded-lg bg-gray-800/30 hover:bg-gray-800/50 transition-colors"
          >
            <div className="flex flex-col lg:flex-row lg:items-center justify-between gap-4">
              {/* Order Info */}
              <div className="flex-1">
                <div className="flex items-center space-x-3">
                  <div
                    className={`w-10 h-10 rounded-lg flex items-center justify-center ${
                      order.status === "coordinating"
                        ? "bg-yellow-500/20"
                        : order.status === "assigned"
                        ? "bg-blue-500/20"
                        : order.status === "picked_up"
                        ? "bg-purple-500/20"
                        : "bg-green-500/20"
                    }`}
                  >
                    <Package
                      className={`w-5 h-5 ${
                        order.status === "coordinating"
                          ? "text-yellow-400"
                          : order.status === "assigned"
                          ? "text-blue-400"
                          : order.status === "picked_up"
                          ? "text-purple-400"
                          : "text-green-400"
                      }`}
                    />
                  </div>
                  <div>
                    <div className="flex items-center space-x-2">
                      <h4 className="text-sm font-medium text-white">
                        {order.id}
                      </h4>
                      <span className="text-xs text-gray-400">•</span>
                      <span className="text-sm text-gray-300">
                        {order.restaurant}
                      </span>
                    </div>
                    <div className="text-sm text-gray-400 mt-1">
                      {order.items} • Customer: {order.customer}
                    </div>
                  </div>
                </div>
              </div>

              {/* Status & Actions */}
              <div className="flex flex-col sm:flex-row sm:items-center gap-4">
                <div className="flex flex-col items-start">
                  <div className="text-right">
                    <div className="text-sm font-bold text-white">
                      {order.commission}
                    </div>
                    <div className="text-xs text-gray-500">Commission</div>
                  </div>
                  <div className="text-xs text-gray-500 mt-2 flex items-center">
                    <Clock className="w-3 h-3 mr-1" />
                    {order.time}
                  </div>
                </div>

                <div className="flex items-center space-x-2">
                  <span
                    className={`px-3 py-1.5 text-xs rounded-full ${
                      statusColors[order.status]
                    }`}
                  >
                    {order.status.replace("_", " ").charAt(0).toUpperCase() +
                      order.status.replace("_", " ").slice(1)}
                  </span>

                  {order.status === "coordinating" && (
                    <div className="flex space-x-2">
                      <button
                        onClick={() => handleAssign(order.id, "John Delivery")}
                        className="px-3 py-1.5 text-xs bg-gradient-to-r from-blue-500 to-cyan-500 text-white rounded-lg hover:opacity-90"
                      >
                        Assign
                      </button>
                    </div>
                  )}
                </div>
              </div>
            </div>

            {/* Delivery Partner Info */}
            <div className="mt-4 flex items-center justify-between text-xs text-gray-400">
              <div className="flex items-center">
                <Truck className="w-3 h-3 mr-1" />
                Delivery: {order.delivery}
              </div>
              <div className="flex items-center space-x-4">
                <button className="flex items-center hover:text-blue-400">
                  <Phone className="w-3 h-3 mr-1" />
                  Call
                </button>
                <button className="flex items-center hover:text-green-400">
                  <MessageCircle className="w-3 h-3 mr-1" />
                  Message
                </button>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}