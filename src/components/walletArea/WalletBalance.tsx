import Image from "next/image";
import React, { useState } from "react";
import { WalletModel } from "./WalletModeal";

const WalletBalance = () => {
  const [open, setOpen] = useState(false);

  return (
    <div className="flex items-center justify-center flex-col bg-white p-6 rounded-2xl shadow-sm mb-4">
      <h3 className="text-[#878787] text-[12px] font-normal mb-2">
        Your Shinr Cash Balance
      </h3>
      <div className="flex items-center justify-center">
        <p className="flex items-center justify-center text-[24px] font-semibold text-[#083B35]">
          <span>₹</span>
          <span>2000</span>
        </p>
        <div onClick={() => setOpen(true)}>
          <Image
            className="ml-3 cursor-pointer"
            src="/assets/icons/plus.svg"
            alt="icon"
            width={24}
            height={24}
          />
        </div>
      </div>
      <WalletModel open={open} setOpen={setOpen} />
    </div>
  );
};

export default WalletBalance;
