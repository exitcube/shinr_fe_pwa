"use client";
import Image from "next/image";
import React, { useState } from "react";

const transactions = [
  {
    id: 1,
    category: "Top-ups",
    title: "Top Up",
    date: "26 June",
    time: "2:00 PM",
    amount: "₹ 2000",
    type: "credit",
    points: null,
  },
  {
    id: 2,
    category: "Payments",
    title: "Car Wash",
    date: "26 June",
    time: "2:00 PM",
    amount: "₹ 700",
    type: "debit",
    points: 250,
  },
  {
    id: 3,
    category: "Payments",
    title: "Service",
    date: "26 June",
    time: "2:00 PM",
    amount: "₹ 700",
    type: "debit",
    points: 200,
  },
  {
    id: 4,
    category: "Rewards",
    title: "Monthly Bonus",
    date: "25 June",
    time: "1:00 PM",
    amount: "₹ 50",
    type: "credit",
    points: null,
  },
];

export default function ShinrApp() {
  const [activeTab, setActiveTab] = useState("All");

  const filterTransactions = (category: string) => {
    if (category === "All") {
      return transactions;
    }
    return transactions.filter((t) => t.category === category);
  };

  const tabs = [
    { name: "All", count: transactions.length },
    { name: "Payments", count: filterTransactions("Payments").length },
    { name: "Top-ups", count: filterTransactions("Top-ups").length },
    { name: "Rewards", count: filterTransactions("Rewards").length },
  ];
  return (
    <div className="max-w-sm mx-auto bg-[#F5F5F5] min-h-screen overflow-y-scroll no-scrollbar pb-30 pt-5">
      <div className="bg-gray-100 min-h-screen p-4 font-sans">
        {/* Shinr Cash Balance Card */}
        <div className="flex items-center justify-center flex-col bg-white p-6 rounded-2xl shadow-sm mb-4">
          <h3 className="text-[#878787] text-[12px] font-normal mb-2">
            Your Shinr Cash Balance
          </h3>
          <div className="flex items-center justify-center">
            <p className="flex items-center justify-center text-[24px] font-semibold text-[#083B35]">
              <span>₹</span>
              <span>2000</span>
            </p>
            <div>
              <Image
                className="ml-3"
                src="/assets/icons/plus.svg"
                alt="icon"
                width={24}
                height={24}
              />
            </div>
          </div>
        </div>

        {/* Rewards Banner */}
        <div className="bg-gradient-to-r from-[#136D35] to-[#25D366] p-2 rounded-full shadow-sm mb-6 flex items-center">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="h-6 w-6 text-white mr-3 flex-shrink-0"
            viewBox="0 0 20 20"
            fill="currentColor"
          >
            <path
              fillRule="evenodd"
              d="M5 3a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2V5a2 2 0 00-2-2H5zm9 6a3 3 0 11-6 0 3 3 0 016 0zm-1.5 0a1.5 1.5 0 10-3 0 1.5 1.5 0 003 0z"
              clipRule="evenodd"
            />
          </svg>
          <p className="text-white text-[12px] font-medium">
            450 points - Worth <span className="font-bold">₹45</span> Your Shinr
            Rewards
          </p>
        </div>

        {/* Recent Activity Section */}
        <h2 className="text-[16px] font-semibold text-[#101010] mb-4">
          Recent Activity
        </h2>

        {/* Category Tabs */}
        <div className="flex space-x-1 mb-6 pb-2">
          {tabs.map((tab) => (
            <button
              key={tab.name}
              onClick={() => setActiveTab(tab.name)}
              className={`flex-none px-1 py-2 rounded-full font-medium transition-colors text-[12px]
              ${
                activeTab === tab.name
                  ? "text-[#101010]"
                  : "text-[#878787] hover:text-gray-300"
              }`}
            >
              {tab.name}
              <span
                className={`ml-2 px-2 py-0.5 rounded-full text-xs font-bold ${
                  activeTab === tab.name
                    ? "bg-[#128C7E] text-white"
                    : "bg-gray-300 text-[#7a7a7a]"
                }`}
              >
                {tab.count}
              </span>
            </button>
          ))}
        </div>

        {/* Transaction List */}
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
                  {transaction.type === "credit" ? "+" : "-"}{" "}
                  {transaction.amount}
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
      </div>
    </div>
  );
}
