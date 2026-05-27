"use client";

import { useState, useEffect } from "react";
import { useRouter } from "next/navigation";
import Navbar from "@/components/home/Navbar";

const API_URL = process.env.NEXT_PUBLIC_API_URL || "https://olyyo-backend.onrender.com";
import {
  Search,
  Star,
  Clock,
  Flame,
  Truck,
  MapPin,
  Filter,
  ChevronRight,
  Heart,
  ShoppingBag,
  User,
  Menu,
  X,
  Home,
  UtensilsCrossed,
  Pizza,
  Coffee,
  IceCream,
  Salad,
  Soup,
  ChefHat,
  Trophy,
  Phone,
  Mail,
  MessageCircle,
  Globe,
  CreditCard,
  Smartphone,
  Package,
  TrendingUp,
  CheckCircle,
  ChevronDown,
  ShoppingCart,
  Minus,
  Plus,
  Trash2,
  ArrowRight,
  Shield,
  Info,
  Sparkles,
  Crown,
  Zap,
  ThumbsUp,
  Navigation,
  Beef,
  Cookie,
  Croissant,
  Drumstick,
  Egg,
  Fish,
  Hamburger,
  Sandwich,
  CakeSlice,
} from "lucide-react";

// Mock data for restaurants
const restaurants = [
  {
    id: 1,
    name: "Spicy Dragon",
    cuisine: ["Chinese", "Asian"],
    rating: 4.5,
    deliveryTime: "25-30 min",
    priceRange: "₹₹₹",
    image: "https://images.unsplash.com/photo-1563245372-f21724e3856d?w=400&h=300&fit=crop",
    isVeg: false,
    tags: ["Trending", "Must Try"],
    discount: "40% OFF",
    distance: "1.2 km",
    promoted: true,
  },
  {
    id: 2,
    name: "Green Leaf",
    cuisine: ["South Indian", "Vegetarian"],
    rating: 4.7,
    deliveryTime: "20-25 min",
    priceRange: "₹₹",
    image: "https://images.unsplash.com/photo-1565299624946-b28f40a0ae38?w=400&h=300&fit=crop",
    isVeg: true,
    tags: ["Pure Veg"],
    discount: "30% OFF",
    distance: "0.8 km",
    promoted: false,
  },
  {
    id: 3,
    name: "Burger Hub",
    cuisine: ["American", "Fast Food"],
    rating: 4.2,
    deliveryTime: "15-20 min",
    priceRange: "₹₹",
    image: "https://images.unsplash.com/photo-1568901346375-23c9450c58cd?w=400&h=300&fit=crop",
    isVeg: false,
    tags: ["Best Seller"],
    discount: "Buy 1 Get 1",
    distance: "1.5 km",
    promoted: true,
  },
  {
    id: 4,
    name: "Pasta Paradise",
    cuisine: ["Italian", "Continental"],
    rating: 4.6,
    deliveryTime: "30-35 min",
    priceRange: "₹₹₹₹",
    image: "https://images.unsplash.com/photo-1563379926898-05f4575a45d8?w=400&h=300&fit=crop",
    isVeg: true,
    tags: ["Italian"],
    discount: "20% OFF",
    distance: "2.1 km",
    promoted: false,
  },
  {
    id: 5,
    name: "Masala Darbar",
    cuisine: ["North Indian", "Mughlai"],
    rating: 4.4,
    deliveryTime: "35-40 min",
    priceRange: "₹₹₹",
    image: "https://images.unsplash.com/photo-1565557623262-b51c2513a641?w=400&h=300&fit=crop",
    isVeg: false,
    tags: ["Spicy"],
    discount: "50% OFF",
    distance: "1.8 km",
    promoted: true,
  },
  {
    id: 6,
    name: "Sushi Masters",
    cuisine: ["Japanese", "Asian"],
    rating: 4.8,
    deliveryTime: "40-45 min",
    priceRange: "₹₹₹₹₹",
    image: "https://images.unsplash.com/photo-1579584425555-c3ce17fd4351?w=400&h=300&fit=crop",
    isVeg: false,
    tags: ["Premium"],
    discount: "25% OFF",
    distance: "3.2 km",
    promoted: false,
  },
  {
    id: 7,
    name: "The Dosa Factory",
    cuisine: ["South Indian", "Breakfast"],
    rating: 4.3,
    deliveryTime: "20-25 min",
    priceRange: "₹₹",
    image: "https://images.unsplash.com/photo-1631452180519-c014fe946bc7?w=400&h=300&fit=crop",
    isVeg: true,
    tags: ["Authentic"],
    discount: "Free Delivery",
    distance: "1.1 km",
    promoted: true,
  },
  {
    id: 8,
    name: "BBQ Nation",
    cuisine: ["Barbecue", "North Indian"],
    rating: 4.5,
    deliveryTime: "45-50 min",
    priceRange: "₹₹₹₹",
    image: "https://images.unsplash.com/photo-1546833999-b9f581a1996d?w=400&h=300&fit=crop",
    isVeg: false,
    tags: ["Non-Veg"],
    discount: "30% OFF",
    distance: "2.5 km",
    promoted: false,
  },
];

// Food categories - Updated with correct icons
const foodCategories = [
  { id: 1, name: "All", icon: <UtensilsCrossed className="w-6 h-6" />, active: true },
  { id: 2, name: "North Indian", icon: <Flame className="w-6 h-6" /> },
  { id: 3, name: "South Indian", icon: <Salad className="w-6 h-6" /> },
  { id: 4, name: "Chinese", icon: <Soup className="w-6 h-6" /> },
  { id: 5, name: "Italian", icon: <Pizza className="w-6 h-6" /> },
  { id: 6, name: "Fast Food", icon: <Hamburger className="w-6 h-6" /> }, // Changed from Burger to Hamburger
  { id: 7, name: "Desserts", icon: <CakeSlice className="w-6 h-6" /> }, // Changed from IceCream
  { id: 8, name: "Beverages", icon: <Coffee className="w-6 h-6" /> },
  { id: 9, name: "Vegetarian", icon: <Salad className="w-6 h-6" /> },
  { id: 10, name: "Non-Veg", icon: <Drumstick className="w-6 h-6" /> }, // Changed from ChefHat
];

// Mock user cart
const initialCart = [
  {
    id: 1,
    name: "Chicken Biryani",
    price: 299,
    quantity: 2,
    restaurant: "Spicy Dragon",
    image: "https://images.unsplash.com/photo-1563379091339-03246963d9d6?w=100&h=100&fit=crop",
  },
  {
    id: 2,
    name: "Garlic Naan",
    price: 89,
    quantity: 4,
    restaurant: "Masala Darbar",
    image: "https://images.unsplash.com/photo-1601050690597-df0568f70950?w=100&h=100&fit=crop",
  },
];

export default function CustomerPage() {
  const router = useRouter();
  const [restaurantList, setRestaurantList] = useState(restaurants);
  const [selectedCategory, setSelectedCategory] = useState("All");
  const [searchQuery, setSearchQuery] = useState("");
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [showCart, setShowCart] = useState(false);
  const [cartItems, setCartItems] = useState(initialCart);
  const [userLocation, setUserLocation] = useState("Connaught Place, Delhi");
  const [sortBy, setSortBy] = useState("relevance");
  const [showFilters, setShowFilters] = useState(false);
  const [filters, setFilters] = useState({
    vegOnly: false,
    rating: 0,
    deliveryTime: "",
    priceRange: "",
  });

  const [activeOrder, setActiveOrder] = useState(null);
  const [showCheckoutModal, setShowCheckoutModal] = useState(false);
  const [checkoutForm, setCheckoutForm] = useState({
    address: "Home (123, Connaught Place, Delhi)",
    paymentMethod: "upi",
    upiId: "user@okaxis",
  });
  const [orderPlacedAnimation, setOrderPlacedAnimation] = useState(false);

  // Fetch restaurants from NestJS API on mount
  useEffect(() => {
    const fetchRestaurants = async () => {
      try {
        // We use mock Mumbai coordinates here for testing the 5km radius feature
        const lat = 19.0760;
        const lng = 72.8777;
        const res = await fetch(`${API_URL}/restaurants?lat=${lat}&lng=${lng}`);
        if (res.ok) {
          const data = await res.json();
          if (data && data.length > 0) {
            // Map table values (like cuisines -> cuisine, image_url -> image) to match mock data keys
            const mappedData = data.map(item => ({
              id: item.id,
              name: item.name,
              cuisine: item.cuisines || [],
              rating: Number(item.rating) || 4.0,
              deliveryTime: item.delivery_time || "30 min",
              priceRange: item.price_range || "₹₹",
              image: item.image_url || "https://images.unsplash.com/photo-1563245372-f21724e3856d?w=400&h=300&fit=crop",
              isVeg: item.is_veg || false,
              tags: item.tags || [],
              discount: item.discount || "10% OFF",
              distance: item.distance || "1.0 km",
              promoted: item.promoted || false,
            }));
            setRestaurantList(mappedData);
          }
        }
      } catch (err) {
        console.log("Could not load restaurants from API, using mock fallback:", err);
      }
    };
    fetchRestaurants();
  }, []);

  // Load active order on mount and register storage listener
  useEffect(() => {
    if (typeof window !== "undefined") {
      const savedOrder = localStorage.getItem("olyyo_active_order");
      if (savedOrder) {
        try {
          setActiveOrder(JSON.parse(savedOrder));
        } catch (e) {
          console.error(e);
        }
      }

      // Live sync updates from other tabs
      const handleStorageChange = (e) => {
        if (e.key === "olyyo_active_order") {
          if (e.newValue) {
            try {
              setActiveOrder(JSON.parse(e.newValue));
            } catch (err) {
              console.error(err);
            }
          } else {
            setActiveOrder(null);
          }
        }
      };

      // Periodic check as fallback since storage events only trigger across tabs
      const interval = setInterval(() => {
        const order = localStorage.getItem("olyyo_active_order");
        if (order) {
          try {
            const parsed = JSON.parse(order);
            // Deep check status to update if changed locally or globally
            if (!activeOrder || activeOrder.status !== parsed.status) {
              setActiveOrder(parsed);
            }
          } catch (err) {}
        } else if (activeOrder) {
          setActiveOrder(null);
        }
      }, 1000);

      window.addEventListener("storage", handleStorageChange);
      return () => {
        window.removeEventListener("storage", handleStorageChange);
        clearInterval(interval);
      };
    }
  }, [activeOrder]);

  const handlePlaceOrder = async () => {
    // 1. Check if user is logged in
    let loggedInUser = null;
    if (typeof window !== "undefined") {
      const userStr = localStorage.getItem("olyyo_user");
      if (userStr) {
        try {
          loggedInUser = JSON.parse(userStr);
        } catch (e) {}
      }
    }

    if (!loggedInUser) {
      alert("Please sign in first to place an order!");
      router.push("/login");
      return;
    }

    const finalAmount = (cartTotal + deliveryFee + platformFee + gst).toFixed(2);
    const mockOrderId = "OLY-" + Math.floor(100000 + Math.random() * 900000);
    const orderData = {
      id: mockOrderId,
      items: cartItems,
      totalAmount: finalAmount,
      address: checkoutForm.address,
      paymentMethod: checkoutForm.paymentMethod,
      status: "pending",
      timestamp: new Date().toISOString(),
      restaurant: cartItems[0]?.restaurant || "OLYYO Partner Restaurant",
    };

    setOrderPlacedAnimation(true);

    try {
      // 2. Submit order to NestJS backend
      const res = await fetch(`${API_URL}/orders`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          userId: loggedInUser.id,
          restaurantId: cartItems[0]?.id || 1,
          totalAmount: Number(finalAmount),
          address: checkoutForm.address,
          paymentMethod: checkoutForm.paymentMethod,
          items: cartItems.map(item => ({
            menu_item_id: item.id,
            quantity: item.quantity,
            price: Number(item.price),
          })),
        }),
      });

      if (res.ok) {
        const result = await res.json();
        if (result.success) {
          orderData.id = result.order.id;
          orderData.status = result.order.status;
        }
      }
    } catch (err) {
      console.log("Could not post order to API, completing order locally:", err);
    }

    // Success transition
    setTimeout(() => {
      if (typeof window !== "undefined") {
        localStorage.setItem("olyyo_active_order", JSON.stringify(orderData));
      }
      setActiveOrder(orderData);
      setCartItems([]);
      setShowCart(false);
      setShowCheckoutModal(false);
      setOrderPlacedAnimation(false);
    }, 2000);
  };

  const handleCancelOrder = async () => {
    if (activeOrder && activeOrder.id) {
      try {
        await fetch(`${API_URL}/orders/${activeOrder.id}/status`, {
          method: "PATCH",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify({ status: "cancelled" }),
        });
      } catch (err) {
        console.log("Failed to update status on API:", err);
      }
    }
    if (typeof window !== "undefined") {
      localStorage.removeItem("olyyo_active_order");
    }
    setActiveOrder(null);
  };

  const handleResetOrder = () => {
    if (typeof window !== "undefined") {
      localStorage.removeItem("olyyo_active_order");
    }
    setActiveOrder(null);
  };

  // Navigation handlers
  const handleNavigateToHome = () => {
    router.push("/");
  };

  const handleNavigateToProfile = () => {
    router.push("/profile");
  };

  const handleNavigateToOffers = () => {
    router.push("/offers");
  };

  const handleNavigateToRestaurant = (restaurantId) => {
    router.push(`/restaurant/${restaurantId}`);
  };

  // Calculate cart total
  const cartTotal = cartItems.reduce((total, item) => total + (item.price * item.quantity), 0);
  const deliveryFee = cartTotal > 499 ? 0 : 40;
  const platformFee = 5;
  const gst = cartTotal * 0.05;

  // Handle add to cart
  const handleAddToCart = (item) => {
    setCartItems(prev => {
      const existing = prev.find(cartItem => cartItem.id === item.id);
      if (existing) {
        return prev.map(cartItem =>
          cartItem.id === item.id
            ? { ...cartItem, quantity: cartItem.quantity + 1 }
            : cartItem
        );
      }
      return [...prev, { ...item, quantity: 1 }];
    });
  };

  // Handle remove from cart
  const handleRemoveFromCart = (itemId) => {
    setCartItems(prev => prev.filter(item => item.id !== itemId));
  };

  // Handle quantity change
  const handleQuantityChange = (itemId, change) => {
    setCartItems(prev =>
      prev.map(item => {
        if (item.id === itemId) {
          const newQuantity = item.quantity + change;
          if (newQuantity < 1) {
            return item;
          }
          return { ...item, quantity: newQuantity };
        }
        return item;
      })
    );
  };

  // Filter restaurants based on search and filters
  const filteredRestaurants = restaurantList.filter(restaurant => {
    // Search filter
    if (searchQuery && !restaurant.name.toLowerCase().includes(searchQuery.toLowerCase()) &&
        !restaurant.cuisine.some(c => c.toLowerCase().includes(searchQuery.toLowerCase()))) {
      return false;
    }

    // Category filter
    if (selectedCategory !== "All") {
      if (selectedCategory === "Vegetarian" && !restaurant.isVeg) return false;
      if (selectedCategory === "Non-Veg" && restaurant.isVeg) return false;
      if (!["Vegetarian", "Non-Veg"].includes(selectedCategory) &&
          !restaurant.cuisine.includes(selectedCategory)) {
        return false;
      }
    }

    // Additional filters
    if (filters.vegOnly && !restaurant.isVeg) return false;
    if (filters.rating > 0 && restaurant.rating < filters.rating) return false;

    return true;
  });

  // Sort restaurants
  const sortedRestaurants = [...filteredRestaurants].sort((a, b) => {
    switch (sortBy) {
      case "rating":
        return b.rating - a.rating;
      case "deliveryTime":
        return parseInt(a.deliveryTime) - parseInt(b.deliveryTime);
      case "priceLow":
        return a.priceRange.length - b.priceRange.length;
      case "priceHigh":
        return b.priceRange.length - a.priceRange.length;
      default:
        return b.promoted - a.promoted || b.rating - a.rating;
    }
  });

  // Top picks (promoted restaurants)
  const topPicks = restaurantList.filter(r => r.promoted);

  return (
    <div className="min-h-screen bg-gray-50 text-gray-900">
      {/* Navigation */}
      <Navbar 
        onCartClick={() => setShowCart(true)} 
        cartCount={cartItems.reduce((sum, item) => sum + item.quantity, 0)} 
      />

      {/* Search Bar */}
      <div className="bg-white border-b border-gray-100 shadow-sm">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4">
          <div className="relative">
            <Search className="absolute left-4 top-1/2 transform -translate-y-1/2 w-5 h-5 text-gray-400" />
            <input
              type="text"
              placeholder="Search for restaurants, dishes, or cuisines..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="w-full pl-12 pr-4 py-3 bg-gray-50 border border-gray-200 rounded-xl text-gray-900 placeholder-gray-500 focus:outline-none focus:border-orange-500 focus:ring-2 focus:ring-orange-500/20"
            />
            <button 
              onClick={() => setShowFilters(!showFilters)}
              className="absolute right-4 top-1/2 transform -translate-y-1/2 flex items-center space-x-2 px-3 py-1 bg-orange-50 text-orange-600 rounded-lg hover:bg-orange-100 transition-colors"
            >
              <Filter className="w-4 h-4" />
              <span className="text-sm font-medium">Filters</span>
            </button>
          </div>
        </div>
      </div>

      {/* Filters Panel */}
      {showFilters && (
        <div className="bg-white border-t border-gray-100 shadow-lg">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4">
            <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">Sort By</label>
                <select
                  value={sortBy}
                  onChange={(e) => setSortBy(e.target.value)}
                  className="w-full px-3 py-2 bg-gray-50 border border-gray-200 rounded-lg focus:outline-none focus:border-orange-500"
                >
                  <option value="relevance">Relevance</option>
                  <option value="rating">Rating</option>
                  <option value="deliveryTime">Delivery Time</option>
                  <option value="priceLow">Price: Low to High</option>
                  <option value="priceHigh">Price: High to Low</option>
                </select>
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">Minimum Rating</label>
                <select
                  value={filters.rating}
                  onChange={(e) => setFilters({...filters, rating: parseFloat(e.target.value)})}
                  className="w-full px-3 py-2 bg-gray-50 border border-gray-200 rounded-lg focus:outline-none focus:border-orange-500"
                >
                  <option value={0}>All Ratings</option>
                  <option value={4.5}>4.5+</option>
                  <option value={4.0}>4.0+</option>
                  <option value={3.5}>3.5+</option>
                </select>
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">Veg Only</label>
                <div className="flex items-center">
                  <input
                    type="checkbox"
                    checked={filters.vegOnly}
                    onChange={(e) => setFilters({...filters, vegOnly: e.target.checked})}
                    className="w-5 h-5 text-orange-500 rounded focus:ring-orange-400"
                  />
                  <span className="ml-2 text-gray-700">Show only vegetarian</span>
                </div>
              </div>
              <div className="flex items-end">
                <button
                  onClick={() => {
                    setFilters({
                      vegOnly: false,
                      rating: 0,
                      deliveryTime: "",
                      priceRange: "",
                    });
                    setSortBy("relevance");
                  }}
                  className="w-full px-4 py-2 bg-gray-100 text-gray-700 rounded-lg hover:bg-gray-200 transition-colors"
                >
                  Clear All
                </button>
              </div>
            </div>
          </div>
        </div>
      )}

      {/* Mobile Menu */}
      {isMobileMenuOpen && (
        <div className="fixed inset-0 bg-black bg-opacity-50 z-50 md:hidden">
          <div className="absolute right-0 top-0 h-full w-64 bg-white shadow-lg">
            <div className="p-6">
              <div className="flex items-center justify-between mb-8">
                <div className="flex items-center space-x-2 cursor-pointer" onClick={() => {
                  handleNavigateToHome();
                  setIsMobileMenuOpen(false);
                }}>
                  <ShoppingBag className="w-8 h-8 text-orange-500" />
                  <span className="text-lg font-bold text-orange-600">OLYYO Food</span>
                </div>
                <button onClick={() => setIsMobileMenuOpen(false)}>
                  <X className="w-6 h-6 text-gray-700" />
                </button>
              </div>
              <div className="space-y-6">
                <button 
                  onClick={() => {
                    handleNavigateToHome();
                    setIsMobileMenuOpen(false);
                  }}
                  className="w-full flex items-center space-x-3 p-3 bg-orange-50 rounded-lg"
                >
                  <Home className="w-5 h-5 text-orange-500" />
                  <span className="text-gray-900">Home</span>
                </button>
                <button 
                  onClick={() => {
                    handleNavigateToOffers();
                    setIsMobileMenuOpen(false);
                  }}
                  className="w-full flex items-center space-x-3 p-3 hover:bg-orange-50 rounded-lg"
                >
                  <Trophy className="w-5 h-5 text-orange-500" />
                  <span className="text-gray-900">Offers</span>
                </button>
                <button 
                  onClick={() => {
                    handleNavigateToProfile();
                    setIsMobileMenuOpen(false);
                  }}
                  className="w-full flex items-center space-x-3 p-3 hover:bg-orange-50 rounded-lg"
                >
                  <User className="w-5 h-5 text-orange-500" />
                  <span className="text-gray-900">Profile</span>
                </button>
                <button 
                  onClick={() => {
                    setShowCart(true);
                    setIsMobileMenuOpen(false);
                  }}
                  className="w-full flex items-center space-x-3 p-3 hover:bg-orange-50 rounded-lg"
                >
                  <ShoppingCart className="w-5 h-5 text-orange-500" />
                  <span className="text-gray-900">Cart ({cartItems.reduce((sum, item) => sum + item.quantity, 0)})</span>
                </button>
              </div>
            </div>
          </div>
        </div>
      )}

      {/* Cart Sidebar */}
      {showCart && (
        <div className="fixed inset-0 bg-black bg-opacity-50 z-50">
          <div className="absolute right-0 top-0 h-full w-full md:w-96 bg-white shadow-xl">
            <div className="h-full flex flex-col">
              {/* Cart Header */}
              <div className="p-6 border-b border-gray-200">
                <div className="flex items-center justify-between">
                  <h2 className="text-xl font-bold text-gray-900">Your Cart</h2>
                  <button onClick={() => setShowCart(false)}>
                    <X className="w-6 h-6 text-gray-700" />
                  </button>
                </div>
                <div className="flex items-center space-x-2 mt-2 text-sm text-gray-600">
                  <MapPin className="w-4 h-4" />
                  <span>{userLocation}</span>
                </div>
              </div>

              {/* Cart Items */}
              <div className="flex-1 overflow-y-auto p-6">
                {cartItems.length === 0 ? (
                  <div className="text-center py-12">
                    <ShoppingCart className="w-16 h-16 text-gray-300 mx-auto mb-4" />
                    <h3 className="text-lg font-medium text-gray-900 mb-2">Your cart is empty</h3>
                    <p className="text-gray-600 mb-6">Add items from restaurants to get started</p>
                    <button
                      onClick={() => setShowCart(false)}
                      className="px-6 py-2 bg-gradient-to-r from-orange-500 to-red-500 text-white rounded-lg font-medium hover:shadow-lg hover:shadow-orange-200 transition-all duration-300"
                    >
                      Browse Restaurants
                    </button>
                  </div>
                ) : (
                  <div className="space-y-6">
                    {cartItems.map((item) => (
                      <div key={item.id} className="flex items-start space-x-4 p-4 bg-orange-50/50 rounded-xl border border-orange-100">
                        <img
                          src={item.image}
                          alt={item.name}
                          className="w-20 h-20 rounded-lg object-cover"
                        />
                        <div className="flex-1">
                          <div className="flex justify-between items-start">
                            <div>
                              <h4 className="font-medium text-gray-900">{item.name}</h4>
                              <p className="text-sm text-gray-600">{item.restaurant}</p>
                            </div>
                            <button
                              onClick={() => handleRemoveFromCart(item.id)}
                              className="text-gray-400 hover:text-red-500"
                            >
                              <Trash2 className="w-4 h-4" />
                            </button>
                          </div>
                          <div className="flex items-center justify-between mt-4">
                            <div className="flex items-center space-x-3">
                              <button
                                onClick={() => handleQuantityChange(item.id, -1)}
                                className="w-8 h-8 bg-white border border-gray-300 rounded-lg flex items-center justify-center"
                              >
                                <Minus className="w-4 h-4" />
                              </button>
                              <span className="font-medium">{item.quantity}</span>
                              <button
                                onClick={() => handleQuantityChange(item.id, 1)}
                                className="w-8 h-8 bg-white border border-gray-300 rounded-lg flex items-center justify-center"
                              >
                                <Plus className="w-4 h-4" />
                              </button>
                            </div>
                            <div className="font-medium text-gray-900">
                              ₹{item.price * item.quantity}
                            </div>
                          </div>
                        </div>
                      </div>
                    ))}
                  </div>
                )}
              </div>

              {/* Cart Footer */}
              {cartItems.length > 0 && (
                <div className="border-t border-gray-200 p-6">
                  <div className="space-y-3 mb-6">
                    <div className="flex justify-between text-gray-600">
                      <span>Item Total</span>
                      <span>₹{cartTotal}</span>
                    </div>
                    <div className="flex justify-between text-gray-600">
                      <span>Delivery Fee</span>
                      <span className={deliveryFee === 0 ? "text-green-600" : ""}>
                        {deliveryFee === 0 ? "FREE" : `₹${deliveryFee}`}
                      </span>
                    </div>
                    <div className="flex justify-between text-gray-600">
                      <span>Platform Fee</span>
                      <span>₹{platformFee}</span>
                    </div>
                    <div className="flex justify-between text-gray-600">
                      <span>GST</span>
                      <span>₹{gst.toFixed(2)}</span>
                    </div>
                    <div className="border-t border-gray-300 pt-3 mt-3">
                      <div className="flex justify-between text-lg font-bold text-gray-900">
                        <span>Total Amount</span>
                        <span>₹{(cartTotal + deliveryFee + platformFee + gst).toFixed(2)}</span>
                      </div>
                    </div>
                  </div>
                  
                  {cartTotal < 499 && (
                    <div className="mb-6 p-3 bg-gradient-to-r from-orange-50 to-red-50 border border-orange-200 rounded-lg">
                      <div className="flex items-center space-x-2">
                        <Sparkles className="w-4 h-4 text-orange-500" />
                        <span className="text-sm font-medium text-orange-700">
                          Add ₹{(499 - cartTotal).toFixed(2)} more for FREE delivery!
                        </span>
                      </div>
                    </div>
                  )}

                  <button 
                    onClick={() => setShowCheckoutModal(true)}
                    className="w-full py-3 bg-gradient-to-r from-orange-500 to-red-500 text-white text-lg font-bold rounded-xl hover:shadow-lg hover:shadow-orange-200 transition-all duration-300"
                  >
                    Proceed to Checkout
                    <ArrowRight className="w-5 h-5 inline ml-2" />
                  </button>
                </div>
              )}
            </div>
          </div>
        </div>
      )}

      {/* Checkout Modal */}
      {showCheckoutModal && (
        <div className="fixed inset-0 bg-black/60 backdrop-blur-sm z-[100] flex items-center justify-center p-4">
          <div className="bg-white rounded-3xl w-full max-w-lg shadow-2xl overflow-hidden animate-slide-up border border-orange-50">
            {/* Modal Header */}
            <div className="p-6 bg-gradient-to-r from-orange-500 to-red-500 text-white flex justify-between items-center">
              <div>
                <h3 className="text-2xl font-extrabold text-white">Complete Checkout</h3>
                <p className="text-orange-100 text-xs mt-1">Order summary and secure payment</p>
              </div>
              <button 
                onClick={() => setShowCheckoutModal(false)}
                className="p-1.5 hover:bg-white/20 rounded-full transition-colors"
              >
                <X className="w-6 h-6 text-white" />
              </button>
            </div>

            {/* Modal Content */}
            <div className="p-6 space-y-6">
              {/* Delivery Address */}
              <div>
                <label className="block text-sm font-bold text-gray-700 mb-2">Delivery Address</label>
                <div className="relative">
                  <MapPin className="absolute left-3 top-3.5 w-5 h-5 text-orange-500" />
                  <textarea 
                    value={checkoutForm.address}
                    onChange={(e) => setCheckoutForm({ ...checkoutForm, address: e.target.value })}
                    rows="2"
                    className="w-full pl-10 pr-4 py-2.5 bg-gray-50 border border-gray-200 rounded-xl text-sm focus:outline-none focus:border-orange-500 text-gray-900 placeholder-gray-400 font-medium"
                    placeholder="Enter full delivery address"
                  />
                </div>
              </div>

              {/* Payment Methods */}
              <div>
                <label className="block text-sm font-bold text-gray-700 mb-3">Select Payment Method</label>
                <div className="grid grid-cols-3 gap-3">
                  {[
                    { id: "upi", label: "UPI (GPay/PhonePe)", icon: <Smartphone className="w-5 h-5" /> },
                    { id: "card", label: "Credit/Debit Card", icon: <CreditCard className="w-5 h-5" /> },
                    { id: "cod", label: "Cash on Delivery", icon: <Truck className="w-5 h-5" /> }
                  ].map((pay) => (
                    <button
                      key={pay.id}
                      onClick={() => setCheckoutForm({ ...checkoutForm, paymentMethod: pay.id })}
                      className={`p-4 rounded-xl border flex flex-col items-center justify-center text-center transition-all ${
                        checkoutForm.paymentMethod === pay.id
                          ? "border-orange-500 bg-orange-50/50 text-orange-600 font-bold"
                          : "border-gray-200 hover:bg-gray-50 text-gray-700 font-medium"
                      }`}
                    >
                      <div className="mb-2">{pay.icon}</div>
                      <span className="text-xs">{pay.label}</span>
                    </button>
                  ))}
                </div>
              </div>

              {/* UPI ID field (conditional) */}
              {checkoutForm.paymentMethod === "upi" && (
                <div className="animate-fade-in">
                  <label className="block text-xs font-bold text-gray-500 mb-1.5">Enter UPI ID</label>
                  <input 
                    type="text"
                    value={checkoutForm.upiId}
                    onChange={(e) => setCheckoutForm({ ...checkoutForm, upiId: e.target.value })}
                    className="w-full px-4 py-2.5 bg-gray-50 border border-gray-200 rounded-xl text-sm focus:outline-none focus:border-orange-500 text-gray-900 font-medium"
                    placeholder="username@upi"
                  />
                </div>
              )}

              {/* Payment Breakdown Summary */}
              <div className="bg-gray-50 rounded-2xl p-4 border border-gray-100 text-sm space-y-2">
                <div className="flex justify-between text-gray-500 font-medium">
                  <span>Subtotal</span>
                  <span>₹{cartTotal}</span>
                </div>
                <div className="flex justify-between text-gray-500 font-medium">
                  <span>Fees & GST</span>
                  <span>₹{(deliveryFee + platformFee + gst).toFixed(2)}</span>
                </div>
                <div className="border-t border-gray-200 pt-2 flex justify-between font-black text-gray-900 text-base">
                  <span>To Pay</span>
                  <span>₹{(cartTotal + deliveryFee + platformFee + gst).toFixed(2)}</span>
                </div>
              </div>
            </div>

            {/* Modal Footer */}
            <div className="p-6 border-t border-gray-100 flex justify-end gap-3 bg-gray-50/50">
              <button 
                onClick={() => setShowCheckoutModal(false)}
                className="px-5 py-2.5 bg-white border border-gray-300 rounded-xl text-sm font-bold text-gray-700 hover:bg-gray-50 transition-colors"
              >
                Go Back
              </button>
              
              <button 
                onClick={handlePlaceOrder}
                className="px-6 py-2.5 bg-gradient-to-r from-orange-500 to-red-500 text-white rounded-xl text-sm font-bold shadow-md hover:shadow-lg transition-all duration-300 flex items-center space-x-1.5 animate-pulse"
              >
                <span>Confirm & Pay</span>
                <ArrowRight className="w-4 h-4" />
              </button>
            </div>
          </div>
        </div>
      )}

      {/* Place Order Celebration Overlay */}
      {orderPlacedAnimation && (
        <div className="fixed inset-0 bg-black/85 z-[200] flex flex-col items-center justify-center text-center animate-fade-in p-6">
          {/* Glowing Circle with Checkmark */}
          <div className="w-24 h-24 bg-gradient-to-r from-green-500 to-emerald-500 rounded-full flex items-center justify-center shadow-2xl animate-scale-up mb-6 border-4 border-green-200 relative">
            <CheckCircle className="w-12 h-12 text-white animate-pulse" />
            <div className="absolute inset-0 bg-gradient-to-r from-green-400 to-emerald-400 rounded-full blur-xl opacity-40 animate-ping"></div>
          </div>

          <h2 className="text-3xl md:text-4xl font-extrabold text-white mb-3 tracking-tight">
            Order Placed Successfully!
          </h2>
          <p className="text-gray-300 text-lg max-w-md font-medium">
            Your transaction is secure and confirmed. Preparing food...
          </p>
          <div className="w-12 h-12 border-4 border-orange-500 border-t-transparent rounded-full animate-spin mt-8"></div>
        </div>
      )}

      {/* Main Content */}
      <main className="pt-8 pb-12 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto">
        {activeOrder ? (
          <div className="space-y-8 animate-fade-in">
            {/* Live Tracking Header */}
            <div className="bg-white rounded-3xl p-6 border border-gray-100 shadow-xl flex flex-col md:flex-row items-center justify-between gap-6 relative overflow-hidden">
              <div className="absolute top-0 left-0 w-2 h-full bg-gradient-to-b from-orange-500 to-red-500"></div>
              <div className="space-y-2 text-center md:text-left">
                <span className="px-3 py-1 bg-orange-50 text-orange-600 rounded-full text-xs font-bold tracking-wider uppercase">
                  Live Tracking Active
                </span>
                <h2 className="text-2xl md:text-3xl font-extrabold text-gray-900 tracking-tight">
                  Order Status: <span className="capitalize text-orange-600">{activeOrder.status === "pending" ? "Placed & Awaiting Approval" : activeOrder.status === "preparing" ? "Preparing your delicious food" : activeOrder.status === "out_for_delivery" ? "Out for Delivery!" : "Delivered! Enjoy your meal! 🎉"}</span>
                </h2>
                <p className="text-gray-500 font-medium">
                  ID: <span className="font-bold text-gray-800">{activeOrder.id}</span> • From <span className="font-bold text-gray-800">{activeOrder.restaurant}</span>
                </p>
              </div>

              {/* ETA Display */}
              <div className="bg-gradient-to-br from-gray-900 to-black text-white px-8 py-5 rounded-2xl text-center shadow-xl border border-gray-800 relative group overflow-hidden min-w-[200px]">
                <div className="absolute inset-0 bg-gradient-to-r from-orange-500/10 to-red-500/10 opacity-50"></div>
                <p className="text-xs text-gray-400 font-bold uppercase tracking-wider mb-1">Estimated Arrival</p>
                <div className="text-3xl font-black text-transparent bg-clip-text bg-gradient-to-r from-orange-400 to-red-500 animate-pulse">
                  {activeOrder.status === "pending" ? "25 - 35 mins" : activeOrder.status === "preparing" ? "20 - 25 mins" : activeOrder.status === "out_for_delivery" ? "8 - 12 mins" : "Delivered!"}
                </div>
              </div>
            </div>

            {/* Tracking Progress Timeline */}
            <div className="bg-white rounded-3xl p-8 border border-gray-100 shadow-xl">
              <h3 className="text-lg font-bold text-gray-900 mb-8 flex items-center gap-2">
                <Clock className="w-5 h-5 text-orange-500" /> Delivery Progress
              </h3>

              <div className="relative">
                {/* Horizontal Progress Line */}
                <div className="absolute top-1/2 left-4 right-4 h-1.5 bg-gray-100 -translate-y-1/2 z-0 hidden md:block">
                  <div 
                    className="h-full bg-gradient-to-r from-orange-500 to-red-500 transition-all duration-1000"
                    style={{
                      width: 
                        activeOrder.status === "pending" ? "12%" : 
                        activeOrder.status === "preparing" ? "42%" : 
                        activeOrder.status === "out_for_delivery" ? "75%" : "100%"
                    }}
                  />
                </div>

                {/* Timeline Nodes */}
                <div className="grid grid-cols-1 md:grid-cols-4 gap-6 relative z-10">
                  {[
                    { id: "pending", title: "Order Placed", desc: "Awaiting shop approval", time: "Just now", active: true },
                    { id: "preparing", title: "Preparing Food", desc: "Chef is crafting magic", time: activeOrder.status !== "pending" ? "5 mins ago" : "Pending", active: activeOrder.status !== "pending" },
                    { id: "out_for_delivery", title: "Out For Delivery", desc: "Rider Rajesh in flight", time: (activeOrder.status === "out_for_delivery" || activeOrder.status === "delivered") ? "2 mins ago" : "Pending", active: activeOrder.status === "out_for_delivery" || activeOrder.status === "delivered" },
                    { id: "delivered", title: "Delivered", desc: "Handed over with a smile", time: activeOrder.status === "delivered" ? "Delivered" : "Pending", active: activeOrder.status === "delivered" },
                  ].map((step, index) => (
                    <div key={step.id} className="flex flex-row md:flex-col items-center md:text-center gap-4 bg-gray-50/50 md:bg-transparent p-4 md:p-0 rounded-2xl border border-gray-100 md:border-none">
                      {/* Node Indicator */}
                      <div className={`w-12 h-12 rounded-full flex items-center justify-center border-4 shadow-md transition-all duration-500 ${
                        step.active 
                          ? "bg-gradient-to-r from-orange-500 to-red-500 border-orange-100 text-white font-black scale-110"
                          : "bg-white border-gray-200 text-gray-400 font-medium"
                      }`}>
                        {index + 1}
                      </div>

                      {/* Info */}
                      <div>
                        <h4 className={`font-bold text-sm md:text-base ${step.active ? "text-gray-900" : "text-gray-400"}`}>
                          {step.title}
                        </h4>
                        <p className="text-xs text-gray-500 mt-1 md:max-w-[180px] mx-auto">
                          {step.desc}
                        </p>
                        <span className={`text-[10px] inline-block mt-2 px-2.5 py-0.5 rounded-full font-bold uppercase ${
                          step.active ? "bg-orange-50 text-orange-600 border border-orange-100" : "bg-gray-100 text-gray-400"
                        }`}>
                          {step.time}
                        </span>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>

            {/* Grid for Map and Partner Details */}
            <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
              {/* Animated SVG Route Map (Col-span 2) */}
              <div className="lg:col-span-2 bg-gradient-to-br from-gray-900 via-gray-950 to-black rounded-3xl p-6 border border-gray-800 shadow-2xl relative overflow-hidden min-h-[400px] flex flex-col justify-between">
                {/* Glowing Overlay */}
                <div className="absolute inset-0 bg-radial-at-t from-orange-500/5 via-transparent to-transparent pointer-events-none"></div>

                <div className="relative z-10 flex justify-between items-center mb-4">
                  <div className="flex items-center space-x-2 text-white">
                    <div className="w-2.5 h-2.5 bg-green-500 rounded-full animate-ping"></div>
                    <span className="text-sm font-bold tracking-wide">Live Route Simulator</span>
                  </div>
                  <span className="text-xs text-gray-400 bg-gray-800/80 border border-gray-700 px-3 py-1 rounded-full font-medium">
                    Map: Connaught Place, New Delhi
                  </span>
                </div>

                {/* SVG Map Layout */}
                <div className="relative w-full h-[280px] bg-gray-900/60 rounded-2xl border border-gray-800/80 overflow-hidden flex items-center justify-center">
                  <svg className="absolute inset-0 w-full h-full text-gray-800 opacity-20 pointer-events-none" viewBox="0 0 100 100" preserveAspectRatio="none">
                    <line x1="0" y1="20" x2="100" y2="20" stroke="currentColor" strokeWidth="0.5" />
                    <line x1="0" y1="50" x2="100" y2="50" stroke="currentColor" strokeWidth="0.5" />
                    <line x1="0" y1="80" x2="100" y2="80" stroke="currentColor" strokeWidth="0.5" />
                    <line x1="20" y1="0" x2="20" y2="100" stroke="currentColor" strokeWidth="0.5" />
                    <line x1="50" y1="0" x2="50" y2="100" stroke="currentColor" strokeWidth="0.5" />
                    <line x1="80" y1="0" x2="80" y2="100" stroke="currentColor" strokeWidth="0.5" />
                  </svg>

                  <svg className="w-full h-full max-w-lg" viewBox="0 0 500 250" fill="none" xmlns="http://www.w3.org/2000/svg">
                    {/* Background styled rivers or parks */}
                    <rect x="50" y="30" width="120" height="60" rx="10" fill="#15261E" fillOpacity="0.3" />
                    <text x="110" y="65" fill="#4ade80" fillOpacity="0.5" fontSize="10" fontWeight="bold" textAnchor="middle">Central Park</text>

                    {/* Styled Road Path */}
                    <path 
                      id="road-path"
                      d="M 80 180 C 150 180, 200 80, 300 80 C 360 80, 380 180, 420 180" 
                      stroke="#374151" 
                      strokeWidth="6" 
                      strokeLinecap="round" 
                    />
                    
                    {/* Glowing active path line */}
                    <path 
                      d="M 80 180 C 150 180, 200 80, 300 80 C 360 80, 380 180, 420 180" 
                      stroke="url(#route-glow)" 
                      strokeWidth="4" 
                      strokeLinecap="round" 
                      strokeDasharray="8 6"
                      className="animate-[dash_20s_linear_infinite]"
                    />

                    <defs>
                      <linearGradient id="route-glow" x1="0%" y1="0%" x2="100%" y2="0%">
                        <stop offset="0%" stopColor="#f97316" />
                        <stop offset="100%" stopColor="#ef4444" />
                      </linearGradient>
                    </defs>

                    {/* Restaurant Pin */}
                    <g transform="translate(80, 180)" className="cursor-pointer">
                      <circle cx="0" cy="0" r="14" fill="#f97316" fillOpacity="0.2" className="animate-ping" />
                      <circle cx="0" cy="0" r="8" fill="#f97316" stroke="#fff" strokeWidth="2" />
                      <path d="M-4 -4 L4 4 M4 -4 L-4 4" stroke="#fff" strokeWidth="1.5" />
                      <text x="0" y="24" fill="#f97316" fontSize="9" fontWeight="black" textAnchor="middle" className="bg-black">RESTAURANT</text>
                    </g>

                    {/* Customer House Pin */}
                    <g transform="translate(420, 180)">
                      <circle cx="0" cy="0" r="14" fill="#10b981" fillOpacity="0.2" className="animate-ping" />
                      <circle cx="0" cy="0" r="8" fill="#10b981" stroke="#fff" strokeWidth="2" />
                      <path d="M-3 2 L0 -3 L3 2 Z" fill="#fff" />
                      <text x="0" y="24" fill="#10b981" fontSize="9" fontWeight="black" textAnchor="middle">YOUR HOME</text>
                    </g>

                    {/* Moving Delivery Partner Bike */}
                    <g 
                      transform={
                        activeOrder.status === "pending" || activeOrder.status === "preparing" 
                          ? "translate(80, 180)" 
                          : activeOrder.status === "out_for_delivery" 
                          ? "translate(250, 120)" 
                          : "translate(420, 180)"
                      }
                      className="transition-all duration-[2000ms] ease-in-out"
                    >
                      <circle cx="0" cy="0" r="18" fill="#ef4444" fillOpacity="0.3" className="animate-pulse" />
                      <circle cx="0" cy="0" r="12" fill="#ef4444" stroke="#fff" strokeWidth="2" className="shadow-lg" />
                      {/* Bike Icon (Minimalist SVG) */}
                      <path d="M-6 2 h4 l2 -4 h2 l2 4 h2 M-3 2 a2 2 0 1 0 4 0 a2 2 0 1 0 -4 0 M3 2 a2 2 0 1 0 4 0 a2 2 0 1 0 -4 0" stroke="#fff" strokeWidth="1.5" fill="none" />
                      <text x="0" y="-18" fill="#ef4444" fontSize="10" fontWeight="extrabold" textAnchor="middle" className="uppercase tracking-wider">RIDER</text>
                    </g>
                  </svg>
                </div>

                <div className="relative z-10 bg-gray-900/80 border border-gray-800 rounded-xl p-3 flex items-center justify-between mt-4">
                  <div className="flex items-center space-x-3 text-sm text-gray-300">
                    <Truck className="w-5 h-5 text-orange-500 animate-bounce" />
                    <span>
                      {activeOrder.status === "pending" ? "Waiting for partner response..." : activeOrder.status === "preparing" ? "Food is being freshly prepared in kitchen." : activeOrder.status === "out_for_delivery" ? "Rider is heading to your location!" : "Rider has arrived at your address!"}
                    </span>
                  </div>
                  <span className="text-xs text-orange-400 font-extrabold animate-pulse">GPS CONNECTED</span>
                </div>
              </div>

              {/* Delivery Partner Details & Order Details (Col-span 1) */}
              <div className="space-y-6">
                {/* Partner Card */}
                <div className="bg-white rounded-3xl p-6 border border-gray-100 shadow-xl relative overflow-hidden">
                  <div className="absolute top-0 right-0 w-24 h-24 bg-gradient-to-br from-orange-500/10 to-red-500/10 rounded-bl-[100px]"></div>
                  
                  <h3 className="text-lg font-bold text-gray-900 mb-4 flex items-center gap-2">
                    <User className="w-5 h-5 text-orange-500" /> Delivery Partner
                  </h3>

                  <div className="flex items-center space-x-4 mb-6">
                    <div className="relative">
                      <img
                        src="https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=100&h=100&fit=crop"
                        alt="Rajesh Kumar"
                        className="w-16 h-16 rounded-2xl object-cover border-2 border-orange-100"
                      />
                      <div className="absolute -bottom-1.5 -right-1.5 bg-green-500 text-white rounded-full p-1 border-2 border-white shadow-sm">
                        <CheckCircle className="w-3 h-3" />
                      </div>
                    </div>
                    <div>
                      <h4 className="font-extrabold text-gray-900 text-lg">राजेश कुमार</h4>
                      <p className="text-sm text-orange-600 font-bold">OLYYO Delivery Hero</p>
                      
                      <div className="flex items-center space-x-1.5 mt-1 text-xs text-gray-500">
                        <Star className="w-3.5 h-3.5 fill-yellow-400 text-yellow-400" />
                        <span className="font-bold text-gray-800">4.9</span>
                        <span>(120+ deliveries)</span>
                      </div>
                    </div>
                  </div>

                  <div className="bg-gray-50 rounded-2xl p-4 border border-gray-100 text-sm space-y-3.5 mb-6">
                    <div className="flex justify-between items-center text-gray-600">
                      <span className="font-medium">Vehicle</span>
                      <span className="font-bold text-gray-800">Splendor (DL 3S AB 1234)</span>
                    </div>
                    <div className="flex justify-between items-center text-gray-600">
                      <span className="font-medium">Health Status</span>
                      <span className="text-xs font-bold text-green-600 bg-green-50 border border-green-100 px-2.5 py-0.5 rounded-full">
                        Vaccinated & Sanitized
                      </span>
                    </div>
                    <div className="flex justify-between items-center text-gray-600">
                      <span className="font-medium">Temperature</span>
                      <span className="font-bold text-gray-800">98.4°F (Normal)</span>
                    </div>
                  </div>

                  {/* Dial & Chat simulation */}
                  <div className="grid grid-cols-2 gap-3">
                    <a
                      href="tel:+919876543210"
                      onClick={(e) => {
                        e.preventDefault();
                        alert("Calling Rajesh Kumar (+91 98765 43210)... Connecting OLYYO Secure Dial.");
                      }}
                      className="flex items-center justify-center space-x-2 py-3 bg-gray-100 hover:bg-gray-200/80 rounded-xl text-gray-800 font-bold transition-all text-sm"
                    >
                      <Phone className="w-4 h-4 text-gray-600" />
                      <span>Call Rajesh</span>
                    </a>
                    
                    <button
                      onClick={() => alert("Secure Customer-Partner Live Chat is online. No new messages.")}
                      className="flex items-center justify-center space-x-2 py-3 bg-orange-50 hover:bg-orange-100 text-orange-600 font-bold transition-all text-sm border border-orange-100"
                    >
                      <MessageCircle className="w-4 h-4 text-orange-500" />
                      <span>Chat Active</span>
                    </button>
                  </div>
                </div>

                {/* Order Summary & Receipt */}
                <div className="bg-white rounded-3xl p-6 border border-gray-100 shadow-xl">
                  <h3 className="text-lg font-bold text-gray-900 mb-4 flex items-center gap-2">
                    <ShoppingBag className="w-5 h-5 text-orange-500" /> Order Summary
                  </h3>

                  <div className="divide-y divide-gray-100 mb-6 max-h-[180px] overflow-y-auto pr-1">
                    {activeOrder.items?.map((item) => (
                      <div key={item.id} className="py-3 flex justify-between items-center text-sm">
                        <div>
                          <p className="font-bold text-gray-900">{item.name}</p>
                          <p className="text-xs text-gray-500">Qty: {item.quantity} • ₹{item.price}</p>
                        </div>
                        <span className="font-bold text-gray-800">₹{item.price * item.quantity}</span>
                      </div>
                    ))}
                  </div>

                  <div className="bg-gray-50 rounded-2xl p-4 border border-gray-100 text-xs space-y-2 mb-6">
                    <div className="flex justify-between text-gray-500 font-semibold">
                      <span>Delivery Address</span>
                      <span className="text-gray-800 text-right font-bold truncate max-w-[150px]">{activeOrder.address}</span>
                    </div>
                    <div className="flex justify-between text-gray-500 font-semibold">
                      <span>Payment Method</span>
                      <span className="text-gray-800 font-bold uppercase">{activeOrder.paymentMethod}</span>
                    </div>
                    <div className="border-t border-gray-200 pt-2 flex justify-between text-sm font-black text-gray-900">
                      <span>Paid Total</span>
                      <span>₹{activeOrder.totalAmount}</span>
                    </div>
                  </div>

                  {/* Cancel Button / Close Tracker Button */}
                  {activeOrder.status === "pending" ? (
                    <button
                      onClick={handleCancelOrder}
                      className="w-full py-3 bg-red-50 hover:bg-red-100 border border-red-200 text-red-600 text-sm font-bold rounded-xl transition-all shadow-sm hover:shadow"
                    >
                      Cancel Order & Refund
                    </button>
                  ) : activeOrder.status === "delivered" ? (
                    <button
                      onClick={handleResetOrder}
                      className="w-full py-3 bg-gradient-to-r from-orange-500 to-red-500 text-white text-sm font-bold rounded-xl transition-all shadow-md hover:shadow-lg animate-bounce"
                    >
                      Browse & Order Again
                    </button>
                  ) : (
                    <button
                      disabled
                      className="w-full py-3 bg-gray-100 text-gray-400 text-sm font-bold rounded-xl cursor-not-allowed border border-gray-200"
                    >
                      Order is being processed
                    </button>
                  )}
                </div>
              </div>
            </div>
          </div>
        ) : (
          <>
            {/* Food Categories */}
            <div className="mb-8">
              <h2 className="text-2xl font-bold text-gray-900 mb-6">What&apos;s on your mind?</h2>
              <div className="flex space-x-4 overflow-x-auto pb-4">
                {foodCategories.map((category) => (
                  <button
                    key={category.id}
                    onClick={() => setSelectedCategory(category.name)}
                    className={`flex flex-col items-center p-4 rounded-xl min-w-[100px] transition-all duration-300 ${
                      selectedCategory === category.name
                        ? "bg-gradient-to-r from-orange-500 to-red-500 text-white shadow-lg shadow-orange-200"
                        : "bg-white text-gray-700 hover:bg-orange-50 border border-gray-200"
                    }`}
                  >
                    <div className="mb-2">{category.icon}</div>
                    <span className="text-sm font-medium">{category.name}</span>
                  </button>
                ))}
              </div>
            </div>

            {/* Top Picks Banner */}
            <div className="mb-8">
              <div className="bg-gradient-to-r from-orange-500 to-red-500 rounded-2xl p-6 text-white ">
                <div className="flex items-center justify-between mb-4">
                  <div>
                    <h3 className="text-2xl font-bold mb-2">🔥 Top Picks Near You</h3>
                    <p className="text-orange-100">Restaurants handpicked just for you</p>
                  </div>
                  <div className="hidden md:block">
                    <Crown className="w-12 h-12 text-orange-200" />
                  </div>
                </div>
                <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
                  {topPicks.map((restaurant) => (
                    <div 
                      key={restaurant.id} 
                      className="bg-white/20 backdrop-blur-sm rounded-xl p-4 cursor-pointer hover:bg-white/30 transition-all duration-300"
                      onClick={() => handleNavigateToRestaurant(restaurant.id)}
                    >
                      <div className="flex items-center space-x-3">
                        <img
                          src={restaurant.image}
                          alt={restaurant.name}
                          className="w-16 h-16 rounded-lg object-cover"
                        />
                        <div>
                          <h4 className="font-bold text-white">{restaurant.name}</h4>
                          <div className="flex items-center space-x-2 text-sm text-orange-100">
                            <Star className="w-3 h-3 fill-current" />
                            <span>{restaurant.rating}</span>
                            <span>•</span>
                            <span>{restaurant.deliveryTime}</span>
                          </div>
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>

            {/* Restaurants Grid */}
            <div>
              <div className="flex items-center justify-between mb-6">
                <h2 className="text-2xl font-bold text-gray-900">
                  {selectedCategory === "All" ? "All Restaurants" : selectedCategory} 
                  <span className="text-gray-500 text-lg ml-2">({sortedRestaurants.length})</span>
                </h2>
                <div className="flex items-center space-x-4">
                  <div className="text-sm text-gray-600">
                    Sorted by: <span className="font-medium text-orange-600">
                      {sortBy === "relevance" ? "Relevance" :
                       sortBy === "rating" ? "Rating" :
                       sortBy === "deliveryTime" ? "Delivery Time" :
                       sortBy === "priceLow" ? "Price: Low to High" : "Price: High to Low"}
                    </span>
                  </div>
                </div>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                {sortedRestaurants.map((restaurant) => (
                  <div
                    key={restaurant.id}
                    onClick={() => handleNavigateToRestaurant(restaurant.id)}
                    className="bg-white rounded-2xl overflow-hidden border border-gray-200 hover:border-orange-300 hover:shadow-xl transition-all duration-300 group cursor-pointer"
                  >
                    {/* Restaurant Image */}
                    <div className="relative h-48 overflow-hidden">
                      <img
                        src={restaurant.image}
                        alt={restaurant.name}
                        className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                      />
                      
                      {/* Promoted Badge */}
                      {restaurant.promoted && (
                        <div className="absolute top-3 left-3 px-3 py-1 bg-gradient-to-r from-orange-500 to-red-500 text-white text-xs font-bold rounded-full">
                          PROMOTED
                        </div>
                      )}
                      
                      {/* Discount Badge */}
                      <div className="absolute top-3 right-3 px-3 py-1 bg-white text-orange-600 text-sm font-bold rounded-lg shadow-md">
                        {restaurant.discount}
                      </div>
                      
                      {/* Veg/Non-Veg Indicator */}
                      <div className={`absolute bottom-3 left-3 w-6 h-6 rounded-full border-2 ${
                        restaurant.isVeg ? "border-green-500" : "border-red-500"
                      }`}>
                        <div className={`w-3 h-3 rounded-full mx-auto mt-1 ${
                          restaurant.isVeg ? "bg-green-500" : "bg-red-500"
                        }`} />
                      </div>
                    </div>

                    {/* Restaurant Info */}
                    <div className="p-5">
                      <div className="flex justify-between items-start mb-3">
                        <div>
                          <h3 className="text-xl font-bold text-gray-900 mb-1">{restaurant.name}</h3>
                          <div className="flex items-center space-x-2 text-gray-600 text-sm">
                            <span>{restaurant.cuisine.join(" • ")}</span>
                            <span>•</span>
                            <span>{restaurant.priceRange}</span>
                          </div>
                        </div>
                        <button 
                          className="text-gray-400 hover:text-red-500 transition-colors"
                          onClick={(e) => {
                            e.stopPropagation();
                            // Handle favorite toggle
                          }}
                        >
                          <Heart className="w-5 h-5" />
                        </button>
                      </div>

                      {/* Rating and Delivery Info */}
                      <div className="flex items-center justify-between mb-4">
                        <div className="flex items-center space-x-4">
                          <div className="flex items-center space-x-1 bg-green-50 text-green-700 px-3 py-1 rounded-full">
                            <Star className="w-4 h-4 fill-current" />
                            <span className="font-medium">{restaurant.rating}</span>
                          </div>
                          <div className="flex items-center space-x-1 text-gray-600">
                            <Clock className="w-4 h-4" />
                            <span>{restaurant.deliveryTime}</span>
                          </div>
                          <div className="flex items-center space-x-1 text-gray-600">
                            <Navigation className="w-4 h-4" />
                            <span>{restaurant.distance}</span>
                          </div>
                        </div>
                      </div>

                      {/* Tags */}
                      <div className="flex flex-wrap gap-2 mb-4">
                        {restaurant.tags.map((tag, index) => (
                          <span
                            key={index}
                            className="px-3 py-1 bg-orange-50 text-orange-600 text-xs font-medium rounded-full"
                          >
                            {tag}
                          </span>
                        ))}
                      </div>

                      {/* CTA Button */}
                      <div className="flex gap-3">
                        <button
                          onClick={(e) => {
                            e.stopPropagation();
                            handleNavigateToRestaurant(restaurant.id);
                          }}
                          className="flex-1 py-3 bg-gradient-to-r from-orange-500 to-red-500 text-white font-medium rounded-xl hover:from-orange-600 hover:to-red-600 transition-all duration-300 shadow-md hover:shadow-lg"
                        >
                          View Menu
                          <ChevronRight className="w-4 h-4 inline ml-2" />
                        </button>
                        
                        <button
                          onClick={(e) => {
                            e.stopPropagation();
                            handleAddToCart({
                              id: restaurant.id,
                              name: restaurant.name + " Special",
                              price: 299,
                              restaurant: restaurant.name,
                              image: restaurant.image,
                            });
                          }}
                          className="px-4 py-3 bg-gradient-to-r from-orange-50 to-red-50 text-orange-600 font-medium rounded-xl hover:from-orange-100 hover:to-red-100 transition-all duration-300 border border-orange-200 flex items-center justify-center"
                        >
                          <ShoppingBag className="w-4 h-4" />
                        </button>
                      </div>
                    </div>
                  </div>
                ))}
              </div>

              {sortedRestaurants.length === 0 && (
                <div className="text-center py-16">
                  <Search className="w-16 h-16 text-gray-300 mx-auto mb-4" />
                  <h3 className="text-xl font-medium text-gray-900 mb-2">No restaurants found</h3>
                  <p className="text-gray-600 mb-6">Try adjusting your search or filters</p>
                  <button
                    onClick={() => {
                      setSearchQuery("");
                      setSelectedCategory("All");
                      setFilters({
                        vegOnly: false,
                        rating: 0,
                        deliveryTime: "",
                        priceRange: "",
                      });
                    }}
                    className="px-6 py-2 bg-gradient-to-r from-orange-500 to-red-500 text-white rounded-lg font-medium hover:shadow-lg hover:shadow-orange-200 transition-all duration-300"
                  >
                    Clear All Filters
                  </button>
                </div>
              )}
            </div>
          </>
        )}
      </main>

      {/* Quick Actions Footer */}
      <div className="fixed bottom-0 left-0 right-0 bg-white border-t border-gray-200 md:hidden">
        <div className="flex items-center justify-around p-4">
          <button 
            onClick={handleNavigateToHome}
            className="flex flex-col items-center space-y-1"
          >
            <Home className="w-6 h-6 text-orange-500" />
            <span className="text-xs text-gray-700">Home</span>
          </button>
          <button 
            onClick={handleNavigateToOffers}
            className="flex flex-col items-center space-y-1"
          >
            <Trophy className="w-6 h-6 text-gray-500" />
            <span className="text-xs text-gray-700">Offers</span>
          </button>
          <button 
            onClick={() => setShowCart(true)}
            className="relative flex flex-col items-center space-y-1"
          >
            <ShoppingCart className="w-6 h-6 text-gray-500" />
            {cartItems.length > 0 && (
              <span className="absolute -top-1 -right-1 w-5 h-5 bg-orange-500 text-white text-xs rounded-full flex items-center justify-center">
                {cartItems.reduce((sum, item) => sum + item.quantity, 0)}
              </span>
            )}
            <span className="text-xs text-gray-700">Cart</span>
          </button>
          <button 
            onClick={handleNavigateToProfile}
            className="flex flex-col items-center space-y-1"
          >
            <User className="w-6 h-6 text-gray-500" />
            <span className="text-xs text-gray-700">Profile</span>
          </button>
        </div>
      </div>

      {/* Footer */}
      <footer className="bg-gray-900 text-white py-12 px-4 sm:px-6 lg:px-8 hidden md:block">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            <div>
              <div className="flex items-center space-x-2 mb-4">
                <div className="w-10 h-10 bg-gradient-to-r from-orange-500 to-red-500 rounded-lg flex items-center justify-center">
                  <ShoppingBag className="w-6 h-6 text-white" />
                </div>
                <span className="text-xl font-bold text-white">OLYYO Food</span>
              </div>
              <p className="text-gray-400 text-sm">
                Delivering happiness to your doorstep. Order from the best restaurants in town.
              </p>
            </div>
            
            <div>
              <h4 className="text-lg font-bold text-white mb-4">Quick Links</h4>
              <div className="space-y-2">
                <a href="#" className="block text-gray-400 hover:text-orange-300 transition-colors">
                  About Us
                </a>
                <a href="#" className="block text-gray-400 hover:text-orange-300 transition-colors">
                  Careers
                </a>
                <a href="#" className="block text-gray-400 hover:text-orange-300 transition-colors">
                  Blog
                </a>
                <a href="#" className="block text-gray-400 hover:text-orange-300 transition-colors">
                  Press
                </a>
              </div>
            </div>
            
            <div>
              <h4 className="text-lg font-bold text-white mb-4">For Restaurants</h4>
              <div className="space-y-2">
                <a href="#" className="block text-gray-400 hover:text-orange-300 transition-colors">
                  Partner With Us
                </a>
                <a href="#" className="block text-gray-400 hover:text-orange-300 transition-colors">
                  Business App
                </a>
                <a href="#" className="block text-gray-400 hover:text-orange-300 transition-colors">
                  Restaurant Dashboard
                </a>
                <a href="#" className="block text-gray-400 hover:text-orange-300 transition-colors">
                  Guidelines
                </a>
              </div>
            </div>
            
            <div>
              <h4 className="text-lg font-bold text-white mb-4">Contact Us</h4>
              <div className="space-y-2">
                <div className="flex items-center space-x-2 text-gray-400">
                  <Phone className="w-4 h-4" />
                  <span>+1-800-OLYYO-FOOD</span>
                </div>
                <div className="flex items-center space-x-2 text-gray-400">
                  <Mail className="w-4 h-4" />
                  <span>support@olyyofood.com</span>
                </div>
                <div className="flex items-center space-x-2 text-gray-400">
                  <MessageCircle className="w-4 h-4" />
                  <span>WhatsApp Support</span>
                </div>
              </div>
            </div>
          </div>
          
          <div className="mt-8 pt-8 border-t border-gray-800 text-center text-gray-500 text-sm">
            <p>© {new Date().getFullYear()} OLYYO Food. All rights reserved.</p>
          </div>
        </div>
      </footer>
    </div>
  );
}