import { Link } from "react-router-dom";

export function Sidebar() {
  const navItemClass =
    "group flex w-full items-center rounded-xl px-4 py-3 text-left text-sm font-medium transition-all duration-200 ease-out";

  return (
    <aside className="w-full shrink-0 self-start rounded-[28px] border border-[#E9E7E2] bg-white p-6 shadow-[0_10px_30px_rgba(15,23,42,0.04)] sm:max-w-73">
      <div className="flex flex-col items-center">
        <div className="mb-4 h-40 w-40 overflow-hidden rounded-full border border-[#E3E7EF] bg-gray-100 object-cover shadow-[0_10px_24px_rgba(15,23,42,0.08)]">
          <img
            src="/images/profile.png"
            alt="Victor Labade"
            className="w-full h-full object-cover"
          />
        </div>

        <h2 className="mb-5 text-[18px] font-bold text-[#1F2937]">Victor Labade</h2>

        <button className="mb-8 flex w-full items-center justify-center gap-2 rounded-xl border border-[#E5E7EB] bg-white px-4 py-3 text-sm font-medium text-[#6B7280] shadow-[0_1px_2px_rgba(15,23,42,0.04)] transition-all duration-200 ease-out hover:-translate-y-0.5 hover:border-[#C9D7FF] hover:bg-[#F8FAFF] hover:text-[#3E6FE6] hover:shadow-[0_10px_24px_rgba(90,140,255,0.12)]">
          <span>Share Profile</span>
          {/* <Share2 className="w-4 h-4" /> */}
          <svg
            width="24"
            height="24"
            viewBox="0 0 24 24"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M8.59 13.51L15.42 17.49M15.41 6.51L8.59 10.49M21 5C21 6.65685 19.6569 8 18 8C16.3431 8 15 6.65685 15 5C15 3.34315 16.3431 2 18 2C19.6569 2 21 3.34315 21 5ZM9 12C9 13.6569 7.65685 15 6 15C4.34315 15 3 13.6569 3 12C3 10.3431 4.34315 9 6 9C7.65685 9 9 10.3431 9 12ZM21 19C21 20.6569 19.6569 22 18 22C16.3431 22 15 20.6569 15 19C15 17.3431 16.3431 16 18 16C19.6569 16 21 17.3431 21 19Z"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
          </svg>
        </button>
      </div>

      <nav className="w-full border-t border-[#EEF1F5] pt-6 text-sm font-medium">
        <Link
          to="/profile"
          className={`${navItemClass} text-[#6B7280] hover:-translate-y-0.5 hover:bg-[#F8FAFF] hover:text-[#3E6FE6]`}
        >
          Profile
        </Link>
        <Link
          to="/settings"
          className={`${navItemClass} my-1 bg-[#5A8CFF] text-white shadow-[0_14px_30px_rgba(90,140,255,0.25)]`}
        >
          Settings
        </Link>
        <Link
          to="/logout"
          className={`${navItemClass} text-[#6B7280] hover:-translate-y-0.5 hover:bg-[#F8FAFF] hover:text-[#3E6FE6]`}
        >
          Log out
        </Link>
        <div className="my-3 border-t border-[#EEF1F5]" />
        <Link
          to="/delete-profile"
          className={`${navItemClass} text-[#7C8798] hover:bg-[#FFF7F7] hover:text-[#D14343]`}
        >
          Delete Profile
        </Link>
      </nav>
    </aside>
  );
};
