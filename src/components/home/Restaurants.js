'use client';

import { useState } from 'react';
import { Heart, Clock, Star, ChevronRight, Flame } from 'lucide-react';

const restaurants = [
  { id: 1, name: 'Pizza Palace', rating: 4.5, deliveryTime: '10-15 min', category: 'Italian', trending: true },
  { id: 2, name: 'Burger Barn', rating: 4.3, deliveryTime: '15-20 min', category: 'Fast Food', trending: false },
  { id: 3, name: 'Sushi Zen', rating: 4.7, deliveryTime: '20-25 min', category: 'Japanese', trending: true },
  { id: 4, name: 'Taco Fiesta', rating: 4.2, deliveryTime: '10-12 min', category: 'Mexican', trending: false },
  { id: 5, name: 'Curry House', rating: 4.6, deliveryTime: '25-30 min', category: 'Indian', trending: true },
  { id: 6, name: 'Pasta Paradise', rating: 4.4, deliveryTime: '18-22 min', category: 'Italian', trending: false },
];

export default function Restaurants() {
  const [likedRestaurants, setLikedRestaurants] = useState([]);

  const toggleLike = (id) => {
    setLikedRestaurants(prev =>
      prev.includes(id) ? prev.filter(restId => restId !== id) : [...prev, id]
    );
  };

  return (
    <section className="py-16 bg-white">
      <div className="container mx-auto px-4">
        <div className="flex justify-between items-center mb-8 animate-slide-up">
          <h2 className="text-3xl font-bold text-gray-800 flex items-center group">
            Popular Restaurants
            <Flame className="w-6 h-6 text-orange-500 ml-2 group-hover:scale-125 group-hover:rotate-12 transition-all duration-300" />
          </h2>
          <button className="flex items-center text-orange-600 hover:text-orange-700 font-medium 
                          group hover:scale-105 transition-all duration-300">
            View All 
            <ChevronRight className="w-5 h-5 ml-1 group-hover:translate-x-2 transition-transform duration-300" />
          </button>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {restaurants.map((restaurant, index) => (
            <div 
              key={restaurant.id}
              className="bg-white rounded-2xl shadow-lg overflow-hidden card-hover animate-slide-up cursor-pointer"
              style={{animationDelay: `${index * 0.1}s`}}
            >
              <div className="relative overflow-hidden group">
                <div className="h-48 bg-gradient-to-r from-orange-400 to-red-400 group-hover:scale-105 
                             transition-transform duration-500"></div>
                
                {/* Trending Badge */}
                {restaurant.trending && (
                  <div className="absolute top-4 left-4 bg-gradient-to-r from-orange-500 to-red-500 text-white 
                                px-3 py-1 rounded-full flex items-center text-sm font-medium
                                animate-pulse-slow">
                    <Flame className="w-3 h-3 mr-1" />
                    Trending
                  </div>
                )}

                {/* Like Button */}
                <button 
                  onClick={() => toggleLike(restaurant.id)}
                  className="absolute top-2 right-0 p-2 bg-white/90 rounded-full hover:bg-white 
                           transition-all duration-300 hover:scale-110 ripple-effect cursor-pointer"
                >
                  <Heart className={`w-5 h-5 transition-all duration-300 ${
                    likedRestaurants.includes(restaurant.id) 
                      ? 'text-red-500 fill-red-500 scale-125' 
                      : 'text-gray-600'
                  }`} />
                </button>

                {/* Delivery Time */}
                <div className="absolute bottom-10 left-1 bg-white/90 backdrop-blur-sm px-3 py-1 rounded-full 
                              flex items-center group-hover:bg-white group-hover:scale-105 
                              transition-all duration-300">
                  <Clock className="w-4 h-4 text-green-500 mr-1 animate-spin-slow" />
                  <span className="text-sm font-medium">{restaurant.deliveryTime}</span>
                </div>
              </div>
              
              <div className="p-6">
                <div className="flex justify-between items-start mb-3">
                  <h3 className="text-xl font-bold text-gray-800 group-hover:text-orange-600 
                               transition-colors duration-300">
                    {restaurant.name}
                  </h3>
                  <div className="flex items-center bg-orange-50 px-2 py-1 rounded group 
                                hover:bg-gradient-to-r hover:from-orange-500 hover:to-red-500 
                                transition-all duration-300">
                    <Star className="w-4 h-4 text-orange-500 fill-current group-hover:text-white 
                                   transition-colors duration-300" />
                    <span className="ml-1 font-medium group-hover:text-white transition-colors duration-300">
                      {restaurant.rating}
                    </span>
                  </div>
                </div>
                <p className="text-gray-600 mb-4 group-hover:text-gray-800 transition-colors duration-300">
                  {restaurant.category}
                </p>
                <button className="w-full bg-gradient-to-r from-orange-500 to-red-500 text-white py-3 
                                 rounded-xl font-medium hover:shadow-lg hover:shadow-orange-500/30 
                                 transition-all duration-300 hover:scale-105 active:scale-95 
                                 group flex items-center justify-center ripple-effect cursor-pointer">
                  <span className="group-hover:scale-110 transition-transform duration-300">Order Now</span>
                  <ChevronRight className="w-4 h-4 ml-2 opacity-0 group-hover:opacity-100 group-hover:translate-x-2 
                                         transition-all duration-300" />
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}