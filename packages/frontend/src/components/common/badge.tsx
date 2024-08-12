import React from "react";

type BadgeProps = {
  children: React.ReactNode;
};

export const Badge: React.FC<BadgeProps> = ({ children }) => {
  return <div className="bg-white/30 text-white text-[8px] px-2 py-[1px] rounded-[2px]">{children}</div>;
};
