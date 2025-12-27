"use client";

import {
  IndianRupee,
  Clock,
  Shield,
  Award,
  Package,
  TrendingUp,
} from "lucide-react";

export default function DeliveryBenefits() {
  const benefits = [
    {
      icon: <IndianRupee className="w-8 h-8" />,
      title: "High Earnings",
      description: "Earn up to ₹1500 per day with tips and incentives",
    },
    {
      icon: <Clock className="w-8 h-8" />,
      title: "Flexible Hours",
      description: "Work whenever you want, full-time or part-time",
    },
    {
      icon: <Shield className="w-8 h-8" />,
      title: "Insurance Coverage",
      description: "Accident and health insurance for all partners",
    },
    {
      icon: <Award className="w-8 h-8" />,
      title: "Bonus Programs",
      description: "Weekly bonuses and performance rewards",
    },
    {
      icon: <Package className="w-8 h-8" />,
      title: "Free Gear",
      description: "Get delivery bags, uniforms, and smartphone",
    },
    {
      icon: <TrendingUp className="w-8 h-8" />,
      title: "Career Growth",
      description: "Opportunities to become team leaders and managers",
    },
  ];

  return (
    <div id="benefits" className="py-16 px-4 sm:px-6 lg:px-8 bg-orange-50/50">
      <div className="max-w-7xl mx-auto">
        <h2 className="text-3xl md:text-4xl font-bold text-gray-900 text-center mb-12">
          Why Choose OLYYO?
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {benefits.map((benefit, index) => (
            <div
              key={index}
              className="bg-white border border-orange-100 rounded-2xl p-6 hover:border-orange-300 hover:shadow-lg transition-all duration-300"
            >
              <div className="text-orange-500 mb-4">
                {benefit.icon}
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-3">
                {benefit.title}
              </h3>
              <p className="text-gray-600">
                {benefit.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}