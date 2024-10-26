import { motion, MotionValue } from "framer-motion";
import stars from "../../../assets/stars.png";
interface ParallaxStarsProps {
  xBg: MotionValue<string>;
}
export const ParallaxStars = ({ xBg }: ParallaxStarsProps) => {
  return (
    <motion.div
      className="stars bg-cover bg-bottom absolute w-full h-full z-10"
      style={{
        x: xBg,
        backgroundImage: `url(${stars})`,
      }}
    ></motion.div>
  );
};
