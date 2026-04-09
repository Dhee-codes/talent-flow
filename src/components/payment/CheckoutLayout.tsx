import { Link } from "react-router-dom";
import CheckoutSummary from "./CheckoutSummary";
import BillingDetailsForm from "./BillingDetailsForm";
import OrderDetails from "./OrderDetails";

export default function CheckoutLayout() {
  return (
    <div className="max-w-[1040px] mx-auto px-6 py-10 font-sans">
      
      {/* Breadcrumb */}
      <div className="text-[13px] text-gray-500 mb-8 font-semibold tracking-wide">
        <Link to="/" className="hover:text-gray-800">Home</Link>
        <span className="mx-[2px]">/</span>
        <Link to="/cart" className="hover:text-gray-800">Cart</Link>
        <span className="mx-[2px]">/</span>
        <span className="text-gray-900 font-bold">CheckOut</span>
      </div>

      {/* Main Heading */}
      <h1 className="text-[26px] font-bold text-gray-900 mb-11 tracking-tight">CheckOut</h1>

      {/* Grid Layout */}
      <div className="flex flex-col lg:flex-row gap-16 lg:gap-[130px] w-full justify-between items-start">
        
        {/* Left Column */}
        <div className="flex-1 w-full max-w-[480px]">
          <CheckoutSummary />
          <BillingDetailsForm />
        </div>

        {/* Right Column */}
        <div className="w-full lg:w-[410px] shrink-0 pt-4 lg:pt-0">
          <OrderDetails />
        </div>
      </div>

    </div>
  );
}
