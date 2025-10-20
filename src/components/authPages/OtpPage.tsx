"use client";
import React, { useEffect, useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { ArrowRight } from "lucide-react";
import { Controller, useForm } from "react-hook-form";
import { OtpFormData, otpSchema } from "@/validation/auth";
import { zodResolver } from "@hookform/resolvers/zod";
import { ClipLoader } from "react-spinners";
import { useResendOtpMutation } from "@/hooks/useAuthQuery";

export const OtpPage: React.FC<IProps> = ({
  mobile,
  handleVerifyOtp,
  verifyLoading,
  setShowOtp,
  otpError,
  otpToken,
  setOtpToken,
}) => {
  const [secondsLeft, setSecondsLeft] = useState(45);
  const { mutate: resendOtp } = useResendOtpMutation();

  const {
    handleSubmit,
    control,
    setError,
    formState: { errors },
  } = useForm<OtpFormData>({
    resolver: zodResolver(otpSchema),
    defaultValues: { otp: "" },
  });

  const onSubmit = (data: OtpFormData) => {
    handleVerifyOtp(data.otp);
  };

  useEffect(() => {
    if (secondsLeft <= 0) return;

    const timer = setInterval(() => {
      setSecondsLeft((s) => Math.max(0, s - 1));
    }, 1000);

    return () => clearInterval(timer);
  }, [secondsLeft]);

  useEffect(() => {
    if (otpError) {
      setError("otp", { type: "server", message: otpError });
    }
  }, [otpError, setError]);

  const handleResendOtp = () => {
    resendOtp(
      { otpToken },
      {
        onSuccess: (response) => {
          setOtpToken(response.data.otpToken);
          setSecondsLeft(45); // <-- reset timer
        },
      }
    );
  };

  return (
    <div className="flex items-center h-full w-full sm:max-w-sm md:max-w-md">
      <AnimatePresence mode="wait">
        <motion.div
          initial={{ opacity: 0, x: 50 }}
          animate={{ opacity: 1, x: 0 }}
          exit={{ opacity: 0, x: -50 }}
          transition={{ duration: 0.8 }}
          className="w-full h-full"
        >
          {/* Top content section */}
          <div className="font-poppins flex flex-col h-full">
            <div className="flex flex-col gap-3 mb-8">
              <h1 className="text-xl font-medium text-[#101010]">
                OTP Code Verification
              </h1>
              <p className="text-[14px] text-[#878787] leading-relaxed mb-6 flex flex-col">
                We have sent a OTP code to your mobile number
                <span className="flex gap-1">
                  <span className="text-[14px] font-semibold text-[#101010]">
                    {mobile}
                  </span>
                  <button
                    className="text-primary font-semibold underline"
                    onClick={() => setShowOtp(false)}
                  >
                    Edit
                  </button>
                </span>
              </p>
              <p className="text-[14px] text-[#878787]">
                Enter the OTP Code below to verify.
              </p>
            </div>

            {/* OTP Input using RHF */}
            <form
              onSubmit={handleSubmit(onSubmit)}
              className="flex flex-col flex-1"
            >
              <div>
                <Controller
                  name="otp"
                  control={control}
                  render={({ field }) => (
                    <div className="flex justify-between gap-3 mb-4">
                      {[0, 1, 2, 3].map((index) => (
                        <input
                          key={index}
                          type="tel"
                          maxLength={1}
                          {...field}
                          onChange={(e) => {
                            // Ensure only digits
                            if (/^\d?$/.test(e.target.value)) {
                              const otpArr = field.value.split("");
                              otpArr[index] = e.target.value;
                              field.onChange(otpArr.join(""));

                              // Move to next input if a digit was entered
                              if (e.target.value && index < 3) {
                                const nextInput = e.target.parentElement
                                  ?.children[index + 1] as HTMLInputElement;
                                if (nextInput) nextInput.focus();
                              }
                            }
                          }}
                          onKeyDown={(e) => {
                            // Handle backspace to move to previous input
                            if (
                              e.key === "Backspace" &&
                              !field.value[index] &&
                              index > 0
                            ) {
                              const prevInput = e.currentTarget.parentElement
                                ?.children[index - 1] as HTMLInputElement;
                              if (prevInput) prevInput.focus();
                            }
                          }}
                          value={field.value[index] || ""}
                          className="w-[75.5px] h-[56px] text-center opacity-100 rounded-[48px] border border-[#D6D6D6] p-5 bg-white focus:border-[#128C7E] text-gray-800 focus:outline-none"
                        />
                      ))}
                    </div>
                  )}
                />
                {errors.otp && (
                  <p className="text-red-500 text-sm mb-4 text-center">
                    {errors.otp.message}
                  </p>
                )}
              </div>
              <div className="mt-auto">
                <div className="text-center text-[14px] text-[#101010] mb-4">
                  Didn’t receive code?&nbsp;
                  {secondsLeft > 0 ? (
                    <span>Resend in {secondsLeft}s</span>
                  ) : (
                    <button
                      type="button"
                      onClick={handleResendOtp}
                      className="text-[#128C7E] font-medium z-10"
                    >
                      Resend
                    </button>
                  )}
                </div>

                {/* Bottom Button */}
                <button
                  type="submit"
                  className="w-full py-4 bg-[#128C7E] text-white rounded-full shadow-lg transition-all duration-300 transform flex items-center justify-between px-4 mb-6"
                >
                  <div className="px-4 flex items-center justify-between w-full">
                    <span>Verify</span>
                    {verifyLoading ? (
                      <ClipLoader color="#ffffff" size={20} />
                    ) : (
                      <ArrowRight size={24} />
                    )}
                  </div>
                </button>
              </div>
              {/* Resend Link */}
            </form>
          </div>
        </motion.div>
      </AnimatePresence>
    </div>
  );
};

interface IProps {
  mobile: string;
  handleVerifyOtp: (otp: string) => void;
  verifyLoading: boolean;
  setShowOtp: React.Dispatch<React.SetStateAction<boolean>>;
  otpError: string;
  otpToken: string;
  setOtpToken: React.Dispatch<React.SetStateAction<string>>;
}
