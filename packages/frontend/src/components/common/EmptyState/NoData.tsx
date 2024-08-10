type NoDataProps = {
  message: string;
};

export const NoData: React.FC<NoDataProps> = ({ message }) => {
  return (
    <div className="flex flex-col justify-center items-center gap-6 mb-6">
      <img src="/noChannels.svg" alt="" />
      <div className="text-center">
        <h3 className="font-bold text-xl text-white mb-2">No Data</h3>
        <p className="text-muted-foreground text-sm">{message}</p>
      </div>
    </div>
  );
};
