import { useEffect, useState } from "react";
import { fetchInternships } from "../services/api";

const Internships = () => {
  const [internships, setInternships] = useState([]);

  useEffect(() => {
    fetchInternships().then(setInternships);
  }, []);

  return (
    <div className="p-4">
      <h2 className="text-2xl font-bold mb-6">Internships</h2>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {internships.map((intn) => (
          <div
            key={intn.id}
            className="p-4 bg-gray-100 dark:bg-gray-800 rounded shadow hover:shadow-lg transition"
          >
            <h3 className="font-bold text-lg mb-1">{intn.role}</h3>
            <p className="text-sm mb-2">{intn.company}</p>
            <a
              href={intn.link}
              className="inline-block px-4 py-1 bg-green-500 text-white rounded hover:bg-green-600 transition"
            >
              Apply Now
            </a>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Internships;
