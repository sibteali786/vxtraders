import { PeriodSelector } from "../period-selector";
import { trpc } from "@/trpc";
import { PreviewSkeleton } from "@/components/common/previewSkeleton";
import { useGlobalValues, useTopPositionsPeriodStore } from "@/stores/useState";
import { PositionPreview } from "@/components/common/positionCard";

export function TopPositions() {
  const selectedTopPositionsPeriod = useTopPositionsPeriodStore((state) => state.selectedPeriod);
  const setPositionsPeriod = useTopPositionsPeriodStore((state) => state.setPeriod);
  const maxCount = useGlobalValues((state) => state.maxListCount);
  const topPositions = trpc.topPositions.useQuery({
    count: maxCount,
    timeframe: selectedTopPositionsPeriod,
  });

  return (
    <div className="py-4 space-y-7 h-fit px-default">
      <div className="flex justify-between items-center">
        <h2 className="text-3xl font-bold">Top Positions</h2>
        <PeriodSelector period={selectedTopPositionsPeriod} setPeriod={setPositionsPeriod} />
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
