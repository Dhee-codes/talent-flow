interface LoginPasswordProps {
  showPassword: boolean;
  setShowPassword: React.Dispatch<React.SetStateAction<boolean>>;
  error?: string;
  onChange?: (e: React.ChangeEvent<HTMLInputElement>) => void;
  label?: string;
  id?: string;
  placeholder?: string;
}

export default function LoginPassword({
  showPassword,
  setShowPassword,
  error,
  onChange,
  label = "Password",
  id = "password",
  placeholder = "Enter your password",
}: LoginPasswordProps) {
  return (
    <div className="mb-1">
      <label
        htmlFor={id}
        className="block text-[13px] font-medium text-gray-700 mb-1.5"
      >
        {label}
      </label>
      <div className="relative pb-3">
        <span className="absolute left-3 top-5.5 -translate-y-1/2 text-gray-400">
          <svg width="15" height="15" viewBox="0 0 16 16" fill="none">
            <rect
              x="3"
              y="7"
              width="10"
              height="6"
              rx="2"
              stroke="currentColor"
              strokeWidth="1.4"
            />
            <path
              d="M5 7V5C5 3.34315 6.34315 2 8 2C9.65685 2 11 3.34315 11 5V7"
              stroke="currentColor"
              strokeWidth="1.4"
              strokeLinejoin="round"
            />
          </svg>
        </span>
        <input
          type={showPassword ? "text" : "password"}
          id={id} 
          name={id} 
          placeholder={placeholder}
          className={`w-full h-11 pl-9 pr-10 rounded-xl border text-[14px] text-gray-900 placeholder-gray-400 outline-none focus:ring-2 transition
            ${
              error
                ? "border-red-400 focus:border-red-400 focus:ring-red-400/10"
                : "border-gray-500 focus:border-[#5C7CFA] focus:ring-[#5C7CFA]/10"
            }`}
          onChange={onChange}
        />
        <button
          type="button"
          aria-label="Toggle password visibility"
          onClick={() => setShowPassword((v) => !v)}
          className="absolute right-3 top-1/2 -translate-y-1/2 text-gray-400 hover:text-gray-600 transition"
        >
          {showPassword ? (
            <svg width="15" height="15" viewBox="0 0 16 16" fill="none">
              <path
                d="M2 2L14 14M6.5 6.7A2 2 0 009.3 9.5M1 8s2.5-5 7-5c1.1 0 2.1.3 3 .7M15 8s-.8 1.6-2.3 2.9"
                stroke="currentColor"
                strokeWidth="1.4"
                strokeLinecap="round"
              />
            </svg>
          ) : (
            <svg width="15" height="15" viewBox="0 0 16 16" fill="none">
              <path
                d="M1 8s2.5-5 7-5 7 5 7 5-2.5 5-7 5-7-5-7-5z"
                stroke="currentColor"
                strokeWidth="1.4"
              />
              <circle
                cx="8"
                cy="8"
                r="2"
                stroke="currentColor"
                strokeWidth="1.4"
              />
            </svg>
          )}
        </button>
      </div>
      {error && (
        <p className="mt-1.5 text-[12px] text-red-500 flex items-center gap-1">
          <svg width="12" height="12" viewBox="0 0 12 12" fill="none">
            <circle
              cx="6"
              cy="6"
              r="5.5"
              stroke="currentColor"
              strokeWidth="1.2"
            />
            <path
              d="M6 3.5V6.5"
              stroke="currentColor"
              strokeWidth="1.2"
              strokeLinecap="round"
            />
            <circle cx="6" cy="8.5" r="0.6" fill="currentColor" />
          </svg>
          {error}
        </p>
      )}
    </div>
  );
}
