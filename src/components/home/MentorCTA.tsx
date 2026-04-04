export const MentorCTA = () => {
  return (
    <section className="bg-blue-500 py-20 px-4">
      <div className="max-w-6xl mx-auto bg-slate-50 rounded-xl p-12 flex flex-col md:flex-row justify-between items-center">
        <div className="mb-6 md:mb-0">
          <span className="text-blue-500 font-semibold text-lg">
            Become A Mentor
          </span>
          <h2 className="text-4xl font-bold text-slate-900 mt-2">
            You can Join TalentFlow as a <br /> mentor
          </h2>
        </div>
        <button className="bg-blue-500 hover:bg-blue-600 text-white px-8 py-4 rounded-xl font-medium transition-colors shadow-lg shadow-blue-200">
          Become a Mentor
        </button>
      </div>
    </section>
  );
};
