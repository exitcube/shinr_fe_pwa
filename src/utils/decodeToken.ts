import { jwtDecode } from "jwt-decode";

interface JwtPayload {
  deviceUUId: string;
  userUUId: string;
}

export const decodeToken = (token: string) => {
  try {
    const decoded = jwtDecode<JwtPayload>(token);
    console.log(decoded);
    return decoded;
  } catch (error) {
    console.error("Invalid token:", error);
    return null;
  }
};
