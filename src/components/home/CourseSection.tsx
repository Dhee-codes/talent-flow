import { Search, Play, Clock, BookOpen, Star } from "lucide-react";
import des from "../../assets/icons/design.svg";
import dev from "../../assets/icons/development.svg";
import fin from "../../assets/icons/finance.svg";
import ana from "../../assets/icons/analysis.svg";
import { Link } from "react-router-dom";

const categories = [
  {
    name: "Design",
    icon: des,
    color: "bg-success-light text-success",
  },
  {
    name: "Development",
    icon: dev,
    color: "bg-error-light text-error",
  },
  {
    name: "Finance",
    icon: fin,
    color: "bg-primary-light text-primary-dark",
  },
  {
    name: "Analysis",
    icon: ana,
    color: "bg-primary-lighter text-primary-darker",
  },
];

const courses = [
  {
    title: "UI/UX design for beginners: From Beginner to Pro",
    image: "/api/placeholder/400/250",
    duration: "2hr 38mins",
    lessons: "10 Lessons",
    rating: 4.7,
    price: "₦104,500",
  },
  // ... repeat for other courses
];

export const CourseSection = () => {
  return (
    <section>
      {/* Top Categories */}
      <div className="bg-card px-4 md:px-18 lg:px-20 py-6 md:py-20 lg:py-25">
        <h2 className="text-[1.25rem] md:text-[2rem] leading-7 md:leading-10 font-semibold mb-6 md:mb-13">
          Top Category
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-[repeat(auto-fit,minmax(230px,1fr))] lg:grid-cols-5 gap-y-6 gap-x-8">
          {categories.map((cat) => (
            <div
              key={cat.name}
              className={`${cat.color} md:max-w-57.5 aspect-230/220 rounded-lg flex flex-col items-center justify-center cursor-pointer transition-opacity hover:opacity-80`}
            >
              <img
                src={cat.icon}
                alt=""
                aria-hidden="true"
                className="w-11 md:w-13"
              />
              <span className="mt-4 text-[1.25rem] md:text-[1.75rem] leading-7 -tracking-[0.02em] font-medium">
                {cat.name}
              </span>
            </div>
          ))}
          <div className="md:max-w-57.5 aspect-230/220 bg-warning-light rounded-lg flex flex-col items-center justify-center">
            <Search className="w-11 h-11 md:w-13 md:h-13 text-primary mb-4" />
            <Link
              to="/courses"
              className="bg-primary transition-colors hover:bg-accent text-primary-foreground px-12.5 py-3.5 rounded-lg text-base leading-4.5"
            >
              View All
            </Link>
          </div>
        </div>
      </div>

      {/* Featured Courses */}
      <div className="px-4 md:px-18 lg:px-20 py-6 md:py-20 lg:py-25">
        <div className="flex justify-between items-center bg-card px-2 md:px-4 py-4.5 md:py-3.5 mb-10.5 md:mb-7">
          <h2 className="text-[1.25rem] md:text-[2rem] leading-7 md:leading-10 font-semibold">
            Feature Courses
          </h2>
          <Link
            to="/courses"
            className="flex justify-center items-center gap-6 text-primary transition-colors hover:text-accent text-base leading-4.5 mr-5"
          >
            See All
            <svg
              width="5"
              height="9"
              viewBox="0 0 5 9"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M0 8.33333V0L4.16667 4.16667L0 8.33333Z"
                fill="#6090FA"
              />
            </svg>
          </Link>
        </div>

        <div className="grid max-sm:grid-flow-col max-sm:auto-cols-max md:grid-cols-[repeat(auto-fit,minmax(296px,1fr))] lg:grid-cols-4 gap-6 overflow-auto">
          {Array(4)
            .fill(courses[0])
            .map((course, idx) => (
              <div
                key={idx}
                className="max-w-68.5 md:max-w-74 aspect-274/515 md:aspect-296/515 bg-card rounded-lg px-3 py-4 overflow-hidden hover:scale-105 transition-transform"
              >
                <div className="relative rounded-sm overflow-hidden group">
                  <img
                    src={course.image}
                    alt="course"
                    className="w-full aspect-250/255 md:aspect-272/255 rounded-lg object-cover"
                  />
                  <div className="absolute inset-0 bg-black/20 flex items-center justify-center">
                    <div className="bg-white/90 p-3 rounded-full">
                      <Play className="fill-slate-800 text-slate-800 w-4 h-4" />
                    </div>
                  </div>
                </div>
                <div className="pt-6 pb-4">
                  <h3 className="font-bold text-sm mb-4 leading-snug h-10">
                    {course.title}
                  </h3>
                  <div className="flex items-center gap-4 text-slate-500 text-xs mb-3">
                    <span className="flex items-center gap-1">
                      <Clock size={14} /> {course.duration}
                    </span>
                    <span className="flex items-center gap-1">
                      <BookOpen size={14} /> {course.lessons}
                    </span>
                  </div>
                  <div className="bg-orange-50 text-orange-600 w-fit px-2 py-1 rounded text-xs font-bold mb-6 flex items-center gap-1">
                    <Star size={12} fill="currentColor" /> {course.rating}
                  </div>
                  <div className="flex items-center justify-between border-t pt-4">
                    <span className="font-bold text-slate-800">
                      {course.price}
                    </span>
                    <button className="bg-blue-500 text-white px-4 py-2 rounded-lg text-xs font-medium">
                      Add to cart
                    </button>
                  </div>
                </div>
              </div>
            ))}
        </div>
      </div>
    </section>
  );
};
