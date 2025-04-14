'use client';

import { useEffect, useState } from 'react';
import Image from 'next/image';
import { useRouter, useParams } from 'next/navigation';
import { LuArrowLeft } from 'react-icons/lu';
import SideBar from '@/app/components/SideBar';
import StatusBadge, { StatusBadgeProps } from '@/app/components/SessionStatus';
import PaymentDetail from '@/app/components/PaymentDetail';
import { JoinSessionButton } from '@/app/components/JoinSession';
import { MessageButton } from '@/app/components/MessageButton';
import ReviewCard from '@/app/components/reviewCard';
import { dummyBookings } from '@/app/data/bookings';
import { BookingType } from '@/app/components/BookingList';
import { ReviewType } from '@/app/components/ReviewList';
import HeaderText from '@/app/components/HeaderText';
import { HiOutlineMail } from 'react-icons/hi';

const BookingDetail = () => {
  const router = useRouter();
  const { id } = useParams();
  const [booking, setBooking] = useState<BookingType | null>(null);
  const [reviewDetails, setReviewDetails] = useState<ReviewType['reviewDetails'] | null>(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchData = async () => {
      try {
        if (id) {
          const selectedBooking = dummyBookings.find((b) => b.id === id) || null;
          setBooking(selectedBooking);

          if (selectedBooking?.reviewDetails) {
            setReviewDetails({
              ...selectedBooking.reviewDetails,
              date: selectedBooking.date || new Date().toISOString(),
            });
          }
        }
      } catch (error) {
        console.error('Error fetching booking or review details:', error);
      } finally {
        setLoading(false);
      }
    };

    if (id) {
      fetchData();
    }
  }, [id]);

  if (loading) {
    return (
      <div className="flex items-center justify-center min-h-screen">
        <p className="text-gray-600">Loading booking details...</p>
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

  if (booking.status === 'cancelled') {
    return (
      <div className="flex flex-row min-h-screen w-full overflow-hidden">
        <SideBar />
        <div className="flex-1 flex flex-col p-4 md:p-8 bg-[#F4F4F4] rounded-tl-[40px] overflow-auto">
          <div className="mb-2">
            <div className="flex items-center gap-2 ">
              <h3 className="font-poppins text-sm text-[#324A6D]">
                Bookings / {booking.mentor}
              </h3>
            </div>
            <HeaderText
              title=""
              subtitle="My Booking"
              description="View and manage your mentorship sessions. Stay on track with your learning journey."
            />
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
                  alt={`${booking.mentor || 'Mentor'}'s profile`}
                  width={80}
                  height={100}
                  className="object-cover"
                />
              </div>
              <div>
                <div className="flex items-center gap-3">
                  <span className="text-[#324A6D] font-Poppins font-semibold text-[18px] leading-[28px] tracking-normal">
                    {booking.mentor}
                  </span>
                  <div className="bg-gradient-to-r from-[#C47F35] to-[#7C4D17] px-2 py-1 rounded-full">
                    <span className="text-white text-xs">Newcomer</span>
                  </div>
                </div>
                <div className="text-[#324A6D] font-Poppins text-[14px] leading-[20px] tracking-normal  flex items-center gap-2">
                    <span className='opacity-75'>Session:</span>
                    <span className="text-[16px] leading-[24px] tracking-normal font-medium">
                      {booking.session}
                    </span>
                    <StatusBadge status={booking.status} />
                  </div>
                  <p className="text-[#324A6D] font-Poppins text-[14px] leading-[20px] tracking-normal  flex items-center gap-2">
                    <span className='opacity-75'>Refund:</span>
                    <StatusBadge
                      status={booking.paymentDetails.paymentStatus.toLowerCase() as StatusBadgeProps['status']}
                    />
                  </p>
                </div>
              </div>
            </div>
            <div className="flex flex-wrap gap-6">     
              <div className="flex-1 px-2 pr-7 gap-[24px] ">
                <p className="text-[#324A6D] opacity-75">Reason for Cancellation:</p>
                <p className="font-medium font-Inter text-[16px] leading-[24px] tracking-normal text-[#324A6D] mt-2">{booking.cancellationReason || 'Not provided'}</p>
              </div>
            </div>
            </div>
           <>
           <div className="flex gap-6">
        <div className="w-full h-auto p-6 rounded-lg bg-white  mt-5">
          <p className="font-Poppins font-semibold text-[16px] leading-[24px] tracking-normal text-[#324A6D]">
            Session Details
          </p>
          <div className="flex flex-wrap gap-[24px] mt-5">
            <div className="flex-1">
              <p className="text-[#324A6D] font-normal text-[14px] leading-[20px] tracking-normal opacity-75">Booking Date:</p>
              <p className="font-medium text-[16px] leading-[24px] tracking-normal text-[#324A6D]">{booking.date}</p>
            </div>
            <div className="flex-1">
              <p className="text-[#324A6D] font-normal text-[14px] leading-[20px] tracking-normal opacity-75">Duration:</p>
              <p className="font-medium text-[16px] leading-[24px] tracking-normal text-[#324A6D]">{booking.duration} mins</p>
            </div>
          </div>
          <div className="flex flex-wrap gap-6 mt-4">
            <div className="flex-1">
              <p className="text-[#324A6D] font-normal text-[14px] leading-[20px] tracking-normal opacity-75">Session Date & Time:</p>
              <p className="font-medium text-[16px] leading-[24px] tracking-normal text-[#324A6D]">
                {booking.date} - {booking.time}
              </p>
            </div>
            <div className="flex-1">
              <p className="text-[#324A6D] font-normal text-[14px] leading-[20px] tracking-normal opacity-75">Session Status:</p>
              <p className="font-medium text-[16px] leading-[24px] tracking-normal text-[#324A6D]">{booking.status}</p>
            </div>
          </div>
        </div>

        <div className="w-[374px] h-auto p-6 rounded-lg bg-white flex flex-col justify-between mt-5">
          <p className="font-Poppins font-semibold text-[18px] leading-[28px] tracking-normal text-[#324A6D]">
            Need Help? Contact Us
          </p>
          <div className="mt-4">
            <p className="text-[#324A6D] font-normal text-[14px] leading-[20px] opacity-80">
              For any queries, you can contact the admin at:
            </p>
            <ul className="mt-4">
              <li className="flex items-center gap-2">
                <span className="text-[#667085] text-2xl  "><HiOutlineMail /></span>
                <p className="text-[#324A6D] font-medium font-Poppins text-[14px] leading-[20px]">
                  support@bullmentor.com
                </p>
              </li>
            </ul>
          </div>
          <button className="mt-4 w-[326px] h-[44px] py-[12px] px-[24px] gap-[8px] rounded-[4px] bg-[#9B59B6] text-white">
              Copy Email
          </button>
        </div>
      </div>
      </>
      <>
      <PaymentDetail paymentDetails={booking.paymentDetails} />      
      </>
      </div>     
    </div>
          );
        }

  const actionButton =
    booking.status === 'pending' ? (
      <JoinSessionButton text="Schedule Session" />
    ) : booking.status === 'scheduled' ? (
      <JoinSessionButton text="Join Session" />
    ) : booking.status === 'completed' && !reviewDetails ? (
      <JoinSessionButton text="Leave Review" />
    ) : null;

  return (
    <div className="flex flex-row min-h-screen w-full overflow-hidden">
      <SideBar />
      <div className="flex-1 flex flex-col p-4 md:p-8 bg-[#F4F4F4] rounded-tl-[40px] overflow-auto">
        <div className="mb-4">
          <div className="flex items-center gap-2 mb-2">
            <h3 className="font-poppins text-[14px] text-[#324A6D]">
              Bookings / {booking.mentor}
            </h3>
          </div>
          <HeaderText
            title=""
            subtitle="My Bookings"
            description="View and manage your mentorship sessions. Stay on track with your learning journey."
          />
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
                  alt={`${booking.mentor || 'Mentor'}'s profile`}
                  width={80}
                  height={100}
                  className="object-cover"
                />
              </div>
              <div>
                <div className="flex items-center gap-3">
                  <span className="text-[#324A6D] font-Poppins font-semibold text-[18px] leading-[28px] tracking-normal">
                  {booking.mentor}
                  </span>
                  <span className="bg-gradient-to-r from-[#C47F35] to-[#7C4D17] px-2 py-1 rounded-full text-white font-poppins font-semibold text-[10px] leading-[1] tracking-normal align-middle">
                   Newcomer
                </span>
                </div>
                <div className="text-[#324A6D] font-Poppins text-[14px] leading-[20px] tracking-normal  flex items-center gap-2">
                <span className='opacity-75'>Session:</span>
                    <span className="text-[#324A6D] text-[16px] leading-[24px] tracking-normal font-medium">
                      {booking.session}
                    </span>
                </div>
                <p className="text-[#324A6D] font-Poppins font-medium text-[15px] leading-[24px] tracking-normal">
                 <span className='opacity-75'>Price: </span> 
                  ${booking.paymentDetails?.sessionPrice || 'N/A'}
                </p>
              </div>
            </div>
            <div className="flex flex-col gap-2">
              {actionButton}
              <MessageButton text="Message Mentor" />
            </div>
          </div>
          <div className="flex flex-wrap gap-6">
            <div className="flex-1">
              <p className="text-[#324A6D] font-normal text-[14px]  opacity-75">Booking Date:</p>
              <p className="font-medium text-[16px] text-[#324A6D]">{booking.date}</p>
            </div>
            <div className="flex-1">
              <p className="text-[#324A6D] font-normal text-[14px] opacity-75">Duration:</p>
              <p className="font-medium text-[16px] text-[#324A6D]">{booking.duration} mins</p>
            </div>
          </div>
          <div className="flex flex-wrap gap-6">
            <div className="flex-1">
              <p className="text-[#324A6D] font-normal text-[14px] opacity-75">Session Date & Time:</p>
              <p className="font-medium text-[16px] text-[#324A6D]">
                {booking.date} - {booking.time}
              </p>
            </div>
            <div className="flex-1">
              <p className="text-[#324A6D] font-normal text-[14px] opacity-75">Session Status:</p>
              <p className="font-medium text-[16px] text-[#324A6D]">{booking.status}</p>
            </div>
          </div>
        </div>
        <PaymentDetail paymentDetails={booking.paymentDetails} />
        {booking.status === 'completed' && reviewDetails ? (
          <div className="w-auto h-auto gap-[24px] rounded-[8px] mt-7 p-4 md:p-6 bg-white">
            <ReviewCard reviewDetails={reviewDetails} />
          </div>
        ) : null}
      </div>
    </div>
  );
};

export default BookingDetail;
