"use client";
import React, { useContext, useState } from "react";
import {
  ChevronRight,
  Crown,
  Clock,
  Bell,
  Gift,
  Info,
  Lock,
  HelpCircle,
  LogOut,
} from "lucide-react";
import EditPersonalInfo from "./EditPersonalInfo";
import Subscription from "./Subscription";
import BookingHistory from "./BookingHistory";
import ResetPassword from "./ResetPassword";
import ReferEarn from "./ReferEarn";
import { useAuthContext } from "@/provider/AuthProvider";

const ProfileContent: React.FC = () => {
  const [showEditInfo, setShowEditInfo] = useState(false);
  const [showSubscription, setShowSubscription] = useState(false);
  const [showBookingHistory, setShowBookingHistory] = useState(false);
  const [showResetPassword, setShowResetPassword] = useState(false);
  const [showReferEarn, setShowReferEarn] = useState(false);
  const { logout } = useAuthContext();

  const handleEditInfo = () => {
    setShowEditInfo(true);
  };

  const handleBackFromEdit = () => {
    setShowEditInfo(false);
  };

  const handleSubscription = () => {
    setShowSubscription(true);
  };

  const handleBackFromSubscription = () => {
    setShowSubscription(false);
  };

  const handleBookingHistory = () => {
    setShowBookingHistory(true);
  };

  const handleBackFromBookingHistory = () => {
    setShowBookingHistory(false);
  };

  const handleResetPassword = () => {
    setShowResetPassword(true);
  };

  const handleBackFromResetPassword = () => {
    setShowResetPassword(false);
  };

  const handleReferEarn = () => {
    setShowReferEarn(true);
  };

  const handleCloseReferEarn = () => {
    setShowReferEarn(false);
  };

  const handleLogout = () => {
    logout();
  };

  if (showEditInfo) {
    return <EditPersonalInfo onBack={handleBackFromEdit} />;
  }

  if (showSubscription) {
    return <Subscription onBack={handleBackFromSubscription} />;
  }

  if (showBookingHistory) {
    return <BookingHistory onBack={handleBackFromBookingHistory} />;
  }

  if (showResetPassword) {
    return <ResetPassword onBack={handleBackFromResetPassword} />;
  }

  return (
    <div className="max-w-md mx-auto bg-[#F5F5F5] min-h-screen p-4 font-poppins">
      {/* Personal Info Section */}
      <div className="mb-6">
        <h3 className="text-xs text-gray-500 mb-3 px-1">Personal Info</h3>
        <div className="bg-white rounded-2xl p-4 shadow-sm">
          <div className="flex items-center justify-between">
            <div>
              <h2 className="text-lg font-semibold text-[#101010] mb-1">
                Mobee
              </h2>
              <p className="text-sm text-gray-500">+91 999 888 7777</p>
            </div>
            <button
              onClick={handleEditInfo}
              className="text-[#128C7E] text-sm font-medium flex items-center gap-1"
            >
              Edit Info
              <ChevronRight size={16} />
            </button>
          </div>
        </div>
      </div>

      {/* Other Section */}
      <div className="mb-6">
        <h3 className="text-xs text-gray-500 mb-3 px-1">Other</h3>
        <div className="bg-white rounded-2xl shadow-sm overflow-hidden">
          {/* Subscription */}
          <button
            onClick={handleSubscription}
            className="w-full flex items-center justify-between p-4 border-b border-gray-100 hover:bg-gray-50 transition-colors"
          >
            <div className="flex items-center gap-3">
              <Crown size={20} className="text-gray-600" />
              <span className="text-sm text-[#101010]">Subscription</span>
            </div>
            <ChevronRight size={20} className="text-gray-400" />
          </button>

          {/* Booking History */}
          <button
            onClick={handleBookingHistory}
            className="w-full flex items-center justify-between p-4 border-b border-gray-100 hover:bg-gray-50 transition-colors"
          >
            <div className="flex items-center gap-3">
              <Clock size={20} className="text-gray-600" />
              <span className="text-sm text-[#101010]">Booking History</span>
            </div>
            <ChevronRight size={20} className="text-gray-400" />
          </button>

          {/* Notifications */}
          <div className="flex items-center justify-between p-4 border-b border-gray-100">
            <div className="flex items-center gap-3">
              <Bell size={20} className="text-gray-600" />
              <span className="text-sm text-[#101010]">Notifications</span>
            </div>
            <label className="relative inline-flex items-center cursor-pointer">
              <input type="checkbox" className="sr-only peer" defaultChecked />
              <div className="w-11 h-6 bg-gray-200 peer-focus:outline-none rounded-full peer peer-checked:after:translate-x-full rtl:peer-checked:after:-translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:start-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-5 after:w-5 after:transition-all peer-checked:bg-[#128C7E]"></div>
            </label>
          </div>

          {/* Refer & Earn */}
          <button
            onClick={handleReferEarn}
            className="w-full flex items-center justify-between p-4 hover:bg-gray-50 transition-colors"
          >
            <div className="flex items-center gap-3">
              <Gift size={20} className="text-gray-600" />
              <span className="text-sm text-[#101010]">Refer & Earn</span>
            </div>
            <ChevronRight size={20} className="text-gray-400" />
          </button>

          {/* About Shinr */}
          <button className="w-full flex items-center justify-between p-4 border-t border-gray-100 hover:bg-gray-50 transition-colors">
            <div className="flex items-center gap-3">
              <Info size={20} className="text-gray-600" />
              <span className="text-sm text-[#101010]">About Shinr</span>
            </div>
            <ChevronRight size={20} className="text-gray-400" />
          </button>
        </div>
      </div>

      {/* Account Section */}
      <div className="mb-6">
        <h3 className="text-xs text-gray-500 mb-3 px-1">Account</h3>
        <div className="bg-white rounded-2xl shadow-sm overflow-hidden">
          {/* Reset Password */}
          <button
            onClick={handleResetPassword}
            className="w-full flex items-center justify-between p-4 border-b border-gray-100 hover:bg-gray-50 transition-colors"
          >
            <div className="flex items-center gap-3">
              <Lock size={20} className="text-gray-600" />
              <span className="text-sm text-[#101010]">Reset Password</span>
            </div>
            <ChevronRight size={20} className="text-gray-400" />
          </button>

          {/* Help */}
          <button className="w-full flex items-center justify-between p-4 hover:bg-gray-50 transition-colors">
            <div className="flex items-center gap-3">
              <HelpCircle size={20} className="text-gray-600" />
              <span className="text-sm text-[#101010]">Help</span>
            </div>
            <ChevronRight size={20} className="text-gray-400" />
          </button>
        </div>
      </div>

      {/* Logout Button */}
      <div className="bg-white rounded-2xl shadow-sm overflow-hidden">
        <button
          onClick={handleLogout}
          className="w-full flex items-center gap-3 p-4 hover:bg-red-50 transition-colors"
        >
          <LogOut size={20} className="text-red-500" />
          <span className="text-sm text-red-500 font-medium">Logout</span>
        </button>
      </div>

      {/* Refer & Earn Modal */}
      {showReferEarn && <ReferEarn onClose={handleCloseReferEarn} />}
    </div>
  );
};

export default ProfileContent;
