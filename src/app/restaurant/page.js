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
  Star,
  Calendar,
  Filter,
  Download,
  MoreVertical,
  ChevronRight,
  Search,
  Bell,
  Settings,
  LogOut,
  Menu,
  X,
  Shield,
  Plus,
  CheckCircle,
  XCircle,
  AlertCircle,
  RefreshCw,
  Upload,
  ChefHat,
  Utensils,
  Pizza,
  Coffee,
  Hamburger,
  Check,
  Circle,
  CircleDot,
  Thermometer,
  Battery,
  Zap,
  MessageSquare,
  AlertTriangle,
  ThumbsUp,
  User,
  Mail,
  Phone,
  FileText,
  CalendarDays,
  Tag,
  Star as StarIcon,
  Heart,
  MessageCircle,
  IndianRupee,
} from "lucide-react";

// Restaurant Sidebar Component
function RestaurantSidebar({
  activeTab,
  setActiveTab,
  isMobileOpen,
  setIsMobileOpen,
}) {
  const menuItems = [
    {
      id: "dashboard",
      icon: <BarChart3 className="w-5 h-5" />,
      label: "Restaurant Dashboard",
      count: null,
    },
    {
      id: "dishes",
      icon: <Package className="w-5 h-5" />,
      label: "Uploaded Dishes",
      count: "48",
    },
    {
      id: "delivery",
      icon: <Truck className="w-5 h-5" />,
      label: "Delivery Status",
      count: "12",
    },
    {
      id: "orders",
      icon: <ShoppingBag className="w-5 h-5" />,
      label: "Current Orders",
      count: "8",
    },
    {
      id: "complaints",
      icon: <AlertTriangle className="w-5 h-5" />,
      label: "Complaints",
      count: "5",
    },
    {
      id: "feedback",
      icon: <MessageSquare className="w-5 h-5" />,
      label: "Customer Feedback",
      count: "23",
    },
  ];

  return (
    <>
      {/* Mobile Menu Button */}
      <button
        onClick={() => setIsMobileOpen(true)}
        className="lg:hidden fixed top-4 left-4 z-50 p-2 bg-gray-800 border border-gray-700 rounded-lg shadow-lg"
      >
        <Menu className="w-6 h-6 text-white" />
      </button>

      {/* Sidebar */}
      <aside
        className={`
        fixed inset-y-0 left-0 z-40 w-64 bg-gray-900 border-r border-gray-800
        transform transition-transform duration-300
        ${isMobileOpen ? "translate-x-0" : "-translate-x-full lg:translate-x-0"}
      `}
      >
        {/* Logo */}
        <div className="h-20 border-b border-gray-800 flex items-center px-6">
          <div className="flex items-center space-x-3">
            <div className="w-10 h-10 bg-gradient-to-r from-orange-500 to-red-500 rounded-lg flex items-center justify-center">
              <ChefHat className="w-6 h-6 text-white" />
            </div>
            <div>
              <h1 className="text-xl font-bold text-white">Pizza Palace</h1>
              <p className="text-xs text-gray-500">Restaurant Panel</p>
            </div>
          </div>
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
                        ? "bg-gray-800 text-white"
                        : "text-gray-400 hover:bg-gray-800 hover:text-white"
                    }
                  `}
                >
                  <div className="flex items-center space-x-3">
                    <div
                      className={`w-5 h-5 flex items-center justify-center ${
                        activeTab === item.id ? "text-white" : "text-gray-400"
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
                          ? "bg-gray-700 text-white"
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

        {/* Restaurant Info */}
        <div className="h-20 border-t border-gray-800 flex items-center px-4">
          <div className="flex items-center space-x-3 w-full">
            <div className="w-10 h-10 bg-gradient-to-r from-orange-500 to-red-500 rounded-full flex items-center justify-center">
              <ChefHat className="w-5 h-5 text-white" />
            </div>
            <div className="flex-1 min-w-0">
              <p className="text-sm font-medium text-white truncate">
                Pizza Palace
              </p>
              <p className="text-xs text-gray-500 truncate">pizza@olyyo.com</p>
            </div>
            <button className="p-2 hover:bg-gray-800 rounded-lg">
              <LogOut className="w-5 h-5 text-gray-400" />
            </button>
          </div>
        </div>

        {/* Close button for mobile */}
        <button
          onClick={() => setIsMobileOpen(false)}
          className="lg:hidden absolute top-4 right-4 p-2"
        >
          <X className="w-5 h-5" />
        </button>
      </aside>

      {/* Overlay */}
      {isMobileOpen && (
        <div
          onClick={() => setIsMobileOpen(false)}
          className="lg:hidden fixed inset-0 bg-black/50 z-30"
        />
      )}
    </>
  );
}

// Restaurant Stats Cards
function RestaurantStats() {
  const stats = [
    {
      title: "Today's Revenue",
      value: "₹4,33,42,458",
      change: "+12.5%",
      isPositive: true,
      icon: IndianRupee,
      color: "from-green-500 to-emerald-500",
      delay: "100ms",
    },
    {
      title: "Active Orders",
      value: "24",
      change: "+8.2%",
      isPositive: true,
      icon: ShoppingBag,
      color: "from-blue-500 to-cyan-500",
      delay: "200ms",
    },
    {
      title: "Delivery Partners",
      value: "12",
      change: "+2",
      isPositive: true,
      icon: Truck,
      color: "from-orange-500 to-red-500",
      delay: "300ms",
    },
    {
      title: "Available Dishes",
      value: "48",
      change: "+5",
      isPositive: true,
      icon: Package,
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
            className="bg-gray-900 border border-gray-800 rounded-xl p-6 hover:border-gray-700 transition-colors"
          >
            <div className="flex items-start justify-between mb-4">
              <div
                className={`p-3 rounded-lg bg-gradient-to-br ${stat.color} bg-opacity-10`}
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
            <h3 className="text-2xl font-bold text-white mb-1 flex-wrap">
              {stat.value}
            </h3>
            <p className="text-gray-400 text-sm">{stat.title}</p>
          </div>
        );
      })}
    </div>
  );
}

// Today's Orders Timeline - Fixed and Improved
function TodaysOrdersTimeline() {
  const timeSlots = [
    { time: "9 AM", orders: 12, peak: false },
    { time: "10 AM", orders: 18, peak: false },
    { time: "11 AM", orders: 25, peak: false },
    { time: "12 PM", orders: 35, peak: true },
    { time: "1 PM", orders: 45, peak: true },
    { time: "2 PM", orders: 30, peak: false },
    { time: "3 PM", orders: 28, peak: false },
    { time: "4 PM", orders: 22, peak: false },
    { time: "5 PM", orders: 38, peak: false },
    { time: "6 PM", orders: 42, peak: true },
    { time: "7 PM", orders: 52, peak: true },
    { time: "8 PM", orders: 40, peak: false },
    { time: "9 PM", orders: 32, peak: false },
  ];

  const maxOrders = Math.max(...timeSlots.map((slot) => slot.orders));

  return (
    <div className="bg-gray-900 border border-gray-800 rounded-2xl p-6">
      <div className="flex flex-col sm:flex-row sm:items-center justify-between mb-6 gap-4">
        <div>
          <h3 className="text-lg font-bold text-white">
            Today's Orders Timeline
          </h3>
          <p className="text-gray-400 text-sm">
            Real-time order distribution throughout the day
          </p>
        </div>
        <div className="flex items-center space-x-4">
          <div className="flex items-center text-sm text-gray-400">
            <div className="w-3 h-3 rounded-full bg-blue-500 mr-2"></div>
            Regular Hours
          </div>
          <div className="flex items-center text-sm text-gray-400">
            <div className="w-3 h-3 rounded-full bg-orange-500 mr-2"></div>
            Peak Hours
          </div>
        </div>
      </div>

      {/* Timeline Visualization */}
      <div className="relative h-100 overflow-x-auto">
        {/* Horizontal timeline line */}
        <div className="absolute left-0 right-0 top-1/2 h-0.5 bg-gray-800"></div>

        {/* Grid lines for reference */}
        <div className="absolute inset-0 flex justify-between">
          {[0, 25, 50, 75, 100].map((percent, i) => (
            <div key={i} className="h-full w-px bg-gray-800"></div>
          ))}
        </div>

        {/* Time slots with bars */}
        {/* px-4 */}
        <div className="relative flex justify-between items-center h-full ">
          {timeSlots.map((slot, index) => {
            const height = (slot.orders / maxOrders) * 120;
            return (
              <div key={index} className="flex flex-col items-center flex-1">
                {/* Order bar */}
                <div className="relative w-full flex justify-center">
                  <div
                    className={`w-6 rounded-t-lg transition-all duration-300 hover:opacity-80 ${
                      slot.peak
                        ? "bg-gradient-to-t from-orange-500 to-red-500"
                        : "bg-gradient-to-t from-blue-500 to-cyan-500"
                    }`}
                    style={{ height: `${height}px` }}
                    title={`${slot.orders} orders at ${slot.time}`}
                  >
                    {/* Order count overlay */}
                    <div className="absolute -top-6 left-1/2 transform -translate-x-1/2 text-xs font-bold text-white bg-gray-900 px-1 rounded">
                      {slot.orders}
                    </div>
                  </div>
                </div>

                {/* Time label */}
                <div className="mt-2 text-xs text-gray-500 text-center min-h-[2rem] flex items-center justify-center">
                  {slot.time}
                </div>

                {/* Dot on timeline */}
                <div
                  className={`absolute top-1/2 w-2 h-2 rounded-full -translate-y-1/2 ${
                    slot.peak ? "bg-orange-500" : "bg-blue-500"
                  }`}
                ></div>
              </div>
            );
          })}
        </div>

        {/* Peak hour indicators */}
        <div className="absolute -bottom-8 left-1/4 transform -translate-x-1/2">
          <div className="text-xs text-orange-400 font-medium bg-orange-500/10 px-3 py-1.5 rounded-full whitespace-nowrap">
            🍽️ Lunch Peak
          </div>
        </div>
        <div className="absolute -bottom-8 left-3/4 transform -translate-x-1/2">
          <div className="text-xs text-orange-400 font-medium bg-orange-500/10 px-3 py-1.5 rounded-full whitespace-nowrap">
            🍕 Dinner Peak
          </div>
        </div>
      </div>

      {/* Stats summary */}
      <div className="mt-12 pt-6 border-t border-gray-800">
        <div className="grid grid-cols-2 sm:grid-cols-4 gap-4">
          <div className="text-center p-3 bg-gray-800/30 rounded-lg">
            <div className="text-lg font-bold text-white">156</div>
            <div className="text-xs text-gray-500">Total Orders</div>
          </div>
          <div className="text-center p-3 bg-gray-800/30 rounded-lg">
            <div className="text-lg font-bold text-orange-400">97</div>
            <div className="text-xs text-gray-500">Peak Orders</div>
          </div>
          <div className="text-center p-3 bg-gray-800/30 rounded-lg">
            <div className="text-lg font-bold text-blue-400">12:00 PM</div>
            <div className="text-xs text-gray-500">Lunch Peak Time</div>
          </div>
          <div className="text-center p-3 bg-gray-800/30 rounded-lg">
            <div className="text-lg font-bold text-blue-400">7:00 PM</div>
            <div className="text-xs text-gray-500">Dinner Peak Time</div>
          </div>
        </div>
      </div>
    </div>
  );
}

// Recent Orders Component - Removed Amount
function RecentOrders() {
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
  className="
    flex items-start gap-4
    md:items-center
    p-4 rounded-lg
    bg-gray-800/30 hover:bg-gray-800/50
    transition-colors
  "
>
  {/* LEFT SECTION */}
  <div className="flex gap-3 flex-1 min-w-0">
    {/* Icon */}
    <div
      className={`w-10 h-10 shrink-0 rounded-lg flex items-center justify-center ${
        order.status === 'preparing'
          ? 'bg-yellow-500/20'
          : order.status === 'ready'
          ? 'bg-green-500/20'
          : 'bg-blue-500/20'
      }`}
    >
      <ShoppingBag
        className={`w-5 h-5 ${
          order.status === 'preparing'
            ? 'text-yellow-400'
            : order.status === 'ready'
            ? 'text-green-400'
            : 'text-blue-400'
        }`}
      />
    </div>

    {/* Text */}
    <div className="min-w-0">
      <div className="flex flex-wrap items-center gap-2">
        <h4 className="text-sm font-medium text-white shrink-0">
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
  <div className="flex flex-col md:flex-row md:items-center gap-2 shrink-0 ml-auto">
    {/* Time */}
    <div className="text-xs text-gray-500 flex items-center justify-end">
      <Clock className="w-3 h-3 mr-1" />
      {order.time}
    </div>

    {/* Status */}
    <span
      className={`px-3 py-1.5 text-xs rounded-full whitespace-nowrap ${statusColors[order.status]}`}
    >
      {order.status.charAt(0).toUpperCase() + order.status.slice(1)}
    </span>

    {/* Actions */}
    {order.status === 'preparing' && (
      <button
        onClick={() => handleMarkReady(order.id)}
        className="
          w-full md:w-auto
          px-4 py-2 text-xs
          bg-gradient-to-r from-green-500 to-emerald-500
          text-white rounded-lg
          hover:opacity-90
          flex items-center justify-center
          whitespace-nowrap
        "
      >
        <Check className="w-3 h-3 mr-1" />
        Mark Ready
      </button>
    )}

    {order.status === 'ready' && (
      <button
        onClick={() => handleMarkDelivered(order.id)}
        className="
          w-full md:w-auto
          px-4 py-2 text-xs
          bg-gradient-to-r from-blue-500 to-cyan-500
          text-white rounded-lg
          hover:opacity-90
          flex items-center justify-center
          whitespace-nowrap
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

// Dish List Component - Updated (removed amount)
function CurrentlyAvailableDishes() {
  const dishes = [
    {
      id: 1,
      name: "Margherita Pizza",
      category: "Pizza",
      available: true,
      prepTime: "15 min",
      icon: <Pizza className="w-5 h-5" />,
    },
    {
      id: 2,
      name: "Classic Burger",
      category: "Burger",
      available: true,
      prepTime: "10 min",
      icon: <Hamburger className="w-5 h-5" />,
    },
    {
      id: 3,
      name: "Pasta Carbonara",
      category: "Pasta",
      available: false,
      prepTime: "20 min",
      icon: <Utensils className="w-5 h-5" />,
    },
    {
      id: 4,
      name: "Cappuccino",
      category: "Drinks",
      available: true,
      prepTime: "5 min",
      icon: <Coffee className="w-5 h-5" />,
    },
    {
      id: 5,
      name: "Pepperoni Pizza",
      category: "Pizza",
      available: true,
      prepTime: "18 min",
      icon: <Pizza className="w-5 h-5" />,
    },
    {
      id: 6,
      name: "Caesar Salad",
      category: "Salads",
      available: true,
      prepTime: "8 min",
      icon: <Utensils className="w-5 h-5" />,
    },
  ];

  return (
    <div className="bg-gray-900 border border-gray-800 rounded-2xl p-6">
      <div className="flex items-center justify-between mb-6">
        <div>
          <h3 className="text-lg font-bold text-white">
            Currently Available Dishes
          </h3>
          <p className="text-gray-400 text-sm">Menu items ready for ordering</p>
        </div>
        {/* <div className="flex items-center space-x-2">
          <button className="text-sm text-blue-400 hover:text-blue-300 flex items-center">
            View All <ChevronRight className="w-4 h-4 ml-1" />
          </button>
          <button className="p-2 hover:bg-gray-800 rounded-lg">
            <Filter className="w-4 h-4 text-gray-400" />
          </button>
        </div> */}
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
        {dishes.map((dish) => (
          <div
            key={dish.id}
            className="p-4 rounded-lg bg-gray-800/30 hover:bg-gray-800/50 transition-colors border border-gray-800"
          >
            <div className="flex items-start justify-between mb-3">
              <div
                className={`p-2.5 rounded-lg ${
                  dish.available
                    ? "bg-gradient-to-br from-green-500/20 to-emerald-500/20"
                    : "bg-gradient-to-br from-red-500/20 to-pink-500/20"
                }`}
              >
                {dish.icon}
              </div>
              <div className="flex items-center">
                {dish.available ? (
                  <CheckCircle className="w-5 h-5 text-green-400" />
                ) : (
                  <XCircle className="w-5 h-5 text-red-400" />
                )}
              </div>
            </div>

            <h4 className="text-sm font-medium text-white mb-1">{dish.name}</h4>
            <div className="flex items-center justify-between mt-4">
              <div>
                <span className="text-xs text-gray-400">{dish.category}</span>
                <div className="flex items-center text-xs text-gray-500 mt-1">
                  <Clock className="w-3 h-3 mr-1" />
                  {dish.prepTime}
                </div>
              </div>

              <div
                className={`px-2.5 py-1 text-xs rounded-full ${
                  dish.available
                    ? "bg-green-500/10 text-green-400"
                    : "bg-red-500/10 text-red-400"
                }`}
              >
                {dish.available ? "Available" : "Unavailable"}
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

// Simplified Delivery Status Component
function DeliveryStatus() {
  const deliveries = [
    {
      id: 1,
      driver: "John Delivery",
      order: "#7841",
      status: "on_way",
      eta: "5 min",
      location: "1.2 km away",
    },
    {
      id: 2,
      driver: "Mike Rider",
      order: "#7840",
      status: "picking_up",
      eta: "12 min",
      location: "3.5 km away",
    },
    {
      id: 3,
      driver: "Sarah Express",
      order: "#7839",
      status: "delivered",
      eta: "Arrived",
      location: "At destination",
    },
    {
      id: 4,
      driver: "Alex Swift",
      order: "#7838",
      status: "on_way",
      eta: "8 min",
      location: "2.1 km away",
    },
  ];

  const statusConfig = {
    on_way: {
      color: "bg-blue-500/10 text-blue-400",
      icon: <Truck className="w-4 h-4" />,
      label: "On the way",
    },
    picking_up: {
      color: "bg-yellow-500/10 text-yellow-400",
      icon: <Package className="w-4 h-4" />,
      label: "Picking up",
    },
    delivered: {
      color: "bg-green-500/10 text-green-400",
      icon: <Check className="w-4 h-4" />,
      label: "Delivered",
    },
  };

  return (
    <div className="bg-gray-900 border border-gray-800 rounded-2xl p-6">
      <div className="flex items-center justify-between mb-6">
        <div>
          <h3 className="text-lg font-bold text-white">Delivery Status</h3>
          <p className="text-gray-400 text-sm">Live delivery tracking</p>
        </div>
        {/* <div className="flex items-center space-x-2">
          <button className="p-2 hover:bg-gray-800 rounded-lg">
            <RefreshCw className="w-4 h-4 text-gray-400" />
          </button>
          <button className="text-sm text-blue-400 hover:text-blue-300 flex items-center">
            View All <ChevronRight className="w-4 h-4 ml-1" />
          </button>
        </div> */}
      </div>

      <div className="space-y-4">
        {deliveries.map((delivery) => (
          <div
            key={delivery.id}
            className="p-4 rounded-lg bg-gray-800/30 hover:bg-gray-800/50 transition-colors"
          >
            <div className="flex items-center justify-between">
              {/* Left side: Driver and order info */}
              <div className="flex items-center space-x-3">
                <div
                  className={`w-10 h-10 rounded-full flex items-center justify-center ${
                    delivery.status === "on_way"
                      ? "bg-blue-500/20"
                      : delivery.status === "picking_up"
                      ? "bg-yellow-500/20"
                      : "bg-green-500/20"
                  }`}
                >
                  {statusConfig[delivery.status].icon}
                </div>
                <div>
                  <div className="flex items-center space-x-2">
                    <h4 className="text-sm font-medium text-white">
                      {delivery.driver}
                    </h4>
                    <span className="text-xs text-gray-400">•</span>
                    <span className="text-xs text-gray-300">
                      Order {delivery.order}
                    </span>
                  </div>
                  <p className="text-xs text-gray-400 mt-1 flex items-center">
                    <Truck className="w-3 h-3 mr-1" />
                    {delivery.location}
                  </p>
                </div>
              </div>

              {/* Right side: Status and ETA */}
              <div className="flex flex-col items-end space-y-2">
                <span
                  className={`px-3 py-1.5 text-xs rounded-full flex items-center ${
                    statusConfig[delivery.status].color
                  }`}
                >
                  {statusConfig[delivery.status].icon}
                  <span className="ml-1.5">
                    {statusConfig[delivery.status].label}
                  </span>
                </span>

                <div className="text-right">
                  <div className="text-xs text-gray-400">ETA</div>
                  <div
                    className={`text-sm font-bold ${
                      delivery.status === "delivered"
                        ? "text-green-400"
                        : "text-white"
                    }`}
                  >
                    {delivery.eta}
                  </div>
                </div>
              </div>
            </div>

            {/* Simple status indicator */}
            <div className="mt-4 flex items-center justify-between text-xs text-gray-500">
              <div className="flex items-center">
                <div
                  className={`w-2 h-2 rounded-full mr-2 ${
                    delivery.status === "on_way"
                      ? "bg-blue-500"
                      : delivery.status === "picking_up"
                      ? "bg-yellow-500"
                      : "bg-green-500"
                  }`}
                ></div>
                {delivery.status === "on_way"
                  ? "In transit"
                  : delivery.status === "picking_up"
                  ? "Collecting order"
                  : "Delivery completed"}
              </div>
              <div className="flex items-center">
                <Clock className="w-3 h-3 mr-1" />
                Updated just now
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

// Complaints Component
function Complaints() {
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
    <div className="bg-gray-900 border border-gray-800 rounded-2xl p-6">
      <div className="flex flex-col sm:flex-row sm:items-center justify-between mb-6 gap-4">
        <div>
          <h3 className="text-lg font-bold text-white">Customer Complaints</h3>
          <p className="text-gray-400 text-sm">
            Manage and resolve customer issues
          </p>
        </div>
        {/* <div className="flex items-center space-x-2">
          <button className="p-2 hover:bg-gray-800 rounded-lg">
            <Filter className="w-4 h-4 text-gray-400" />
          </button>
          <button className="p-2 hover:bg-gray-800 rounded-lg">
            <Download className="w-4 h-4 text-gray-400" />
          </button>
          <div className="text-sm text-gray-400">
            Total: <span className="font-bold text-white">{complaints.length}</span>
          </div>
        </div> */}
      </div>

      <div className="overflow-x-auto">
        <table className="w-full">
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
                  <div className="text-sm text-gray-300 max-w-xs">
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

// Customer Feedback Component
function CustomerFeedback() {
  const [feedbacks, setFeedbacks] = useState([
    {
      id: 1,
      customer: "John Smith",
      order: "#7842",
      rating: 5,
      comment: "Excellent food quality and timely delivery! Will order again.",
      date: "Today, 11:30 AM",
      sentiment: "positive",
      tags: ["Food Quality", "Delivery"],
    },
    {
      id: 2,
      customer: "Emma Wilson",
      order: "#7841",
      rating: 4,
      comment: "Good taste but packaging could be better.",
      date: "Yesterday, 8:15 PM",
      sentiment: "positive",
      tags: ["Taste", "Packaging"],
    },
    {
      id: 3,
      customer: "Michael Brown",
      order: "#7840",
      rating: 2,
      comment: "Order was delayed by 30 minutes and pizza was cold.",
      date: "Nov 28, 4:45 PM",
      sentiment: "negative",
      tags: ["Delivery", "Temperature"],
    },
    {
      id: 4,
      customer: "Sarah Johnson",
      order: "#7839",
      rating: 5,
      comment: "Best pasta in town! Perfectly cooked and great portion size.",
      date: "Nov 28, 2:20 PM",
      sentiment: "positive",
      tags: ["Food Quality", "Portion"],
    },
    {
      id: 5,
      customer: "David Lee",
      order: "#7838",
      rating: 3,
      comment: "Average experience. Nothing special but not bad either.",
      date: "Nov 27, 9:45 PM",
      sentiment: "neutral",
      tags: ["Average"],
    },
  ]);

  const [filter, setFilter] = useState("all");

  const filteredFeedbacks =
    filter === "all"
      ? feedbacks
      : feedbacks.filter((f) => f.sentiment === filter);

  const averageRating = (
    feedbacks.reduce((sum, f) => sum + f.rating, 0) / feedbacks.length
  ).toFixed(1);

  const sentimentColors = {
    positive: "bg-green-500/10 text-green-400",
    negative: "bg-red-500/10 text-red-400",
    neutral: "bg-yellow-500/10 text-yellow-400",
  };

  return (
    <div className="bg-gray-900 border border-gray-800 rounded-2xl p-6">
      <div className="flex flex-col sm:flex-row sm:items-center justify-between mb-6 gap-4">
        <div>
          <h3 className="text-lg font-bold text-white">Customer Feedback</h3>
          <p className="text-gray-400 text-sm">
            Reviews and ratings from customers
          </p>
        </div>

        <div className="flex items-center space-x-4">
          {/* Rating Summary */}
          <div className="flex items-center space-x-2">
            <div className="text-center">
              <div className="text-2xl font-bold text-white">
                {averageRating}
              </div>
              <div className="text-xs text-gray-400">Avg Rating</div>
            </div>
            <div className="flex">
              {[1, 2, 3, 4, 5].map((star) => (
                <StarIcon
                  key={star}
                  className={`w-4 h-4 ${
                    star <= averageRating
                      ? "text-yellow-400 fill-yellow-400"
                      : "text-gray-600"
                  }`}
                />
              ))}
            </div>
          </div>

          {/* Filter Buttons */}
          <div className="flex space-x-1">
            {["all", "positive", "negative", "neutral"].map((type) => (
              <button
                key={type}
                onClick={() => setFilter(type)}
                className={`px-3 py-1 text-xs rounded-full ${
                  filter === type
                    ? type === "positive"
                      ? "bg-green-500/20 text-green-400"
                      : type === "negative"
                      ? "bg-red-500/20 text-red-400"
                      : type === "neutral"
                      ? "bg-yellow-500/20 text-yellow-400"
                      : "bg-gray-700 text-white"
                    : "bg-gray-800 text-gray-400 hover:bg-gray-700"
                }`}
              >
                {type.charAt(0).toUpperCase() + type.slice(1)}
              </button>
            ))}
          </div>
        </div>
      </div>

      {/* Feedback Stats */}
      <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-6">
        <div className="bg-gray-800/30 p-4 rounded-lg">
          <div className="text-lg font-bold text-green-400">
            {feedbacks.filter((f) => f.sentiment === "positive").length}
          </div>
          <div className="text-xs text-gray-400">Positive Reviews</div>
        </div>
        <div className="bg-gray-800/30 p-4 rounded-lg">
          <div className="text-lg font-bold text-red-400">
            {feedbacks.filter((f) => f.sentiment === "negative").length}
          </div>
          <div className="text-xs text-gray-400">Negative Reviews</div>
        </div>
        <div className="bg-gray-800/30 p-4 rounded-lg">
          <div className="text-lg font-bold text-yellow-400">
            {feedbacks.filter((f) => f.sentiment === "neutral").length}
          </div>
          <div className="text-xs text-gray-400">Neutral Reviews</div>
        </div>
        <div className="bg-gray-800/30 p-4 rounded-lg">
          <div className="text-lg font-bold text-white">{feedbacks.length}</div>
          <div className="text-xs text-gray-400">Total Feedback</div>
        </div>
      </div>

      {/* Feedback List */}
      <div className="space-y-4">
        {filteredFeedbacks.map((feedback) => (
          <div
            key={feedback.id}
            className="p-4 rounded-lg bg-gray-800/30 hover:bg-gray-800/50 transition-colors"
          >
            <div className="flex flex-col sm:flex-row sm:items-start justify-between gap-4">
              {/* Left Column */}
              <div className="flex-1">
                <div className="flex items-start justify-between mb-2">
                  <div>
                    <div className="flex items-center space-x-2">
                      <div className="w-8 h-8 bg-gradient-to-br from-blue-500 to-cyan-500 rounded-full flex items-center justify-center">
                        <User className="w-4 h-4 text-white" />
                      </div>
                      <div>
                        <h4 className="text-sm font-medium text-white">
                          {feedback.customer}
                        </h4>
                        <div className="text-xs text-gray-400">
                          Order {feedback.order}
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="flex items-center space-x-2">
                    <div className="flex">
                      {[1, 2, 3, 4, 5].map((star) => (
                        <StarIcon
                          key={star}
                          className={`w-4 h-4 ${
                            star <= feedback.rating
                              ? "text-yellow-400 fill-yellow-400"
                              : "text-gray-600"
                          }`}
                        />
                      ))}
                    </div>
                    <span
                      className={`px-2 py-1 text-xs rounded-full ${
                        sentimentColors[feedback.sentiment]
                      }`}
                    >
                      {feedback.sentiment.charAt(0).toUpperCase() +
                        feedback.sentiment.slice(1)}
                    </span>
                  </div>
                </div>

                <p className="text-sm text-gray-300 mt-2">{feedback.comment}</p>

                {/* Tags */}
                <div className="flex flex-wrap gap-2 mt-3">
                  {feedback.tags.map((tag, index) => (
                    <span
                      key={index}
                      className="px-2 py-1 text-xs bg-gray-800 text-gray-400 rounded-full"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
              </div>

              {/* Right Column */}
              <div className="flex flex-col items-end space-y-2 min-w-[120px]">
                <div className="text-xs text-gray-500 flex items-center">
                  <CalendarDays className="w-3 h-3 mr-1" />
                  {feedback.date}
                </div>
                <div className="flex space-x-2">
                  <button className="p-1.5 hover:bg-gray-700 rounded">
                    <ThumbsUp className="w-4 h-4 text-green-400" />
                  </button>
                  <button className="p-1.5 hover:bg-gray-700 rounded">
                    <MessageCircle className="w-4 h-4 text-blue-400" />
                  </button>
                  <button className="p-1.5 hover:bg-gray-700 rounded">
                    <FileText className="w-4 h-4 text-gray-400" />
                  </button>
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>

      {/* Empty State */}
      {filteredFeedbacks.length === 0 && (
        <div className="text-center py-8">
          <MessageSquare className="w-12 h-12 text-gray-600 mx-auto mb-4" />
          <p className="text-gray-400">
            No {filter === "all" ? "" : filter} feedback found
          </p>
        </div>
      )}
    </div>
  );
}

// Main Restaurant Dashboard Component
export default function RestaurantDashboard() {
  const [activeTab, setActiveTab] = useState("dashboard");
  const [isMobileOpen, setIsMobileOpen] = useState(false);
  const [searchQuery, setSearchQuery] = useState("");

  const renderContent = () => {
    switch (activeTab) {
      case "dashboard":
        return (
          <>
            <RestaurantStats />

            <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 mb-8">
              <TodaysOrdersTimeline />
              <RecentOrders />
            </div>

            {/* Full width for Currently Available Dishes */}
            <div className="mb-8">
              <CurrentlyAvailableDishes />
            </div>
          </>
        );

      case "dishes":
        return (
          <>
            <div className="mb-6">
              <div className="flex items-center justify-between mb-4">
                <h2 className="text-xl font-bold text-white">
                  Uploaded Dishes
                </h2>
                <button className="flex items-center bg-gradient-to-r from-orange-500 to-red-500 text-white px-4 py-2 rounded-lg hover:opacity-90">
                  <Upload className="w-4 h-4 mr-2" />
                  Upload New Dish
                </button>
              </div>
              <p className="text-gray-400">Manage your menu items and dishes</p>
            </div>

            <CurrentlyAvailableDishes />
          </>
        );

      case "delivery":
        return (
          <>
            <div className="mb-6">
              <div className="flex items-center justify-between mb-4">
                <h2 className="text-xl font-bold text-white">
                  Delivery Status
                </h2>
                <p className="text-gray-400">
                  Real-time delivery tracking and management
                </p>
              </div>
            </div>

            <DeliveryStatus />
          </>
        );

      case "orders":
        return (
          <>
            <div className="mb-6">
              <div className="flex items-center justify-between mb-4">
                <h2 className="text-xl font-bold text-white">Current Orders</h2>
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
                Manage and track your current orders
              </p>
            </div>

            <RecentOrders />
          </>
        );

      case "complaints":
        return (
          <>
            <div className="mb-6">
              <div className="flex items-center justify-between mb-4">
                <h2 className="text-xl font-bold text-white">
                  Customer Complaints
                </h2>
                <div className="flex items-center space-x-2">
                  <button className="flex items-center bg-gradient-to-r from-orange-500 to-red-500 text-white px-4 py-2 rounded-lg hover:opacity-90">
                    <AlertTriangle className="w-4 h-4 mr-2" />
                    Report Issue
                  </button>
                </div>
              </div>
              <p className="text-gray-400">
                Manage and resolve customer complaints
              </p>
            </div>

            <Complaints />
          </>
        );

      case "feedback":
        return (
          <>
            <div className="mb-6">
              <div className="flex items-center justify-between mb-4">
                <h2 className="text-xl font-bold text-white">
                  Customer Feedback
                </h2>
                {/* <div className="flex items-center space-x-2">
                  <button className="p-2 hover:bg-gray-800 rounded-lg">
                    <Download className="w-4 h-4 text-gray-400" />
                  </button>
                  <button className="text-sm text-blue-400 hover:text-blue-300 flex items-center">
                    View Analytics <ChevronRight className="w-4 h-4 ml-1" />
                  </button>
                </div> */}
              </div>
              <p className="text-gray-400">
                Reviews and ratings from your customers
              </p>
            </div>

            <CustomerFeedback />
          </>
        );

      default:
        return <RestaurantStats />;
    }
  };

  return (
    <div className="flex min-h-screen bg-gray-950 text-gray-300">
      <RestaurantSidebar
        activeTab={activeTab}
        setActiveTab={setActiveTab}
        isMobileOpen={isMobileOpen}
        setIsMobileOpen={setIsMobileOpen}
      />

      <div className="flex-1 lg:ml-64">
        {/* Header */}
        <header className="sticky top-0 z-30 bg-gray-900 border-b border-gray-800 p-5">
          <div className="flex flex-col md:flex-row md:items-center justify-between gap-4">
            <div>
              <h2 className="text-2xl font-bold text-white capitalize">
                {activeTab === "dashboard"
                  ? "Restaurant Dashboard"
                  : activeTab === "delivery"
                  ? "Delivery Status"
                  : activeTab === "complaints"
                  ? "Customer Complaints"
                  : activeTab === "feedback"
                  ? "Customer Feedback"
                  : activeTab}
              </h2>
              <p className="text-gray-400">
                {activeTab === "dashboard"
                  ? "Welcome to your restaurant management panel"
                  : activeTab === "dishes"
                  ? "Manage your menu items and dishes"
                  : activeTab === "delivery"
                  ? "Real-time delivery tracking and management"
                  : activeTab === "complaints"
                  ? "Manage and resolve customer complaints"
                  : activeTab === "feedback"
                  ? "Reviews and ratings from your customers"
                  : "Track and manage current orders"}
              </p>
            </div>

            {/* Search & Actions */}
            <div className="flex items-center space-x-4">
              <div className="relative">
                <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 w-5 h-5 text-gray-500" />
                <input
                  type="text"
                  placeholder={
                    activeTab === "complaints"
                      ? "Search complaints..."
                      : activeTab === "feedback"
                      ? "Search feedback..."
                      : "Search orders, dishes..."
                  }
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                  className="pl-10 pr-4 py-2.5 bg-gray-800 border border-gray-700 rounded-lg 
                           text-gray-300 placeholder-gray-500 focus:outline-none focus:border-orange-500 
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
        <main className="p-5">{renderContent()}</main>

        {/* Footer */}
        <footer className="p-6 border-t border-gray-800 text-center">
          <p className="text-sm text-gray-500">
            © {new Date().getFullYear()} Pizza Palace Restaurant Panel. Powered
            by OLYYO.
          </p>
          <div className="flex items-center justify-center space-x-4 mt-2 text-xs text-gray-600">
            <span>Overall Rating: 4.3/5</span>
            <span>•</span>
            <span>Response Time: 15min</span>
            <span>•</span>
            <span>Customer Satisfaction: 92%</span>
          </div>
        </footer>
      </div>

      {/* Floating Action Button */}
      <button
        className="fixed bottom-6 right-6 w-12 h-12 bg-gradient-to-r from-orange-500 to-red-500 
                       rounded-full flex items-center justify-center shadow-xl hover:scale-110 
                       transition-transform duration-300 z-40"
      >
        <Plus className="w-6 h-6 text-white" />
      </button>
    </div>
  );
}
