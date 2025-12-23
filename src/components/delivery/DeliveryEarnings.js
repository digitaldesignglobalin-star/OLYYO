"use client";

export default function DeliveryEarnings() {
  return (
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
  );
}