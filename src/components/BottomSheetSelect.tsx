"use client";

import React, { useState, useEffect } from "react";
import { X, ChevronDown, Check } from "lucide-react";

interface Option {
  label: string;
  value: string;
}

interface BottomSheetSelectProps {
  label?: string;
  options: Option[];
  value?: string;
  onChange: (value: string) => void;
  placeholder?: string;
  required?: boolean;
  className?: string;
}

const BottomSheetSelect: React.FC<BottomSheetSelectProps> = ({
  label,
  options,
  value,
  onChange,
  placeholder = "Select...",
  required = false,
  className = "",
}) => {
  const [open, setOpen] = useState(false);
  const [isAnimating, setIsAnimating] = useState(false);

  useEffect(() => {
    if (open) setIsAnimating(true);
  }, [open]);

  const handleClose = () => {
    setIsAnimating(false);
    setTimeout(() => setOpen(false), 300);
  };

  const handleSelect = (val: string) => {
    onChange(val);
    handleClose();
  };

  return (
    <div className={`flex flex-col gap-1 font-poppins ${className}`}>
      {label && (
        <label className="block text-sm text-gray-600">
          {label} {required && <span className="text-red-500">*</span>}
        </label>
      )}

      <button
        type="button"
        onClick={() => setOpen(true)}
        className="w-full p-4 bg-white border border-gray-200 rounded-full text-sm text-left flex items-center justify-between focus:outline-none focus:border-[#128C7E]"
      >
        <span className={value ? "text-gray-900" : "text-gray-400"}>
          {options.find((o) => o.value === value)?.label || placeholder}
        </span>
        <ChevronDown size={16} className="text-gray-400" />
      </button>

      {/* Modal */}
      {open && (
        <>
          {/* Backdrop */}
          <div
            className={`fixed inset-0 bg-black/50 z-50 transition-opacity duration-300 ${
              isAnimating ? "opacity-50" : "opacity-0"
            }`}
            onClick={handleClose}
          />

          {/* Bottom sheet */}
          <div
            className={`fixed inset-x-0 bottom-0 z-60 bg-white rounded-t-3xl shadow-2xl transition-transform duration-300 ease-out ${
              isAnimating ? "translate-y-0" : "translate-y-full"
            }`}
            style={{ maxHeight: "70vh" }}
          >
            {/* Header */}
            <div className="flex items-center justify-between px-6 py-4 border-b border-gray-200">
              <h2 className="text-lg font-semibold text-gray-800">{label}</h2>
              <button
                onClick={handleClose}
                className="p-1 hover:bg-gray-100 rounded-full transition-colors"
              >
                <X size={24} className="text-gray-600" />
              </button>
            </div>

            {/* Options */}
            <div
              className="overflow-y-auto px-6 py-4"
              style={{ maxHeight: "calc(70vh - 80px)" }}
            >
              <div className="space-y-2 font-medium text-sm">
                {options.map((option) => (
                  <button
                    key={option.value}
                    onClick={() => handleSelect(option.value)}
                    className="w-full flex items-center justify-between p-4 hover:bg-gray-50 rounded-lg transition-colors"
                  >
                    <span className="text-sm text-gray-900">
                      {option.label}
                    </span>
                    <div
                      className={`w-6 h-6 rounded-full border-2 flex items-center justify-center ${
                        value === option.value
                          ? "border-[#128C7E] bg-[#128C7E]"
                          : "border-gray-300"
                      }`}
                    >
                      {value === option.value && <Check color="white" />}
                    </div>
                  </button>
                ))}
              </div>
            </div>
          </div>
        </>
      )}
    </div>
  );
};

export default BottomSheetSelect;
