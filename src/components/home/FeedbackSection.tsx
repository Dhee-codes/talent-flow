import jim from "../../assets/images/temp/jim.jpg";
import loki from "../../assets/images/temp/loki.jpg";
import anna from "../../assets/images/temp/anna.jpg";

export const FeedbackSection = () => {
  return (
    <section className="px-4 py-6 md:p-12 lg:p-24 bg-card text-center">
      <h2 className="text-xl md:text-[2rem] leading-7 md:leading-10 -tracking-[0.02em] max-sm:font-bold font-semibold text-left mb-6 md:mb-12 lg:mb-15.75">
        Feedback from our students
      </h2>
      <div>
        <figure className="mb-6">
          <blockquote className="text-[1.125rem] leading-7 italic max-w-[50ch] mx-auto">
            <p>
              "I really appreciate the flexibility I get with TalentFlow. I can
              try any course and switch to another. This motivates me to learn
              even more!"
            </p>
          </blockquote>

          <figcaption className="mt-6">
            <div className="text-sm leading-5 -tracking-[0.02em] font-medium">
              Loki Bright
            </div>
          </figcaption>
        </figure>
        <div className="flex justify-center items-center gap-5">
          <img
            src={jim}
            className="w-12 aspect-square rounded-full opacity-50"
            alt="student"
          />
          <img
            src={loki}
            className="w-14 aspect-square rounded-full"
            alt="student"
          />
          <img
            src={anna}
            className="w-12 aspect-square rounded-full opacity-50"
            alt="student"
          />
        </div>
      </div>
    </section>
  );
};
