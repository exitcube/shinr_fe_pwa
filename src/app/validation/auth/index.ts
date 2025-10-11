import { z } from "zod";

export const loginSchema = z.object({
  mobile: z
    .string()
    .regex(/^[0-9]{10}$/, "Enter a valid 10-digit mobile number"),
});

export type LoginFormData = z.infer<typeof loginSchema>;

// Zod schema for OTP validation
export const otpSchema = z.object({
  otp: z
    .string()
    .length(4, "OTP must be 4 digits")
    .regex(/^\d+$/, "OTP must contain only numbers"),
});

export type OtpFormData = z.infer<typeof otpSchema>;
