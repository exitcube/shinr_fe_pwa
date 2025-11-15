"use client";
import React, { useMemo, useState } from "react";
import { ChevronRight } from "lucide-react";
import Image from "next/image";
import LocationModal from "../Location/LocationModal";
import { useSavedAddressesQuery } from "@/hooks/useAddressQuery";
import { ISavedAddress } from "@/types/user";

const LocationCard = () => {
  const [isOpen, setIsOpen] = useState(false);
  const { data: userSavedAddress, isLoading: addressLoading } =
    useSavedAddressesQuery();

  const defaultAddress: ISavedAddress = useMemo(() => {
    if (userSavedAddress && userSavedAddress.addresses.length > 0) {
      return userSavedAddress.addresses.find(
        (address: ISavedAddress) => address.isDefault
      );
    }
  }, [userSavedAddress]);

  if (addressLoading) {
    return <div>Loading...</div>;
  }

  return (
    <div className="mx-4 mb-4">
      <div className="bg-white rounded-2xl p-4 shadow-sm">
        {/* Location Label */}
        <div className="flex items-center gap-2 mb-2">
          <Image
            src="/assets/icons/location_gray.svg"
            alt="icon"
            width={12}
            height={15}
            className="mr-1"
          />
          <span className="text-sm text-gray-500 font-medium">Location</span>
        </div>

        {/* Address Row */}
        <div
          className="flex items-center justify-between"
          onClick={() => setIsOpen(true)}
        >
          <p className="text-base text-[#101010] font-normal flex-1 pr-2 truncate">
            {defaultAddress
              ? defaultAddress.addressLine1
              : "Select your location"}
          </p>
          <button className="flex-shrink-0 p-1 hover:bg-gray-100 rounded-full transition-colors">
            <ChevronRight size={20} className="text-gray-700" />
          </button>
        </div>
      </div>
      <LocationModal
        isOpen={isOpen}
        setIsOpen={setIsOpen}
        savedAddresses={userSavedAddress.addresses}
        defaultAddress={defaultAddress}
      />
    </div>
  );
};

export default LocationCard;
