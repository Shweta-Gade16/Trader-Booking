'use client';

import Image from 'next/image';
import Link from 'next/link';
import { FiBell, FiLogOut } from 'react-icons/fi';
import { LuMessageSquareText } from 'react-icons/lu';

type NavItem = {
  label: string;
  icon: string;
  hoverIcon: string;
  href: string;
};

const navItems: NavItem[] = [
  {
    label: 'Dashboard',
    icon: '/bar-chart-square-02.png',
    hoverIcon: '/Dashboard_p.png',
    href: '/dashboard',
  },
  {
    label: 'Profile',
    icon: '/user-01.png',
    hoverIcon: '/user-01_p.png',
    href: '/profile',
  },
  {
    label: 'Bookings',
    icon: '/Booking.png',
    hoverIcon: '/Booking_p.png',
    href: '/booking',

  },
  {
    label: 'Reviews',
    icon: '/star-01.png',
    hoverIcon: '/star-01_p.png',
    href: '/reviews',
  },
];

const SidebarItem = ({ label, icon, hoverIcon, href }: NavItem) => (
  <Link
    href={href}
    className="w-full h-[40px] flex items-center gap-[5px] rounded px-2 group hover:bg-[#9B59B61A] transition cursor-pointer justify-center md:justify-start"
  >
    <div className="w-[40px] h-[40px] p-[8px] rounded-[4px] flex items-center justify-center relative">
      <Image
        src={icon}
        alt={`${label} icon`}
        width={24}
        height={24}
        className="absolute group-hover:opacity-0 transition-opacity"
      />
      <Image
        src={hoverIcon}
        alt={`${label} hover icon`}
        width={24}
        height={24}
        className="opacity-0 group-hover:opacity-100 transition-opacity"
      />
    </div>
    <span className="hidden md:block w-[140px] h-[20px] font-normal text-[14px] leading-[20px] text-[#324A6D] group-hover:text-[#9B59B6] font-poppins">
      {label}
    </span>
  </Link>
);

const Sidebar = () => {
  return (
    <aside className="w-[72px] md:w-[280px] min-h-screen bg-white  overflow-hidden flex flex-col gap-[12px] transition-all">

      <div className="pt-[12px] flex flex-col gap-[12px]">
        <div className="w-full h-[40px] px-[16px] flex items-center justify-center md:justify-start gap-[8px]">

          <div className="w-[40px] h-[40px] relative md:hidden">
            <Image src="/logo.png" alt="Logo" fill className="object-contain" priority />
          </div>

          <div className="w-[103px] h-[26px] relative hidden md:block">
            <Image src="/image 6.png" alt="Logo" fill className="object-contain" priority />
          </div>
        </div>

        <nav className="px-[8px] md:px-[16px] flex flex-col gap-[6px]">
          {navItems.map((item, index) => (
            <SidebarItem key={index} {...item} />
          ))}
        </nav>
      </div>

      <div className="mt-auto px-[8px] md:px-[16px] pb-[42px] flex flex-col gap-[16px]">
        <Link
          href="/messages"
          className="flex items-center gap-[8px] group hover:bg-[#9B59B61A] p-2 rounded justify-center md:justify-start"
        >
          <LuMessageSquareText className="text-[#8492A7] group-hover:text-[#9B59B6]" size={24} />
          <span className="hidden md:block text-[14px] text-[#324A6D] group-hover:text-[#9B59B6] font-poppins">
            Messages
          </span>
        </Link>
        <Link
          href="/notifications"
          className="flex items-center gap-[8px] group hover:bg-[#9B59B61A] p-2 rounded justify-center md:justify-start"
        >
          <FiBell className="text-[#8492A7] group-hover:text-[#9B59B6]" size={24} />
          <span className="hidden md:block text-[14px] text-[#324A6D] group-hover:text-[#9B59B6] font-poppins">
            Notifications
          </span>
        </Link>
        <Link
          href="/logout"
          className="flex items-center gap-[8px] group hover:bg-[#9B59B61A] p-2 rounded justify-center md:justify-start"
        >
          <FiLogOut className="text-[#8492A7] group-hover:text-[#EF4444]" size={24} />
          <span className="hidden md:block text-[14px] text-[#324A6D] group-hover:text-[#9B59B6] font-poppins">
            Logout
          </span>
        </Link>
      </div>
    </aside>
  );
};

export default Sidebar;
