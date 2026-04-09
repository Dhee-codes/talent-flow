interface LoginHeaderProps {
  title?: string;
  subtitle: string;
}

export default function LoginHeader({ title = "Welcome", subtitle }: LoginHeaderProps) {
  return (
    <div className="w-full mb-5 relative h-30 flex flex-col items-start justify-center">
      <button onClick={() => history.back()} className="absolute top-0 right-0 w-9 h-9 rounded-full border border-gray-300 flex items-center justify-center cursor-pointer">
        <svg
          width="50"
          height="50"
          viewBox="0 0 50 50"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <rect x="1" y="1" width="48" height="48" rx="24" stroke="black" strokeWidth="2" />
          <path d="M31 19L19 31M19 19L31 31" stroke="#1E1E1E" strokeWidth="2.25" strokeLinecap="round" strokeLinejoin="round" />
        </svg>
      </button>
      <h1 className="text-[30px] font-semibold text-gray-900 mb-1.5 mt-10">{title}</h1>
      <p className="text-[15px] text-gray-500 leading-snug">
        {subtitle}
      </p>
    </div>
  );
}