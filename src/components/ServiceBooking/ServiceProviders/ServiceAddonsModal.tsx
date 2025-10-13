"use client";
import React, { useState, useEffect } from "react";
import { X, ArrowRight } from "lucide-react";
import ScheduleServiceModal from "./ScheduleServiceModal";

interface Addon {
  id: number;
  name: string;
  price: number;
  selected: boolean;
}

interface ServiceAddonsModalProps {
  isOpen: boolean;
  onClose: () => void;
  serviceName: string;
  onCheckout: () => void;
}

const ServiceAddonsModal: React.FC<ServiceAddonsModalProps> = ({
  isOpen,
  onClose,
  onCheckout,
}) => {
  const [addons, setAddons] = useState<Addon[]>([
    { id: 1, name: "Interior fragrance", price: 50, selected: true },
    { id: 2, name: "Engine bay cleaning", price: 199, selected: false },
    { id: 3, name: "Headlight restoration", price: 299, selected: false },
    { id: 4, name: "Undercarriage wash", price: 149, selected: false },
  ]);

  const [isAnimating, setIsAnimating] = useState(false);
  const [isScheduleModalOpen, setIsScheduleModalOpen] = useState(false);

  useEffect(() => {
    if (isOpen) {
      setIsAnimating(true);
    }
  }, [isOpen]);

  const handleClose = () => {
    setIsAnimating(false);
    setTimeout(() => {
      onClose();
    }, 300); // Match animation duration
  };

  const toggleAddon = (id: number) => {
    setAddons((prev) =>
      prev.map((addon) =>
        addon.id === id ? { ...addon, selected: !addon.selected } : addon
      )
    );
  };

  const totalAmount = addons
    .filter((addon) => addon.selected)
    .reduce((sum, addon) => sum + addon.price, 0);

  const handleScheduleClick = () => {
    setIsScheduleModalOpen(true);
  };

  const handleCloseScheduleModal = () => {
    setIsScheduleModalOpen(false);
  };

  if (!isOpen && !isAnimating) return null;

  return (
    <>
      {/* Backdrop */}
      <div
        className={`fixed inset-0 bg-black z-40 transition-opacity duration-300 ${
          isAnimating ? "opacity-50" : "opacity-0"
        }`}
        onClick={handleClose}
      />

      {/* Modal */}
      <div
        className={`fixed inset-x-0 bottom-0 z-50 bg-white rounded-t-3xl shadow-2xl font-poppins transition-transform duration-300 ease-out ${
          isAnimating ? "translate-y-0" : "translate-y-full"
        }`}
        style={{ maxHeight: "85vh" }}
      >
        {/* Header */}
        <div className="flex items-center justify-between px-6 py-4 border-b border-gray-200">
          <h2 className="text-lg font-semibold text-[#101010]">
            Service Add-ons
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
          style={{ maxHeight: "calc(85vh - 180px)" }}
        >
          <h3 className="text-base font-semibold text-[#101010] mb-4">
            Add-ons
          </h3>

          <div className="space-y-3">
            {addons.map((addon) => (
              <div
                key={addon.id}
                onClick={() => toggleAddon(addon.id)}
                className="flex items-center justify-between p-4 border border-gray-200 rounded-lg cursor-pointer hover:bg-gray-50 transition-colors"
              >
                <div className="flex items-center gap-3 flex-1">
                  {/* Checkbox */}
                  <div
                    className={`w-5 h-5 rounded-full border-2 flex items-center justify-center transition-all ${
                      addon.selected
                        ? "bg-[#128C7E] border-[#128C7E]"
                        : "border-gray-300"
                    }`}
                  >
                    {addon.selected && (
                      <svg
                        width="12"
                        height="12"
                        viewBox="0 0 24 24"
                        fill="none"
                        stroke="white"
                        strokeWidth="3"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                      >
                        <polyline points="20 6 9 17 4 12"></polyline>
                      </svg>
                    )}
                  </div>

                  {/* Addon Name */}
                  <span className="text-sm text-[#101010]">{addon.name}</span>
                </div>

                {/* Price */}
                <span className="text-sm font-semibold text-[#128C7E]">
                  ₹ {addon.price}
                </span>
              </div>
            ))}
          </div>
        </div>

        {/* Footer */}
        <div className="px-6 py-4 border-t border-gray-200 bg-white">
          <div className="flex items-center justify-between mb-3">
            <span className="text-sm text-gray-600">Total Amount</span>
            <span className="text-xl font-bold text-[#101010]">
              ₹ {totalAmount}
            </span>
          </div>
          <button
            onClick={handleScheduleClick}
            className="w-full bg-[#128C7E] text-white py-3 rounded-full font-medium text-sm hover:bg-[#0f7269] transition-colors flex items-center justify-center gap-2"
          >
            <span>Schedule</span>
            <ArrowRight size={18} />
          </button>
        </div>
      </div>

      {/* Schedule Service Modal */}
      <ScheduleServiceModal
        isOpen={isScheduleModalOpen}
        onClose={handleCloseScheduleModal}
        onCheckout={onCheckout}
      />
    </>
  );
};

export default ServiceAddonsModal;
