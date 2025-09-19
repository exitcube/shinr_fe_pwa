import React from "react";

const RewardBanner: React.FC = () => {
  return (
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
  );
};

export default RewardBanner;
