import { ArrowRight } from "lucide-react";
import React from "react";

const NavButton: React.FC<IProps> = (props) => {
  const { title, className = "", ...rest } = props;
  return (
    <button
      className={`bg-primary rounded-full w-full flex items-center justify-between px-5 py-2.5 ${className}`}
      {...rest}
    >
      <span className="text-white font-medium font-poppins text-base">
        {title}
      </span>
      <ArrowRight color="white" />
    </button>
  );
};

export default NavButton;

interface IProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  title: string;
}
