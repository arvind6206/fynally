import { useEffect, useState } from "react";
import { fetchEmployment } from "../services/api.js";

const Employment = () => {
  const [jobs, setJobs] = useState([]);

  useEffect(() => {
    fetchEmployment().then(setJobs);
  }, []);

  return (
    <div className="p-4">
      <h2 className="text-2xl font-bold mb-6">Employment Opportunities</h2>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {jobs.map((job) => (
          <div
            key={job.id}
            className="p-4 bg-gray-100 dark:bg-gray-800 rounded shadow hover:shadow-lg transition"
          >
            <h3 className="font-bold text-lg mb-1">{job.role}</h3>
            <p className="text-sm mb-2">{job.company}</p>
            <a
              href={job.link}
              className="inline-block px-4 py-1 bg-purple-500 text-white rounded hover:bg-purple-600 transition"
            >
              Apply
            </a>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Employment;
