/* eslint-disable */

import { IAddressComponents } from "@/types/user";

export const transformMapAddress = (
  addressComponents: any[] = []
): IAddressComponents => {
  const result: IAddressComponents = {
    country: "",
    state: "",
    city: "",
    pincode: "",
  };

  addressComponents?.forEach((item) => {
    if (!item?.types || !Array.isArray(item.types)) return;

    if (item.types.includes("country")) {
      result.country = item.long_name || "";
    } else if (item.types.includes("administrative_area_level_1")) {
      result.state = item.long_name || "";
    } else if (item.types.includes("administrative_area_level_3")) {
      result.city = item.long_name || "";
    } else if (item.types.includes("postal_code")) {
      result.pincode = item.long_name || "";
    }
  });

  return result;
};
