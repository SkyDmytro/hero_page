import { useScroll, useTransform } from "framer-motion";
import { ParallaxTitile } from "./ui/ParallaxTitile";
import { ParallaxMountains } from "./ui/ParallaxMountains";
import { ParallaxPlanets } from "./ui/ParallaxPlanets";
import { ParallaxStars } from "./ui/ParallaxStars";

export const Parallax = () => {
  const { scrollYProgress } = useScroll({
    offset: ["start start", "end start"],
  });

  const yText = useTransform(scrollYProgress, [0, 1], ["-200%", "250%"]);
  const yBg = useTransform(scrollYProgress, [0, 1], ["-25%", "25%"]);

  return (
    <div className="parallax bg-gradient-to-b from-[#111132] to-[#0c0c1d] w-full h-full relative flex items-center justify-center overflow-hidden">
      <ParallaxTitile yText={yText} />
      <ParallaxMountains />
      <ParallaxPlanets yBg={yBg} />
      <ParallaxStars xBg={yBg} />
    </div>
  );
};
