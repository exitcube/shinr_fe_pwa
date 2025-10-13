import API from "@/helper/axios";
import { ILoginPayload, IVerifyOtpPayload } from "@/types/auth";

export class AuthService {
  login = async (payload: ILoginPayload) => {
    const { data } = await API.post("/user/login/otp", payload);
    return data;
  };
  verifyOtp = async (payload: IVerifyOtpPayload) => {
    const { data } = await API.post("/user/login/verify-otp", payload);
    return data;
  };
}
