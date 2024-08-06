import { CircleX } from "lucide-react";

interface ErrorProps {
  children: React.ReactNode;
}

export const Error: React.FC<ErrorProps> = ({ children }) => {
  return (
    <div className="flex flex-col justify-center items-center w-full space-y-6 h-full">
      <CircleX className="text-destructive" size={40} />
      <div className="w-[80%] text-xl font-bold text-center">{children}</div>
    </div>
  );
};
