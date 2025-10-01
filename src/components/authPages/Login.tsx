"use client";
import Image from "next/image";
import React, { useState } from "react";
import { OtpPage } from "./OtpPage";
import { AnimatePresence, motion } from "framer-motion";
import { ArrowRight } from "lucide-react";

export const Login: React.FC = () => {
  const [showOtp, setShowOtp] = useState(false);
  return (
    <>
      {/* Main container */}
      {!showOtp ? (
        <div
          className="flex items-center max-h-screen h-full"
          style={{ background: "#F5F5F5" }}
        >
          <AnimatePresence mode="wait">
            <motion.div
              initial={{ opacity: 0, x: 50 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: -50 }}
              transition={{ duration: 0.8 }}
              className="w-full h-full"
            >
              {/* App Content Area */}
              <div className="relative flex flex-col items-center justify-between h-full font-poppins">
                {/* Main Text Content */}
                <div className="text-left w-full mb-8">
                  <h1 className="text-xl font-medium text-[#101010] mb-2">
                    Enter Your Mobile Number
                  </h1>
                  <p className="text-sm text-[#878787] leading-relaxed">
                    We&apos;ll send you a one-time password (OTP) to verify
                    it&apos;s you.
                  </p>
                </div>

                {/* Mobile Number Input Field */}
                <div className="w-full mb-auto">
                  <div className="flex items-center justify-center bg-white rounded-full p-4 border border-gray-200">
                    {/* Checkbox Icon (simplified SVG for visual representation) */}
                    <div className="w-6 h-6 mr-3">
                      <Image
                        src="/assets/icons/phoneIcon.svg"
                        alt="icon"
                        width={24}
                        height={24}
                      />
                    </div>
                    <input
                      type="tel"
                      placeholder="988 776 5544"
                      className="flex-grow bg-transparent outline-none text-lg text-gray-800 placeholder-gray-500 "
                    />
                    {/* Green Icon */}
                    <div className="w-6 h-6ml-3">
                      <Image
                        src="/assets/icons/greenTick.svg"
                        alt="icon"
                        width={24}
                        height={24}
                      />
                    </div>
                  </div>
                </div>

                {/* Get OTP Button */}
                <button
                  className="w-full mx-6 mb-6 py-4 bg-[#128C7E] text-white p-4 rounded-full shadow-lg transition-all duration-300 transform hover:scale-102 flex items-center justify-between"
                  onClick={() => setShowOtp(true)}
                >
                  <span className="mr-2">Get OTP</span>
                  <ArrowRight size={24} />
                </button>
              </div>
            </motion.div>
          </AnimatePresence>
        </div>
      ) : (
        <OtpPage />
      )}
    </>
  );
};
