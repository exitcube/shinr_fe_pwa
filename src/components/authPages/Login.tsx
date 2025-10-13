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
  const [otpToken, setOtpToken] = useState("");
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
        console.log("🚀 ~ handleLogin ~ decoded:", decoded);
        setOtpToken(response.data.otpToken);
        setShowOtp(true);
      },
      onError: (error) => {
        console.log("🚀 ~ handleLogin ~ error:", error);
        setOtpToken("");
        setShowOtp(false);
      },
    });
  };

  const handleVerifyOtp = (otp: string) => {
    if (!otpToken) return;
    const payload = { otp, otpToken };
    console.log("🚀 ~ handleVerifyOtp ~ payload:", payload);
    verifyOtp(payload, {
      onSuccess: (data) => {
        console.log(data, "OTP verified successfully");
        router.push("/home");
        // Redirect or perform further actions upon successful verification
      },
      onError: (error) => {
        console.log("OTP verification failed:", error);
        // Handle error, show message to user, etc.
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
        />
      ) : (
        <OtpPage
          mobile={mobile}
          handleVerifyOtp={handleVerifyOtp}
          verifyLoading={verifyLoading}
        />
      )}
    </>
  );
};
