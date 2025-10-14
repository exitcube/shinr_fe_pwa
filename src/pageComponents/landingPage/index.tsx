"use client";

import { LandingPageContent } from "@/components/LandingPageContent";
import { useEffect, useState } from "react";
import SplashScreen from "../splash";

export const LandingPage: React.FC = () => {
  const [showSplash, setShowSplash] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => setShowSplash(false), 1500);
    return () => clearTimeout(timer);
  }, []);

  return <>{showSplash ? <SplashScreen /> : <LandingPageContent />}</>;
};
