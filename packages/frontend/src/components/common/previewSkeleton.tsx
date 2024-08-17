import { Card } from "../ui/card";
import { Skeleton } from "../ui/skeleton";

export function PreviewSkeleton() {
  return (
    <Card className="flex items-center space-x-4 p-3">
      <Skeleton className="h-8 w-8 mobile-small:w-10 mobile-medium:w-9 rounded-full" />
      <div className="space-y-2 w-full">
        <Skeleton className="h-3 w-[70%] " />
	<Skeleton className="h-3 w-[50%]" />
      </div>
    </Card>
  );
}
