import { Heart, Play, Clock, Video, Star } from "lucide-react";
import { Link } from "react-router-dom";
import type { Course } from "../../utils/types";

type Props = {
  course: Course;
};

const CourseCard = ({course}: Props) => {
    return (
        <div className="bg-card rounded-lg p-4">
            {/* Image */}
            <div className="relative">
                <img
                    src={course.image}
                    alt={course.title}
                    className="rounded-lg w-full h-48 object-cover"
                />

                <div className="absolute top-2 left-2 bg-white p-1 rounded">
                    <Heart size={16} />
                </div>

                <div className="absolute inset-0 flex items-center justify-center">
                    <Link to="#">
                        <div className="bg-white p-3 rounded-full">
                            <Play size={16} />
                        </div>
                    </Link>
                </div>
            </div>

            {/* Info */}
            <h3 className="mt-4 font-medium line-clamp-2">
                {course.title}
            </h3>

            <div className="flex justify-between text-sm mt-2">
                <span className="flex items-center gap-1">
                    <Clock size={16} /> {course.duration}
                </span>
                <span className="flex items-center gap-1">
                    <Video size={16} /> {course.lessons}
                </span>
            </div>

            <div className="flex justify-between items-center mt-3">
                <span className="flex items-center gap-1">
                    <Star size={16} /> {course.rating}
                </span>
                <span className="font-semibold">
                    ₦{course.price.toLocaleString()}
                </span>
            </div>

            <button className="mt-3 w-full bg-primary text-white py-2 rounded">
                Add to cart
            </button>
        </div>
    );
};

export default CourseCard;