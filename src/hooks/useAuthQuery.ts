import { AuthService } from "@/services/auth";
import { ILoginPayload, ILoginResponse, IVerifyOtpPayload } from "@/types/auth";
import { useMutation } from "@tanstack/react-query";

const authService = new AuthService();

export const useLoginMutation = () => {
  return useMutation<ILoginResponse, Error, ILoginPayload>({
    mutationKey: ["login"],
    mutationFn: (payload) => authService.login(payload), // explicitly pass payload
    onSuccess: (data) => console.log("Login success", data),
    onError: (error) => console.error("Login failed", error),
  });
};

export const useVerifyOtpMutation = () => {
  return useMutation<void, Error, IVerifyOtpPayload>({
    mutationKey: ["verifyOtp"],
    mutationFn: (payload) => authService.verifyOtp(payload),
    onSuccess: () => console.log("OTP verification success"),
    onError: (error) => console.error("OTP verification failed", error),
  });
};
