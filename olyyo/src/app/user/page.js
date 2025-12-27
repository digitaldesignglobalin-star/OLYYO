"use client";

import { useState, useEffect } from "react";
import { useRouter } from "next/navigation";
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
import Link from "next/link";

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
  const filteredRestaurants = restaurants.filter(restaurant => {
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
  const topPicks = restaurants.filter(r => r.promoted);

  return (
    <div className="min-h-screen bg-gray-50 text-gray-900">
      {/* Navigation */}
      <nav className="fixed top-0 w-full bg-white shadow-md z-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-16">
            {/* Logo and Location */}
            <div className="flex items-center space-x-4">
              <div 
                className="flex items-center space-x-2 cursor-pointer" 
                onClick={handleNavigateToHome}
              >
                <div className="w-10 h-10 bg-gradient-to-r from-orange-500 to-red-500 rounded-lg flex items-center justify-center">
                  <ShoppingBag className="w-6 h-6 text-white" />
                </div>
                <span className="text-xl font-bold text-orange-600">OLYYO Food</span>
              </div>

              {/* Location Selector */}
              <div className="hidden md:flex items-center space-x-2 px-4 py-2 bg-orange-50 rounded-lg cursor-pointer hover:bg-orange-100 transition-colors">
                <MapPin className="w-5 h-5 text-orange-500" />
                <div>
                  <div className="text-sm font-medium text-gray-900">Deliver to</div>
                  <div className="text-xs text-gray-600">{userLocation}</div>
                </div>
                <ChevronDown className="w-4 h-4 text-gray-500" />
              </div>
            </div>

            {/* Desktop Menu */}
            <div className="hidden md:flex items-center space-x-6">
              <button 
                onClick={handleNavigateToHome}
                className="text-gray-600  hover:text-orange-600 transition-colors flex items-center space-x-1"
              >
                <Home className="w-5 h-5 " />
                <span className="text-sm ">Home</span>
              </button>
              <button 
                onClick={handleNavigateToOffers}
                className="text-gray-600 hover:text-orange-600 transition-colors flex items-center space-x-1"
              >
                <Trophy className="w-5 h-5" />
                <span className="text-sm">Offers</span>
              </button>
              <button 
                onClick={handleNavigateToProfile}
                className="text-gray-600 hover:text-orange-600 transition-colors flex items-center space-x-1"
              >
                <User className="w-5 h-5" />
                <span className="text-sm">Profile</span>
              </button>
              <button 
                onClick={() => setShowCart(true)}
                className="relative text-gray-600 hover:text-orange-600 transition-colors"
              >
                <ShoppingCart className="w-5 h-5" />
                {cartItems.length > 0 && (
                  <span className="absolute -top-2 -right-2 w-5 h-5 bg-orange-500 text-white text-xs rounded-full flex items-center justify-center">
                    {cartItems.reduce((sum, item) => sum + item.quantity, 0)}
                  </span>
                )}
              </button>
            </div>

            {/* Mobile Menu Button */}
            <button
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              className="md:hidden p-2 rounded-lg hover:bg-orange-50"
            >
              {isMobileMenuOpen ? <X className="w-6 h-6 text-gray-700" /> : <Menu className="w-6 h-6 text-gray-700" />}
            </button>
          </div>
        </div>

        {/* Search Bar */}
        <div className="border-t border-gray-100 bg-white">
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
      </nav>

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

                  <button className="w-full py-3 bg-gradient-to-r from-orange-500 to-red-500 text-white text-lg font-bold rounded-xl hover:shadow-lg hover:shadow-orange-200 transition-all duration-300">
                    Proceed to Checkout
                    <ArrowRight className="w-5 h-5 inline ml-2" />
                  </button>
                </div>
              )}
            </div>
          </div>
        </div>
      )}

      {/* Main Content */}
      <main className="pt-50 pb-12 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto">
        {/* Food Categories */}
        <div className="mb-8">
          <h2 className="text-2xl font-bold text-gray-900 mb-6">What's on your mind?</h2>
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
                  {/* Separate CTA Buttons */}
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

            <p className="mt-1 text-xs">
            ❤️Proudly developed by{" "}
            <Link href="https://designglobal.in/">
              Design Global Technology
            </Link>
          </p>
          </div>
        </div>
      </footer>
    </div>
  );
}