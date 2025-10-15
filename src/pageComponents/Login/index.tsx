import { Login } from "@/components/authPages/Login";
import React from "react";

const LoginPageContent: React.FC = () => {
  return (
    <div className="flex items-center justify-center h-full">
      <div className="flex items-center justify-center w-full relative overflow-hidden px-5 pt-10 h-full">
        <Login />
      </div>
    </div>
  );
};

export default LoginPageContent;
