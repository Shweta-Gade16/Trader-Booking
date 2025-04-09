'use client';

import { use, useEffect, useState } from 'react';
import Image from 'next/image';
import { BookingType } from '@/app/components/BookingList';
import { dummyBookings } from '@/app/data/bookings';
import SideBar from '@/app/components/SideBar';
import { LuArrowLeft } from 'react-icons/lu';
import { useRouter } from 'next/navigation';
import StatusBadge from '@/app/components/SessionStatus';
import PaymentDetail from '@/app/components/PaymentDetail';

export default function BookingDetail({ params }: { params: Promise<{ id: string }> }) {
        const resolvedParams = use(params); 
        const { id } = resolvedParams;
        const router = useRouter();
        const [booking, setBooking] = useState<BookingType | null>(null);

        useEffect(() => {
          const selectedBooking = dummyBookings.find((b) => b.id === id);
          if (selectedBooking) {
            setBooking({
              ...selectedBooking,
              duration: parseInt(selectedBooking.duration.trim(), 10), 
            });
          } else {
            setBooking(null);
          }
        }, [id]);
        

        if (!booking) {
          return (
            <div className="flex items-center justify-center min-h-screen">
              <p className="text-gray-600">Loading booking details...</p>
            </div>
          );
        }

        return (
      <div className="flex min-h-screen">
      <SideBar />
      <div className="flex flex-1 flex-col p-8 bg-[#F4F4F4] rounded-tl-[40px] ">
        <div className="mb-2">
          <div className="flex items-center gap-2 mb-2">
            <h3 className="font-poppins font-normal text-[14px] leading-[20px] text-[#324A6D]">
              Bookings / {booking.mentor}
            </h3>
          </div>
          <div className="border-b border-[#324A6D14] mt-2 pb-4">
            <h1 className="font-poppins font-semibold text-[30px] leading-[36px] text-[#324A6D]">
              Welcome,
            </h1>
            <p className="font-poppins font-normal text-[14px] leading-[20px] text-[#324A6D] mt-1">
              View and manage your mentorship sessions. Stay on track with your learning journey.
            </p>
          </div>
        </div>
        <button
          aria-label="Go back"
          className="flex items-center gap-2 "
          onClick={() => router.push('/booking')}
        >
          <LuArrowLeft size={24} className="text-[#324A6D]" />
          <span className="text-[#324A6D] font-poppins font-semibold text-[20px] leading-[30px] pb-2">
            Booking Details
          </span>
        </button>

        <div className="w-[1096px] h-[310px] rounded-[8px] p-[24px] flex flex-col gap-[32px] bg-white">

          <div className="w-[1048px] h-[100px] flex justify-between items-start">
            <div className="w-[577px] h-[100px] flex gap-[24px]">
              <div className="w-[91px] h-[100px] overflow-hidden rounded-lg border border-[#e2e5ea]">
                <Image
                  src={booking.mentorImage || '/images/default-mentor.jpg'}
                  alt={`${booking.mentor}'s profile`}
                  width={91}
                  height={100}
                  className="object-cover"
                />
              </div>

              <div className="flex flex-col justify-between w-[462px] h-[92px] gap-[8px]">
                <div className="flex items-center gap-[12px] w-full h-[28px]">
                  <span className="text-[#324A6D] font-poppins font-semibold text-[14px] leading-[20px]">
                    Mentor: {booking.mentor}
                  </span>
                  <div
                    className="flex items-center justify-center gap-1 w-[72px] h-[18px] px-2 py-1 rounded-full"
                    style={{
                      background: 'linear-gradient(86.02deg, #C47F35 0%, #7C4D17 100%)',
                    }}
                  >
                    <span className="text-white font-poppins font-medium text-[8px] leading-[12px]">
                      Newcomer
                    </span>
                  </div>
                </div>

                <div className="flex items-center  w-full h-[24px] gap-[12px]">
                  <span className="text-[#324A6D] font-poppins font-medium text-[14px] leading-[20px]">
                    Session: {booking.session}
                  </span>
                  <StatusBadge status={booking.status} />
                </div>

                <div className="w-[139px] h-[24px]">
                  <span className="text-[#324A6D] font-poppins font-medium text-[14px] leading-[20px]">
                    Price: $15
                  </span>
                </div>
              </div>
            </div>
          </div>
          <div className="w-[1048px] h-[136px] flex gap-[24px]">
          <div className="w-[1048px] h-[56px] flex gap-[24px]">
          <div className="w-[400px] h-[56px] flex flex-col gap-[12px]">
          <p
            className="w-[400px] h-[20px] font-poppins font-normal text-[14px] leading-[20px] text-[#324A6D] opacity-75"
          >
            Booking Date:
          </p>
          <p
            className="w-[400px] h-[24px] font-poppins font-medium text-[16px] leading-[24px] text-[#324A6D]"
          >
            {booking.date}
          </p>
        </div>
        <div className="w-[400px] h-[56px] flex flex-col gap-[12px]">
          <p
            className="w-[400px] h-[20px] font-poppins font-normal text-[14px] leading-[20px] text-[#324A6D] opacity-75"
          >
            Duration:
          </p>
          <p
            className="w-[400px] h-[24px] font-poppins font-medium text-[16px] leading-[24px] text-[#324A6D]"
          >
            {booking.duration} mins
          </p>
          </div>
       </div>
       </div>
          <div className="w-[1048px] h-[56px] flex gap-[24px]">
          <div className="w-[400px] h-[56px] flex flex-col gap-[12px]">
          <p
            className="w-[400px] h-[20px] font-poppins font-normal text-[14px] leading-[20px] text-[#324A6D] opacity-75"
          >
            Session Date & Time::
          </p>
          <p
            className="w-[400px] h-[24px] font-poppins font-medium text-[16px] leading-[24px] text-[#324A6D]"
          >
          {booking.date} - {booking.time}
          </p>
        </div>
        <div className="w-[400px] h-[56px] flex flex-col gap-[12px]">
          <p
            className="w-[400px] h-[20px] font-poppins font-normal text-[14px] leading-[20px] text-[#324A6D] opacity-75"
          >
            Session Status:
          </p>
          <p
            className="w-[400px] h-[24px] font-poppins font-medium text-[16px] leading-[24px] text-[#324A6D]"
          >
            {booking.status}
          </p>
        </div>
      </div>     
    </div>
    <PaymentDetail/>
  </div>            
  </div>
  );
}
