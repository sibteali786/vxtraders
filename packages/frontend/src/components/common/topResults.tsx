import React from "react";

// Define your custom props type
interface TopResultsProps extends React.HTMLAttributes<HTMLDivElement> {
  label: string;
  value: string;
}

export const TopResults: React.FC<TopResultsProps> = ({ className, label, value, ...props }) => {
  return (
    <div className={`text-right ${className}`} {...props}>
      <p className="text-xs text-muted-foreground font-bold mb-[-2px] tracking-widest">{label}</p>
      <p className="text-purple-500 text-lg font-bold">{value}</p>
    </div>
  );
};
