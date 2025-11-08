"use client";
import React, { useEffect, useState } from "react";
import { SelectMapLocation } from "./SelectMapLocation";
import { AddAddressForm } from "./AddAddressForm";
import { IAddressComponents, ILocation } from "@/types/user";
import { useReverseGeocode } from "@/hooks/useAddressQuery";
import { transformMapAddress } from "@/helper/transformMapAddress";

export const AddAddressLayout: React.FC = () => {
  const [selectedLocation, setSelectedLocation] = useState<ILocation>({
    lat: null,
    long: null,
  });

  const [address, setAddress] = useState<{ name: string; fullAddress: string }>(
    { name: "", fullAddress: "" }
  );
  const [addressComponents, setAddressComponents] =
    useState<IAddressComponents>({
      country: "",
      state: "",
      city: "",
      pincode: "",
    });
  const [isSaveMode, setIsSaveMode] = useState<boolean>(false);

  const { data: ReverseGeocodeAddress } = useReverseGeocode(
    selectedLocation.lat,
    selectedLocation.long
  );

  useEffect(() => {
    if (!ReverseGeocodeAddress) return;
    if (ReverseGeocodeAddress.results.length > 0) {
      setAddressComponents(
        transformMapAddress(ReverseGeocodeAddress.results[0].address_components)
      );

      setAddress({
        name: ReverseGeocodeAddress.results[0].name,
        fullAddress: ReverseGeocodeAddress.results[0].formatted_address,
      });
    }
  }, [ReverseGeocodeAddress]);

  return (
    <>
      {!isSaveMode ? (
        <SelectMapLocation
          setSelectedLocation={setSelectedLocation}
          address={address}
          setIsSaveMode={setIsSaveMode}
        />
      ) : (
        <AddAddressForm
          selectedLocation={selectedLocation}
          address={address}
          setIsSaveMode={setIsSaveMode}
          addressComponents={addressComponents}
        />
      )}
    </>
  );
};
