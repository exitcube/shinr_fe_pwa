"use client";
import React, { useState, useEffect, useMemo } from "react";
import { X, ArrowRight, Check } from "lucide-react";
import Image from "next/image";

interface Vehicle {
  id: number;
  type: string;
  name: string;
  imageUrl: string;
}

interface SelectVehicleModalProps {
  isOpen: boolean;
  onClose: () => void;
  onSave: (vehicle: Vehicle) => void;
}

const SelectVehicleModal: React.FC<SelectVehicleModalProps> = ({
  isOpen,
  onClose,
  onSave,
}) => {
  const [isAnimating, setIsAnimating] = useState(false);
  const [selectedVehicle, setSelectedVehicle] = useState<Vehicle | null>(null);

  const vehicles: Vehicle[] = useMemo(
    () => [
      {
        id: 1,
        type: "Car",
        name: "Toyota Glanza",
        imageUrl: "/assets/images/car_image.png",
      },
      {
        id: 2,
        type: "Bike",
        name: "Royal Enfield Himalayan",
        imageUrl: "/assets/images/car_image.png",
      },
    ],
    []
  );

  useEffect(() => {
    if (isOpen) {
      setIsAnimating(true);
      // Set default selected vehicle
      setSelectedVehicle(vehicles[0]);
    }
  }, [isOpen, vehicles]);

  const handleClose = () => {
    setIsAnimating(false);
    setTimeout(() => {
      onClose();
    }, 300);
  };

  const handleDone = () => {
    if (selectedVehicle) {
      onSave(selectedVehicle);
    }
    handleClose();
  };

  if (!isOpen && !isAnimating) return null;

  return (
    <>
      {/* Backdrop */}
      <div
        className={`fixed inset-0 bg-black z-[70] transition-opacity duration-300 ${
          isAnimating ? "opacity-50" : "opacity-0"
        }`}
        onClick={handleClose}
      />

      {/* Modal */}
      <div
        className={`fixed inset-x-0 bottom-0 z-[80] bg-white rounded-t-3xl shadow-2xl font-poppins transition-transform duration-300 ease-out max-w-md mx-auto ${
          isAnimating ? "translate-y-0" : "translate-y-full"
        }`}
        style={{ maxHeight: "60vh" }}
      >
        {/* Header */}
        <div className="flex items-center justify-between px-6 py-4 border-b border-gray-200">
          <h2 className="text-lg font-semibold text-[#101010]">
            Select Vehicle
          </h2>
          <button
            onClick={handleClose}
            className="p-1 hover:bg-gray-100 rounded-full transition-colors"
          >
            <X size={24} className="text-gray-600" />
          </button>
        </div>

        {/* Content */}
        <div
          className="overflow-y-auto px-6 py-4"
          style={{ maxHeight: "calc(60vh - 140px)" }}
        >
          <div className="space-y-3">
            {vehicles.map((vehicle) => (
              <button
                key={vehicle.id}
                onClick={() => setSelectedVehicle(vehicle)}
                className={`w-full flex items-center gap-3 p-4 rounded-2xl border-2 transition-colors ${
                  selectedVehicle?.id === vehicle.id
                    ? "border-[#128C7E] bg-[#E0F7F4]"
                    : "border-gray-200 bg-white hover:border-gray-300"
                }`}
              >
                {/* Vehicle Image */}
                <div className="relative w-16 h-16 rounded-lg overflow-hidden bg-gray-100 flex-shrink-0">
                  <Image
                    src={vehicle.imageUrl}
                    alt={vehicle.name}
                    fill
                    className="object-cover"
                  />
                </div>

                {/* Vehicle Info */}
                <div className="flex-1 text-left">
                  <p className="text-xs text-gray-500 mb-1">{vehicle.type}</p>
                  <p className="text-sm font-semibold text-[#101010]">
                    {vehicle.name}
                  </p>
                </div>

                {/* Check Icon */}
                <div
                  className={`w-6 h-6 rounded-full flex items-center justify-center flex-shrink-0 ${
                    selectedVehicle?.id === vehicle.id
                      ? "bg-[#128C7E]"
                      : "border-2 border-gray-300"
                  }`}
                >
                  {selectedVehicle?.id === vehicle.id && (
                    <Check size={16} className="text-white" />
                  )}
                </div>
              </button>
            ))}
          </div>
        </div>

        {/* Done Button */}
        <div className="px-6 py-4 border-t border-gray-200">
          <button
            onClick={handleDone}
            className="w-full bg-[#128C7E] text-white py-3 rounded-full font-medium text-sm hover:bg-[#0f7269] transition-colors flex items-center justify-between px-6"
          >
            <span>Done</span>
            <ArrowRight size={18} />
          </button>
        </div>
      </div>
    </>
  );
};

export default SelectVehicleModal;
