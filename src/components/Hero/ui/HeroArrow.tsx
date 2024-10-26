import { motion } from "framer-motion";
import arrow from "../../../assets/down-arrow-svgrepo-com.svg";
export const HeroArrow = () => {
  return (
    <motion.img
      className="h-8 w-8 stroke-2 absolute bottom-8 z-10"
      initial={{ opacity: 0, y: 20 }}
      animate={{
        opacity: 1,
        y: [0, -10, 0],
      }}
      transition={{
        duration: 0.75,
        repeat: Infinity,
        repeatType: "loop",
      }}
      src={arrow}
      alt="arrow-down"
    />
  );
};
