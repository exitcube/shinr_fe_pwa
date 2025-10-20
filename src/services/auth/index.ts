import API from "@/helper/axios";
import { handleAxiosError } from "@/helper/handleAxiosError";
import { ILoginPayload, IVerifyOtpPayload } from "@/types/auth";

export class AuthService {
  login = async (payload: ILoginPayload) => {
    try {
      const { data } = await API.post("/user/login/otp", payload);
      return data;
    } catch (err: unknown) {
      throw new Error(handleAxiosError(err, "Login failed"));
    }
  };
  verifyOtp = async (payload: IVerifyOtpPayload) => {
    try {
      const { data } = await API.post("/user/login/verify-otp", payload);
      return data;
    } catch (error) {
      throw new Error(handleAxiosError(error, "Otp verification failed"));
    }
  };

  resendOtp = async (payload: { otpToken: string }) => {
    try {
      const { data } = await API.post("/user/login/resend-otp", payload);
      return data;
    } catch (error) {
      throw new Error(handleAxiosError(error, "resend otp failed"));
    }
  };

  generateRefresToken = async (payload: { refreshToken: string }) => {
    try {
      const { data } = await API.post(
        "/user/login/generate-refreshToken",
        payload
      );
      return data;
    } catch (error) {
      throw new Error(
        handleAxiosError(error, "Failed to generate refresh token")
      );
    }
  };
}
