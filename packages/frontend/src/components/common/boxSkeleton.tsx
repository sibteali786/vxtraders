import { Skeleton } from "../ui/skeleton";

type BoxSkeletonProps = {
  classes?: string;
};

export const BoxSkeleton = (props: BoxSkeletonProps) => {
  return (
    <div className="flex flex-col">
      <Skeleton className={`${props.classes}`} />
    </div>
  );
};
