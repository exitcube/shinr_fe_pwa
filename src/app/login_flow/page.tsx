"use client";
import React, { useState } from "react";
import SplashPage1 from "@/app/components/splashPages/SplashPage1";
import SplashPage2 from "@/app/components/splashPages/SplashPage2";
import SplashPage3 from "@/app/components/splashPages/SplashPage3";
import { AnimatePresence, motion } from "framer-motion";

const splashScreens = [SplashPage1, SplashPage2, SplashPage3];

function Login() {
  const [pageCount, setPageCount] = useState(0);

  const handleCount = () => {
    setPageCount((prev) => (prev + 1) % splashScreens.length);
  };

  const CurrentSplash = splashScreens[pageCount];

  return (
    <div className="flex items-center justify-center">
      <div className="w-[375px] h-[90vh] bg-white shadow-lg relative overflow-hidden">
        <div
          className="relative flex flex-col items-center h-full pt-10 pb-5 px-6"
          style={{ background: "linear-gradient(to bottom, #e0ffe0, #ffffff)" }}
        >
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
              className="absolute bottom-10 bg-[#128C7E] text-white p-4 rounded-full shadow-lg transition-all duration-300 transform hover:scale-110 animate-bounce hover:animate-none"
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
              className="absolute bottom-10 bg-[#128C7E] text-white p-4 rounded-full shadow-lg transition-all duration-300 transform hover:scale-110 w-[85%] flex items-center justify-between"
              // onClick={handleCount}
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
      </div>
    </div>
  );
}

export default Login;
