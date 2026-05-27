"use client";
import React, { useState, useEffect } from 'react';
import { useRouter } from 'next/navigation';
import { Truck, MapPin, Search, Store, Navigation, CheckCircle, UserCheck } from 'lucide-react';

const API_URL = process.env.NEXT_PUBLIC_API_URL || "https://olyyo-backend.onrender.com";

export default function SharedAdminDashboard() {
  const router = useRouter();
  const [adminId, setAdminId] = useState(null);
  const [orders, setOrders] = useState([]);
  const [riders, setRiders] = useState([]);
  const [assigningOrder, setAssigningOrder] = useState(null);
  
  useEffect(() => {
    if (typeof window !== "undefined") {
      const userStr = localStorage.getItem("olyyo_user");
      if (userStr) {
        try {
          const user = JSON.parse(userStr);
          if (user.role === 'admin' || user.role === 'super_admin') {
            setAdminId(user.id);
          } else {
            router.push('/login');
          }
        } catch(e) {}
      } else {
        router.push('/login');
      }
    }
  }, []);

  useEffect(() => {
    if (adminId) {
      fetchOrders();
      fetchRiders();
      const interval = setInterval(fetchOrders, 10000);
      return () => clearInterval(interval);
    }
  }, [adminId]);

  const fetchOrders = async () => {
    try {
      const res = await fetch(`${API_URL}/orders`);
      if (res.ok) setOrders(await res.json());
    } catch(e) {}
  };

  const fetchRiders = async () => {
    try {
      const res = await fetch(`${API_URL}/auth/riders`);
      if (res.ok) setRiders(await res.json());
    } catch(e) {}
  };

  const assignRider = async (riderId) => {
    try {
      await fetch(`${API_URL}/orders/${assigningOrder.id}/status`, {
        method: 'PATCH',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ status: 'out_for_delivery', riderId })
      });
      setAssigningOrder(null);
      fetchOrders();
      alert('Rider Assigned!');
    } catch(e) {}
  };

  if (!adminId) return null;

  return (
    <div className="min-h-screen bg-slate-950 text-slate-300 font-sans p-8">
      <header className="flex justify-between items-center mb-8 border-b border-slate-800 pb-6">
        <div>
          <h1 className="text-3xl font-bold text-white flex items-center gap-3">
            <Truck className="w-8 h-8 text-emerald-400" />
            Logistics Control
          </h1>
          <p className="text-slate-500 mt-1">Shared Admin Portal - Monitor & Assign Riders</p>
        </div>
      </header>

      <div className="grid grid-cols-1 gap-6">
        {orders.filter(o => o.status === 'pending' || o.status === 'preparing' || o.status === 'ready').length === 0 && (
          <div className="text-center p-12 bg-slate-900 border border-slate-800 rounded-xl">
             <p className="text-slate-500">No active orders requiring assignment.</p>
          </div>
        )}
        
        {orders.filter(o => o.status === 'pending' || o.status === 'preparing' || o.status === 'ready').map(order => (
          <div key={order.id} className="bg-slate-900 border border-slate-800 rounded-xl p-6 flex flex-col md:flex-row md:items-center justify-between gap-4 hover:border-slate-700 transition-colors">
            <div className="flex-1">
              <div className="flex items-center gap-4 mb-2">
                <span className="bg-slate-800 text-white font-mono px-3 py-1 rounded text-sm">{order.id}</span>
                <span className="text-emerald-400 font-bold text-xs bg-emerald-400/10 px-3 py-1 rounded-full uppercase tracking-wider">{order.status.replace(/_/g, ' ')}</span>
              </div>
              <div className="flex flex-wrap items-center gap-6 mt-4">
                <div className="flex items-center gap-2 text-sm text-slate-400">
                  <Store className="w-4 h-4 text-orange-400" />
                  {order.restaurants?.name || 'Unknown Restaurant'}
                </div>
                <div className="flex items-center gap-2 text-sm text-slate-400">
                  <MapPin className="w-4 h-4 text-indigo-400" />
                  {order.address?.substring(0, 40) || 'Unknown Location'}...
                </div>
              </div>
            </div>
            
            <div>
              {order.rider_id ? (
                <div className="flex items-center gap-2 text-emerald-400 font-bold bg-emerald-400/10 px-4 py-2 rounded-lg">
                  <UserCheck className="w-5 h-5" /> Assigned
                </div>
              ) : (
                <button 
                  onClick={() => setAssigningOrder(order)}
                  className="w-full md:w-auto bg-indigo-600 hover:bg-indigo-500 text-white px-6 py-3 rounded-xl font-bold transition-all hover:shadow-lg hover:shadow-indigo-500/20 active:scale-[0.98]"
                >
                  Assign Rider
                </button>
              )}
            </div>
          </div>
        ))}
      </div>

      {/* Assign Rider Modal */}
      {assigningOrder && (
        <div className="fixed inset-0 bg-black/80 backdrop-blur-sm z-50 flex items-center justify-center p-4">
          <div className="bg-slate-900 border border-slate-800 rounded-2xl p-6 w-full max-w-xl shadow-2xl">
            <div className="flex justify-between items-center mb-6">
              <h2 className="text-xl font-bold text-white flex items-center gap-2">
                 <Truck className="w-5 h-5 text-indigo-400" />
                 Assign Rider for {assigningOrder.id}
              </h2>
            </div>
            
            <div className="space-y-3 max-h-96 overflow-y-auto pr-2 custom-scrollbar">
              {riders.length === 0 ? (
                 <p className="text-slate-500 text-center py-8">No approved riders available.</p>
              ) : (
                riders.map(rider => (
                  <div key={rider.id} className="flex items-center justify-between p-4 bg-slate-800/50 rounded-xl border border-slate-700 hover:border-indigo-500/50 transition-colors group">
                    <div>
                      <h4 className="font-bold text-white text-lg">{rider.name || 'Unnamed Rider'}</h4>
                      <p className="text-sm text-slate-400 flex items-center gap-1 mt-1">
                        <Navigation className="w-3 h-3" /> Online & Available
                      </p>
                    </div>
                    <button 
                      onClick={() => assignRider(rider.id)}
                      className="bg-slate-800 text-slate-300 group-hover:bg-emerald-500 group-hover:text-white px-5 py-2.5 rounded-lg font-bold transition-all"
                    >
                      Select
                    </button>
                  </div>
                ))
              )}
            </div>

            <button onClick={() => setAssigningOrder(null)} className="w-full mt-6 py-3 text-slate-400 hover:text-white font-medium hover:bg-slate-800 rounded-xl transition-colors">
              Cancel Assignment
            </button>
          </div>
        </div>
      )}
    </div>
  );
}
