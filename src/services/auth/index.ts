import API from "@/helper/axios";
import { ILoginPayload, IVerifyOtpPayload } from "@/types/auth";

export class AuthService {
  login = async (payload: ILoginPayload) => {
    try {
      const { data } = await API.post("/user/login/otp", payload);
      return data;
    } catch (error: any) {
      const message = error.response?.data?.message || "Login failed";
      throw new Error(message);
    }
  };
  verifyOtp = async (payload: IVerifyOtpPayload) => {
    try {
      const { data } = await API.post("/user/login/verify-otp", payload);
      return data;
    } catch (error: any) {
      console.log("🚀 ~ AuthService ~ error:", error);
      const message =
        error.response?.data?.message || "Otp verification failed";
      throw new Error(message);
    }
  };

  resendOtp = async (payload: { otpToken: string }) => {
    try {
      const { data } = await API.post("/user/login/resend-otp", payload);
      return data;
    } catch (error: any) {
      const message = error.response?.data?.message || "resend otp failed";
      throw new Error(message);
    }
  };
}
