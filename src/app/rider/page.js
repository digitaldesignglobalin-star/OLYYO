"use client";
import React, { useState, useEffect } from 'react';
import { MapPin, Navigation, Clock, CheckCircle2, ChevronRight, Package, Store, LogOut } from 'lucide-react';
import { useRouter } from 'next/navigation';

const API_URL = process.env.NEXT_PUBLIC_API_URL || "https://olyyo-backend.onrender.com";

export default function RiderDashboard() {
  const router = useRouter();
  const [status, setStatus] = useState('offline');
  const [orders, setOrders] = useState([]);
  const [riderId, setRiderId] = useState(null);
  const [location, setLocation] = useState({ lat: 19.0760, lng: 72.8777 }); // Default Mumbai coordinates

  useEffect(() => {
    // Check login
    if (typeof window !== "undefined") {
      const userStr = localStorage.getItem("olyyo_user");
      if (userStr) {
        try {
          const user = JSON.parse(userStr);
          if (user.role === 'rider') {
            setRiderId(user.id);
            setStatus('online');
          } else {
            alert('Access denied. Rider account required.');
            router.push('/login');
          }
        } catch(e) {}
      } else {
        router.push('/login');
      }
      
      // Get real location if possible
      if ("geolocation" in navigator) {
        navigator.geolocation.getCurrentPosition((pos) => {
          setLocation({ lat: pos.coords.latitude, lng: pos.coords.longitude });
        });
      }
    }
  }, []);

  useEffect(() => {
    if (status === 'online' && riderId) {
      fetchAvailableOrders();
      // Poll every 10 seconds for new orders
      const interval = setInterval(fetchAvailableOrders, 10000);
      return () => clearInterval(interval);
    }
  }, [status, riderId, location]);

  const fetchAvailableOrders = async () => {
    try {
      const res = await fetch(`${API_URL}/orders/available-for-rider/${riderId}?lat=${location.lat}&lng=${location.lng}`);
      if (res.ok) {
        const data = await res.json();
        setOrders(data);
      }
    } catch(e) { console.error(e) }
  };

  const acceptOrder = async (orderId) => {
    try {
      const res = await fetch(`${API_URL}/orders/${orderId}/status`, {
        method: 'PATCH',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ status: 'out_for_delivery', riderId })
      });
      if (res.ok) {
        alert('Order accepted!');
        fetchAvailableOrders();
      }
    } catch(e) { console.error(e) }
  };

  const handleLogout = () => {
    if (typeof window !== "undefined") {
      localStorage.removeItem("olyyo_user");
      localStorage.removeItem("olyyo_token");
      router.push('/login');
    }
  };

  if (!riderId) return null; // loading or redirecting

  return (
    <div className="min-h-screen bg-[#0f172a] text-slate-100 font-sans pb-20">
      {/* Header */}
      <header className="sticky top-0 z-50 bg-slate-900/80 backdrop-blur-xl border-b border-slate-800 px-6 py-4 flex justify-between items-center">
        <div className="flex items-center gap-3">
          <div className="w-12 h-12 rounded-full bg-gradient-to-br from-orange-400 to-rose-500 p-0.5">
            <div className="w-full h-full bg-slate-900 rounded-full flex items-center justify-center">
              <Navigation className="w-5 h-5 text-orange-400" />
            </div>
          </div>
          <div>
            <h1 className="text-xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-orange-400 to-rose-400">Rider Central</h1>
            <p className="text-xs text-slate-400 font-medium">Lat: {location.lat.toFixed(4)} • Lng: {location.lng.toFixed(4)}</p>
          </div>
        </div>
        
        <div className="flex items-center gap-4">
          <button 
            onClick={() => setStatus(status === 'online' ? 'offline' : 'online')}
            className={`px-4 py-2 rounded-full font-bold text-sm transition-all duration-300 shadow-lg flex items-center gap-2 ${
              status === 'online' 
                ? 'bg-emerald-500/10 text-emerald-400 border border-emerald-500/30 shadow-emerald-500/10' 
                : 'bg-slate-800 text-slate-400 border border-slate-700'
            }`}
          >
            <div className={`w-2 h-2 rounded-full ${status === 'online' ? 'bg-emerald-400 animate-pulse' : 'bg-slate-500'}`}></div>
            {status === 'online' ? 'ONLINE' : 'OFFLINE'}
          </button>
          <button onClick={handleLogout} className="p-2 bg-slate-800 rounded-full text-slate-400 hover:text-white">
             <LogOut className="w-5 h-5" />
          </button>
        </div>
      </header>

      {/* Main Stats */}
      <main className="p-6 max-w-lg mx-auto">
        <div className="grid grid-cols-2 gap-4 mb-8">
          <div className="bg-gradient-to-br from-slate-800 to-slate-800/50 p-5 rounded-2xl border border-slate-700/50 shadow-xl relative overflow-hidden">
            <div className="absolute top-0 right-0 p-4 opacity-10"><Package className="w-16 h-16" /></div>
            <p className="text-slate-400 text-sm font-medium mb-1">Today's Earnings</p>
            <h2 className="text-3xl font-bold text-white">₹0</h2>
          </div>
          <div className="bg-gradient-to-br from-slate-800 to-slate-800/50 p-5 rounded-2xl border border-slate-700/50 shadow-xl relative overflow-hidden">
             <div className="absolute top-0 right-0 p-4 opacity-10"><CheckCircle2 className="w-16 h-16" /></div>
            <p className="text-slate-400 text-sm font-medium mb-1">Deliveries</p>
            <h2 className="text-3xl font-bold text-white">0</h2>
          </div>
        </div>

        {/* Available Orders */}
        <div className="flex items-center justify-between mb-6">
          <h3 className="text-xl font-bold flex items-center gap-2">
            <div className="w-8 h-8 rounded-full bg-indigo-500/20 flex items-center justify-center">
              <span className={`w-2.5 h-2.5 rounded-full ${status === 'online' ? 'bg-indigo-400 animate-ping' : 'bg-slate-500'} absolute`}></span>
              <span className={`w-2.5 h-2.5 rounded-full ${status === 'online' ? 'bg-indigo-500' : 'bg-slate-500'} relative`}></span>
            </div>
            Radar
          </h3>
          <span className="text-sm font-medium text-indigo-400 bg-indigo-500/10 px-3 py-1 rounded-full border border-indigo-500/20">
            {orders.length} New
          </span>
        </div>

        {status === 'offline' ? (
           <div className="text-center p-10 bg-slate-800/50 rounded-2xl border border-slate-700/50">
             <p className="text-slate-400">Go online to see available orders.</p>
           </div>
        ) : (
          <div className="space-y-4">
            {orders.length === 0 ? (
               <div className="text-center p-10 bg-slate-800/50 rounded-2xl border border-slate-700/50">
                 <div className="w-12 h-12 border-4 border-indigo-500 border-t-transparent rounded-full animate-spin mx-auto mb-4"></div>
                 <p className="text-slate-400">Scanning for nearby orders...</p>
               </div>
            ) : (
              orders.map((order, idx) => (
                <OrderCard key={order.id} order={order} onAccept={() => acceptOrder(order.id)} />
              ))
            )}
          </div>
        )}
      </main>
    </div>
  );
}

function OrderCard({ order, onAccept }) {
  // Use rider_earnings column if it exists, otherwise fallback
  const earn = order.rider_earnings ? `₹${order.rider_earnings}` : '₹--';
  const restaurant = order.restaurants?.name || 'Unknown Restaurant';
  // Mock distance for now since the backend filters them to <= 2km anyway
  const distance = '< 2 km'; 

  return (
    <div className="bg-slate-800/60 backdrop-blur-md rounded-2xl p-5 border border-slate-700/50 shadow-2xl hover:border-orange-500/30 transition-all duration-300 group cursor-pointer">
      <div className="flex justify-between items-start mb-4">
        <div>
          <h4 className="font-bold text-lg text-white mb-1">{restaurant}</h4>
          <span className="text-xs font-medium text-slate-400 bg-slate-900/50 px-2 py-1 rounded-md border border-slate-700">{order.id}</span>
        </div>
        <div className="text-right">
          <p className="text-2xl font-black text-emerald-400">{earn}</p>
          <p className="text-xs text-slate-400 flex items-center justify-end gap-1 mt-1"><Clock className="w-3 h-3" /> Just now</p>
        </div>
      </div>
      
      <div className="flex items-center gap-4 py-4 border-t border-b border-slate-700/50 my-4 relative">
        <div className="absolute left-[11px] top-[28px] bottom-[28px] w-0.5 bg-slate-700"></div>
        <div className="flex-1">
          <div className="flex items-center gap-3 mb-4">
            <div className="w-6 h-6 rounded-full bg-orange-500/20 flex items-center justify-center z-10 ring-4 ring-[#0f172a]">
              <Store className="w-3 h-3 text-orange-400" />
            </div>
            <div>
              <p className="text-sm font-semibold text-slate-200">Pickup</p>
              <p className="text-xs text-slate-400">{distance} away</p>
            </div>
          </div>
          <div className="flex items-center gap-3">
            <div className="w-6 h-6 rounded-full bg-indigo-500/20 flex items-center justify-center z-10 ring-4 ring-[#0f172a]">
              <MapPin className="w-3 h-3 text-indigo-400" />
            </div>
            <div>
              <p className="text-sm font-semibold text-slate-200">Dropoff</p>
              <p className="text-xs text-slate-400">{order.address || 'Customer Location'}</p>
            </div>
          </div>
        </div>
      </div>

      <button onClick={onAccept} className="w-full py-3.5 bg-gradient-to-r from-orange-500 to-rose-500 hover:from-orange-400 hover:to-rose-400 text-white font-bold rounded-xl shadow-lg shadow-orange-500/20 transition-all active:scale-[0.98] flex items-center justify-center gap-2 group-hover:shadow-orange-500/40">
        Accept Delivery <ChevronRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
      </button>
    </div>
  );
}
