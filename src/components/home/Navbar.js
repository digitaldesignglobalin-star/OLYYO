"use client";

import { useState, useEffect } from "react";
import { useRouter, usePathname } from "next/navigation";
import {
  ShoppingBag,
  Shield,
  Coffee,
  User,
  Truck,
  Menu,
  X,
  Home,
  ChevronRight,
  ChevronDown,
  MapPin,
} from "lucide-react";
import Image from "next/image";
import logoImage from "../../../public/olyyo-logo.png";

export default function Navbar({ onCartClick, cartCount }) {
  const [scrolled, setScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [isNavigating, setIsNavigating] = useState(false);
  const [portalDropdownOpen, setPortalDropdownOpen] = useState(false);
  const [currentUser, setCurrentUser] = useState(null);
  const [userDropdownOpen, setUserDropdownOpen] = useState(false);
  
  const router = useRouter();
  const pathname = usePathname();

  const userTypes = [
    { 
      id: "customer", 
      label: "customer", 
      icon: <User className="w-4 h-4" />, 
      path: "/",
      color: "from-orange-500 to-red-500"
    },
    { 
      id: "delivery", 
      label: "Delivery partner", 
      icon: <Truck className="w-4 h-4" />, 
      path: "/delivery",
      color: "from-indigo-500 to-blue-500"
    },
    { 
      id: "admin", 
      label: "Super admin (shop keeper)", 
      icon: <Shield className="w-4 h-4" />, 
      path: "/admin",
      color: "from-purple-500 to-pink-500"
    },
  ];

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener("scroll", handleScroll);

    // Load user session from localStorage
    if (typeof window !== "undefined") {
      const user = localStorage.getItem("olyyo_user");
      if (user) {
        try {
          setCurrentUser(JSON.parse(user));
        } catch (e) {
          console.error(e);
        }
      }
    }

    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const getCurrentRoleLabel = () => {
    if (pathname?.startsWith("/admin")) return "Super admin (shop keeper)";
    if (pathname?.startsWith("/delivery")) return "Delivery partner";
    return "customer";
  };

  const handleNavigation = async (type) => {
    if (isNavigating) return;
    
    setIsNavigating(true);
    
    // Find the route for the selected user type
    const selectedType = userTypes.find(t => t.id === type);
    if (selectedType && selectedType.path) {
      try {
        await router.push(selectedType.path);
      } catch (error) {
        console.error("Navigation error:", error);
      }
    }
    
    setTimeout(() => {
      setIsNavigating(false);
      setMobileMenuOpen(false);
    }, 300);
  };

  const handleLogoClick = () => {
    handleNavigation("customer");
  };

  const handleSignIn = () => {
    router.push("/login");
  };

  const handleLogout = () => {
    if (typeof window !== "undefined") {
      localStorage.removeItem("olyyo_token");
      localStorage.removeItem("olyyo_user");
    }
    setCurrentUser(null);
    setUserDropdownOpen(false);
    router.push("/");
  };

  const handleCartClick = () => {
    if (onCartClick) {
      onCartClick();
    } else {
      router.push("/");
    }
  };

  const isCustomerPage = pathname === "/" || pathname === "/user";
  const displayCartCount = cartCount !== undefined ? cartCount : 3;

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
          {/* Logo & Location Selector */}
          <div className="flex items-center space-x-6">
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
            </div>
            
            {isCustomerPage && (
              <div className="hidden lg:flex items-center space-x-2 px-3 py-1.5 bg-orange-50 hover:bg-orange-100 text-gray-700 rounded-full cursor-pointer transition-colors text-sm">
                <MapPin className="w-4 h-4 text-orange-500" />
                <span className="font-medium">Deliver to</span>
                <span className="text-gray-600">Connaught Place, Delhi</span>
                <ChevronDown className="w-3.5 h-3.5 text-gray-500" />
              </div>
            )}
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

          {/* Cart, Profile & Switch Dropdown - Desktop */}
          <div className="hidden md:flex items-center space-x-4">
            {/* Dropdown Role Selector */}
            <div className="relative">
              <button 
                onClick={() => setPortalDropdownOpen(!portalDropdownOpen)}
                className="flex items-center space-x-2 px-4 py-2.5 bg-gradient-to-r from-orange-500 to-red-500 text-white rounded-full font-medium shadow-md hover:shadow-lg transition-all duration-300 hover:scale-105 active:scale-95"
              >
                <Shield className="w-4 h-4" />
                <span className="text-sm font-medium">{getCurrentRoleLabel()}</span>
                <ChevronDown className={`w-4 h-4 transition-transform duration-300 ${portalDropdownOpen ? 'rotate-180' : ''}`} />
              </button>
              
              {portalDropdownOpen && (
                <div className="absolute right-0 mt-2 w-64 bg-white border border-gray-100 rounded-2xl shadow-xl z-50 animate-slide-down py-2">
                  <div className="px-3 py-1.5 border-b border-gray-100 mb-1">
                    <span className="text-xs font-semibold text-gray-400 uppercase tracking-wider">Switch Portal</span>
                  </div>
                  <div className="px-2 space-y-1">
                    {userTypes.map((type) => (
                      <button 
                        key={type.id}
                        onClick={() => {
                          handleNavigation(type.id);
                          setPortalDropdownOpen(false);
                        }}
                        className={`w-full flex items-center space-x-2 px-3 py-2.5 text-sm rounded-xl transition-colors text-left ${
                          getCurrentRoleLabel() === type.label 
                            ? "bg-orange-50 text-orange-600 font-semibold" 
                            : "text-gray-700 hover:bg-gray-50"
                        }`}
                      >
                        {type.icon}
                        <span>{type.label}</span>
                      </button>
                    ))}
                  </div>
                </div>
              )}
            </div>

            <button
              onClick={handleCartClick}
              className="relative p-2 hover:bg-orange-50 rounded-full transition-all duration-300 
                            hover:scale-110 group ripple-effect"
              disabled={isNavigating}
            >
              <ShoppingBag className="w-5 h-5 text-gray-700 group-hover:text-orange-600 transition-colors duration-300" />
              {displayCartCount > 0 && (
                <span
                  className="absolute -top-1 -right-1 bg-red-500 text-white text-xs rounded-full w-5 h-5 flex items-center justify-center 
                               group-hover:scale-125 group-hover:bg-red-600 transition-all duration-300"
                >
                  {displayCartCount}
                </span>
              )}
            </button>

            {currentUser ? (
              <div className="relative">
                <button
                  onClick={() => setUserDropdownOpen(!userDropdownOpen)}
                  className="bg-gray-100 hover:bg-orange-50 text-gray-700 px-5 py-2.5 rounded-full font-semibold border border-gray-200 hover:border-orange-500/30 flex items-center space-x-2 transition-all cursor-pointer"
                >
                  <div className="w-6 h-6 rounded-full bg-gradient-to-r from-orange-500 to-red-500 text-white flex items-center justify-center text-xs font-bold uppercase">
                    {currentUser.name ? currentUser.name[0] : 'U'}
                  </div>
                  <span className="text-sm">{currentUser.name || 'User'}</span>
                  <ChevronDown className={`w-3.5 h-3.5 text-gray-500 transition-transform duration-300 ${userDropdownOpen ? 'rotate-180' : ''}`} />
                </button>

                {userDropdownOpen && (
                  <div className="absolute right-0 mt-2 w-48 bg-white border border-gray-100 rounded-2xl shadow-xl z-50 py-1.5 animate-slide-down">
                    <div className="px-4 py-2 border-b border-gray-50 mb-1 text-xs text-gray-400 font-semibold">
                      Role: <span className="text-orange-600 font-bold uppercase">{currentUser.role}</span>
                    </div>
                    <button
                      onClick={handleLogout}
                      className="w-full flex items-center space-x-2 px-4 py-2.5 text-sm text-red-600 hover:bg-red-50 transition-colors text-left"
                    >
                      <User className="w-4 h-4" />
                      <span>Log Out</span>
                    </button>
                  </div>
                )}
              </div>
            ) : (
              <button
                onClick={handleSignIn}
                disabled={isNavigating}
                className="bg-gradient-to-r from-orange-500 to-red-500 text-white px-6 py-2.5 rounded-full font-medium 
                             hover:shadow-lg hover:shadow-orange-500/40 transition-all duration-300 hover:scale-105 active:scale-95 
                             ripple-effect glow-on-hover flex items-center space-x-2 cursor-pointer"
              >
                <User className="w-4 h-4" />
                <span>Sign In</span>
                {isNavigating && (
                  <div className="w-4 h-4 border-2 border-white border-t-transparent rounded-full animate-spin ml-2"></div>
                )}
              </button>
            )}
          </div>
        </div>

        {/* Mobile Menu */}
        {mobileMenuOpen && (
          <div className="md:hidden mt-4 p-4 bg-white rounded-2xl shadow-xl border border-orange-100 animate-slide-down">
            <div className="mb-4">
              <h3 className="text-sm font-semibold text-gray-500 mb-2 px-1">Switch Portal</h3>
              <div className="space-y-2">
                {userTypes.map((type) => (
                  <button
                    key={type.id}
                    onClick={() => handleNavigation(type.id)}
                    disabled={isNavigating}
                    className={`flex items-center justify-between w-full p-3 rounded-xl transition-all duration-300 ${
                      getCurrentRoleLabel() === type.label
                        ? `bg-gradient-to-r ${type.color} text-white`
                        : "bg-gray-50 hover:bg-gray-100 text-gray-700"
                    } ${isNavigating ? 'opacity-50 cursor-not-allowed' : ''}`}
                  >
                    <div className="flex items-center space-x-3">
                      {type.icon}
                      <span className="font-medium">{type.label}</span>
                    </div>
                    {isNavigating ? (
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
                {currentUser ? (
                  <button
                    onClick={handleLogout}
                    className="flex-1 bg-gradient-to-r from-red-500 to-red-600 text-white px-4 py-3 rounded-xl 
                                 font-medium hover:shadow-lg transition-all duration-300 flex items-center justify-center space-x-2 cursor-pointer"
                  >
                    <User className="w-4 h-4" />
                    <span>Log Out</span>
                  </button>
                ) : (
                  <button
                    onClick={handleSignIn}
                    disabled={isNavigating}
                    className="flex-1 bg-gradient-to-r from-orange-500 to-red-500 text-white px-4 py-3 rounded-xl 
                                 font-medium hover:shadow-lg transition-all duration-300 flex items-center justify-center space-x-2 cursor-pointer"
                  >
                    <User className="w-4 h-4" />
                    <span>Sign In</span>
                  </button>
                )}
                <button
                  onClick={handleCartClick}
                  disabled={isNavigating}
                  className="relative p-3 bg-gray-100 rounded-xl hover:bg-orange-50 transition-colors duration-300 cursor-pointer"
                >
                  <ShoppingBag className="w-5 h-5 text-gray-700" />
                  {displayCartCount > 0 && (
                    <span className="absolute -top-1 -right-1 bg-red-500 text-white text-xs rounded-full w-5 h-5 flex items-center justify-center">
                      {displayCartCount}
                    </span>
                  )}
                </button>
              </div>
            </div>
          </div>
        )}
      </div>
      
      {isNavigating && (
        <div className="fixed inset-0 bg-black/10 backdrop-blur-sm z-40 md:hidden"></div>
      )}
    </header>
  );
}