import { ITransactions } from "@/types/wallet";
import React from "react";

const WallatCategoryTab: React.FC<IProps> = ({
  setActiveTab,
  activeTab,
  filterTransactions,
  transactions,
}) => {
  const tabs = [
    { name: "All", count: transactions.length },
    { name: "Payments", count: filterTransactions("Payments").length },
    { name: "Top-ups", count: filterTransactions("Top-ups").length },
    { name: "Rewards", count: filterTransactions("Rewards").length },
  ];

  return (
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
  );
};

export default WallatCategoryTab;

interface IProps {
  setActiveTab: React.Dispatch<React.SetStateAction<string>>;
  activeTab: string;
  filterTransactions: (category: string) => ITransactions[];
  transactions: ITransactions[];
}
