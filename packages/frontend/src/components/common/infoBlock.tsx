import React from "react";

type InfoBlockProps = {
  value?: number | string;
  label: string;
  src?: string;
  children?: React.ReactNode;
};

export const InfoBlock: React.FC<InfoBlockProps> = ({ value, label, src, children }) => {
  return (
    <div className="flex flex-col text-white items-center justify-center">
      {children ? (
        children
      ) : src ? (
        <img src={src} alt={label} className="w-6 h-6" />
      ) : (
        <p className="text-sm">{value}</p>
      )}
      <p className="text-sm text-muted-foreground">{label}</p>
    </div>
  );
};
