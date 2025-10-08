"use client";
import Image from "next/image";
import React, { useEffect, useRef, useState } from "react";
import { motion } from "framer-motion";

const promoCardsData = [
  {
    id: 1,
    title: "Keep Your Car Spotless!",
    description:
      "From basic cleans to premium detailing—pick a service, schedule, and we'll handle the rest.",
    buttonText: "Book Now",
    buttonTextColor: "text-green-600",
    bgColor: "bg-[linear-gradient(103.01deg,_#136D35_33.57%,_#25D366_138.02%)]",
    imageUrl: "/assets/illustations/car_home.svg",
    altText: "Car illustration with cleaning glove",
  },
  {
    id: 2,
    title: "Porem ipsum dolor sit amet,",
    description: "Borem ipsum dolor sit amet, consectetur adipiscing elit.",
    buttonText: "Book Now",
    buttonTextColor: "text-amber-600",
    bgColor: "bg-[linear-gradient(103.01deg,_#DE9D38_33.57%,_#F6BD65_138.02%)]",
    imageUrl: "/assets/illustations/car_home.svg",
    altText: "Car illustration",
  },
  {
    id: 3,
    title: "Exclusive Winter Deals!",
    description:
      "Prepare your vehicle for winter with our special service packages. Limited time offer!",
    buttonText: "View Deals",
    buttonTextColor: "text-blue-600",
    bgColor: "bg-[linear-gradient(103.01deg,_#1E40AF_33.57%,_#3B82F6_138.02%)]",
    imageUrl: "/assets/illustations/car_home.svg",
    altText: "Car in snow illustration",
  },
];

export const MainBanner: React.FC = () => {
  const carouselRef = useRef<HTMLDivElement>(null);
  const [width, setWidth] = useState(0);

  // Dynamically calculate drag width (so it’s responsive)
  useEffect(() => {
    if (carouselRef.current) {
      const scrollWidth = carouselRef.current.scrollWidth;
      const offsetWidth = carouselRef.current.offsetWidth;
      setWidth(scrollWidth - offsetWidth);
    }
  }, [promoCardsData]);

  return (
    <div className="flex-grow">
      <div className="ml-4 mt-4 mb-4 overflow-hidden">
        <motion.div
          ref={carouselRef}
          className="flex pb-4 space-x-4 cursor-grab active:cursor-grabbing"
          drag="x"
          dragConstraints={{ left: -width, right: 0 }}
          transition={{ type: "spring", stiffness: 200, damping: 30 }}
        >
          {promoCardsData.map((card) => (
            <motion.div
              key={card.id}
              className={`flex-none w-[75%] sm:w-[50%] md:w-[270px] md:h-[230px] ${card.bgColor} rounded-2xl p-4 relative overflow-hidden shadow-md flex flex-col`}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.98 }}
            >
              {/* Card Header */}
              <div className="flex-1 flex justify-between items-center mb-4">
                <div className="flex-1 pr-4">
                  <h2 className="text-white text-[18px] md:text-[20px] font-bold mb-2 leading-tight">
                    {card.title}
                  </h2>
                  <p className="text-white text-[12px] leading-relaxed">
                    {card.description}
                  </p>
                </div>
                <div className="ml-2 flex-shrink-0">
                  <Image
                    src={card.imageUrl}
                    alt={card.altText}
                    className="w-16 sm:w-20 h-auto object-contain"
                    width={80}
                    height={0}
                    style={{ height: "auto" }}
                  />
                </div>
              </div>

              {/* Button */}
              <motion.button
                className={`flex justify-center items-center bg-white ${card.buttonTextColor} px-5 py-2 rounded-full text-sm font-medium hover:bg-gray-100 transition-colors mt-auto`}
                whileTap={{ scale: 0.95 }}
              >
                {card.buttonText}
                <svg
                  className="w-5 h-5 ml-2"
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
              </motion.button>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </div>
  );
};
