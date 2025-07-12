"use client";
import Image from "next/image";
import React, { useState } from "react";
import { OtpPage } from "./OtpPage";
import { AnimatePresence, motion } from "framer-motion";

export const Login: React.FC = () => {
  const [showOtp, setShowOtp] = useState(false);
  return (
    <>
      {/* Main container */}
      {!showOtp ? (
        <div
          className="flex items-center justify-center max-h-screen"
          style={{ background: "#F5F5F5" }}
        >
          <AnimatePresence mode="wait">
            <motion.div
              initial={{ opacity: 0, x: 50 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: -50 }}
              transition={{ duration: 0.8 }}
              className="w-full"
            >
              {/* App Content Area */}
              <div className="relative flex flex-col items-center h-[90vh] p-4 ">
                {/* Main Text Content */}
                <div className="text-left w-full mb-8">
                  <h1 className="text-[20px] font-bold text-[#101010] mb-2">
                    Enter Your Mobile Number
                  </h1>
                  <p className="text-[14px] text-[#878787] leading-relaxed">
                    We'll send you a one-time password (OTP) to verify it's you.
                  </p>
                </div>

                {/* Mobile Number Input Field */}
                <div className="w-full px-4 mb-auto">
                  <div className="flex items-center justify-center bg-gray-100 rounded-full p-4 border border-gray-200">
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
                      className="flex-grow bg-transparent outline-none text-lg text-gray-800 placeholder-gray-500"
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
                  <svg
                    className="w-5 h-5"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="2"
                      d="M17 8l4 4m0 0l-4 4m4-4H3"
                    ></path>
                  </svg>
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
