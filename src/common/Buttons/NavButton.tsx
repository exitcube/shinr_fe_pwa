import { ArrowRight } from "lucide-react";
import React from "react";
import { ClipLoader } from "react-spinners";

const NavButton: React.FC<IProps> = (props) => {
  const { title, className = "", isLoading = false, ...rest } = props;
  return (
    <button
      className={`bg-primary rounded-full w-full flex items-center justify-between px-5 py-2.5 ${className}`}
      {...rest}
    >
      <span className="text-white font-medium font-poppins text-base">
        {title}
      </span>
      {isLoading ? (
        <ClipLoader color="#ffffff" size={20} />
      ) : (
        <ArrowRight color="white" />
      )}
    </button>
  );
};

export default NavButton;

interface IProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  title: string;
  isLoading?: boolean;
}
