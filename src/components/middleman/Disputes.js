"use client";

import { useState } from "react";
import {
  AlertTriangle,
  Calendar,
  Phone,
  MessageCircle,
} from "lucide-react";

export default function Disputes() {
  const [disputes, setDisputes] = useState([
    {
      id: 1,
      type: "Late Delivery",
      restaurant: "Pizza Palace",
      delivery: "John Delivery",
      customer: "John Smith",
      description: "Order arrived 45 minutes late",
      status: "open",
      priority: "high",
      date: "Today, 10:30 AM",
    },
    {
      id: 2,
      type: "Wrong Order",
      restaurant: "Burger King",
      delivery: "Mike Rider",
      customer: "Emma Wilson",
      description: "Received vegetarian burger instead of chicken",
      status: "in_review",
      priority: "medium",
      date: "Yesterday, 7:15 PM",
    },
    {
      id: 3,
      type: "Payment Issue",
      restaurant: "Sushi Bar",
      delivery: "Sarah Express",
      customer: "Michael Brown",
      description: "Double charged for the order",
      status: "resolved",
      priority: "high",
      date: "Nov 28, 3:45 PM",
    },
  ]);

  const statusColors = {
    open: "bg-red-500/10 text-red-400",
    in_review: "bg-yellow-500/10 text-yellow-400",
    resolved: "bg-green-500/10 text-green-400",
  };

  const priorityColors = {
    high: "bg-red-500/10 text-red-400",
    medium: "bg-yellow-500/10 text-yellow-400",
    low: "bg-blue-500/10 text-blue-400",
  };

  const handleResolve = (disputeId) => {
    setDisputes(
      disputes.map((dispute) =>
        dispute.id === disputeId ? { ...dispute, status: "resolved" } : dispute
      )
    );
  };

  return (
    <div className="bg-gray-900 border border-gray-800 rounded-2xl p-6">
      <div className="flex flex-col sm:flex-row sm:items-center justify-between mb-6 gap-4">
        <div>
          <h3 className="text-lg font-bold text-white">Active Disputes</h3>
          <p className="text-gray-400 text-sm">
            Resolve conflicts between restaurants and delivery
          </p>
        </div>
      </div>

      <div className="space-y-4">
        {disputes.map((dispute) => (
          <div
            key={dispute.id}
            className="p-4 rounded-lg bg-gray-800/30 hover:bg-gray-800/50 transition-colors"
          >
            <div className="flex flex-col lg:flex-row lg:items-start justify-between gap-4">
              {/* Left Column */}
              <div className="flex-1">
                <div className="flex items-start justify-between mb-3">
                  <div>
                    <h4 className="text-sm font-medium text-white">
                      {dispute.type}
                    </h4>
                    <div className="text-xs text-gray-400 mt-1">
                      {dispute.restaurant} • {dispute.delivery} • Customer:{" "}
                      {dispute.customer}
                    </div>
                  </div>
                  <div className="flex items-center space-x-2">
                    <span
                      className={`px-2 py-1 text-xs rounded-full ${
                        priorityColors[dispute.priority]
                      }`}
                    >
                      {dispute.priority}
                    </span>
                    <span
                      className={`px-2 py-1 text-xs rounded-full ${
                        statusColors[dispute.status]
                      }`}
                    >
                      {dispute.status.replace("_", " ")}
                    </span>
                  </div>
                </div>

                <p className="text-sm text-gray-300">{dispute.description}</p>

                <div className="flex items-center text-xs text-gray-500 mt-3">
                  <Calendar className="w-3 h-3 mr-1" />
                  {dispute.date}
                </div>
              </div>

              {/* Right Column */}
              <div className="flex flex-col space-y-2 min-w-[200px]">
                {dispute.status !== "resolved" && (
                  <div className="flex space-x-2">
                    <button
                      onClick={() => handleResolve(dispute.id)}
                      className="flex-1 px-3 py-1.5 text-xs bg-gradient-to-r from-green-500 to-emerald-500 text-white rounded hover:opacity-90"
                    >
                      Mark Resolved
                    </button>
                    <button className="px-3 py-1.5 text-xs bg-gradient-to-r from-blue-500 to-cyan-500 text-white rounded hover:opacity-90">
                      Contact
                    </button>
                  </div>
                )}
                <div className="flex justify-between text-xs text-gray-400">
                  <button className="flex items-center hover:text-blue-400">
                    <Phone className="w-3 h-3 mr-1" />
                    Call Restaurant
                  </button>
                  <button className="flex items-center hover:text-green-400 ml-1">
                    <MessageCircle className="w-3 h-3 mr-0.5" />
                    Message Delivery
                  </button>
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}