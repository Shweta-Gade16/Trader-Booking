import { NextPage } from "next";
import HeaderText from "../components/HeaderText"; 
import SideBar from "../components/SideBar";

const Profile: NextPage = () => {
  return (
    <div className="flex min-h-screen">
    <SideBar/>
    <div className="flex flex-1 flex-col p-8 bg-[#F4F4F4] rounded-tl-[40px] mt-4">
    <HeaderText
        title="Profile"
        subtitle="Profile Details,"
        description="View and manage your mentorship sessions. Stay on track with your learning journey."
      />
    </div>
    </div>
  );
};

export default Profile;
