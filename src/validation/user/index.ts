import { z } from "zod";

export const userAddressFormSchema = z.object({
  name: z.string().min(1, "Name is required"),
  nickName: z.string().optional(),
  address: z.string().min(1, "Address is required"),
  pincode: z.string().regex(/^\d{6}$/, "Pincode must be exactly 6 digits"),
  city: z.string().min(1, "City is required"),
  state: z.string().min(1, "State is required"),
  country: z.string().min(1, "Country is required"),
});

export type userAddressFormValues = z.infer<typeof userAddressFormSchema>;
