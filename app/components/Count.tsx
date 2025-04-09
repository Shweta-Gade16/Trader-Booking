type CountProps = {
  label: string;
  value: number | string;
};

export default function Count({ label, value }: CountProps) {
  return (
    <div className="w-full h-auto bg-white border border-[#324A6D1A] rounded-[8px] px-4 sm:px-6 py-4 flex 
    items-center justify-between font-poppins font-medium text-[14px] sm:text-[16px] leading-[24px] text-[#324A6D]">
      <span>{label}</span>
      <span className="text-[16px] xs:text-[20px] sm:text-[24px] md:text-[28px] lg:text-[30px] xl:text-[30px] font-semibold 
      leading-[20px] xs:leading-[24px] sm:leading-[28px] md:leading-[32px] lg:leading-[36px] xl:leading-[40px]">
        {value}</span>
    </div>
  );
}
