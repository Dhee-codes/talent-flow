import { useState, useEffect } from "react";
import logo from "../assets/logo.svg";
import { Search, Menu } from "lucide-react";

const Navbar = () => {
  const [query, setQuery] = useState("");

  const [menuOpen, setMenuOpen] = useState(false);

  const toggleMenu = () => !menuOpen;

  useEffect(() => {
    const handleKey = (e: KeyboardEvent) => {
      if (e.key === "Escape" && menuOpen) setMenuOpen(false);
    };
    document.addEventListener("keydown", handleKey);
    return () => document.removeEventListener("keydown", handleKey);
  }, [menuOpen]);

  return (
    <nav className="flex items-center justify-between px-8 md:px-14 lg:px-20 py-6">
      <div>
        <img src={logo} alt="TalentFlow" className="w-16 h-auto" />
      </div>

      <div className="flex-1 hidden md:flex items-center pl-15.5 gap-8">
        <label
          htmlFor="search-course"
          className="max-sm:sr-only text-lg leading-6 -tracking-[0.02em] font-medium"
        >
          Find Course
        </label>
        <div className="relative">
          <input
            type="text"
            id="search-course"
            placeholder="Search for a course"
            value={query}
            onChange={(e) => setQuery(e.target.value)}
            className="text-sm leading-4 font-sans text-text-muted bg-card rounded-lg pl-3 pr-16 py-3"
          />
          <Search className="absolute right-3.75 top-1/2 -translate-y-1/2" />
        </div>
      </div>

      <button className="hidden md:block bg-primary text-primary-foreground text-base font-sans px-12.5 py-3.75 rounded-lg">
        Login
      </button>

      <button
        className="md:hidden"
        aria-expanded={menuOpen}
        aria-controls="main-menu"
        onClick={() => toggleMenu}
      >
        <Menu className="w-6 h-6" />
      </button>
    </nav>
  );
};

export default Navbar;
