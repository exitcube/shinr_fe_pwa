"use client";
import Image from "next/image";
import React from "react";

export const EarningsCard: React.FC = () => {
  return (
    <>
      <div className="mx-4 mb-4 bg-[#FFFFFF] rounded-lg p-4 flex items-center justify-between font-poppins">
        <div className="flex flex-col ">
          <span className="text-[#128C7E] text-xs">
            Your Shinr Cash Balance
          </span>
          <span className="text-[#083B35] font-semibold text-xl">
            ₹<span className="text-[#083B35] font-semibold text-xl">2000</span>
          </span>
        </div>
        <div className="rounded flex items-center justify-center">
          <Image
            src="/assets/illustations/wallet.svg"
            alt="icon"
            width={34}
            height={34}
          />
        </div>
      </div>
    </>
  );
};
