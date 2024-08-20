import { CircleX } from "lucide-react";
import { motion } from "framer-motion";

interface ErrorProps {
  children: React.ReactNode;
}

export const Error: React.FC<ErrorProps> = ({ children }) => {
  return (
    <motion.div
      initial={{ opacity: 0, scale: 0.8 }}
      animate={{ opacity: 1, scale: 1 }}
      transition={{ duration: 0.3, ease: "easeInOut" }}
      className="flex flex-col justify-center items-center w-full space-y-6 min-h-screen mb-6"
    >
      <motion.div
        initial={{ scale: 1 }}
        animate={{ scale: 1.1 }}
        transition={{
          repeat: Infinity,
          repeatType: "reverse",
          duration: 0.8,
        }}
      >
        <CircleX className="text-destructive drop-shadow-lg" size={50} />
      </motion.div>
      <div className="mobile-medium:w-[80%] text-xl font-bold text-center text-white">
        {children}
      </div>
      <motion.button
        whileHover={{ scale: 1.05 }}
        whileTap={{ scale: 0.95 }}
        className="px-6 py-2 mt-4 bg-destructive text-white font-semibold rounded-lg shadow-md hover:bg-red-700"
        onClick={() => window.location.reload()} // Example action: Refresh the page
      >
        Retry
      </motion.button>
    </motion.div>
  );
};
