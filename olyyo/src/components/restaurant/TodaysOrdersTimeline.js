"use client";

export default function TodaysOrdersTimeline() {
  const timeSlots = [
    { time: "9 AM", orders: 12, peak: false },
    { time: "10 AM", orders: 18, peak: false },
    { time: "11 AM", orders: 25, peak: false },
    { time: "12 PM", orders: 35, peak: true },
    { time: "1 PM", orders: 45, peak: true },
    { time: "2 PM", orders: 30, peak: false },
    { time: "3 PM", orders: 28, peak: false },
    { time: "4 PM", orders: 22, peak: false },
    { time: "5 PM", orders: 38, peak: false },
    { time: "6 PM", orders: 42, peak: true },
    { time: "7 PM", orders: 52, peak: true },
    { time: "8 PM", orders: 40, peak: false },
    { time: "9 PM", orders: 32, peak: false },
  ];

  const maxOrders = Math.max(...timeSlots.map((slot) => slot.orders));

  return (
    <div className="bg-gray-900 border border-gray-800 rounded-2xl p-6">
      <div className="flex flex-col sm:flex-row sm:items-center justify-between mb-6 gap-4">
        <div>
          <h3 className="text-lg font-bold text-white">
            Today's Orders Timeline
          </h3>
          <p className="text-gray-400 text-sm">
            Real-time order distribution throughout the day
          </p>
        </div>
        <div className="flex items-center space-x-4">
          <div className="flex items-center text-sm text-gray-400">
            <div className="w-3 h-3 rounded-full bg-blue-500 mr-2"></div>
            Regular Hours
          </div>
          <div className="flex items-center text-sm text-gray-400">
            <div className="w-3 h-3 rounded-full bg-orange-500 mr-2"></div>
            Peak Hours
          </div>
        </div>
      </div>

      {/* Timeline Visualization */}
      <div className="relative h-100 overflow-x-auto">
        {/* Horizontal timeline line */}
        <div className="absolute left-0 right-0 top-1/2 h-0.5 bg-gray-800"></div>

        {/* Grid lines for reference */}
        <div className="absolute inset-0 flex justify-between">
          {[0, 25, 50, 75, 100].map((percent, i) => (
            <div key={i} className="h-full w-px bg-gray-800"></div>
          ))}
        </div>

        {/* Time slots with bars */}
        <div className="relative flex justify-between items-center h-full">
          {timeSlots.map((slot, index) => {
            const height = (slot.orders / maxOrders) * 120;
            return (
              <div key={index} className="flex flex-col items-center flex-1">
                {/* Order bar */}
                <div className="relative w-full flex justify-center">
                  <div
                    className={`w-6 rounded-t-lg transition-all duration-300 hover:opacity-80 ${
                      slot.peak
                        ? "bg-gradient-to-t from-orange-500 to-red-500"
                        : "bg-gradient-to-t from-blue-500 to-cyan-500"
                    }`}
                    style={{ height: `${height}px` }}
                    title={`${slot.orders} orders at ${slot.time}`}
                  >
                    {/* Order count overlay */}
                    <div className="absolute -top-6 left-1/2 transform -translate-x-1/2 text-xs font-bold text-white bg-gray-900 px-1 rounded">
                      {slot.orders}
                    </div>
                  </div>
                </div>

                {/* Time label */}
                <div className="mt-2 text-xs text-gray-500 text-center min-h-[2rem] flex items-center justify-center">
                  {slot.time}
                </div>

                {/* Dot on timeline */}
                <div
                  className={`absolute top-1/2 w-2 h-2 rounded-full -translate-y-1/2 ${
                    slot.peak ? "bg-orange-500" : "bg-blue-500"
                  }`}
                ></div>
              </div>
            );
          })}
        </div>

        {/* Peak hour indicators */}
        <div className="absolute -bottom-8 left-1/4 transform -translate-x-1/2">
          <div className="text-xs text-orange-400 font-medium bg-orange-500/10 px-3 py-1.5 rounded-full whitespace-nowrap">
            🍽️ Lunch Peak
          </div>
        </div>
        <div className="absolute -bottom-8 left-3/4 transform -translate-x-1/2">
          <div className="text-xs text-orange-400 font-medium bg-orange-500/10 px-3 py-1.5 rounded-full whitespace-nowrap">
            🍕 Dinner Peak
          </div>
        </div>
      </div>

      {/* Stats summary */}
      <div className="mt-12 pt-6 border-t border-gray-800">
        <div className="grid grid-cols-2 sm:grid-cols-4 gap-4">
          <div className="text-center p-3 bg-gray-800/30 rounded-lg">
            <div className="text-lg font-bold text-white">156</div>
            <div className="text-xs text-gray-500">Total Orders</div>
          </div>
          <div className="text-center p-3 bg-gray-800/30 rounded-lg">
            <div className="text-lg font-bold text-orange-400">97</div>
            <div className="text-xs text-gray-500">Peak Orders</div>
          </div>
          <div className="text-center p-3 bg-gray-800/30 rounded-lg">
            <div className="text-lg font-bold text-blue-400">12:00 PM</div>
            <div className="text-xs text-gray-500">Lunch Peak Time</div>
          </div>
          <div className="text-center p-3 bg-gray-800/30 rounded-lg">
            <div className="text-lg font-bold text-blue-400">7:00 PM</div>
            <div className="text-xs text-gray-500">Dinner Peak Time</div>
          </div>
        </div>
      </div>
    </div>
  );
}