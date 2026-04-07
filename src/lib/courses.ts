import uiux from "../assets/images/temp/uiux.jpg";
import yt from "../assets/images/temp/yt.jpg";
import faceless from "../assets/images/temp/faceless.jpg";
import ai from "../assets/images/temp/data-ai.jpg";

export interface CourseProps {
    id: number;
    title: string;
    image: string;
    duration: string;
    lessons: string;
    rating: number;
    price: string;
    isFavorited: boolean;
}

export const courses: CourseProps[] = [
  {
    id: 1,
    title: "UI/UX design for beginners: From Beginner to Pro",
    image: uiux,
    duration: "2hr 38mins",
    lessons: "10 Lessons",
    rating: 4.7,
    price: "₦104,500",
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
    isFavorited: false,
  },
];
