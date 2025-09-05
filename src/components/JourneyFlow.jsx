import { motion } from "framer-motion";

const journeySteps = ["Student", "Learner", "Intern", "Employee"];

const JourneyFlow = () => {
  return (
    <div className="flex flex-col items-center mt-10">
      <h2 className="text-2xl font-bold mb-6">Your Career Journey</h2>
      <div className="flex flex-wrap justify-center gap-8">
        {journeySteps.map((step, idx) => (
          <motion.div
            key={idx}
            className="relative p-6 w-40 bg-blue-200 dark:bg-blue-900 rounded-lg shadow-lg text-center"
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: idx * 0.3, duration: 0.6 }}
          >
            <span className="font-bold text-lg">{step}</span>

            {/* Arrow except last */}
            {idx < journeySteps.length - 1 && (
              <motion.div
                className="absolute top-1/2 right-[-20px] w-10 h-1 bg-gray-400 dark:bg-gray-300 rounded"
                initial={{ scaleX: 0 }}
                animate={{ scaleX: 1 }}
                transition={{ delay: idx * 0.3 + 0.6, duration: 0.5 }}
              />
            )}
          </motion.div>
        ))}
      </div>
    </div>
  );
};

export default JourneyFlow;
