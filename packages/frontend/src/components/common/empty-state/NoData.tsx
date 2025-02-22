import { motion } from "framer-motion";

export type NoDataProps = {
  message: string;
  illustrationSrc?: string;
  title?: string;
  buttonText?: string;
  onButtonClick?: () => void;
  secondaryMessage?: string;
  classes?: string;
};

export const NoData: React.FC<NoDataProps> = ({
  message,
  illustrationSrc = "/noChannels.svg", // Default illustration
  title = "No Data", // Default title
  buttonText, // Optional button text
  onButtonClick, // Optional button click handler
  secondaryMessage, // Optional secondary message
  classes,
}) => {
  return (
    <motion.div
      className={`${classes} flex flex-col justify-center items-center gap-4 my-auto`}
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.8 }}
    >
      {illustrationSrc && <img src={illustrationSrc} alt="No data illustration" />}
      <div className="text-center flex flex-col justify-center gap-1">
        <motion.h3
          className="font-bold text-xl text-white"
          initial={{ y: 20, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.5, delay: 0.3 }}
        >
          {title}
        </motion.h3>
        <motion.p
          className="text-muted-foreground text-xs mobile-medium:text-sm w-[80%] self-center"
          initial={{ y: 20, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.5, delay: 0.5 }}
        >
          {message}
        </motion.p>
        {secondaryMessage && (
          <motion.p
            className="text-muted-foreground text-xs mobile-medium:text-sm"
            initial={{ y: 20, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.5, delay: 0.7 }}
          >
            {secondaryMessage}
          </motion.p>
        )}
        {buttonText && onButtonClick && (
          <motion.button
            onClick={onButtonClick}
            className="mt-4 self-center bg-special text-white py-2 px-4 w-[fit-content] rounded-md hover:bg-special/90 focus:outline-none text-xs mobile-medium:text-sm"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            {buttonText}
          </motion.button>
        )}
      </div>
    </motion.div>
  );
};
