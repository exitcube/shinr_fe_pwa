"use client";
import Image from "next/image";
import React from "react";

export const EarningsCard: React.FC = () => {
  return (
    <>
      <div className="mx-4 mb-4 bg-[#FFFFFF] rounded-lg p-3 flex items-center justify-between">
        <div className="flex flex-col ">
          <div className=" rounded flex items-center justify-center mr-3">
            <span className="text-[#128C7E] text-sm">
              Your Shinr Cash Balance
            </span>
          </div>
          <span className="text-[#083B35] font-semibold font-weight-600">
            ₹
            <span className="text-[#083B35] font-semibold font-weight-600">
              2000
            </span>
          </span>
        </div>
        <div className="rounded flex items-center justify-center mr-3">
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
