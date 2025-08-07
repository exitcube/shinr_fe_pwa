"use client";
import Image from "next/image";
import React, { useState } from "react";
import { motion } from "framer-motion";

type PaymentTypesProps = {
  setOpenPayment: React.Dispatch<React.SetStateAction<boolean>>;
};

export const PaymentTypes: React.FC<PaymentTypesProps> = ({
  setOpenPayment,
}) => {
  const [selectedPayment, setSelectedPayment] = useState("Google pay");

  const handlePaymentSelect = (payment: any) => {
    setSelectedPayment(payment);
  };

  return (
    <>
      <motion.div
        className="max-w-sm mx-auto bg-[#F5F5F5] min-h-screen pb-5 pt-5"
        initial={{ y: 100, opacity: 0, scale: 0.95 }}
        animate={{ y: 0, opacity: 1, scale: 1 }}
        transition={{ duration: 0.5, ease: "easeOut" }}
      >
        <div className="flex flex-col fixed bottom-0 left-0 right-0 p-4 shadow-lg border-t border-gray-200 z-50 min-h-screen max-w-sm mx-auto bg-[#F5F5F5]">
          <div className="flex items-center pb-6">
            <Image
              src="/assets/icons/backbutton.svg"
              alt="icon"
              width={34}
              height={34}
              onClick={() => setOpenPayment(false)}
            />
            <h2 className="flex-grow text-center text-[16px] font-normal text-[#101010]">
              Select Payment Type
            </h2>
          </div>

          {/* Main Content Area */}
          <div className="flex-grow">
            <div className="bg-[#FFFFFF] p-4 rounded-xl shadow-sm mb-6">
              <p className="text-[12px] text-[#878787] mb-1">
                Amount to be added
              </p>
              <p className="text-3xl font-bold text-[#083B35]">
                <span className="text-[24px] font-semibold">₹</span>
                2000
              </p>
            </div>

            {/* UPI Section */}
            <h3 className="text-[#101010] text-[16px] font-semibold mb-2">
              UPI
            </h3>
            <div className="bg-white rounded-xl shadow-sm overflow-hidden mb-6">
              {/* Google Pay */}
              <button
                onClick={() => handlePaymentSelect("Google pay")}
                className="flex items-center justify-between w-full p-4 border-b border-gray-200 hover:bg-gray-50 transition-colors"
              >
                <div className="flex items-center">
                  <div
                    className={`w-5 h-5 border-2 rounded-full flex-shrink-0 flex items-center justify-center ${
                      selectedPayment === "Google pay"
                        ? "border-[#128C7E] bg-[#128C7E]"
                        : "border-gray-300"
                    }`}
                  >
                    {selectedPayment === "Google pay" && (
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        className="h-4 w-4 text-white"
                        viewBox="0 0 20 20"
                        fill="currentColor"
                      >
                        <path
                          fillRule="evenodd"
                          d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
                          clipRule="evenodd"
                        />
                      </svg>
                    )}
                  </div>
                  <span className="ml-4 text-[#101010] text-[14px] font-normal">
                    Google pay
                  </span>
                </div>
                {/* Google Pay logo */}
                <div className="flex-shrink-0">
                  <Image
                    className="ml-3"
                    src="/assets/images/Gpay.png"
                    alt="icon"
                    width={34}
                    height={34}
                  />
                </div>
              </button>

              {/* PhonePe */}
              <button
                onClick={() => handlePaymentSelect("PhonePe")}
                className="flex items-center justify-between w-full p-4 border-b border-gray-200 hover:bg-gray-50 transition-colors"
              >
                <div className="flex items-center">
                  <div
                    className={`w-5 h-5 border-2 rounded-full flex-shrink-0 flex items-center justify-center ${
                      selectedPayment === "PhonePe"
                        ? "border-[#128C7E] bg-[#128C7E]"
                        : "border-gray-300"
                    }`}
                  >
                    {selectedPayment === "PhonePe" && (
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        className="h-4 w-4 text-white"
                        viewBox="0 0 20 20"
                        fill="currentColor"
                      >
                        <path
                          fillRule="evenodd"
                          d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
                          clipRule="evenodd"
                        />
                      </svg>
                    )}
                  </div>
                  <span className="ml-4 text-[#101010] text-[14px] font-normal">
                    PhonePe
                  </span>
                </div>
                {/* PhonePe logo */}
                <div className="flex-shrink-0">
                  <Image
                    className="ml-3"
                    src="/assets/images/Gpay.png"
                    alt="icon"
                    width={34}
                    height={34}
                  />
                </div>
              </button>

              {/* Paytm */}
              <button
                onClick={() => handlePaymentSelect("Paytm")}
                className="flex items-center justify-between w-full p-4 rounded-b-xl hover:bg-gray-50 transition-colors"
              >
                <div className="flex items-center">
                  <div
                    className={`w-5 h-5 border-2 rounded-full flex-shrink-0 flex items-center justify-center ${
                      selectedPayment === "Paytm"
                        ? "border-[#128C7E] bg-[#128C7E]"
                        : "border-gray-300"
                    }`}
                  >
                    {selectedPayment === "Paytm" && (
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        className="h-4 w-4 text-white"
                        viewBox="0 0 20 20"
                        fill="currentColor"
                      >
                        <path
                          fillRule="evenodd"
                          d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
                          clipRule="evenodd"
                        />
                      </svg>
                    )}
                  </div>
                  <span className="ml-4 text-[#101010] text-[14px] font-normal">
                    Paytm
                  </span>
                </div>
                {/* Paytm logo */}
                <div className="flex-shrink-0">
                  <Image
                    className="ml-3"
                    src="/assets/images/Gpay.png"
                    alt="icon"
                    width={34}
                    height={34}
                  />
                </div>
              </button>
            </div>

            {/* Card Section */}
            <h3 className="text-[#101010] text-[16px] font-semibold mb-2">
              Card
            </h3>
            <div className="bg-white p-4 rounded-xl shadow-sm flex items-center justify-between">
              <div>
                <p className="text-[#101010] text-[14px] font-medium mb-1">
                  Add New Card
                </p>
                <p className="text-xs font-normal text-[#878787]">
                  All major cards supported
                </p>
              </div>
              <button className="flex-shrink-0 w-8 h-8  rounded-full flex items-center justify-center ">
                <Image
                  className="ml-3"
                  src="/assets/icons/plus.svg"
                  alt="icon"
                  width={34}
                  height={34}
                />
              </button>
            </div>
          </div>
          <button className="w-full bg-[#128C7E] text-[#FFFFFF] py-3 px-3 rounded-full text-[16px] font-medium shadow-md transition-colors duration-200 hover:bg-teal-700 flex items-center justify-between">
            Continue to Pay
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-6 w-6 ml-2"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
              strokeWidth="2"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M17 8l4 4m0 0l-4 4m4-4H3"
              />
            </svg>
          </button>
        </div>
      </motion.div>
    </>
  );
};
