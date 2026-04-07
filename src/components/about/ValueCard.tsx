import type { ReactNode } from "react";

interface ValueCardProps {
  icon: ReactNode;
  text: string;
}

export function ValueCard({ icon, text }: ValueCardProps) {
  return (
    <div className="flex flex-col items-center text-center max-w-[280px] mx-auto">
      <div className="mb-6 text-[#5A8CFF] flex justify-center">
        {icon}
      </div>
      <p className="text-[#1A1A1A] text-[14px] leading-relaxed font-medium">
        {text}
      </p>
    </div>
  );
}
