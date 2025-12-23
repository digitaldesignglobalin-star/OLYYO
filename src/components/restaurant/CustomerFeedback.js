"use client";

import { useState } from "react";
import {
  User,
  CalendarDays,
  ThumbsUp,
  MessageCircle,
  FileText,
  Star as StarIcon,
  MessageSquare,
} from "lucide-react";

export default function CustomerFeedback() {
  const [feedbacks, setFeedbacks] = useState([
    {
      id: 1,
      customer: "John Smith",
      order: "#7842",
      rating: 5,
      comment: "Excellent food quality and timely delivery! Will order again.",
      date: "Today, 11:30 AM",
      sentiment: "positive",
      tags: ["Food Quality", "Delivery"],
    },
    {
      id: 2,
      customer: "Emma Wilson",
      order: "#7841",
      rating: 4,
      comment: "Good taste but packaging could be better.",
      date: "Yesterday, 8:15 PM",
      sentiment: "positive",
      tags: ["Taste", "Packaging"],
    },
    {
      id: 3,
      customer: "Michael Brown",
      order: "#7840",
      rating: 2,
      comment: "Order was delayed by 30 minutes and pizza was cold.",
      date: "Nov 28, 4:45 PM",
      sentiment: "negative",
      tags: ["Delivery", "Temperature"],
    },
    {
      id: 4,
      customer: "Sarah Johnson",
      order: "#7839",
      rating: 5,
      comment: "Best pasta in town! Perfectly cooked and great portion size.",
      date: "Nov 28, 2:20 PM",
      sentiment: "positive",
      tags: ["Food Quality", "Portion"],
    },
    {
      id: 5,
      customer: "David Lee",
      order: "#7838",
      rating: 3,
      comment: "Average experience. Nothing special but not bad either.",
      date: "Nov 27, 9:45 PM",
      sentiment: "neutral",
      tags: ["Average"],
    },
  ]);

  const [filter, setFilter] = useState("all");

  const filteredFeedbacks =
    filter === "all"
      ? feedbacks
      : feedbacks.filter((f) => f.sentiment === filter);

  const averageRating = (
    feedbacks.reduce((sum, f) => sum + f.rating, 0) / feedbacks.length
  ).toFixed(1);

  const sentimentColors = {
    positive: "bg-green-500/10 text-green-400",
    negative: "bg-red-500/10 text-red-400",
    neutral: "bg-yellow-500/10 text-yellow-400",
  };

  return (
    <div className="bg-gray-900 border border-gray-800 rounded-2xl p-6">
      <div className="flex flex-col lg:flex-row lg:items-center lg:justify-between gap-4 mb-6">
        <div>
          <h3 className="text-lg font-bold text-white">Customer Feedback</h3>
          <p className="text-gray-400 text-sm">
            Reviews and ratings from customers
          </p>
        </div>

        <div className="flex items-center space-x-4">
          {/* Rating Summary */}
          <div className="flex items-center space-x-2">
            <div className="text-center">
              <div className="text-2xl font-bold text-white">
                {averageRating}
              </div>
              <div className="text-xs text-gray-400">Avg Rating</div>
            </div>
            <div className="flex">
              {[1, 2, 3, 4, 5].map((star) => (
                <StarIcon
                  key={star}
                  className={`w-4 h-4 ${
                    star <= averageRating
                      ? "text-yellow-400 fill-yellow-400"
                      : "text-gray-600"
                  }`}
                />
              ))}
            </div>
          </div>

          {/* Filter Buttons */}
          <div className="flex space-x-1 flex-wrap">
            {["all", "positive", "negative", "neutral"].map((type) => (
              <button
                key={type}
                onClick={() => setFilter(type)}
                className={`my-1 px-3 py-1 text-xs rounded-full ${
                  filter === type
                    ? type === "positive"
                      ? "bg-green-500/20 text-green-400"
                      : type === "negative"
                      ? "bg-red-500/20 text-red-400"
                      : type === "neutral"
                      ? "bg-yellow-500/20 text-yellow-400"
                      : "bg-gray-700 text-white"
                    : "bg-gray-800 text-gray-400 hover:bg-gray-700"
                }`}
              >
                {type.charAt(0).toUpperCase() + type.slice(1)}
              </button>
            ))}
          </div>
        </div>
      </div>

      {/* Feedback Stats */}
      <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-6">
        <div className="bg-gray-800/30 p-4 rounded-lg">
          <div className="text-lg font-bold text-green-400">
            {feedbacks.filter((f) => f.sentiment === "positive").length}
          </div>
          <div className="text-xs text-gray-400">Positive Reviews</div>
        </div>
        <div className="bg-gray-800/30 p-4 rounded-lg">
          <div className="text-lg font-bold text-red-400">
            {feedbacks.filter((f) => f.sentiment === "negative").length}
          </div>
          <div className="text-xs text-gray-400">Negative Reviews</div>
        </div>
        <div className="bg-gray-800/30 p-4 rounded-lg">
          <div className="text-lg font-bold text-yellow-400">
            {feedbacks.filter((f) => f.sentiment === "neutral").length}
          </div>
          <div className="text-xs text-gray-400">Neutral Reviews</div>
        </div>
        <div className="bg-gray-800/30 p-4 rounded-lg">
          <div className="text-lg font-bold text-white">{feedbacks.length}</div>
          <div className="text-xs text-gray-400">Total Feedback</div>
        </div>
      </div>

      {/* Feedback List */}
      <div className="space-y-4">
        {filteredFeedbacks.map((feedback) => (
          <div
            key={feedback.id}
            className="p-4 rounded-lg bg-gray-800/30 hover:bg-gray-800/50 transition-colors"
          >
            <div className="flex flex-col sm:flex-row sm:items-start justify-between gap-4">
              {/* Left Column */}
              <div className="flex-1">
                <div className="flex items-start justify-between mb-2">
                  <div>
                    <div className="flex items-center space-x-2">
                      <div className="w-8 h-8 bg-gradient-to-br from-blue-500 to-cyan-500 rounded-full flex items-center justify-center">
                        <User className="w-4 h-4 text-white" />
                      </div>
                      <div>
                        <h4 className="text-sm font-medium text-white">
                          {feedback.customer}
                        </h4>
                        <div className="text-xs text-gray-400">
                          Order {feedback.order}
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="flex items-center space-x-2">
                    <div className="flex">
                      {[1, 2, 3, 4, 5].map((star) => (
                        <StarIcon
                          key={star}
                          className={`w-4 h-4 ${
                            star <= feedback.rating
                              ? "text-yellow-400 fill-yellow-400"
                              : "text-gray-600"
                          }`}
                        />
                      ))}
                    </div>
                    <span
                      className={`px-2 py-1 text-xs rounded-full ${
                        sentimentColors[feedback.sentiment]
                      }`}
                    >
                      {feedback.sentiment.charAt(0).toUpperCase() +
                        feedback.sentiment.slice(1)}
                    </span>
                  </div>
                </div>

                <p className="text-sm text-gray-300 mt-2">{feedback.comment}</p>

                {/* Tags */}
                <div className="flex flex-wrap gap-2 mt-3">
                  {feedback.tags.map((tag, index) => (
                    <span
                      key={index}
                      className="px-2 py-1 text-xs bg-gray-800 text-gray-400 rounded-full"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
              </div>

              {/* Right Column */}
              <div className="flex flex-col items-end space-y-2 min-w-[120px]">
                <div className="text-xs text-gray-500 flex items-center">
                  <CalendarDays className="w-3 h-3 mr-1" />
                  {feedback.date}
                </div>
                <div className="flex space-x-2">
                  <button className="p-1.5 hover:bg-gray-700 rounded">
                    <ThumbsUp className="w-4 h-4 text-green-400" />
                  </button>
                  <button className="p-1.5 hover:bg-gray-700 rounded">
                    <MessageCircle className="w-4 h-4 text-blue-400" />
                  </button>
                  <button className="p-1.5 hover:bg-gray-700 rounded">
                    <FileText className="w-4 h-4 text-gray-400" />
                  </button>
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>

      {/* Empty State */}
      {filteredFeedbacks.length === 0 && (
        <div className="text-center py-8">
          <MessageSquare className="w-12 h-12 text-gray-600 mx-auto mb-4" />
          <p className="text-gray-400">
            No {filter === "all" ? "" : filter} feedback found
          </p>
        </div>
      )}
    </div>
  );
}