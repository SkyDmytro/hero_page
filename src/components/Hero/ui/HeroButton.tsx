import { motion } from "framer-motion";
export const HeroButton = () => {
  return (
    <motion.button
      className="px-6 py-3 bg-white text-gray-900 z-10 rounded-full font-semibold text-lg shadow-lg hover:shadow-xl transition duration-150"
      whileHover={{ scale: 1.05 }}
      whileTap={{ scale: 0.95 }}
    >
      More Info
    </motion.button>
  );
};
