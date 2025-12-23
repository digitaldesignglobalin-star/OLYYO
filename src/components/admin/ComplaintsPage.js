"use client";

import { useState } from "react";
import { MoreVertical } from "lucide-react";

// Complaints Page Component
export default function ComplaintsPage() {
  const complaints = [
    {
      id: 1,
      customer: "David Wilson",
      issue: "Late Delivery",
      status: "pending",
      priority: "high",
      date: "Today, 10:30 AM",
      restaurant: "Burger Barn",
    },
    {
      id: 2,
      customer: "Jessica Lee",
      issue: "Wrong Order",
      status: "resolved",
      priority: "medium",
      date: "Yesterday, 3:15 PM",
      restaurant: "Pizza Palace",
    },
    {
      id: 3,
      customer: "Michael Brown",
      issue: "Food Quality",
      status: "in-progress",
      priority: "high",
      date: "2 days ago",
      restaurant: "Sushi Zen",
    },
    {
      id: 4,
      customer: "Sarah Johnson",
      issue: "Missing Items",
      status: "resolved",
      priority: "low",
      date: "3 days ago",
      restaurant: "Taco Fiesta",
    },
    {
      id: 5,
      customer: "Mike Chen",
      issue: "Rude Delivery",
      status: "pending",
      priority: "high",
      date: "4 days ago",
      restaurant: "Coffee Corner",
    },
    {
      id: 6,
      customer: "Lisa Brown",
      issue: "Overcharged",
      status: "resolved",
      priority: "medium",
      date: "5 days ago",
      restaurant: "Burger Barn",
    },
  ];

  const [selectedStatus, setSelectedStatus] = useState("all");

  const filteredComplaints =
    selectedStatus === "all"
      ? complaints
      : complaints.filter((c) => c.status === selectedStatus);

  const getStatusColor = (status) => {
    switch (status) {
      case "pending":
        return "from-red-500/10 to-red-600/10 text-red-400 border-red-500/20";
      case "in-progress":
        return "from-yellow-500/10 to-yellow-600/10 text-yellow-400 border-yellow-500/20";
      case "resolved":
        return "from-green-500/10 to-green-600/10 text-green-400 border-green-500/20";
      default:
        return "from-gray-500/10 to-gray-600/10 text-gray-400 border-gray-500/20";
    }
  };

  const getPriorityColor = (priority) => {
    switch (priority) {
      case "high":
        return "bg-red-500/20 text-red-400";
      case "medium":
        return "bg-yellow-500/20 text-yellow-400";
      case "low":
        return "bg-green-500/20 text-green-400";
      default:
        return "bg-gray-500/20 text-gray-400";
    }
  };

  return (
    <div className="space-y-6 animate-fade-in">
      <div className="bg-gradient-to-br from-gray-900 to-gray-950 border border-gray-800 rounded-2xl p-6">
        <div className="flex flex-col lg:flex-row lg:items-center justify-between mb-6">
          <div>
            <h2 className="text-2xl font-bold text-white">
              Customer Complaints
            </h2>
            <p className="text-gray-400">Total 24 complaints reported</p>
          </div>

          {/* Status Filter Buttons */}
          <div className="flex space-x-2 mt-4 lg:mt-0">
            <button
              onClick={() => setSelectedStatus("all")}
              className={`px-4 py-2 rounded-lg text-sm font-medium transition-all duration-300 ${
                selectedStatus === "all"
                  ? "bg-gradient-to-r from-orange-500 to-red-500 text-white"
                  : "bg-gray-800 text-gray-400 hover:text-white"
              }`}
            >
              All
            </button>
            <button
              onClick={() => setSelectedStatus("pending")}
              className={`px-4 py-2 rounded-lg text-sm font-medium transition-all duration-300 ${
                selectedStatus === "pending"
                  ? "bg-gradient-to-r from-red-500 to-pink-500 text-white"
                  : "bg-gray-800 text-gray-400 hover:text-white"
              }`}
            >
              Pending
            </button>
            <button
              onClick={() => setSelectedStatus("in-progress")}
              className={`px-4 py-2 rounded-lg text-sm font-medium transition-all duration-300 ${
                selectedStatus === "in-progress"
                  ? "bg-gradient-to-r from-yellow-500 to-orange-500 text-white"
                  : "bg-gray-800 text-gray-400 hover:text-white"
              }`}
            >
              In Progress
            </button>
            <button
              onClick={() => setSelectedStatus("resolved")}
              className={`px-4 py-2 rounded-lg text-sm font-medium transition-all duration-300 ${
                selectedStatus === "resolved"
                  ? "bg-gradient-to-r from-green-500 to-emerald-500 text-white"
                  : "bg-gray-800 text-gray-400 hover:text-white"
              }`}
            >
              Resolved
            </button>
          </div>
        </div>

        {/* Complaint Stats */}
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-4 mb-8">
          <div className="bg-gradient-to-br from-red-500/10 to-red-600/10 border border-red-500/20 rounded-xl p-4">
            <div className="text-2xl font-bold text-white mb-1">8</div>
            <div className="text-sm text-gray-400">Pending</div>
          </div>
          <div className="bg-gradient-to-br from-yellow-500/10 to-yellow-600/10 border border-yellow-500/20 rounded-xl p-4">
            <div className="text-2xl font-bold text-white mb-1">6</div>
            <div className="text-sm text-gray-400">In Progress</div>
          </div>
          <div className="bg-gradient-to-br from-green-500/10 to-green-600/10 border border-green-500/20 rounded-xl p-4">
            <div className="text-2xl font-bold text-white mb-1">10</div>
            <div className="text-sm text-gray-400">Resolved</div>
          </div>
          <div className="bg-gradient-to-br from-orange-500/10 to-orange-600/10 border border-orange-500/20 rounded-xl p-4">
            <div className="text-2xl font-bold text-white mb-1">75%</div>
            <div className="text-sm text-gray-400">Resolution Rate</div>
          </div>
        </div>

        {/* Complaints List */}
        <div className="space-y-4">
          {filteredComplaints.map((complaint) => (
            <div
              key={complaint.id}
              className="p-4 bg-gray-800/30 border border-gray-800 rounded-xl hover:bg-gray-800/50 transition-colors"
            >
              <div className="flex items-start justify-between">
                <div className="flex items-center space-x-3">
                  <div className="w-10 h-10 bg-gradient-to-br from-gray-800 to-gray-900 rounded-lg flex items-center justify-center">
                    <span className="font-bold text-white">
                      {complaint.customer.charAt(0)}
                    </span>
                  </div>
                  <div>
                    <p className="text-sm font-medium text-white">
                      {complaint.customer}
                    </p>
                    <p className="text-xs text-gray-400">
                      {complaint.restaurant}
                    </p>
                  </div>
                </div>
                <div className="text-right">
                  <span className="text-xs text-gray-500">
                    {complaint.date}
                  </span>
                  <div
                    className={`mt-1 px-3 py-1 rounded-full text-xs ${getPriorityColor(
                      complaint.priority
                    )}`}
                  >
                    {complaint.priority.toUpperCase()}
                  </div>
                </div>
              </div>

              <div className="mt-3">
                <p className="text-sm font-medium text-white mb-2">
                  {complaint.issue}
                </p>
                <div className="flex items-center justify-between">
                  <div
                    className={`px-3 py-1.5 rounded-lg text-xs font-medium bg-gradient-to-br ${getStatusColor(
                      complaint.status
                    )}`}
                  >
                    {complaint.status === "in-progress"
                      ? "In Progress"
                      : complaint.status.charAt(0).toUpperCase() +
                        complaint.status.slice(1)}
                  </div>
                  <div className="flex space-x-2">
                    <button className="px-3 py-1.5 bg-gradient-to-r from-blue-500/10 to-blue-600/10 text-blue-400 rounded-lg text-sm hover:bg-blue-500/20 transition-colors">
                      View Details
                    </button>
                    <button className="p-1.5 hover:bg-gray-800 rounded-lg transition-colors">
                      <MoreVertical className="w-4 h-4 text-gray-400" />
                    </button>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}