import BackButtons from "@/common/Buttons/BackButtons";
import NavButton from "@/common/Buttons/NavButton";
import { useAddNewAdrressMutation } from "@/hooks/useAddressQuery";
import { IAddressComponents, IAddressPayload, ILocation } from "@/types/user";
import {
  userAddressFormSchema,
  userAddressFormValues,
} from "@/validation/user";
import { zodResolver } from "@hookform/resolvers/zod";
import { a } from "framer-motion/client";
import { useRouter } from "next/navigation";
import React, { useEffect, useRef } from "react";
import { useForm } from "react-hook-form";

export const AddAddressForm: React.FC<IProps> = ({
  address,
  setIsSaveMode,
  selectedLocation,
  addressComponents,
}) => {
  const mapContainer = useRef<HTMLDivElement | null>(null);
  const router = useRouter();

  const { mutate: addNewAddressMutate, isPending: isAddingAddress } =
    useAddNewAdrressMutation();

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<userAddressFormValues>({
    resolver: zodResolver(userAddressFormSchema),
    defaultValues: {
      name: "",
      nickName: "",
      address: address.name || "",
      pincode: addressComponents.pincode || "",
      city: addressComponents.city || "",
      state: addressComponents.state || "",
      country: addressComponents.country || "",
    },
  });

  useEffect(() => {
    const initMap = async () => {
      if (!mapContainer.current || !selectedLocation) return;

      const olaModule = await import("olamaps-web-sdk");
      const { OlaMaps } = olaModule;

      const olaMaps = new OlaMaps({
        apiKey: process.env.NEXT_PUBLIC_OLA_MAPS_API_KEY!,
      });

      const mapInstance = olaMaps.init({
        container: mapContainer.current,
        style:
          "https://api.olamaps.io/tiles/vector/v1/styles/default-light-standard/style.json",
        center: [selectedLocation.long, selectedLocation.lat],
        zoom: 14,
        interactive: false, // 👈 disables dragging, zooming, etc.
      });

      // Create a simple non-draggable marker
      const markerElement = document.createElement("div");
      markerElement.style.width = "32px";
      markerElement.style.height = "32px";

      const img = document.createElement("img");
      img.src = "/assets/icons/map-pin.png";
      img.style.width = "100%";
      img.style.height = "100%";
      img.style.pointerEvents = "none";

      markerElement.appendChild(img);

      olaMaps
        .addMarker({
          element: markerElement,
          offset: [0, -16],
          anchor: "bottom",
          draggable: false,
        })
        .setLngLat([selectedLocation.long, selectedLocation.lat])
        .addTo(mapInstance);

      setTimeout(() => {
        mapInstance.resize();
      }, 300);
    };

    initMap();
  }, [selectedLocation]);

  const onSubmit = (data: userAddressFormValues) => {
    console.log("Form Data:", data);
    const newAddressPayload: IAddressPayload = {
      nickName: data.nickName || "",
      name: data.name,
      addressLine1: data.address,
      country: data.country,
      city: data.city,
      state: data.state,
      pinCode: data.pincode,
      latitude: selectedLocation.lat || 0,
      longitude: selectedLocation.long || 0,
    };

    addNewAddressMutate(newAddressPayload, {
      onSuccess: (response) => {
        console.log("Address added successfully:", response);
        router.push("/home");
        setIsSaveMode(false);
      },
      onError: (error) => {
        console.error("Error adding address:", error);
      },
    });
  };

  return (
    <>
      <div className="p-5 font-poppins text-black relative">
        <div className="mb-8 flex items-center gap-24 ">
          <BackButtons />
          <h2 className="text-lg font-normal text-black font-poppins">
            New Location
          </h2>
        </div>
        <div className="block w-full">
          <div
            ref={mapContainer}
            className="w-full h-64 rounded-xl overflow-hidden"
          />
        </div>
        <div className="mt-5 flex items-center justify-between">
          <div className="flex flex-col items-start justify-between ">
            <h3 className="font-medium text-sm">{address.name}</h3>
            <span className="font-normal text-xs text-[#878787]">
              {address.fullAddress}
            </span>
          </div>
          <button className="border border-[#128C7E] rounded-full py-2.5 px-3 text-primary">
            change
          </button>
        </div>
        <div className="mt-6">
          <h2 className="font-semibold text-base ">Add Address</h2>
          <form
            id="addressForm"
            onSubmit={handleSubmit(onSubmit)}
            className="mt-3 flex flex-col gap-3 max-w-md mx-auto pb-12"
          >
            <div>
              <label className="text-[#878787] text-sm">
                Name <span className="text-red-500">*</span>
              </label>
              <input
                {...register("name")}
                type="text"
                placeholder="Enter Your Name"
                className="w-full bg-white rounded-full p-4 border border-gray-100 focus:outline-none focus:border-[#128C7E]"
              />
              {errors.name && (
                <p className="text-red-500 text-xs mt-1">
                  {errors.name.message}
                </p>
              )}
            </div>

            <div>
              <label className="text-[#878787] text-sm">
                Nick Name <span className="text-red-500">*</span>
              </label>
              <input
                {...register("nickName")}
                type="text"
                placeholder="Enter Your Nick Name"
                className="w-full bg-white rounded-full p-4  border border-gray-100 focus:outline-none focus:border-[#128C7E]"
              />
              {errors.nickName && (
                <p className="text-red-500 text-xs mt-1">
                  {errors.nickName.message}
                </p>
              )}
            </div>

            <div>
              <label className="text-[#878787] text-sm">
                Address <span className="text-red-500">*</span>
              </label>
              <input
                {...register("address")}
                type="text"
                placeholder="Enter your Address"
                className="w-full bg-white rounded-full p-4  border border-gray-100 focus:outline-none focus:border-[#128C7E]"
              />
              {errors.address && (
                <p className="text-red-500 text-xs mt-1">
                  {errors.address.message}
                </p>
              )}
            </div>

            <div>
              <label className="text-[#878787] text-sm">
                Pincode <span className="text-red-500">*</span>
              </label>
              <input
                {...register("pincode")}
                type="text"
                placeholder="Enter your Pincode"
                className="w-full bg-white rounded-full p-4  border border-gray-100 focus:outline-none focus:border-[#128C7E]"
              />
              {errors.pincode && (
                <p className="text-red-500 text-xs mt-1">
                  {errors.pincode.message}
                </p>
              )}
            </div>

            <div>
              <label className="text-[#878787] text-sm">
                City <span className="text-red-500">*</span>
              </label>
              <input
                {...register("city")}
                type="text"
                placeholder="Enter your City"
                className="w-full bg-white rounded-full p-4  border border-gray-100 focus:outline-none focus:border-[#128C7E]"
              />
              {errors.city && (
                <p className="text-red-500 text-xs mt-1">
                  {errors.city.message}
                </p>
              )}
            </div>

            <div>
              <label className="text-[#878787] text-sm">
                State <span className="text-red-500">*</span>
              </label>
              <input
                {...register("state")}
                type="text"
                placeholder="Enter your State"
                className="w-full bg-white rounded-full p-4  border border-gray-100 focus:outline-none focus:border-[#128C7E]"
              />
              {errors.state && (
                <p className="text-red-500 text-xs mt-1">
                  {errors.state.message}
                </p>
              )}
            </div>

            <div>
              <label className="text-[#878787] text-sm">
                Country <span className="text-red-500">*</span>
              </label>
              <input
                {...register("country")}
                type="text"
                placeholder="Enter your Country"
                className="w-full bg-white rounded-full p-4  border border-gray-100 focus:outline-none focus:border-[#128C7E]"
              />
              {errors.country && (
                <p className="text-red-500 text-xs mt-1">
                  {errors.country.message}
                </p>
              )}
            </div>
          </form>
        </div>
      </div>
      <div className="sticky bottom-0 w-full py-4 px-3 bg-white shadow-[0_-2px_8px_rgba(0,0,0,0.08)]">
        <NavButton
          type="submit"
          form="addressForm"
          title="Save Address"
          isLoading={isAddingAddress}
          disabled={isAddingAddress}
        />
      </div>
    </>
  );
};

interface IProps {
  selectedLocation: ILocation;
  address: {
    name: string;
    fullAddress: string;
  };
  setIsSaveMode: React.Dispatch<React.SetStateAction<boolean>>;
  addressComponents: IAddressComponents;
}
