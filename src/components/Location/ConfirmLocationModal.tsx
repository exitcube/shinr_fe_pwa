"use client";
import React, { useEffect, useState } from "react";
import { ArrowLeft, Navigation2 } from "lucide-react";

export const ConfirmLocationModal: React.FC<IProps> = ({
  isOpen,
  onClose,
  title = "Square Apartments",
  subtitle = "1/342, 16th Main",
  onConfirm,
}) => {
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
      <div
        className={`fixed inset-0 bg-black/50 z-[70] transition-opacity duration-300 ${
          isAnimating ? "opacity-100" : "opacity-0"
        }`}
        onClick={handleClose}
      />

      <div
        className={`fixed inset-x-0 bottom-0 top-0 z-[80] bg-white rounded-t-3xl shadow-2xl transition-transform duration-300 ease-out ${
          isAnimating ? "translate-y-0" : "translate-y-full"
        }`}
      >
        {/* Header */}
        <div className="flex items-center gap-2 px-4 py-3">
          <button
            type="button"
            aria-label="Back"
            onClick={handleClose}
            className="p-2 rounded-full text-black shadow bg-white hover:bg-gray-100"
          >
            <ArrowLeft size={20} />
          </button>
          <div className="mx-auto" />
          <div className="w-8" />
        </div>

        {/* Map area */}
        <div className="relative h-[65vh] w-full bg-gray-200">
          {/* Fake pin */}
          <div className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2">
            <div className="w-3 h-3 rounded-full bg-red-500 shadow" />
            <div className="w-[2px] h-4 bg-red-500 mx-auto" />
          </div>

          {/* Locate button */}
          <button
            className="absolute right-4 bottom-4 w-10 h-10 rounded-full bg-white shadow flex items-center justify-center"
            aria-label="Recenter"
          >
            <Navigation2 size={18} className="text-[#128C7E]" />
          </button>
        </div>

        {/* Bottom card */}
        <div className="px-4 py-3 bg-white">
          <p className="text-[13px] font-semibold text-black">{title}</p>
          <p className="text-[11px] text-gray-500">{subtitle}</p>
        </div>

        {/* Sticky confirm */}
        <div className="fixed inset-x-0 bottom-0 z-[90] px-4 pb-5 pt-2 bg-white">
          <button
            onClick={() => {
              // animate out then notify parent and close
              setIsAnimating(false);
              setTimeout(() => {
                if (onConfirm) onConfirm();
                onClose();
              }, 300);
            }}
            className="w-full bg-[#128C7E] text-white font-semibold rounded-full py-3 px-3 flex items-center justify-between"
          >
            <span>Confirm Location</span>
            <span className="text-xl">→</span>
          </button>
        </div>
      </div>
    </>
  );
};

interface IProps {
  isOpen: boolean;
  onClose: () => void;
  title?: string;
  subtitle?: string;
  onConfirm?: () => void;
}
