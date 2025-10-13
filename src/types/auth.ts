export interface ILoginPayload {
  mobile: string;
}

export interface ILoginResponse {
  otpToken: string;
  message: string;
}

export interface IVerifyOtpPayload {
  otp: string;
  otpToken: string;
}
