"use client";

import { IndianRupee } from "lucide-react";

export default function CommissionTracker() {
  const commissions = [
    { month: "Jan", amount: 56245, orders: 420, trend: "up" },
    { month: "Feb", amount: 65285, orders: 480, trend: "up" },
    { month: "Mar", amount: 63200, orders: 520, trend: "up" },
    { month: "Apr", amount: 44295, orders: 490, trend: "down" },
    { month: "May", amount: 62350, orders: 580, trend: "up" },
    { month: "Jun", amount: 54420, orders: 650, trend: "up" },
  ];

  const maxAmount = Math.max(...commissions.map((c) => c.amount));

  return (
    <div className="bg-gray-900 border border-gray-800 rounded-2xl p-6">
      <div className="flex items-center justify-between mb-6">
        <div>
          <h3 className="text-lg font-bold text-white">Commission Tracker</h3>
          <p className="text-gray-400 text-sm">
            Monthly commission earnings and trends
          </p>
        </div>
      </div>

      {/* Commission Chart */}
      <div className="h-48 flex items-end justify-between mb-6">
        {commissions.map((commission, index) => {
          const height = (commission.amount / maxAmount) * 120;
          return (
            <div key={index} className="flex flex-col items-center flex-1">
              <div className="relative w-8">
                <div
                  className={`w-8 rounded-t-lg transition-all duration-300 hover:opacity-80 ${
                    commission.trend === "up"
                      ? "bg-gradient-to-t from-green-500 to-emerald-500"
                      : "bg-gradient-to-t from-red-500 to-pink-500"
                  }`}
                  style={{ height: `${height}px` }}
                >
                  <div className="absolute -top-6 left-1/2 transform -translate-x-1/2 text-xs font-bold text-white">
                    ₹{commission.amount}
                  </div>
                </div>
              </div>
              <div className="mt-2 text-xs text-gray-500">
                {commission.month}
              </div>
            </div>
          );
        })}
      </div>

      {/* Commission Stats */}
      <div className="grid grid-cols-2 md:grid-cols-4 gap-4 pt-6 border-t border-gray-800">
        <div className="text-center p-3 bg-gray-800/30 rounded-lg">
          <div className="text-lg font-bold text-green-400">
            ₹{commissions[commissions.length - 1].amount}
          </div>
          <div className="text-xs text-gray-500">Current Month</div>
        </div>
        <div className="text-center p-3 bg-gray-800/30 rounded-lg">
          <div className="text-lg font-bold text-white">
            ₹{commissions.reduce((sum, c) => sum + c.amount, 0)}
          </div>
          <div className="text-xs text-gray-500">Total Commission</div>
        </div>
        <div className="text-center p-3 bg-gray-800/30 rounded-lg">
          <div className="text-lg font-bold text-blue-400">
            {commissions[commissions.length - 1].orders}
          </div>
          <div className="text-xs text-gray-500">Orders This Month</div>
        </div>
        <div className="text-center p-3 bg-gray-800/30 rounded-lg">
          <div className="text-lg font-bold text-yellow-400">
            ₹
            {(
              commissions.reduce((sum, c) => sum + c.amount, 0) /
              commissions.reduce((sum, c) => sum + c.orders, 0)
            ).toFixed(2)}
          </div>
          <div className="text-xs text-gray-500">Avg per Order</div>
        </div>
      </div>

      {/* Recent Commission Transactions */}
      <div className="mt-8 pt-6 border-t border-gray-800">
        <h4 className="text-sm font-medium text-white mb-4">
          Recent Commission Transactions
        </h4>
        <div className="space-y-3">
          <div className="flex items-center justify-between p-3 bg-gray-800/30 rounded-lg">
            <div className="flex items-center space-x-3">
              <div className="w-8 h-8 bg-green-500/20 rounded-full flex items-center justify-center">
                <IndianRupee className="w-4 h-4 text-green-400" />
              </div>
              <div>
                <div className="text-sm text-white">Order #MM7921</div>
                <div className="text-xs text-gray-400">
                  Pizza Palace • Today, 2:30 PM
                </div>
              </div>
            </div>
            <div className="text-right">
              <div className="text-sm font-bold text-green-400">₹150.25</div>
              <div className="text-xs text-gray-400">Commission</div>
            </div>
          </div>
          <div className="flex items-center justify-between p-3 bg-gray-800/30 rounded-lg">
            <div className="flex items-center space-x-3">
              <div className="w-8 h-8 bg-green-500/20 rounded-full flex items-center justify-center">
                <IndianRupee className="w-4 h-4 text-green-400" />
              </div>
              <div>
                <div className="text-sm text-white">Order #MM7920</div>
                <div className="text-xs text-gray-400">
                  Burger King • Today, 1:15 PM
                </div>
              </div>
            </div>
            <div className="text-right">
              <div className="text-sm font-bold text-green-400">₹102.80</div>
              <div className="text-xs text-gray-400">Commission</div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}