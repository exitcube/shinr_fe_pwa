export interface ILoginPayload {
  mobile: string;
}

export interface ILoginResponse {
  otpToken: string;
}

export interface IVerifyOtpPayload {
  otp: string;
  otpToken: string;
}

export interface ITokenResponse {
  accessToken: string;
  refreshToken: string;
}
