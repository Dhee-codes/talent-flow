import { useParams } from "react-router-dom";
import { courses } from "../lib/courses";
import CourseContent from "../components/CourseDetails/CourseContent";
import CourseHeader from "../components/CourseDetails/CourseHeader";
import Review from "../components/CourseDetails/Review";

export default function CourseDetails() {
  const { id } = useParams();
  const course = courses.find((c) => String(c.id) === id);

  if (!course) return <div>Course not found</div>;

  return (
    <div >
      <div className="px-4 md:px-10 lg:px-20 ">
        <CourseHeader course={course} />
      </div>
      <CourseContent />
      <div className="px-4 md:px-10 lg:px-20 ">
        <Review />
      </div>
    </div>
  );
}