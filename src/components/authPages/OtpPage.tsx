"use client";
import React from "react";
import { AnimatePresence, motion } from "framer-motion";
import { useRouter } from "next/navigation";
import { ArrowRight } from "lucide-react";

export const OtpPage: React.FC = () => {
  const router = useRouter();
  return (
    <div className="flex items-center h-full">
      <div className="w-full h-full">
        <AnimatePresence mode="wait">
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: -50 }}
            transition={{ duration: 0.8 }}
            className="w-[375px] rounded-xl flex flex-col justify-between h-full pb-6"
          >
            {/* Top content section */}
            <div className="font-poppins">
              <div className="flex flex-col gap-3">
                <h1 className="text-xl font-medium text-[#101010] mb-2">
                  OTP Code Verification
                </h1>
                <p className="text-[14px] text-[#878787] leading-relaxed mb-6 flex flex-col">
                  We have sent a OTP code to your mobile number
                  <span className="flex gap-1">
                    <span className="text-[14px] font-semibold text-[#101010]">
                      9887765544
                    </span>
                    <button className="text-primary font-semibold underline">
                      Edit
                    </button>
                  </span>
                </p>
                <p className="text-[14px] text-[#878787] mb-8">
                  Enter the OTP Code below to verify.
                </p>
              </div>

              {/* OTP Inputs */}
              <div className="flex justify-between gap-4 mb-12">
                {[...Array(4)].map((_, i) => (
                  <input
                    key={i}
                    type="text"
                    maxLength={1}
                    className="w-[75.5px] h-[56px] text-center opacity-100 rounded-[48px] border p-[20px] bg-white focus:border-[#128C7E] text-gray-800 focus:outline-none"
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

            {/* Spacer to push button down
            <div className="flex-grow"></div> */}

            {/* Bottom Button */}
            <button
              className="w-full bg-[#128C7E] text-white p-4 rounded-full shadow-lg transition-all duration-300 transform hover:scale-102 flex items-start"
              onClick={() => router.push("/home")}
            >
              <div className="px-4 flex items-center justify-between w-full">
                <span>Verify</span>
                <ArrowRight size={24} />
              </div>
            </button>
          </motion.div>
        </AnimatePresence>
      </div>
    </div>
  );
};
