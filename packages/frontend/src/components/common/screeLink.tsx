import { Link } from "react-router-dom";

type ScreenLinkProps = {
  title: string;
  link: string;
};

export const ScreenLink: React.FC<ScreenLinkProps> = ({ title, link }) => {
  return (
    <Link to={link} className="text-white hover:text-white/80">
      <div className="flex justify-between">
        <p className="font-semibold text-lg">{title}</p>
        <p className="font-semibold">&gt;</p>
      </div>
    </Link>
  );
};
