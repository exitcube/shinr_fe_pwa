"use client";
import React, { useState, useEffect } from "react";
import { X, ArrowRight } from "lucide-react";

interface DateSlot {
  day: string;
  date: number;
  selected: boolean;
}

interface TimeSlot {
  time: string;
  available: boolean;
  selected: boolean;
}

interface ScheduleServiceModalProps {
  isOpen: boolean;
  onClose: () => void;
  onCheckout: () => void;
}

const ScheduleServiceModal: React.FC<ScheduleServiceModalProps> = ({
  isOpen,
  onClose,
  onCheckout,
}) => {
  const [dateSlots, setDateSlots] = useState<DateSlot[]>([
    { day: "Sat", date: 19, selected: true },
    { day: "Sun", date: 20, selected: false },
    { day: "Mon", date: 21, selected: false },
    { day: "Tue", date: 22, selected: false },
    { day: "Tue", date: 23, selected: false },
    { day: "Thu", date: 24, selected: false },
  ]);

  const [timeSlots, setTimeSlots] = useState<TimeSlot[]>([
    { time: "09:00 am", available: true, selected: true },
    { time: "09:30 am", available: true, selected: false },
    { time: "10:00 am", available: false, selected: false },
    { time: "10:30 am", available: false, selected: false },
    { time: "12:30 pm", available: true, selected: false },
    { time: "01:00 pm", available: true, selected: false },
    { time: "01:30 pm", available: true, selected: false },
    { time: "02:00 pm", available: true, selected: false },
  ]);

  const [isAnimating, setIsAnimating] = useState(false);

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

  const selectDate = (index: number) => {
    setDateSlots((prev) =>
      prev.map((slot, i) => ({ ...slot, selected: i === index }))
    );
  };

  const selectTime = (index: number) => {
    if (timeSlots[index].available) {
      setTimeSlots((prev) =>
        prev.map((slot, i) => ({ ...slot, selected: i === index }))
      );
    }
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
        className={`fixed inset-x-0 bottom-0 z-[60] bg-white rounded-t-3xl shadow-2xl font-poppins transition-transform duration-300 ease-out ${
          isAnimating ? "translate-y-0" : "translate-y-full"
        }`}
        style={{ maxHeight: "85vh" }}
      >
        {/* Header */}
        <div className="flex items-center justify-between px-6 py-4 border-b border-gray-200">
          <h2 className="text-lg font-semibold text-[#101010]">
            Schedule Service
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
          {/* Required Date */}
          <div className="mb-6">
            <h3 className="text-base font-semibold text-[#101010] mb-3">
              Required Date
            </h3>
            <div className="flex gap-2 overflow-x-auto pb-2">
              {dateSlots.map((slot, index) => (
                <button
                  key={index}
                  onClick={() => selectDate(index)}
                  className={`flex-shrink-0 flex flex-col items-center justify-center w-16 h-16 rounded-lg transition-all ${
                    slot.selected
                      ? "bg-[#128C7E] text-white"
                      : "bg-gray-100 text-gray-700 hover:bg-gray-200"
                  }`}
                >
                  <span className="text-xs font-medium">{slot.day}</span>
                  <span className="text-lg font-semibold">{slot.date}</span>
                </button>
              ))}
            </div>
          </div>

          {/* Available Time Slot */}
          <div>
            <h3 className="text-base font-semibold text-[#101010] mb-3">
              Available Time slot
            </h3>
            <div className="grid grid-cols-4 gap-2">
              {timeSlots.map((slot, index) => (
                <button
                  key={index}
                  onClick={() => selectTime(index)}
                  disabled={!slot.available}
                  className={`py-2 px-3 rounded-lg text-xs font-medium transition-all ${
                    slot.selected
                      ? "bg-[#128C7E] text-white"
                      : slot.available
                      ? "bg-gray-100 text-gray-700 hover:bg-gray-200"
                      : "bg-gray-50 text-gray-300 cursor-not-allowed"
                  }`}
                >
                  {slot.time}
                </button>
              ))}
            </div>
          </div>
        </div>

        {/* Footer */}
        <div className="px-6 py-4 border-t border-gray-200 bg-white">
          <button 
            onClick={onCheckout}
            className="w-full bg-[#128C7E] text-white py-3 rounded-full font-medium text-sm hover:bg-[#0f7269] transition-colors flex items-center justify-center gap-2"
          >
            <span>Check Out</span>
            <ArrowRight size={18} />
          </button>
        </div>
      </div>
    </>
  );
};

export default ScheduleServiceModal;
