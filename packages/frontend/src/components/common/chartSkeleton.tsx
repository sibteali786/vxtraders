import { Skeleton } from "../ui/skeleton";

export const ChartSkeleton = () => {
  return (
    <div className="flex flex-col gap-1 pt-4 items-center px-default">
      {/* Responsive height based on aspect ratio matching the chart */}
      <Skeleton className="w-full rounded-xl aspect-[16/8.2] h-auto" />
      <Skeleton className="w-[50%] md:w-[35%] lg:w-[25%] rounded-full h-3 mt-2" />
    </div>
  );
};
