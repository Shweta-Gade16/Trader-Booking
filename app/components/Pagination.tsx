'use client';

interface PaginationFooterProps {
  totalPages: number;
  currentPage: number;
  onPageChange: (page: number) => void;
}

export default function PaginationFooter({
  totalPages,
  currentPage,
  onPageChange,
}: PaginationFooterProps) {
  const handlePrevious = () => {
    if (currentPage > 1) {
      onPageChange(currentPage - 1);
    }
  };

  const handleNext = () => {
    if (currentPage < totalPages) {
      onPageChange(currentPage + 1);
    }
  };

  return (
    <div className="w-full border-t border-[#F4F4F4] flex flex-col sm:flex-row items-center justify-between px-4 sm:px-12 py-4 gap-3 sm:gap-6">
      <p className="text-sm sm:text-[14px] font-medium text-[#324A6D] text-center sm:text-left">
        Page {currentPage} of {totalPages}
      </p>

      <div className="flex flex-wrap justify-center gap-2">
        <button
          onClick={handlePrevious}
          disabled={currentPage === 1}
          className={`min-w-[100px] h-[36px] px-4 py-2 text-[14px] rounded border transition ${
            currentPage === 1
              ? 'text-gray-400 border-gray-200 cursor-not-allowed'
              : 'text-[#324A6D] border-[#D0D5DD] hover:bg-gray-100'
          }`}
        >
          Previous
        </button>
        <button
          onClick={handleNext}
          disabled={currentPage === totalPages}
          className={`min-w-[80px] h-[36px] px-4 py-2 text-[14px] rounded border transition ${
            currentPage === totalPages
              ? 'text-gray-400 border-gray-200 cursor-not-allowed'
              : 'text-[#324A6D] border-[#D0D5DD] hover:bg-gray-100'
          }`}
        >
          Next
        </button>
      </div>
    </div>
  );
}
