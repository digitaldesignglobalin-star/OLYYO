"use client";

import {
  UserCheck,
  Percent,
  ShieldCheck,
  Clock4,
  Truck,
  Activity,
  Clock,
  PackageCheck,
  User,
  DollarSign,
  TrendingUp,
  Star,
} from "lucide-react";

// Detailed Info Component for Track sections
export default function TrackDetailInfo({ type }) {
  const getDataByType = () => {
    switch (type) {
      case "middlemen":
        return {
          title: "Middle Man Analytics",
          stats: [
            {
              label: "Active Middlemen",
              value: "12",
              icon: <UserCheck className="w-5 h-5" />,
              color: "from-blue-500/10 to-blue-600/10",
            },
            {
              label: "Avg Commission Rate",
              value: "15%",
              icon: <Percent className="w-5 h-5" />,
              color: "from-green-500/10 to-green-600/10",
            },
            {
              label: "Verified Middlemen",
              value: "10",
              icon: <ShieldCheck className="w-5 h-5" />,
              color: "from-purple-500/10 to-purple-600/10",
            },
            {
              label: "Pending Verifications",
              value: "2",
              icon: <Clock4 className="w-5 h-5" />,
              color: "from-yellow-500/10 to-yellow-600/10",
            },
          ],
          recentActivities: [
            {
              name: "Mike Johnson",
              action: "New order processed",
              time: "10 min ago",
              status: "success",
            },
            {
              name: "Sarah Miller",
              action: "Commission withdrawn",
              time: "25 min ago",
              status: "success",
            },
            {
              name: "David Chen",
              action: "Verification pending",
              time: "1 hour ago",
              status: "pending",
            },
            {
              name: "Alex Wilson",
              action: "Reported issue",
              time: "2 hours ago",
              status: "warning",
            },
          ],
          topPerformers: [
            {
              name: "Mike Johnson",
              orders: "142",
              commission: "₹68,504",
              rating: "4.9",
            },
            {
              name: "Sarah Miller",
              orders: "128",
              commission: "₹73,450",
              rating: "4.8",
            },
            {
              name: "Robert Kim",
              orders: "95",
              commission: "₹61,820",
              rating: "4.7",
            },
            {
              name: "Lisa Wang",
              orders: "87",
              commission: "₹71,650",
              rating: "4.6",
            },
          ],
        };

      case "delivery":
        return {
          title: "Delivery Partner Analytics",
          stats: [
            {
              label: "Active Partners",
              value: "48",
              icon: <Truck className="w-5 h-5" />,
              color: "from-green-500/10 to-green-600/10",
            },
            {
              label: "On-duty Now",
              value: "32",
              icon: <Activity className="w-5 h-5" />,
              color: "from-orange-500/10 to-orange-600/10",
            },
            {
              label: "Avg Delivery Time",
              value: "18 min",
              icon: <Clock className="w-5 h-5" />,
              color: "from-blue-500/10 to-blue-600/10",
            },
            {
              label: "Success Rate",
              value: "98.2%",
              icon: <PackageCheck className="w-5 h-5" />,
              color: "from-emerald-500/10 to-emerald-600/10",
            },
          ],
          recentActivities: [
            {
              name: "John Delivery",
              action: "Order #7842 delivered",
              time: "5 min ago",
              status: "success",
            },
            {
              name: "Maria Garcia",
              action: "Picked up order #7843",
              time: "12 min ago",
              status: "success",
            },
            {
              name: "Tom Wilson",
              action: "Route delay reported",
              time: "30 min ago",
              status: "warning",
            },
            {
              name: "Sam Chen",
              action: "Completed 10 deliveries",
              time: "1 hour ago",
              status: "success",
            },
          ],
          topPerformers: [
            {
              name: "John Delivery",
              deliveries: "45",
              rating: "4.9",
              earnings: "₹71,250",
            },
            {
              name: "Maria Garcia",
              deliveries: "38",
              rating: "4.8",
              earnings: "₹61,080",
            },
            {
              name: "Sam Chen",
              deliveries: "35",
              rating: "4.9",
              earnings: "₹58,980",
            },
            {
              name: "Alex Kumar",
              deliveries: "32",
              rating: "4.7",
              earnings: "₹47,890",
            },
          ],
        };

      case "customers":
        return {
          title: "Customer Analytics",
          stats: [
            {
              label: "Total Customers",
              value: "1,248",
              icon: <User className="w-5 h-5" />,
              color: "from-purple-500/10 to-purple-600/10",
            },
            {
              label: "Active Today",
              value: "842",
              icon: <Activity className="w-5 h-5" />,
              color: "from-green-500/10 to-green-600/10",
            },
            {
              label: "New This Month",
              value: "156",
              icon: <TrendingUp className="w-5 h-5" />,
              color: "from-blue-500/10 to-blue-600/10",
            },
            {
              label: "Avg Order Value",
              value: "₹250.50",
              icon: <DollarSign className="w-5 h-5" />,
              color: "from-emerald-500/10 to-emerald-600/10",
            },
          ],
          recentActivities: [
            {
              name: "Emily Smith",
              action: "Placed order #7845",
              time: "8 min ago",
              status: "success",
            },
            {
              name: "Michael Brown",
              action: "Created new account",
              time: "15 min ago",
              status: "success",
            },
            {
              name: "Jessica Lee",
              action: "Submitted review",
              time: "25 min ago",
              status: "success",
            },
            {
              name: "David Wilson",
              action: "Reported issue",
              time: "45 min ago",
              status: "warning",
            },
          ],
          topPerformers: [
            {
              name: "Sarah Johnson",
              orders: "42",
              spent: "₹93,850",
              loyalty: "Platinum",
            },
            {
              name: "Mike Chen",
              orders: "38",
              spent: "₹81,620",
              loyalty: "Gold",
            },
            {
              name: "Lisa Brown",
              orders: "35",
              spent: "₹81,480",
              loyalty: "Gold",
            },
            {
              name: "Tom Wilson",
              orders: "28",
              spent: "₹81,150",
              loyalty: "Silver",
            },
          ],
        };

      default:
        return {
          title: "Analytics",
          stats: [],
          recentActivities: [],
          topPerformers: [],
        };
    }
  };

  const data = getDataByType();

  return (
    <div className="space-y-6">
      {/* Stats Cards */}
      <div className="grid grid-cols-2 lg:grid-cols-4 gap-4">
        {data.stats.map((stat, index) => (
          <div
            key={index}
            className={`bg-gradient-to-br ${stat.color} border border-gray-800 rounded-xl p-4`}
          >
            <div className="flex items-center justify-between mb-3">
              <div className="p-2 bg-gray-800/50 rounded-lg">{stat.icon}</div>
              <span className="text-xs text-gray-400">Today</span>
            </div>
            <div className="text-2xl font-bold text-white mb-1">
              {stat.value}
            </div>
            <div className="text-sm text-gray-400">{stat.label}</div>
          </div>
        ))}
      </div>

      {/* Detailed Info Grid */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        {/* Recent Activities */}
        <div className="bg-gradient-to-br from-gray-900 to-gray-950 border border-gray-800 rounded-2xl p-6">
          <div className="flex items-center justify-between mb-6">
            <h3 className="text-lg font-bold text-white">Recent Activities</h3>
          </div>
          <div className="space-y-4">
            {data.recentActivities.map((activity, index) => (
              <div
                key={index}
                className="flex items-center justify-between p-3 bg-gray-800/30 rounded-xl hover:bg-gray-800/50 transition-colors"
              >
                <div className="flex items-center space-x-3">
                  <div
                    className={`w-2 h-2 rounded-full ${
                      activity.status === "success"
                        ? "bg-green-500"
                        : activity.status === "warning"
                        ? "bg-yellow-500"
                        : "bg-blue-500"
                    }`}
                  ></div>
                  <div>
                    <p className="text-sm font-medium text-white">
                      {activity.name}
                    </p>
                    <p className="text-xs text-gray-400">{activity.action}</p>
                  </div>
                </div>
                <span className="text-xs text-gray-500">{activity.time}</span>
              </div>
            ))}
          </div>
        </div>

        {/* Top Performers */}
        <div className="bg-gradient-to-br from-gray-900 to-gray-950 border border-gray-800 rounded-2xl p-6">
          <div className="flex items-center justify-between mb-6">
            <h3 className="text-lg font-bold text-white">Top Performers</h3>
          </div>
          <div className="space-y-4">
            {data.topPerformers.map((performer, index) => (
              <div
                key={index}
                className="flex items-center justify-between p-3 bg-gray-800/30 rounded-xl hover:bg-gray-800/50 transition-colors"
              >
                <div className="flex items-center space-x-3">
                  <div className="w-10 h-10 bg-gradient-to-br from-gray-800 to-gray-900 rounded-lg flex items-center justify-center">
                    <span className="font-bold text-white">
                      {performer.name.charAt(0)}
                    </span>
                  </div>
                  <div>
                    <p className="text-sm font-medium text-white">
                      {performer.name}
                    </p>
                    <p className="text-xs text-gray-400">
                      {type === "middlemen"
                        ? `${performer.orders} orders`
                        : type === "delivery"
                        ? `${performer.deliveries} deliveries`
                        : `${performer.orders} orders`}
                    </p>
                  </div>
                </div>
                <div className="text-right">
                  <p className="text-sm font-bold text-white">
                    {type === "middlemen"
                      ? performer.commission
                      : type === "delivery"
                      ? performer.earnings
                      : performer.spent}
                  </p>
                  <div className="flex items-center justify-end space-x-1">
                    <Star className="w-3 h-3 text-yellow-500 fill-current" />
                    <span className="text-xs text-gray-400">
                      {performer.rating || performer.loyalty}
                    </span>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Additional Metrics */}
      <div className="bg-gradient-to-br from-gray-900 to-gray-950 border border-gray-800 rounded-2xl p-6">
        <h3 className="text-lg font-bold text-white mb-6">
          Performance Metrics
        </h3>
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-4">
          <div className="text-center p-4 bg-gray-800/30 rounded-xl">
            <div className="text-2xl font-bold text-white mb-2">
              {type === "middlemen"
                ? "92%"
                : type === "delivery"
                ? "98.2%"
                : "94.5%"}
            </div>
            <p className="text-sm text-gray-400">Satisfaction Rate</p>
          </div>
          <div className="text-center p-4 bg-gray-800/30 rounded-xl">
            <div className="text-2xl font-bold text-white mb-2">
              {type === "middlemen" ? "24" : type === "delivery" ? "142" : "45"}
            </div>
            <p className="text-sm text-gray-400">
              {type === "middlemen"
                ? "Avg Orders/Month"
                : type === "delivery"
                ? "Avg Deliveries/Day"
                : "Avg Orders/Week"}
            </p>
          </div>
          <div className="text-center p-4 bg-gray-800/30 rounded-xl">
            <div className="text-2xl font-bold text-white mb-2">
              {type === "middlemen"
                ? "₹23,850"
                : type === "delivery"
                ? "₹23,980"
                : "₹61,450"}
            </div>
            <p className="text-sm text-gray-400">
              {type === "middlemen"
                ? "Avg Monthly Earnings"
                : type === "delivery"
                ? "Avg Weekly Earnings"
                : "Avg Monthly Spending"}
            </p>
          </div>
          <div className="text-center p-4 bg-gray-800/30 rounded-xl">
            <div className="text-2xl font-bold text-green-400 mb-2">
              {type === "middlemen"
                ? "+18%"
                : type === "delivery"
                ? "+24%"
                : "+15%"}
            </div>
            <p className="text-sm text-gray-400">Growth This Month</p>
          </div>
        </div>
      </div>
    </div>
  );
}