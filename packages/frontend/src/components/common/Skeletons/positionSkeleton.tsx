import { Card } from "@/components/ui/card";
import { Skeleton } from "@/components/ui/skeleton";

export function PositionPreviewSkeleton() {
  return (
    <Card className="flex justify-between items-center py-3 rounded-lg space-x-4 px-2 mobile-medium:px-6">
      <div className="flex items-center rounded-lg space-x-4">
        <Skeleton className="w-10 h-10 rounded-full mobile-medium:w-9 mobile-medium:h-9" />
        <div className="flex flex-col space-y-1">
          <div className="flex items-center gap-1">
            <Skeleton className="h-4 w-20" />
            <Skeleton className="h-5 w-5 rounded-full" />
          </div>
          <div className="flex items-center space-x-2">
            <Skeleton className="h-3 w-10" />
            <Skeleton className="h-3 w-14 rounded-md" />
          </div>
        </div>
      </div>
      <div className="ml-auto text-right space-y-1">
        <Skeleton className="h-3 w-24" />
        <Skeleton className="h-3 w-16 rounded-md" />
      </div>
    </Card>
  );
}
