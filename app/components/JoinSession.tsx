import React from 'react';

interface JoinSessionButtonProps {
  text: string;
  onClick?: () => void;
}

export const JoinSessionButton: React.FC<JoinSessionButtonProps> = ({ text, onClick }) => {
  return (
    <button
      onClick={onClick}
      className="w-[180px] h-[36px] px-6 py-2 flex items-center justify-center gap-2 rounded-md 
      border border-transparent bg-[#9B59B6] text-white font-poppins font-semibold text-[14px] leading-[20px]"
    >
      {text}
    </button>
  );
};
