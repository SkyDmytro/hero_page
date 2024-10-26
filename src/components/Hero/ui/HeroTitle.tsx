import { motion } from "framer-motion";
import { HeroTitleItem } from "./HeroTitleItem";
interface HeroTitleProps {
  titleText: string;
}
export const HeroTitle = ({ titleText }: HeroTitleProps) => {
  return (
    <>
      <motion.h1
        className="text-4xl sm:text-5xl md:text-6xl font-bold text-center mb-6"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.25 }}
      >
        {titleText.split("").map((char, index) => (
          <HeroTitleItem key={index} char={char} index={index} />
        ))}
      </motion.h1>
    </>
  );
};
