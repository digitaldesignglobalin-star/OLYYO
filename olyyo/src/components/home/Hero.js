'use client';

import { useState, useEffect } from 'react';
import { Search, MapPin, Navigation, Clock, Award, Truck, ShieldCheck } from 'lucide-react';

export default function Hero() {
  const [searchQuery, setSearchQuery] = useState('');
  const [location, setLocation] = useState('');
  const [isTyping, setIsTyping] = useState(false);
  const [pulse, setPulse] = useState(true);

  useEffect(() => {
    const interval = setInterval(() => {
      setPulse(prev => !prev);
    }, 2000);
    return () => clearInterval(interval);
  }, []);

  const handleSearch = () => {
    console.log('Searching for:', searchQuery, 'in', location);
  };

  const stats = [
    { value: '500+', label: 'Restaurants', color: 'from-orange-500 to-red-500' },
    { value: '10K+', label: 'Happy Customers', color: 'from-orange-500 to-red-500' },
    { value: '15K+', label: 'Deliveries', color: 'from-orange-500 to-red-500' },
    { value: '4.8★', label: 'Average Rating', color: 'from-orange-500 to-red-500' },
  ];

  return (
    <section className="relative overflow-hidden">
      {/* Animated background */}
      <div className="absolute inset-0 bg-gradient-to-r from-orange-500/10 to-red-500/10">
        <div className="absolute inset-0 bg-gradient-to-br from-transparent via-white/30 to-transparent animate-shimmer"></div>
      </div>
      
      <div className="container mx-auto px-4 py-12 relative">
        {/* Hero Content */}
        <div className="max-w-3xl mx-auto text-center mb-12 animate-fade-in">
          <h1 className="text-5xl md:text-6xl font-bold mb-6 animate-slide-up" style={{animationDelay: '0.1s'}}>
            <span className="bg-gradient-to-r from-orange-600 to-red-600 bg-clip-text text-transparent 
                           animate-pulse-slow">
              FASTEST
            </span>
            <br />
            <span className="text-gray-800">FOOD DELIVERY IN</span>
            <span className={`text-orange-600 ml-2 inline-block ${pulse ? 'scale-110' : 'scale-100'} transition-transform duration-1000`}>
              10 MINS
            </span>
          </h1>
          <p className="text-xl text-gray-600 mb-8 animate-slide-up" style={{animationDelay: '0.2s'}}>
            Order your favorite food from the best restaurants near you
          </p>

          {/* Animated Search Bar */}
          <div className="bg-white rounded-2xl shadow-xl p-2 max-w-3xl mx-auto animate-slide-up 
                        hover:shadow-2xl hover:shadow-orange-500/20 transition-all duration-500" 
               style={{animationDelay: '0.3s'}}>
            <div className="flex flex-col md:flex-row gap-2">
              <div className="flex-1 flex items-center p-3 border-r border-gray-100 group">
                <div className="relative cursor-pointer">
                  <MapPin className={`w-5 h-5 text-orange-500 mr-3 transition-all duration-300 
                                   ${isTyping ? 'scale-125' : ''} group-hover:scale-125`} />
                  {pulse && (
                    <div className="absolute inset-0 w-5 h-5 rounded-full bg-orange-500/30 animate-ping"></div>
                  )}
                </div>
                <input
                  type="text"
                  placeholder="Enter your delivery location"
                  value={location}
                  onChange={(e) => setLocation(e.target.value)}
                  onFocus={() => setIsTyping(true)}
                  onBlur={() => setIsTyping(false)}
                  className="w-full outline-none text-gray-700 placeholder-gray-400 
                           transition-all duration-300 focus:placeholder-transparent"
                />
                <button className="ml-2 text-orange-500 hover:text-orange-600 text-sm font-medium 
                                 hover:scale-105 transition-transform duration-300 flex items-center cursor-pointer">
                  <Navigation className="w-4 h-4 mr-1" />
                  Current
                </button>
              </div>
              <div className="flex-1 flex items-center p-3 border-r border-gray-100 group cursor-pointer">
                <Search className={`w-5 h-5 text-gray-400 mr-3 transition-all duration-300 
                                 ${isTyping ? 'text-orange-500 scale-125' : ''} group-hover:text-orange-500`} />
                <input
                  type="text"
                  placeholder="Search for restaurants or dishes..."
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                  onFocus={() => setIsTyping(true)}
                  onBlur={() => setIsTyping(false)}
                  className="w-full outline-none text-gray-700 placeholder-gray-400 
                           transition-all duration-300 focus:placeholder-transparent"
                />
              </div>
              <button
                onClick={handleSearch}
                className="bg-gradient-to-r from-orange-500 to-red-500 text-white px-8 py-3 rounded-xl font-medium 
                         hover:shadow-lg hover:shadow-orange-500/40 transition-all duration-300 
                         hover:scale-105 active:scale-95 ripple-effect glow-on-hover flex items-center justify-center 
                         group animate-pulse-slow cursor-pointer"
              >
                <Search className="w-5 h-5 mr-2 group-hover:rotate-12 transition-transform duration-300" />
                Search
              </button>
            </div>
          </div>
        </div>

        {/* Animated Stats */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6 max-w-4xl mx-auto">
          {stats.map((stat, index) => (
            <div 
              key={index}
              className="bg-white p-6 rounded-2xl shadow-lg text-center card-hover animate-slide-up"
              style={{animationDelay: `${0.4 + index * 0.1}s`}}
            >
              <div className={`text-3xl font-bold bg-gradient-to-r ${stat.color} bg-clip-text text-transparent 
                             hover:scale-110 transition-transform duration-300 cursor-default`}>
                {stat.value}
              </div>
              <div className="text-gray-600 mt-2">{stat.label}</div>
              <div className="mt-3 h-1 w-12 mx-auto bg-gradient-to-r from-orange-500 to-red-500 rounded-full 
                            hover:w-16 transition-all duration-300"></div>
            </div>
          ))}
        </div>

        {/* Floating Delivery Icon */}
        <div className="absolute right-10 top-1/4 hidden lg:block">
          <div className="bg-gradient-to-r from-orange-500 to-red-500 w-16 h-16 rounded-2xl flex items-center justify-center 
                        shadow-xl float-animation">
            <Truck className="w-8 h-8 text-white" />
          </div>
        </div>

        {/* Floating Food Icon */}
        <div className="absolute left-10 bottom-1/4 hidden lg:block">
          <div className="bg-gradient-to-r from-orange-500 to-red-500 w-16 h-16 rounded-2xl flex items-center justify-center 
                        shadow-xl float-animation" style={{animationDelay: '1s'}}>
            <Award className="w-8 h-8 text-white" />
          </div>
        </div>
      </div>
    </section>
  );
}