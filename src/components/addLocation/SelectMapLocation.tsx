/* eslint-disable @typescript-eslint/no-explicit-any */

"use client";

import BackButtons from "@/common/Buttons/BackButtons";
import NavButton from "@/common/Buttons/NavButton";
import { ILocation } from "@/types/user";
import { LocateFixed } from "lucide-react";
import { useRouter } from "next/navigation";
import { useEffect, useRef } from "react";

export const SelectMapLocation: React.FC<IProps> = ({
  setSelectedLocation,
  address,
  setIsSaveMode,
}) => {
  const router = useRouter();
  const mapContainer = useRef<HTMLDivElement | null>(null);

  const mapInstanceRef = useRef<any>(null);
  const markerRef = useRef<any>(null);

  useEffect(() => {
    const initMap = async () => {
      const olaModule = await import("olamaps-web-sdk");
      const { OlaMaps } = olaModule;

      if (!mapContainer.current) return;

      const olaMaps = new OlaMaps({
        apiKey: process.env.NEXT_PUBLIC_OLA_MAPS_API_KEY!,
      });

      // Initialize map
      const mapInstance = olaMaps.init({
        container: mapContainer.current,
        style:
          "https://api.olamaps.io/tiles/vector/v1/styles/default-light-standard/style.json",
        center: [72.8777, 19.076],
        zoom: 12,
      });

      mapInstanceRef.current = mapInstance;

      const markerElement = document.createElement("div");
      markerElement.style.width = "32px";
      markerElement.style.height = "32px";

      const img = document.createElement("img");
      img.src = "/assets/icons/map-pin.png";
      img.style.width = "100%";
      img.style.height = "100%";
      img.style.pointerEvents = "none";
      markerElement.appendChild(img);

      // Add draggable marker
      const marker = olaMaps
        .addMarker({
          element: markerElement,
          offset: [0, -16],
          anchor: "bottom",
          draggable: true,
        })
        .setLngLat([72.8777, 19.076])
        .addTo(mapInstance);

      markerRef.current = marker;

      // Update selected location when marker is dragged
      marker.on("dragend", () => {
        const lngLat = marker.getLngLat();
        setSelectedLocation({ lat: lngLat.lat, long: lngLat.lng });
      });

      // Update marker on map click
      mapInstance.on(
        "click",
        (event: { lngLat: { lat: number; long: number } }) => {
          const { lat, long } = event.lngLat;
          marker.setLngLat([long, lat]);
          setSelectedLocation({ lat, long });
        }
      );

      // Try user geolocation
      if (navigator.geolocation) {
        navigator.geolocation.getCurrentPosition(
          (pos) => {
            const { latitude, longitude } = pos.coords;
            mapInstance.setCenter([longitude, latitude]);
            marker.setLngLat([longitude, latitude]);
            setSelectedLocation({ lat: latitude, long: longitude });
          },
          () => {},
          { enableHighAccuracy: true }
        );
      }
    };

    initMap();

    return () => {
      mapInstanceRef.current?.destroy?.();
    };
  }, []);

  const handleLocateClick = () => {
    if (!navigator.geolocation || !mapInstanceRef.current || !markerRef.current)
      return;

    navigator.geolocation.getCurrentPosition(
      (pos) => {
        const { latitude, longitude } = pos.coords;
        mapInstanceRef.current.setCenter([longitude, latitude]);
        markerRef.current.setLngLat([longitude, latitude]);
        setSelectedLocation({ lat: latitude, long: longitude });
      },
      (err) => console.warn(err.message),
      { enableHighAccuracy: true }
    );
  };

  return (
    <div className="relative w-full h-[100vh] rounded-lg overflow-hidden">
      <BackButtons
        className="absolute top-4 left-2 z-10"
        onClick={() => router.push("/home")}
      />
      <div ref={mapContainer} className="w-full h-full" />

      {/* Use My Location button */}
      <button
        onClick={handleLocateClick}
        className={`absolute ${
          address.name ? "bottom-48" : "bottom-32"
        }  right-4 z-10 bg-primary shadow-lg p-3 rounded-full font-medium text-sm hover:bg-gray-100 transition text-black`}
      >
        <LocateFixed color="white" />
      </button>

      <div className="absolute bottom-0 z-10 w-full bg-white">
        {address.name && (
          <div className="flex flex-col items-start justify-between  px-7 py-3 font-poppins border-b border-gray-300">
            <h3 className="font-medium text-sm text-black">{address.name}</h3>
            <span className="font-normal text-xs text-[#878787]">
              {address.fullAddress}
            </span>
          </div>
        )}
        <div className=" px-7 py-4">
          <NavButton
            title="Confirm Location"
            className="mb-6"
            onClick={() => setIsSaveMode(true)}
          />
        </div>
      </div>
    </div>
  );
};

export default SelectMapLocation;

interface IProps {
  setSelectedLocation: React.Dispatch<React.SetStateAction<ILocation>>;
  address: {
    name: string;
    fullAddress: string;
  };
  setIsSaveMode: React.Dispatch<React.SetStateAction<boolean>>;
}
