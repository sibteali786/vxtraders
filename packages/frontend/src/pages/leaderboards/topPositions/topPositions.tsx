import { PeriodSelector } from "../periodSelector";
import { trpc } from "@/trpc";
import { PreviewSkeleton } from "@/components/common/previewSkeleton";
import { useTopPositionsPeriodStore } from "@/stores/useState";
import { PositionPreview } from "@/components/common/positionCard";
import { MAX_LIST_COUNT } from "@/stores/constants";

export function TopPositions() {
  const selectedTopPositionsPeriod = useTopPositionsPeriodStore((state) => state.selectedPeriod);
  const setPositionsPeriod = useTopPositionsPeriodStore((state) => state.setPeriod);
  const topPositions = trpc.topPositions.useQuery({
    count: MAX_LIST_COUNT,
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
