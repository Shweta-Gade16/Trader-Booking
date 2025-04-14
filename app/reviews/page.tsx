'use client';

import React, { useState} from 'react';
import Sidebar from '@/app/components/SideBar';
import { ChevronDown } from 'lucide-react';
import PaginationFooter from '../components/Pagination';
import { ReviewList } from '../components/ReviewList';
import { FiChevronRight } from 'react-icons/fi';
import { dummyBookings } from '../data/bookings';
import HeaderText from '../components/HeaderText';

  const ITEMS_PER_PAGE = 6;
  const ReviewPage: React.FC = () => {
  const [currentPage, setCurrentPage] = useState(1);

  const totalPages = Math.ceil(dummyBookings.length / ITEMS_PER_PAGE);
  const startIndex = (currentPage - 1) * ITEMS_PER_PAGE;
  const endIndex = startIndex + ITEMS_PER_PAGE;
  const currentReviews = dummyBookings.slice(startIndex, endIndex);

  return (
    <div className="flex flex-row min-h-screen w-full overflow-hidden relative">
      <Sidebar />

      <FiChevronRight
        className="text-white bg-[#9B59B6] rounded-full absolute top-[2.75rem] left-[5rem]  md:left-90 -translate-y-1/2 
                  flex items-center justify-center 
                  w-[20px] h-[20px] sm:w-[24px] sm:h-[24px] md:w-[28px] md:h-[28px]"
      />
      <main className="flex-1 flex flex-col px-4 py-6 sm:px-6 md:px-8 bg-[#F4F4F4] rounded-tl-[40px] md:rounded-tl-[40px] overflow-auto mt-5">
        <div className="mb-6 sm:mb-8">
        <HeaderText
        title="Reviews"
        subtitle="Your Reviews on Mentors"
        description="View all the reviews you've submitted. Pending reviews will be published once approved by our team."
      />
      </div>
        <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center mb-4 gap-3 sm:gap-6 w-full">
          <h2 className="font-poppins text-[20px] sm:text-[20px] font-semibold text-[#324A6D]">
            Reviews List
          </h2>
          <div
            className="flex items-center justify-center gap-2 border border-[#324A6D40] bg-white rounded w-full sm:w-[160px] h-[45px] px-4 py-2 cursor-pointer"      
          >
            <span className="text-[14px] font-poppins text-[#324A6D]">Sort by : All </span>
            <ChevronDown size={16} className="text-[#324A6D]" />
          </div>
        </div>
        <div className="w-full overflow-x-auto">
          <ReviewList reviews={currentReviews} />
        </div>
        <div className="border-t border-[#F4F4F4]">
          <PaginationFooter
            totalPages={totalPages}
            currentPage={currentPage}
            onPageChange={(page) => setCurrentPage(page)}
          />
        </div>
      </main>
    </div>
  );
};

export default ReviewPage;
