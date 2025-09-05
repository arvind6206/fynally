const ResourceCard = ({ title, category, link, image }) => (
  <a
    href={link}
    target="_blank"
    rel="noopener noreferrer"
    className="group block rounded-xl shadow-md overflow-hidden hover:shadow-xl transition-transform transform hover:-translate-y-1 hover:scale-105 focus:outline-none focus:ring-2 focus:ring-blue-500 bg-white dark:bg-gray-900"
    role="link"
    aria-label={`${title} - ${category}`}
  >
    {/* Image */}
    <div className="h-48 w-full overflow-hidden">
      <img
        src={image}
        alt={title}
        className="object-cover w-full h-full group-hover:scale-110 transition-transform duration-500"
      />
    </div>

    {/* Content */}
    <div className="p-4">
      <span className="inline-block mb-2 px-3 py-1 text-xs font-semibold rounded-full bg-blue-100 dark:bg-blue-800 text-blue-800 dark:text-blue-200">
        {category}
      </span>
      <h3 className="text-lg font-bold mb-1 text-gray-800 dark:text-gray-100 group-hover:text-blue-600 transition">
        {title}
      </h3>
      <p className="text-sm text-gray-600 dark:text-gray-300">
        Click to visit this resource
      </p>
    </div>
  </a>
);

export default ResourceCard;
