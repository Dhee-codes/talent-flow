import CoursesCard from "./CoursesCard.tsx";
import PopularCourses from "./PopularCourse.tsx";
import { courses } from "../../data/courses.ts"
import type { Course } from "../../utils/types.ts";
import { Faq } from "./Faq.tsx";

const Dashboard = () => {
  return (
    <div className="p-6">
      <h1 className="text-2xl font-semibold mb-6">
        Explore Courses
      </h1>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
        {courses.map((course: Course) => (
          <CoursesCard key={course.id} course={course} />
        ))}
      </div>

      <PopularCourses />

      <Faq />

    </div>
  );
};

export default Dashboard;