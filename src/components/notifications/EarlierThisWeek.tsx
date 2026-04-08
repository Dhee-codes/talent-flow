import { ShieldCheck } from "lucide-react";

export function EarlierThisWeek() {
  return (
    <div>
      <p className="text-xs font-semibold text-gray-400 uppercase tracking-widest mb-3">
        Earlier This Week
      </p>
      <div className="bg-white rounded-xl px-6 py-4 flex items-start justify-between shadow-sm">
        <div className="flex items-start gap-3">
          <ShieldCheck className="text-gray-400 mt-0.5 shrink-0" size={20} />
          <div>
            <p className="text-sm font-semibold text-gray-900 mb-1">Login from new device</p>
            <p className="text-sm text-gray-500">
              A new login was detected on your account from Chrome on macOS. If this wasn't you,
              please secure your account immediately.
            </p>
          </div>
        </div>
        <span className="text-xs text-gray-400 shrink-0 ml-6">3 days ago</span>
      </div>
    </div>
  );
}