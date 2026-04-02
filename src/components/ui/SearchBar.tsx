import { useState } from "react";
import { Search } from "lucide-react";

export const SearchBar = () => {
  const [query, setQuery] = useState("");

  return (
    <div className="relative">
      <div className="hidden md:flex items-center pl-15.5 gap-8">
        <label
          htmlFor="search-course"
          className="max-sm:sr-only text-lg leading-6 -tracking-[0.02em] font-medium"
        >
          Find Course
        </label>

        <input
          type="text"
          id="search-course"
          placeholder="Search for a course"
          value={query}
          onChange={(e) => setQuery(e.target.value)}
          className="text-sm leading-4 font-sans text-text-muted bg-card rounded-lg pl-3 pr-16 py-3"
        />
      </div>
      <Search className="absolute right-3.75 top-1/2 -translate-y-1/2" />
    </div>
  );
};
