"use client";
import React, { useEffect, useState } from "react";
import { SelectMapLocation } from "./SelectMapLocation";
import { AddAddressForm } from "./AddAddressForm";
import { ILocation } from "@/types/user";
import { useReverseGeocode } from "@/hooks/useAddressQuery";

export const AddAddressLayout: React.FC = () => {
  const [selectedLocation, setSelectedLocation] = useState<ILocation>({
    lat: null,
    long: null,
  });
  console.log("🚀 ~ AddAddressLayout ~ selectedLocation:", selectedLocation);

  const [address, setAddress] = useState<{ name: string; fullAddress: string }>(
    { name: "", fullAddress: "" }
  );
  // const [isSaveMode, setIsSaveMode] = useState<boolean>(false);

  const {
    data: ReverseGeocodeAddress,
    isLoading,
    isError,
  } = useReverseGeocode(selectedLocation.lat, selectedLocation.long);

  useEffect(() => {
    if (!ReverseGeocodeAddress) return;
    if (ReverseGeocodeAddress.results.length > 0) {
      setAddress({
        name: ReverseGeocodeAddress.results[0].name,
        fullAddress: ReverseGeocodeAddress.results[0].formatted_address,
      });
    }
  }, [ReverseGeocodeAddress]);

  return (
    <>
      {!false ? (
        <SelectMapLocation
          setSelectedLocation={setSelectedLocation}
          address={address}
        />
      ) : (
        <AddAddressForm />
      )}
    </>
  );
};
