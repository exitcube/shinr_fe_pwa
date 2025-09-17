import { Login } from "@/components/authPages/Login";
import React from "react";

const LoginPageContent: React.FC = () => {
  return (
    <div className="flex items-center justify-center">
      <div className="w-[375px] h-[90vh] relative overflow-hidden">
        <Login />
      </div>
    </div>
  );
};

export default LoginPageContent;
