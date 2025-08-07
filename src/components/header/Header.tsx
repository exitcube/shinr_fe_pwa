import React from "react";

export const Header: React.FC = () => {
  return (
    <div className="flex items-center justify-center mt-1 w-full shrink-0 p-4 z-1 h-[8%]">
      {" "}
      {/* Placeholder for SHINR Logo - Replace with actual image if available */}
      <img
        src="https://placehold.co/30x30/00FF00/FFFFFF?text=SR"
        alt="SHINR Logo"
        className="h-8 w-8 mr-2 rounded-full"
      />
      <span className="text-xl font-bold text-gray-800">SHINR</span>
    </div>
  );
};
