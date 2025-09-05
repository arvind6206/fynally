import { useEffect, useState } from "react";
import { fetchResources } from "../services/api";
import ResourceCard from "../components/ResourceCard";

const StudentResources = () => {
  const [resources, setResources] = useState([]);
  const [search, setSearch] = useState("");
  const [filter, setFilter] = useState("All");

  useEffect(() => {
    fetchResources().then(setResources);
  }, []);

  const filteredResources = resources.filter((res) => {
    const matchesSearch = res.title.toLowerCase().includes(search.toLowerCase());
    const matchesFilter = filter === "All" || res.category === filter;
    return matchesSearch && matchesFilter;
  });

  const categories = ["All", ...new Set(resources.map((res) => res.category))];

  return (
    <div className="p-6">
      <h2 className="text-4xl font-bold mb-8 text-center text-gray-800 dark:text-gray-100">
        Student Resources
      </h2>

      {/* Search Bar */}
      <div className="flex flex-col md:flex-row md:justify-center items-center gap-4 mb-8">
        <input
          type="text"
          placeholder="Search resources..."
          value={search}
          onChange={(e) => setSearch(e.target.value)}
          className="p-3 w-full md:w-1/2 border rounded-lg shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500 transition"
          aria-label="Search resources"
        />

        {/* Filter Buttons */}
        <div className="flex flex-wrap gap-2 justify-center mt-2 md:mt-0">
          {categories.map((cat) => (
            <button
              key={cat}
              className={`px-4 py-2 rounded-full text-sm font-medium transition 
                ${
                  filter === cat
                    ? "bg-blue-600 text-white shadow-lg"
                    : "bg-gray-200 dark:bg-gray-700 text-gray-700 dark:text-gray-200 hover:bg-blue-400 dark:hover:bg-blue-600"
                } focus:outline-none focus:ring-2 focus:ring-blue-500`}
              onClick={() => setFilter(cat)}
            >
              {cat}
            </button>
          ))}
        </div>
      </div>

      {/* Resource Cards */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
        {filteredResources.length > 0 ? (
          filteredResources.map((res) => <ResourceCard key={res.id} {...res} />)
        ) : (
          <p className="text-center col-span-full text-gray-500 dark:text-gray-300">
            No resources found.
          </p>
        )}
      </div>
    </div>
  );
};

export default StudentResources;
