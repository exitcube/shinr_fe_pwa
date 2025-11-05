"use client";
import React, { useState } from "react";
import { SelectMapLocation } from "./SelectMapLocation";
import { AddAddressForm } from "./AddAddressForm";
import { ILocation } from "@/types/user";

export const AddAddressLayout: React.FC = () => {
  const [selectedLocation, setSelectedLocation] = useState<ILocation>({
    lat: 0,
    long: 0,
  });

  // const [address, setAddress] = useState<string>("");
  // const [isSaveMode, setIsSaveMode] = useState<boolean>(false);
  return (
    <>
      {!false ? (
        <SelectMapLocation
          selectedLocation={selectedLocation}
          setSelectedLocation={setSelectedLocation}
        />
      ) : (
        <AddAddressForm />
      )}
    </>
  );
};
