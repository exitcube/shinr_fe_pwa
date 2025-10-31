import React, { useState } from "react";
import { PaymentTypes } from "./PaymentType";
import { DragCloseDrawer } from "@/common/DragCloseDrawer";

interface WalletModelProps {
  open: boolean;
  setOpen: React.Dispatch<React.SetStateAction<boolean>>;
}

export const WalletModel: React.FC<WalletModelProps> = ({ open, setOpen }) => {
  const [selectedAmount, setSelectedAmount] = useState<number | null>(2000);
  const [customAmount, setCustomAmount] = useState<number>(2000);
  const [openPayment, setOpenPayment] = useState<boolean>(false);

  const amounts: number[] = [2000, 5000, 7000];

  const handleAmountSelect = (amount: number) => {
    setSelectedAmount((prev) => {
      if (prev === null) return amount;
      return prev + amount;
    });
    setCustomAmount(amount);
  };

  return (
    <div className="relative">
      <DragCloseDrawer open={open} setOpen={setOpen}>
        <div className="flex items-start justify-center">
          <div className="w-full max-w-md">
            {/* Amount Input */}
            <div className="flex justify-center items-end text-5xl font-light text-gray-900 mb-2">
              <span className="text-[24px] font-normal mr-1">₹</span>
              <span className="font-normal text-[24px] ">
                {Math.floor(customAmount / 1)}
              </span>
              <span className="text-[#878787] font-normal text-[24px]">
                .00
              </span>
            </div>
            <div className="text-center text-[#878787] text-[12px] mb-6">
              Enter amount to be added to Shinr
            </div>

            {/* Predefined Amount Buttons */}
            <div className="flex justify-between space-x-2 mb-8">
              {amounts.map((amount) => (
                <button
                  key={amount}
                  onClick={() => handleAmountSelect(amount)}
                  className={`flex-1 py-3 rounded-full font-semibold transition-colors duration-200
                ${
                  selectedAmount === amount
                    ? "bg-green-600 text-white shadow-md"
                    : "bg-gray-100 text-gray-600 hover:bg-gray-200"
                }`}
                >
                  ₹ {amount}
                </button>
              ))}
            </div>

            {/* Add Cash Button */}
            <button
              className="flex items-center justify-between w-full bg-teal-600 text-white p-4 rounded-full text-lg font-semibold shadow-md transition-colors duration-200 hover:bg-teal-700"
              onClick={() => setOpenPayment(true)}
            >
              Add Cash
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
        </div>
      </DragCloseDrawer>
      {openPayment && <PaymentTypes setOpenPayment={setOpenPayment} />}
    </div>
  );
};
