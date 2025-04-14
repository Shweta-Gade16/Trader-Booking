'use client';

import { useEffect, useState, useCallback } from 'react';
import Image from 'next/image';
import { BookingType } from '@/app/components/BookingList';
import { dummyBookings } from '@/app/data/bookings';
import SideBar from '@/app/components/SideBar';
import { LuArrowLeft } from 'react-icons/lu';
import { useRouter, useParams } from 'next/navigation'; 
import { JoinSessionButton } from '@/app/components/JoinSession';
import { MessageButton } from '@/app/components/MessageButton';
import ReviewCard from '@/app/components/reviewCard';
import HeaderText from '@/app/components/HeaderText';

export default function BookingDetail() {
  const router = useRouter();
  const params = useParams(); 
  const [booking, setBooking] = useState<BookingType | null>(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    if (params.id) {
      const selectedBooking = dummyBookings.find((b) => b.id === params.id);
      setBooking(selectedBooking || null);
      setLoading(false);
    }
  }, [params.id]);

  const goToReviews = useCallback(() => router.push('/reviews'), [router]);

  if (loading) {
    return (
      <div className="flex items-center justify-center min-h-screen">
        <p className="text-gray-600">Loading details...</p>
      </div>
    );
  }

  if (!booking) {
    return (
      <div className="flex items-center justify-center min-h-screen">
        <p className="text-gray-600">No booking details found.</p>
      </div>
    );
  }

  const { reviewDetails, mentor, session, date, mentorImage } = booking;

  return (
    <div className="flex flex-row min-h-screen w-full overflow-hidden">
      <SideBar />
      <div className="flex-1 flex flex-col p-4 md:p-8 bg-[#F4F4F4] rounded-tl-[40px] overflow-auto">
        <div className="mb-4">
          <h3 className="font-poppins text-[14px] text-[#324A6D]">Reviews / {mentor}</h3>
          <HeaderText
        title=""
        subtitle="Your Reviews on Mentors"
        description="View all the reviews you've submitted. Pending reviews will be published once approved by our team."
      />
        </div>
        <button
          aria-label="Go back"
          className="flex items-center gap-2 mb-4"
          onClick={goToReviews}
        >
          <LuArrowLeft size={24} className="text-[#324A6D]" />
          <span className="text-[#324A6D] font-poppins font-semibold text-lg md:text-xl">
            Review Details
          </span>
        </button>
        <div className="bg-white rounded-lg p-4 md:p-6 flex flex-col gap-6">
          <div className="flex flex-wrap justify-between items-start gap-6">
            <div className="flex items-start gap-4">
              <div className="w-20 h-24 overflow-hidden rounded-lg border border-[#e2e5ea]">
                <Image
                  src={mentorImage || '/images/default-mentor.jpg'}
                  alt={`${mentor}'s profile`}
                  width={80}
                  height={100}
                  className="object-cover"
                />
              </div>
              <div>
                <div className="flex flex-col gap-4">
                <h2 className="text-[#324A6D] font-poppins font-semibold text-[18px] flex items-center gap-2">
                {mentor}
                <span className="bg-gradient-to-r from-[#C47F35] to-[#7C4D17] px-2 py-1 rounded-full text-white font-poppins font-semibold text-[10px] leading-[1] tracking-normal align-middle
              ">
                  Newcomer
                </span>
              </h2>      
                  <p className="text-[#324A6D]">
                    <span className='opacity-75 font-normal text-[14px] font-Poppins'>Date Submitted: </span> 
                    <span className='font-medium text-[16px] font-Poppins'>
                      {date}</span>
                  </p>
                  <p className="text-[#324A6D]">
                    <span className='opacity-75 font-normal text-[14px] font-Poppins'>Session Name: </span> 
                    <span className='font-medium text-[16px] font-Poppins'>
                      {session}</span>
                  </p>
                </div>
              </div>
            </div>
            <div className="flex flex-col gap-2">
              <JoinSessionButton text="View Mentor" />
              <MessageButton text="Message Mentor" />
            </div>
          </div>
          {reviewDetails ? (
            <ReviewCard reviewDetails={reviewDetails} />
          ) : (
            <p className="text-gray-600">No reviews available for this booking.</p>
          )}
        </div>
      </div>
    </div>
  );
}
