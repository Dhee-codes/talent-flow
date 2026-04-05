import {
  Palette,
  Code,
  Wallet,
  BarChart3,
  Search,
  Play,
  Star,
  Clock,
  BookOpen,
} from "lucide-react";

const categories = [
  {
    name: "Design",
    icon: <Palette className="w-8 h-8" />,
    color: "bg-success-light text-success",
  },
  {
    name: "Development",
    icon: <Code className="w-8 h-8" />,
    color: "bg-error-light text-error",
  },
  {
    name: "Finance",
    icon: <Wallet className="w-8 h-8" />,
    color: "bg-primary-light text-primary-dark",
  },
  {
    name: "Analysis",
    icon: <BarChart3 className="w-8 h-8" />,
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
    <section className="">
      {/* Top Categories */}
      <div className="bg-card px-4 md:px-18 lg:px-20 py-6 md:py-20 lg:py-25">
        <h2 className="text-[1.25rem] md:text-[2rem] leading-7 md:leading-10 font-semibold mb-6 md:mb-13">Top Category</h2>
        <div className="grid grid-cols-1 md:grid-cols-[repeat(auto-fit,minmax(23px,1fr))] gap-y-6 gap-x-8">
          {categories.map((cat) => (
            <div
              key={cat.name}
              className={`${cat.color} min-h-55 rounded-lg flex flex-col items-center justify-center cursor-pointer transition-opacity hover:`}
            >
              {cat.icon}
              <span className="mt-4 font-semibold text-lg">{cat.name}</span>
            </div>
          ))}
          <div className="min-h-55 bg-warning rounded-lg flex flex-col items-center justify-center">
            <Search className="w-8 h-8 text-blue-400 mb-4" />
            <button className="bg-blue-500 text-white px-6 py-2 rounded-lg text-sm">
              View All
            </button>
          </div>
        </div>
      </div>

      {/* Featured Courses */}
      <div className="max-w-6xl mx-auto">
        <div className="flex justify-between items-center mb-8">
          <h2 className="text-2xl font-bold text-slate-800">Feature Courses</h2>
          <button className="text-blue-500 font-medium text-sm">
            See All →
          </button>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
          {Array(4)
            .fill(courses[0])
            .map((course, idx) => (
              <div
                key={idx}
                className="bg-white rounded-2xl overflow-hidden shadow-sm hover:shadow-md transition-shadow"
              >
                <div className="relative group">
                  <img
                    src={course.image}
                    alt="course"
                    className="w-full h-48 object-cover"
                  />
                  <div className="absolute inset-0 bg-black/20 flex items-center justify-center">
                    <div className="bg-white/90 p-3 rounded-full">
                      <Play className="fill-slate-800 text-slate-800 w-4 h-4" />
                    </div>
                  </div>
                </div>
                <div className="p-5">
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
