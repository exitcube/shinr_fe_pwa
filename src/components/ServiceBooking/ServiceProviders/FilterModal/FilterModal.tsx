"use client";
import React, { useState, useEffect } from "react";
import { X, ArrowRight } from "lucide-react";
import Image from "next/image";
import AvailabilityModal from "./AvailabilityModal";
import SelectVehicleModal from "./SelectVehicleModal";

interface FilterModalProps {
  isOpen: boolean;
  onClose: () => void;
}

const FilterModal: React.FC<FilterModalProps> = ({ isOpen, onClose }) => {
  const [isAnimating, setIsAnimating] = useState(false);
  const [showAvailabilityModal, setShowAvailabilityModal] = useState(false);
  const [showVehicleModal, setShowVehicleModal] = useState(false);
  const [filters, setFilters] = useState({
    availability: "18 June | 2:00 PM",
    vehicle: "Toyota Glanza",
    vehicleType: "Car",
    distance: 2,
    serviceType: "Basic Wash",
    rating: "4 ★ & above",
    price: "Low to High",
  });

  useEffect(() => {
    if (isOpen) {
      setIsAnimating(true);
    }
  }, [isOpen]);

  const handleClose = () => {
    setIsAnimating(false);
    setTimeout(() => {
      onClose();
    }, 300);
  };

  const handleApply = () => {
    console.log("Apply filters:", filters);
    handleClose();
  };

  const handleAvailabilitySave = (date: string, timeSlot: string) => {
    setFilters({
      ...filters,
      availability: `${date} June | ${timeSlot}`,
    });
  };

  const handleVehicleSave = (vehicle: { type: string; name: string }) => {
    setFilters({
      ...filters,
      vehicle: vehicle.name,
      vehicleType: vehicle.type,
    });
  };

  if (!isOpen && !isAnimating) return null;

  return (
    <>
      {/* Backdrop */}
      <div
        className={`fixed inset-0 bg-black z-50 transition-opacity duration-300 ${
          isAnimating ? "opacity-50" : "opacity-0"
        }`}
        onClick={handleClose}
      />

      {/* Modal */}
      <div
        className={`fixed inset-x-0 bottom-0 z-[60] bg-white rounded-t-3xl shadow-2xl font-poppins transition-transform duration-300 ease-out max-w-md mx-auto ${
          isAnimating ? "translate-y-0" : "translate-y-full"
        }`}
        style={{ maxHeight: "90vh" }}
      >
        {/* Header */}
        <div className="flex items-center justify-between px-6 py-4 border-b border-gray-200">
          <h2 className="text-lg font-semibold text-[#101010]">Filter</h2>
          <button
            onClick={handleClose}
            className="p-1 hover:bg-gray-100 rounded-full transition-colors"
          >
            <X size={24} className="text-gray-600" />
          </button>
        </div>

        {/* Content */}
        <div className="overflow-y-auto px-6 py-4" style={{ maxHeight: "calc(90vh - 140px)" }}>
          <div className="space-y-6">
            {/* Availability */}
            <div>
              <div className="flex items-center justify-between mb-3">
                <h3 className="text-sm font-semibold text-[#101010]">Availability</h3>
                <button 
                  onClick={() => setShowAvailabilityModal(true)}
                  className="text-[#128C7E] text-sm font-medium"
                >
                  Edit
                </button>
              </div>
              <div className="flex items-center gap-2 text-sm text-gray-600 border border-gray-200 p-4 rounded-full">
                <Image src="/assets/icons/calender2.svg" alt="calendar" width={16} height={16} />
                <span>{filters.availability}</span>
              </div>
            </div>

            {/* Vehicle */}
            <div>
              <div className="flex items-center justify-between mb-3">
                <h3 className="text-sm font-semibold text-[#101010]">Vehicle</h3>
                <button 
                  onClick={() => setShowVehicleModal(true)}
                  className="text-[#128C7E] text-sm font-medium"
                >
                  Edit
                </button>
              </div>
              <div className="flex items-center gap-3 border border-gray-200 p-4 rounded-lg">
                <div className="relative w-16 h-16 rounded-lg overflow-hidden bg-gray-100">
                  <Image
                    src="/assets/images/car_image.png"
                    alt="Car"
                    fill
                    className="object-cover"
                  />
                </div>
                <div>
                  <p className="text-xs text-gray-500">{filters.vehicleType}</p>
                  <p className="text-sm font-medium text-[#101010]">{filters.vehicle}</p>
                </div>
              </div>
            </div>

            {/* Distance */}
            <div>
              <div className="flex items-center justify-between mb-4">
                <h3 className="text-sm font-semibold text-[#101010]">Distance</h3>
                <span className="text-[#128C7E] text-base font-semibold">{filters.distance}km</span>
              </div>
              <div className="relative">
                <input
                  type="range"
                  min="0"
                  max="50"
                  value={filters.distance}
                  onChange={(e) => setFilters({ ...filters, distance: parseInt(e.target.value) })}
                  className="w-full h-1 bg-gray-200 rounded-full appearance-none cursor-pointer slider-thumb"
                  style={{
                    background: `linear-gradient(to right, #128C7E 0%, #128C7E ${(filters.distance / 50) * 100}%, #E5E7EB ${(filters.distance / 50) * 100}%, #E5E7EB 100%)`
                  }}
                />
                <style jsx>{`
                  .slider-thumb::-webkit-slider-thumb {
                    appearance: none;
                    width: 20px;
                    height: 20px;
                    border-radius: 50%;
                    background: #128C7E;
                    cursor: pointer;
                    border: 3px solid white;
                    box-shadow: 0 2px 4px rgba(0, 0, 0, 0.2);
                  }
                  .slider-thumb::-moz-range-thumb {
                    width: 20px;
                    height: 20px;
                    border-radius: 50%;
                    background: #128C7E;
                    cursor: pointer;
                    border: 3px solid white;
                    box-shadow: 0 2px 4px rgba(0, 0, 0, 0.2);
                  }
                `}</style>
              </div>
            </div>

            {/* Service Type */}
            <div>
              <h3 className="text-sm font-semibold text-[#101010] mb-3">Service Type</h3>
              <div className="flex gap-2 flex-wrap">
                {["Basic Wash", "Full Wash", "Premium Wash"].map((type) => (
                  <button
                    key={type}
                    onClick={() => setFilters({ ...filters, serviceType: type })}
                    className={`px-4 py-2 rounded-full text-xs font-medium transition-colors ${
                      filters.serviceType === type
                        ? "bg-[#128C7E] text-white"
                        : "bg-gray-100 text-gray-600 hover:bg-gray-200"
                    }`}
                  >
                    {type}
                  </button>
                ))}
              </div>
            </div>

            {/* Rating */}
            <div>
              <h3 className="text-sm font-semibold text-[#101010] mb-3">Rating</h3>
              <div className="flex gap-2 flex-wrap">
                {["4 ★ & above", "3 ★ & above", "2 ★ & above"].map((rating) => (
                  <button
                    key={rating}
                    onClick={() => setFilters({ ...filters, rating })}
                    className={`px-4 py-2 rounded-full text-xs font-medium transition-colors ${
                      filters.rating === rating
                        ? "bg-[#128C7E] text-white"
                        : "bg-gray-100 text-gray-600 hover:bg-gray-200"
                    }`}
                  >
                    {rating}
                  </button>
                ))}
              </div>
            </div>

            {/* Price */}
            <div>
              <h3 className="text-sm font-semibold text-[#101010] mb-3">Price</h3>
              <div className="flex gap-2 flex-wrap">
                {["Low to High", "High to Low", "Best Value"].map((price) => (
                  <button
                    key={price}
                    onClick={() => setFilters({ ...filters, price })}
                    className={`px-4 py-2 rounded-full text-xs font-medium transition-colors ${
                      filters.price === price
                        ? "bg-[#128C7E] text-white"
                        : "bg-gray-100 text-gray-600 hover:bg-gray-200"
                    }`}
                  >
                    {price}
                  </button>
                ))}
              </div>
            </div>
          </div>
        </div>

        {/* Apply Button */}
        <div className="px-6 py-4 border-t border-gray-200">
          <button
            onClick={handleApply}
            className="w-full bg-[#128C7E] text-white py-3 rounded-full font-medium text-sm hover:bg-[#0f7269] transition-colors flex items-center justify-between px-6"
          >
            <span>Apply</span>
            <ArrowRight size={18} />
          </button>
        </div>
      </div>

      {/* Availability Modal */}
      <AvailabilityModal
        isOpen={showAvailabilityModal}
        onClose={() => setShowAvailabilityModal(false)}
        onSave={handleAvailabilitySave}
      />

      {/* Select Vehicle Modal */}
      <SelectVehicleModal
        isOpen={showVehicleModal}
        onClose={() => setShowVehicleModal(false)}
        onSave={handleVehicleSave}
      />
    </>
  );
};

export default FilterModal;
