"use client";
import RewardBanner from "@/components/walletArea/RewardBanner";
import WalletTransactionList from "@/components/walletArea/TransactionList";
import WallatCategoryTab from "@/components/walletArea/WallatCategoryTab";
import WalletBalance from "@/components/walletArea/WalletBalance";
import { ITransactions } from "@/types/wallet";
import { motion } from "framer-motion";
import React, { useState } from "react";

const WalletPageContent = () => {
  const [activeTab, setActiveTab] = useState("All");
  const filterTransactions = (category: string) => {
    if (category === "All") {
      return transactions;
    }
    return transactions.filter((t) => t.category === category);
  };
  return (
    <>
      <motion.div
        className=" bg-[#F5F5F5] overflow-y-scroll no-scrollbar pb-30 pt-5"
        initial={{ y: 100, opacity: 0, scale: 0.95 }}
        animate={{ y: 0, opacity: 1, scale: 1 }}
        transition={{ duration: 0.5, ease: "easeOut" }}
      >
        <div className="bg-gray-100 font-sans">
          <WalletBalance />
          <RewardBanner />

          <h2 className="text-[16px] font-semibold text-[#101010] mb-4">
            Recent Activity
          </h2>

          <WallatCategoryTab
            activeTab={activeTab}
            setActiveTab={setActiveTab}
            filterTransactions={filterTransactions}
            transactions={transactions}
          />

          <WalletTransactionList
            activeTab={activeTab}
            filterTransactions={filterTransactions}
          />
        </div>
      </motion.div>
    </>
  );
};

export default WalletPageContent;

const transactions: ITransactions[] = [
  {
    id: 1,
    category: "Top-ups",
    title: "Top Up",
    date: "26 June",
    time: "2:00 PM",
    amount: "₹ 2000",
    type: "credit",
    points: 250,
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
    points: 250,
  },
];
