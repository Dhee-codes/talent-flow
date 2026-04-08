import { useState } from "react";

export function NotificationsTabs() {
  const [active, setActive] = useState<"all" | "unread">("all");

  return (
    <div className="flex gap-2 mb-6 bg-gray-200 w-fit rounded-2xl p-1">
      <button
        onClick={() => setActive("all")}
        className={`px-6 py-2 rounded-2xl text-sm font-medium transition-all ${
          active === "all"
            ? "bg-white text-gray-900 shadow"
            : "text-gray-500 hover:text-gray-700"
        }`}
      >
        All
      </button>
      <button
        onClick={() => setActive("unread")}
        className={`px-6 py-2 rounded-2xl text-sm font-medium flex items-center gap-2 transition-all ${
          active === "unread"
            ? "bg-white text-gray-900 shadow"
            : "text-gray-500 hover:text-gray-700"
        }`}
      >
        Unread
        <span className="w-2 h-2 rounded-full bg-green-500 inline-block" />
      </button>
    </div>
  );
}