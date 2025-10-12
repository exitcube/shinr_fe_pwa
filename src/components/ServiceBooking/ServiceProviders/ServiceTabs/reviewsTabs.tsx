"use client";
import React, { useState } from "react";
import { ServiceProvider } from "@/types/wallet";
import { Star } from "lucide-react";

const ReviewsTap: React.FC<{ provider: ServiceProvider }> = ({ provider }) => {


    return (
        <>
            <div className="flex-1 bg-white px-4 py-3">
                <div className="space-y-3">
                    {provider.reviews && provider.reviews.length > 0 ? (
                        provider.reviews.map((review) => (
                            <div
                                key={review.id}
                                className="bg-white border border-gray-200 rounded-lg p-4"
                            >
                                {/* Header: Name, Rating, Date */}
                                <div className="flex items-start justify-between mb-2">
                                    <div className="flex-1">
                                        <h3 className="text-base font-semibold text-[#101010] mb-1">
                                            {review.userName}
                                        </h3>
                                        <div className="flex items-center gap-1">
                                            {/* Star Rating */}
                                            {[1, 2, 3, 4, 5].map((star) => (
                                                <Star
                                                    key={star}
                                                    size={14}
                                                    className={
                                                        star <= Math.floor(review.rating)
                                                            ? "text-yellow-500 fill-yellow-500"
                                                            : star - 0.5 <= review.rating
                                                                ? "text-yellow-500 fill-yellow-500"
                                                                : "text-gray-300 fill-gray-300"
                                                    }
                                                />
                                            ))}
                                            <span className="text-sm font-medium text-[#101010] ml-1">
                                                {review.rating}
                                            </span>
                                        </div>
                                    </div>
                                    <span className="text-xs text-gray-400">{review.date}</span>
                                </div>

                                {/* Service Badge */}
                                <div className="inline-block bg-[#E0F7F4] text-[#128C7E] text-xs font-medium px-3 py-1 rounded-full mb-2">
                                    {review.serviceName}
                                </div>

                                {/* Review Comment */}
                                <p className="text-sm text-gray-600 leading-relaxed">
                                    {review.comment}
                                </p>
                            </div>
                        ))
                    ) : (
                        <div className="text-center py-8 text-gray-500 text-sm">
                            No reviews yet
                        </div>
                    )}
                </div>
            </div>
        </>
    );
};

export default ReviewsTap;
