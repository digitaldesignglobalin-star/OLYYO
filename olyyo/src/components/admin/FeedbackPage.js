"use client";

import { useState } from "react";
import { Star, ThumbsUp, MoreVertical } from "lucide-react";

// Feedback Page Component
export default function FeedbackPage() {
  const feedbacks = [
    {
      id: 1,
      customer: "Sarah Johnson",
      rating: 5,
      comment: "Excellent service! Delivery was on time and food was hot.",
      date: "2 hours ago",
      type: "positive",
      restaurant: "Pizza Palace",
    },
    {
      id: 2,
      customer: "Mike Chen",
      rating: 4,
      comment: "Good food but packaging could be better.",
      date: "5 hours ago",
      type: "positive",
      restaurant: "Burger Barn",
    },
    {
      id: 3,
      customer: "Lisa Brown",
      rating: 3,
      comment: "Average experience, delivery was a bit late.",
      date: "1 day ago",
      type: "neutral",
      restaurant: "Sushi Zen",
    },
    {
      id: 4,
      customer: "Tom Wilson",
      rating: 5,
      comment: "Best pizza in town! Will order again.",
      date: "2 days ago",
      type: "positive",
      restaurant: "Pizza Palace",
    },
    {
      id: 5,
      customer: "Emily Davis",
      rating: 2,
      comment: "Missing items from my order.",
      date: "3 days ago",
      type: "negative",
      restaurant: "Taco Fiesta",
    },
    {
      id: 6,
      customer: "Robert Kim",
      rating: 4,
      comment: "Good quality food, reasonable prices.",
      date: "4 days ago",
      type: "positive",
      restaurant: "Coffee Corner",
    },
  ];

  const [selectedType, setSelectedType] = useState("all");

  const filteredFeedbacks =
    selectedType === "all"
      ? feedbacks
      : feedbacks.filter((f) => f.type === selectedType);

  return (
    <div className="space-y-6 animate-fade-in">
      <div className="bg-gradient-to-br from-gray-900 to-gray-950 border border-gray-800 rounded-2xl p-6">
        <div className="flex flex-col lg:flex-row lg:items-center justify-between mb-6">
          <div>
            <h2 className="text-2xl font-bold text-white">Customer Feedback</h2>
            <p className="text-gray-400">Total 156 feedbacks received</p>
          </div>

          {/* Filter Buttons */}
          <div className="flex space-x-2 mt-4 lg:mt-0">
            <button
              onClick={() => setSelectedType("all")}
              className={`px-4 py-2 rounded-lg text-sm font-medium transition-all duration-300 ${
                selectedType === "all"
                  ? "bg-gradient-to-r from-orange-500 to-red-500 text-white"
                  : "bg-gray-800 text-gray-400 hover:text-white"
              }`}
            >
              All
            </button>
            <button
              onClick={() => setSelectedType("positive")}
              className={`px-4 py-2 rounded-lg text-sm font-medium transition-all duration-300 ${
                selectedType === "positive"
                  ? "bg-gradient-to-r from-green-500 to-emerald-500 text-white"
                  : "bg-gray-800 text-gray-400 hover:text-white"
              }`}
            >
              Positive
            </button>
            <button
              onClick={() => setSelectedType("negative")}
              className={`px-4 py-2 rounded-lg text-sm font-medium transition-all duration-300 ${
                selectedType === "negative"
                  ? "bg-gradient-to-r from-red-500 to-pink-500 text-white"
                  : "bg-gray-800 text-gray-400 hover:text-white"
              }`}
            >
              Negative
            </button>
          </div>
        </div>

        {/* Feedback Stats */}
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-4 mb-8">
          <div className="bg-gradient-to-br from-green-500/10 to-green-600/10 border border-green-500/20 rounded-xl p-4">
            <div className="text-2xl font-bold text-white mb-1">124</div>
            <div className="text-sm text-gray-400">Positive</div>
          </div>
          <div className="bg-gradient-to-br from-red-500/10 to-red-600/10 border border-red-500/20 rounded-xl p-4">
            <div className="text-2xl font-bold text-white mb-1">18</div>
            <div className="text-sm text-gray-400">Negative</div>
          </div>
          <div className="bg-gradient-to-br from-yellow-500/10 to-yellow-600/10 border border-yellow-500/20 rounded-xl p-4">
            <div className="text-2xl font-bold text-white mb-1">14</div>
            <div className="text-sm text-gray-400">Neutral</div>
          </div>
          <div className="bg-gradient-to-br from-blue-500/10 to-blue-600/10 border border-blue-500/20 rounded-xl p-4">
            <div className="text-2xl font-bold text-white mb-1">4.6</div>
            <div className="text-sm text-gray-400">Avg Rating</div>
          </div>
        </div>

        {/* Feedback List */}
        <div className="space-y-4">
          {filteredFeedbacks.map((feedback) => (
            <div
              key={feedback.id}
              className="p-4 bg-gray-800/30 border border-gray-800 rounded-xl hover:bg-gray-800/50 transition-colors"
            >
              <div className="flex items-start justify-between">
                <div className="flex items-center space-x-3">
                  <div className="w-10 h-10 bg-gradient-to-br from-gray-800 to-gray-900 rounded-lg flex items-center justify-center">
                    <span className="font-bold text-white">
                      {feedback.customer.charAt(0)}
                    </span>
                  </div>
                  <div>
                    <p className="text-sm font-medium text-white">
                      {feedback.customer}
                    </p>
                    <p className="text-xs text-gray-400">
                      {feedback.restaurant}
                    </p>
                  </div>
                </div>
                <div className="flex items-center space-x-2">
                  <div className="flex">
                    {[...Array(5)].map((_, i) => (
                      <Star
                        key={i}
                        className={`w-4 h-4 ${
                          i < feedback.rating
                            ? "text-yellow-500 fill-current"
                            : "text-gray-600"
                        }`}
                      />
                    ))}
                  </div>
                  <span className="text-xs text-gray-500">{feedback.date}</span>
                </div>
              </div>
              <p className="mt-3 text-sm text-gray-300">{feedback.comment}</p>
              <div className="flex items-center justify-between mt-3">
                <div
                  className={`px-3 py-1 rounded-full text-xs ${
                    feedback.type === "positive"
                      ? "bg-green-500/10 text-green-400"
                      : feedback.type === "negative"
                      ? "bg-red-500/10 text-red-400"
                      : "bg-yellow-500/10 text-yellow-400"
                  }`}
                >
                  {feedback.type.charAt(0).toUpperCase() +
                    feedback.type.slice(1)}
                </div>
                <div className="flex space-x-2">
                  <button className="p-1.5 hover:bg-gray-800 rounded-lg transition-colors">
                    <ThumbsUp className="w-4 h-4 text-gray-400" />
                  </button>
                  <button className="p-1.5 hover:bg-gray-800 rounded-lg transition-colors">
                    <MoreVertical className="w-4 h-4 text-gray-400" />
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}