import { useState } from "react";
import { motion } from "framer-motion";
import { Links } from "./ui/Links";
import { ToggleButton } from "./ui/ToggleButton";

const sidebarVariants = {
  open: {
    clipPath: "circle(1200px at 50px 50px)",
    transition: {
      type: "spring",
      stiffness: 20,
    },
  },
  closed: {
    clipPath: "circle(25px at 180px 58px)",
    transition: {
      delay: 0.5,
      type: "spring",
      stiffness: 400,
      damping: 40,
    },
  },
};
export const Sidebar = () => {
  const [open, setOpen] = useState(false);

  return (
    <motion.div
      className="fixed top-0 right-0 w-64 h-screen bg-white shadow-lg z-40"
      initial="closed"
      animate={open ? "open" : "closed"}
      variants={sidebarVariants}
    >
      <Links />
      <ToggleButton setOpen={setOpen} />
    </motion.div>
  );
};
