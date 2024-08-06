import { Button } from "@/components/ui/button";
import { PeriodSelector } from "./period-selector";
import { trpc } from "@/trpc";
import { PreviewSkeleton } from "@/components/common/previewSkeleton";
import { TraderPreview } from "@/components/common/traderCard";
import { PositionPreview } from "@/components/common/positionCard";
import { Link } from "react-router-dom";
import { useTopPositionsPeriodStore, useTopTradersPeriodStore } from "@/stores/useState";
import { Error } from "@/components/common/Error/Error";

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
    <div className="py-4 space-y-10 pb-[8rem] h-full">
      <h1 className="text-3xl font-bold">Leaderboards</h1>
      {!topTraders.isError && !topPositions.isError ? (
        <div className="space-y-10">
          <div className="space-y-5">
            <div className="flex justify-between items-center">
              <h2 className="text-2xl font-semibold">Top Traders</h2>
              <PeriodSelector period={selectedTopTradersPeriod} setPeriod={setTradersPeriod} />
            </div>
            <div className="flex flex-col space-y-7">
              <div className="space-y-3">
                {topTraders.isLoading ? (
                  Array(5)
                    .fill(0)
                    .map((_, i) => <PreviewSkeleton key={i} />)
                ) : topTraders.isError ? (
                  <Error>{topTraders.error || "Something went wrong please try again !"}</Error>
                ) : (
                  topTraders.data?.traders.map((trader, i) => (
                    <TraderPreview key={i} trader={trader} />
                  ))
                )}
              </div>
              {topTraders.isFetched && (
                <Button className="w-full" asChild>
                  <Link to="topTraders" className="text-white hover:text-white hover:underline">
                    View More
                  </Link>
                </Button>
              )}
            </div>
          </div>
          <div className="space-y-5">
            <div className="flex justify-between items-center">
              <h2 className="text-2xl font-semibold">Top Positions</h2>
              <PeriodSelector period={selectedTopPositionsPeriod} setPeriod={setPositionsPeriod} />
            </div>
            <div className="flex flex-col space-y-7">
              <div className="space-y-3">
                {topPositions.isLoading ? (
                  Array(5)
                    .fill(0)
                    .map((_, i) => <PreviewSkeleton key={i} />)
                ) : topPositions.isError ? (
                  <Error>{topTraders.error || "Something went wrong please try again !"}</Error>
                ) : (
                  topPositions.data?.positions.map((position, i) => (
                    <PositionPreview key={i} position={position} />
                  ))
                )}
              </div>
              {topPositions.isFetched && (
                <Button className="w-full" asChild>
                  <Link to="topPositions" className="text-white hover:text-white hover:underline">
                    View More
                  </Link>
                </Button>
              )}
            </div>
          </div>
        </div>
      ) : (
        <Error>Something went wrong please try again !</Error>
      )}
    </div>
  );
}
