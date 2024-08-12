import { Button } from "@/components/ui/button";
import { PeriodSelector } from "@/pages/leaderboards/period-selector";
import { Link } from "react-router-dom";
import { TraderPreview } from "../traderCard";
import { PreviewSkeleton } from "../previewSkeleton";
import { useTopTradersPeriodStore } from "@/stores/useState";
import { trpc } from "@/trpc";
import { Error } from "../Error/Error";
import { NoData } from "../EmptyState/NoData";

type TradersProps = {
  maxCount: number;
};

export const TradersList: React.FC<TradersProps> = ({ maxCount }) => {
  const selectedTopTradersPeriod = useTopTradersPeriodStore((state) => state.selectedPeriod);
  const setTradersPeriod = useTopTradersPeriodStore((state) => state.setPeriod);
  const { isLoading, isError, data } = trpc.topTraders.useQuery({
    count: maxCount,
    timeframe: selectedTopTradersPeriod,
  });

  return (
    <div className="space-y-5">
      {/* Top section with title and period selector */}
      <div className="flex justify-between items-center">
        <h2 className="mobile-small:text-xl mobile-medium:text-2xl  font-semibold">Top Traders</h2>
        <PeriodSelector period={selectedTopTradersPeriod} setPeriod={setTradersPeriod} />
      </div>

      {/* Conditional rendering based on data */}
      {isLoading ? (
        <div className="space-y-3">
          {Array(5)
            .fill(0)
            .map((_, i) => (
              <PreviewSkeleton key={i} />
            ))}
        </div>
      ) : isError ? (
        <Error>{"Something went wrong, please try again!"}</Error>
      ) : !data || data.traders.length === 0 ? (
        <NoData
          illustrationSrc="/NoTraders.png"
          title="No Traders"
          message={`No traders to show for ${selectedTopTradersPeriod} period.`}
          buttonText="Start Trading"
          onButtonClick={() => console.log("Navigate to trading platform")}
          secondaryMessage="Make your first trade to see results here."
        />
      ) : (
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
      )}
    </div>
  );
};
