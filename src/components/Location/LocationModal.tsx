import { DragCloseDrawer } from "@/common/DragCloseDrawer";
import {
  CheckmarkCircle01Icon,
  Location01Icon,
} from "@hugeicons/core-free-icons";
import { HugeiconsIcon } from "@hugeicons/react";

import React, { useState } from "react";

const LocationModal: React.FC<IProps> = ({ isOpen, setIsOpen }) => {
  const [selectedId, setSelectedId] = useState(locationData[0].id);
  return (
    <DragCloseDrawer open={isOpen} setOpen={setIsOpen}>
      <div className="font-poppins flex flex-col items-start gap-1.5">
        <h2 className="font-semibold text-black">Select Location</h2>
        <div className="flex flex-col gap-3 w-full">
          {locationData.map((location) => (
            <div
              key={location.id}
              className={`border ${
                selectedId === location.id
                  ? "border-[#128C7E]"
                  : "border-[#D6D6D6]"
              }  flex items-center justify-between p-2 w-full rounded-xl`}
              onClick={() => setSelectedId(location.id)}
            >
              <div className="flex flex-col gap-1.5">
                <p className="text-[#101010] font-medium text-sm">
                  {location.name}
                </p>
                <span className="flex gap-1 items-center">
                  <HugeiconsIcon
                    icon={Location01Icon}
                    color=""
                    fill="#878787"
                    size={15}
                  />
                  <p className="text-[#878787] text-xs font-normal">
                    {location.address}
                  </p>
                </span>
              </div>
              {selectedId === location.id && (
                <HugeiconsIcon
                  icon={CheckmarkCircle01Icon}
                  color="white"
                  fill="#128C7E"
                  size={25}
                />
              )}
            </div>
          ))}
        </div>
      </div>
    </DragCloseDrawer>
  );
};

export default LocationModal;

interface IProps {
  isOpen: boolean;
  setIsOpen: React.Dispatch<React.SetStateAction<boolean>>;
}

const locationData = [
  {
    id: 1,
    name: "Sharuk",
    address: "1/342, HSR Layout, Bangalore",
  },
  {
    id: 2,
    name: "Khan",
    address: "1/342, HSR Layout, Bangalore",
  },
];
