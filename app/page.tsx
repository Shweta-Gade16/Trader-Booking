import Sidebar from "@/app/components/SideBar";
import HeaderText from "./components/HeaderText";
export default function Home() {
  return (
    <div className="flex min-h-screen">
      <Sidebar />  
      <div className="flex flex-1 flex-col p-8 bg-[#F4F4F4] rounded-tl-[40px] mt-4">
      <HeaderText
        title="Dashboard"
        subtitle="Welcome,"
        description="View and manage your mentorship sessions. Stay on track with your learning journey."
      />    
      </div>
    </div>
  );
}
