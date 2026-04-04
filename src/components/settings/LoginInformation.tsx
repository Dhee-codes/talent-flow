export function LoginInformation() {
  return (
    <section className="mb-6 rounded-3xl border border-[#E9E7E2] bg-white p-6 shadow-[0_10px_30px_rgba(15,23,42,0.04)] transition-all duration-200 ease-out hover:border-[#DCE6FF] hover:shadow-[0_16px_40px_rgba(90,140,255,0.08)]">
      <div className="mb-6 flex items-center space-x-2 rounded-2xl border border-[#E5E7EB] px-4 py-3 text-lg font-semibold text-gray-700">
        <svg
          width="34"
          height="37"
          viewBox="0 0 34 37"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M15 0C12.7899 0 10.6702 0.877974 9.10744 2.44078C7.54464 4.00358 6.66667 6.1232 6.66667 8.33333C6.66667 10.5435 7.54464 12.6631 9.10744 14.2259C10.6702 15.7887 12.7899 16.6667 15 16.6667C17.2101 16.6667 19.3298 15.7887 20.8926 14.2259C22.4554 12.6631 23.3333 10.5435 23.3333 8.33333C23.3333 6.1232 22.4554 4.00358 20.8926 2.44078C19.3298 0.877974 17.2101 0 15 0ZM15 18.3333C11.0083 18.3333 7.375 19.49 4.70333 21.12C3.37 21.9333 2.23 22.8933 1.40667 23.9367C0.596667 24.96 0 26.1883 0 27.5C0 28.9083 0.685 30.0183 1.67167 30.81C2.605 31.56 3.83667 32.0567 5.145 32.4033C7.775 33.0983 11.285 33.3333 15 33.3333L16.1417 33.325C16.4208 33.3212 16.6945 33.2473 16.9376 33.1101C17.1808 32.973 17.3856 32.777 17.5332 32.54C17.6809 32.3031 17.7667 32.0329 17.7827 31.7542C17.7987 31.4755 17.7445 31.1973 17.625 30.945C16.993 29.6073 16.6657 28.1461 16.6667 26.6667C16.6667 24.58 17.305 22.6467 18.395 21.045C18.557 20.807 18.6546 20.5311 18.6783 20.2441C18.7019 19.9571 18.6508 19.669 18.53 19.4076C18.4091 19.1463 18.2226 18.9207 17.9887 18.7529C17.7547 18.5851 17.4813 18.4807 17.195 18.45C16.4772 18.3722 15.7456 18.3333 15 18.3333ZM27.1933 20.085C26.8515 19.9711 26.4819 19.9711 26.14 20.085L21.14 21.7517C20.808 21.8622 20.5192 22.0745 20.3146 22.3584C20.11 22.6423 19.9999 22.9834 20 23.3333V26.1183C19.9998 27.901 20.6569 29.6212 21.8458 30.9496C23.0346 32.2781 24.6715 33.1214 26.4433 33.3183C26.5933 33.335 26.7422 33.335 26.89 33.3183C28.6618 33.1214 30.2987 32.2781 31.4876 30.9496C32.6764 29.6212 33.3336 27.901 33.3333 26.1183V23.3333C33.3334 22.9834 33.2234 22.6423 33.0187 22.3584C32.8141 22.0745 32.5253 21.8622 32.1933 21.7517L27.1933 20.085Z"
            fill="#6B7280"
          />
        </svg>
        <h3>Login Information</h3>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
        <div>
          <label className="block text-sm font-medium text-gray-700 mb-2">
            Email
          </label>
          <div className="relative">
            <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
              <svg
                width="20"
                height="20"
                viewBox="0 0 20 20"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  fillRule="evenodd"
                  clipRule="evenodd"
                  d="M6.25003 5C6.25003 2.92893 7.92896 1.25 10 1.25C12.0711 1.25 13.75 2.92893 13.75 5C13.75 7.07107 12.0711 8.75 10 8.75C7.92896 8.75 6.25003 7.07107 6.25003 5Z"
                  fill="#1F2937"
                />
                <path
                  fillRule="evenodd"
                  clipRule="evenodd"
                  d="M3.12607 16.7544C3.19052 13.013 6.24335 10 10 10C13.7568 10 16.8097 13.0131 16.874 16.7547C16.8783 17.0028 16.7353 17.23 16.5097 17.3335C14.5273 18.2432 12.3221 18.75 10.0003 18.75C7.67825 18.75 5.47289 18.2431 3.4903 17.3332C3.26474 17.2297 3.1218 17.0026 3.12607 16.7544Z"
                  fill="#1F2937"
                />
              </svg>
            </div>
            <input
              type="email"
              placeholder="Enter your email"
              className="block w-full rounded-xl border border-[#E5E7EB] bg-white py-3 pr-4 pl-10 text-sm text-gray-900 transition-all duration-200 ease-out placeholder:text-[#A0AEC0] hover:border-[#C9D7FF] focus:border-[#5A8CFF] focus:outline-none focus:ring-4 focus:ring-[#5A8CFF]/10"
            />
          </div>
        </div>

        <div>
          <label className="block text-sm font-medium text-gray-700 mb-2">
            Phone Number
          </label>
          <div className="relative flex overflow-hidden rounded-xl border border-[#E5E7EB] bg-white shadow-sm transition-all duration-200 ease-out hover:border-[#C9D7FF] focus-within:border-[#5A8CFF] focus-within:ring-4 focus-within:ring-[#5A8CFF]/10">
            <span className="inline-flex items-center border-r border-[#E5E7EB] bg-[#F9FAFB] px-3 text-sm text-gray-500">
              +234
            </span>
            <input
              type="text"
              placeholder="(000) 000-0000"
              className="block w-full flex-1 px-3 py-3 text-sm text-gray-900 placeholder:text-[#A0AEC0] focus:outline-none"
            />
            <button className="absolute inset-y-0 right-0 flex items-center pr-3 text-gray-400 transition-colors duration-200 hover:text-[#3E6FE6]">
              {/* <Pencil className="h-4 w-4" /> */}
              <svg
                width="20"
                height="20"
                viewBox="0 0 20 20"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M18.1093 1.8907C17.255 1.03643 15.87 1.03643 15.0157 1.8907L14.0514 2.855L17.145 5.94859L18.1093 4.9843C18.9636 4.13002 18.9636 2.74498 18.1093 1.8907Z"
                  fill="#1F2937"
                />
                <path
                  d="M16.2611 6.83248L13.1675 3.73888L3.04184 13.8646C2.52785 14.3786 2.15003 15.0125 1.94251 15.7092L1.27603 17.9466C1.21051 18.1665 1.2708 18.4047 1.43307 18.5669C1.59535 18.7292 1.8335 18.7895 2.05344 18.724L4.29085 18.0575C4.9875 17.85 5.62145 17.4722 6.13544 16.9582L16.2611 6.83248Z"
                  fill="#1F2937"
                />
              </svg>
            </button>
          </div>
        </div>
      </div>

      <div className="flex justify-end">
        <button className="rounded-xl bg-[#5A8CFF] px-6 py-3 text-sm font-medium text-white shadow-[0_14px_30px_rgba(90,140,255,0.25)] transition-all duration-200 ease-out hover:-translate-y-0.5 hover:bg-[#4B7FF6] hover:shadow-[0_18px_34px_rgba(90,140,255,0.32)]">
          Change Password
        </button>
      </div>
    </section>
  );
}
