import { useState } from "react";
import { useNavigate } from "react-router-dom";

export default function OrderDetails() {
  const [selectedMethod, setSelectedMethod] = useState<"transfer" | "card">("card");
  const navigate = useNavigate();

  return (
    <div className="flex flex-col w-full gap-9 mt-[2px]">
      {/* Order Details section */}
      <div>
        <h3 className="text-[13px] font-semibold mb-3.5 text-gray-900 font-sans tracking-wide">Order details</h3>

        <div className="flex items-start justify-between pe-1">
          <div className="flex gap-4">
            <div className="w-[68px] h-[68px] rounded-lg overflow-hidden shrink-0 shadow-sm border border-gray-50 bg-gray-100">
              <img src="/paymentimage.png" alt="course thumbnail" className="w-full h-full object-cover" />
            </div>
            <p className="text-[13px] font-bold text-gray-900 leading-[1.3] pt-1 max-w-[210px]">
              Data Analysis for beginners: From Beginners<br/>to Pro
            </p>
          </div>
          <button className="text-gray-800 hover:text-gray-500 transition-colors shrink-0">
            <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
              <line x1="18" y1="6" x2="6" y2="18"></line>
              <line x1="6" y1="6" x2="18" y2="18"></line>
            </svg>
          </button>
        </div>
      </div>

      {/* Payment Method section */}
      <div className="mt-1">
        <h3 className="text-[14px] font-medium mb-3.5 text-gray-800 font-sans tracking-tight">Chose payment method</h3>

        <div className="flex flex-col gap-3">

          {/* Transfer Option */}
          <label
            className={`flex items-center justify-between px-3.5 py-2.5 border-[1.5px] rounded-lg cursor-pointer transition-colors ${selectedMethod === "transfer" ? "border-black" : "border-gray-800"}`}
            onClick={() => setSelectedMethod("transfer")}
          >
            <div className="flex items-center gap-3.5 pt-0.5">
              <div className={`w-[15px] h-[15px] rounded-full border-[1.5px] flex items-center justify-center ${selectedMethod === "transfer" ? "border-black" : "border-gray-700"}`}>
                {/* empty state */}
              </div>
              <span className="text-[13px] font-medium text-gray-900">Pay with Bank Transfer</span>
            </div>
            {/* Custom SVG for Bank Transfer lines */}
            <img src="/banktransfericon.png" alt="Bank Transfer" className="w-8 h-auto object-contain" />
          </label>

          {/* Cards Option */}
          <label
            className={`flex items-center justify-between px-3.5 py-2.5 border-[1.5px] rounded-lg cursor-pointer transition-colors ${selectedMethod === "card" ? "border-black" : "border-gray-800"}`}
            onClick={() => setSelectedMethod("card")}
          >
            <div className="flex items-center gap-3.5">
              <div className={`w-[15px] h-[15px] rounded-full border-[1.5px] flex items-center justify-center ${selectedMethod === "card" ? "border-[#5B8DF8]" : "border-gray-700"}`}>
                {selectedMethod === "card" && <div className="w-2 h-2 rounded-full bg-[#5B8DF8]" />}
              </div>
              <span className="text-[13px] font-medium text-gray-900 pt-0.5">Pay with Bank Cards</span>
            </div>
            {/* Custom SVG for Mastercard-style icon */}
            <img src="/mastercard.png" alt="Mastercard" className="w-[30px] h-auto object-contain" />
          </label>

        </div>
      </div>

      <button 
        onClick={() => navigate("/payment/success")}
        className="w-full mt-1 bg-[#6090FA] hover:bg-blue-500 text-white font-medium text-[13px] py-[13px] rounded tracking-wide transition-colors"
      >
        Place order: ₦100,000
      </button>

    </div>
  );
}
