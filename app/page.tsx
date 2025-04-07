import Sidebar from "@/app/components/SideBar";
import Button from "@/app/components/Buttons"
export default function Home() {
  return (
    <div className="flex min-h-screen">
      <Sidebar />
      
      <div className="flex flex-1 flex-col p-8 bg-[#F4F4F4] rounded-tl-[40px]">

        <div className="mb-8">
          <h3 className="font-poppins font-normal text-[14px] leading-[20px] text-[#324A6D]">
            Bookings
          </h3>
          <div className="border-b border-[#324A6D14] mt-2 pb-4">
            <h1 className="font-poppins font-semibold text-[30px] leading-[36px] text-[#324A6D]">
              My Bookings
            </h1>
            <p className="font-poppins font-normal text-[14px] leading-[20px] text-[#324A6D] mt-1">
              View and manage your mentorship sessions. Stay on track with your learning journey.
            </p>
          </div>
        </div>

        <div className="flex flex-1 items-center justify-center">
          <div className="max-w-[576px] w-full flex flex-col items-center gap-4 pt-8 pb-8">
            <p className="font-poppins font-medium text-[24px] leading-[32px] text-center text-[#324A6D]">
              You haven’t booked any sessions yet.
            </p>
            <p className="font-poppins font-normal text-[18px] leading-[28px] text-center text-[#324A6D]">
              You haven’t booked any sessions yet. Find the right mentor and start learning today!
            </p>
            <Button text="Find a Mentor" />
          </div>
        </div>
      </div>
    </div>
  );
}
