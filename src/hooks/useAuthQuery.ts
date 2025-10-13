import { AuthService } from "@/services/auth";
import { ILoginPayload, ILoginResponse, IVerifyOtpPayload } from "@/types/auth";
import { useMutation } from "@tanstack/react-query";

const authService = new AuthService();

export const useLoginMutation = () => {
  return useMutation<{ data: ILoginResponse }, Error, ILoginPayload>({
    mutationKey: ["login"],
    mutationFn: (payload) => authService.login(payload), // explicitly pass payload
  });
};

export const useVerifyOtpMutation = () => {
  return useMutation<void, Error, IVerifyOtpPayload>({
    mutationKey: ["verifyOtp"],
    mutationFn: (payload) => authService.verifyOtp(payload),
  });
};
