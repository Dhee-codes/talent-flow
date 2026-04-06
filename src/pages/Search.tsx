import { useState } from "react";
import { useSearchParams } from "react-router-dom";
import { SearchBar } from "../components/ui/SearchBar";
import { Link } from "react-router-dom";
import { Heart, Play, Clock, Video, Star } from "lucide-react";
import uiux from "../../assets/images/temp/uiux.jpg";
import yt from "../../assets/images/temp/yt.jpg";
import faceless from "../../assets/images/temp/faceless.jpg";
import ai from "../../assets/images/temp/data-ai.jpg";

const courses = [
  {
    id: 1,
    title: "UI/UX design for beginners: From Beginner to Pro",
    image: uiux,
    duration: "2hr 38mins",
    lessons: "10 Lessons",
    rating: 4.7,
    price: "₦104,500",
    hasVideo: true,
    isFavorited: false,
  },
  {
    id: 2,
    title: "Faceless YouTube Automation: From Beginner to Pro",
    image: yt,
    duration: "2hr 38mins",
    lessons: "10 Lessons",
    rating: 4.7,
    price: "₦104,500",
    hasVideo: true,
    isFavorited: false,
  },
  {
    id: 3,
    title: "Ethical Hacking & Cybersecurity: Protection from the Ground Up",
    image: faceless,
    duration: "4hr 15mins",
    lessons: "18 Lessons",
    rating: 4.9,
    price: "₦115,000",
    hasVideo: true,
    isFavorited: true,
  },
  {
    id: 4,
    title: "Data Analysis with AI",
    image: ai,
    duration: "2hr 38mins",
    lessons: "10 Lessons",
    rating: 4.7,
    price: "₦104,500",
    hasVideo: true,
    isFavorited: false,
  },
];

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

      <div className="grid max-sm:grid-flow-col max-sm:auto-cols-max md:grid-cols-[repeat(auto-fit,minmax(296px,1fr))] lg:grid-cols-4 gap-6 overflow-x-auto">
        {filteredCourses.map((course) => (
          <div
            key={course.id}
            className="max-w-68.5 md:max-w-74 aspect-274/515 md:aspect-296/515 bg-card rounded-lg px-3 py-4 overflow-hidden"
          >
            <div className="relative rounded-sm overflow-hidden group">
              <img
                src={course.image}
                alt={course.title}
                className="w-full aspect-250/255 md:aspect-272/255 rounded-lg object-cover"
              />
              <div className="absolute top-1.5 left-1.5 bg-card rounded-sm px-2.5 py-0.75">
                <Heart size={20} className="text-warning" />
              </div>
              <div className="absolute inset-0 flex items-center justify-center">
                <Link
                  to={`/courses/${course.id}`}
                  className="bg-card/90 p-3 rounded-full hover:scale-105 transition-transform"
                >
                  <Play className="fill-foreground text-foreground w-4 h-4" />
                </Link>
              </div>
            </div>
            <div className="text-base leading-6 -tracking-[0.02em] pt-6 pb-4">
              <h3 className="font-medium min-h-12 line-clamp-2 mb-4">
                {course.title}
              </h3>
              <div className="grid grid-cols-2 gap-x-2 gap-y-3.5 mb-6">
                <span className="flex items-center gap-2">
                  <Clock size={24} /> {course.duration}
                </span>
                <span className="flex items-center gap-2">
                  <Video size={24} /> {course.lessons}
                </span>
                <span className="w-fit px-2.5 py-1.5 rounded-lg border flex items-center gap-2.5">
                  <Star size={20} className="fill-warning text-warning" />{" "}
                  {course.rating}
                </span>
              </div>
              <div className="flex items-center justify-between">
                <span className="text-[1.125rem] font-semibold">
                  {course.price}
                </span>
                <button className="bg-primary transition-colors hover:bg-accent text-primary-foreground px-4.25 py-3.5 rounded-lg text-base leading-4.5">
                  Add to cart
                </button>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Search;
