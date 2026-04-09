export default function BillingDetailsForm() {
  return (
    <div className="w-full max-w-xl">
      <h3 className="text-sm font-semibold mb-3.5 text-gray-900 font-sans">Billing details</h3>
      
      <div className="border-[1.5px] border-gray-100 rounded-xl p-5 bg-white shadow-[0_2px_8px_-4px_rgba(0,0,0,0.05)] space-y-4">
        
        {/* First Name */}
        <div className="flex flex-col gap-1.5">
          <label className="text-[11px] font-semibold text-gray-700">First Name *</label>
          <input 
            type="text" 
            placeholder="James" 
            className="w-full h-[42px] px-3 border border-gray-300 rounded-lg text-sm text-gray-900 placeholder:text-gray-500 focus:outline-none focus:ring-1 focus:ring-blue-500"
          />
        </div>

        {/* Last Name */}
        <div className="flex flex-col gap-1.5">
          <label className="text-[11px] font-semibold text-gray-700">Last Name *</label>
          <input 
            type="text" 
            placeholder="James" 
            className="w-full h-[42px] px-3 border border-gray-300 rounded-lg text-sm text-gray-900 placeholder:text-gray-500 focus:outline-none focus:ring-1 focus:ring-blue-500"
          />
        </div>

        {/* Phone Number */}
        <div className="flex flex-col gap-1.5">
          <label className="text-[11px] font-semibold text-gray-700">Phone Number *</label>
          <div className="flex w-full h-[42px] border border-gray-300 rounded-lg overflow-hidden focus-within:ring-1 focus-within:ring-blue-500">
            {/* Prefix box */}
            <div className="flex items-center justify-center gap-1 bg-gray-50/70 px-2.5 border-r border-gray-300 shrink-0">
              {/* Nigeria Flag */}
              <img src="/nigeriaflagonpayment.png" alt="Nigeria Flag" className="w-[18px] h-[13px] rounded-[1.5px] object-cover" />
              <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="#666" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <polyline points="6 9 12 15 18 9"></polyline>
              </svg>
            </div>
            
            {/* Input field */}
            <input 
              type="tel" 
              defaultValue="+234  0000 0000 0000" 
              className="flex-1 px-3 text-sm text-gray-800 placeholder:text-gray-500 border-none focus:outline-none bg-transparent"
            />
          </div>
        </div>

        {/* Email Address */}
        <div className="flex flex-col gap-1.5 pt-0.5">
          <label className="text-[11px] font-semibold text-gray-700">Email address *</label>
          <input 
            type="email" 
            placeholder="jamesj@gmail.com" 
            className="w-full h-[42px] px-3 border border-gray-300 rounded-lg text-sm text-gray-900 placeholder:text-gray-500 focus:outline-none focus:ring-1 focus:ring-blue-500"
          />
        </div>

      </div>
    </div>
  );
}
