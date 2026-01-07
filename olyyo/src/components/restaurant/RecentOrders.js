"use client";

import { useEffect, useState } from "react";
import { useSession } from "next-auth/react";
import { ShoppingBag, Clock, Truck, Check } from "lucide-react";

export default function RecentOrders() {
  const { data: session, status } = useSession();
  const [orders, setOrders] = useState([]);
  const [loading, setLoading] = useState(true);
console.log("SESSION 👉", session);
  // ⛔ Wait until session is loaded
  useEffect(() => {
    if (status === "authenticated" && session?.user?.restaurantId) {
      fetchOrders(session.user.restaurantId);
    }
  }, [status, session]);

  const fetchOrders = async (restaurantId) => {
    try {
      const res = await fetch(
        `${process.env.NEXT_PUBLIC_API_URL}/api/orders/restaurant/${restaurantId}`
      );
      const data = await res.json();
      setOrders(data);
    } catch (err) {
      console.error("Failed to fetch orders", err);
    } finally {
      setLoading(false);
    }
  };

  const updateStatus = async (orderId, newStatus) => {
    try {
      await fetch(
        `${process.env.NEXT_PUBLIC_API_URL}/api/orders/${orderId}/status`,
        {
          method: "PATCH",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify({ status: newStatus }),
        }
      );

      // Refresh orders
      fetchOrders(session.user.restaurantId);
    } catch (err) {
      console.error("Failed to update order status", err);
    }
  };

  if (status === "loading" || loading) {
    return <p className="text-gray-400">Loading orders...</p>;
  }

  return (
    <div className="bg-gray-900 border border-gray-800 rounded-2xl p-6">
      <h3 className="text-lg font-bold text-white mb-4">Current Orders</h3>

      {orders.length === 0 ? (
        <p className="text-gray-400">No orders yet</p>
      ) : (
        <div className="space-y-4">
          {orders.map((order) => (
            <div
              key={order._id}
              className="p-4 rounded-lg bg-gray-800/30 border border-gray-800"
            >
              <div className="flex justify-between items-start">
                <div>
                  <div className="flex items-center gap-2">
                    <ShoppingBag className="w-5 h-5 text-blue-400" />
                    <span className="text-white font-semibold">
                      Order #{order._id.slice(-5)}
                    </span>
                  </div>

                  <p className="text-sm text-gray-400 mt-1">
                    {order.items.length} items • ₹{order.totalPrice}
                  </p>

                  <div className="flex items-center text-xs text-gray-500 mt-2">
                    <Clock className="w-3 h-3 mr-1" />
                    {new Date(order.createdAt).toLocaleTimeString()}
                  </div>
                </div>

                <span
                  className={`px-3 py-1 text-xs rounded-full ${
                    order.status === "preparing"
                      ? "bg-yellow-500/10 text-yellow-400"
                      : order.status === "ready"
                      ? "bg-green-500/10 text-green-400"
                      : "bg-blue-500/10 text-blue-400"
                  }`}
                >
                  {order.status}
                </span>
              </div>

              {/* ACTION BUTTONS */}
              <div className="flex gap-2 mt-4">
                {order.status === "preparing" && (
                  <button
                    onClick={() => updateStatus(order._id, "ready")}
                    className="px-4 py-2 text-xs bg-green-600 text-white rounded-lg flex items-center"
                  >
                    <Check className="w-4 h-4 mr-1" />
                    Mark Ready
                  </button>
                )}

                {order.status === "ready" && (
                  <button
                    onClick={() => updateStatus(order._id, "delivered")}
                    className="px-4 py-2 text-xs bg-blue-600 text-white rounded-lg flex items-center"
                  >
                    <Truck className="w-4 h-4 mr-1" />
                    Mark Delivered
                  </button>
                )}
              </div>
            </div>
          ))}
        </div>
      )}
    </div>
  );
}
