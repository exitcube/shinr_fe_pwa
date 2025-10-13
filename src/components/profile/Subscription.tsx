"use client";
import React from "react";
import { ArrowLeft, ArrowRight } from "lucide-react";

interface SubscriptionProps {
  onBack: () => void;
}

const Subscription: React.FC<SubscriptionProps> = ({ onBack }) => {
  const subscriptionPlans = [
    {
      id: 1,
      name: "Basic Subscription",
      price: 499,
      period: "year",
      features: [
        "2 Basic Washes per month",
        "Free pick-up & drop",
        "₹100 off on emergency services",
      ],
    },
    {
      id: 2,
      name: "Premium Subscription",
      price: 899,
      period: "year",
      features: [
        "4 Full-Service Bookings/month",
        "Priority customer support",
        "Free interior sanitization once/month",
      ],
    },
    {
      id: 3,
      name: "Elite Subscription",
      price: 1299,
      period: "year",
      features: [
        "Unlimited washes (Basic + Interior)",
        "24/7 roadside assistance",
        "Complimentary ceramic coating",
      ],
    },
  ];

  return (
    <div className="fixed inset-0 bg-[#F5F5F5] z-50 flex flex-col font-poppins">
      {/* Header */}
      <div className="bg-white border-b border-gray-200 px-4 py-3 flex items-center gap-3">
        <button
          onClick={onBack}
          className="p-1 hover:bg-gray-100 rounded-full transition-colors"
        >
          <ArrowLeft size={24} className="text-[#101010]" />
        </button>
        <h1 className="text-lg font-medium text-[#101010]">Subscription</h1>
      </div>

      {/* Subscription Plans */}
      <div className="flex-1 overflow-y-auto px-4 py-6">
        <div className="space-y-4">
          {subscriptionPlans.map((plan) => (
            <div
              key={plan.id}
              className="bg-white rounded-2xl p-5 shadow-sm"
            >
              {/* Plan Header */}
              <h3 className="text-sm font-semibold text-[#101010] mb-2">
                {plan.name}
              </h3>
              
              {/* Price */}
              <div className="mb-4">
                <span className="text-2xl font-bold text-[#101010]">₹ {plan.price}</span>
                <span className="text-gray-500 text-sm">/{plan.period}</span>
              </div>

              {/* Features */}
              <ul className="space-y-2 mb-4">
                {plan.features.map((feature, index) => (
                  <li key={index} className="text-xs text-gray-700 flex items-start">
                    <span className="mr-2">•</span>
                    <span>{feature}</span>
                  </li>
                ))}
              </ul>

              {/* Select Plan Button */}
              <button className="w-full bg-[#128C7E] text-white py-3 rounded-full text-sm font-medium hover:bg-[#0f7269] transition-colors flex items-center justify-between px-6">
                <span>Select Plan</span>
                <ArrowRight size={18} />
              </button>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Subscription;
