"use client";

import {
  Package,
  CheckCircle,
  AlertTriangle,
  IndianRupee,
  Star,
  Clock,
} from "lucide-react";

export default function CoordinationTimeline() {
  const events = [
    {
      time: "9:00 AM",
      type: "order",
      restaurant: "Pizza Palace",
      delivery: "John D",
      status: "assigned",
      icon: <Package className="w-4 h-4" />,
    },
    {
      time: "10:30 AM",
      type: "pickup",
      restaurant: "Burger King",
      delivery: "Mike R",
      status: "completed",
      icon: <CheckCircle className="w-4 h-4" />,
    },
    {
      time: "12:15 PM",
      type: "dispute",
      restaurant: "Sushi Bar",
      delivery: "Sarah E",
      status: "resolved",
      icon: <AlertTriangle className="w-4 h-4" />,
    },
    {
      time: "2:45 PM",
      type: "order",
      restaurant: "Coffee Shop",
      delivery: "Alex S",
      status: "in_progress",
      icon: <Package className="w-4 h-4" />,
    },
    {
      time: "4:20 PM",
      type: "commission",
      restaurant: "Pasta House",
      delivery: "David L",
      status: "paid",
      icon: <IndianRupee className="w-4 h-4" />,
    },
    {
      time: "6:30 PM",
      type: "rating",
      restaurant: "Pizza Palace",
      delivery: "John D",
      status: "received",
      icon: <Star className="w-4 h-4" />,
    },
  ];

  const statusColors = {
    assigned: "bg-blue-500/10 text-blue-400",
    completed: "bg-green-500/10 text-green-400",
    resolved: "bg-purple-500/10 text-purple-400",
    in_progress: "bg-yellow-500/10 text-yellow-400",
    paid: "bg-emerald-500/10 text-emerald-400",
    received: "bg-pink-500/10 text-pink-400",
  };

  return (
    <div className="bg-gray-900 border border-gray-800 rounded-2xl p-6">
      <div className="flex items-center justify-between mb-6">
        <div>
          <h3 className="text-lg font-bold text-white">
            Today's Coordination Timeline
          </h3>
          <p className="text-gray-400 text-sm">
            Real-time coordination activities
          </p>
        </div>
      </div>

      <div className="space-y-4">
        {events.map((event, index) => (
          <div
            key={index}
            className="flex items-center p-4 rounded-lg bg-gray-800/30 hover:bg-gray-800/50 transition-colors"
          >
            {/* Timeline line */}
            <div className="relative flex-shrink-0 w-16">
              <div className="absolute left-6 top-0 bottom-0 w-0.5 bg-gradient-to-b from-green-500 to-emerald-500"></div>
              <div className="relative w-12 h-12 rounded-full bg-gradient-to-r from-green-500 to-emerald-500 flex items-center justify-center">
                <div className="w-8 h-8 bg-gray-900 rounded-full flex items-center justify-center">
                  {event.icon}
                </div>
              </div>
            </div>

            {/* Event details */}
            <div className="flex-1 ml-4">
              <div className="flex items-center justify-between">
                <div>
                  <h4 className="text-sm font-medium text-white">
                    {event.type.charAt(0).toUpperCase() + event.type.slice(1)} •{" "}
                    {event.restaurant}
                  </h4>
                  <p className="text-xs text-gray-400 mt-1">
                    Delivery: {event.delivery}
                  </p>
                </div>
                <div className="flex items-center space-x-3">
                  <span
                    className={`px-3 py-1 text-xs rounded-full ${
                      statusColors[event.status]
                    }`}
                  >
                    {event.status.replace("_", " ")}
                  </span>
                  <span className="text-sm text-gray-400">{event.time}</span>
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}