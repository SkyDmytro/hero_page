import { motion } from "framer-motion";
interface LinkItemProps {
  item: string;
  itemVariants: {
    open: {
      y: number;
      opacity: number;
    };
    closed: {
      y: number;
      opacity: number;
    };
  };
}
export const LinkItem = ({ item, itemVariants }: LinkItemProps) => {
  return (
    <motion.a
      href={`#${item}`}
      key={item}
      variants={itemVariants}
      whileHover={{ scale: 1.1 }}
      whileTap={{ scale: 0.95 }}
    >
      {item}
    </motion.a>
  );
};
