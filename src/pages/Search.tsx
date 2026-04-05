import { useState } from "react";
import { useSearchParams } from "react-router-dom";
import { SearchBar } from "../components/ui/SearchBar";
import { Link } from "react-router-dom";

const dummyCourses = [
  {
    id: 1,
    name: "UI/UX Design for Beginners",
    price: 104500,
    description: "Learn UI/UX design from scratch",
  },
  {
    id: 2,
    name: "Faceless YouTube Automation",
    price: 104500,
    description: "Build a YouTube channel without showing your face",
  },
  {
    id: 3,
    name: "Data Analysis with AI",
    price: 104500,
    description: "Analyse data using modern AI tools",
  },
];

const Search = () => {
  const [searchParams] = useSearchParams();
  const [query, setQuery] = useState(searchParams.get("q") ?? "");

  const filteredCourses = dummyCourses.filter((course) =>
    course.name.toLowerCase().includes(query.toLowerCase()),
  );

  return (
    <div className="flex flex-col px-8 md:px-14 lg:px-20 py-10">
      <h1 className="text-2xl md:text-3xl font-semibold mb-5">
        Search Courses
      </h1>

      <SearchBar
        query={query}
        onChange={setQuery}
        onKeyDown={() => {}}
        alwaysShow
        fullWidth
      />

      <div className="grid grid-cols-1 gap-6 mt-12">
        {filteredCourses.map((course) => (
          <Link to={`/courses/${course.id}`} key={course.id}>
            <p>{course.name}</p>
          </Link>
        ))}
      </div>
    </div>
  );
};

export default Search;
