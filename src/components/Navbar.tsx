import { useState } from "react";
import logo from "../assets/logo.svg";

const Navbar = () => {
    const [query, setQuery] = useState("");

    const handleSearch = (e: React.ChangeEvent<HTMLFormElement>) => {
      e.preventDefault(); // stops page from reloading
      console.log(query); // you can send query to API or filter data
    };

  return (
    <nav className="flex items-center justify-between px-20 py-6 bg-blue-50">
      <div>
        <img src={logo} alt="TalentFlow" className="h-8 w-auto" />
      </div>

      <div className="flex-1 flex items-center border border-gray-200 rounded-full px-4 py-2 gap-2">
        <form onSubmit={handleSearch} className="flex gap-8">
          <label htmlFor="search-course" className="text-lg leading-6 -tracking-[0.02em] font-medium">Find Course</label>
          <input
            type="text"
            name="search-course"
            placeholder="Search for a course"
            value={query}
            onChange={(e) => setQuery(e.target.value)}
            className="border px-2 py-1"
          />
        </form>
      </div>

      <button className="bg-blue-500 text-white text-base px-12.5 py-3.75 rounded-lg">
        Login
      </button>
    </nav>
  );
};

export default Navbar;
