"use client";
import React, { useState } from "react";
import { OtpPage } from "./OtpPage";
import LoginForm from "./LoginForm";
import { useLoginMutation, useVerifyOtpMutation } from "@/hooks/useAuthQuery";
import { ILoginPayload } from "@/types/auth";
import { decodeToken } from "@/utils/decodeToken";
import { useDispatch } from "react-redux";
import { setDeviceUUId } from "@/redux/slices/authSlice";
import { useRouter } from "next/navigation";

export const Login: React.FC = () => {
  const [showOtp, setShowOtp] = useState(false);
  const [mobile, setMobile] = React.useState("");
  const [mobileError, setMobileError] = useState("");
  const [otpToken, setOtpToken] = useState("");
  const [otpError, setOtpError] = useState("");
  const dispatch = useDispatch();
  const router = useRouter();

  const { mutate: sendOtp, isPending: otpReqLoading } = useLoginMutation();
  const { mutate: verifyOtp, isPending: verifyLoading } =
    useVerifyOtpMutation();

  const handleLogin = async (payload: ILoginPayload) => {
    sendOtp(payload, {
      onSuccess: (response) => {
        const decoded = decodeToken(response.data.otpToken);
        dispatch(setDeviceUUId(decoded?.deviceUUId));
        setOtpToken(response.data.otpToken);
        setShowOtp(true);
      },
      onError: (error) => {
        setOtpToken("");
        setShowOtp(false);
        setMobileError(error.message);
      },
    });
  };

  const handleVerifyOtp = (otp: string) => {
    if (!otpToken) return;
    const payload = { otp, otpToken };
    verifyOtp(payload, {
      onSuccess: (data) => {
        console.log(data, "OTP verified successfully");
        setOtpError("");
        router.push("/home");
      },
      onError: (error: any) => {
        setOtpError(error.message);
      },
    });
  };

  return (
    <>
      {/* Main container */}
      {!showOtp ? (
        <LoginForm
          handleLogin={handleLogin}
          isPending={otpReqLoading}
          mobile={mobile}
          setMobile={setMobile}
          mobileError={mobileError}
        />
      ) : (
        <OtpPage
          mobile={mobile}
          handleVerifyOtp={handleVerifyOtp}
          verifyLoading={verifyLoading}
          setShowOtp={setShowOtp}
          otpError={otpError}
        />
      )}
    </>
  );
};
