"use client";
import React, { useState } from "react";
import Image from "next/image";
import { ArrowRight, Plus, AlertCircle } from "lucide-react";
import AddVehicleForm from "./AddVehicleForm";

interface Vehicle {
  id: number;
  name: string;
  year: number;
  model: string;
  brand: string;
  fuelType: string;
  imageUrl: string;
  lastWash: string;
}

const VehiclesList: React.FC = () => {
  const [showAddVehicle, setShowAddVehicle] = useState(false);
  const vehicles: Vehicle[] = [
    {
      id: 1,
      name: "Bumble Bee",
      year: 2021,
      model: "Glanza",
      brand: "Toyota",
      fuelType: "Petrol",
      imageUrl: "/assets/images/car_image.png",
      lastWash: "2 weeks ago",
    },
    {
      id: 2,
      name: "Bumble Bee",
      year: 2021,
      model: "Glanza",
      brand: "Toyota",
      fuelType: "Petrol",
      imageUrl: "/assets/images/car_image.png",
      lastWash: "2 weeks ago",
    },
  ];

  const handleAddVehicle = () => {
    setShowAddVehicle(true);
  };

  const handleBackFromAddVehicle = () => {
    setShowAddVehicle(false);
  };

  if (showAddVehicle) {
    return <AddVehicleForm onBack={handleBackFromAddVehicle} />;
  }

  return (
    <div className="max-w-md mx-auto bg-[#F5F5F5] min-h-screen p-4 font-poppins">
      {/* Header */}
      <h1 className="text-xl font-bold text-[#101010] mb-4">Your Vehicles</h1>

      {/* Vehicles List */}
      <div className="space-y-4">
        {vehicles.map((vehicle) => (
          <div key={vehicle.id} className="bg-white rounded-2xl p-4 shadow-sm">
            {/* Vehicle Content */}
            <div className="flex gap-4 mb-4">
              {/* Vehicle Image */}
              <div className="relative w-28 h-28 rounded-xl overflow-hidden flex-shrink-0 bg-gray-100">
                <Image
                  src={vehicle.imageUrl}
                  alt={vehicle.name}
                  fill
                  sizes="112px"
                  className="object-cover"
                />
              </div>

              {/* Vehicle Info */}
              <div className="flex-1">
                <div className="flex justify-between mb-1">
                  <h2 className="text-lg font-semibold text-[#101010]">
                    {vehicle.name}
                  </h2>
                  <button className="text-[#128C7E] text-sm font-medium flex items-center gap-1">
                    Edit Info
                    <ArrowRight size={14} />
                  </button>
                </div>
                <p className="text-sm text-gray-500 mb-3">{vehicle.year}</p>

                {/* Model Details */}
                <div className="space-y-1">
                  <p className="text-xs text-gray-500">Model</p>
                  <div className="flex gap-3 text-sm text-[#101010] font-medium">
                    <span>{vehicle.model}</span>
                    <span>{vehicle.brand}</span>
                    <span>{vehicle.fuelType}</span>
                  </div>
                </div>
              </div>
            </div>

            {/* Last Wash Warning */}
            <div className="flex items-center gap-2 mb-3 text-orange-500 text-sm">
              <AlertCircle size={18} />
              <span>Last wash: {vehicle.lastWash}</span>
            </div>

            {/* Book Wash Button */}
            <button className="w-full bg-[#128C7E] text-white py-3 rounded-full text-sm font-medium hover:bg-[#0f7269] transition-colors flex items-center justify-between px-6">
              <span>Book Wash</span>
              <ArrowRight size={18} />
            </button>
          </div>
        ))}
      </div>

      {/* Add New Vehicle Button */}
      <div className="w-full flex items-center justify-center">
        <button
          onClick={handleAddVehicle}
          className="mt-4 bg-white text-[#128C7E] p-2 rounded-full text-sm font-medium hover:bg-[#E0F7F4] transition-colors flex items-center justify-center gap-2"
        >
          <Plus size={18} />
          <span>Add new Vehicle</span>
        </button>
      </div>
    </div>
  );
};

export default VehiclesList;
