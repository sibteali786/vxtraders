import { Card } from "@/components/ui/card";
import { Skeleton } from "@/components/ui/skeleton";

export function AssetPreviewSkeleton() {
  return (
    <Card className="flex items-center py-2 space-x-4 rounded-lg border border-border px-2 mobile-small:py-2 mobile-medium:px-3 mobile-medium:py-3">
      <Skeleton className="h-8 w-6 mobile-small:h-6 mobile-medium:w-7 mobile-medium:h-7 rounded-full" />
      <div className="flex-1">
        <Skeleton className="h-4 w-24 mb-1" />
        <Skeleton className="h-3 w-16" />
      </div>
      <div className="text-right">
        <Skeleton className="h-4 w-20 mb-1" />
        <Skeleton className="h-3 w-12" />
      </div>
      <Skeleton className="h-6 w-12 mobile-medium:w-15 mobile-medium:h-7 rounded-md" />
    </Card>
  );
}
