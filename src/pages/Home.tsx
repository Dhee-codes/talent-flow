import { Faq } from "../components/home/Faq";
import { HeroSection } from "../components/home/HeroSection";
import { CourseSection } from "../components/home/CourseSection";
import { FeedbackSection } from "../components/home/FeedbackSection";
import { MentorCTA } from "../components/home/MentorCTA";

const Home = () => {
  return (
    <main>
      <HeroSection />
      <CourseSection />
      <FeedbackSection />
      <Faq />
      <MentorCTA />
    </main>
  );
};

export default Home;