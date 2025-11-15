export interface IUser {
  id: string;
  name: string;
  email: string;
  mobile: string;
}
export interface ILocation {
  lat: number | null;
  long: number | null;
}

export interface IAddressComponents {
  country: string;
  state: string;
  city: string;
  pincode: string;
}

export interface IAddressPayload {
  nickName: string;
  name: string;
  addressLine1: string;
  country: string;
  city: string;
  state: string;
  pinCode: string;
  latitude: number;
  longitude: number;
}

export interface ISavedAddress {
  addressId: number;
  nickName: string;
  name: string;
  addressLine1: string;
  country: string;
  city: string;
  state: string;
  pinCode: string;
  latitude: string;
  longitude: string;
  isDefault: boolean;
}
