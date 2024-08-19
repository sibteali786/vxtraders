import { Card } from "../ui/card";
import { Skeleton } from "../ui/skeleton";

export function PreviewSkeleton() {
  return (
    <Card className="flex items-center justify-between space-x-4 px-2 mobile-medium:px-3 py-3 rounded-lg">
      <div className="flex items-center gap-1 mobile-larger:gap-2 w-full">
        <Skeleton className="min-w-8 h-8 w-8 mobile-medium:h-9 mobile-medium:w-10 rounded-full" />

        <div className="flex flex-col gap-1 mobile-medium:gap-[12px] w-full my-1 sm:my-0">
          <Skeleton className="h-3 mobile-large:h-4 w-[50%] mobile-medium:w-[40%]" />
          <Skeleton className="h-3 mobile-large:h-4 w-[30%] sm:w-[20%]" />
        </div>
      </div>
      <div>
        <Skeleton className="h-4 w-8 rounded-full" />
      </div>
    </Card>
  );
}
