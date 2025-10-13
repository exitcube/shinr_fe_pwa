"use client";
import React, { useState, useEffect } from "react";
import { X, Copy, ArrowRight } from "lucide-react";

interface ReferEarnProps {
  onClose: () => void;
}

const ReferEarn: React.FC<ReferEarnProps> = ({ onClose }) => {
  const [referralCode] = useState("Shl8d1234");
  const [copied, setCopied] = useState(false);
  const [isAnimating, setIsAnimating] = useState(false);

  useEffect(() => {
    setIsAnimating(true);
  }, []);

  const handleCopyCode = () => {
    navigator.clipboard.writeText(referralCode);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  const handleClose = () => {
    setIsAnimating(false);
    setTimeout(() => {
      onClose();
    }, 300);
  };

  const handleShareInvite = () => {
    console.log("Share invite clicked");
    // Handle share invite logic
  };

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
        className={`fixed inset-x-0 bottom-0 z-[60] bg-white rounded-t-3xl shadow-2xl font-poppins max-w-md mx-auto transition-transform duration-300 ease-out ${
          isAnimating ? "translate-y-0" : "translate-y-full"
        }`}
      >
        {/* Header */}
        <div className="flex items-center justify-between px-6 py-4 border-b border-gray-200">
          <h2 className="text-lg font-semibold text-[#101010]">Refer & Earn</h2>
          <button
            onClick={handleClose}
            className="p-1 hover:bg-gray-100 rounded-full transition-colors"
          >
            <X size={24} className="text-gray-600" />
          </button>
        </div>

        {/* Content */}
        <div className="px-6 py-6">
          {/* Referral Code Section */}
          <div className="mb-6">
            <label className="block text-sm text-gray-500 mb-2">
              Referral Code
            </label>
            <div className="flex items-center gap-2">
              <div className="flex-1 bg-gray-50 border border-gray-200 rounded-lg px-4 py-3">
                <span className="text-base font-semibold text-[#101010]">
                  {referralCode}
                </span>
              </div>
              <button
                onClick={handleCopyCode}
                className="p-3 bg-gray-100 hover:bg-gray-200 rounded-lg transition-colors"
              >
                <Copy size={20} className="text-gray-600" />
              </button>
            </div>
            {copied && (
              <p className="text-xs text-green-600 mt-1">
                Copied to clipboard!
              </p>
            )}
          </div>

          {/* Description */}
          <p className="text-sm text-gray-600 mb-6">
            Your friend gets ₹50 off their first wash, and you earn ₹50 WB Cash
            once its complete.
          </p>

          {/* Share Invite Button */}
          <button
            onClick={handleShareInvite}
            className="w-full bg-[#128C7E] text-white py-3 rounded-full font-medium text-sm hover:bg-[#0f7269] transition-colors flex items-center justify-between px-6"
          >
            <span>Share Invite</span>
            <ArrowRight size={18} />
          </button>
        </div>
      </div>
    </>
  );
};

export default ReferEarn;
