import { motion } from "framer-motion";
import { LinkItem } from "./LinkItem";

const variants = {
  open: {
    transition: {
      staggerChildren: 0.1,
    },
  },
  closed: {
    transition: {
      staggerChildren: 0.05,
      staggerDirection: -1,
    },
  },
};
const itemVariants = {
  open: {
    y: 0,
    opacity: 1,
  },
  closed: {
    y: 50,
    opacity: 0,
  },
};

export const Links = () => {
  const items = ["Hero", "Parallax"];
  return (
    <motion.div
      className="links absolute inset-0 flex flex-col items-center justify-center gap-20 text-black text-xl "
      variants={variants}
    >
      {items.map((item) => (
        <LinkItem item={item} itemVariants={itemVariants} />
      ))}
    </motion.div>
  );
};
