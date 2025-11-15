import { DragCloseDrawer } from "@/common/DragCloseDrawer";
import { ISavedAddress } from "@/types/user";
import {
  CheckmarkCircle01Icon,
  Location01Icon,
} from "@hugeicons/core-free-icons";
import { HugeiconsIcon } from "@hugeicons/react";
import { ArrowRight, Search } from "lucide-react";
import Link from "next/link";

import React, { useState } from "react";

const LocationModal: React.FC<IProps> = ({
  isOpen,
  setIsOpen,
  savedAddresses,
}) => {
  const [selectedId, setSelectedId] = useState(locationData[0].id);
  return (
    <DragCloseDrawer open={isOpen} setOpen={setIsOpen} title="Location">
      <div className="mb-4 text-black">
        <div className="w-full rounded-full border border-gray-300 px-2.5 py-2.5 text-sm flex items-center gap-2">
          <Search size={20} className="text-gray-500" />
          <input
            type="text"
            placeholder="Search"
            className="flex-1 outline-none bg-transparent "
          />
        </div>
      </div>
      <div className="font-poppins flex flex-col items-start gap-1.5">
        <h2 className="font-semibold text-black">Select Location</h2>
        {savedAddresses.length > 0 && (
          <div className="flex flex-col gap-3 w-full">
            {savedAddresses.map((location) => (
              <div
                key={location.addressId}
                className={`border ${
                  selectedId === location.addressId
                    ? "border-[#128C7E]"
                    : "border-[#D6D6D6]"
                }  flex items-center justify-between p-2 w-full rounded-xl`}
                onClick={() => setSelectedId(location.addressId)}
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
                      {location.addressLine1}
                    </p>
                  </span>
                </div>
                {selectedId === location.addressId && (
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
        )}
        <div className="mt-4 mb-6 flex justify-center w-full">
          <Link
            // onClick={() => {
            //   setConfirmMode("add");
            //   setIsConfirmOpen(true);
            // }}
            href={"/add-address"}
            className="text-[#128C7E] text-sm text-center font-semibold underline"
          >
            Add New Address +
          </Link>
        </div>
        <div className="w-full inset-x-0 bottom-0 pb-5 pt-2">
          <button
            disabled={!selectedId}
            className={`w-full rounded-full py-3  flex items-center justify-between px-4 bg-[#128C7E] text-white disabled:bg-gray-200 disabled:text-gray-400"
          }`}
          >
            <span className="font-medium font-poppins text-base">
              Confirm Location
            </span>
            <ArrowRight size={20} />
          </button>
        </div>
      </div>
    </DragCloseDrawer>
  );
};

export default LocationModal;

interface IProps {
  isOpen: boolean;
  setIsOpen: React.Dispatch<React.SetStateAction<boolean>>;
  savedAddresses: ISavedAddress[];
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
