export default function CheckoutSummary() {
  return (
    <div className="mb-12 w-full max-w-xl mt-4">
      <div className="border-b-[1.5px] border-gray-400 py-3 mb-1">
        <span className="text-[13px] font-medium text-gray-900">You can now make your purchase, James John</span>
      </div>
      
      <div className="border-b-[1.5px] border-gray-400 py-4 mb-1 flex justify-between items-center">
        <span className="text-[13px] font-medium text-gray-900">No of Courses</span>
        <span className="text-sm font-semibold text-gray-900">1</span>
      </div>

      <div className="border-b-[1.5px] border-gray-400 py-[18px] mb-2 flex justify-between items-center">
        <span className="text-[13px] font-medium text-gray-900">Total Price</span>
        <span className="text-2xl font-bold text-[#ea4335] leading-none tracking-tight">₦100,000</span>
      </div>
    </div>
  );
}
