"use client";
import React, { useState } from "react";
import { ArrowLeft, Star, MapPin, Calendar, Clock, Edit2, Copy, ArrowRight } from "lucide-react";
import Image from "next/image";
import { PaymentTypes } from "../walletArea/PaymentType";
import { WalletModel } from "../walletArea/WalletModeal";

interface CheckoutPageProps {
  onBack: () => void;
}

const CheckoutPage: React.FC<CheckoutPageProps> = ({ onBack }) => {
  const [couponCode, setCouponCode] = useState("");
  const [openPayment, setOpenPayment] = useState(false);
  const [openWallet, setOpenWallet] = useState(false);

  const handlePayClick = () => {
    setOpenPayment(true);
  };

  const handleAddMoney = () => {
    setOpenWallet(true);
  };

  const handleClosePayment = () => {
    setOpenPayment(false);
  };

  if (openPayment) {
    return <PaymentTypes setOpenPayment={handleClosePayment} />;
  }

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
        <h1 className="text-lg font-medium text-[#101010]">Confirm Your Booking</h1>
      </div>

      {/* Content */}
      <div className="flex-1 overflow-y-auto pb-40">
        {/* Service Provider Card */}
        <div className="bg-white mx-4 mt-4 rounded-lg p-4 shadow-sm">
          <div className="flex gap-3">
            <div className="relative w-20 h-20 rounded-lg overflow-hidden flex-shrink-0">
              <Image
                src="/assets/images/car_image.png"
                alt="5k Car Care"
                fill
                sizes="80px"
                className="object-cover"
              />
            </div>
            <div className="flex-1">
              <h2 className="text-base font-semibold text-[#101010] mb-1">
                5k Car Care
              </h2>
              <div className="flex items-center gap-2 mb-1">
                <div className="flex items-center gap-1">
                  <Star size={14} className="text-yellow-500 fill-yellow-500" />
                  <span className="text-sm font-medium text-[#101010]">4.5</span>
                </div>
                <span className="text-xs text-gray-500">2.5 km away</span>
              </div>
              <div className="flex items-center text-xs text-gray-500">
                <span>5+ years in business</span>
              </div>
            </div>
          </div>
        </div>

        {/* Service Details */}
        <div className="bg-white mx-4 mt-3 rounded-lg p-4 shadow-sm">
          <div className="flex items-start justify-between mb-3">
            <div className="flex-1">
              <h3 className="text-base font-semibold text-[#101010] mb-1">
                Basic Wash
              </h3>
              <p className="text-xs text-gray-500">
                Interior fragrance + Engine bay cleaning
              </p>
            </div>
            <div className="text-right">
              <span className="text-[#128C7E] font-bold text-base">₹ 489</span>
              <button className="ml-2 text-[#128C7E]">
                <Edit2 size={16} />
              </button>
            </div>
          </div>

          {/* Scheduled Time */}
          <div className="space-y-2 pt-3 border-t border-gray-100">
            <div className="flex items-center gap-2 text-sm text-gray-700">
              <Calendar size={16} className="text-[#128C7E]" />
              <span>Scheduled on</span>
              <span className="font-medium">19 June 12:00 PM</span>
              <button className="ml-auto text-[#128C7E]">
                <Edit2 size={14} />
              </button>
            </div>
            <div className="flex items-center gap-2 text-sm text-gray-700">
              <MapPin size={16} className="text-[#128C7E]" />
              <span className="flex-1">Honda City</span>
            </div>
            <div className="flex items-start gap-2 text-sm text-gray-700">
              <MapPin size={16} className="text-[#128C7E] mt-0.5" />
              <span className="flex-1">
                Unit2, HSR layout, Bangalore
              </span>
              <button className="text-[#128C7E]">
                <Edit2 size={14} />
              </button>
            </div>
            <div className="flex items-center gap-2 text-sm text-gray-700">
              <Clock size={16} className="text-[#128C7E]" />
              <span>Shank +91 998 989 777</span>
              <button className="ml-auto text-[#128C7E]">
                <Edit2 size={14} />
              </button>
            </div>
          </div>
        </div>

        {/* Coupon Code */}
        <div className="bg-white mx-4 mt-3 rounded-lg p-4 shadow-sm">
          <h3 className="text-base font-semibold text-[#101010] mb-3">
            Coupon Code
          </h3>
          <div className="flex items-center gap-2 border border-gray-300 rounded-lg px-3 py-2">
            <Copy size={18} className="text-gray-400" />
            <input
              type="text"
              placeholder="Enter Promo Code"
              value={couponCode}
              onChange={(e) => setCouponCode(e.target.value)}
              className="flex-1 outline-none text-sm text-gray-700"
            />
          </div>
        </div>

        {/* Payment Summary */}
        <div className="bg-white mx-4 mt-3 rounded-lg p-4 shadow-sm">
          <h3 className="text-base font-semibold text-[#101010] mb-3">
            Payment Summary
          </h3>
          <div className="space-y-2 text-sm">
            <div className="flex justify-between">
              <span className="text-gray-600">Basic Wash</span>
              <span className="text-gray-900">₹ 200</span>
            </div>
            <div className="flex justify-between">
              <span className="text-gray-600">Interior fragrance</span>
              <span className="text-gray-900">₹ 50</span>
            </div>
            <div className="flex justify-between">
              <span className="text-gray-600">Engine bay cleaning</span>
              <span className="text-gray-900">₹ 199</span>
            </div>
            <div className="flex justify-between pt-2 border-t border-gray-200">
              <span className="text-gray-600">Tax</span>
              <span className="text-gray-900">₹ 18</span>
            </div>
            <div className="flex justify-between">
              <span className="text-gray-600">App fee</span>
              <span className="text-gray-900">₹ 10</span>
            </div>
            <div className="flex justify-between pt-2 border-t border-gray-200 font-semibold">
              <span className="text-[#101010]">Total Amount</span>
              <span className="text-[#101010] text-base">₹ 489</span>
            </div>
          </div>
        </div>

        {/* Subscription Plans */}
        <div className="mt-3">
          <div className="overflow-x-auto px-4 scrollbar-hide">
            <div className="flex gap-3 pb-2">
            {/* Basic Subscription */}
            <div className="bg-white rounded-lg p-4 shadow-sm flex-shrink-0 w-64 flex flex-col h-64">
              <h3 className="text-base font-semibold text-[#101010] mb-2">
                Basic Subscription
              </h3>
              <div className="mb-3">
                <span className="text-2xl font-bold text-[#101010]">₹ 499</span>
                <span className="text-gray-500 text-sm">/year</span>
              </div>
              <ul className="space-y-1 text-xs text-gray-700 mb-4 flex-1">
                <li>• 2 Basic Washes per month</li>
                <li>• Free pick-up & drop</li>
                <li>• ₹100 off on emergency services</li>
              </ul>
              <button className="w-full bg-[#128C7E] text-white py-2.5 rounded-full text-sm font-medium hover:bg-[#0f7269] transition-colors flex items-center justify-center gap-2">
                <span>Select Plan</span>
                <ArrowRight size={16} />
              </button>
            </div>

            {/* Premium Subscription */}
            <div className="bg-white rounded-lg p-4 shadow-sm flex-shrink-0 w-64 flex flex-col h-64">
              <h3 className="text-base font-semibold text-[#101010] mb-2">
                Premium Subscription
              </h3>
              <div className="mb-3">
                <span className="text-2xl font-bold text-[#101010]">₹ 899</span>
                <span className="text-gray-500 text-sm">/year</span>
              </div>
              <ul className="space-y-1 text-xs text-gray-700 mb-4 flex-1">
                <li>• 4 Full-Service Bookings/month</li>
                <li>• Priority customer support</li>
                <li>• Free interior sanitization once/month</li>
              </ul>
              <button className="w-full bg-[#128C7E] text-white py-2.5 rounded-full text-sm font-medium hover:bg-[#0f7269] transition-colors flex items-center justify-center gap-2">
                <span>Select Plan</span>
                <ArrowRight size={16} />
              </button>
            </div>

            {/* Elite Subscription */}
            <div className="bg-white rounded-lg p-4 shadow-sm flex-shrink-0 w-64 flex flex-col h-64">
              <h3 className="text-base font-semibold text-[#101010] mb-2">
                Elite Subscription
              </h3>
              <div className="mb-3">
                <span className="text-2xl font-bold text-[#101010]">₹ 1299</span>
                <span className="text-gray-500 text-sm">/year</span>
              </div>
              <ul className="space-y-1 text-xs text-gray-700 mb-4 flex-1">
                <li>• Unlimited washes (Basic + Interior)</li>
                <li>• 24/7 roadside assistance</li>
                <li>• Complimentary ceramic coating</li>
              </ul>
              <button className="w-full bg-[#128C7E] text-white py-2.5 rounded-full text-sm font-medium hover:bg-[#0f7269] transition-colors flex items-center justify-center gap-2">
                <span>Select Plan</span>
                <ArrowRight size={16} />
              </button>
            </div>
            </div>
          </div>
        </div>

        {/* Cancellation Policy */}
        <div className="bg-white mx-4 mt-3 mb-3 rounded-lg p-4 shadow-sm">
          <h3 className="text-base font-semibold text-[#101010] mb-2">
            Cancellation Policy
          </h3>
          <ul className="space-y-1 text-xs text-gray-600">
            <li>• Free cancellation up to 1 hour before service time</li>
            <li>• ₹50 cancellation fee after that</li>
            <li>• No refund for no-shows</li>
          </ul>
        </div>

      </div>

      {/* Fixed Bottom: Shinr Wallet & Payment */}
      <div className="fixed bottom-0 left-0 right-0 bg-white border-t border-gray-200 px-4 py-4 shadow-[0_-2px_10px_rgba(0,0,0,0.1)]">
        <div className="flex items-center justify-between mb-4">
          <h3 className="text-lg font-semibold text-[#101010]">
            Shinr Wallet: ₹0
          </h3>
          <button 
            onClick={handleAddMoney}
            className="text-[#128C7E] text-sm font-medium flex items-center gap-1"
          >
            Add Money
            <ArrowRight size={16} />
          </button>
        </div>
        
        <div className="flex items-center justify-between">
          <div>
            <p className="text-xs text-gray-500 mb-1">Payment Method</p>
            <h4 className="text-lg font-semibold text-[#101010]">Google pay</h4>
          </div>
          <button 
            onClick={handlePayClick}
            className="bg-[#128C7E] text-white px-8 py-3 rounded-full text-base font-medium hover:bg-[#0f7269] transition-colors flex items-center gap-2"
          >
            Pay ₹ 489
            <ArrowRight size={18} />
          </button>
        </div>
      </div>

      {/* Wallet Modal */}
      <WalletModel open={openWallet} setOpen={setOpenWallet} />
    </div>
  );
};

export default CheckoutPage;
