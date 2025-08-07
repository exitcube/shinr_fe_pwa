"use client";
import Image from "next/image";
import React from "react";


export const BookingSection: React.FC = () => {
  return (
    <>
      <div className="px-4 mb-4">
        <h3 className="text-lg font-semibold text-[#101010]">
          Your Booking
        </h3>
        <div className="bg-[#FFFFFF] rounded-lg p-3">
          <div className="flex justify-between items-start mb-2">
            <span className="font-medium text-[#101010] ">
              Premium Car Wash
            </span>
            <span className="text-gray-400">•••</span>
          </div>
          <div className="text-sm text-[#101010] mb-3 flex items-center">
            <Image
              src="/assets/icons/location.svg"
              alt="icon"
              width={12}
              height={12}
              className="mr-3"
            />
            <span className="text-sm font-medium text-[#101010]">
              HSR Layout
            </span>
          </div>
          <div className="text-sm text-[#101010] mb-3 flex items-center">
            <Image
              src="/assets/icons/calender.svg"
              alt="icon"
              width={14}
              height={14}
              className=" mr-3"
            />
            18-10-2024 | 12:47 pm
          </div>
          <div className="flex items-center justify-between">
            <div className="flex items-center">
              <Image
                src="/assets/images/user_picture.png"
                alt="icon"
                width={34}
                height={34}
                className="w-8 h-8 rounded-full mr-3 object-cover"
              />
              <span className="text-[12px] font-medium text-[#101010] ">
                Amit
              </span>
            </div>
            <Image
              src="/assets/icons/phone2.svg"
              alt="icon"
              width={24}
              height={24}
              className="w-8 h-8 rounded-full mr-3"
            />
          </div>
        </div>
      </div>
    </>
  );
};
