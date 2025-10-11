"use client";
import React from "react";
import { AnimatePresence, motion } from "framer-motion";
import { ArrowRight } from "lucide-react";
import { Controller, useForm } from "react-hook-form";
import { OtpFormData, otpSchema } from "@/app/validation/auth";
import { zodResolver } from "@hookform/resolvers/zod";

export const OtpPage: React.FC<IProps> = ({ mobile }) => {
  // const router = useRouter();

  const {
    handleSubmit,
    control,
    formState: { errors },
  } = useForm<OtpFormData>({
    resolver: zodResolver(otpSchema),
    defaultValues: { otp: "" },
  });

  const onSubmit = (data: OtpFormData) => {
    console.log("OTP submitted:", data);
    // router.push("/home");
  };

  return (
    <div className="flex items-center max-h-screen h-full max-w-lg">
      <AnimatePresence mode="wait">
        <motion.div
          initial={{ opacity: 0, x: 50 }}
          animate={{ opacity: 1, x: 0 }}
          exit={{ opacity: 0, x: -50 }}
          transition={{ duration: 0.8 }}
          className="w-full h-full"
        >
          {/* Top content section */}
          <div className="font-poppins flex flex-col h-full pb-6">
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
                  <button className="text-primary font-semibold underline">
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
                    <div className="flex justify-between gap-4 mb-4">
                      {[0, 1, 2, 3].map((index) => (
                        <input
                          key={index}
                          type="text"
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
                          className="w-[75.5px] h-[56px] text-center opacity-100 rounded-[48px] border p-[20px] bg-white focus:border-[#128C7E] text-gray-800 focus:outline-none"
                        />
                      ))}
                    </div>
                  )}
                />
                {errors.otp && (
                  <p className="text-red-500 text-sm mb-4">
                    {errors.otp.message}
                  </p>
                )}
              </div>
              <div className="mt-auto">
                <div className="text-center text-[14px] text-[#101010] mb-4">
                  Didn’t receive code?&nbsp;
                  <a href="#" className="text-[#128C7E] font-medium">
                    Resend
                  </a>
                </div>

                {/* Bottom Button */}
                <button
                  type="submit"
                  className="w-full bg-[#128C7E] text-white p-4 rounded-full shadow-lg transition-all duration-300 transform hover:scale-102 flex items-start"
                >
                  <div className="px-4 flex items-center justify-between w-full">
                    <span>Verify</span>
                    <ArrowRight size={24} />
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
}
