import React from "react";
import Image from "next/image";
import Link from "next/link";
import { HiDotsVertical } from "react-icons/hi";
import { LuArrowDown } from "react-icons/lu";
import StatusBadge from "./SessionStatus";

export interface ReviewType {
  id: string;
  session: string;
  mentor: string;
  date: string;
  time: string;
  status: "pending" | "completed" | "cancelled" | "scheduled" | "paid" | "published";
  mentorImage: string;
  reviewDetails: {
    title: string;
    description: string;
    date: string;
    rating: number;
    ratingCount: number;
    status: "pending" | "completed" | "cancelled" | "scheduled" | "paid" | "published"; 
  } | null;
  paymentDetails: {
    sessionPrice: number;
    paymentStatus: "Paid" | "Pending" | "Refunded";
    paymentMethod: string;
  };
}

interface ReviewListProps {
  reviews: ReviewType[]; 
}

export const ReviewList: React.FC<ReviewListProps> = ({ reviews }) => {
  return (
    <div className="bg-white rounded-lg border border-[#324A6D1A] w-full">
      <div className="w-full overflow-x-auto">
        <table className="min-w-[720px] w-full table-auto text-[12px]">
          <thead className="bg-[#F4F4F4] text-[#324A6D] font-poppins text-[12px] font-normal">
            <tr>
              <th className="px-6 py-4 text-left">Mentor Name</th>
              <th className="px-6 py-4 text-left">Title</th>
              <th className="px-6 py-4 text-left">Description</th>
              <th className="px-6 py-4 text-left">
                <div className="flex items-center gap-1">
                  Date & Time <LuArrowDown size={16} className="text-[#324A6D]" />
                </div>
              </th>
              <th className="px-6 py-4 text-left">Status</th>
              <th className="px-6 py-4 text-center">Actions</th>
            </tr>
          </thead>
          <tbody>
            {reviews.map((item) => (
              <tr
                key={item.id}
                className="border-t border-[#324A6D1A] hover:bg-[#f9f9f9] transition"
              >
                <td className="px-6 py-4">
                  <div className="flex items-center gap-3">
                    <div className="relative w-8 h-8 rounded-full overflow-hidden border border-[#324A6D80]">
                      <Image
                        src={item.mentorImage || "/default-avatar.png"}
                        alt={`Mentor: ${item.mentor}`}
                        fill
                        className="rounded-full object-cover"
                      />
                    </div>
                    <Link
                      href={`/review-detail/${item.id}`}
                      className="font-poppins text-[14px] font-semibold text-[#324A6D] truncate"
                    >
                      {item.mentor}
                    </Link>
                  </div>
                </td>
                <td className="px-6 py-4 text-[#324A6D] font-normal text-[14px]">
                  {item.reviewDetails ? (
                    <span
                      className="block truncate max-w-xs"
                      title={item.reviewDetails.description}
                    >
                      {item.reviewDetails.title}
                    </span>
                  ) : (
                    <span>No review submitted yet</span>
                  )}
                </td>
                <td className="px-6 py-4 text-[#324A6D] font-Poppins text-[14px] font-normal">
                  {item.reviewDetails?.description ? (
                    <span
                      className="block truncate max-w-xs"
                      title={item.reviewDetails.description}
                    >
                      {item.reviewDetails.description}
                    </span>
                  ) : (
                    <span>No description available</span>
                  )}
                </td>
                <td className="px-6 py-4 text-[#324A6D] font-normal">
                  {item.date} {item.time}
                </td>
                <td className="px-6 py-4">
                  <StatusBadge status={item.reviewDetails?.status || "pending"} />
                </td>
                <td className="px-6 py-4 text-center">
                  <button
                    className="p-2 flex items-center justify-center"
                    aria-label={`Actions for ${item.session}`}
                  >
                    <HiDotsVertical size={20} className="text-[#667085]" />
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};
