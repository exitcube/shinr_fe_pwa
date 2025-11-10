import API from "@/helper/axios";
import { handleAxiosError } from "@/helper/handleAxiosError";

export class VehiclesAPI {
  getAllBrands = async (page?: number, limit?: number) => {
    try {
      const { data } = await API.get(
        `/cars/car-brands?page=${page}&limit=${limit}`
      );
      return data;
    } catch (error) {
      throw new Error(
        handleAxiosError(error, "Failed to fetch vehicle brands")
      );
    }
  };
}
