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
    color: "bg-green-50 text-green-600",
  },
  {
    name: "Development",
    icon: <Code className="w-8 h-8" />,
    color: "bg-red-50 text-red-500",
  },
  {
    name: "Finance",
    icon: <Wallet className="w-8 h-8" />,
    color: "bg-blue-50 text-blue-500",
  },
  {
    name: "Analysis",
    icon: <BarChart3 className="w-8 h-8" />,
    color: "bg-indigo-50 text-indigo-700",
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
    <section className="bg-slate-50 py-16 px-8">
      {/* Top Categories */}
      <div className="max-w-6xl mx-auto mb-16">
        <h2 className="text-2xl font-bold mb-8">Top Category</h2>
        <div className="grid grid-cols-2 md:grid-cols-5 gap-4">
          {categories.map((cat) => (
            <div
              key={cat.name}
              className={`${cat.color} rounded-xl p-8 flex flex-col items-center justify-center cursor-pointer transition-transform hover:scale-105`}
            >
              {cat.icon}
              <span className="mt-4 font-semibold text-lg">{cat.name}</span>
            </div>
          ))}
          <div className="bg-orange-50 rounded-xl p-8 flex flex-col items-center justify-center">
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
