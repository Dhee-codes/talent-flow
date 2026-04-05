export function ProfileLinks() {
  const inputClass =
    "block w-full rounded-xl border border-[#E5E7EB] bg-white px-4 py-3 text-sm text-gray-900 transition-all duration-200 ease-out placeholder:text-[#A0AEC0] hover:border-[#C9D7FF] focus:border-[#5A8CFF] focus:outline-none focus:ring-4 focus:ring-[#5A8CFF]/10";
  const labelClass = "block text-sm font-medium text-[#111827] mb-2";

  return (
    <section className="mb-6 rounded-[28px] border border-[#E9E7E2] bg-white p-6 shadow-[0_10px_30px_rgba(15,23,42,0.04)]">
      <h3 className="text-base font-bold text-[#111827] mb-6">Links</h3>

      <div className="flex flex-col gap-5">
        <div>
          <label className={labelClass}>Website</label>
          <input type="text" placeholder="Label" className={inputClass} />
        </div>

        <div>
          <label className={labelClass}>X(Formerly twitter)</label>
          <input type="text" placeholder="Label" className={inputClass} />
        </div>

        <div>
          <label className={labelClass}>Linkdin</label>
          <input type="text" placeholder="Label" className={inputClass} />
        </div>

        <div>
          <label className={labelClass}>Youtube</label>
          <input type="text" placeholder="Label" className={inputClass} />
        </div>

        <div>
          <label className={labelClass}>Facebook</label>
          <input type="text" placeholder="Label" className={inputClass} />
        </div>
      </div>
    </section>
  );
}
