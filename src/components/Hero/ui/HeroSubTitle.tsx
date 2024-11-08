import { motion } from "framer-motion";
interface HeroSubtitleProps {
  subtitleText: string;
}
export const HeroSubTitle = ({
  subtitleText,
}: HeroSubtitleProps): JSX.Element => {
  return (
    <motion.p
      className="text-xl sm:text-2xl md:text-3xl text-center mb-8"
      initial={{ opacity: 0, filter: "blur(10px)" }}
      animate={{ opacity: 1, filter: "blur(0px)" }}
      transition={{ duration: 0.5, delay: 0.6 }}
    >
      {subtitleText}
    </motion.p>
  );
};
