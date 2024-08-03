import { Button } from "@/components/ui/button"
import { PositionPreview } from "./position-preview"
import { TraderPreview } from "./trader-preview"
import { PeriodSelector } from "./period-selector"
import { trpc } from "@/trpc";
import { PreviewSkeleton } from "./preview-skeleton";
import { useLocation } from "react-router-dom";
import { useEffect } from "react";

export function Leaderboards() {
  const location = useLocation();
  const leaderboards = trpc.leaderboards.useQuery();

  useEffect(() => {
    leaderboards.refetch();
  }, [location]);

  return (
    <div className="p-4 space-y-4">
      <h1 className="text-3xl font-bold">Leaderboards</h1>
      <div className="flex justify-between items-center">
        <h2 className="text-xl font-semibold">Top Traders</h2>
        <PeriodSelector />
      </div>
      <div className="space-y-2">
        {leaderboards.isFetching ?
          Array(5).fill(0).map((_, i) => (<PreviewSkeleton key={i} />)) :
          leaderboards.data?.traders.map((trader, i) => (<TraderPreview key={i} trader={trader} />))}
      </div>
      { leaderboards.isFetched && <Button className="w-full">View More</Button> }

      <div className="w-full p-3"></div>

      <div className="flex justify-between items-center">
        <h2 className="text-xl font-semibold">Top Positions</h2>
        <PeriodSelector />
      </div>
      <div className="space-y-2">
        {leaderboards.isFetching ?
          Array(5).fill(0).map((_, i) => (<PreviewSkeleton key={i} />)) :
          leaderboards.data?.positions.map((position, i) => (<PositionPreview key={i} position={position} />))}
      </div>
      { leaderboards.isFetched && <Button className="w-full">View More</Button> }

      <div className="w-full p-6"></div>
    </div>
  )
}
