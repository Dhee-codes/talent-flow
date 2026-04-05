export function ProfileImageUpload() {
  const inputClass =
    "block w-full rounded-xl border border-[#E5E7EB] bg-white px-4 py-3 text-sm text-gray-900 transition-all duration-200 ease-out placeholder:text-[#A0AEC0] hover:border-[#C9D7FF] focus:border-[#5A8CFF] focus:outline-none focus:ring-4 focus:ring-[#5A8CFF]/10";

  return (
    <section className="mb-6 rounded-[28px] border border-[#E9E7E2] bg-white p-6 shadow-[0_10px_30px_rgba(15,23,42,0.04)]">
      <h3 className="text-base font-bold text-[#111827] mb-4">
        Image Preview
      </h3>

      <div className="mb-8 flex h-[240px] w-full md:w-[320px] items-center justify-center rounded-[16px] bg-[#E2E8F0]/50 border border-[#E2E8F0]/50">
        <svg
          width="48"
          height="48"
          viewBox="0 0 48 48"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
          className="text-white drop-shadow-sm"
        >
          <path
            d="M38 12H10C7.79086 12 6 13.7909 6 16V32C6 34.2091 7.79086 36 10 36H38C40.2091 36 42 34.2091 42 32V16C42 13.7909 40.2091 12 38 12Z"
            fill="white"
          />
          <path
            d="M14.5 21C15.8807 21 17 19.8807 17 18.5C17 17.1193 15.8807 16 14.5 16C13.1193 16 12 17.1193 12 18.5C12 19.8807 13.1193 21 14.5 21Z"
            fill="#E2E8F0"
          />
          <path
            d="M42 27.5L34 19.5L16 36"
            stroke="#E2E8F0"
            strokeWidth="3"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
          <path
            d="M6 31L18 19L27 28"
            stroke="#E2E8F0"
            strokeWidth="3"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
        </svg>
      </div>

      <div className="mb-4">
        <label className="block text-base font-bold text-[#111827] mb-2">
          Add/Change Image
        </label>
        <div className="flex gap-4 items-center">
          <input
            type="text"
            placeholder="Label"
            className={`${inputClass} flex-1`}
          />
          <button className="whitespace-nowrap rounded-xl border border-[#C9D7FF] bg-[#F8FAFF] px-6 py-3 text-sm font-semibold text-[#1F2937] transition-all duration-200 ease-out hover:-translate-y-0.5 hover:bg-[#5A8CFF] hover:text-white hover:border-[#5A8CFF] hover:shadow-[0_10px_24px_rgba(90,140,255,0.2)]">
            Upload Image
          </button>
        </div>
      </div>

      <button className="rounded-lg bg-[#5A8CFF] px-6 py-2.5 text-sm font-medium text-white shadow-[0_10px_24px_rgba(90,140,255,0.2)] transition-all duration-200 ease-out hover:-translate-y-0.5 hover:bg-[#4B7FF6] hover:shadow-[0_14px_30px_rgba(90,140,255,0.32)]">
        Save Image
      </button>
    </section>
  );
}
