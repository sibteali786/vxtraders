import { Button } from "@/components/ui/button";
import { PeriodSelector } from "./period-selector";
import { trpc } from "@/trpc";
import { PreviewSkeleton } from "@/components/common/preview-skeleton";
import { TraderPreview } from "@/components/common/trader-preview";
import { PositionPreview } from "@/components/common/position-preview";
import { Link } from "react-router-dom";
import { useTopPositionsPeriodStore, useTopTradersPeriodStore } from "@/stores/useState";

export function Leaderboards() {
  const selectedTopTradersPeriod = useTopTradersPeriodStore((state) => state.selectedPeriod);
  const setTradersPeriod = useTopTradersPeriodStore((state) => state.setPeriod);
  const selectedTopPositionsPeriod = useTopPositionsPeriodStore((state) => state.selectedPeriod);
  const setPositionsPeriod = useTopPositionsPeriodStore((state) => state.setPeriod);
  const topTraders = trpc.topTraders.useQuery({
    count: 5,
    timeframe: selectedTopTradersPeriod,
  });

  const topPositions = trpc.topPositions.useQuery({
    count: 5,
    timeframe: selectedTopPositionsPeriod,
  });

  return (
    <div className="p-4 space-y-4">
      <h1 className="text-3xl font-bold">Leaderboards</h1>
      <div className="flex justify-between items-center">
        <h2 className="text-xl font-semibold">Top Traders</h2>
        <PeriodSelector period={selectedTopTradersPeriod} setPeriod={setTradersPeriod} />
      </div>
      <div className="space-y-2">
        {topTraders.isFetching
          ? Array(5)
              .fill(0)
              .map((_, i) => <PreviewSkeleton key={i} />)
          : topTraders.data?.traders.map((trader, i) => <TraderPreview key={i} trader={trader} />)}
      </div>
      {topTraders.isFetched && (
        <Button className="w-full" asChild>
          <Link to="topTraders" className="text-white hover:text-white hover:underline">
            View More
          </Link>
        </Button>
      )}

      <div className="w-full p-3"></div>

      <div className="flex justify-between items-center">
        <h2 className="text-xl font-semibold">Top Positions</h2>
        <PeriodSelector period={selectedTopPositionsPeriod} setPeriod={setPositionsPeriod} />
      </div>
      <div className="space-y-2">
        {topPositions.isFetching
          ? Array(5)
              .fill(0)
              .map((_, i) => <PreviewSkeleton key={i} />)
          : topPositions.data?.positions.map((position, i) => (
              <PositionPreview key={i} position={position} />
            ))}
      </div>
      {topPositions.isFetched && (
        <Button className="w-full" asChild>
          <Link to="topPositions" className="text-white hover:text-white hover:underline">
            View More
          </Link>
        </Button>
      )}

      <div className="w-full p-10"></div>
    </div>
  );
}
