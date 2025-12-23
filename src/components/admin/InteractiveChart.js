"use client";

import { useState } from "react";

export default function InteractiveChart({ title, type = "line", data }) {
  const [hoveredIndex, setHoveredIndex] = useState(null);
  const [timeRange, setTimeRange] = useState("month");

  const chartPoints = data || [
    { name: "Jan", value: 65, target: 50 },
    { name: "Feb", value: 78, target: 60 },
    { name: "Mar", value: 90, target: 70 },
    { name: "Apr", value: 85, target: 75 },
    { name: "May", value: 105, target: 85 },
    { name: "Jun", value: 120, target: 100 },
    { name: "Jul", value: 135, target: 115 },
  ];

  const maxValue = Math.max(
    ...chartPoints.map((d) => Math.max(d.value, d.target || 0))
  );

  return (
    <div
      className="relative bg-gradient-to-br from-gray-900 to-gray-950 border border-gray-800 rounded-2xl p-6 
                  hover:border-gray-700 transition-all duration-500 group"
    >
      {/* Glow effect */}
      <div className="absolute inset-0 bg-gradient-to-r from-orange-500/5 to-red-500/5 rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>

      <div className="relative">
        {/* Header */}
        <div className="flex flex-col lg:flex-row lg:items-center justify-between mb-8">
          <div>
            <h3 className="text-xl font-bold text-white flex items-center">
              {title}
              <div className="ml-3 w-2 h-2 bg-gradient-to-r from-orange-500 to-red-500 rounded-full animate-pulse"></div>
            </h3>
            <p className="text-gray-400 text-sm mt-1">
              Real-time performance metrics
            </p>
          </div>

          {/* Time Range Selector */}
          <div className="flex items-center space-x-4 mt-4 lg:mt-0">
            <div className="flex bg-gray-800 rounded-xl p-1">
              {["day", "week", "month", "year"].map((range) => (
                <button
                  key={range}
                  onClick={() => setTimeRange(range)}
                  className={`px-4 py-2 rounded-lg text-sm font-medium capitalize transition-all duration-300 ${
                    timeRange === range
                      ? "bg-gradient-to-r from-gray-700 to-gray-800 text-white shadow-lg"
                      : "text-gray-400 hover:text-white"
                  }`}
                >
                  {range}
                </button>
              ))}
            </div>
          </div>
        </div>

        {/* Visible Chart Area */}
        <div className="relative h-64">
          {/* Grid Background */}
          <div className="absolute inset-0 grid grid-cols-7 grid-rows-5 gap-0">
            {Array.from({ length: 35 }).map((_, i) => (
              <div key={i} className="border border-gray-800/30"></div>
            ))}
          </div>

          {/* Y-axis labels */}
          <div className="absolute left-0 top-0 bottom-0 w-12 flex flex-col justify-between py-4">
            {[0, 25, 50, 75, 100].map((value) => (
              <div
                key={value}
                className="text-xs text-gray-500 text-right pr-2"
              >
                {value}%
              </div>
            ))}
          </div>

          {/* Chart Container */}
          <div className="ml-12 h-full relative pr-4">
            {/* Chart Lines */}
            <div className="absolute inset-0 flex items-end space-x-4 px-2">
              {chartPoints.map((point, index) => {
                const heightPercent = (point.value / maxValue) * 100;

                return (
                  <div
                    key={index}
                    className="flex-1 flex flex-col items-center relative group/card"
                    onMouseEnter={() => setHoveredIndex(index)}
                    onMouseLeave={() => setHoveredIndex(null)}
                  >
                    {/* Value Tooltip */}
                    {hoveredIndex === index && (
                      <div className="absolute -top-16 left-1/2 transform -translate-x-1/2 bg-gray-900 border border-gray-700 rounded-lg p-3 shadow-2xl z-10 animate-fade-in">
                        <div className="text-sm font-bold text-white">
                          ${point.value}K
                        </div>
                        <div className="text-xs text-gray-400">
                          {point.name} 2024
                        </div>
                      </div>
                    )}

                    {/* Chart Bar/Line */}
                    <div className="relative w-full flex justify-center">
                      <div
                        className={`w-3/4 rounded-t-xl transition-all duration-500 bg-gradient-to-t from-blue-500/30 to-blue-500 group-hover/card:w-full group-hover/card:shadow-lg`}
                        style={{ height: `${heightPercent}%` }}
                      >
                        {/* Sparkle effect on hover */}
                        {hoveredIndex === index && (
                          <div className="absolute inset-0 bg-gradient-to-t from-white/20 to-transparent rounded-t-xl"></div>
                        )}
                      </div>
                    </div>

                    {/* X-axis label */}
                    <div
                      className={`mt-4 text-sm font-medium transition-all duration-300 ${
                        hoveredIndex === index
                          ? "text-white scale-110"
                          : "text-gray-500"
                      }`}
                    >
                      {point.name}
                    </div>

                    {/* Data Point Indicator */}
                    <div
                      className={`absolute -top-2 transform -translate-y-full transition-all duration-300 ${
                        hoveredIndex === index ? "opacity-100" : "opacity-0"
                      }`}
                    >
                      <div className="text-xs font-bold text-white bg-gray-900 px-2 py-1 rounded-lg shadow-lg">
                        ${point.value}K
                      </div>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}