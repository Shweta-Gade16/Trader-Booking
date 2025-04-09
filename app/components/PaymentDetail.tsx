import StatusBadge from "./SessionStatus";

export interface PaymentDetailProps {
  paymentDetails: {
    sessionPrice: number;
    paymentStatus: string;
    transactionId: string;
    paymentDate: string;
    paymentId: string;
    paymentMethod: string;
  };
}

export default function PaymentDetail({ paymentDetails }: PaymentDetailProps) {
  return (
    <div className="bg-white rounded-lg p-4 md:p-6 flex flex-col gap-6 mt-8">
      <div className="mb-6">
        <h3 className="font-poppins font-semibold text-lg sm:text-xl text-[#324A6D]">
          Payment Details
        </h3>
      </div>

      <div className="grid grid-cols-2 gap-x-4 gap-y-6 lg:grid-cols-3">
        <div>
          <p className="font-poppins text-sm md:text-base text-gray-500">Session Price:</p>
          <p className="font-poppins font-medium text-base md:text-lg text-[#324A6D]">
            ${paymentDetails.sessionPrice}
          </p>
        </div>

        <div>
          <p className="font-poppins text-sm md:text-base text-gray-500">Payment Status:</p>
          <div className="font-poppins font-medium text-base md:text-lg text-[#324A6D]">
            <StatusBadge status="paid"/>
          </div>
        </div>

        <div>
          <p className="font-poppins text-sm md:text-base text-gray-500">Transaction ID:</p>
          <p className="font-poppins font-medium text-base md:text-lg text-[#324A6D]">
            {paymentDetails.transactionId}
          </p>
        </div>

        <div>
          <p className="font-poppins text-sm md:text-base text-gray-500">Payment Date:</p>
          <p className="font-poppins font-medium text-base md:text-lg text-[#324A6D]">
            {paymentDetails.paymentDate}
          </p>
        </div>

        <div>
          <p className="font-poppins text-sm md:text-base text-gray-500">Payment ID:</p>
          <p className="font-poppins font-medium text-base md:text-lg text-[#324A6D]">
            {paymentDetails.paymentId}
          </p>
        </div>

        <div>
          <p className="font-poppins text-sm md:text-base text-gray-500">Payment Method:</p>
          <p className="font-poppins font-medium text-base md:text-lg text-[#324A6D]">
            {paymentDetails.paymentMethod}
          </p>
        </div>
      </div>
    </div>
  );
}
