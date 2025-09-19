import { ITransactions } from "@/types/wallet";
import Image from "next/image";
import React from "react";

const WalletTransactionList: React.FC<IProps> = ({
  filterTransactions,
  activeTab,
}) => {
  return (
    <div className="space-y-4">
      {filterTransactions(activeTab).map((transaction) => (
        <div
          key={transaction.id}
          className="bg-white p-4 rounded-2xl shadow-sm"
        >
          <div className="flex items-center justify-between">
            <div className="flex items-center">
              <p className="text-[14px] font-medium text-[#101010] ">
                {transaction.title}
              </p>
            </div>
            <div
              className={`text-[14px] font-medium ${
                transaction.type === "credit"
                  ? "text-[#128C7E]"
                  : "text-[#DD0000]"
              }`}
            >
              {transaction.type === "credit" ? "+" : "-"} {transaction.amount}
            </div>
          </div>
          <div className="flex items-center text-[12px] font-normal text-[#101010] mt-1">
            <Image
              src="/assets/icons/calender.svg"
              alt="icon"
              width={14}
              height={14}
              className=" mr-3"
            />
            <span className="flex items-center">
              {transaction.date} | {transaction.time}
            </span>
            {transaction.points && (
              <div className="flex items-center ml-auto">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-5 w-5 text-yellow-500 mr-1"
                  viewBox="0 0 20 20"
                  fill="currentColor"
                >
                  <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.071 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.538 1.118l-2.8-2.034a1 1 0 00-1.176 0l-2.8 2.034c-.783.57-1.838-.197-1.538-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.729c-.783-.57-.38-1.81.588-1.81h3.462a1 1 0 00.95-.69l1.07-3.292z" />
                </svg>
                <span className="text-sm text-gray-700">
                  {transaction.points} points +
                </span>
              </div>
            )}
          </div>
        </div>
      ))}
    </div>
  );
};

export default WalletTransactionList;

interface IProps {
  filterTransactions: (category: string) => ITransactions[];
  activeTab: string;
}
