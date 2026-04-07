import hero from "../../assets/images/home/hero.jpg";
import { Link } from "react-router-dom";

export function HeroSection() {
  return (
    <section>
      <div className="w-full grid grid-cols-1 md:grid-cols-2 gap-4 md:gap-12 lg:gap-19 px-4 md:px-16 lg:px-20 pt-6 md:pt-12 lg:pt-17.5">
        <div>
          <p className="text-lg md:text-2xl leading-6 md:leading-8 -tracking-[0.02em] font-medium text-foreground/75 mb-2">
            Learn your favorite course
          </p>

          <h1 className="text-[1.75rem] md:text-[3.25rem] leading-9 md:leading-14 -tracking-[0.02em] font-bold max-w-[18ch] mb-6">
            Start learning from anywhere and build your career
          </h1>

          <p className="text-base leading-6 -tracking-[0.02em] mb-8">
            With lots of expert mentors, and flexible, engaging content. <br /> Ready
            to embark on a journey of career growth?
          </p>

          <Link
            to="/login"
            className="rounded-lg bg-primary px-5 py-3.75 text-base leading-4.5 font-medium text-primary-foreground transition-colors hover:bg-accent"
            type="button"
          >
            Get Started
          </Link>
        </div>

        <div>
          <img src={hero} alt="Hero illustration" className="w-full" />
        </div>
      </div>
    </section>
  );
}
