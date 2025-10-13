"use client";
import React, { useState } from "react";
import { ServiceProvider } from "@/types/wallet";
import Image from "next/image";

const ProductsTap: React.FC<{ provider: ServiceProvider }> = ({ provider }) => {
    const [productQuantities, setProductQuantities] = useState<Map<number, number>>(new Map());

    const handleAddProduct = (productId: number) => {
        setProductQuantities(prev => {
            const newMap = new Map(prev);
            newMap.set(productId, 1);
            return newMap;
        });
    };

    const handleIncrement = (productId: number) => {
        setProductQuantities(prev => {
            const newMap = new Map(prev);
            const currentQty = newMap.get(productId) || 0;
            newMap.set(productId, currentQty + 1);
            return newMap;
        });
    };

    const handleDecrement = (productId: number) => {
        setProductQuantities(prev => {
            const newMap = new Map(prev);
            const currentQty = newMap.get(productId) || 0;
            if (currentQty > 1) {
                newMap.set(productId, currentQty - 1);
            } else {
                newMap.delete(productId);
            }
            return newMap;
        });
    };

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
                                            className="bg-white border border-gray-200 rounded-lg p-3 relative flex-shrink-0 w-[180px]"
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
                                                
                                                <div className="relative w-24 h-7 flex items-center justify-end overflow-hidden">
                                                    {/* Plus Button - slides to left */}
                                                    <button 
                                                        onClick={() => handleAddProduct(product.id)}
                                                        className={`absolute right-0 w-7 h-7 rounded-full bg-[#128C7E] flex items-center justify-center transition-all duration-500 ease-out ${
                                                            productQuantities.has(product.id)
                                                                ? 'opacity-0 -translate-x-24' 
                                                                : 'opacity-100 translate-x-0'
                                                        }`}
                                                    >
                                                        <Image
                                                            src="/assets/icons/plus.svg"
                                                            alt="plus"
                                                            width={16}
                                                            height={16}
                                                        />
                                                    </button>

                                                    {/* Quantity Controls - slides in from right */}
                                                    <div 
                                                        className={`absolute right-0 flex items-center gap-1.5 transition-all duration-500 ease-out ${
                                                            productQuantities.has(product.id)
                                                                ? 'opacity-100 translate-x-0' 
                                                                : 'opacity-0 translate-x-24'
                                                        }`}
                                                    >
                                                        {/* Minus Button */}
                                                        <button 
                                                            onClick={() => handleDecrement(product.id)}
                                                            className="w-7 h-7 rounded-full bg-[#128C7E] flex items-center justify-center hover:bg-[#0f7269] transition-colors"
                                                        >
                                                            <Image
                                                                src="/assets/icons/minus.svg"
                                                                alt="minus"
                                                                width={14}
                                                                height={14}
                                                            />
                                                        </button>

                                                        {/* Quantity Display */}
                                                        <span className="text-[#128C7E] font-bold text-sm min-w-[20px] text-center">
                                                            {String(productQuantities.get(product.id) || 0).padStart(2, '0')}
                                                        </span>

                                                        {/* Plus Button */}
                                                        <button 
                                                            onClick={() => handleIncrement(product.id)}
                                                            className="w-7 h-7 rounded-full bg-[#128C7E] flex items-center justify-center hover:bg-[#0f7269] transition-colors"
                                                        >
                                                            <Image
                                                                src="/assets/icons/plus.svg"
                                                                alt="plus"
                                                                width={14}
                                                                height={14}
                                                            />
                                                        </button>
                                                    </div>
                                                </div>
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
                                            className="bg-white border border-gray-200 rounded-lg p-3 relative flex-shrink-0 w-[180px]"
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
                                                
                                                <div className="relative w-24 h-7 flex items-center justify-end overflow-hidden">
                                                    {/* Plus Button - slides to left */}
                                                    <button 
                                                        onClick={() => handleAddProduct(product.id)}
                                                        className={`absolute right-0 w-7 h-7 rounded-full bg-[#128C7E] flex items-center justify-center transition-all duration-500 ease-out ${
                                                            productQuantities.has(product.id)
                                                                ? 'opacity-0 -translate-x-24' 
                                                                : 'opacity-100 translate-x-0'
                                                        }`}
                                                    >
                                                        <Image
                                                            src="/assets/icons/plus.svg"
                                                            alt="plus"
                                                            width={16}
                                                            height={16}
                                                        />
                                                    </button>

                                                    {/* Quantity Controls - slides in from right */}
                                                    <div 
                                                        className={`absolute right-0 flex items-center gap-1.5 transition-all duration-500 ease-out ${
                                                            productQuantities.has(product.id)
                                                                ? 'opacity-100 translate-x-0' 
                                                                : 'opacity-0 translate-x-24'
                                                        }`}
                                                    >
                                                        {/* Minus Button */}
                                                        <button 
                                                            onClick={() => handleDecrement(product.id)}
                                                            className="w-7 h-7 rounded-full bg-[#128C7E] flex items-center justify-center hover:bg-[#0f7269] transition-colors"
                                                        >
                                                            <Image
                                                                src="/assets/icons/minus.svg"
                                                                alt="minus"
                                                                width={14}
                                                                height={14}
                                                            />
                                                        </button>

                                                        {/* Quantity Display */}
                                                        <span className="text-[#128C7E] font-bold text-sm min-w-[20px] text-center">
                                                            {String(productQuantities.get(product.id) || 0).padStart(2, '0')}
                                                        </span>

                                                        {/* Plus Button */}
                                                        <button 
                                                            onClick={() => handleIncrement(product.id)}
                                                            className="w-7 h-7 rounded-full bg-[#128C7E] flex items-center justify-center hover:bg-[#0f7269] transition-colors"
                                                        >
                                                            <Image
                                                                src="/assets/icons/plus.svg"
                                                                alt="plus"
                                                                width={14}
                                                                height={14}
                                                            />
                                                        </button>
                                                    </div>
                                                </div>
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
