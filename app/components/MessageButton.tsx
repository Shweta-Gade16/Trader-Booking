import React from 'react';

interface MessageButtonProps {
  text: string;
  onClick?: () => void;
}

export const MessageButton: React.FC<MessageButtonProps> = ({ text, onClick }) => {
  return (
    <button
      onClick={onClick}
      className="w-[180px] h-[36px] px-6 py-2 flex items-center justify-center gap-2 rounded-md border 
      border-[#324A6D26] bg-white text-[#324A6D] font-poppins font-semibold text-[14px] leading-[20px] "
    >
      {text}
    </button>
  );
};
