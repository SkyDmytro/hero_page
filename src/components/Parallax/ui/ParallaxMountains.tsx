import { motion } from "framer-motion";
import mountains from "../../../assets/mountains.png";
export const ParallaxMountains = () => {
  return (
    <motion.div
      className="mountains bg-cover bg-bottom absolute w-full h-full z-30"
      style={{
        backgroundImage: `url(${mountains})`,
      }}
    ></motion.div>
  );
};
