import { Button } from "@/components/ui/button";
import { PeriodSelector } from "@/pages/leaderboards/period-selector";
import { Link } from "react-router-dom";
import { TraderPreview } from "../traderCard";
import { PreviewSkeleton } from "../previewSkeleton";
import { useTopTradersPeriodStore } from "@/stores/useState";
import { trpc } from "@/trpc";
import { Error } from "../Error/Error";
import { NoData } from "../EmptyState/NoData";

export const TradersList: React.FC = () => {
  const selectedTopTradersPeriod = useTopTradersPeriodStore((state) => state.selectedPeriod);
  const setTradersPeriod = useTopTradersPeriodStore((state) => state.setPeriod);
  const { isLoading, isError, data } = trpc.topTraders.useQuery({
    count: 5,
    timeframe: selectedTopTradersPeriod,
  });
  if (isLoading) {
    return (
      <div className="space-y-3">
        {Array(5)
          .fill(0)
          .map((_, i) => (
            <PreviewSkeleton key={i} />
          ))}
      </div>
    );
  }
  if (isError) {
    return <Error>{"Something went wrong, please try again!"}</Error>;
  }
  if (!data || data.traders.length === 0) {
    return <NoData />;
  }
  return (
    <div className="space-y-5">
      <div className="flex justify-between items-center">
        <h2 className="text-2xl font-semibold">Top Traders</h2>
        <PeriodSelector period={selectedTopTradersPeriod} setPeriod={setTradersPeriod} />
      </div>
      <div className="flex flex-col space-y-7">
        <div className="space-y-3">
          {data.traders.map((trader, i) => (
            <TraderPreview key={i} trader={trader} />
          ))}
        </div>
        <Button className="w-full" asChild>
          <Link to="topTraders" className="text-white hover:text-white">
            View More
          </Link>
        </Button>
      </div>
    </div>
  );
};
