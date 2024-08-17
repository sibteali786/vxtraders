import { Card } from "../ui/card";
import { Skeleton } from "../ui/skeleton";

export function PreviewSkeleton() {
  return (
    <Card className="flex items-center justify-between space-x-4 px-4 py-3">
      <div className="flex gap-4">
        <Skeleton className="h-8 w-8 rounded-full" />
        <div className="space-y-2 ">
          <Skeleton className="h-3 w-12" />
          <Skeleton className="h-3 w-7" />
        </div>
      </div>
      <div>
        <Skeleton className="h-3 w-8 rounded-full" />
      </div>
    </Card>
  );
}
