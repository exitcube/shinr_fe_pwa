"use client";
import React, { useState } from "react";
import { ArrowLeft } from "lucide-react";

interface BookingHistoryProps {
  onBack: () => void;
}

interface Booking {
  id: number;
  serviceName: string;
  bookingId: string;
  status: string;
  serviceProvider: string;
  location: string;
  dateTime: string;
  statusColor: string;
}

const BookingHistory: React.FC<BookingHistoryProps> = ({ onBack }) => {
  const [activeTab, setActiveTab] = useState<"scheduled" | "completed" | "cancelled">("scheduled");

  const bookings: Record<string, Booking[]> = {
    scheduled: [
      {
        id: 1,
        serviceName: "Basic Wash",
        bookingId: "#1234567",
        status: "Scheduled",
        serviceProvider: "5k Car Care",
        location: "1/542, HSR Layout, Bangalore",
        dateTime: "18 June | 2:55 PM",
        statusColor: "text-blue-600",
      },
    ],
    completed: [],
    cancelled: [],
  };

  const getTabCount = (tab: string) => {
    return bookings[tab as keyof typeof bookings]?.length || 0;
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
        <h1 className="text-lg font-medium text-[#101010]">Booking History</h1>
      </div>

      {/* Tabs */}
      <div className="bg-white px-4 py-3 flex gap-2">
        <button
          onClick={() => setActiveTab("scheduled")}
          className={`px-4 py-1.5 rounded-full text-xs font-medium transition-colors ${
            activeTab === "scheduled"
              ? "bg-[#128C7E] text-white"
              : "bg-gray-200 text-gray-600"
          }`}
        >
          Scheduled {getTabCount("scheduled")}
        </button>
        <button
          onClick={() => setActiveTab("completed")}
          className={`px-4 py-1.5 rounded-full text-xs font-medium transition-colors ${
            activeTab === "completed"
              ? "bg-[#128C7E] text-white"
              : "bg-gray-200 text-gray-600"
          }`}
        >
          Completed {getTabCount("completed")}
        </button>
        <button
          onClick={() => setActiveTab("cancelled")}
          className={`px-4 py-1.5 rounded-full text-xs font-medium transition-colors ${
            activeTab === "cancelled"
              ? "bg-[#128C7E] text-white"
              : "bg-gray-200 text-gray-600"
          }`}
        >
          Cancelled {getTabCount("cancelled")}
        </button>
      </div>

      {/* Booking List */}
      <div className="flex-1 overflow-y-auto px-4 py-4">
        {bookings[activeTab].length > 0 ? (
          <div className="space-y-4">
            {bookings[activeTab].map((booking) => (
              <div
                key={booking.id}
                className="bg-white rounded-2xl p-4 shadow-sm"
              >
                {/* Service Name and Booking ID */}
                <div className="mb-3">
                  <h3 className="text-base font-semibold text-[#101010] mb-1">
                    {booking.serviceName}
                  </h3>
                  <p className="text-xs text-gray-500">{booking.bookingId}</p>
                </div>

                {/* Status and Date/Time */}
                <div className="flex justify-between mb-3">
                  <div>
                    <p className="text-xs text-gray-500 mb-1">Status</p>
                    <p className={`text-sm font-medium ${booking.statusColor}`}>
                      {booking.status}
                    </p>
                  </div>
                  <div className="text-right">
                    <p className="text-xs text-gray-500 mb-1">Date & Time</p>
                    <p className="text-sm font-medium text-[#101010]">
                      {booking.dateTime}
                    </p>
                  </div>
                </div>

                {/* Service Provider */}
                <div className="mb-3">
                  <p className="text-xs text-gray-500 mb-1">Service Provider</p>
                  <p className="text-sm font-medium text-[#101010]">
                    {booking.serviceProvider}
                  </p>
                </div>

                {/* Location */}
                <div>
                  <p className="text-xs text-gray-500 mb-1">Location</p>
                  <p className="text-sm text-[#101010]">{booking.location}</p>
                </div>
              </div>
            ))}
          </div>
        ) : (
          <div className="flex items-center justify-center h-64">
            <p className="text-gray-400 text-sm">No bookings found</p>
          </div>
        )}
      </div>
    </div>
  );
};

export default BookingHistory;
