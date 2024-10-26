import { motion } from "framer-motion";

interface HeroTitleItemProps {
  char: string;
  index: number;
}

export const HeroTitleItem = ({ char, index }: HeroTitleItemProps) => {
  return (
    <motion.span
      key={index}
      initial={{ opacity: 0, filter: "blur(10px)" }}
      animate={{ opacity: 1, filter: "blur(0px)" }}
      transition={{ duration: 0.25, delay: index * 0.05 }}
    >
      {char}
    </motion.span>
  );
};
