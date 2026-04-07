export const MentorCTA = () => {
  return (
    <section className="bg-primary px-4 md:px-16 lg:px-20 py-10 md:pb-20">
      <div className="bg-card rounded-lg px-2 md:px-16 lg:px-40 py-5 md:py-10 flex flex-col md:flex-row md:justify-between md:items-center">
        <div className="px-2 mb-6 md:mb-0">
          <span className="text-primary text-sm md:text-[1.25rem] lg:text-[1.75rem] leading-5 md:leading-9 -tracking-[0.02em] font-medium">
            Become A Mentor
          </span>
          <h2 className="md:max-w-[20ch] text-[1.125rem] md:text-[1.6rem] lg:text-[2.25rem] leading-6 md:leading-8 lg:leading-11 -tracking-[0.02em] font-semibold mt-2">
            You can Join TalentFlow as a mentor
          </h2>
        </div>
        <button className="max-sm:w-full bg-primary transition-colors hover:bg-accent text-primary-foreground md:px-3 lg:px-5 py-3.5 rounded-lg text-base leading-4.5">
          Become a Mentor
        </button>
      </div>
    </section>
  );
};
