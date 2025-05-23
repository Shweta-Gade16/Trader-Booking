'use client';

import Image from 'next/image';
import Button from '@/app/components/Buttons';
import { LuArrowDown } from 'react-icons/lu';
import StatusBadge from './SessionStatus';
import { HiDotsVertical } from 'react-icons/hi';
import PaginationFooter from './Pagination';
import { useState } from 'react';
import Link from 'next/link';
export interface BookingType {
  id: string;
  session: string;
  mentor: string;
  date: string;
  time: string | number;
  duration: string | number;
  status: 'pending' | 'completed' | 'cancelled' | 'scheduled';
  mentorImage?: string;
  cancellationReason ?: string;
  paymentDetails: {
    sessionPrice: number;
    paymentStatus: string;
    transactionId: string;
    paymentDate: string;
    paymentId: string;
    paymentMethod: string;

  };
  reviewDetails:{
    id: string;
    title: string;
    mentor: string;
    date: string;
    description: string;
    mentorImage: string;
    rating: number;
    ratingCount: number;
  } | null;
}

interface BookingListProps {
  bookings: BookingType[];
}

const ITEMS_PER_PAGE = 6;

export default function BookingList({ bookings }: BookingListProps) {
  const [currentPage, setCurrentPage] = useState(1);
  const totalPages = Math.ceil(bookings.length / ITEMS_PER_PAGE);
  const startIndex = (currentPage - 1) * ITEMS_PER_PAGE;
  const endIndex = startIndex + ITEMS_PER_PAGE;
  const currentBookings = bookings.slice(startIndex, endIndex);

  if (!bookings || bookings.length === 0) {
    return (
      <div className="flex flex-1 w-full min-h-[300px] gap-8 items-center justify-center px-4 py-12">
        <div className="w-full flex flex-col items-center gap-4 text-center">
          <p className="font-poppins font-semibold text-[24px] text-[#324A6D]">
            You haven’t booked any sessions yet.
          </p>
          <p className="font-poppins font-normal text-[18px] text-[#324A6D]">
            Find the right mentor and start learning today!
          </p>
          <Button text="Find a Mentor" />
        </div>
      </div>
    );
  }

  return (
    <div className="bg-white rounded-lg border border-[#324A6D1A] w-full">
      <div className="w-full overflow-x-auto">
        <table className="min-w-[720px] w-full table-auto text-[12px]">
          <thead className="bg-[#F4F4F4] text-[#324A6D] font-poppins text-[12px] font-normal">
            <tr className="text-left">
              <th className="px-6 sm:px-6 py-4 min-w-[180px]">Mentor Name</th>
              <th className="px-6 sm:px-6 py-4 min-w-[180px]">Session Name</th>
              <th className="px-6 sm:px-6 py-4 min-w-[200px]">
                <div className="flex items-center gap-1">
                  Date & Time <LuArrowDown size={16} className="text-[#324A6D]" />
                </div>
              </th>
              <th className="px-6 sm:px-6 py-4 min-w-[160px]">Session Status</th>
              <th className="px-6 sm:px-6 py-4 w-[40px]"></th>
            </tr>
          </thead>
          <tbody>
            {currentBookings.map((booking) => (
              <tr
                key={`${booking.id}-${booking.date}`}
                className="border-t border-[#324A6D1A] hover:bg-[#f9f9f9] transition"
              >
                <td className="px-6 sm:px-6 py-4 whitespace-nowrap">
                  <div className="flex items-center gap-3">
                    <div className="relative w-8 h-8 rounded-full overflow-hidden border border-[#324A6D80]">
                      <Image
                        src={booking.mentorImage || '/default-avatar.png'}
                        alt={booking.mentor}
                        layout="fill"
                        objectFit="cover"
                        className="rounded-full"
                      />
                    </div>
                    <Link
                      href={`/booking-detail/${booking.id}`}
                      className="font-poppins text-[14px] font-semibold text-[#324A6D] truncate"
                    >
                      {booking.mentor}
                    </Link>
                  </div>
                </td>
                <td className="px-6 sm:px-6 py-4 text-[14px] text-[#324A6D] font-normal">
                  {booking.session}
                </td>
                <td className="px-6 sm:px-6 py-4 text-[14px] text-[#324A6D] whitespace-nowrap font-normal">
                  {booking.date} - {booking.time}
                </td>
                <td className="px-3 sm:px-3 py-4">
                  <StatusBadge status={booking.status} />
                </td>
                <td className="px-6 py-4">
                  <button className="p-2 flex items-center justify-center" aria-label="Actions">
                    <HiDotsVertical size={20} className="text-[#667085]" />
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
      <div className="border-t border-[#F4F4F4]">
        <PaginationFooter
          totalPages={totalPages}
          currentPage={currentPage}
          onPageChange={(page) => setCurrentPage(page)}
        />
      </div>
    </div>
  );
}