"use client";
import Image from "next/image";
import React from "react";

const articles = [
  {
    id: 1,
    tag: "New Article",
    title: "Lorem ipsum dolor sit amet,",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Lorem ipsum dolor sit amet, consectetur adipiscing Read More...",
    imageUrl: "/assets/images/washing.png",
    altText: "Hand washing a car with foam",
  },
  {
    id: 2,
    tag: "Featured",
    title: "Consectetur adipiscing elit.",
    description:
      "Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation Read More...",
    imageUrl: "/assets/images/washing.png",
    altText: "Mechanic working on a car engine",
  },
  {
    id: 3,
    tag: "Tips & Tricks",
    title: "Duis aute irure dolor in",
    description:
      "Reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident Read More...",
    imageUrl: "/assets/images/washing.png",
    altText: "Clean car interior",
  },
  {
    id: 4,
    tag: "New Article",
    title: "Voluptate velit esse cillum",
    description:
      "Dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt Read More...",
    imageUrl: "/assets/images/washing.png",
    altText: "New car tyre",
  },
];

export const ShineSection: React.FC = () => {
  return (
    <>
      <div className="container mx-auto px-4 py-4 md:py-4 font-sans">
        <div className="flex justify-between items-center mb-6">
          <h3 className="text-lg font-semibold text-[#101010]"> Why Shinr</h3>
          <a
            href="#"
            className="text-sm text-teal-600 hover:text-teal-800 font-semibold flex items-center group"
          >
            View All
            <svg
              className="w-4 h-4 ml-2"
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
          </a>
        </div>

        {/* Articles Grid */}
        <div className="pb-4  overflow-x-scroll no-scrollbar">
          <div className="flex space-x-4">
            {articles.map((article) => (
              <div
                key={article.id}
                className="flex-none w-80 md:w-96 bg-white rounded-xl shadow-sm border border-gray-200
                         flex p-4 cursor-pointer hover:shadow-md transition-shadow duration-200"
              >
                {/* Text Content */}
                <div className="flex-grow pr-4">
                  <p className="text-sm font-medium text-teal-600 mb-1">
                    {article.tag}
                  </p>
                  <h3 className="text-lg md:text-xl font-bold text-gray-900 mb-2 leading-tight">
                    {article.title}
                  </h3>
                  <p className="text-sm text-gray-600 leading-relaxed line-clamp-4">
                    {" "}
                    {article.description}
                  </p>
                  <a
                    href="#"
                    className="text-teal-600 text-sm font-semibold mt-2 inline-block hover:underline"
                  >
                    Read More...
                  </a>
                </div>
                <div className="flex-shrink-0 w-[100px] h-[180px] md:w-[100px] md:h-[180px] rounded-lg overflow-hidden border border-gray-300">
                  <Image
                    src={article.imageUrl}
                    alt={article.altText}
                    className="w-full h-full object-cover"
                    width={100}
                    height={180}
                  />
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </>
  );
};
