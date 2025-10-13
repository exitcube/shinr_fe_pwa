"use client";
import React, { useState } from "react";
import { ServiceProvider } from "@/types/wallet";
import Image from "next/image";
import { Check } from "lucide-react";

const ServicesTap: React.FC<{ provider: ServiceProvider }> = ({ provider }) => {
    const [addedServices, setAddedServices] = useState<Set<number>>(new Set());

    const handleAddService = (serviceId: number) => {
        setAddedServices(prev => new Set(prev).add(serviceId));
    };

    return (
        <>
            <div className="flex-1 bg-white px-4 py-3">
                <div className="space-y-3">
                    {provider.services && provider.services.length > 0 ? (
                        provider.services.map((service) => {
                            const isAdded = addedServices.has(service.id);
                            
                            return (
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
                                        
                                        <div className="relative w-20 h-8 flex items-center justify-end overflow-hidden">
                                            {/* Plus Button - slides to left */}
                                            <button 
                                                onClick={() => handleAddService(service.id)}
                                                className={`absolute right-0 w-8 h-8 rounded-full bg-[#128C7E] flex items-center justify-center hover:bg-[#0f7269] transition-all duration-500 ease-out ${
                                                    isAdded 
                                                        ? 'opacity-0 -translate-x-24' 
                                                        : 'opacity-100 translate-x-0'
                                                }`}
                                            >
                                                <Image
                                                    src="/assets/icons/plus.svg"
                                                    alt="plus"
                                                    width={20}
                                                    height={20}
                                                />
                                            </button>

                                            {/* Added Badge - slides in from right */}
                                            <div 
                                                className={`absolute right-0 flex items-center gap-1.5 transition-all duration-500 ease-out ${
                                                    isAdded 
                                                        ? 'opacity-100 translate-x-0' 
                                                        : 'opacity-0 translate-x-24'
                                                }`}
                                            >
                                                <div className="w-5 h-5 rounded-full bg-[#128C7E] flex items-center justify-center">
                                                    <Check size={14} className="text-white" strokeWidth={3} />
                                                </div>
                                                <span className="text-[#128C7E] text-sm font-medium whitespace-nowrap">Added</span>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            );
                        })
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
