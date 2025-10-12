"use client";
import React, { useState } from "react";
import { ServiceProvider } from "@/types/wallet";
import Image from "next/image";

const ProductsTap: React.FC<{ provider: ServiceProvider }> = ({ provider }) => {


    return (
        <>
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
        </>
    );
};

export default ProductsTap;
