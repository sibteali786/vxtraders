import { motion } from "framer-motion";

type AnimateProps = {
  children: React.ReactNode;
};

export const Animate = ({ children }: AnimateProps) => {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.5 }}
    >
      {children}
    </motion.div>
  );
};
