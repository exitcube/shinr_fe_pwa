"use client";
import React, { useState } from "react";
import { Splash1 } from "./splashPages/Splash1";
import { Splash2 } from "./splashPages/Splash2";
import { Splash3 } from "./splashPages/Splash3";
import { AnimatePresence, motion } from "framer-motion";
import { useRouter } from "next/navigation";

const splashScreens = [Splash1, Splash2, Splash3];

export const HomePageContent: React.FC = () => {
  const router = useRouter();
  const [pageCount, setPageCount] = useState(0);

  const handleCount = () => {
    setPageCount((prev) => (prev + 1) % splashScreens.length);
  };

  const CurrentSplash = splashScreens[pageCount];

  return (
    <React.Fragment>
      <div className="w-full h-[70%] relative overflow-hidden">
        <AnimatePresence mode="wait">
          <motion.div
            key={pageCount}
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: -50 }}
            transition={{ duration: 0.2 }}
            className="w-full"
          >
            <CurrentSplash />
          </motion.div>
        </AnimatePresence>
      </div>

      <div className="flex flex-col items-center w-full h-[20%]">
      {/* Dots */}
      <div className="flex items-center justify-center w-full mt-2">
        <div className="bg-[#BBF1D0] flex items-center justify-between w-[64px] rounded-lg p-1">
          {[0, 1, 2].map((index) => (
            <div
              key={index}
              className={`w-[21px] h-1.5 rounded-lg ${
                pageCount === index ? "bg-[#101010]" : "bg-transparent"
              }`}
            ></div>
          ))}
        </div>
      </div>

      {/* Arrow Button */}
      {pageCount !== 2 ? (
        <button
          className="absolute bottom-8 bg-[#128C7E] text-white p-4 rounded-full shadow-lg transition-all duration-300 transform hover:scale-110 animate-bounce hover:animate-none"
          onClick={handleCount}
        >
          <svg
            className="w-6 h-6"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              d="M14 5l7 7m0 0l-7 7m7-7H3"
            ></path>
          </svg>
        </button>
      ) : (
        <button
          className="absolute bottom-8 bg-[#128C7E] text-white p-4 rounded-full shadow-lg transition-all duration-300 transform hover:scale-110 w-[85%] flex items-center justify-between"
          onClick={() => router.push("/login")}
        >
          <div>
            <span>Get Started</span>
          </div>
          <svg
            className="w-6 h-6"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              d="M14 5l7 7m0 0l-7 7m7-7H3"
            ></path>
          </svg>
        </button>
      )}
      </div>
    </React.Fragment>
  );
};
