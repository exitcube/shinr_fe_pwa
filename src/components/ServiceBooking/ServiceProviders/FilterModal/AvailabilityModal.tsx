"use client";
import React, { useState, useEffect } from "react";
import { X, ArrowRight } from "lucide-react";

interface AvailabilityModalProps {
  isOpen: boolean;
  onClose: () => void;
  onSave: (date: string, timeSlot: string) => void;
}

const AvailabilityModal: React.FC<AvailabilityModalProps> = ({ isOpen, onClose, onSave }) => {
  const [isAnimating, setIsAnimating] = useState(false);
  const [selectedDate, setSelectedDate] = useState("18");
  const [selectedTimeSlot, setSelectedTimeSlot] = useState("08:00 am");

  const dates = [
    { day: "Fri", date: "16" },
    { day: "Sat", date: "17" },
    { day: "Sun", date: "18" },
    { day: "Mon", date: "22" },
    { day: "Tue", date: "23" },
    { day: "Wed", date: "24" },
  ];

  const timeSlots = [
    "08:00 am", "09:30 am", "10:00 am", "10:30 am",
    "12:30 pm", "02:00 pm", "03:30 pm"
  ];

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

  const handleDone = () => {
    onSave(selectedDate, selectedTimeSlot);
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
        style={{ maxHeight: "70vh" }}
      >
        {/* Header */}
        <div className="flex items-center justify-between px-6 py-4 border-b border-gray-200">
          <h2 className="text-lg font-semibold text-[#101010]">Availability</h2>
          <button
            onClick={handleClose}
            className="p-1 hover:bg-gray-100 rounded-full transition-colors"
          >
            <X size={24} className="text-gray-600" />
          </button>
        </div>

        {/* Content */}
        <div className="overflow-y-auto px-6 py-4" style={{ maxHeight: "calc(70vh - 140px)" }}>
          {/* Required Date */}
          <div className="mb-6">
            <h3 className="text-sm font-semibold text-[#101010] mb-3">Required Date</h3>
            <div className="flex gap-2 overflow-x-auto scrollbar-hide pb-2">
              {dates.map((item) => (
                <button
                  key={item.date}
                  onClick={() => setSelectedDate(item.date)}
                  className={`flex-shrink-0 flex flex-col items-center justify-center w-14 h-16 rounded-lg border-2 transition-colors ${
                    selectedDate === item.date
                      ? "bg-[#128C7E] border-[#128C7E] text-white"
                      : "bg-white border-gray-200 text-gray-600 hover:border-gray-300"
                  }`}
                >
                  <span className="text-xs font-medium">{item.day}</span>
                  <span className="text-lg font-semibold mt-1">{item.date}</span>
                </button>
              ))}
            </div>
          </div>

          {/* Required Time slot */}
          <div>
            <h3 className="text-sm font-semibold text-[#101010] mb-3">Required Time slot</h3>
            <div className="grid grid-cols-3 gap-2">
              {timeSlots.map((slot) => (
                <button
                  key={slot}
                  onClick={() => setSelectedTimeSlot(slot)}
                  className={`px-4 py-2.5 rounded-full text-xs font-medium transition-colors ${
                    selectedTimeSlot === slot
                      ? "bg-[#128C7E] text-white"
                      : "bg-gray-100 text-gray-600 hover:bg-gray-200"
                  }`}
                >
                  {slot}
                </button>
              ))}
            </div>
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

export default AvailabilityModal;
