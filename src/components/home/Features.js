'use client';

import { useState } from 'react';
import { Clock, ShieldCheck, Award, Truck, ChevronRight } from 'lucide-react';

const features = [
  { 
    icon: <Clock className="w-6 h-6" />, 
    title: '10-Minute Delivery', 
    desc: 'Fastest food delivery guaranteed',
    color: 'from-orange-500 to-yellow-500'
  },
  { 
    icon: <ShieldCheck className="w-6 h-6" />, 
    title: 'Safe Delivery', 
    desc: 'Contactless delivery options',
    color: 'from-green-500 to-emerald-500'
  },
  { 
    icon: <Award className="w-6 h-6" />, 
    title: 'Best Quality', 
    desc: 'Fresh ingredients from top restaurants',
    color: 'from-blue-500 to-indigo-500'
  },
  // { 
  //   icon: <Truck className="w-6 h-6" />, 
  //   title: 'Live Tracking', 
  //   desc: 'Track your order in real-time',
  //   color: 'from-purple-500 to-pink-500'
  // },
];

export default function Features() {
  const [hoveredIndex, setHoveredIndex] = useState(null);

  return (
    <section className="py-16 bg-gradient-to-b from-white to-orange-50">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-bold text-gray-800 mb-12 text-center animate-slide-up">
          Why Choose <span className="text-orange-600 animate-pulse-slow">OLYYO</span>
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {features.map((feature, index) => (
            <div 
              key={index}
              className="text-center group cursor-pointer animate-slide-up "
              style={{animationDelay: `${index * 0.1}s`}}
              onMouseEnter={() => setHoveredIndex(index)}
              onMouseLeave={() => setHoveredIndex(null)}
            >
              <div className={`relative bg-gradient-to-r ${feature.color} w-16 h-16 rounded-2xl 
                            flex items-center justify-center mx-auto mb-6 transition-all duration-500
                            ${hoveredIndex === index ? 'scale-110 rotate-3' : 'scale-100 rotate-0'}
                            group-hover:shadow-xl group-hover:shadow-gray-300/50`}>
                <div className="text-white transition-transform duration-500 group-hover:scale-125">
                  {feature.icon}
                </div>
                
                {/* Animated ring */}
                <div className={`absolute inset-0 rounded-2xl border-2 border-transparent 
                              transition-all duration-500
                              ${hoveredIndex === index ? 'border-white/50 scale-125' : ''}`}></div>
              </div>
              
              <h3 className="text-xl font-bold text-gray-800 mb-3 transition-all duration-300 
                           group-hover:scale-105 group-hover:text-orange-600">
                {feature.title}
              </h3>
              
              <p className="text-gray-600 transition-all duration-300 group-hover:text-gray-800">
                {feature.desc}
              </p>
              
              <div className="mt-4 opacity-0 group-hover:opacity-100 transition-all duration-300">
                <ChevronRight className="w-5 h-5 text-orange-500 mx-auto 
                                       group-hover:translate-x-2 transition-transform duration-300" />
              </div>
              
              {/* Animated underline */}
              <div className={`w-0 h-0.5 bg-gradient-to-r ${feature.color} mx-auto mt-2 
                            group-hover:w-12 transition-all duration-500 rounded-full`}></div>
            </div>
          ))}
        </div>

        {/* Animated separator */}
        <div className="mt-16 flex justify-center">
          <div className="relative">
            <div className="w-48 h-1 bg-gradient-to-r from-orange-500 to-red-500 rounded-full 
                          animate-pulse-slow"></div>
            <div className="absolute -top-2 left-[50%] w-4 h-4 bg-gradient-to-r from-orange-500 to-red-500 
                          rounded-full animate-ping"></div>
          </div>
        </div>
      </div>
    </section>
  );
}