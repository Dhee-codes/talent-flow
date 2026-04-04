export const FeedbackSection = () => {
  return (
    <section className="py-20 bg-white text-center px-4">
      <h2 className="text-4xl font-bold mb-16">Feedback from our students</h2>
      <div className="max-w-3xl mx-auto">
        <p className="text-xl italic text-slate-700 leading-relaxed mb-8">
          "I really appreciate the flexibility I get with TalentFlow. I can try
          any course and switch to another. This motivates me to learn even
          more!"
        </p>
        <p className="font-bold text-lg mb-8">Loki Bright</p>
        <div className="flex justify-center items-center gap-4">
          <img
            src="/api/placeholder/50/50"
            className="w-12 h-12 rounded-full opacity-40"
            alt="student"
          />
          <img
            src="/api/placeholder/60/60"
            className="w-16 h-16 rounded-full border-2 border-white shadow-lg"
            alt="student"
          />
          <img
            src="/api/placeholder/50/50"
            className="w-12 h-12 rounded-full opacity-40"
            alt="student"
          />
        </div>
      </div>
    </section>
  );
};
