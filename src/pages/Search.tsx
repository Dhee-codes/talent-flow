import { useState } from "react";
import { useSearchParams } from "react-router-dom";
import { SearchBar } from "../components/ui/SearchBar";
import { CourseList } from "../components/ui/CourseList";
import { courses } from "../lib/courses";

const Search = () => {
  const [searchParams] = useSearchParams();
  const [query, setQuery] = useState(searchParams.get("q") ?? "");

  const filteredCourses = courses.filter((course) =>
    course.title.toLowerCase().includes(query.toLowerCase()),
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

      <CourseList courses={filteredCourses} />
    </div>
  );
};

export default Search;
