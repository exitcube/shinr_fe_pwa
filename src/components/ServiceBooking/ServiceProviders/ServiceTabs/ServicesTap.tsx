"use client";
import React, { useState } from "react";
import { ServiceProvider } from "@/types/wallet";

const ServicesTap: React.FC<{ provider: ServiceProvider }> = ({ provider }) => {


    return (
        <>
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
        </>
    );
};

export default ServicesTap;
