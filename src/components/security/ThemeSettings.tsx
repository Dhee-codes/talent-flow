import { Palette, CheckSquare, Square } from "lucide-react";

export function ThemeSettings() {
  return (
    <div className="bg-white rounded-xl shadow-sm border border-gray-100 p-6 mb-6">
      <div className="flex items-center space-x-2 pb-3 border-b border-gray-200 mb-4">
        <Palette className="w-6 h-6 text-[#40444D]" strokeWidth={2} />
        <h3 className="text-xl font-bold text-[#3B3F45]">Theme</h3>
      </div>

      <div className="flex justify-end mb-4 pr-1">
        <img src="/images/theme-preview.png" alt="Theme Preview" className="w-[236px] h-auto object-contain" />
      </div>

      <div className="flex w-full items-center justify-between space-x-3">
        <label className="flex-1 flex items-center justify-center space-x-2 border border-gray-200 rounded-md py-2 cursor-pointer hover:bg-gray-50 transition-colors">
          <input type="radio" name="theme" className="sr-only" defaultChecked />
          <CheckSquare className="w-4 h-4 text-gray-700" />
          <span className="text-sm font-semibold text-gray-700">Light</span>
        </label>
        
        <label className="flex-1 flex items-center justify-center space-x-2 border border-gray-100 rounded-md py-2 cursor-pointer hover:bg-gray-50 transition-colors">
          <input type="radio" name="theme" className="sr-only" />
          <Square className="w-4 h-4 text-gray-900 border-2 rounded-sm" strokeWidth={3} />
          <span className="text-sm font-semibold text-gray-700">Dark</span>
        </label>

        <label className="flex-1 flex items-center justify-center space-x-2 border border-gray-100 rounded-md py-2 cursor-pointer hover:bg-gray-50 transition-colors">
          <input type="radio" name="theme" className="sr-only" />
          <Square className="w-4 h-4 text-gray-300" strokeWidth={2} />
          <span className="text-sm font-semibold text-gray-700">System</span>
        </label>
      </div>
    </div>
  );
}
