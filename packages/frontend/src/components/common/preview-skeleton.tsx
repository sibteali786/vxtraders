import { Card } from "../ui/card";
import { Skeleton } from "../ui/skeleton";


export function PreviewSkeleton() {
  return (
    <Card className="flex items-center space-x-4 p-3">
      <Skeleton className="h-12 w-12 rounded-full" />
      <div className="space-y-2">
        <Skeleton className="h-4 w-[250px]" />
        <Skeleton className="h-4 w-[200px]" />
      </div>
    </Card>
  );
}
