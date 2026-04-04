export function ProfileForm() {
  const inputClass =
    "block w-full rounded-xl border border-[#E5E7EB] bg-white px-4 py-3 text-sm text-gray-900 transition-all duration-200 ease-out placeholder:text-[#A0AEC0] hover:border-[#C9D7FF] focus:border-[#5A8CFF] focus:outline-none focus:ring-4 focus:ring-[#5A8CFF]/10";
  const labelClass = "block text-sm font-medium text-[#6B7280] mb-2";

  return (
    <section className="mb-6 rounded-[28px] border border-[#E9E7E2] bg-white p-6 shadow-[0_10px_30px_rgba(15,23,42,0.04)]">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
        <div>
          <label className={labelClass}>First Name</label>
          <input type="text" placeholder="Label" className={inputClass} />
        </div>
        <div>
          <label className={labelClass}>Last Name</label>
          <input type="text" placeholder="Label" className={inputClass} />
        </div>
      </div>

      <div className="mb-6">
        <label className={labelClass}>Headline</label>
        <input type="text" placeholder="Label" className={inputClass} />
      </div>

      <div className="mb-6">
        <label className={labelClass}>Description</label>
        <textarea
          placeholder="Label"
          rows={4}
          className={`${inputClass} resize-none`}
        ></textarea>
      </div>

      <div className="mb-2">
        <label className={labelClass}>Language</label>
        <div className="relative">
          <select
            className={`${inputClass} appearance-none pr-10`}
            defaultValue=""
          >
            <option value="" disabled hidden>
              Label
            </option>
            <option value="en">English</option>
            <option value="es">Spanish</option>
            <option value="fr">French</option>
          </select>
          <div className="pointer-events-none absolute inset-y-0 right-0 flex items-center px-4 text-gray-700">
            <svg
              width="14"
              height="8"
              viewBox="0 0 14 8"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M1 1L7 7L13 1"
                stroke="#111827"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
            </svg>
          </div>
        </div>
      </div>
    </section>
  );
}
