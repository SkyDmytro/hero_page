import { motion, MotionValue } from "framer-motion";

interface ParallaxTitileProps {
  yText: MotionValue<string>;
}
export const ParallaxTitile = ({ yText }: ParallaxTitileProps) => {
  return (
    <motion.h1 style={{ y: yText }} className="text-[100px] text-center">
      Parallax Effect
    </motion.h1>
  );
};
