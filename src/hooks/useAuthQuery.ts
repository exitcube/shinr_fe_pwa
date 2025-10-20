import { AuthService } from "@/services/auth";
import {
  ILoginPayload,
  ILoginResponse,
  ITokenResponse,
  IVerifyOtpPayload,
} from "@/types/auth";
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

export const useResendOtpMutation = () => {
  return useMutation<{ data: ILoginResponse }, Error, { otpToken: string }>({
    mutationKey: ["resendOtp"],
    mutationFn: (payload) => authService.resendOtp(payload),
  });
};

export const useGenerateRefreshToken = () => {
  return useMutation<{ refreshToken: string }, Error, ITokenResponse>({
    mutationKey: ["refresh-token"],
    mutationFn: (payload) => authService.generateRefresToken(payload),
  });
};
