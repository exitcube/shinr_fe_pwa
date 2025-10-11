"use client";
import { useState } from "react";
import { ServiceProvider } from "@/types/wallet";
import { MapPin, Briefcase, Star, ArrowRight } from "lucide-react";
import Image from "next/image";

interface ServiceProviderDetailProps {
  provider: ServiceProvider;
}

export default function ServiceProviderDetail({
  provider,
}: ServiceProviderDetailProps) {
  const [activeTab, setActiveTab] = useState<"services" | "products" | "reviews">("services");

  return (
    <div className="flex flex-col h-full bg-white font-poppins overflow-y-auto pb-20">
      {/* Provider Header Card */}
      <div className="bg-white px-4 pt-2 pb-4">
        {/* Car Image with rounded corners */}
        <div className="relative w-full h-44 rounded-xl overflow-hidden mb-3">
          <Image
            src={provider.imageUrl}
            alt={provider.name}
            fill
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

      {/* Tabs */}
      <div className="bg-[#F5F5F5] px-4 py-3">
        <div className="flex gap-3">
          <button
            onClick={() => setActiveTab("services")}
            className={`px-4 py-2 text-sm font-medium rounded-lg transition-colors ${
              activeTab === "services"
                ? "bg-[#128C7E] text-white"
                : "bg-transparent text-gray-500"
            }`}
          >
            Other Service
          </button>
          <button
            onClick={() => setActiveTab("products")}
            className={`px-4 py-2 text-sm font-medium rounded-lg transition-colors ${
              activeTab === "products"
                ? "bg-[#128C7E] text-white"
                : "bg-transparent text-gray-500"
            }`}
          >
            Products
          </button>
          <button
            onClick={() => setActiveTab("reviews")}
            className={`px-4 py-2 text-sm font-medium rounded-lg transition-colors ${
              activeTab === "reviews"
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
        <div className="flex-1 bg-white px-4 py-3">
          <div className="space-y-3">
            {provider.services && provider.services.length > 0 ? (
              provider.services.map((service) => (
                <div
                  key={service.id}
                  className="bg-white border border-gray-200 rounded-lg p-4 relative"
                >
                  {/* Service Name */}
                  <h3 className="text-base font-medium text-[#101010] mb-2">
                    {service.name}
                  </h3>

                  {/* Description */}
                  <p className="text-xs text-gray-500 mb-3 leading-relaxed pr-8">
                    {service.description}
                  </p>

                  {/* Price and Button Row */}
                  <div className="flex items-center justify-between">
                    <span className="text-[#128C7E] font-bold text-base">
                      ₹ {service.price}
                    </span>
                    <button className="w-8 h-8 rounded-full bg-[#128C7E] flex items-center justify-center">
                      <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="white" strokeWidth="2.5" strokeLinecap="round">
                        <line x1="12" y1="5" x2="12" y2="19"></line>
                        <line x1="5" y1="12" x2="19" y2="12"></line>
                      </svg>
                    </button>
                  </div>
                </div>
              ))
            ) : (
              <div className="text-center py-8 text-gray-500 text-sm">
                No services available
              </div>
            )}
          </div>
        </div>
      )}

      {activeTab === "products" && (
        <div className="flex-1 bg-white py-3 px-4">
          <div className="space-y-3">
            {/* First Row - Scrollable */}
            <div className="overflow-x-auto scrollbar-hide">
              <div className="flex gap-3">
                {provider.products && provider.products.length > 0 ? (
                  provider.products
                    .filter((_, index) => index % 2 === 0)
                    .map((product) => (
                      <div
                        key={product.id}
                        className="bg-white border border-gray-200 rounded-lg p-3 relative flex-shrink-0 w-[160px]"
                      >
                        {/* Product Image */}
                        <div className="relative w-full h-32 mb-2 flex items-center justify-center bg-gray-50 rounded-lg">
                          <Image
                            src={product.imageUrl}
                            alt={product.name}
                            width={100}
                            height={100}
                            className="object-contain"
                          />
                        </div>

                        {/* Category */}
                        <p className="text-xs text-gray-400 mb-1">{product.category}</p>

                        {/* Product Name */}
                        <h3 className="text-sm font-medium text-[#101010] mb-2 line-clamp-2">
                          {product.name}
                        </h3>

                        {/* Price and Button Row */}
                        <div className="flex items-center justify-between">
                          <span className="text-[#128C7E] font-bold text-base">
                            ₹ {product.price}
                          </span>
                          <button className="w-7 h-7 rounded-full bg-[#128C7E] flex items-center justify-center flex-shrink-0">
                            <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="white" strokeWidth="2.5" strokeLinecap="round">
                              <line x1="12" y1="5" x2="12" y2="19"></line>
                              <line x1="5" y1="12" x2="19" y2="12"></line>
                            </svg>
                          </button>
                        </div>
                      </div>
                    ))
                ) : null}
              </div>
            </div>

            {/* Second Row - Scrollable */}
            <div className="overflow-x-auto scrollbar-hide">
              <div className="flex gap-3">
                {provider.products && provider.products.length > 0 ? (
                  provider.products
                    .filter((_, index) => index % 2 === 1)
                    .map((product) => (
                      <div
                        key={product.id}
                        className="bg-white border border-gray-200 rounded-lg p-3 relative flex-shrink-0 w-[160px]"
                      >
                        {/* Product Image */}
                        <div className="relative w-full h-32 mb-2 flex items-center justify-center bg-gray-50 rounded-lg">
                          <Image
                            src={product.imageUrl}
                            alt={product.name}
                            width={100}
                            height={100}
                            className="object-contain"
                          />
                        </div>

                        {/* Category */}
                        <p className="text-xs text-gray-400 mb-1">{product.category}</p>

                        {/* Product Name */}
                        <h3 className="text-sm font-medium text-[#101010] mb-2 line-clamp-2">
                          {product.name}
                        </h3>

                        {/* Price and Button Row */}
                        <div className="flex items-center justify-between">
                          <span className="text-[#128C7E] font-bold text-base">
                            ₹ {product.price}
                          </span>
                          <button className="w-7 h-7 rounded-full bg-[#128C7E] flex items-center justify-center flex-shrink-0">
                            <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="white" strokeWidth="2.5" strokeLinecap="round">
                              <line x1="12" y1="5" x2="12" y2="19"></line>
                              <line x1="5" y1="12" x2="19" y2="12"></line>
                            </svg>
                          </button>
                        </div>
                      </div>
                    ))
                ) : null}
              </div>
            </div>

            {provider.products && provider.products.length === 0 && (
              <div className="text-center py-8 text-gray-500 text-sm">
                No products available
              </div>
            )}
          </div>
        </div>
      )}

      {activeTab === "reviews" && (
        <div className="flex-1 bg-white px-4 py-3">
          <div className="space-y-3">
            {provider.reviews && provider.reviews.length > 0 ? (
              provider.reviews.map((review) => (
                <div
                  key={review.id}
                  className="bg-white border border-gray-200 rounded-lg p-4"
                >
                  {/* Header: Name, Rating, Date */}
                  <div className="flex items-start justify-between mb-2">
                    <div className="flex-1">
                      <h3 className="text-base font-semibold text-[#101010] mb-1">
                        {review.userName}
                      </h3>
                      <div className="flex items-center gap-1">
                        {/* Star Rating */}
                        {[1, 2, 3, 4, 5].map((star) => (
                          <Star
                            key={star}
                            size={14}
                            className={
                              star <= Math.floor(review.rating)
                                ? "text-yellow-500 fill-yellow-500"
                                : star - 0.5 <= review.rating
                                ? "text-yellow-500 fill-yellow-500"
                                : "text-gray-300 fill-gray-300"
                            }
                          />
                        ))}
                        <span className="text-sm font-medium text-[#101010] ml-1">
                          {review.rating}
                        </span>
                      </div>
                    </div>
                    <span className="text-xs text-gray-400">{review.date}</span>
                  </div>

                  {/* Service Badge */}
                  <div className="inline-block bg-[#E0F7F4] text-[#128C7E] text-xs font-medium px-3 py-1 rounded-full mb-2">
                    {review.serviceName}
                  </div>

                  {/* Review Comment */}
                  <p className="text-sm text-gray-600 leading-relaxed">
                    {review.comment}
                  </p>
                </div>
              ))
            ) : (
              <div className="text-center py-8 text-gray-500 text-sm">
                No reviews yet
              </div>
            )}
          </div>
        </div>
      )}

      {/* Bottom Action Button */}
      <div className="fixed bottom-0 left-0 right-0 bg-white px-4 py-3 shadow-[0_-2px_10px_rgba(0,0,0,0.1)]">
        <button className="w-full bg-[#128C7E] text-white py-3 rounded-lg font-medium text-sm hover:bg-[#0f7269] transition-colors flex items-center justify-between px-4">
          <span>Book Basic Wash</span>
          <ArrowRight size={18} />
        </button>
      </div>
    </div>
  );
}
