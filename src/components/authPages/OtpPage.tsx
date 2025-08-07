"use client";
import Image from "next/image";
import React from "react";
import { AnimatePresence, motion } from "framer-motion";
import { useRouter } from "next/navigation";

export const OtpPage: React.FC = () => {
  const router = useRouter();
  return (
    <div
      className="flex items-center justify-center z-10"
      style={{ background: "#F5F5F5" }}
    >
      <div className="w-full">
        <AnimatePresence mode="wait">
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: -50 }}
            transition={{ duration: 0.8 }}
            className="w-[375px] min-h-[90vh] shadow-xl rounded-xl flex flex-col p-6"
          >
            {/* Top content section */}
            <div>
              <h1 className="text-[20px] font-bold text-[#101010] mb-2">
                OTP Code Verification
              </h1>
              <p className="text-[14px] text-[#878787] leading-relaxed mb-6">
                We have sent a OTP code to your mobile number <br />
                <span className="text-[14px] font-semibold text-[#101010]">
                  9887765544
                </span>
                <a href="#" className="text-green-600 hover:underline ml-1">
                  Edit
                </a>
              </p>
              <p className="text-[14px] text-[#878787] mb-8">
                Enter the OTP Code below to verify.
              </p>

              {/* OTP Inputs */}
              <div className="flex justify-between gap-4 mb-12">
                {[...Array(4)].map((_, i) => (
                  <input
                    key={i}
                    type="text"
                    maxLength={1}
                    className="w-16 h-16 text-center text-2xl font-bold rounded-xl border-2 border-green-500 text-gray-800 focus:outline-none focus:ring-2 focus:ring-green-500 focus:border-transparent transition-all duration-200"
                  />
                ))}
              </div>

              {/* Resend Link */}
              <div className="text-center text-[14px] text-[#101010] mb-4">
                Didn’t receive code?{" "}
                <a
                  href="#"
                  className="text-green-600 hover:underline font-medium"
                >
                  Resend
                </a>
              </div>
            </div>

            {/* Spacer to push button down */}
            <div className="flex-grow"></div>

            {/* Bottom Button */}
            <button
              className="w-full py-4 bg-[#128C7E] text-white p-4 rounded-full shadow-lg transition-all duration-300 transform hover:scale-102 flex items-center justify-center"
              onClick={() => router.push("/home")}
            >
              <span className="mr-2">Verify</span>
            </button>
          </motion.div>
        </AnimatePresence>
      </div>
    </div>
  );
};
