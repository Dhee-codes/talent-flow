import CourseContent from "../components/CourseDetails/CourseContent";
import CourseHeader from "../components/CourseDetails/CourseHeader";
import Review from "../components/CourseDetails/Review";

export default function CourseDetails() {
  const course = {
    title: "Data Analysis for beginners: From Beginners to Pro",
    description:
      "Learn how to work with data from start to finish. In this course, you’ll understand how to collect, clean, and organize data, then analyze it to discover patterns and meaningful insights. You’ll also learn how to present your findings clearly to support better decision-making.",
    duration: "4–6 weeks",
    price: "₦104,500",
    image: "/2629a238dfad0c7cf517436d09a6af4ec624ba5a (1).png",
  };

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