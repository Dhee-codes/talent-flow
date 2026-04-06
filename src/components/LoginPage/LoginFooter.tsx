import { Link } from "react-router-dom";
interface LoginFooterProps {
  title?: string;
  subtitle?: string;
  to: string;
}
export default function LoginFooter({ title, subtitle, to }: LoginFooterProps) {
  return (
    <div>
      <p className="mt-6 text-[15px] text-gray-500 leading-relaxed">
        By Continuing, you agree to our{" "}
        <strong className="text-gray-600 font-medium">Privacy Policy</strong>{" "}
        &amp;{" "}
        <strong className="text-gray-600 font-medium">
          Terms and Conditions.
        </strong>
      </p>
      <div className="flex items-center justify-center gap-1 mt-3">
        <span className="text-[15px] text-gray-500">{subtitle}</span>
        <Link
          to={to}
          className="text-[13px] font-medium text-[#6090FA] hover:underline cursor-pointer"
        >
          {title}
        </Link>
      </div>
    </div>
  );
}
