import { Search, Heart, Play, Clock, Video, Star } from "lucide-react";
import des from "../../assets/icons/design.svg";
import dev from "../../assets/icons/development.svg";
import fin from "../../assets/icons/finance.svg";
import ana from "../../assets/icons/analysis.svg";
import uiux from "../../assets/images/temp/uiux.jpg";
import yt from "../../assets/images/temp/yt.jpg";
import faceless from "../../assets/images/temp/faceless.jpg";
import ai from "../../assets/images/temp/data-ai.jpg";
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

        <div className="grid max-sm:grid-flow-col max-sm:auto-cols-max md:grid-cols-[repeat(auto-fit,minmax(296px,1fr))] lg:grid-cols-4 gap-6 overflow-x-auto">
          {courses.slice(0, 4).map((course) => (
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
                      to=""
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
    </section>
  );
};
