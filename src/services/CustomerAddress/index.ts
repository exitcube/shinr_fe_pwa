export class CustomerAddressService {
  reverseGeocode = async (lat: number, lng: number) => {
    try {
      const response = await fetch(
        `https://api.olamaps.io/places/v1/reverse-geocode?latlng=${lat}%2C${lng}&api_key=${process.env.NEXT_PUBLIC_OLA_MAPS_API_KEY}`
      );
      const data = await response.json();
      return data;
    } catch (error) {
      throw new Error("Failed to fetch address details");
    }
  };
}
