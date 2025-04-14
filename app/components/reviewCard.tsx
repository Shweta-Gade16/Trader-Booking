import React from "react";
import { AiFillStar } from "react-icons/ai";

interface ReviewDetails {
  date: string;
  rating: number;
  ratingCount: number;
  title: string;
  description: string;
}

interface ReviewCardProps {
  reviewDetails?: ReviewDetails;
  labels?: {
    publishedDate?: string;
  };
}

const ReviewCard: React.FC<ReviewCardProps> = ({ reviewDetails, labels }) => {
  if (!reviewDetails) {
    return <p>No review details available.</p>;
  }

  return (
    <div className="w-full flex flex-col gap-[12px]  p-4 ">
      <div className="w-full flex flex-col gap-[8px]">
        <span className="text-[#324A6D] font-poppins font-normal text-[14px] opacity-75">
          {labels?.publishedDate || "Published Date:"}
        </span>
        <span className="text-[#324A6D] font-poppins font-medium text-[16px]">
          {reviewDetails.date}
        </span>
      </div>

      <div className="w-full flex flex-col gap-[8px]">
        <span className="text-[#324A6D] font-poppins font-normal text-[14px] opacity-75">
          Ratings:
        </span>
        <div className="flex items-center gap-[10px]">
          {[...Array(5)].map((_, index) => (
            <AiFillStar
              key={index}
              className={`text-[16px] ${
                index < reviewDetails.rating ? "text-[#FBB040]" : "text-[#E0E0E0]"
              }`}
            />
          ))}
          <span className="font-poppins font-medium text-[14px] text-[#324A6D]">
            {reviewDetails.ratingCount} Ratings
          </span>
        </div>
      </div>

      <div className="w-full flex flex-col gap-[8px]">
        <span className="text-[#324A6D] font-poppins font-normal text-[14px] opacity-75">
          Title:
        </span>
        <span className="text-[#324A6D] font-poppins font-medium text-[16px]">
          {reviewDetails.title}
        </span>
      </div>

      <div className="w-full flex flex-col gap-[8px]">
        <span className="text-[#324A6D] font-poppins font-normal text-[14px] opacity-75">
          Description:
        </span>
        <p className="text-[#324A6D] font-poppins font-normal text-[16px]">
          {reviewDetails.description}
        </p>
      </div>
    </div>
  );
};

export default ReviewCard;
