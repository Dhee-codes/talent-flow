import React from "react";

interface LoginInputProps {
   id: string;
  type: string;
  placeholder: string;
  icon: React.ReactNode;
  error?: string;
  onBlur?: () => void;
  onChange?: (e: React.ChangeEvent<HTMLInputElement>) => void;
}

export default function  LoginInput({ id, type, placeholder, icon, error, onBlur, onChange }: LoginInputProps) {
  return (
    <div className="mb-4">
      <label htmlFor={id} className="block text-[13px] font-medium text-gray-700 mb-1.5">{id.charAt(0).toUpperCase() + id.slice(1)}</label>
      <div className="relative">
        <span className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-400">{icon}</span>
        <input
          type={type}
          id={id}
          name={id}
          placeholder={placeholder}
           onBlur={onBlur}
          onChange={onChange}
         className={`w-full h-11 pl-9 pr-3 rounded-xl border text-[14px] text-gray-900 placeholder-gray-400 outline-none focus:ring-2 transition
            ${
              error
                ? "border-red-400 focus:border-red-400 focus:ring-red-400/10"
                : "border-gray-500 focus:border-[#5C7CFA] focus:ring-[#5C7CFA]/10"
            }`}
        />
      </div>
            {error && (
        <p className="mt-1.5 text-[12px] text-red-500 flex items-center gap-1">
          <svg width="12" height="12" viewBox="0 0 12 12" fill="none">
            <circle cx="6" cy="6" r="5.5" stroke="currentColor" strokeWidth="1.2" />
            <path d="M6 3.5V6.5" stroke="currentColor" strokeWidth="1.2" strokeLinecap="round" />
            <circle cx="6" cy="8.5" r="0.6" fill="currentColor" />
          </svg>
          {error}
        </p>
      )}
    </div>
  );
}