"use client";
import { ServiceSection } from "@/components/homeArea/ServiceSection";
import { motion } from "framer-motion";
import { h1 } from "framer-motion/client";
import Image from "next/image";

export default function ServiceBooking() {
    return (
        <>
            <motion.div
                className="w-full max-w-sm mx-auto bg-[#F5F5F5] min-h-screen overflow-y-scroll no-scrollbar p-4"
                initial={{ y: 100, opacity: 0, scale: 0.95 }}
                animate={{ y: 0, opacity: 1, scale: 1 }}
                transition={{ duration: 0.5, ease: "easeOut" }}
            >
                <div className="bg-gray-100  font-sans flex justify-center">
                    <h1>Service Booking</h1>

                </div>
                <div className="pt-10  font-sans flex justify-between">
                    <h1 className="text-[14px] font-bold">Service Details</h1>
                    <div className="font-sans flex items-center gap-1 ">
                        <h1 className="text-[10px]">Edit</h1>
                        <Image className="flex" src="/assets/icons/edit.svg" alt="icon" width={14} height={14} />
                    </div>
                </div>
                <div className="pt-2 font-sans flex gap-3">
                    <div className="bg-white rounded-lg flex-col p-4 w-[20%] flex items-center justify-center">
                        <div>
                            <h6 className="text-[12px]">Sat</h6>
                        </div>
                        <div className="mt-2">
                            <h1>19</h1>
                        </div>

                    </div>
                    <div className="bg-white rounded-lg flex-col p-4 w-[500%] flex justify-center">
                        <div>
                            <h1>Sharuk</h1>
                        </div>
                        <div>
                            <h1>+91 999 888 777</h1>
                        </div>
                        <div className="flex">
                            <Image src="/assets/icons/location_black.svg" alt="icon" width={14} height={14} />
                            <h6>1/342,HSR Layout, Bangalore</h6>
                        </div>
                    </div>
                </div>
                <div className="pt-4">
                    {/* <Image src="/assets/images/happy_customer_container.png" alt="image" width={500} height={40} /> */}
                    <div className="bg-gradient-to-r from-[#136D35] to-[#25D366] p-2 rounded-full shadow-sm  flex items-center">
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
                            450 points - Worth <span className="font-bold">₹45</span> Your
                            Shinr Rewards
                        </p>
                    </div>
                </div>
                <div className="pt-4">
                    <ServiceSection showHeading={false} />
                </div>


            </motion.div>
        </>
    )
}