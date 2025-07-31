"use client";
import Image from "next/image";
import React from "react";

const promoCardsData = [
  {
    id: 1,
    title: "Keep Your Car Spotless!",
    description:
      "From basic cleans to premium detailing—pick a service, schedule, and we'll handle the rest.",
    buttonText: "Book Now",
    buttonTextColor: "text-green-600",
    bgColor: "bg-green-600",
    imageUrl: "/assets/illustations/car_home.svg",
    altText: "Car illustration with cleaning glove",
  },
  {
    id: 2,
    title: "Porem ipsum dolor sit amet,",
    description: "Borem ipsum dolor sit amet, consectetur adipiscing elit.",
    buttonText: "Book Now",
    buttonTextColor: "text-amber-600",
    bgColor: "bg-amber-500",
    imageUrl: "/assets/illustations/car_home.svg",
    altText: "Car illustration",
  },
  // Add more cards here if needed
  {
    id: 3,
    title: "Exclusive Winter Deals!",
    description:
      "Prepare your vehicle for winter with our special service packages. Limited time offer!",
    buttonText: "View Deals",
    buttonTextColor: "text-blue-600",
    bgColor: "bg-blue-600",
    imageUrl: "/assets/illustations/car_home.svg",
    altText: "Car in snow illustration",
  },
];

export const MainBanner: React.FC = () => {
  return (
    <>
      <div className="flex-grow">
        {/* Dynamic Promotional Cards Section */}
        <div className="mx-4 mt-4 mb-4">
          <div className="flex overflow-x-auto pb-4 scrollbar-hide space-x-4">
            {promoCardsData.map((card) => (
              <div
                key={card.id}
                className={`flex-none w-60 md:w-[270px] md:h-[230px] ${card.bgColor} rounded-2xl p-4 relative overflow-hidden shadow-md flex flex-col`}
              >
                <div className="flex-1 flex justify-between items-center mb-4">
                  {" "}
                  <div className="flex-1 pr-4">
                    <h2 className="text-white text-[20px] font-bold mb-2 leading-tight">
                      {card.title}
                    </h2>
                    <p className="text-white text-[12px] leading-relaxed">
                      {card.description}
                    </p>
                  </div>
                  <div className="ml-2 flex-shrink-0">
                    <img
                      src={card.imageUrl}
                      alt={card.altText}
                      className="w-20 h-auto object-contain"
                    />
                  </div>
                </div>

                {/* Button fixed at the bottom of the card */}
                <button
                  className={`flex justify-center items-center bg-white ${card.buttonTextColor} px-5 py-2 rounded-full text-sm font-medium hover:bg-gray-100 transition-colors mt-auto`}
                >
                  {" "}
                  {/* mt-auto pushes it to the bottom */}
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
                </button>
              </div>
            ))}
          </div>
        </div>
      </div>
    </>
  );
};
