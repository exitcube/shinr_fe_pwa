"use client";
import React, { useState } from "react";
import { OtpPage } from "./OtpPage";
import LoginForm from "./LoginForm";
import { useLoginMutation } from "@/hooks/useAuthQuery";
import { ILoginPayload } from "@/types/auth";

export const Login: React.FC = () => {
  const [showOtp, setShowOtp] = useState(false);
  const [mobile, setMobile] = React.useState("");
  const [otpToken, setOtpToken] = useState("");

  const { mutate: sendOtp, isPending } = useLoginMutation();

  const handleLogin = async (payload: ILoginPayload) => {
    sendOtp(payload, {
      onSuccess: (data) => {
        setOtpToken(data.otpToken);
        setShowOtp(true);
      },
      onError: (error) => {
        setOtpToken("");
        setShowOtp(false);
      },
    });
  };

  return (
    <>
      {/* Main container */}
      {!showOtp ? (
        <LoginForm
          handleLogin={handleLogin}
          isPending={isPending}
          mobile={mobile}
          setMobile={setMobile}
        />
      ) : (
        <OtpPage mobile={mobile} />
      )}
    </>
  );
};
