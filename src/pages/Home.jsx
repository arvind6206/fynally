import JourneyFlow from "../components/JourneyFlow";

const Home = () => {
  return (
    <div className="space-y-16 py-10 px-4 md:px-16">
      {/* Hero Section */}
      <section className="text-center space-y-4">
        <h1 className="text-4xl md:text-5xl font-bold">Welcome to Fynally.io</h1>
        <p className="text-lg md:text-xl text-gray-700 dark:text-gray-300">
          Your life companion guiding you from Student → Employee
        </p>
      </section>

      {/* Journey Flow Section */}
      <section>
        <JourneyFlow />
      </section>

      {/* Call to Action Section */}
      <section className="text-center">
        <p className="text-lg mb-4">Explore our resources, learning, internships, and employment opportunities.</p>
        <div className="flex justify-center space-x-4 flex-wrap">
          <a
            href="/resources"
            className="px-6 py-3 bg-blue-500 text-white rounded shadow hover:bg-blue-600 transition"
          >
            Resources
          </a>
          <a
            href="/learning"
            className="px-6 py-3 bg-green-500 text-white rounded shadow hover:bg-green-600 transition"
          >
            Learning
          </a>
          <a
            href="/internships"
            className="px-6 py-3 bg-yellow-500 text-white rounded shadow hover:bg-yellow-600 transition"
          >
            Internships
          </a>
          <a
            href="/employment"
            className="px-6 py-3 bg-purple-500 text-white rounded shadow hover:bg-purple-600 transition"
          >
            Employment
          </a>
        </div>
      </section>
    </div>
  );
};

export default Home;
