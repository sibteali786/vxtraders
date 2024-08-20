import { Skeleton } from "../ui/skeleton";

export const ChartSkeleton = () => {
  return (
    <div className="flex flex-col gap-1 pt-4 items-center">
      <Skeleton className="w-full rounded-xl h-44 max-allowed-width:h-[17rem]" />
      <Skeleton className="w-[25%] rounded-full h-3" />
    </div>
  );
};
