import { ArrowLeft } from "lucide-react";
import React from "react";

const BackButtons: React.FC<React.ButtonHTMLAttributes<HTMLButtonElement>> = (
  props
) => {
  const { className = "", ...rest } = props;
  return (
    <button className={`bg-white rounded-full p-2 ${className}`} {...rest}>
      <ArrowLeft color="black" />
    </button>
  );
};

export default BackButtons;
