import { motion, MotionValue } from "framer-motion";
import planets from "../../../assets/planets.png";

interface ParallaxPlanetsProps {
  yBg: MotionValue<string>;
}
export const ParallaxPlanets = ({ yBg }: ParallaxPlanetsProps) => {
  return (
    <motion.div
      className="planets bg-cover bg-bottom absolute w-full h-full z-20"
      style={{
        y: yBg,
        backgroundImage: `url(${planets})`,
      }}
    ></motion.div>
  );
};
