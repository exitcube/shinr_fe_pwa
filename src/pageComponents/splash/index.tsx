"use client";
import Image from "next/image";
import { useRouter } from "next/navigation";
import React, { useEffect } from "react";

const SplashScreen: React.FC = () => {
  const router = useRouter();

  useEffect(() => {
    const timer = setTimeout(() => {
      router.replace("/"); // Redirect to home after 2 seconds
    }, 2000);

    return () => clearTimeout(timer);
  }, [router]);

  return (
    <div className="w-full h-full flex flex-col justify-center items-center bg-landing-gradient">
      <Image
        src="/assets/images/sr-splash.png"
        alt="Logo"
        width={156}
        height={54}
        className="h-auto w-auto"
      />
    </div>
  );
};

export default SplashScreen;
