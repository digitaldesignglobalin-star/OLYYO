'use client';

import { useState } from 'react';
import { Star, ShoppingBag, Plus } from 'lucide-react';

const popularFoods = [
  { id: 1, name: 'Margherita Pizza', price: '$12.99', restaurant: 'Pizza Palace', rating: 4.8 },
  { id: 2, name: 'Double Cheeseburger', price: '$8.99', restaurant: 'Burger Barn', rating: 4.5 },
  { id: 3, name: 'California Roll', price: '$15.99', restaurant: 'Sushi Zen', rating: 4.9 },
  { id: 4, name: 'Chicken Tacos', price: '$10.99', restaurant: 'Taco Fiesta', rating: 4.3 },
];

export default function Foods() {
  const [cartItems, setCartItems] = useState({});

  const addToCart = (id) => {
    setCartItems(prev => ({
      ...prev,
      [id]: (prev[id] || 0) + 1
    }));
    
    // Animation effect
    const button = document.getElementById(`add-to-cart-${id}`);
    if (button) {
      button.classList.add('scale-90');
      setTimeout(() => {
        button.classList.remove('scale-90');
      }, 150);
    }
  };

  return (
    <section className="py-16 bg-gradient-to-b from-gray-50 to-white">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-bold text-gray-800 mb-8 text-center animate-slide-up">
          Trending Dishes
          <div className="w-24 h-1 bg-gradient-to-r from-orange-500 to-red-500 mx-auto mt-2 rounded-full 
                        hover:w-32 transition-all duration-300"></div>
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {popularFoods.map((food, index) => (
            <div 
              key={food.id}
              className="bg-white rounded-2xl shadow-lg p-6 card-hover animate-slide-up group"
              style={{animationDelay: `${index * 0.1}s`}}
            >
              {/* Food Image */}
              <div className="relative overflow-hidden rounded-xl mb-4 group-hover:scale-105 transition-transform duration-500">
                <div className="bg-gradient-to-r from-orange-400 to-red-400 h-40 shimmer-effect"></div>
                <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent opacity-0 
                              group-hover:opacity-100 transition-opacity duration-300"></div>
              </div>

              {/* Food Info */}
              <div className="flex justify-between items-start mb-2">
                <h3 className="text-lg font-bold text-gray-800 group-hover:text-orange-600 
                             transition-colors duration-300">
                  {food.name}
                </h3>
                <div className="flex items-center group cursor-default">
                  <Star className="w-4 h-4 text-orange-500 fill-current group-hover:scale-125 
                                 transition-transform duration-300" />
                  <span className="ml-1 text-sm font-medium group-hover:scale-110 transition-transform duration-300">
                    {food.rating}
                  </span>
                </div>
              </div>
              
              <p className="text-gray-600 text-sm mb-4 group-hover:text-gray-800 transition-colors duration-300">
                {food.restaurant}
              </p>
              
              <div className="flex justify-between items-center">
                <div className="flex items-center">
                  <span className="text-xl font-bold text-orange-600 group-hover:scale-110 
                                 transition-transform duration-300">
                    {food.price}
                  </span>
                  {cartItems[food.id] > 0 && (
                    <span className="ml-2 text-xs bg-green-100 text-green-600 px-2 py-1 rounded-full 
                                   animate-scale">
                      +{cartItems[food.id]}
                    </span>
                  )}
                </div>
                <button 
                  id={`add-to-cart-${food.id}`}
                  onClick={() => addToCart(food.id)}
                  className="bg-gradient-to-r from-orange-500 to-red-500 text-white px-4 py-2 rounded-lg 
                           hover:shadow-lg hover:shadow-orange-500/30 transition-all duration-300 
                           hover:scale-105 active:scale-95 flex items-center ripple-effect"
                >
                  <ShoppingBag className="w-4 h-4 mr-1 group-hover:rotate-12 transition-transform duration-300" />
                  Add
                  <Plus className="w-3 h-3 ml-1 opacity-0 group-hover:opacity-100 group-hover:scale-125 
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