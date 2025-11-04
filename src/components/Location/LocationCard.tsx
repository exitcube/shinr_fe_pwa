"use client";
import React, { useState } from "react";
import { ChevronRight } from "lucide-react";
import Image from "next/image";
import LocationModal from "./LocationModal";

const LocationCard = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);

  const openModal = () => setIsModalOpen(true);
  const closeModal = () => setIsModalOpen(false);

  return (
    <div className="mx-4 mb-4">
      <div className="bg-white rounded-2xl p-4 shadow-sm cursor-pointer" onClick={openModal}>
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
          <button
            type="button"
            onClick={openModal}
            className="flex-shrink-0 p-1 hover:bg-gray-100 rounded-full transition-colors"
            aria-label="Open location selector"
          >
            <ChevronRight size={20} className="text-gray-700" />
          </button>
        </div>
      </div>

      <LocationModal isOpen={isModalOpen} onClose={closeModal} />
    </div>
  );
};

export default LocationCard;
