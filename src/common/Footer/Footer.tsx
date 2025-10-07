import {
  CalendarAdd01Icon,
  Home04Icon,
  TireIcon,
  User03Icon,
  Wallet01Icon,
} from "@hugeicons/core-free-icons";
import { HugeiconsIcon } from "@hugeicons/react";
import { label } from "framer-motion/client";
import { usePathname, useRouter } from "next/navigation";
import React from "react";

export const Footer: React.FC = () => {
  const pathname = usePathname();
  const router = useRouter();

  return (
    <div className="fixed bg-transparent bottom-0 w-full">
      {/* Footer with Wave Background */}
      <div className="relative h:20 md:h-30 w-full">
        {/* Wave as Background */}
        <svg
          className="absolute top-0 w-full"
          viewBox="0 0 380 83"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
          preserveAspectRatio="none"
        >
          <path
            d="M190 0 C217.238 0 218.853 19.6 238.027 23 H378 C384.627 23 390 28.3726 390 35 V83 H0 V35 C0 28.3726 5.37258 23 12 23 H141.973 C161.147 19.6 162.762 0 190 0 Z"
            fill="white"
          />
        </svg>

        {/* Buttons */}
        <div className="absolute top-3 left-1/2 -translate-x-1/2">
          <button
            className="bg-[#128C7E] p-3 md:p-6 rounded-full shadow-lg flex items-center justify-center"
            onClick={() => router.push("/service-booking")}
          >
            <HugeiconsIcon icon={CalendarAdd01Icon} />
          </button>
        </div>
        <div className="w-full flex justify-between items-start z-10 px-4 pt-8 md:pt-16">
          {footerButtons.map((btn, index) => (
            <button
              key={index}
              className={`${btn.class} z-10 ${
                pathname.includes(btn.route) ? "" : "text-[#C2C2C2]"
              }`}
              onClick={() => router.push(btn.route)}
            >
              <HugeiconsIcon
                icon={btn.icon}
                fill={pathname.includes(btn.route) ? "black" : "none"}
                size={btn.size}
                className="pb-2"
              />
            </button>
          ))}
        </div>
      </div>
    </div>
  );
};

const footerButtons = [
  {
    icon: Home04Icon,
    route: "/home",
    label: "Home",
    size: 35,
  },
  {
    icon: Wallet01Icon,
    route: "/wallet",
    label: "Wallet",
    size: 35,
    class: "mr-12",
  },
  {
    icon: TireIcon,
    route: "/vehicle",
    size: 35,
    label: "Vehicle",
  },
  {
    icon: User03Icon,
    route: "/profile",
    label: "Profile",
    size: 35,
  },
];
