import Sidebar from "@/app/components/SideBar";
export default function Home() {
  return (
    <div className="flex min-h-screen">
      <Sidebar />
      
      <div className="flex flex-1 flex-col p-8 bg-[#F4F4F4] rounded-tl-[40px]">

        <div className="mb-8">
          <h3 className="font-poppins font-normal text-[14px] leading-[20px] text-[#324A6D]">
            Dashboard
          </h3>
          <div className="border-b border-[#324A6D14] mt-2 pb-4">
            <h1 className="font-poppins font-semibold text-[30px] leading-[36px] text-[#324A6D]">
              Welcome,
            </h1>
            <p className="font-poppins font-normal text-[14px] leading-[20px] text-[#324A6D] mt-1">
              View and manage your mentorship sessions. Stay on track with your learning journey.
            </p>
          </div>
        </div>    
      </div>
    </div>
  );
}
