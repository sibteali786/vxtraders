import { Button } from "@/components/ui/button";
import { PeriodSelector } from "@/pages/leaderboards/period-selector";
import { Link } from "react-router-dom";
import { TraderPreview } from "../traderCard";
import { PreviewSkeleton } from "../previewSkeleton";
import { useTopTradersPeriodStore } from "@/stores/useState";
import { trpc } from "@/trpc";
import { Error } from "../Error/Error";

export const TradersList: React.FC = () => {
  const selectedTopTradersPeriod = useTopTradersPeriodStore((state) => state.selectedPeriod);
  const setTradersPeriod = useTopTradersPeriodStore((state) => state.setPeriod);
  const { isLoading, isError, error, data, isFetched } = trpc.topTraders.useQuery({
    count: 5,
    timeframe: selectedTopTradersPeriod,
  });
  return (
    <div className="space-y-5">
      <div className="flex justify-between items-center">
        <h2 className="text-2xl font-semibold">Top Traders</h2>
        <PeriodSelector period={selectedTopTradersPeriod} setPeriod={setTradersPeriod} />
      </div>
      <div className="flex flex-col space-y-7">
        <div className="space-y-3">
          {isLoading ? (
            Array(5)
              .fill(0)
              .map((_, i) => <PreviewSkeleton key={i} />)
          ) : isError ? (
            <Error>{error.message || "Something went wrong please try again !"}</Error>
          ) : (
            data?.traders.map((trader, i) => <TraderPreview key={i} trader={trader} />)
          )}
        </div>
        {isFetched && (
          <Button className="w-full" asChild>
            <Link to="topTraders" className="text-white hover:text-white hover:underline">
              View More
            </Link>
          </Button>
        )}
      </div>
    </div>
  );
};
