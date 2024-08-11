type MainHeadingProps = {
  title: string;
};

export const MainHeading: React.FC<MainHeadingProps> = ({ title }) => {
  return <h1 className="text-3xl font-bold mb-8">{title}</h1>;
};
