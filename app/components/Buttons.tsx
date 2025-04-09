"use client";

import React from "react";

interface ButtonProps {
  text: string;
  onClick?: () => void;
  type?: "button";
  className?: string;
}

const Button: React.FC<ButtonProps> = ({ text, onClick, type = "button", className }) => {
  return (
    <button
      type={type}
      onClick={onClick}
      className={`w-[120px] h-[40px] sm:w-[145px] sm:h-[44px] gap-[8px] px-[16px] sm:px-[24px] py-[8px] sm:py-[12px] rounded-[4px] bg-[#9B59B6] text-white font-poppins font-semibold text-[12px] sm:text-[14px] leading-[16px] sm:leading-[20px] ${className}`}
    >
      {text}
    </button>
  );
};

export default Button;
