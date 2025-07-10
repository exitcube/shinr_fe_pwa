import React from "react";

function Header() {
  return (
    <div className="flex items-center justify-center mt-1 ">
      {" "}
      <div
        className="flex items-center justify-center w-[375px] shadow-lg p-4"
        style={{ background: "linear-gradient(to top, #e0ffe0, #ffffff)" }}
      >
        {/* Placeholder for SHINR Logo - Replace with actual image if available */}
        <img
          src="https://placehold.co/30x30/00FF00/FFFFFF?text=SR"
          alt="SHINR Logo"
          className="h-8 w-8 mr-2 rounded-full"
        />
        <span className="text-xl font-bold text-gray-800">SHINR</span>
      </div>
    </div>
  );
}

export default Header;
