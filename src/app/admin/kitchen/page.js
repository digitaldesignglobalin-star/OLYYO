"use client";
import React, { useState, useEffect } from 'react';
import { useRouter } from 'next/navigation';
import { CheckCircle, Clock, Package, TrendingUp, LogOut, Store } from 'lucide-react';

const API_URL = process.env.NEXT_PUBLIC_API_URL || "https://olyyo-backend.onrender.com";

export default function KitchenDashboard() {
  const router = useRouter();
  const [kitchenAdminId, setKitchenAdminId] = useState(null);
  const [orders, setOrders] = useState([]);
  const [revenue, setRevenue] = useState({ daily: 0, monthly: 0 });

  useEffect(() => {
    if (typeof window !== "undefined") {
      const userStr = localStorage.getItem("olyyo_user");
      if (userStr) {
        try {
          const user = JSON.parse(userStr);
          if (user.role === 'admin' || user.role === 'kitchen') {
            setKitchenAdminId(user.id);
          } else {
            alert('Access denied. Kitchen Admin account required.');
            router.push('/login');
          }
        } catch(e) {}
      } else {
        router.push('/login');
      }
    }
  }, []);

  useEffect(() => {
    if (kitchenAdminId) {
      fetchOrders();
      const interval = setInterval(fetchOrders, 10000);
      return () => clearInterval(interval);
    }
  }, [kitchenAdminId]);

  const fetchOrders = async () => {
    try {
      const res = await fetch(`${API_URL}/orders/kitchen/${kitchenAdminId}`);
      if (res.ok) {
        const data = await res.json();
        setOrders(data);
        calculateRevenue(data);
      }
    } catch(e) { console.error(e) }
  };

  const calculateRevenue = (data) => {
    const today = new Date().toDateString();
    const thisMonth = new Date().getMonth();
    
    let daily = 0;
    let monthly = 0;
    
    data.forEach(order => {
      const date = new Date(order.created_at);
      const val = Number(order.kitchen_earnings) || 0;
      
      if (date.toDateString() === today) daily += val;
      if (date.getMonth() === thisMonth) monthly += val;
    });
    
    setRevenue({ daily, monthly });
  };

  const updateStatus = async (orderId, newStatus) => {
    try {
      await fetch(`${API_URL}/orders/${orderId}/status`, {
        method: 'PATCH',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ status: newStatus })
      });
      fetchOrders();
    } catch(e) {}
  };

  const handleLogout = () => {
    localStorage.removeItem("olyyo_user");
    localStorage.removeItem("olyyo_token");
    router.push('/login');
  };

  if (!kitchenAdminId) return null;

  const pending = orders.filter(o => o.status === 'pending');
  const preparing = orders.filter(o => o.status === 'preparing');
  const ready = orders.filter(o => o.status === 'ready' || o.status === 'ready_for_pickup');

  return (
    <div className="min-h-screen bg-slate-50 font-sans text-slate-800 pb-10">
      {/* Header */}
      <header className="bg-white border-b border-slate-200 px-8 py-5 flex justify-between items-center sticky top-0 z-10 shadow-sm">
        <div className="flex items-center gap-3">
          <div className="w-12 h-12 bg-orange-100 rounded-xl flex items-center justify-center">
            <Store className="w-6 h-6 text-orange-600" />
          </div>
          <div>
            <h1 className="text-2xl font-bold text-slate-900">Kitchen Admin</h1>
            <p className="text-sm text-slate-500 font-medium">Manage Orders & Revenue</p>
          </div>
        </div>
        <button onClick={handleLogout} className="flex items-center gap-2 px-4 py-2 text-slate-500 hover:bg-slate-100 rounded-lg font-medium transition-colors">
          <LogOut className="w-5 h-5" /> Logout
        </button>
      </header>

      <main className="max-w-7xl mx-auto px-8 mt-8">
        {/* Revenue Stats */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-10">
          <div className="bg-white p-6 rounded-2xl border border-slate-200 shadow-sm flex items-center gap-6">
            <div className="w-16 h-16 rounded-full bg-emerald-50 flex items-center justify-center">
              <TrendingUp className="w-8 h-8 text-emerald-500" />
            </div>
            <div>
              <p className="text-sm font-bold text-slate-400 uppercase tracking-wider mb-1">Today's Revenue</p>
              <h2 className="text-3xl font-black text-slate-800">₹{revenue.daily.toFixed(2)}</h2>
            </div>
          </div>
          <div className="bg-white p-6 rounded-2xl border border-slate-200 shadow-sm flex items-center gap-6">
            <div className="w-16 h-16 rounded-full bg-indigo-50 flex items-center justify-center">
              <Package className="w-8 h-8 text-indigo-500" />
            </div>
            <div>
              <p className="text-sm font-bold text-slate-400 uppercase tracking-wider mb-1">Monthly Revenue</p>
              <h2 className="text-3xl font-black text-slate-800">₹{revenue.monthly.toFixed(2)}</h2>
            </div>
          </div>
        </div>

        {/* Kanban Board */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          
          {/* Pending Orders */}
          <div className="bg-slate-100 rounded-2xl p-5 border border-slate-200">
            <div className="flex justify-between items-center mb-6 px-2">
              <h3 className="font-bold text-lg text-slate-700 flex items-center gap-2">
                <span className="w-3 h-3 rounded-full bg-rose-500"></span> New Orders
              </h3>
              <span className="bg-white px-3 py-1 rounded-full text-sm font-bold text-slate-500 shadow-sm">{pending.length}</span>
            </div>
            <div className="space-y-4">
              {pending.map(order => (
                <OrderCard key={order.id} order={order} actionText="Accept Order" actionColor="bg-indigo-600 hover:bg-indigo-700 text-white" onAction={() => updateStatus(order.id, 'preparing')} />
              ))}
            </div>
          </div>

          {/* Preparing Orders */}
          <div className="bg-slate-100 rounded-2xl p-5 border border-slate-200">
            <div className="flex justify-between items-center mb-6 px-2">
              <h3 className="font-bold text-lg text-slate-700 flex items-center gap-2">
                <span className="w-3 h-3 rounded-full bg-amber-500"></span> Preparing
              </h3>
              <span className="bg-white px-3 py-1 rounded-full text-sm font-bold text-slate-500 shadow-sm">{preparing.length}</span>
            </div>
            <div className="space-y-4">
              {preparing.map(order => (
                <OrderCard key={order.id} order={order} actionText="Mark Ready" actionColor="bg-amber-500 hover:bg-amber-600 text-white" onAction={() => updateStatus(order.id, 'ready')} />
              ))}
            </div>
          </div>

          {/* Ready for Pickup */}
          <div className="bg-slate-100 rounded-2xl p-5 border border-slate-200">
            <div className="flex justify-between items-center mb-6 px-2">
              <h3 className="font-bold text-lg text-slate-700 flex items-center gap-2">
                <span className="w-3 h-3 rounded-full bg-emerald-500"></span> Ready for Pickup
              </h3>
              <span className="bg-white px-3 py-1 rounded-full text-sm font-bold text-slate-500 shadow-sm">{ready.length}</span>
            </div>
            <div className="space-y-4">
              {ready.map(order => (
                <OrderCard key={order.id} order={order} actionText="Handover to Rider" actionColor="bg-emerald-600 hover:bg-emerald-700 text-white" onAction={() => updateStatus(order.id, 'out_for_delivery')} />
              ))}
            </div>
          </div>

        </div>
      </main>
    </div>
  );
}

function OrderCard({ order, actionText, actionColor, onAction }) {
  return (
    <div className="bg-white p-5 rounded-xl border border-slate-200 shadow-sm hover:shadow-md transition-shadow">
      <div className="flex justify-between items-start mb-3">
        <span className="bg-slate-100 text-slate-600 px-2 py-1 rounded-md text-xs font-bold font-mono">{order.id}</span>
        <span className="flex items-center gap-1 text-xs font-medium text-slate-400">
          <Clock className="w-3 h-3" /> {new Date(order.created_at).toLocaleTimeString([], {hour: '2-digit', minute:'2-digit'})}
        </span>
      </div>
      <div className="mb-4">
        <ul className="space-y-2 mb-3">
          {order.order_items?.map((item, idx) => (
            <li key={idx} className="flex justify-between text-sm font-medium text-slate-700">
              <span>{item.quantity}x {item.menu_items?.name || 'Item'}</span>
            </li>
          ))}
        </ul>
        <div className="text-xs font-bold text-emerald-600 bg-emerald-50 px-2 py-1 rounded inline-block">
          Kitchen Earns: ₹{order.kitchen_earnings}
        </div>
      </div>
      <button onClick={onAction} className={`w-full py-2.5 rounded-lg font-bold text-sm transition-colors ${actionColor}`}>
        {actionText}
      </button>
    </div>
  );
}
