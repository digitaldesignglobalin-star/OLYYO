"use client";

import { useState, useEffect } from "react";
import {
  Truck,
  Package,
  Smartphone,
  Download,
  MessageCircle,
  Phone,
  Mail,
  CheckCircle,
  MapPin,
  Clock,
  DollarSign,
  Users,
  Shield,
  Award,
  ChevronRight,
  Send,
  User,
  Smartphone as PhoneIcon,
  MessageSquare,
  ExternalLink,
  Star,
  TrendingUp,
  Calendar,
  CreditCard,
  Heart,
  ThumbsUp,
  Globe,
  ShieldCheck,
  Zap,
  Menu,
  X,
  Search,
  Flame,
  Home,
  Target,
  Clock as ClockIcon,
  Truck as TruckIcon,
  Zap as ZapIcon,
  Shield as ShieldIcon,
  Calendar as CalendarIcon,
  TrendingUp as TrendingUpIcon,
  QrCode,
  IndianRupee,
} from "lucide-react";
import Navbar from "@/components/home/Navbar";

export default function DeliveryPartnerPage() {
  const [formData, setFormData] = useState({
    name: "",
    phone: "",
    email: "",
    city: "",
    vehicle: "",
    experience: "",
    referralCode: "",
  });

  const [submitted, setSubmitted] = useState(false);
  const [loading, setLoading] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [showConsole, setShowConsole] = useState(false);
  const [activeOrder, setActiveOrder] = useState(null);
  const [sessionEarnings, setSessionEarnings] = useState(0);

  // Load and sync live active orders
  useEffect(() => {
    if (typeof window !== "undefined") {
      const savedOrder = localStorage.getItem("olyyo_active_order");
      if (savedOrder) {
        try {
          const parsed = JSON.parse(savedOrder);
          setActiveOrder(parsed);
          // Auto-open console if there's an assigned order
          if (parsed.status === "out_for_delivery" || parsed.status === "assigned") {
            setShowConsole(true);
          }
        } catch (e) {}
      }

      const handleStorageChange = (e) => {
        if (e.key === "olyyo_active_order") {
          if (e.newValue) {
            try {
              const parsed = JSON.parse(e.newValue);
              setActiveOrder(parsed);
              if (parsed.status === "out_for_delivery") setShowConsole(true);
            } catch (err) {}
          } else {
            setActiveOrder(null);
          }
        }
      };

      const interval = setInterval(() => {
        const order = localStorage.getItem("olyyo_active_order");
        if (order) {
          try {
            const parsed = JSON.parse(order);
            setActiveOrder(prev => {
              if (!prev || prev.status !== parsed.status) return parsed;
              return prev;
            });
          } catch (err) {}
        } else {
          setActiveOrder(null);
        }
      }, 1000);

      window.addEventListener("storage", handleStorageChange);
      return () => {
        window.removeEventListener("storage", handleStorageChange);
        clearInterval(interval);
      };
    }
  }, []);

  const handleUpdateDeliveryStatus = (newStatus) => {
    if (!activeOrder) return;
    const updated = { ...activeOrder, status: newStatus };
    setActiveOrder(updated);
    if (typeof window !== "undefined") {
      localStorage.setItem("olyyo_active_order", JSON.stringify(updated));
    }
    if (newStatus === "delivered") {
      const earnings = Math.round(parseFloat(activeOrder.totalAmount) * 0.12);
      setSessionEarnings(prev => prev + earnings);
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    
    // Simulate API call
    await new Promise(resolve => setTimeout(resolve, 1500));
    
    // Create WhatsApp message with download links
    const message = `Hello ${formData.name}! Thank you for applying to become an OLYYO Delivery Partner.

📱 Download Links:
• Android App: https://play.google.com/store/apps/details?id=com.olyyo.delivery
• iOS App: https://apps.apple.com/app/olyyo-delivery-partner

📞 Contact Information:
• Support: +1-800-OLYYO-123
• Manager: Rajesh Kumar (+91-9876543210)
• Email: partners@olyyo.com

📍 Office Address:
OLYYO Headquarters, 123 Business Park,
New Delhi, India

Next Steps:
1. Download the app
2. Complete your profile
3. Attend online orientation
4. Start earning!

We'll contact you within 24 hours to complete the verification process.`;
    
    // Encode the message for WhatsApp
    const whatsappUrl = `https://wa.me/?text=${encodeURIComponent(message)}`;
    
    // Create SMS message (simplified version)
    const smsMessage = `Welcome ${formData.name}! Download OLYYO Delivery Partner App:
Android: https://play.google.com/store/apps/details?id=com.olyyo.delivery
iOS: https://apps.apple.com/app/olyyo-delivery-partner
Contact: +1-800-OLYYO-123`;
    const smsUrl = `sms:?body=${encodeURIComponent(smsMessage)}`;
    
    setSubmitted({
      whatsappUrl,
      smsUrl,
      contactInfo: {
        phone: "+1-800-OLYYO-123",
        whatsapp: "+91-9876543210",
        email: "partners@olyyo.com",
        manager: "Rajesh Kumar",
      }
    });
    setLoading(false);
  };

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const benefits = [
    {
      icon: <IndianRupee className="w-8 h-8" />,
      title: "High Earnings",
      description: "Earn up to ₹1500 per day with tips and incentives",
    },
    {
      icon: <Clock className="w-8 h-8" />,
      title: "Flexible Hours",
      description: "Work whenever you want, full-time or part-time",
    },
    {
      icon: <Shield className="w-8 h-8" />,
      title: "Insurance Coverage",
      description: "Accident and health insurance for all partners",
    },
    {
      icon: <Award className="w-8 h-8" />,
      title: "Bonus Programs",
      description: "Weekly bonuses and performance rewards",
    },
    {
      icon: <Package className="w-8 h-8" />,
      title: "Free Gear",
      description: "Get delivery bags, uniforms, and smartphone",
    },
    {
      icon: <TrendingUp className="w-8 h-8" />,
      title: "Career Growth",
      description: "Opportunities to become team leaders and managers",
    },
  ];

  const requirements = [
    "Valid Driving License",
    "Smartphone with internet",
    "18+ years of age",
    "Bank account for payments",
    "Vehicle (Bike/Scooter/Car)",
  ];

  const playStoreUrl = "https://play.google.com/store/apps/details?id=com.olyyo.delivery";

  return (
    <div className="min-h-screen bg-gradient-to-b from-orange-50 to-white text-gray-900">
      {/* Navigation */}
      {/* <nav className="fixed top-0 w-full bg-white/90 backdrop-blur-lg border-b border-orange-100 z-50 shadow-sm">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-16">
            <div className="flex items-center">
              <div className="flex items-center space-x-2">
                <div className="w-10 h-10 bg-gradient-to-r from-orange-500 to-red-500 rounded-lg flex items-center justify-center">
                  <Truck className="w-6 h-6 text-white" />
                </div>
                <span className="text-xl font-bold text-orange-600">OLYYO Delivery</span>
              </div>
            </div>

            <div className="hidden md:flex items-center space-x-8">
              <a href="#benefits" className="text-gray-600 hover:text-orange-600 transition-colors">
                Benefits
              </a>
              <a href="#requirements" className="text-gray-600 hover:text-orange-600 transition-colors">
                Requirements
              </a>
              <a href="#earnings" className="text-gray-600 hover:text-orange-600 transition-colors">
                Earnings
              </a>
              <a href="#contact" className="text-gray-600 hover:text-orange-600 transition-colors">
                Contact
              </a>
              <button
                onClick={() => document.getElementById('applyForm').scrollIntoView({ behavior: 'smooth' })}
                className="px-6 py-2 bg-gradient-to-r from-orange-500 to-red-500 text-white rounded-lg font-medium hover:shadow-lg hover:shadow-orange-200 transition-all duration-300"
              >
                Apply Now
              </button>
            </div>

            <button
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              className="md:hidden p-2 rounded-lg hover:bg-orange-50"
            >
              {isMobileMenuOpen ? <X className="w-6 h-6 text-gray-700" /> : <Menu className="w-6 h-6 text-gray-700" />}
            </button>
          </div>

          {isMobileMenuOpen && (
            <div className="md:hidden pb-4 border-t border-orange-100 mt-2">
              <div className="flex flex-col space-y-4 pt-4">
                <a href="#benefits" className="text-gray-600 hover:text-orange-600 transition-colors">
                  Benefits
                </a>
                <a href="#requirements" className="text-gray-600 hover:text-orange-600 transition-colors">
                  Requirements
                </a>
                <a href="#earnings" className="text-gray-600 hover:text-orange-600 transition-colors">
                  Earnings
                </a>
                <a href="#contact" className="text-gray-600 hover:text-orange-600 transition-colors">
                  Contact
                </a>
                <button
                  onClick={() => {
                    document.getElementById('applyForm').scrollIntoView({ behavior: 'smooth' });
                    setIsMobileMenuOpen(false);
                  }}
                  className="px-6 py-2 bg-gradient-to-r from-orange-500 to-red-500 text-white rounded-lg font-medium"
                >
                  Apply Now
                </button>
              </div>
            </div>
          )}
        </div>
      </nav> */}

      <Navbar/>

      {/* Live Delivery Console Toggle Banner */}
      {activeOrder && (activeOrder.status === "out_for_delivery" || activeOrder.status === "preparing" || activeOrder.status === "pending") && (
        <div className="sticky top-16 z-40 bg-gradient-to-r from-orange-600 to-red-600 text-white py-3 px-4 shadow-xl">
          <div className="max-w-7xl mx-auto flex items-center justify-between">
            <div className="flex items-center gap-3">
              <span className="relative flex h-3 w-3">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-white opacity-75"></span>
                <span className="relative inline-flex rounded-full h-3 w-3 bg-white"></span>
              </span>
              <span className="font-black text-sm tracking-wide">LIVE ORDER ASSIGNED — Order #{activeOrder.id}</span>
            </div>
            <button
              onClick={() => setShowConsole(!showConsole)}
              className="px-4 py-1.5 bg-white/20 hover:bg-white/30 border border-white/30 rounded-lg text-xs font-black transition-all"
            >
              {showConsole ? "Hide Console ▲" : "Open Delivery Console ▼"}
            </button>
          </div>
        </div>
      )}

      {/* Live Delivery Console Panel */}
      {showConsole && activeOrder && (
        <div className="bg-gradient-to-br from-gray-950 via-gray-900 to-black text-white border-b border-gray-800 shadow-2xl">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
            {/* Console Header */}
            <div className="flex flex-col md:flex-row items-start md:items-center justify-between gap-4 mb-8">
              <div>
                <div className="flex items-center gap-3 mb-2">
                  <div className="w-10 h-10 bg-gradient-to-r from-orange-500 to-red-500 rounded-xl flex items-center justify-center shadow-lg">
                    <Truck className="w-5 h-5 text-white" />
                  </div>
                  <div>
                    <h2 className="text-2xl font-black text-white tracking-tight">Live Delivery Console</h2>
                    <p className="text-gray-400 text-sm font-medium">Rider: राजेश कुमार (Rajesh Kumar) • OLYYO Partner ID: RJ-4821</p>
                  </div>
                </div>
              </div>

              {/* Session Earnings */}
              <div className="bg-gray-900 border border-gray-800 rounded-2xl px-6 py-4 text-center">
                <p className="text-xs text-gray-500 uppercase tracking-widest font-bold mb-1">Session Earnings</p>
                <p className="text-3xl font-black text-transparent bg-clip-text bg-gradient-to-r from-green-400 to-emerald-500">
                  ₹{sessionEarnings}
                </p>
              </div>
            </div>

            {/* Order Details Card */}
            <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 mb-8">
              {/* Order Info */}
              <div className="lg:col-span-2 bg-gray-900 border border-gray-800 rounded-3xl p-6">
                <div className="flex justify-between items-start mb-5">
                  <div>
                    <span className="text-xs font-black text-orange-400 bg-orange-500/10 border border-orange-500/20 px-3 py-1 rounded-full uppercase tracking-widest">
                      Active Delivery
                    </span>
                    <h3 className="text-xl font-black text-white mt-2">Order #{activeOrder.id}</h3>
                    <p className="text-gray-400 text-sm mt-1">From: <strong className="text-gray-200">{activeOrder.restaurant}</strong></p>
                  </div>
                  <div className="text-right bg-black/40 border border-gray-800 rounded-xl px-4 py-3">
                    <p className="text-xs text-gray-500 font-bold">Order Total</p>
                    <p className="text-xl font-black text-orange-400">₹{activeOrder.totalAmount}</p>
                    <p className="text-xs text-green-400 font-bold mt-1">
                      Your cut: ₹{Math.round(parseFloat(activeOrder.totalAmount) * 0.12)}
                    </p>
                  </div>
                </div>

                {/* Items list */}
                <div className="bg-black/30 rounded-2xl border border-gray-900 p-4 mb-5 divide-y divide-gray-900 max-h-36 overflow-y-auto">
                  {activeOrder.items?.map((item) => (
                    <div key={item.id} className="py-2.5 flex justify-between text-sm">
                      <span className="font-semibold text-gray-200">{item.name} <span className="text-gray-500">×{item.quantity}</span></span>
                      <span className="font-bold text-gray-300">₹{item.price * item.quantity}</span>
                    </div>
                  ))}
                </div>

                {/* Delivery Info */}
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 text-sm">
                  <div className="bg-gray-950/80 border border-gray-800 rounded-xl p-3.5">
                    <p className="text-gray-500 text-xs font-bold uppercase tracking-wider mb-1.5">📍 Drop Location</p>
                    <p className="text-gray-200 font-semibold">{activeOrder.address}</p>
                  </div>
                  <div className="bg-gray-950/80 border border-gray-800 rounded-xl p-3.5">
                    <p className="text-gray-500 text-xs font-bold uppercase tracking-wider mb-1.5">💳 Payment Method</p>
                    <p className="text-orange-400 font-black uppercase">{activeOrder.paymentMethod}</p>
                    {activeOrder.paymentMethod === "cod" && (
                      <p className="text-yellow-400 text-xs font-bold mt-1">⚠️ Collect ₹{activeOrder.totalAmount} in cash</p>
                    )}
                  </div>
                </div>
              </div>

              {/* Route Map */}
              <div className="bg-gray-900 border border-gray-800 rounded-3xl p-5 flex flex-col">
                <p className="text-xs text-gray-500 font-bold uppercase tracking-wider mb-3 flex items-center gap-2">
                  <span className="w-2 h-2 bg-green-500 rounded-full animate-pulse inline-block"></span>
                  Route Simulator
                </p>
                <div className="flex-1 bg-black/40 rounded-2xl border border-gray-900 overflow-hidden relative min-h-[200px]">
                  <svg className="w-full h-full" viewBox="0 0 300 200" fill="none">
                    {/* Grid */}
                    {[40, 80, 120, 160].map(y => (
                      <line key={y} x1="0" y1={y} x2="300" y2={y} stroke="#1f2937" strokeWidth="1" />
                    ))}
                    {[60, 120, 180, 240].map(x => (
                      <line key={x} x1={x} y1="0" x2={x} y2="200" stroke="#1f2937" strokeWidth="1" />
                    ))}

                    {/* Route path */}
                    <path d="M 30 160 C 80 160, 120 60, 180 60 C 220 60, 250 160, 270 160"
                      stroke="#374151" strokeWidth="5" strokeLinecap="round" />
                    <path d="M 30 160 C 80 160, 120 60, 180 60 C 220 60, 250 160, 270 160"
                      stroke="url(#delivery-glow)" strokeWidth="3" strokeLinecap="round" strokeDasharray="6 5" />
                    <defs>
                      <linearGradient id="delivery-glow" x1="0%" y1="0%" x2="100%" y2="0%">
                        <stop offset="0%" stopColor="#f97316" />
                        <stop offset="100%" stopColor="#ef4444" />
                      </linearGradient>
                    </defs>

                    {/* Restaurant pin */}
                    <circle cx="30" cy="160" r="8" fill="#f97316" fillOpacity="0.3" className="animate-ping" />
                    <circle cx="30" cy="160" r="5" fill="#f97316" stroke="white" strokeWidth="1.5" />
                    <text x="30" y="178" fill="#f97316" fontSize="7" fontWeight="bold" textAnchor="middle">KITCHEN</text>

                    {/* Home pin */}
                    <circle cx="270" cy="160" r="8" fill="#10b981" fillOpacity="0.3" />
                    <circle cx="270" cy="160" r="5" fill="#10b981" stroke="white" strokeWidth="1.5" />
                    <text x="270" y="178" fill="#10b981" fontSize="7" fontWeight="bold" textAnchor="middle">HOME</text>

                    {/* Rider position */}
                    <circle cx={activeOrder.status === "out_for_delivery" ? "150" : "30"} cy={activeOrder.status === "out_for_delivery" ? "80" : "160"} r="12" fill="#ef4444" fillOpacity="0.25" className="animate-pulse" />
                    <circle cx={activeOrder.status === "out_for_delivery" ? "150" : "30"} cy={activeOrder.status === "out_for_delivery" ? "80" : "160"} r="7" fill="#ef4444" stroke="white" strokeWidth="2" />
                    <text x={activeOrder.status === "out_for_delivery" ? "150" : "30"} y={activeOrder.status === "out_for_delivery" ? "64" : "144"} fill="#ef4444" fontSize="8" fontWeight="extrabold" textAnchor="middle">YOU</text>
                  </svg>
                </div>
              </div>
            </div>

            {/* Action Controls */}
            <div className="bg-gray-900 border border-gray-800 rounded-3xl p-6">
              <h3 className="text-sm font-black text-gray-400 uppercase tracking-widest mb-5">Delivery Actions</h3>

              {activeOrder.status === "preparing" && (
                <div className="flex flex-col sm:flex-row items-center gap-4">
                  <div className="flex-1 bg-yellow-500/10 border border-yellow-500/20 rounded-2xl p-4 text-center">
                    <p className="text-yellow-400 font-bold text-sm">🍳 Food is being prepared — Head to the restaurant</p>
                    <p className="text-gray-500 text-xs mt-1">{activeOrder.restaurant} • Connaught Place, Delhi</p>
                  </div>
                  <button
                    onClick={() => handleUpdateDeliveryStatus("out_for_delivery")}
                    className="w-full sm:w-auto px-8 py-4 bg-gradient-to-r from-orange-500 to-red-500 hover:from-orange-600 hover:to-red-600 text-white font-black rounded-2xl transition-all shadow-lg shadow-orange-500/20 text-sm"
                  >
                    🛵 Picked Up — Start Delivery
                  </button>
                </div>
              )}

              {activeOrder.status === "out_for_delivery" && (
                <div className="flex flex-col sm:flex-row items-center gap-4">
                  <div className="flex-1 bg-orange-500/10 border border-orange-500/20 rounded-2xl p-4 text-center">
                    <p className="text-orange-400 font-bold text-sm">🛵 You are on the way — Deliver to customer</p>
                    <p className="text-gray-500 text-xs mt-1">{activeOrder.address}</p>
                  </div>
                  <button
                    onClick={() => handleUpdateDeliveryStatus("delivered")}
                    className="w-full sm:w-auto px-8 py-4 bg-gradient-to-r from-green-500 to-emerald-600 hover:from-green-600 hover:to-emerald-700 text-white font-black rounded-2xl transition-all shadow-lg shadow-green-500/20 text-sm animate-pulse"
                  >
                    ✅ Mark as Delivered
                  </button>
                </div>
              )}

              {activeOrder.status === "delivered" && (
                <div className="flex flex-col sm:flex-row items-center gap-4">
                  <div className="flex-1 bg-green-500/10 border border-green-500/20 rounded-2xl p-4 text-center">
                    <p className="text-green-400 font-black text-base">🎉 Delivery Complete!</p>
                    <p className="text-gray-400 text-sm mt-1">You earned <strong className="text-green-400">₹{Math.round(parseFloat(activeOrder.totalAmount) * 0.12)}</strong> for this delivery</p>
                  </div>
                  <button
                    onClick={() => { setShowConsole(false); }}
                    className="w-full sm:w-auto px-8 py-4 bg-gray-800 hover:bg-gray-700 text-white font-black rounded-2xl transition-all text-sm"
                  >
                    Close Console
                  </button>
                </div>
              )}

              {activeOrder.status === "pending" && (
                <div className="bg-blue-500/10 border border-blue-500/20 rounded-2xl p-4 text-center">
                  <p className="text-blue-400 font-bold text-sm">⏳ Waiting for shop keeper to accept the order...</p>
                </div>
              )}
            </div>
          </div>
        </div>
      )}


      <div className="pt-24 pb-16 px-4 sm:px-6 lg:px-8 bg-gradient-to-b from-orange-500/5 to-transparent">
        <div className="max-w-7xl mx-auto">
          <div className="flex flex-col lg:flex-row items-center justify-between gap-12">
            {/* Left Column - Text Content */}
            <div className="lg:w-1/2 text-left">
              {/* Delivery Partner Badge */}
              <div className="inline-flex items-center px-4 py-2 bg-orange-100 text-orange-700 rounded-full text-sm font-medium mb-6">
                <ZapIcon className="w-4 h-4 mr-2" />
                EARN WHILE YOU DELIVER
              </div>
              
              <h1 className="text-4xl md:text-6xl font-bold text-gray-900 mb-6">
                Start Earning <span className="bg-gradient-to-r from-orange-500 to-red-500 bg-clip-text text-transparent">
                ₹50,000/Month
                </span>
              </h1>
              
              <p className="text-xl text-gray-600 mb-8 max-w-2xl">
                Become an OLYYO Delivery Partner - India&apos;s fastest growing delivery platform. 
                Work on your schedule, earn great money, and build your career.
              </p>

              {/* Quick Stats for Partners */}
              <div className="grid grid-cols-2 gap-6 mb-8">
                <div className="flex items-center space-x-3">
                  <div className="w-10 h-10 bg-gradient-to-r from-orange-500/10 to-red-500/10 rounded-lg flex items-center justify-center">
                    <ClockIcon className="w-5 h-5 text-orange-500" />
                  </div>
                  <div>
                    <div className="text-lg font-bold text-orange-600">24/7</div>
                    <div className="text-sm text-gray-600">Flexible Hours</div>
                  </div>
                </div>
                
                <div className="flex items-center space-x-3">
                  <div className="w-10 h-10 bg-gradient-to-r from-orange-500/10 to-red-500/10 rounded-lg flex items-center justify-center">
                    <ShieldIcon className="w-5 h-5 text-orange-500" />
                  </div>
                  <div>
                    <div className="text-lg font-bold text-orange-600">100%</div>
                    <div className="text-sm text-gray-600">Insurance Covered</div>
                  </div>
                </div>
                
                <div className="flex items-center space-x-3">
                  <div className="w-10 h-10 bg-gradient-to-r from-orange-500/10 to-red-500/10 rounded-lg flex items-center justify-center">
                    <CalendarIcon className="w-5 h-5 text-orange-500" />
                  </div>
                  <div>
                    <div className="text-lg font-bold text-orange-600">7 Days</div>
                    <div className="text-sm text-gray-600">Weekly Payments</div>
                  </div>
                </div>
                
                <div className="flex items-center space-x-3">
                  <div className="w-10 h-10 bg-gradient-to-r from-orange-500/10 to-red-500/10 rounded-lg flex items-center justify-center">
                    <TrendingUpIcon className="w-5 h-5 text-orange-500" />
                  </div>
                  <div>
                    <div className="text-lg font-bold text-orange-600">₹5,000+</div>
                    <div className="text-sm text-gray-600">Weekly Bonus</div>
                  </div>
                </div>
              </div>

              <button
                onClick={() => document.getElementById('applyForm').scrollIntoView({ behavior: 'smooth' })}
                className="px-8 py-4 bg-gradient-to-r from-orange-500 to-red-500 text-white text-lg font-bold rounded-xl hover:shadow-2xl hover:shadow-orange-200 hover:scale-105 transition-all duration-300"
              >
                Apply Now & Start Earning
                <ChevronRight className="w-5 h-5 inline ml-2" />
              </button>
            </div>

            {/* Right Column - QR Code & Download Card */}
            <div className="lg:w-1/2 flex justify-center">
              <div className="bg-white border-2 border-orange-200 rounded-2xl p-8 shadow-xl max-w-md">
                <div className="text-center mb-6">
                  <div className="inline-flex items-center justify-center w-16 h-16 bg-gradient-to-r from-orange-500 to-red-500 rounded-2xl mb-4">
                    <Smartphone className="w-8 h-8 text-white" />
                  </div>
                  <h3 className="text-2xl font-bold text-gray-900 mb-2">
                    Download the App Now!
                  </h3>
                  <p className="text-gray-600">
                    Scan QR code to download OLYYO Delivery Partner App
                  </p>
                </div>

                {/* QR Code Container - Black QR Code */}
                <div className="relative mb-6">
                  <div className="bg-white p-6 rounded-2xl border-2 border-gray-300 shadow-lg">
                    <div className="bg-white rounded-lg p-4 relative overflow-hidden border border-gray-200">
                      {/* Black QR Code */}
                      <div className="relative h-full flex items-center justify-center">
                        <div className="grid grid-cols-11 gap-1">
                          {/* QR Pattern - Black Squares */}
                          {Array.from({ length: 121 }).map((_, i) => {
                            const row = Math.floor(i / 11);
                            const col = i % 11;
                            
                            // Create QR pattern (position markers and data)
                            const isCorner = (
                              (row <= 2 && col <= 2) || 
                              (row <= 2 && col >= 8) || 
                              (row >= 8 && col <= 2)
                            );
                            
                            const isPattern = isCorner || (
                              row >= 4 && row <= 6 && col >= 4 && col <= 6
                            ) || (
                              ((i * 31 + 17) % 7 > 3) && !isCorner
                            );
                            
                            return (
                              <div
                                key={i}
                                className={`w-2 h-2 ${isPattern ? 'bg-black' : 'bg-white'}`}
                              />
                            );
                          })}
                        </div>
                        
                        {/* QR Code Logo */}
                        <div className="absolute inset-0 flex items-center justify-center">
                          {/* <div className="w-12 h-12 bg-gradient-to-r from-orange-500 to-red-500 rounded-lg flex items-center justify-center border-2 border-white">
                            <Truck className="w-6 h-6 text-white" />
                          </div> */}
                        </div>
                      </div>
                    </div>
                  </div>
                  
                  {/* Scan Animation - Black */}
                  <div className="absolute top-0 left-1/2 transform -translate-x-1/2 w-full h-1 bg-gradient-to-r from-transparent via-black to-transparent animate-scan rounded-full opacity-60"></div>
                </div>

                {/* Download Instructions */}
                <div className="space-y-4">
                  <div className="flex items-center space-x-3 p-3 bg-orange-50 rounded-lg">
                    <div className="w-10 h-10 bg-gradient-to-r from-orange-500 to-red-500 rounded-lg flex items-center justify-center">
                      <QrCode className="w-5 h-5 text-white" />
                    </div>
                    <div>
                      <div className="font-medium text-gray-900">Scan with Phone Camera</div>
                      <div className="text-sm text-gray-600">Point your camera at the QR code</div>
                    </div>
                  </div>
                  
                  <div className="flex items-center space-x-3 p-3 bg-orange-50 rounded-lg">
                    <div className="w-10 h-10 bg-gradient-to-r from-green-500 to-emerald-500 rounded-lg flex items-center justify-center">
                      <Download className="w-5 h-5 text-white" />
                    </div>
                    <div>
                      <div className="font-medium text-gray-900">Install App</div>
                      <div className="text-sm text-gray-600">Click download link in browser</div>
                    </div>
                  </div>

                  {/* Direct Download Button */}
                  <a
                    href={playStoreUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center justify-center space-x-2 w-full p-4 bg-gradient-to-r from-orange-500 to-red-500 text-white rounded-xl hover:shadow-lg hover:shadow-orange-200 transition-all duration-300"
                  >
                    <Smartphone className="w-5 h-5" />
                    <span className="font-bold">Download Directly</span>
                  </a>
                  
                  <div className="text-center">
                    <p className="text-sm text-gray-500">
                      Available on Google Play Store
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Add CSS animation for QR scan */}
      <style jsx>{`
        @keyframes scan {
          0% {
            top: 0%;
            opacity: 0.3;
          }
          50% {
            opacity: 0.8;
          }
          100% {
            top: 100%;
            opacity: 0.3;
          }
        }
        
        .animate-scan {
          animation: scan 2s ease-in-out infinite;
        }
      `}</style>

      {/* Benefits Section */}
      <div id="benefits" className="py-16 px-4 sm:px-6 lg:px-8 bg-orange-50/50">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 text-center mb-12">
            Why Choose OLYYO?
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {benefits.map((benefit, index) => (
              <div
                key={index}
                className="bg-white border border-orange-100 rounded-2xl p-6 hover:border-orange-300 hover:shadow-lg transition-all duration-300"
              >
                <div className="text-orange-500 mb-4">
                  {benefit.icon}
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-3">
                  {benefit.title}
                </h3>
                <p className="text-gray-600">
                  {benefit.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Requirements Section */}
      <div id="requirements" className="py-16 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 text-center mb-12">
            Requirements to Join
          </h2>
          <div className="max-w-3xl mx-auto">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {requirements.map((req, index) => (
                <div key={index} className="flex items-center space-x-3 bg-orange-50 rounded-xl p-4 border border-orange-100">
                  <div className="w-10 h-10 bg-gradient-to-r from-orange-500/20 to-red-500/20 rounded-lg flex items-center justify-center">
                    <CheckCircle className="w-5 h-5 text-orange-500" />
                  </div>
                  <span className="text-gray-800">{req}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>

      {/* Earnings Calculator */}
      <div id="earnings" className="py-16 px-4 sm:px-6 lg:px-8 bg-gradient-to-r from-orange-50 to-red-50">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 text-center mb-12">
            How Much Can You Earn?
          </h2>
          <div className="bg-white border border-orange-100 rounded-2xl p-8 shadow-lg">
            <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
              <div className="text-center">
                <div className="text-5xl font-bold text-orange-600 mb-2">₹800+</div>
                <div className="text-gray-600">Daily Average</div>
                <div className="text-sm text-gray-500 mt-2">Per day (8 hours)</div>
              </div>
              <div className="text-center">
                <div className="text-5xl font-bold text-orange-600 mb-2">₹25,000+</div>
                <div className="text-gray-600">Monthly Average</div>
                <div className="text-sm text-gray-500 mt-2">Full-time partners</div>
              </div>
              <div className="text-center">
                <div className="text-5xl font-bold text-orange-600 mb-2">₹5,000+</div>
                <div className="text-gray-600">Weekly Bonus</div>
                <div className="text-sm text-gray-500 mt-2">Performance incentives</div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Application Form */}
      <div id="applyForm" className="py-16 px-4 sm:px-6 lg:px-8 bg-orange-50/50">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Apply Now in 2 Minutes
            </h2>
            <p className="text-gray-600">
              Fill the form and get instant access to download links and contact information
            </p>
          </div>

          {submitted ? (
            <div className="bg-white border border-orange-100 rounded-2xl p-8 shadow-lg">
              <div className="text-center mb-8">
                <div className="w-20 h-20 bg-gradient-to-r from-orange-500 to-red-500 rounded-full flex items-center justify-center mx-auto mb-6">
                  <CheckCircle className="w-10 h-10 text-white" />
                </div>
                <h3 className="text-2xl font-bold text-gray-900 mb-2">
                  Application Submitted Successfully!
                </h3>
                <p className="text-gray-600">
                  We&apos;ve sent download links and contact information to your phone.
                </p>
              </div>

              <div className="space-y-6">
                {/* Contact Information */}
                <div className="bg-orange-50 rounded-xl p-6 border border-orange-100">
                  <h4 className="text-lg font-bold text-gray-900 mb-4">Contact Information</h4>
                  <div className="space-y-4">
                    <div className="flex items-center space-x-3">
                      <Phone className="w-5 h-5 text-orange-500" />
                      <div>
                        <div className="text-sm text-gray-600">Support Number</div>
                        <div className="text-gray-900 font-medium">{submitted.contactInfo.phone}</div>
                      </div>
                    </div>
                    <div className="flex items-center space-x-3">
                      <MessageCircle className="w-5 h-5 text-green-500" />
                      <div>
                        <div className="text-sm text-gray-600">Manager WhatsApp</div>
                        <div className="text-gray-900 font-medium">{submitted.contactInfo.whatsapp}</div>
                      </div>
                    </div>
                    <div className="flex items-center space-x-3">
                      <Mail className="w-5 h-5 text-orange-500" />
                      <div>
                        <div className="text-sm text-gray-600">Email</div>
                        <div className="text-gray-900 font-medium">{submitted.contactInfo.email}</div>
                      </div>
                    </div>
                  </div>
                </div>

                {/* Download Links */}
                <div className="bg-orange-50 rounded-xl p-6 border border-orange-100">
                  <h4 className="text-lg font-bold text-gray-900 mb-4">Download App</h4>
                  <div className="space-y-4">
                    <a
                      href="https://play.google.com/store/apps/details?id=com.olyyo.delivery"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center justify-between p-4 bg-gradient-to-r from-orange-500/10 to-red-500/10 border border-orange-200 rounded-lg hover:bg-orange-500/20 transition-colors"
                    >
                      <div className="flex items-center space-x-3">
                        <Smartphone className="w-6 h-6 text-orange-500" />
                        <div>
                          <div className="font-medium text-gray-900">Android App</div>
                          <div className="text-sm text-gray-600">Download from Play Store</div>
                        </div>
                      </div>
                      <ExternalLink className="w-5 h-5 text-gray-500" />
                    </a>
                    
                    <a
                      href="https://apps.apple.com/app/olyyo-delivery-partner"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center justify-between p-4 bg-gradient-to-r from-orange-500/10 to-red-500/10 border border-orange-200 rounded-lg hover:bg-orange-500/20 transition-colors"
                    >
                      <div className="flex items-center space-x-3">
                        <Smartphone className="w-6 h-6 text-orange-500" />
                        <div>
                          <div className="font-medium text-gray-900">iOS App</div>
                          <div className="text-sm text-gray-600">Download from App Store</div>
                        </div>
                      </div>
                      <ExternalLink className="w-5 h-5 text-gray-500" />
                    </a>
                  </div>
                </div>

                {/* Share Links */}
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <a
                    href={submitted.whatsappUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center justify-center space-x-2 p-4 bg-gradient-to-r from-green-500 to-emerald-500 text-white rounded-lg hover:shadow-lg transition-all duration-300"
                  >
                    <MessageCircle className="w-5 h-5" />
                    <span>Open in WhatsApp</span>
                  </a>
                  
                  <a
                    href={submitted.smsUrl}
                    className="flex items-center justify-center space-x-2 p-4 bg-gradient-to-r from-orange-500 to-red-500 text-white rounded-lg hover:shadow-lg transition-all duration-300"
                  >
                    <Send className="w-5 h-5" />
                    <span>Send as SMS</span>
                  </a>
                </div>
              </div>
            </div>
          ) : (
            <form onSubmit={handleSubmit} className="bg-white border border-orange-100 rounded-2xl p-8 shadow-lg">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-8">
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    Full Name *
                  </label>
                  <div className="relative">
                    <User className="absolute left-3 top-1/2 transform -translate-y-1/2 w-5 h-5 text-gray-400" />
                    <input
                      type="text"
                      name="name"
                      value={formData.name}
                      onChange={handleChange}
                      required
                      className="pl-10 w-full px-4 py-3 bg-orange-50/50 border border-orange-200 rounded-lg text-gray-900 placeholder-gray-500 focus:outline-none focus:border-orange-500 focus:ring-2 focus:ring-orange-500/20"
                      placeholder="Enter your full name"
                    />
                  </div>
                </div>

                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    Phone Number *
                  </label>
                  <div className="relative">
                    <PhoneIcon className="absolute left-3 top-1/2 transform -translate-y-1/2 w-5 h-5 text-gray-400" />
                    <input
                      type="tel"
                      name="phone"
                      value={formData.phone}
                      onChange={handleChange}
                      required
                      className="pl-10 w-full px-4 py-3 bg-orange-50/50 border border-orange-200 rounded-lg text-gray-900 placeholder-gray-500 focus:outline-none focus:border-orange-500 focus:ring-2 focus:ring-orange-500/20"
                      placeholder="Enter your WhatsApp number"
                    />
                  </div>
                </div>

                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    Email Address
                  </label>
                  <div className="relative">
                    <Mail className="absolute left-3 top-1/2 transform -translate-y-1/2 w-5 h-5 text-gray-400" />
                    <input
                      type="email"
                      name="email"
                      value={formData.email}
                      onChange={handleChange}
                      className="pl-10 w-full px-4 py-3 bg-orange-50/50 border border-orange-200 rounded-lg text-gray-900 placeholder-gray-500 focus:outline-none focus:border-orange-500 focus:ring-2 focus:ring-orange-500/20"
                      placeholder="Enter your email"
                    />
                  </div>
                </div>

                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    City *
                  </label>
                  <div className="relative">
                    <MapPin className="absolute left-3 top-1/2 transform -translate-y-1/2 w-5 h-5 text-gray-400" />
                    <input
                      type="text"
                      name="city"
                      value={formData.city}
                      onChange={handleChange}
                      required
                      className="pl-10 w-full px-4 py-3 bg-orange-50/50 border border-orange-200 rounded-lg text-gray-900 placeholder-gray-500 focus:outline-none focus:border-orange-500 focus:ring-2 focus:ring-orange-500/20"
                      placeholder="Enter your city"
                    />
                  </div>
                </div>

                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    Vehicle Type *
                  </label>
                  <select
                    name="vehicle"
                    value={formData.vehicle}
                    onChange={handleChange}
                    required
                    className="w-full px-4 py-3 bg-orange-50/50 border border-orange-200 rounded-lg text-gray-900 placeholder-gray-500 focus:outline-none focus:border-orange-500 focus:ring-2 focus:ring-orange-500/20"
                  >
                    <option value="">Select Vehicle</option>
                    <option value="bike">Motorcycle/Scooter</option>
                    <option value="bicycle">Bicycle</option>
                    <option value="car">Car</option>
                    <option value="other">Other</option>
                  </select>
                </div>

                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    Delivery Experience
                  </label>
                  <select
                    name="experience"
                    value={formData.experience}
                    onChange={handleChange}
                    className="w-full px-4 py-3 bg-orange-50/50 border border-orange-200 rounded-lg text-gray-900 placeholder-gray-500 focus:outline-none focus:border-orange-500 focus:ring-2 focus:ring-orange-500/20"
                  >
                    <option value="">Select Experience</option>
                    <option value="none">No Experience</option>
                    <option value="less_than_1">Less than 1 year</option>
                    <option value="1_3">1-3 years</option>
                    <option value="3_plus">3+ years</option>
                  </select>
                </div>
              </div>

              <div className="mb-8">
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  Referral Code (Optional)
                </label>
                <input
                  type="text"
                  name="referralCode"
                  value={formData.referralCode}
                  onChange={handleChange}
                  className="w-full px-4 py-3 bg-orange-50/50 border border-orange-200 rounded-lg text-gray-900 placeholder-gray-500 focus:outline-none focus:border-orange-500 focus:ring-2 focus:ring-orange-500/20"
                  placeholder="Enter referral code if any"
                />
              </div>

              <button
                type="submit"
                disabled={loading}
                className="w-full py-4 bg-gradient-to-r from-orange-500 to-red-500 text-white text-lg font-bold rounded-xl hover:shadow-2xl hover:shadow-orange-200 hover:scale-105 transition-all duration-300 disabled:opacity-50 disabled:cursor-not-allowed"
              >
                {loading ? (
                  <span className="flex items-center justify-center">
                    <svg className="animate-spin h-5 w-5 mr-3 text-white" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                      <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                      <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                    </svg>
                    Processing...
                  </span>
                ) : (
                  "Apply Now & Get Download Links"
                )}
              </button>

              <p className="text-center text-gray-500 text-sm mt-4">
                By applying, you agree to receive download links and contact information via WhatsApp/SMS
              </p>
            </form>
          )}
        </div>
      </div>

      {/* FAQ Section */}
      <div className="py-16 px-4 sm:px-6 lg:px-8 bg-white">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 text-center mb-12">
            Frequently Asked Questions
          </h2>
          <div className="space-y-6">
            <div className="bg-orange-50 rounded-xl p-6 border border-orange-100">
              <h3 className="text-lg font-bold text-gray-900 mb-3">
                How soon can I start delivering?
              </h3>
              <p className="text-gray-600">
                Once you submit your application, we&apos;ll contact you within 24 hours. After completing the verification process and online orientation, you can start delivering immediately.
              </p>
            </div>
            
            <div className="bg-orange-50 rounded-xl p-6 border border-orange-100">
              <h3 className="text-lg font-bold text-gray-900 mb-3">
                When do I get paid?
              </h3>
              <p className="text-gray-600">
                We process payments weekly directly to your bank account. You can also opt for instant payouts for a small fee.
              </p>
            </div>
            
            <div className="bg-orange-50 rounded-xl p-6 border border-orange-100">
              <h3 className="text-lg font-bold text-gray-900 mb-3">
                Is there any registration fee?
              </h3>
              <p className="text-gray-600">
                No, joining OLYYO as a delivery partner is completely free. We provide all necessary equipment at no cost.
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* Footer */}
      <footer className="bg-gray-900 text-white py-12 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            <div>
              <div className="flex items-center space-x-2 mb-4">
                <div className="w-10 h-10 bg-gradient-to-r from-orange-500 to-red-500 rounded-lg flex items-center justify-center">
                  <Truck className="w-6 h-6 text-white" />
                </div>
                <span className="text-xl font-bold text-white">OLYYO Delivery</span>
              </div>
              <p className="text-gray-400 text-sm">
                Empowering delivery partners across India with flexible earning opportunities.
              </p>
            </div>
            
            <div>
              <h4 className="text-lg font-bold text-white mb-4">Contact</h4>
              <div className="space-y-2">
                <div className="flex items-center space-x-2 text-gray-400">
                  <Phone className="w-4 h-4" />
                  <span>+1-800-OLYYO-123</span>
                </div>
                <div className="flex items-center space-x-2 text-gray-400">
                  <Mail className="w-4 h-4" />
                  <span>partners@olyyo.com</span>
                </div>
                <div className="flex items-center space-x-2 text-gray-400">
                  <MapPin className="w-4 h-4" />
                  <span>New Delhi, India</span>
                </div>
              </div>
            </div>
            
            <div>
              <h4 className="text-lg font-bold text-white mb-4">Quick Links</h4>
              <div className="space-y-2">
                <a href="#benefits" className="block text-gray-400 hover:text-orange-300 transition-colors">
                  Benefits
                </a>
                <a href="#requirements" className="block text-gray-400 hover:text-orange-300 transition-colors">
                  Requirements
                </a>
                <a href="#earnings" className="block text-gray-400 hover:text-orange-300 transition-colors">
                  Earnings
                </a>
                <a href="#applyForm" className="block text-gray-400 hover:text-orange-300 transition-colors">
                  Apply Now
                </a>
              </div>
            </div>
            
            <div>
              <h4 className="text-lg font-bold text-white mb-4">Download App</h4>
              <div className="space-y-3">
                <a
                  href="https://play.google.com/store/apps/details?id=com.olyyo.delivery"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center space-x-2 p-3 bg-gray-800 rounded-lg hover:bg-gray-700 transition-colors"
                >
                  <Smartphone className="w-5 h-5 text-orange-400" />
                  <span className="text-white">Android App</span>
                </a>
                <a
                  href="https://apps.apple.com/app/olyyo-delivery-partner"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center space-x-2 p-3 bg-gray-800 rounded-lg hover:bg-gray-700 transition-colors"
                >
                  <Smartphone className="w-5 h-5 text-orange-400" />
                  <span className="text-white">iOS App</span>
                </a>
              </div>
            </div>
          </div>
          
          <div className="mt-8 pt-8 border-t border-gray-800 text-center text-gray-500 text-sm">
            <p>© {new Date().getFullYear()} OLYYO Delivery. All rights reserved.</p>
          </div>
        </div>
      </footer>
    </div>
  );
}