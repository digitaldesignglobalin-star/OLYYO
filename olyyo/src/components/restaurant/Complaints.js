"use client";

import { useState } from "react";
import { Clock, Phone, MoreVertical } from "lucide-react";

export default function Complaints() {
  const [complaints, setComplaints] = useState([
    {
      id: 1,
      customer: "John Smith",
      order: "#7842",
      type: "Food Quality",
      description: "Pizza was cold and undercooked",
      status: "pending",
      date: "Today, 10:30 AM",
      priority: "high",
      contact: "+1 234 567 8900",
    },
    {
      id: 2,
      customer: "Emma Wilson",
      order: "#7841",
      type: "Delivery Delay",
      description: "Order arrived 45 minutes late",
      status: "in_progress",
      date: "Yesterday, 7:15 PM",
      priority: "medium",
      contact: "emma@email.com",
    },
    {
      id: 3,
      customer: "Michael Brown",
      order: "#7840",
      type: "Wrong Order",
      description: "Received vegetarian pizza instead of pepperoni",
      status: "resolved",
      date: "Nov 28, 3:45 PM",
      priority: "high",
      contact: "+1 987 654 3210",
    },
    {
      id: 4,
      customer: "Sarah Johnson",
      order: "#7839",
      type: "Missing Items",
      description: "Garlic bread was missing from the order",
      status: "pending",
      date: "Nov 28, 1:20 PM",
      priority: "medium",
      contact: "sarah@email.com",
    },
    {
      id: 5,
      customer: "David Lee",
      order: "#7838",
      type: "Customer Service",
      description: "Rude behavior from delivery person",
      status: "in_progress",
      date: "Nov 27, 8:45 PM",
      priority: "high",
      contact: "+1 555 123 4567",
    },
  ]);

  const statusColors = {
    pending: "bg-yellow-500/10 text-yellow-400",
    in_progress: "bg-blue-500/10 text-blue-400",
    resolved: "bg-green-500/10 text-green-400",
    rejected: "bg-red-500/10 text-red-400",
  };

  const priorityColors = {
    high: "bg-red-500/10 text-red-400",
    medium: "bg-yellow-500/10 text-yellow-400",
    low: "bg-blue-500/10 text-blue-400",
  };

  const handleStatusUpdate = (complaintId, newStatus) => {
    setComplaints(
      complaints.map((complaint) =>
        complaint.id === complaintId
          ? { ...complaint, status: newStatus }
          : complaint
      )
    );
  };

  return (
    <div className="bg-gray-900 border border-gray-800 rounded-2xl p-6 w-full max-w-full overflow-hidden">
      <div className="flex flex-col sm:flex-row sm:items-center justify-between mb-6 gap-4">
        <div>
          <h3 className="text-lg font-bold text-white">Customer Complaints</h3>
          <p className="text-gray-400 text-sm">
            Manage and resolve customer issues
          </p>
        </div>
      </div>

      <div className="relative -mx-4 sm:-mx-6">
        <div className="w-full overflow-x-auto">
          <div className="min-w-[1000px] px-4 sm:px-6">
            <table className="w-full whitespace-nowrap">
              <thead>
                <tr className="text-left text-xs text-gray-400 border-b border-gray-800">
                  <th className="pb-3 px-4">Customer & Order</th>
                  <th className="pb-3 px-4">Complaint Type</th>
                  <th className="pb-3 px-4">Description</th>
                  <th className="pb-3 px-4">Priority</th>
                  <th className="pb-3 px-4">Status</th>
                  <th className="pb-3 px-4">Actions</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-gray-800">
                {complaints.map((complaint) => (
                  <tr
                    key={complaint.id}
                    className="hover:bg-gray-800/30 transition-colors"
                  >
                    <td className="py-4 px-4">
                      <div>
                        <div className="font-medium text-white">
                          {complaint.customer}
                        </div>
                        <div className="text-xs text-gray-400">
                          Order {complaint.order}
                        </div>
                        <div className="text-xs text-gray-500 mt-1 flex items-center">
                          <Clock className="w-3 h-3 mr-1" />
                          {complaint.date}
                        </div>
                      </div>
                    </td>
                    <td className="py-4 px-4">
                      <div className="text-sm text-white">{complaint.type}</div>
                    </td>
                    <td className="py-4 px-4">
                      <div className="text-sm text-gray-300 max-w-xs break-words">
                        {complaint.description}
                      </div>
                      <div className="text-xs text-gray-500 mt-1 flex items-center">
                        <Phone className="w-3 h-3 mr-1" />
                        {complaint.contact}
                      </div>
                    </td>
                    <td className="py-4 px-4">
                      <span
                        className={`px-3 py-1 text-xs rounded-full ${
                          priorityColors[complaint.priority]
                        }`}
                      >
                        {complaint.priority.charAt(0).toUpperCase() +
                          complaint.priority.slice(1)}
                      </span>
                    </td>
                    <td className="py-4 px-4">
                      <span
                        className={`px-3 py-1 text-xs rounded-full ${
                          statusColors[complaint.status]
                        }`}
                      >
                        {complaint.status
                          .replace("_", " ")
                          .replace(/\b\w/g, (l) => l.toUpperCase())}
                      </span>
                    </td>
                    <td className="py-4 px-4">
                      <div className="flex items-center space-x-2">
                        {complaint.status === "pending" && (
                          <>
                            <button
                              onClick={() =>
                                handleStatusUpdate(complaint.id, "in_progress")
                              }
                              className="px-3 py-1 text-xs bg-blue-500/20 text-blue-400 rounded hover:bg-blue-500/30"
                            >
                              Start
                            </button>
                            <button
                              onClick={() =>
                                handleStatusUpdate(complaint.id, "resolved")
                              }
                              className="px-3 py-1 text-xs bg-green-500/20 text-green-400 rounded hover:bg-green-500/30"
                            >
                              Resolve
                            </button>
                          </>
                        )}
                        {complaint.status === "in_progress" && (
                          <button
                            onClick={() =>
                              handleStatusUpdate(complaint.id, "resolved")
                            }
                            className="px-3 py-1 text-xs bg-green-500/20 text-green-400 rounded hover:bg-green-500/30"
                          >
                            Mark Resolved
                          </button>
                        )}
                        <button className="p-1 hover:bg-gray-700 rounded">
                          <MoreVertical className="w-4 h-4 text-gray-400" />
                        </button>
                      </div>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </div>

      {/* Stats Summary */}
      <div className="mt-8 pt-6 border-t border-gray-800">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
          <div className="text-center p-3 bg-gray-800/30 rounded-lg">
            <div className="text-lg font-bold text-yellow-400">
              {complaints.filter((c) => c.status === "pending").length}
            </div>
            <div className="text-xs text-gray-500">Pending</div>
          </div>
          <div className="text-center p-3 bg-gray-800/30 rounded-lg">
            <div className="text-lg font-bold text-blue-400">
              {complaints.filter((c) => c.status === "in_progress").length}
            </div>
            <div className="text-xs text-gray-500">In Progress</div>
          </div>
          <div className="text-center p-3 bg-gray-800/30 rounded-lg">
            <div className="text-lg font-bold text-green-400">
              {complaints.filter((c) => c.status === "resolved").length}
            </div>
            <div className="text-xs text-gray-500">Resolved</div>
          </div>
          <div className="text-center p-3 bg-gray-800/30 rounded-lg">
            <div className="text-lg font-bold text-red-400">
              {complaints.filter((c) => c.priority === "high").length}
            </div>
            <div className="text-xs text-gray-500">High Priority</div>
          </div>
        </div>
      </div>
    </div>
  );
}