"use client";
import React, { useState } from 'react';
import { Settings, Users, Truck, Store, ShieldCheck, Activity } from 'lucide-react';

export default function SuperAdminDashboard() {
  const [activeTab, setActiveTab] = useState('overview');

  return (
    <div className="min-h-screen bg-slate-900 text-slate-100 font-sans selection:bg-indigo-500/30 flex">
      {/* Sidebar */}
      <aside className="w-64 bg-slate-800/50 backdrop-blur-md border-r border-slate-700/50 p-6 flex flex-col gap-6">
        <div className="flex items-center gap-3 mb-8">
          <div className="w-10 h-10 rounded-xl bg-gradient-to-tr from-indigo-500 to-purple-500 flex items-center justify-center shadow-lg shadow-indigo-500/30">
            <ShieldCheck className="w-6 h-6 text-white" />
          </div>
          <h1 className="text-2xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-indigo-400 to-purple-400">Olyyo OS</h1>
        </div>

        <nav className="flex flex-col gap-2">
          <NavItem icon={<Activity />} label="Overview" active={activeTab === 'overview'} onClick={() => setActiveTab('overview')} />
          <NavItem icon={<Settings />} label="Commissions" active={activeTab === 'commissions'} onClick={() => setActiveTab('commissions')} />
          <NavItem icon={<Truck />} label="Rider Approvals" active={activeTab === 'riders'} onClick={() => setActiveTab('riders')} />
          <NavItem icon={<Store />} label="Kitchen Approvals" active={activeTab === 'kitchens'} onClick={() => setActiveTab('kitchens')} />
          <NavItem icon={<Users />} label="Admins" active={activeTab === 'admins'} onClick={() => setActiveTab('admins')} />
        </nav>
      </aside>

      {/* Main Content */}
      <main className="flex-1 p-10 overflow-y-auto">
        <header className="flex justify-between items-center mb-10">
          <div>
            <h2 className="text-3xl font-semibold tracking-tight">Super Admin Dashboard</h2>
            <p className="text-slate-400 mt-1">Manage global platform settings and approvals.</p>
          </div>
          <div className="flex items-center gap-4">
            <button className="px-5 py-2.5 bg-indigo-600 hover:bg-indigo-500 transition-colors rounded-lg font-medium shadow-lg shadow-indigo-600/20">
              Generate Report
            </button>
          </div>
        </header>

        {activeTab === 'overview' && (
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-10">
            <StatCard title="Active Users" value="12,450" trend="+14%" />
            <StatCard title="Total Revenue" value="₹1.2M" trend="+8%" />
            <StatCard title="Pending Approvals" value="45" trend="-2%" alert />
          </div>
        )}

        {activeTab === 'commissions' && (
          <div className="bg-slate-800/40 backdrop-blur-xl border border-slate-700/50 rounded-2xl p-8 shadow-2xl relative overflow-hidden group">
            <div className="absolute top-0 right-0 w-64 h-64 bg-indigo-500/10 rounded-full blur-3xl -translate-y-1/2 translate-x-1/2 group-hover:bg-indigo-500/20 transition-all duration-700"></div>
            
            <h3 className="text-2xl font-semibold mb-6 flex items-center gap-2">
              <Settings className="text-indigo-400" /> Platform Commissions
            </h3>
            
            <div className="space-y-6">
              <CommissionRow label="Rider Commission" value="10" />
              <CommissionRow label="Super Admin Commission" value="20" />
              <CommissionRow label="Kitchen Commission" value="70" />
            </div>

            <div className="mt-8 flex justify-end">
              <button className="px-6 py-3 bg-gradient-to-r from-indigo-600 to-purple-600 hover:from-indigo-500 hover:to-purple-500 transition-all duration-300 rounded-xl font-medium shadow-lg shadow-indigo-600/20 hover:-translate-y-0.5">
                Save Changes
              </button>
            </div>
          </div>
        )}

        {/* Placeholder for other tabs */}
        {(activeTab === 'riders' || activeTab === 'kitchens' || activeTab === 'admins') && (
          <div className="flex flex-col items-center justify-center h-64 bg-slate-800/20 border border-slate-700/50 rounded-2xl border-dashed">
            <p className="text-slate-400 text-lg">Module in development</p>
          </div>
        )}

      </main>
    </div>
  );
}

function NavItem({ icon, label, active, onClick }) {
  return (
    <button 
      onClick={onClick}
      className={`flex items-center gap-3 px-4 py-3 rounded-xl transition-all duration-300 w-full ${
        active 
          ? 'bg-indigo-500/10 text-indigo-400 shadow-[inset_0_1px_0_0_rgba(255,255,255,0.1)] border border-indigo-500/20' 
          : 'text-slate-400 hover:text-slate-200 hover:bg-slate-800'
      }`}
    >
      {React.cloneElement(icon, { className: 'w-5 h-5' })}
      <span className="font-medium">{label}</span>
    </button>
  );
}

function StatCard({ title, value, trend, alert }) {
  return (
    <div className="bg-slate-800/40 backdrop-blur-xl border border-slate-700/50 rounded-2xl p-6 shadow-xl hover:-translate-y-1 transition-transform duration-300">
      <h4 className="text-slate-400 font-medium mb-2">{title}</h4>
      <div className="flex items-end justify-between">
        <span className="text-4xl font-bold">{value}</span>
        <span className={`text-sm font-medium px-2 py-1 rounded-md ${alert ? 'bg-rose-500/10 text-rose-400' : 'bg-emerald-500/10 text-emerald-400'}`}>
          {trend}
        </span>
      </div>
    </div>
  );
}

function CommissionRow({ label, value }) {
  return (
    <div className="flex items-center justify-between p-4 bg-slate-900/50 rounded-xl border border-slate-700/30">
      <span className="font-medium text-slate-300">{label}</span>
      <div className="flex items-center gap-2">
        <input 
          type="number" 
          defaultValue={value}
          className="w-20 bg-slate-800 border border-slate-600 rounded-lg px-3 py-2 text-center text-white focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:border-transparent transition-all"
        />
        <span className="text-slate-400">%</span>
      </div>
    </div>
  );
}
