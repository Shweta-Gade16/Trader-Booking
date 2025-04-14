import React from "react";

type HeaderTextProps = {
  title: string;
  subtitle: string;
  description: string;
};

const HeaderText: React.FC<HeaderTextProps> = ({ title, subtitle, description }) => {
  return (
    <div className="mb-2">
      <h3 className="font-poppins font-normal text-[14px] leading-[20px] text-[#324A6D]">
        {title}
      </h3>
      <div className="border-b border-[#324A6D14] mt-2 pb-4">
        <h1 className="font-poppins font-semibold text-[30px] leading-[36px] text-[#324A6D]">
          {subtitle}
        </h1>
        <p className="font-poppins font-normal text-[14px] leading-[20px] text-[#324A6D] mt-1">
          {description}
        </p>
      </div>
    </div>
  );
};

export default HeaderText;
