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
                {/*Heading section  */}
                <div className="bg-gray-100 font-sans flex items-center relative h-10">
                    <Image
                        className="absolute left-0"
                        src="/assets/icons/backButton.svg"
                        alt="icon"
                        width={40}
                        height={40}
                    />
                    <h1 className="text-[16px] font-normal text-[#101010] mx-auto">
                        Service Booking
                    </h1>
                </div>

                {/*Service details Heading section  */}
                <div className="pt-[24px]  font-sans flex justify-between">
                    <h1 className="text-[16px] font-semibold text-[#101010]">Service Details</h1>
                    <div className="font-sans flex items-center gap-1 ">
                        <h1 className="text-[12px] font-medium">Edit</h1>
                        <Image className="flex" src="/assets/icons/edit.svg" alt="icon" width={14} height={14} />
                    </div>
                </div>
                {/*Service details  section  */}
                <div className="pt-[6px] font-sans flex gap-3">
                    <div className="bg-white rounded-lg flex-col p-4 w-[20%] flex items-center justify-center">
                        <div>
                            <h6 className="text-[14px] font-normal text-[#878787]">Sat</h6>
                        </div>
                        <div className="mt-2">
                            <h1 className="text-[14px] font-medium text-[#101010]">19</h1>
                        </div>

                    </div>
                    <div className="bg-white rounded-lg flex-col p-4 w-[500%] flex justify-center">
                        <div>
                            <h1 className="text-[16px] font-medium text-[#101010]">Sharuk</h1>
                        </div>
                        <div className="gap-0.5">
                            <h1 className="text-[14px] font-normal text-[#878787]">+91 999 888 777</h1>
                        </div>
                        <div className="flex mt-[12px]">
                            <Image src="/assets/icons/location_black.svg" alt="icon" width={18} height={18} />
                            <h6 className="text-[14px] font-normal text-[#101010]">1/342,HSR Layout, Bangalore</h6>
                        </div>
                    </div>
                </div>
                {/*Service booking banner section */}
                <div className="pt-4">
                    <div className="bg-gradient-to-r from-[#136D35] to-[#25D366] p-2 rounded-full shadow-sm  flex items-center">
                        <Image className="flex" src="/assets/icons/Happy 1.svg" alt="icon" width={18} height={18} />
                        <p className="text-white text-[12px] font-semibold mx-[4px]">
                            200 + <span className="font-normal">happy customers this week</span>
                        </p>
                    </div>
                </div>
                {/*Service Section*/}
                <div className="pt-4">
                    <ServiceSection showHeading={false} />
                </div>

            </motion.div>
        </>
    )
}