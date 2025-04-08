type CountProps = {
  label: string;
  value: number | string;
};

export default function Count({ label, value }: CountProps) {
  return (
    <div className="w-full h-[86px] bg-white border border-[#324A6D1A] rounded-[8px] px-4 sm:px-6 py-4 flex items-center justify-between font-poppins font-medium text-[14px] sm:text-[16px] leading-[24px] text-[#324A6D]">
      <span>{label}</span>
      <span className="text-[24px] sm:text-[30px] font-semibold leading-[32px] sm:leading-[38px]">{value}</span>
    </div>
  );
}
