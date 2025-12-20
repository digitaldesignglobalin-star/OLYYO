"use client";

import { useState, useEffect } from "react";
import { useRouter } from "next/navigation";
import {
  ShoppingBag,
  Shield,
  Coffee,
  User,
  Truck,
  Menu,
  X,
  Home,
} from "lucide-react";
import Image from "next/image";
import logoImage from "../../../public/olyyo-logo.png";

export default function Navbar() {
  const [userType, setUserType] = useState("customer");
  const [scrolled, setScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [isNavigating, setIsNavigating] = useState(false);
  const router = useRouter();

  const userTypes = [
    { 
      id: "home", 
      label: "Home", 
      icon: <Home className="w-4 h-4" />, 
      path: "/",
      color: "from-blue-500 to-cyan-500"
    },
    { 
      id: "admin", 
      label: "Admin", 
      icon: <Shield className="w-4 h-4" />, 
      path: "/admin",
      color: "from-purple-500 to-pink-500"
    },
    {
      id: "restaurant",
      label: "Restaurant",
      icon: <Coffee className="w-4 h-4" />,
      path: "/restaurant",
      color: "from-orange-500 to-red-500"
    },
    {
      id: "middleman",
      label: "Middle Man",
      icon: <User className="w-4 h-4" />,
      path: "/middleman",
      color: "from-green-500 to-emerald-500"
    },
    {
      id: "delivery",
      label: "Delivery",
      icon: <Truck className="w-4 h-4" />,
      path: "/delivery",
      color: "from-indigo-500 to-blue-500"
    },
    { 
      id: "customer", 
      label: "Customer", 
      icon: <User className="w-4 h-4" />,
      // path: "/customer",
      path: "/user",
      color: "from-gray-500 to-gray-700"
    },
  ];

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const handleNavigation = async (type) => {
    if (isNavigating) return;
    
    setIsNavigating(true);
    setUserType(type);
    
    // Find the route for the selected user type
    const selectedType = userTypes.find(t => t.id === type);
    if (selectedType && selectedType.path) {
      try {
        await router.push(selectedType.path);
      } catch (error) {
        console.error("Navigation error:", error);
      }
    }
    
    // Reset navigating state after a short delay
    setTimeout(() => {
      setIsNavigating(false);
      setMobileMenuOpen(false);
    }, 300);
  };

  const handleLogoClick = () => {
    handleNavigation("home");
  };

  const handleSignIn = () => {
    router.push("/login");
  };

  const handleCartClick = () => {
    router.push("/cart");
  };

  return (
    <header
      className={`sticky top-0 z-50 transition-all duration-500 ${
        scrolled
          ? "bg-white/95 backdrop-blur-lg shadow-lg py-2"
          : "bg-white/90 backdrop-blur-md shadow-sm py-4"
      }`}
    >
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between">
          {/* Logo with animation */}
          <div 
            className="group cursor-pointer flex items-center"
            onClick={handleLogoClick}
          >
            <Image
              src={logoImage}
              alt="Olyyo"
              width={160}
              height={40}
              className="group-hover:scale-105 transition-transform duration-300"
            />
            {/* <span className="ml-2 text-xs font-medium text-orange-600 bg-orange-50 px-2 py-1 rounded-full">
              Multi-Panel Platform
            </span> */}
          </div>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="md:hidden p-2 rounded-lg bg-gradient-to-r from-orange-50 to-red-50 hover:from-orange-100 hover:to-red-100 
                     transition-all duration-300 ripple-effect relative"
            disabled={isNavigating}
          >
            {isNavigating ? (
              <div className="w-6 h-6 border-2 border-orange-600 border-t-transparent rounded-full animate-spin"></div>
            ) : mobileMenuOpen ? (
              <X className="w-6 h-6 text-orange-600" />
            ) : (
              <Menu className="w-6 h-6 text-orange-600" />
            )}
          </button>

          {/* User Type Buttons - Desktop */}
          <div className="hidden md:flex items-center space-x-2">
            {userTypes.map((type) => (
              <button
                key={type.id}
                onClick={() => handleNavigation(type.id)}
                disabled={isNavigating}
                className={`flex items-center space-x-2 px-4 py-2.5 rounded-full transition-all duration-300 ripple-effect min-w-[100px] justify-center ${
                  userType === type.id
                    ? `bg-gradient-to-r ${type.color} text-white shadow-lg scale-105`
                    : "bg-white text-gray-700 hover:bg-gray-50 border border-gray-200 hover:border-gray-300"
                } ${isNavigating ? 'opacity-50 cursor-not-allowed' : ''}`}
              >
                <div
                  className={`transition-transform duration-300 ${
                    userType === type.id ? "scale-125" : ""
                  }`}
                >
                  {type.icon}
                </div>
                <span className="font-medium text-sm">{type.label}</span>
                {isNavigating && userType === type.id && (
                  <div className="ml-2 w-4 h-4 border-2 border-white border-t-transparent rounded-full animate-spin"></div>
                )}
              </button>
            ))}
          </div>

          {/* Cart & Profile - Desktop */}
          <div className="hidden md:flex items-center space-x-4">
            <button
              onClick={handleCartClick}
              className="relative p-2 hover:bg-orange-50 rounded-full transition-all duration-300 
                            hover:scale-110 group ripple-effect"
              disabled={isNavigating}
            >
              <ShoppingBag className="w-5 h-5 text-gray-700 group-hover:text-orange-600 transition-colors duration-300" />
              <span
                className="absolute -top-1 -right-1 bg-red-500 text-white text-xs rounded-full w-5 h-5 flex items-center justify-center 
                             group-hover:scale-125 group-hover:bg-red-600 transition-all duration-300"
              >
                3
              </span>
            </button>
            <button
              onClick={handleSignIn}
              disabled={isNavigating}
              className="bg-gradient-to-r from-orange-500 to-red-500 text-white px-6 py-2.5 rounded-full font-medium 
                           hover:shadow-lg hover:shadow-orange-500/40 transition-all duration-300 hover:scale-105 active:scale-95 
                           ripple-effect glow-on-hover flex items-center space-x-2"
            >
              <User className="w-4 h-4" />
              <span>Sign In</span>
              {isNavigating && (
                <div className="w-4 h-4 border-2 border-white border-t-transparent rounded-full animate-spin ml-2"></div>
              )}
            </button>
          </div>
        </div>

        {/* Mobile Menu */}
        {mobileMenuOpen && (
          <div className="md:hidden mt-4 p-4 bg-white rounded-2xl shadow-xl border border-orange-100 animate-slide-down">
            <div className="mb-4">
              <h3 className="text-sm font-semibold text-gray-500 mb-2 px-1">Switch Panel</h3>
              <div className="space-y-2">
                {userTypes.map((type) => (
                  <button
                    key={type.id}
                    onClick={() => handleNavigation(type.id)}
                    disabled={isNavigating}
                    className={`flex items-center justify-between w-full p-3 rounded-xl transition-all duration-300 ${
                      userType === type.id
                        ? `bg-gradient-to-r ${type.color} text-white`
                        : "bg-gray-50 hover:bg-gray-100 text-gray-700"
                    } ${isNavigating ? 'opacity-50 cursor-not-allowed' : ''}`}
                  >
                    <div className="flex items-center space-x-3">
                      {type.icon}
                      <span className="font-medium">{type.label}</span>
                    </div>
                    {isNavigating && userType === type.id ? (
                      <div className="w-4 h-4 border-2 border-white border-t-transparent rounded-full animate-spin"></div>
                    ) : (
                      <ChevronRight className="w-4 h-4" />
                    )}
                  </button>
                ))}
              </div>
            </div>
            
            <div className="pt-4 border-t border-gray-100">
              <div className="flex items-center space-x-4">
                <button
                  onClick={handleSignIn}
                  disabled={isNavigating}
                  className="flex-1 bg-gradient-to-r from-orange-500 to-red-500 text-white px-4 py-3 rounded-xl 
                               font-medium hover:shadow-lg transition-all duration-300 flex items-center justify-center space-x-2"
                >
                  <User className="w-4 h-4" />
                  <span>Sign In</span>
                </button>
                <button
                  onClick={handleCartClick}
                  disabled={isNavigating}
                  className="relative p-3 bg-gray-100 rounded-xl hover:bg-orange-50 transition-colors duration-300"
                >
                  <ShoppingBag className="w-5 h-5 text-gray-700" />
                  <span className="absolute -top-1 -right-1 bg-red-500 text-white text-xs rounded-full w-5 h-5 flex items-center justify-center">
                    3
                  </span>
                </button>
              </div>
              
              {isNavigating && (
                <div className="mt-4 text-center">
                  <div className="inline-flex items-center space-x-2 text-sm text-orange-600 bg-orange-50 px-3 py-1.5 rounded-full">
                    <div className="w-3 h-3 border-2 border-orange-600 border-t-transparent rounded-full animate-spin"></div>
                    <span>Navigating...</span>
                  </div>
                </div>
              )}
            </div>
          </div>
        )}
      </div>
      
      {/* Global Loading Overlay */}
      {isNavigating && (
        <div className="fixed inset-0 bg-black/10 backdrop-blur-sm z-40 md:hidden"></div>
      )}
    </header>
  );
}