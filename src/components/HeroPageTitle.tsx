import { motion } from "framer-motion";
interface HeroPageTitleProps {
  title: string;
  subtitle: string;
}
export const HeroPageTitle = ({ title, subtitle }: HeroPageTitleProps) => {
  return (
    <>
      <motion.h1
        className="text-4xl sm:text-5xl md:text-6xl font-bold text-center mb-6"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.25 }}
      >
        {title.split("").map((char, index) => (
          <motion.span
            key={index}
            initial={{ opacity: 0, filter: "blur(10px)" }}
            animate={{ opacity: 1, filter: "blur(0px)" }}
            transition={{ duration: 0.25, delay: index * 0.05 }}
          >
            {char}
          </motion.span>
        ))}
      </motion.h1>

      <motion.p
        className="text-xl sm:text-2xl md:text-3xl text-center mb-8"
        initial={{ opacity: 0, filter: "blur(10px)" }}
        animate={{ opacity: 1, filter: "blur(0px)" }}
        transition={{ duration: 0.4, delay: title.length * 0.05 }}
      >
        {subtitle}
      </motion.p>

      <motion.button
        className="px-6 py-3 bg-white text-gray-900 z-10 rounded-full font-semibold text-lg shadow-lg hover:shadow-xl transition duration-150"
        whileHover={{ scale: 1.05 }}
        whileTap={{ scale: 0.95 }}
      >
        More Info
      </motion.button>

      <motion.div
        className="absolute bottom-8"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.25, delay: 0.5 }}
      ></motion.div>
    </>
  );
};
