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
