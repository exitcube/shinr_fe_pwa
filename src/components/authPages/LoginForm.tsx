import { LoginFormData, loginSchema } from "@/validation/auth";
import { ILoginPayload } from "@/types/auth";
import { zodResolver } from "@hookform/resolvers/zod";
import { AnimatePresence, motion } from "framer-motion";
import { ArrowRight } from "lucide-react";
import Image from "next/image";
import React from "react";
import { useForm } from "react-hook-form";
import { ClipLoader } from "react-spinners";

const LoginForm: React.FC<IProps> = ({
  handleLogin,
  isPending,
  mobile,
  setMobile,
}) => {
  const {
    handleSubmit,
    setValue,
    formState: { errors, isSubmitting },
  } = useForm<LoginFormData>({
    resolver: zodResolver(loginSchema),
  });

  const handlePhoneChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const formatted = formatPhone(e.target.value);
    setMobile(formatted);
    const rawPhone = e.target.value.replace(/\s/g, "");
    setValue("mobile", rawPhone);
  };

  const onSubmit = (data: LoginFormData) => {
    handleLogin(data);
  };

  return (
    <div
      className="flex items-center max-h-screen h-full max-w-lg"
      style={{ background: "#F5F5F5" }}
    >
      <AnimatePresence mode="wait">
        <motion.div
          initial={{ opacity: 0, x: 50 }}
          animate={{ opacity: 1, x: 0 }}
          exit={{ opacity: 0, x: -50 }}
          transition={{ duration: 0.8 }}
          className="w-full h-full"
        >
          {/* App Content Area */}
          <form
            onSubmit={handleSubmit(onSubmit)}
            className="relative flex flex-col items-center justify-between h-full font-poppins w-full"
          >
            {/* Main Text Content */}
            <div className="text-left w-full mb-8">
              <h1 className="text-xl font-medium text-[#101010] mb-2">
                Enter Your Mobile Number
              </h1>
              <p className="text-sm text-[#878787] leading-relaxed">
                We&apos;ll send you a one-time password (OTP) to verify
                it&apos;s you.
              </p>
            </div>

            {/* Mobile Number Input Field */}
            <div className="w-full mb-auto">
              <div className="flex items-center justify-center bg-white rounded-full px-4 py-3 border border-gray-200 w-full overflow-hidden">
                {/* Checkbox Icon (simplified SVG for visual representation) */}
                <div className="mr-2">
                  <Image
                    src="/assets/icons/phoneIcon.svg"
                    alt="icon"
                    width={24}
                    height={24}
                  />
                </div>
                {mobile && (
                  <span className="text-gray-800 mr-2 flex-shrink-0">+91</span>
                )}
                <input
                  type="tel"
                  placeholder="Your mobile number"
                  value={mobile}
                  onChange={handlePhoneChange}
                  className="flex-grow bg-transparent outline-none text-lg text-gray-800 placeholder-gray-500"
                  maxLength={13} // includes spaces
                />
                {/* Green Icon */}
                <div className="w-6 h-6ml-3">
                  <Image
                    src="/assets/icons/greenTick.svg"
                    alt="icon"
                    width={24}
                    height={24}
                  />
                </div>
              </div>
              {/* Error message */}
              {errors.mobile && (
                <p className="text-red-500 text-sm mt-2 text-center">
                  {errors.mobile.message}
                </p>
              )}
            </div>

            {/* Get OTP Button */}
            <button
              type="submit"
              disabled={isPending || isSubmitting}
              className={`w-full py-4 bg-[#128C7E] text-white rounded-full shadow-lg transition-all duration-300 transform flex items-center justify-between px-6 mb-6`}
            >
              <span className="mr-2">Get OTP</span>
              {isPending ? (
                <ClipLoader color="#ffffff" size={20} />
              ) : (
                <ArrowRight size={24} />
              )}
            </button>
          </form>
        </motion.div>
      </AnimatePresence>
    </div>
  );
};

export default LoginForm;

interface IProps {
  handleLogin: (payload: ILoginPayload) => Promise<void>;
  isPending: boolean;
  mobile: string;
  setMobile: React.Dispatch<React.SetStateAction<string>>;
}

// ✅ Format function (adds spaces like 988 776 5544)
const formatPhone = (value: string) => {
  const digits = value.replace(/\D/g, "");
  const match = digits.match(/^(\d{0,3})(\d{0,3})(\d{0,4})$/);
  if (!match) return value;
  return [match[1], match[2], match[3]].filter(Boolean).join(" ");
};
