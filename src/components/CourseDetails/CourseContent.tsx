
import ModuleItem from "./Module";

export default function CourseContent() {
  const modules = Array(7).fill({
    title: "Module 1: Digital AI in Data Analysis",
    lectures: "15 lectures",
    duration: "2hr 20mins",
  });

  return (
    <div className=" py-12 mb-3 bg-white">
      <h2 className="text-xl font-semibold px-10  mb-6">Course Content</h2>

      <div className="space-y-4 px-10 ">
        {modules.map((module, index) => (
          <ModuleItem key={index} module={module} />
        ))}
      </div>
    </div>
  );
}