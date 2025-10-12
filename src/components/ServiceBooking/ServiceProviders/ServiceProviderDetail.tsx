"use client";
import { useState } from "react";
import { ServiceProvider } from "@/types/wallet";
import { MapPin, Briefcase, Star, ArrowRight, ArrowLeft } from "lucide-react";
import Image from "next/image";
import ServicesTap from "./ServiceTabs/ServicesTap";
import ProductsTap from "./ServiceTabs/productsTap";
import ReviewsTap from "./ServiceTabs/reviewsTabs";
import ServiceAddonsModal from "./ServiceAddonsModal";
import CheckoutPage from "../CheckoutPage";

interface ServiceProviderDetailProps {
  provider: ServiceProvider;
  onBack: () => void;
}

export default function ServiceProviderDetail({
  provider,
  onBack,
}: ServiceProviderDetailProps) {
  const [activeTab, setActiveTab] = useState<"services" | "products" | "reviews">("services");
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [showCheckout, setShowCheckout] = useState(false);

  const handleBookService = () => {
    setIsModalOpen(true);
  };

  const handleCloseModal = () => {
    setIsModalOpen(false);
  };

  const handleCheckout = () => {
    setShowCheckout(true);
  };

  const handleBackFromCheckout = () => {
    setShowCheckout(false);
  };

  if (showCheckout) {
    return <CheckoutPage onBack={handleBackFromCheckout} />;
  }

  return (
    <div className="flex flex-col h-full bg-white font-poppins overflow-y-auto pb-20">
      {/* Provider Header Card */}
      <div className="bg-white">
        {/* Car Image with rounded corners */}
        <div className="relative w-full h-44 rounded-xl overflow-hidden mb-3">
          <div className="absolute z-1 top-3 left-3 w-8 h-8 bg-white rounded-full flex items-center justify-center shadow-md">
            <button
              onClick={onBack}
              className="p-1 hover:bg-gray-100 rounded-full transition-colors"
            >
              <ArrowLeft size={24} className="text-[#101010]" />
            </button>
          </div>
          <Image
            src={provider.imageUrl}
            alt={provider.name}
            fill
            sizes="(max-width: 768px) 100vw, 400px"
            className="object-cover"
          />
          {/* Favorite icon overlay */}
          <div className="absolute top-3 right-3 w-8 h-8 bg-white rounded-full flex items-center justify-center shadow-md">
            <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" className="text-gray-600">
              <path d="M20.84 4.61a5.5 5.5 0 0 0-7.78 0L12 5.67l-1.06-1.06a5.5 5.5 0 0 0-7.78 7.78l1.06 1.06L12 21.23l7.78-7.78 1.06-1.06a5.5 5.5 0 0 0 0-7.78z"></path>
            </svg>
          </div>
        </div>
        {/* Provider Info */}
        <div className="px-4 pt-2 pb-4">
          <div className="space-y-2">
            {/* Name */}
            <h1 className="text-lg font-semibold text-[#101010]">
              {provider.name}
            </h1>

            {/* Description */}
            {provider.description && (
              <p className="text-xs text-gray-500 leading-relaxed">
                {provider.description}
              </p>
            )}

            {/* Rating */}
            <div className="flex items-center gap-1">
              <Star size={14} className="text-yellow-500 fill-yellow-500" />
              <span className="text-sm font-medium text-[#101010]">{provider.rating}</span>
            </div>

            {/* Info Row */}
            <div className="space-y-1">
              <div className="flex items-center text-[#128C7E]">
                <MapPin size={14} className="mr-1.5" />
                <span className="text-xs">{provider.distance}</span>
              </div>
              <div className="flex items-center text-[#128C7E]">
                <Briefcase size={14} className="mr-1.5" />
                <span className="text-xs">{provider.yearsInBusiness}</span>
              </div>
            </div>

            {/* Price */}
            <div className="flex items-baseline pt-1">
              <span className="text-[#128C7E] font-bold text-lg">₹ {provider.price}</span>
              <span className="text-gray-400 text-xs ml-1">Starts from</span>
            </div>
          </div>
        </div>
      </div>

      {/* Tabs */}
      <div className="bg-[#F5F5F5] px-4 py-3">
        <div className="flex gap-3">
          <button
            onClick={() => setActiveTab("services")}
            className={`px-4 py-2 text-sm font-medium rounded-lg transition-colors ${activeTab === "services"
              ? "bg-[#128C7E] text-white"
              : "bg-transparent text-gray-500"
              }`}
          >
            Other Service
          </button>
          <button
            onClick={() => setActiveTab("products")}
            className={`px-4 py-2 text-sm font-medium rounded-lg transition-colors ${activeTab === "products"
              ? "bg-[#128C7E] text-white"
              : "bg-transparent text-gray-500"
              }`}
          >
            Products
          </button>
          <button
            onClick={() => setActiveTab("reviews")}
            className={`px-4 py-2 text-sm font-medium rounded-lg transition-colors ${activeTab === "reviews"
              ? "bg-[#128C7E] text-white"
              : "bg-transparent text-gray-500"
              }`}
          >
            Reviews
          </button>
        </div>
      </div>

      {/* Services List */}
      {activeTab === "services" && (
        <ServicesTap provider={provider} />
      )}

      {activeTab === "products" && (
        <ProductsTap provider={provider} />
      )}

      {activeTab === "reviews" && (
        <ReviewsTap provider={provider} />
      )}

      {/* Bottom Action Button */}
      <div className="fixed bottom-0 left-0 right-0 bg-white px-4 py-3 shadow-[0_-2px_10px_rgba(0,0,0,0.1)]">
        <button 
          onClick={handleBookService}
          className="w-full bg-[#128C7E] text-white py-3 rounded-full font-medium text-sm hover:bg-[#0f7269] transition-colors flex items-center justify-between px-4"
        >
          <span>Book Basic Wash</span>
          <ArrowRight size={18} />
        </button>
      </div>

      {/* Service Add-ons Modal */}
      <ServiceAddonsModal
        isOpen={isModalOpen}
        onClose={handleCloseModal}
        serviceName="Basic Wash"
        onCheckout={handleCheckout}
      />
    </div>
  );
}
