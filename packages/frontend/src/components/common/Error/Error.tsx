import { motion } from "framer-motion";

interface ErrorProps {
  children: React.ReactNode;
  title: string;
  buttonText?: string;
  onClick?: () => void;
}

export const Error: React.FC<ErrorProps> = ({ children, title, buttonText, onClick }) => {
  return (
    <motion.div
      initial={{ opacity: 0, scale: 0.8 }}
      animate={{ opacity: 1, scale: 1 }}
      transition={{ duration: 0.3, ease: "easeInOut" }}
      className="flex flex-col justify-center items-center w-full gap-2 my-auto"
    >
      <img src="/errorIcon.png" className='w-8' />
      <h2 className="text-xl font-bold text-center text-white mb-1 tracking-[4%]">{title}</h2>
      <div className="text-sm text-center text-white">{children}</div>
      {buttonText && onClick && (
        <motion.button
          whileHover={{ scale: 1.02 }}
          whileTap={{ scale: 0.95 }}
          className="px-12 py-2 mt-4 bg-destructive text-white font-semibold rounded-lg shadow-md hover:bg-destructive-foreground"
          onClick={onClick} // Example action: Refresh the page
        >
          {buttonText}
        </motion.button>
      )}
    </motion.div>
  );
};
