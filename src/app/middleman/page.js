"use client";

import { useState } from "react";
import {
  BarChart3,
  Package,
  Truck,
  ShoppingBag,
  TrendingUp,
  TrendingDown,
  DollarSign,
  Clock,
  Users,
  MessageSquare,
  Filter,
  ChevronRight,
  Search,
  Bell,
  Settings,
  LogOut,
  Menu,
  X,
  Plus,
  CheckCircle,
  XCircle,
  AlertCircle,
  RefreshCw,
  User,
  Phone,
  Mail,
  MapPin,
  Shield,
  Check,
  Circle,
  AlertTriangle,
  Star,
  Calendar,
  Download,
  MoreVertical,
  ChevronDown,
  ChevronUp,
  Eye,
  MessageCircle,
  // Link,
  Zap,
  Battery,
  Thermometer,
  CreditCard,
  Percent,
  Award,
  Target,
  GitBranch,
  IndianRupee,
  Home,
} from "lucide-react";
import Link from "next/link";

// Middleman Sidebar Component
function MiddlemanSidebar({
  activeTab,
  setActiveTab,
  isMobileOpen,
  setIsMobileOpen,
}) {
  const menuItems = [
    {
      id: "dashboard",
      icon: <BarChart3 className="w-5 h-5" />,
      label: "Middleman Dashboard",
      count: null,
    },
    {
      id: "restaurants",
      icon: <ShoppingBag className="w-5 h-5" />,
      label: "Restaurants",
      count: "24",
    },
    {
      id: "delivery",
      icon: <Truck className="w-5 h-5" />,
      label: "Delivery Partners",
      count: "42",
    },
    {
      id: "orders",
      icon: <Package className="w-5 h-5" />,
      label: "Active Orders",
      count: "18",
    },
    {
      id: "disputes",
      icon: <AlertTriangle className="w-5 h-5" />,
      label: "Disputes",
      count: "3",
    },
    {
      id: "commission",
      icon: <Percent className="w-5 h-5" />,
      label: "Commission",
      count: null,
    },
  ];

  return (
    <>
      {/* Mobile Menu Button */}
      <button
        onClick={() => setIsMobileOpen(true)}
        className="lg:hidden fixed top-5 left-6 z-50 p-2 bg-gradient-to-r from-gray-800 to-gray-900 border border-gray-700 rounded-lg shadow-lg"
      >
        <Menu className="w-6 h-6 text-white" />
      </button>

      {/* Sidebar */}
      <aside
        className={`
        fixed inset-y-0 left-0 z-40 w-64 bg-gradient-to-b from-gray-900 via-gray-900 to-black
        border-r border-gray-800 shadow-2xl transform transition-all duration-500 ease-out
        ${isMobileOpen ? "translate-x-0" : "-translate-x-full lg:translate-x-0"}
      `}
      >
        {/* Logo */}
        <div className="h-20 border-b border-gray-800 flex items-center px-6 justify-between">
  {/* Desktop / Tablet Logo */}
  <Link
    href="/"
    className="hidden lg:flex items-center space-x-3"
  >
    <div className="w-10 h-10 bg-gradient-to-r from-green-500 to-emerald-500 rounded-lg flex items-center justify-center">
      <GitBranch className="w-6 h-6 text-white" />
    </div>
    <div>
      <h1 className="text-xl font-bold text-white">Middleman Hub</h1>
      <p className="text-xs text-gray-500">Coordination Panel</p>
    </div>
  </Link>

  {/* Mobile Home Icon */}
  <Link
    href="/"
    className="lg:hidden w-10 h-10 absolute top-6 left-50 flex items-center justify-center rounded-lg bg-gray-800 hover:bg-gray-700 transition-colors"
    title="Go to Home"
  >
    <Home className="w-5 h-5 text-white" />
  </Link>
</div>


        {/* Menu */}
        <div className="h-[calc(100vh-160px)] overflow-y-auto py-4">
          <div className="px-4">
            <div className="space-y-1">
              {menuItems.map((item) => (
                <button
                  key={item.id}
                  onClick={() => {
                    setActiveTab(item.id);
                    setIsMobileOpen(false);
                  }}
                  className={`
                    w-full flex items-center justify-between px-4 py-3 rounded-lg
                    transition-all duration-200
                    ${
                      activeTab === item.id
                        ? "bg-gradient-to-r from-green-500/20 to-emerald-500/20 text-white border-l-4 border-green-500"
                        : "text-gray-400 hover:bg-gray-800 hover:text-white"
                    }
                  `}
                >
                  <div className="flex items-center space-x-3">
                    <div
                      className={`w-5 h-5 flex items-center justify-center ${
                        activeTab === item.id
                          ? "text-green-400"
                          : "text-gray-400"
                      }`}
                    >
                      {item.icon}
                    </div>
                    <span className="text-sm font-medium">{item.label}</span>
                  </div>
                  {item.count && (
                    <span
                      className={`px-2 py-1 text-xs rounded ${
                        activeTab === item.id
                          ? "bg-green-500 text-white"
                          : "bg-gray-800 text-gray-400"
                      }`}
                    >
                      {item.count}
                    </span>
                  )}
                </button>
              ))}
            </div>
          </div>
        </div>

        {/* Middleman Info */}
        <div className="h-20 border-t border-gray-800 flex items-center px-4">
          <div className="flex items-center space-x-3 w-full">
            <div className="w-10 h-10 bg-gradient-to-r from-green-500 to-emerald-500 rounded-full flex items-center justify-center">
              <User className="w-5 h-5 text-white" />
            </div>
            <div className="flex-1 min-w-0">
              <p className="text-sm font-medium text-white truncate">
                John Coordinator
              </p>
              <p className="text-xs text-gray-500 truncate">
                middleman@olyyo.com
              </p>
            </div>
            <Link href="/" className="p-2 hover:bg-gray-800 rounded-lg">
              <LogOut className="w-5 h-5 text-gray-400" />
            </Link>
          </div>
        </div>

        {/* Close button for mobile */}
        <button
          onClick={() => setIsMobileOpen(false)}
          className="lg:hidden absolute top-6 -right-17 p-2 bg-black hover:bg-gray-800 rounded-lg"
        >
          <X className="w-5 h-5" />
        </button>
      </aside>

      {/* Overlay */}
      {isMobileOpen && (
        <div
          onClick={() => setIsMobileOpen(false)}
          className="lg:hidden fixed inset-0 bg-black/70 backdrop-blur-sm z-30"
        />
      )}
    </>
  );
}

// Middleman Stats Cards
function MiddlemanStats() {
  const stats = [
    {
      title: "Total Commission",
      value: "₹6,64,52,850",
      change: "+15.5%",
      isPositive: true,
      icon: IndianRupee,
      color: "from-green-500 to-emerald-500",
      delay: "100ms",
    },
    {
      title: "Active Orders",
      value: "18",
      change: "+4",
      isPositive: true,
      icon: ShoppingBag,
      color: "from-blue-500 to-cyan-500",
      delay: "200ms",
    },
    {
      title: "Restaurants",
      value: "24",
      change: "+3",
      isPositive: true,
      icon: Users,
      color: "from-orange-500 to-red-500",
      delay: "300ms",
    },
    {
      title: "Delivery Partners",
      value: "42",
      change: "+6",
      isPositive: true,
      icon: Truck,
      color: "from-purple-500 to-pink-500",
      delay: "400ms",
    },
  ];

  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
      {stats.map((stat, index) => {
        const Icon = stat.icon;
        return (
          <div
            key={index}
            className="bg-gray-900 border border-gray-800 rounded-xl p-6 hover:border-gray-700 transition-colors group"
          >
            <div className="flex items-start justify-between mb-4">
              <div
                className={`p-3 rounded-lg bg-gradient-to-br ${stat.color} bg-opacity-10 group-hover:scale-110 transition-transform`}
              >
                <Icon
                  className="w-6 h-6"
                  style={{ color: stat.color.split(" ")[0].split("-")[1] }}
                />
              </div>
              <div
                className={`flex items-center text-sm ${
                  stat.isPositive ? "text-green-400" : "text-red-400"
                }`}
              >
                {stat.isPositive ? (
                  <TrendingUp className="w-4 h-4 mr-1" />
                ) : (
                  <TrendingDown className="w-4 h-4 mr-1" />
                )}
                {stat.change}
              </div>
            </div>
            <h3 className="text-2xl font-bold text-white mb-1">{stat.value}</h3>
            <p className="text-gray-400 text-sm">{stat.title}</p>
          </div>
        );
      })}
    </div>
  );
}

// Coordination Timeline
function CoordinationTimeline() {
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
        {/* <button className="text-sm text-green-400 hover:text-green-300 flex items-center">
          View All <ChevronRight className="w-4 h-4 ml-1" />
        </button> */}
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

// Active Orders Component
function ActiveOrders() {
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
        {/* <div className="flex items-center space-x-2">
          <button className="p-2 hover:bg-gray-800 rounded-lg">
            <Filter className="w-4 h-4 text-gray-400" />
          </button>
          <button className="p-2 hover:bg-gray-800 rounded-lg">
            <RefreshCw className="w-4 h-4 text-gray-400" />
          </button>
        </div> */}
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
                      {/* <button className="p-1.5 hover:bg-gray-700 rounded">
                        <MoreVertical className="w-4 h-4 text-gray-400" />
                      </button> */}
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

// Restaurants List Component
function RestaurantsList() {
  const restaurants = [
    {
      id: 1,
      name: "Pizza Palace",
      type: "Italian",
      orders: "45",
      rating: "4.8",
      status: "active",
      contact: "John Manager",
      phone: "+1 234 567 8900",
    },
    {
      id: 2,
      name: "Burger King",
      type: "Fast Food",
      orders: "38",
      rating: "4.5",
      status: "active",
      contact: "Mike Owner",
      phone: "+1 234 567 8901",
    },
    {
      id: 3,
      name: "Sushi Bar",
      type: "Japanese",
      orders: "28",
      rating: "4.9",
      status: "busy",
      contact: "Sarah Chef",
      phone: "+1 234 567 8902",
    },
    {
      id: 4,
      name: "Coffee Shop",
      type: "Cafe",
      orders: "52",
      rating: "4.7",
      status: "active",
      contact: "Alex Manager",
      phone: "+1 234 567 8903",
    },
    {
      id: 5,
      name: "Pasta House",
      type: "Italian",
      orders: "31",
      rating: "4.6",
      status: "offline",
      contact: "David Owner",
      phone: "+1 234 567 8904",
    },
  ];

  const statusColors = {
    active: "bg-green-500/10 text-green-400",
    busy: "bg-yellow-500/10 text-yellow-400",
    offline: "bg-red-500/10 text-red-400",
  };

  return (
    <div className="bg-gray-900 border border-gray-800 rounded-2xl p-6 w-full max-w-full overflow-hidden">
      <div className="flex items-center justify-between mb-6">
        <div>
          <h3 className="text-lg font-bold text-white">Partner Restaurants</h3>
          <p className="text-gray-400 text-sm">
            Manage restaurant partnerships and coordination
          </p>
        </div>
        <button className="text-sm text-green-400 hover:text-green-300 flex items-center">
          Add Restaurant <Plus className="w-4 h-4 ml-1" />
        </button>
      </div>

      <div className="relative w-full overflow-x-auto">
  <table className="min-w-[900px] w-full whitespace-nowrap">
          <thead>
            <tr className="text-left text-xs text-gray-400 border-b border-gray-800">
              <th className="pb-3 px-4">Restaurant</th>
              <th className="pb-3 px-4">Type</th>
              <th className="pb-3 px-4">Orders</th>
              <th className="pb-3 px-4">Rating</th>
              <th className="pb-3 px-4">Contact</th>
              <th className="pb-3 px-4">Status</th>
              <th className="pb-3 px-4">Actions</th>
            </tr>
          </thead>
          <tbody className="divide-y divide-gray-800">
            {restaurants.map((restaurant) => (
              <tr
                key={restaurant.id}
                className="hover:bg-gray-800/30 transition-colors"
              >
                <td className="py-4 px-4">
                  <div className="flex items-center space-x-3">
                    <div className="w-10 h-10 bg-gradient-to-r from-orange-500/20 to-red-500/20 rounded-lg flex items-center justify-center">
                      <ShoppingBag className="w-5 h-5 text-orange-400" />
                    </div>
                    <div>
                      <div className="font-medium text-white">
                        {restaurant.name}
                      </div>
                    </div>
                  </div>
                </td>
                <td className="py-4 px-4">
                  <div className="text-sm text-gray-300">{restaurant.type}</div>
                </td>
                <td className="py-4 px-4">
                  <div className="text-sm font-bold text-white">
                    {restaurant.orders}
                  </div>
                  <div className="text-xs text-gray-500">Today</div>
                </td>
                <td className="py-4 px-4">
                  <div className="flex items-center">
                    <Star className="w-4 h-4 text-yellow-400 fill-yellow-400 mr-1" />
                    <span className="text-sm text-white">
                      {restaurant.rating}
                    </span>
                  </div>
                </td>
                <td className="py-4 px-4">
                  <div>
                    <div className="text-sm text-white">
                      {restaurant.contact}
                    </div>
                    <div className="text-xs text-gray-500">
                      {restaurant.phone}
                    </div>
                  </div>
                </td>
                <td className="py-4 px-4">
                  <span
                    className={`px-3 py-1 text-xs rounded-full ${
                      statusColors[restaurant.status]
                    }`}
                  >
                    {restaurant.status.charAt(0).toUpperCase() +
                      restaurant.status.slice(1)}
                  </span>
                </td>
                <td className="py-4 px-4">
                  <div className="flex items-center space-x-2">
                    <button className="p-1.5 hover:bg-gray-700 rounded">
                      <Phone className="w-4 h-4 text-blue-400" />
                    </button>
                    <button className="p-1.5 hover:bg-gray-700 rounded">
                      <MessageCircle className="w-4 h-4 text-green-400" />
                    </button>
                    {/* <button className="p-1.5 hover:bg-gray-700 rounded">
                      <Eye className="w-4 h-4 text-gray-400" />
                    </button> */}
                  </div>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}

// Delivery Partners Component
function DeliveryPartners() {
  const partners = [
    {
      id: 1,
      name: "John Delivery",
      vehicle: "Bike",
      orders: "12",
      rating: "4.9",
      status: "active",
      location: "1.2 km away",
    },
    {
      id: 2,
      name: "Mike Rider",
      vehicle: "Scooter",
      orders: "8",
      rating: "4.7",
      status: "on_delivery",
      location: "3.5 km away",
    },
    {
      id: 3,
      name: "Sarah Express",
      vehicle: "Car",
      orders: "15",
      rating: "4.8",
      status: "active",
      location: "2.1 km away",
    },
    {
      id: 4,
      name: "Alex Swift",
      vehicle: "Bike",
      orders: "10",
      rating: "4.6",
      status: "offline",
      location: "Offline",
    },
    {
      id: 5,
      name: "David Rider",
      vehicle: "Scooter",
      orders: "7",
      rating: "4.9",
      status: "on_delivery",
      location: "4.2 km away",
    },
  ];

  const statusColors = {
    active: "bg-green-500/10 text-green-400",
    on_delivery: "bg-blue-500/10 text-blue-400",
    offline: "bg-red-500/10 text-red-400",
  };

  return (
    <div className="bg-gray-900 border border-gray-800 rounded-2xl p-6">
      <div className="flex items-center justify-between mb-6">
        <div>
          <h3 className="text-lg font-bold text-white">Delivery Partners</h3>
          <p className="text-gray-400 text-sm">
            Manage and coordinate with delivery partners
          </p>
        </div>
        <div className="flex items-center space-x-2">
          <button className="text-sm text-green-400 hover:text-green-300 flex items-center">
            Add Partner <Plus className="w-4 h-4 ml-1" />
          </button>
        </div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-4">
        {partners.map((partner) => (
          <div
            key={partner.id}
            className="p-4 rounded-lg bg-gray-800/30 hover:bg-gray-800/50 transition-colors border border-gray-800"
          >
            <div className="flex items-start justify-between mb-3">
              <div className="flex items-center space-x-3">
                <div className="w-12 h-12 bg-gradient-to-br from-blue-500/20 to-cyan-500/20 rounded-full flex items-center justify-center">
                  <Truck className="w-6 h-6 text-blue-400" />
                </div>
                <div>
                  <h4 className="text-sm font-medium text-white">
                    {partner.name}
                  </h4>
                  <p className="text-xs text-gray-400">{partner.vehicle}</p>
                </div>
              </div>
              <span
                className={`px-2 py-1 text-xs rounded-full ${
                  statusColors[partner.status]
                }`}
              >
                {partner.status.replace("_", " ")}
              </span>
            </div>

            <div className="grid grid-cols-2 gap-3 mt-4">
              <div className="text-center p-2 bg-gray-800/50 rounded-lg">
                <div className="text-xs text-gray-400">Orders</div>
                <div className="text-sm font-bold text-white">
                  {partner.orders}
                </div>
              </div>
              <div className="text-center p-2 bg-gray-800/50 rounded-lg">
                <div className="text-xs text-gray-400">Rating</div>
                <div className="text-sm font-bold text-yellow-400">
                  {partner.rating}
                </div>
              </div>
            </div>

            <div className="mt-4 text-xs text-gray-400">
              <div className="flex items-center justify-between">
                <div className="flex items-center">
                  <MapPin className="w-3 h-3 mr-1" />
                  {partner.location}
                </div>
                <div className="text-green-400 font-medium">
                  {partner.earnings}
                </div>
              </div>
            </div>

            <div className="flex space-x-2 mt-4">
              <button className="flex-1 px-3 py-1.5 text-xs bg-gradient-to-r from-blue-500 to-cyan-500 text-white rounded hover:opacity-90">
                Assign Order
              </button>
              <button className="p-1.5 hover:bg-gray-700 rounded">
                <Phone className="w-4 h-4 text-gray-400" />
              </button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

// Disputes Component
function Disputes() {
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
        {/* <div className="flex items-center space-x-2">
          <button className="p-2 hover:bg-gray-800 rounded-lg">
            <Filter className="w-4 h-4 text-gray-400" />
          </button>
          <div className="text-sm text-gray-400">
            Active: <span className="font-bold text-white">{disputes.filter(d => d.status !== 'resolved').length}</span>
          </div>
        </div> */}
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

// Commission Tracker Component
function CommissionTracker() {
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
        {/* <div className="flex items-center space-x-2">
          <button className="text-sm text-green-400 hover:text-green-300 flex items-center">
            View Details <ChevronRight className="w-4 h-4 ml-1" />
          </button>
          <button className="p-2 hover:bg-gray-800 rounded-lg">
            <Download className="w-4 h-4 text-gray-400" />
          </button>
        </div> */}
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

// Main Middleman Dashboard Component
export default function MiddlemanDashboard() {
  const [activeTab, setActiveTab] = useState("dashboard");
  const [isMobileOpen, setIsMobileOpen] = useState(false);
  const [searchQuery, setSearchQuery] = useState("");

  const renderContent = () => {
    switch (activeTab) {
      case "dashboard":
        return (
          <>
            <MiddlemanStats />

            <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 mb-8">
              <CoordinationTimeline />
              <ActiveOrders />
            </div>

            <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 min-w-0">
              <RestaurantsList />
              <DeliveryPartners />
            </div>
          </>
        );

      case "restaurants":
        return (
          <>
            <div className="mb-6">
              <div className="flex items-center justify-between mb-4">
                <h2 className="text-xl font-bold text-white">
                  Restaurant Partners
                </h2>
                <button className="flex items-center bg-gradient-to-r from-green-500 to-emerald-500 text-white px-4 py-2 rounded-lg hover:opacity-90">
                  <Plus className="w-4 h-4 mr-2" />
                  Add Restaurant
                </button>
              </div>
              <p className="text-gray-400">
                Manage restaurant partnerships and coordination
              </p>
            </div>

            <RestaurantsList />
          </>
        );

      case "delivery":
        return (
          <>
            <div className="mb-6">
              <div className="flex items-center justify-between mb-4">
                <h2 className="text-xl font-bold text-white">
                  Delivery Partners
                </h2>
                {/* <button className="flex items-center bg-gradient-to-r from-blue-500 to-cyan-500 text-white px-4 py-2 rounded-lg hover:opacity-90">
                  <Plus className="w-4 h-4 mr-2" />
                  Add Delivery Partner
                </button> */}
              </div>
              <p className="text-gray-400">
                Manage and coordinate with delivery partners
              </p>
            </div>

            <DeliveryPartners />
          </>
        );

      case "orders":
        return (
          <>
            <div className="mb-6">
              <div className="flex items-center justify-between mb-4">
                <h2 className="text-xl font-bold text-white">Active Orders</h2>
                {/* <div className="flex items-center space-x-2">
                  <button className="p-2 hover:bg-gray-800 rounded-lg">
                    <Filter className="w-4 h-4 text-gray-400" />
                  </button>
                  <button className="p-2 hover:bg-gray-800 rounded-lg">
                    <RefreshCw className="w-4 h-4 text-gray-400" />
                  </button>
                </div> */}
              </div>
              <p className="text-gray-400">
                Coordinate and manage active orders
              </p>
            </div>

            <ActiveOrders />
          </>
        );

      case "disputes":
        return (
          <>
            <div className="mb-6">
              <div className="flex items-center justify-between mb-4">
                <h2 className="text-xl font-bold text-white">
                  Dispute Resolution
                </h2>
                <button className="flex items-center bg-gradient-to-r from-red-500 to-pink-500 text-white px-4 py-2 rounded-lg hover:opacity-90">
                  <AlertTriangle className="w-4 h-4 mr-2" />
                  Report New Dispute
                </button>
              </div>
              <p className="text-gray-400">
                Resolve conflicts between restaurants and delivery partners
              </p>
            </div>

            <Disputes />
          </>
        );

      case "commission":
        return (
          <>
            <div className="mb-6">
              <div className="flex items-center justify-between mb-4">
                <h2 className="text-xl font-bold text-white">
                  Commission Management
                </h2>
                <div className="flex items-center space-x-2">
                  <button className="flex items-center bg-gradient-to-r from-green-500 to-emerald-500 text-white px-4 py-2 rounded-lg hover:opacity-90">
                    <IndianRupee className="w-4 h-4 mr-2" />
                    View Payouts
                  </button>
                  {/* <button className="p-2 hover:bg-gray-800 rounded-lg">
                    <Download className="w-4 h-4 text-gray-400" />
                  </button> */}
                </div>
              </div>
              <p className="text-gray-400">
                Track commission earnings and performance
              </p>
            </div>

            <CommissionTracker />
          </>
        );

      default:
        return <MiddlemanStats />;
    }
  };

  return (
    <div className="flex min-h-screen bg-gray-950 text-gray-300">
      <MiddlemanSidebar
        activeTab={activeTab}
        setActiveTab={setActiveTab}
        isMobileOpen={isMobileOpen}
        setIsMobileOpen={setIsMobileOpen}
      />

      <div className="flex-1 ml-0 lg:ml-64 min-w-0 overflow-hidden">
        {/* Header */}
        <header className="sticky top-0 z-30 bg-gray-900 border-b border-gray-800 p-6">
          <div className="flex flex-col md:flex-row md:items-center justify-between gap-4">
            <div className="mb-4 lg:mb-0 ml-auto lg:ml-0 text-right lg:text-left ">
              <h2 className="text-2xl font-bold text-white capitalize">
                {activeTab === "dashboard"
                  ? "Middleman Dashboard"
                  : activeTab === "restaurants"
                  ? "Restaurant Partners"
                  : activeTab === "delivery"
                  ? "Delivery Partners"
                  : activeTab === "orders"
                  ? "Active Orders"
                  : activeTab === "disputes"
                  ? "Dispute Resolution"
                  : activeTab === "commission"
                  ? "Commission Management"
                  : activeTab}
              </h2>
              <p className="text-gray-400">
                {activeTab === "dashboard"
                  ? "Welcome to your coordination panel"
                  : activeTab === "restaurants"
                  ? "Manage restaurant partnerships and coordination"
                  : activeTab === "delivery"
                  ? "Manage and coordinate with delivery partners"
                  : activeTab === "orders"
                  ? "Coordinate and manage active orders"
                  : activeTab === "disputes"
                  ? "Resolve conflicts between restaurants and delivery partners"
                  : activeTab === "commission"
                  ? "Track commission earnings and performance"
                  : "Middleman coordination panel"}
              </p>
            </div>

            {/* Search & Actions */}
            <div className="flex items-center space-x-4">
              <div className="relative">
                <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 w-5 h-5 text-gray-500" />
                <input
                  type="text"
                  placeholder={
                    activeTab === "restaurants"
                      ? "Search restaurants..."
                      : activeTab === "delivery"
                      ? "Search delivery partners..."
                      : activeTab === "orders"
                      ? "Search orders..."
                      : activeTab === "disputes"
                      ? "Search disputes..."
                      : activeTab === "commission"
                      ? "Search transactions..."
                      : "Search..."
                  }
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                  className="pl-10 pr-4 py-2.5 bg-gray-800 border border-gray-700 rounded-lg 
                           text-gray-300 placeholder-gray-500 focus:outline-none focus:border-green-500 
                           w-full md:w-64"
                />
              </div>

              <button className="relative p-2.5 hover:bg-gray-800 rounded-lg">
                <Bell className="w-5 h-5" />
                <span className="absolute -top-1 -right-1 w-2 h-2 bg-red-500 rounded-full"></span>
              </button>

              <button className="p-2.5 hover:bg-gray-800 rounded-lg">
                <Settings className="w-5 h-5" />
              </button>
            </div>
          </div>
        </header>

        {/* Main Content */}
        <main className="p-6">{renderContent()}</main>

        {/* Footer */}
        <footer className="p-6 border-t border-gray-800 text-center text-gray-500 text-sm">
          <p>
            OLYYO Admin Panel v2.0 • {new Date().getFullYear()} • All rights
            reserved
          </p>
          {/* <p className="mt-1 text-xs">
            Real-time analytics dashboard with interactive visualizations
          </p> */}

          <p className="mt-1 text-xs">
            ❤️Proudly developed by{" "}
            <Link href="https://designglobal.in/" target="_blank">
              Design Global Technology
            </Link>
          </p>
        </footer>
      </div>

      {/* Floating Action Button */}
      <button
        className="fixed bottom-6 right-6 w-12 h-12 bg-gradient-to-r from-green-500 to-emerald-500 
                       rounded-full flex items-center justify-center shadow-xl hover:scale-110 
                       transition-transform duration-300 z-40"
      >
        <Plus className="w-6 h-6 text-white" />
      </button>
    </div>
  );
}
