import { Link } from "react-router-dom";
export default function CourseHeader({ course }: any) {
  return (
    <div className="grid md:grid-cols-2 gap-15 items-center mb-12">
      <div>
        <p className="text-m text-gray-600 mb-2">Course / Data Analysis</p>
        <h1 className="text-2xl md:text-4xl font-bold mb-4">{course.title}</h1>
        <p className="text-gray-600 mb-6">{course.description}</p>

        <div className="flex items-center gap-6 mb-6">
          <p className="text-gray-600 text-2xl">
            <span className="font-semibold text-black">Duration:</span>{" "}
            {course.duration}
          </p>
          <p className="font-bold text-2xl">{course.price}</p>
        </div>

        <div className="flex gap-5">
          <Link
            to="/progress"
            className="bg-blue-500 text-white px-7 py-2 rounded-lg flex items-center gap-2"
          >
            Enroll Now
            <svg
              width="14"
              height="13"
              viewBox="0 0 14 13"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                fill-rule="evenodd"
                clip-rule="evenodd"
                d="M7.25628 0.256282C7.59799 -0.0854272 8.15201 -0.0854272 8.49372 0.256282L13.7437 5.50628C14.0854 5.84799 14.0854 6.40201 13.7437 6.74372L8.49372 11.9937C8.15201 12.3354 7.59799 12.3354 7.25628 11.9937C6.91457 11.652 6.91457 11.098 7.25628 10.7563L11.0126 7L0.875001 7C0.391752 7 0 6.60825 0 6.125C0 5.64175 0.391752 5.25 0.875001 5.25H11.0126L7.25628 1.49372C6.91457 1.15201 6.91457 0.59799 7.25628 0.256282Z"
                fill="white"
              />
            </svg>
          </Link>
          <button className="bg-white border border-blue-500 text-blue-500 px-7 py-2 rounded-lg flex items-center gap-2">
            Add to cart
            <svg
              width="18"
              height="17"
              viewBox="0 0 18 17"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M0.75 0.75H1.90474C2.32947 0.75 2.70115 1.03555 2.81059 1.44594L3.12991 2.64341M5.125 10.125C3.74429 10.125 2.625 11.2443 2.625 12.625H15.75M5.125 10.125H14.4735C15.4078 8.2078 16.2231 6.22196 16.9098 4.17709C12.9417 3.16371 8.78376 2.625 4.5 2.625C4.04184 2.625 3.58512 2.63116 3.12991 2.64341M5.125 10.125L3.12991 2.64341M3.875 15.125C3.875 15.4702 3.59518 15.75 3.25 15.75C2.90482 15.75 2.625 15.4702 2.625 15.125C2.625 14.7798 2.90482 14.5 3.25 14.5C3.59518 14.5 3.875 14.7798 3.875 15.125ZM14.5 15.125C14.5 15.4702 14.2202 15.75 13.875 15.75C13.5298 15.75 13.25 15.4702 13.25 15.125C13.25 14.7798 13.5298 14.5 13.875 14.5C14.2202 14.5 14.5 14.7798 14.5 15.125Z"
                stroke="#6090FA"
                stroke-width="1.5"
                stroke-linecap="round"
                stroke-linejoin="round"
              />
            </svg>
          </button>
        </div>
      </div>

      <div>
        <img src={course.image} alt="course" className="w-full rounded-xl" />
      </div>
    </div>
  );
}
