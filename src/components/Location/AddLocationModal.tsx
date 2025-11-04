"use client";
import React, { useEffect, useState } from "react";
import { ArrowLeft,ArrowRight } from "lucide-react";

interface AddLocationModalProps {
  isOpen: boolean;
  onClose: () => void;
}

const AddLocationModal: React.FC<AddLocationModalProps> = ({ isOpen, onClose }) => {
  const [isAnimating, setIsAnimating] = useState(false);

  useEffect(() => {
    if (isOpen) setIsAnimating(true);
  }, [isOpen]);

  const handleClose = () => {
    setIsAnimating(false);
    setTimeout(onClose, 300);
  };

  if (!isOpen && !isAnimating) return null;

  return (
    <>
      {/* Backdrop */}
      <div
        className={`fixed inset-0 bg-black/50 z-[70] transition-opacity duration-300 ${
          isAnimating ? "opacity-100" : "opacity-0"
        }`}
        onClick={handleClose}
      />

      {/* Full-height Sheet */}
      <div
        className={`fixed inset-x-0 bottom-0 top-0 z-[80] bg-[#F5F5F5] rounded-t-3xl shadow-2xl transition-transform duration-300 ease-out ${
          isAnimating ? "translate-y-0" : "translate-y-full"
        }`}
      >
        {/* Header */}
        <div className="flex items-center gap-2 px-4 py-3 rounded-t-3xl">
          <button
            type="button"
            aria-label="Back"
            onClick={handleClose}
            className="p-2 rounded-full text-black shadow bg-white hover:bg-gray-100"
          >
            <ArrowLeft size={20} />
          </button>
          <h2 className="mx-auto text-sm font-bold text-black">New Location</h2>
          <div className="w-8" />
        </div>

        {/* Content */}
        <div className="px-4">
          {/* Map */}
          <div className="bg-gray-200 rounded-xl h-40 w-full" />
          {/* Title and Change */}
          <div className="flex items-start justify-between mt-3">
            <div>
              <p className="text-[13px] font-semibold text-black">Square Apartments</p>
              <p className="text-[11px] text-gray-500">1/342, 16th Main</p>
            </div>
            <button className="px-3 py-1 text-[12px] border rounded-full border-[#128C7E] text-[#128C7E] font-medium">Change</button>
          </div>
        </div>

        {/* Form */}
        <div className="px-4 mt-4 pb-28 overflow-y-auto text-black" style={{ height: "calc(100% - 220px)" }}>
          <p className="text-sm font-semibold mb-3">Add Address</p>

          <label className="block text-[11px] text-gray-600 mb-1">Building Number <span className="text-red-500">*</span></label>
          <input className="w-full mb-3 rounded-full border border-gray-300 px-4 py-2 text-sm focus:outline-none" placeholder="Enter Building Number" />

          <label className="block text-[11px] text-gray-600 mb-1">Street (Option)</label>
          <input className="w-full mb-3 rounded-full border border-gray-300 px-4 py-2 text-sm focus:outline-none" placeholder="Enter" />

          <label className="block text-[11px] text-gray-600 mb-1">Landmark (Optional)</label>
          <input className="w-full mb-4 rounded-full border border-gray-300 px-4 py-2 text-sm focus:outline-none" placeholder="Enter Vehicle Year" />

          <p className="text-sm font-semibold mb-3">Contact</p>
          <label className="block text-[11px] text-gray-600 mb-1">Contact Person</label>
          <input className="w-full mb-6 rounded-full border border-gray-300 px-4 py-2 text-sm focus:outline-none" placeholder="Enter Contact Person Name" />
        </div>

        {/* Sticky Save Button */}
        <div className="fixed inset-x-0 bottom-0 z-[90] px-4 pb-5 pt-2 bg-[#F5F5F5] rounded-t-2xl">
          <button className="w-full bg-[#128C7E] text-white font-semibold rounded-full py-3 px-3 flex items-center justify-between gap-2">
            <span>Save Location</span>
            <ArrowRight size={20}/>
          </button>
        </div>
      </div>
    </>
  );
};

export default AddLocationModal;


