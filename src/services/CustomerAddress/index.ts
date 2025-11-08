import API from "@/helper/axios";
import { handleAxiosError } from "@/helper/handleAxiosError";
import { IAddressPayload } from "@/types/user";

export class CustomerAddressService {
  reverseGeocode = async (lat: number, lng: number) => {
    try {
      const response = await fetch(
        `https://api.olamaps.io/places/v1/reverse-geocode?latlng=${lat}%2C${lng}&api_key=${process.env.NEXT_PUBLIC_OLA_MAPS_API_KEY}`
      );
      const data = await response.json();
      return data;
    } catch (error) {
      throw new Error(
        handleAxiosError(error, "Failed to fetch address details")
      );
    }
  };

  addNewAddress = async (addressData: IAddressPayload) => {
    try {
      const { data } = await API.post("/user-profile/add-address", addressData);
      return data;
    } catch (error) {
      throw new Error(handleAxiosError(error, "Adding new address failed"));
    }
  };
}
