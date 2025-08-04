"use client";
import { motion } from "framer-motion";
import { h1 } from "framer-motion/client";
import Image from "next/image";

export default function ServiceBooking() {
    return (
        <>
            <motion.div
                className="w-full max-w-sm mx-auto bg-[#F5F5F5] min-h-screen overflow-y-scroll no-scrollbar pb-30 pt-5"
                initial={{ y: 100, opacity: 0, scale: 0.95 }}
                animate={{ y: 0, opacity: 1, scale: 1 }}
                transition={{ duration: 0.5, ease: "easeOut" }}
            >
                <div className="bg-gray-100 p-4 font-sans flex justify-center">
                    <h1>Service Booking</h1>

                </div>
                <div className=" p-4 font-sans flex justify-between">
                    <h1 className="text-[14px] font-bold">Service Details</h1>
                    <div className="font-sans flex items-center gap-1 ">
                        <h1 className="text-[10px]">Edit</h1>
                        <Image className="flex" src="/assets/icons/edit.svg" alt="icon" width={14} height={14} />
                    </div>
                </div>
                <div className="p-4 font-sans flex gap-1">
                    <div className="bg-white rounded-lg flex-col p-4">
                        <div>
                            <h1>hfshjdgfghd</h1>
                        </div>
                        <div>
                            <h1>hfshjdgfghd</h1>
                        </div>

                    </div>
                    <div className="bg-white rounded-lg flex-col p-4 w-[500%]">
                        <div>
                            <h1>hfshjdgfghd</h1>
                        </div>
                        <div>
                            <h1>hfshjdgfghd</h1>
                        </div>
                        <div>
                            <h1>hfshjdgfghd</h1>
                        </div>
                    </div>
                </div>
            </motion.div>
        </>
    )
}