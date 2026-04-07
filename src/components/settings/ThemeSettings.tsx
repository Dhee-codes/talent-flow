import theme from "../../assets/images/settings/theme.png";
import { Palette, CheckSquare, Square } from "lucide-react";

export function ThemeSettings() {
  const optionClass =
    "group flex flex-1 cursor-pointer items-center justify-center gap-2 rounded-xl border py-3 transition-all duration-200 ease-out";

  return (
    <section className="mb-6 rounded-3xl border border-[#E9E7E2] bg-white p-6 shadow-[0_10px_30px_rgba(15,23,42,0.04)] transition-all duration-200 ease-out hover:border-[#DCE6FF] hover:shadow-[0_16px_40px_rgba(90,140,255,0.08)]">
      <div className="mb-4 flex items-center space-x-2 border-b border-gray-200 pb-3">
        <Palette className="w-6 h-6 text-[#40444D]" strokeWidth={2} />
        <h3 className="text-xl font-bold text-[#3B3F45]">Theme</h3>
      </div>

      <div className="group mb-6 overflow-hidden rounded-[22px] border border-[#EEF1F5] bg-[linear-gradient(180deg,#ffffff_0%,#f8fbff_100%)] p-4 transition-colors duration-200 hover:border-[#DCE6FF]">
        <div className="flex justify-end pr-1">
          <img src={theme} alt="Theme Preview" className="h-auto w-59 object-contain transition-transform duration-300 ease-out group-hover:scale-[1.02]" />
        </div>
      </div>

      <div className="flex w-full flex-col gap-3 sm:flex-row sm:items-center sm:justify-between">
        <label className={`${optionClass} border-[#C9D7FF] bg-[#F4F8FF] text-[#3E6FE6] shadow-[0_10px_24px_rgba(90,140,255,0.12)] hover:-translate-y-0.5 hover:bg-[#EEF4FF]`}>
          <input type="radio" name="theme" className="sr-only" defaultChecked />
          <CheckSquare className="h-4 w-4 text-[#3E6FE6]" />
          <span className="text-sm font-semibold text-[#3E6FE6]">Light</span>
        </label>
        
        <label className={`${optionClass} border-[#E5E7EB] bg-white text-gray-700 hover:-translate-y-0.5 hover:border-[#C9D7FF] hover:bg-[#F8FAFF] hover:text-[#3E6FE6] hover:shadow-[0_10px_24px_rgba(90,140,255,0.08)]`}>
          <input type="radio" name="theme" className="sr-only" />
          <Square className="h-4 w-4 rounded-sm border-2 text-gray-900 transition-colors duration-200 group-hover:text-[#3E6FE6]" strokeWidth={3} />
          <span className="text-sm font-semibold transition-colors duration-200 group-hover:text-[#3E6FE6]">Dark</span>
        </label>

        <label className={`${optionClass} border-[#E5E7EB] bg-white text-gray-700 hover:-translate-y-0.5 hover:border-[#C9D7FF] hover:bg-[#F8FAFF] hover:text-[#3E6FE6] hover:shadow-[0_10px_24px_rgba(90,140,255,0.08)]`}>
          <input type="radio" name="theme" className="sr-only" />
          <Square className="h-4 w-4 text-gray-300 transition-colors duration-200 group-hover:text-[#3E6FE6]" strokeWidth={2} />
          <span className="text-sm font-semibold transition-colors duration-200 group-hover:text-[#3E6FE6]">System</span>
        </label>
      </div>
    </section>
  );
}
