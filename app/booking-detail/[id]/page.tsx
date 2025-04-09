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
import { JoinSessionButton } from '@/app/components/JoinSession';
import { MessageButton } from '@/app/components/MessageButton';

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
    <div className="flex flex-row min-h-screen  w-full overflow-hidden">
        <SideBar />
      <div className="flex flex-1 flex-col p-4 md:p-8 bg-[#F4F4F4] rounded-tl-[40px] min-h-screen overflow-auto">
        <div className="mb-4">
          <div className="flex items-center gap-2 mb-2">
            <h3 className="font-poppins text-sm text-[#324A6D]">
              Bookings / {booking.mentor}
            </h3>
          </div>
          <div className="border-b border-[#324A6D14] mt-2 pb-4">
            <h1 className="font-poppins font-semibold text-2xl md:text-3xl text-[#324A6D]">
              Welcome,
            </h1>
            <p className="font-poppins text-sm text-[#324A6D] mt-1">
              View and manage your mentorship sessions. Stay on track with your learning journey.
            </p>
          </div>
        </div>
        <button
          aria-label="Go back"
          className="flex items-center gap-2 mb-4"
          onClick={() => router.push('/booking')}
        >
          <LuArrowLeft size={24} className="text-[#324A6D]" />
          <span className="text-[#324A6D] font-poppins font-semibold text-lg md:text-xl">
            Booking Details
          </span>
        </button>
        <div className="bg-white rounded-lg p-4 md:p-6 flex flex-col gap-6">
          <div className="flex flex-wrap justify-between items-start gap-6">
            <div className="flex items-start gap-4">
              <div className="w-20 h-24 overflow-hidden rounded-lg border border-[#e2e5ea]">
                <Image
                  src={booking.mentorImage || '/images/default-mentor.jpg'}
                  alt={`${booking.mentor}'s profile`}
                  width={80}
                  height={100}
                  className="object-cover"
                />
              </div>
              <div>
                <div className="flex items-center gap-3">
                  <span className="text-[#324A6D] font-poppins font-semibold text-sm">
                    Mentor: {booking.mentor}
                  </span>
                  <div className="bg-gradient-to-r from-[#C47F35] to-[#7C4D17] px-2 py-1 rounded-full">
                    <span className="text-white text-xs">Newcomer</span>
                  </div>
                </div>
                <div className="flex items-center gap-3"></div>
                <div className="text-[#324A6D] font-poppins text-sm flex items-center gap-2">
                  Session: {booking.session}
                  <span className="text-[#324A6D] font-poppins text-sm">
                    <StatusBadge status={booking.status} />
                  </span>
                </div>              
                <p className="text-[#324A6D] font-poppins text-sm">Price: $15</p>
              </div>
            </div>
            <div className="flex flex-col gap-2">
              <JoinSessionButton text={'Join Session'} />
              <MessageButton text="Message Mentor" />
            </div>
          </div>
          <div className="flex flex-wrap gap-6">
            <div className="flex-1">
              <p className="text-[#324A6D] opacity-75">Booking Date:</p>
              <p className="font-medium text-[#324A6D]">{booking.date}</p>
            </div>
            <div className="flex-1">
              <p className="text-[#324A6D] opacity-75">Duration:</p>
              <p className="font-medium text-[#324A6D]">{booking.duration} mins</p>
            </div>
          </div>
          <div className="flex flex-wrap gap-6">
            <div className="flex-1">
              <p className="text-[#324A6D] opacity-75">Session Date & Time:</p>
              <p className="font-medium text-[#324A6D]">
                {booking.date} - {booking.time}
              </p>
            </div>
            <div className="flex-1">
              <p className="text-[#324A6D] opacity-75">Session Status:</p>
              <p className="font-medium text-[#324A6D]">{booking.status}</p>
            </div>
          </div>
        </div>
        <PaymentDetail paymentDetails={booking.paymentDetails} />
      </div>
    </div>
  );
}
