"use client";
import React, { useState } from "react";
import { ArrowLeft } from "lucide-react";

interface EditPersonalInfoProps {
  onBack: () => void;
}

const EditPersonalInfo: React.FC<EditPersonalInfoProps> = ({ onBack }) => {
  const [formData, setFormData] = useState({
    name: "Mobee",
    mobileNumber: "999 888 7777",
    email: "shinr225@gmail.com",
  });

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  return (
    <div className="fixed inset-0 bg-[#F5F5F5] z-50 flex flex-col font-poppins">
      {/* Header */}
      <div className="bg-white border-b border-gray-200 px-4 py-3 flex items-center gap-3">
        <button
          onClick={onBack}
          className="p-1 hover:bg-gray-100 rounded-full transition-colors"
        >
          <ArrowLeft size={24} className="text-[#101010]" />
        </button>
        <h1 className="text-lg font-medium text-[#101010]">Personal Info</h1>
      </div>

      {/* Form Content */}
      <div className="flex-1 overflow-y-auto px-4 py-6">
        <div className="space-y-6">
          {/* Name */}
          <div>
            <div className="flex items-center justify-between mb-2">
              <label className="text-sm text-gray-500">Name</label>
              <button className="text-[#128C7E] text-sm font-medium">
                Edit
              </button>
            </div>
            <div className="bg-white rounded-lg p-4 shadow-sm">
              <input
                type="text"
                name="name"
                value={formData.name}
                onChange={handleInputChange}
                className="w-full text-base text-[#101010] font-medium focus:outline-none bg-transparent"
                readOnly
              />
            </div>
          </div>

          {/* Mobile Number */}
          <div>
            <div className="flex items-center justify-between mb-2">
              <label className="text-sm text-gray-500">Mobile Number</label>
              <button className="text-[#128C7E] text-sm font-medium">
                Edit
              </button>
            </div>
            <div className="bg-white rounded-lg p-4 shadow-sm">
              <input
                type="text"
                name="mobileNumber"
                value={formData.mobileNumber}
                onChange={handleInputChange}
                className="w-full text-base text-[#101010] font-medium focus:outline-none bg-transparent"
                readOnly
              />
            </div>
          </div>

          {/* Mail */}
          <div>
            <div className="flex items-center justify-between mb-2">
              <label className="text-sm text-gray-500">Mail</label>
              <button className="text-[#128C7E] text-sm font-medium">
                Edit
              </button>
            </div>
            <div className="bg-white rounded-lg p-4 shadow-sm">
              <input
                type="email"
                name="email"
                value={formData.email}
                onChange={handleInputChange}
                className="w-full text-base text-[#101010] focus:outline-none bg-transparent"
                readOnly
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default EditPersonalInfo;
