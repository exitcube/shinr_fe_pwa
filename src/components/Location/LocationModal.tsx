"use client";
import React, { useEffect, useState } from "react";
import { X, Search, MapPin, Check, ArrowRight } from "lucide-react";
import AddLocationModal from "./AddLocationModal";
import ConfirmLocationModal from "./ConfirmLocationModal";

interface LocationModalProps {
  isOpen: boolean;
  onClose: () => void;
}

const LocationModal: React.FC<LocationModalProps> = ({ isOpen, onClose }) => {
  const [isAnimating, setIsAnimating] = useState(false);
  const [isAddOpen, setIsAddOpen] = useState(false);
  const [isConfirmOpen, setIsConfirmOpen] = useState(false);
  const [selectedAddress, setSelectedAddress] = useState<string | null>(null);
  const [confirmMode, setConfirmMode] = useState<"existing" | "add" | null>(null);

  useEffect(() => {
    if (isOpen) {
      setIsAnimating(true);
    }
  }, [isOpen]);

  const handleClose = () => {
    setIsAnimating(false);
    setTimeout(() => onClose(), 300);
  };

  if (!isOpen && !isAnimating) return null;

  return (
    <>
      {/* Backdrop */}
      <div
        className={`fixed inset-0 bg-black/50 z-50 transition-opacity duration-300 ${
          isAnimating ? "opacity-100" : "opacity-0"
        }`}
        onClick={handleClose}
      />

      {/* Bottom Sheet */}
      <div
        className={`fixed inset-x-0 bottom-0 z-[60] bg-white rounded-t-3xl shadow-2xl transition-transform duration-300 ease-out ${
          isAnimating ? "translate-y-0" : "translate-y-full"
        }`}
        style={{ maxHeight: "80vh" }}
      >
        {/* Header */}
        <div className="flex items-center justify-between px-4 py-3 border-b border-gray-200">
          <h2 className="text-base font-semibold text-[#101010]">Location</h2>
          <button
            onClick={handleClose}
            className="p-1 hover:bg-gray-100 rounded-full transition-colors"
            aria-label="Close location modal"
          >
            <X size={24} className="text-gray-600" />
          </button>
        </div>

        {/* Body */}
        <div className="px-4 py-4 pb-28 overflow-y-auto">
          {/* Search */}
          <div className="mb-4 text-black">
            <div className="w-full rounded-full border border-gray-300 px-4 py-2 text-sm flex items-center gap-2">
              <Search size={16} className="text-gray-500" />
              <input
                type="text"
                placeholder="Search"
                className="flex-1 outline-none bg-transparent"
              />
            </div>
          </div>

          {/* Label */}
          <p className="text-[13px] font-semibold text-black mb-2">Select Location</p>

          {/* Address cards */}
          <div className="space-y-2">
            {[
              { name: "Sharuk", address: "1/342, HSR Layout, Bangalore" },
              { name: "Khan", address: "1/342, HSR Layout, Bangalore" },
            ].map((item, index) => {
              const addrKey = `${item.name}, ${item.address}`;
              const isSelected = selectedAddress === addrKey;
              return (
                <button
                  key={index}
                  onClick={() => setSelectedAddress(addrKey)}
                  className={`w-full text-left p-4 rounded-xl border flex items-start justify-between gap-3 ${
                    isSelected ? "border-[#128C7E] bg-[#F9FFFD]" : "border-gray-200"
                  }`}
                >
                  <div className="flex-1">
                    <p className="text-sm font-semibold text-black">{item.name}</p>
                    <div className="flex items-center gap-1 mt-1">
                      <MapPin size={14} className="text-gray-400" />
                      <p className="text-xs text-gray-500">{item.address}</p>
                    </div>
                  </div>
                  <div
                    className={`mt-1 w-5 h-5 rounded-full border-2 flex items-center justify-center ${
                      isSelected ? "border-[#128C7E] bg-[#128C7E]" : "border-gray-300"
                    }`}
                  >
                    {isSelected && <Check size={12} className="text-white" />}
                  </div>
                </button>
              );
            })}

            <div className="mt-4 mb-6 flex justify-center">
              <button
                onClick={() => { setConfirmMode("add"); setIsConfirmOpen(true); }}
                className="text-[#128C7E] text-sm font-semibold underline"
              >
                Add New Address  +
              </button>
            </div>
          </div>
        </div>
      </div>

      {/* Add New Location flow */}
      <AddLocationModal isOpen={isAddOpen} onClose={() => setIsAddOpen(false)} />

      {/* Confirm existing location */}
      <ConfirmLocationModal
        isOpen={isConfirmOpen}
        onClose={() => setIsConfirmOpen(false)}
        title={(selectedAddress || "Square Apartments").split(",")[0]}
        subtitle={(selectedAddress || "1/342, 16th Main").includes(",")
          ? (selectedAddress || "").split(",").slice(1).join(",").trim()
          : "1/342, 16th Main"}
        onConfirm={() => {
          if (confirmMode === "add") {
            setIsAddOpen(true);
          }
        }}
      />

      {/* Sticky Next button */}
      <div className="fixed inset-x-0 bottom-0 z-[65] px-4 pb-5 pt-2">
        <button
          disabled={!selectedAddress}
          className={`w-full rounded-full py-3 font-semibold flex items-center justify-between px-4 ${
            selectedAddress ? "bg-[#128C7E] text-white" : "bg-gray-200 text-gray-400"
          }`}
        >
          <span>Next</span>
          <ArrowRight size={20} />
        </button>
      </div>
    </>
  );
};

export default LocationModal;


