type MainHeadingProps = {
  title: string;
  classes?: string;
};

export const MainHeading: React.FC<MainHeadingProps> = ({ title, classes }) => {
  return <h1 className={`text-2xl mobile-medium:text-3xl font-bold mb-8 ${classes}`}>{title}</h1>;
};
