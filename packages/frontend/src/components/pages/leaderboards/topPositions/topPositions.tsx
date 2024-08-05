import { PeriodSelector } from "../period-selector";
import { trpc } from "@/trpc";
import { PreviewSkeleton } from "@/components/common/preview-skeleton";
import { usePeriodStore } from "@/stores/useState";
import { PositionPreview } from "@/components/common/position-preview";

export function TopPositions() {
  const selectedPeriod = usePeriodStore((state) => state.selectedPeriod);
  const topPositions = trpc.topPositions.useQuery({
    count: 10,
    timeframe: selectedPeriod,
  });

  return (
    <div className="p-4 space-y-7 h-fit">
      <div className="flex justify-between items-center">
        <h2 className="text-3xl font-bold">Top Positions</h2>
        <PeriodSelector />
      </div>
      <div className="space-y-3">
        {topPositions.isFetching
          ? Array(5)
              .fill(0)
              .map((_, i) => <PreviewSkeleton key={i} />)
          : topPositions.data?.positions.map((position, i) => (
              <PositionPreview key={i} position={position} />
            ))}
      </div>
      <div className="w-full p-10"></div>
    </div>
  );
}
