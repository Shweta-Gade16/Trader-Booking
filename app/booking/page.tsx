'use client';

import React, { useState } from 'react';
import Sidebar from '@/app/components/SideBar';
import Count from '@/app/components/Count';
import { ChevronDown } from 'lucide-react';
import { dummyBookings } from '@/app/data/bookings';
import BookingList, { BookingType } from '@/app/components/BookingList';
import Button from '../components/Buttons';

export default function BookingPage() {
  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  const [sort] = useState<'date' | 'status'>('date');
  const bookings: BookingType[] = dummyBookings as unknown as BookingType[];

  const totalBookings = bookings.length;
  const completedSessions = bookings.filter((b) => b.status === 'completed').length;
  const totalMinutes = dummyBookings.reduce((total, booking) => {
    return total + parseInt(booking.duration, 10); 
  }, 0);
 const totalHours = `${Math.floor(totalMinutes / 60)} hr ${totalMinutes % 60} mins`;
  
  return (
    <div className="flex flex-row min-h-screen w-full overflow-hidden">
      <Sidebar />

      <main className="flex-1 flex flex-col px-4 py-6 sm:px-6 md:px-8 bg-[#F4F4F4] rounded-tl-[24px] md:rounded-tl-[40px] overflow-auto">     
        <div className="mb-6 sm:mb-8">
          <h3 className="font-poppins text-sm sm:text-[14px] text-[#324A6D]">Bookings</h3>
          <div className="border-b border-[#324A6D14] mt-2 pb-4 flex flex-col sm:flex-row justify-between items-start sm:items-center gap-4">
          <div>
            <h1 className="font-poppins font-semibold text-xl sm:text-2xl md:text-[30px] text-[#324A6D]">
              My Bookings
            </h1>
            <p className="font-poppins text-sm sm:text-[14px] text-[#324A6D] mt-1">
              View and manage your mentorship sessions. Stay on track with your learning journey.
            </p>
          </div>
          <Button text="Find a Mentor" />
        </div>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4 mb-6 w-full">
          <Count label="Total Bookings" value={totalBookings} />
          <Count label="Completed Sessions" value={completedSessions} />
          <Count label="Learning Hours" value={`${totalHours} `} />
        </div>

        <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center mb-4 gap-3 sm:gap-6 w-full">
          <h2 className="font-Poppins text-xl sm:text-2xl font-medium text-[#324A6D]">
            Booking List
          </h2>

          <div className="flex items-center gap-2 border border-[#324A6D40] bg-white rounded w-full sm:w-[160px] h-[45px] px-4 py-2 cursor-pointer">
            <span className="text-sm font-poppins text-[#324A6D]">Sort by: All</span>
            <ChevronDown size={16} className="text-[#324A6D]" />
          </div>
        </div>

        <div className="w-full overflow-x-auto">
          <BookingList bookings={bookings} />
        </div>
      </main>
    </div>
  );
}
