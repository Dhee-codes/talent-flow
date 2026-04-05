import { useNavigate } from "react-router-dom";
import { Search } from "lucide-react";

type SearchBarProps = {
  isAuthenticated?: boolean;
  query: string;
  onChange: (value: string) => void;
  onKeyDown?: (e: React.KeyboardEvent<HTMLInputElement>) => void;
  alwaysShow?: boolean;
  fullWidth?: boolean;
};

export const SearchBar = ({
  isAuthenticated,
  query,
  onChange,
  onKeyDown,
  alwaysShow,
  fullWidth,
}: SearchBarProps) => {
  const navigate = useNavigate();

  return (
    <div className={`relative ${fullWidth ? "" : "ml-2"}`}>
      <div
        className={`${alwaysShow ? "flex" : "hidden lg:flex"} items-center ${fullWidth ? "" : "pl-15.5"} gap-8`}
      >
        <label
          htmlFor="search-course"
          className={`max-sm:sr-only ${isAuthenticated ? "sr-only" : "text-lg leading-6 -tracking-[0.02em] font-medium"}`}
        >
          Find Course
        </label>

        <input
          type="text"
          id="search-course"
          placeholder="Search for a course"
          value={query}
          onChange={(e) => onChange(e.target.value)}
          onKeyDown={onKeyDown}
          className={`flex-1 text-sm leading-4 font-sans text-text-muted placeholder:text-text-muted bg-card rounded-lg pl-3 pr-16 py-3 focus:outline-none focus:border-primary focus:ring-1 focus:ring-primary ${fullWidth ? "border-primary ring-1 ring-primary" : ""}`}
        />
      </div>
      <button
        onClick={() =>
          query.trim() ? navigate(`/search?q=${query}`) : navigate("/search")
        }
        className={`absolute right-0 md:right-3.75 top-1/2 -translate-y-1/2 ${fullWidth ? "hidden" : ""}`}
      >
        <Search className="h-5 w-5 text-text-muted" />
      </button>
    </div>
  );
};