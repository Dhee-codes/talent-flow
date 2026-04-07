import { useState } from "react";
import illustration from "../assets/images/progress/illustration.jpg"
import uiux from "../assets/images/temp/uiux.jpg"
import cybersec from "../assets/images/temp/cybersec.jpg"
import iot from "../assets/images/temp/iot.jpg";

const lessons = [
    {
        id: 1,
        title: "Fundamentals of UI/UX Design",
        tags: ["Web Design", "UI Design", "UX Design"],
        rating: 4.7,
        startDate: "12th July, 2025",
        hoursSpent: 12,
        progress: 35,
        courseThumb: uiux
    },
    {
        id: 2,
        title: "Advanced React Patterns",
        tags: ["React", "JavaScript", "Frontend"],
        rating: 4.5,
        startDate: "3rd Aug, 2025",
        hoursSpent: 8,
        progress: 60,
        courseThumb: cybersec
    },
    {
        id: 3,
        title: "Node.js & REST APIs",
        tags: ["Backend", "Node.js", "APIs"],
        rating: 4.8,
        startDate: "20th Sept, 2025",
        hoursSpent: 5,
        progress: 100,
        courseThumb: iot
    },
];

const stats = [
    { value: 3, label: "Courses completed" },
    { value: 5, label: "Courses pending" },
    { value: 11, label: "Assignments" },
];

function getProgressColor(progress: number) {
    if (progress >= 75) return "bg-green-500";
    if (progress >= 40) return "bg-orange-400";
    return "bg-red-500";
}

const LearningProgress = () => {
    return (
        <div className="min-h-screen bg-background px-4 sm:px-6 py-6 sm:py-8 max-w-4xl mx-auto">

            {/* Welcome Banner */}
            <div className="bg-primary/10 border border-primary/20 rounded-2xl px-6 sm:px-8 py-6 sm:py-7 flex items-center justify-between mb-6 sm:mb-8 overflow-hidden relative">
                <div className="flex-1">
                    <p className="text-primary font-semibold text-sm mb-1" style={{ fontFamily: "var(--font-sans)" }}>
                        Hi Frederick,
                    </p>
                    <h1 className="text-text-heading text-xl sm:text-2xl font-bold mb-1 sm:mb-2" style={{ fontFamily: "var(--font-sans)" }}>
                        Welcome back.
                    </h1>
                    <p className="text-text-muted text-xs sm:text-sm">
                        You're making great progress, let's keep the momentum going
                    </p>
                </div>

                <div className="w-24 h-20 sm:w-36 sm:h-24 shrink-0 flex items-center justify-center ml-4">
                    <img src={illustration} alt="Welcome Banner" className="w-full h-full object-contain" />
                </div>
            </div>

            {/* Stat Cards - 1 col on mobile, 3 on desktop */}
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-3 sm:gap-4 mb-8 sm:mb-10">
                {stats.map((s) => (
                    <div
                        key={s.label}
                        className="bg-card border border-gray-100 rounded-xl px-5 sm:px-6 py-4 sm:py-5 flex items-center gap-4 shadow-sm hover:shadow-md hover:border-primary/30 transition-all duration-200"
                    >
                        <span
                            className="text-3xl font-bold text-text-heading"
                            style={{ fontFamily: "var(--font-sans)" }}
                        >
                            {s.value}
                        </span>
                        <span className="text-text-muted text-sm leading-snug">{s.label}</span>
                    </div>
                ))}
            </div>

            {/* My Lessons */}
            <h2
                className="text-text-heading text-lg font-bold mb-4 sm:mb-5"
                style={{ fontFamily: "var(--font-sans)" }}
            >
                My Lessons
            </h2>

            <div className="flex flex-col gap-4 sm:gap-5">
                {lessons.map((lesson) => (
                    <LessonCard key={lesson.id} lesson={lesson} />
                ))}
            </div>

        </div>
    );
};

export default LearningProgress;

function LessonCard({ lesson }: { lesson: typeof lessons[0] }) {
    const [hovered, setHovered] = useState(false);

    return (
        <div
            className={`bg-card border rounded-xl overflow-hidden transition-all duration-200
                flex flex-col sm:flex-row
                ${hovered ? "border-primary/40 shadow-md -translate-y-0.5" : "border-gray-100 shadow-sm"}`}
            onMouseEnter={() => setHovered(true)}
            onMouseLeave={() => setHovered(false)}
        >
            {/* Thumbnail - full width on mobile, sidebar on desktop */}
            <div className="w-full h-44 sm:h-auto sm:w-48 sm:min-w-48 p-3 bg-card flex items-center justify-center shrink-0">
                <img
                    src={lesson.courseThumb}
                    alt={lesson.title}
                    className="w-full h-full object-cover rounded-xl"
                />
            </div>

            {/* Info */}
            <div className="flex flex-col gap-3 p-4 sm:p-5 flex-1">

                {/* Title + Rating */}
                <div className="flex items-start justify-between gap-3">
                    <h3
                        className="text-text-heading font-semibold text-base leading-snug"
                        style={{ fontFamily: "var(--font-sans)" }}
                    >
                        {lesson.title}
                    </h3>
                    <div className="flex items-center gap-1 bg-yellow-50 border border-yellow-200 text-yellow-700 text-xs font-semibold px-2.5 py-1 rounded-full whitespace-nowrap shrink-0">
                        <span className="text-yellow-400 text-sm">★</span>
                        {lesson.rating}
                    </div>
                </div>

                {/* Tags */}
                <div className="flex gap-2 flex-wrap">
                    {lesson.tags.map((tag) => (
                        <span
                            key={tag}
                            className="text-primary bg-primary/10 border border-primary/20 text-xs font-medium px-3 py-1 rounded-full"
                        >
                            {tag}
                        </span>
                    ))}
                </div>

                {/* Meta - stacks on mobile */}
                <div className="flex flex-col sm:flex-row sm:items-center gap-1 sm:gap-5 text-text-muted text-xs">
                    <span>
                        <span className="font-semibold text-foreground">Start:</span> {lesson.startDate}
                    </span>
                    <span className="flex items-center gap-1">
                        <svg width="13" height="13" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                            <circle cx="12" cy="12" r="10" />
                            <polyline points="12 6 12 12 16 14" />
                        </svg>
                        {lesson.hoursSpent} hours spent
                    </span>
                </div>

                {/* Progress */}
                <div className="flex items-center gap-3">
                    <div className="flex-1 h-2 bg-gray-100 rounded-full overflow-hidden">
                        <div
                            className={`h-full rounded-full transition-all duration-500 ${getProgressColor(lesson.progress)}`}
                            style={{ width: `${lesson.progress}%` }}
                        />
                    </div>
                    <span className="text-text-muted text-xs whitespace-nowrap">
                        {lesson.progress}% completed
                    </span>
                </div>

                {/* Button - full width on mobile */}
                <div className="flex justify-end mt-1">
                    <button className="w-full sm:w-auto bg-[#5f88f9] hover:bg-accent text-primary-foreground text-sm font-semibold px-5 py-2 rounded-lg transition-colors duration-200 cursor-pointer">
                        Continue to course
                    </button>
                </div>

            </div>
        </div>
    );
}