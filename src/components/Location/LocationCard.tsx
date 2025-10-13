"use client";
import React from "react";
import { MapPin, ChevronRight } from "lucide-react";
import Image from "next/image";

const LocationCard = () => {
    return (
        <div className="mx-4 mb-4">
            <div className="bg-white rounded-2xl p-4 shadow-sm">
                {/* Location Label */}
                <div className="flex items-center gap-2 mb-2">
                    <Image
                        src="/assets/icons/location_gray.svg"
                        alt="icon"
                        width={12}
                        height={15}
                        className="mr-1"
                    />
                    <span className="text-sm text-gray-500 font-medium">Location</span>
                </div>

                {/* Address Row */}
                <div className="flex items-center justify-between">
                    <p className="text-base text-[#101010] font-normal flex-1 pr-2 truncate">
                        1/343 ipsum dolor sit amet, consectetur...
                    </p>
                    <button className="flex-shrink-0 p-1 hover:bg-gray-100 rounded-full transition-colors">
                        <ChevronRight size={20} className="text-gray-700" />
                    </button>
                </div>
            </div>
        </div>
    );
};

export default LocationCard;
