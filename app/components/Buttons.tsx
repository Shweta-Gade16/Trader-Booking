"use client";

import React from "react";

interface ButtonProps {
  text: string;
  onClick?: () => void;
  type?: "button" | "submit" | "reset";
  className?: string;
}

const Button: React.FC<ButtonProps> = ({ text, onClick, type = "button", className }) => {
  return (
    <button
      type={type}
      onClick={onClick}
      className={`w-[145px] h-[44px] gap-[8px] px-[24px] py-[12px] rounded-[4px] bg-[#9B59B6] text-white font-poppins font-semibold text-[14px] leading-[20px] ${className}`}
    >
      {text}
    </button>
  );
};

export default Button;
