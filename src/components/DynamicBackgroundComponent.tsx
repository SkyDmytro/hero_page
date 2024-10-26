import { motion } from "framer-motion";
export const DynamicBackgroundComponent = () => {
  return (
    <motion.svg
      className="absolute w-full h-screen top-0 left-0"
      viewBox="0 0 100 100"
      preserveAspectRatio="none"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.5 }}
    >
      <motion.path
        d="M0,0 Q50,50 100,0 V100 H0 Z"
        fill="url(#gradient)"
        initial={{ d: "M0,100 Q50,100 100,100 V100 H0 Z" }}
        animate={{
          d: [
            "M0,100 Q50,100 100,100 V100 H0 Z",
            "M0,50 Q50,0 100,50 V100 H0 Z",
            "M0,0 Q50,50 100,0 V100 H0 Z",
          ],
        }}
        transition={{
          repeat: Infinity,
          repeatType: "reverse",
          duration: 10,
          ease: "easeInOut",
        }}
      />
      <defs>
        <linearGradient id="gradient" x1="0%" y1="0%" x2="100%" y2="100%">
          <stop offset="0%" stopColor="#4F46E5" />
          <stop offset="100%" stopColor="#9333EA" />
        </linearGradient>
      </defs>
    </motion.svg>
  );
};
