import { useNavigate } from "react-router-dom";

export default function PaymentSuccess() {
  const navigate = useNavigate();

  return (
    <div className="min-h-screen bg-[#F4F7FE] flex flex-col items-center justify-center p-6 font-sans">
      <div className="bg-white rounded-[4px] shadow-[0px_4px_24px_rgba(0,0,0,0.04)] border border-gray-100 max-w-[560px] w-full p-12 flex flex-col items-center">
        
        {/* Success Checkmark */}
        <div className="mb-6">
          <svg width="72" height="72" viewBox="0 0 84 84" fill="none" stroke="#22c55e" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
            {/* Circle with gap at top-right for the checkmark */}
            <path d="M72 42 A 30 30 0 1 1 42 12 A 30 30 0 0 1 63.2 20.8" />
            <polyline points="28 44 38 54 68 20" />
          </svg>
        </div>

        <h1 className="text-[22px] font-bold text-[#1e293b] mb-2 font-sans tracking-tight">Payment Successful!</h1>
        <p className="text-[#475569] text-[15px] mb-8 text-center">
          You have been enroled in “UI/UX design for beginners”
        </p>

        <div className="w-full border-t border-gray-200 mb-6"></div>

        <div className="w-full flex flex-col items-center gap-3 text-[15px] mb-8">
          <div className="flex items-center gap-1.5">
            <span className="text-[#475569]">Amount Paid:</span>
            <span className="font-bold text-[#1e293b]">₦104,500</span>
          </div>
          <div className="flex items-center gap-1.5">
            <span className="text-[#475569]">Transaction ID:</span>
            <span className="font-bold text-[#1e293b]">#A12345678</span>
          </div>
          <div className="flex items-center gap-1.5">
            <span className="text-[#475569]">Date:</span>
            <span className="text-[#475569]">April 12, 2026</span>
          </div>
        </div>

        <div className="w-full border-t border-gray-200 mb-8"></div>

        <div className="flex gap-4 min-w-[320px] max-w-[360px] w-full justify-center">
          <button
            onClick={() => navigate("/progress")}
            className="flex-1 bg-[#6090FA] hover:bg-blue-600 text-white font-medium py-[10px] px-4 rounded-[6px] transition-colors text-[14px]"
          >
            Go to Course
          </button>
          <button
            className="flex-1 bg-white hover:bg-gray-50 text-[#475569] border border-gray-200 shadow-sm font-medium py-[10px] px-4 rounded-[6px] transition-colors text-[14px]"
          >
            View Receipt
          </button>
        </div>

      </div>
    </div>
  );
}
