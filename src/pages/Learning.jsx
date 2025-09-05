import { useEffect, useState } from "react";
import { fetchLearning } from "../services/api";

const Learning = () => {
  const [courses, setCourses] = useState([]);

  useEffect(() => {
    fetchLearning().then(setCourses);
  }, []);

  return (
    <div className="p-6">
      <h2 className="text-3xl font-bold mb-8 text-center text-gray-800 dark:text-gray-100">
        Learning Resources
      </h2>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
        {courses.map((course) => (
          <div
            key={course.id}
            className="group block rounded-xl overflow-hidden shadow-md hover:shadow-xl transform hover:-translate-y-1 hover:scale-105 transition bg-white dark:bg-gray-900 focus:outline-none focus:ring-2 focus:ring-blue-500"
          >
            {/* Image */}
            <div className="h-48 w-full overflow-hidden">
              <img
                src={course.image}
                alt={course.title}
                className="object-cover w-full h-full group-hover:scale-110 transition-transform duration-500"
              />
            </div>

            {/* Content */}
            <div className="p-4">
              <span className="inline-block mb-2 px-3 py-1 text-xs font-semibold rounded-full bg-blue-100 dark:bg-blue-800 text-blue-800 dark:text-blue-200">
                {course.category}
              </span>
              <h3 className="text-lg font-bold mb-2 text-gray-800 dark:text-gray-100">
                {course.title}
              </h3>
              <a
                href={course.docLink}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-block px-4 py-2 bg-blue-600 text-white rounded hover:bg-blue-700 transition"
              >
                Start Learning
              </a>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Learning;
