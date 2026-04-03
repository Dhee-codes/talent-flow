export function TwoFactorAuth() {
  return (
    <div className="bg-white rounded-xl shadow-sm border border-gray-100 p-6 mb-6">
      <div className="flex items-center space-x-2 font-semibold text-lg pb-4 border-b border-gray-100 mb-4 text-gray-700">
        {/* <ShieldCheck className="w-6 h-6 text-green-500" strokeWidth={2.5} /> */}
        <svg
          width="40"
          height="40"
          viewBox="0 0 40 40"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M20 1.66669L5 8.33335V18.3334C5 27.5834 11.4 36.2334 20 38.3334C28.6 36.2334 35 27.5834 35 18.3334V8.33335L20 1.66669Z"
            fill="#22C55E"
          />
          <path
            d="M27.9395 15.4395L17.5 25.8887L12.0605 20.4395L12.9395 19.5605L17.5 24.1113L27.0605 14.5605L27.9395 15.4395Z"
            fill="white"
          />
        </svg>

        <h3>Two-Factor Authentication</h3>
      </div>

      <p className="text-sm text-gray-500 mb-6 pb-6 border-b border-gray-100">
        Add an extra layer of security to protect your account from unauthorised
        access.
      </p>

      <div className="flex justify-end">
        <button className="bg-[#5A8CFF] hover:bg-blue-600 text-white px-6 py-2 rounded-lg text-sm font-medium transition-colors">
          Manager 2FA
        </button>
      </div>
    </div>
  );
}
