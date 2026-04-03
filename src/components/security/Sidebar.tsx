export function Sidebar() {
  return (
    <div className="w-70 shrink-0 bg-white rounded-xl shadow-sm border border-gray-100 p-6 flex flex-col items-center">
      <div className="w-24 h-24 rounded-full overflow-hidden mb-4 border border-gray-200 object-cover bg-gray-100">
        <img
          src="/images/profile.png"
          alt="Victor Labade"
          className="w-full h-full object-cover"
        />
      </div>

      <h2 className="text-lg font-bold text-gray-900 mb-4">Victor Labade</h2>

      <button className="flex items-center justify-center space-x-2 w-full py-2 px-4 rounded-lg border border-gray-200 text-sm font-medium text-gray-700 hover:bg-gray-50 transition-colors mb-8">
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
            stroke="#71717A"
            stroke-width="2"
            stroke-linecap="round"
            stroke-linejoin="round"
          />
        </svg>
      </button>

      <nav className="w-full flex flex-col text-sm font-medium">
        <a
          href="#"
          className="py-3 px-4 text-gray-600 hover:bg-gray-50 rounded-lg transition-colors text-left border-b border-gray-50"
        >
          Profile
        </a>
        <a
          href="#"
          className="py-3 px-4 bg-[#5A8CFF] text-white rounded-lg transition-colors text-left"
        >
          Settings
        </a>
        <a
          href="#"
          className="py-3 px-4 text-gray-600 hover:bg-gray-50 rounded-lg transition-colors text-left border-b border-gray-50"
        >
          Log out
        </a>
        <a
          href="#"
          className="py-3 px-4 text-gray-600 hover:bg-gray-50 rounded-lg transition-colors text-left"
        >
          Delete Profile
        </a>
      </nav>
    </div>
  );
}
