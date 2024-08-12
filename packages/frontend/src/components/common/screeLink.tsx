import { ChevronRight } from "lucide-react";
import { Link } from "react-router-dom";

type ScreenLinkProps = {
  title: string;
  link: string;
};

export const ScreenLink: React.FC<ScreenLinkProps> = ({ title, link }) => {
  return (
    <Link to={link} className="text-white hover:text-white/80 hover:cursor-pointer">
      <div className="flex justify-between">
        <p className="font-semibold text-sm mobile-small:text-base mobile-medium:text-lg">{title}</p>
        <ChevronRight size={20} />
      </div>
    </Link>
  );
};
