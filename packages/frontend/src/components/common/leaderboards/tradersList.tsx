import { Button } from "@/components/ui/button";
import { PeriodSelector } from "@/pages/leaderboards/periodSelector";
import { Link } from "react-router-dom";
import { TraderPreview } from "../traderCard";
import { PreviewSkeleton } from "../previewSkeleton";
import { useTopTradersPeriodStore } from "@/stores/useState";
import { trpc } from "@/trpc";
import { Error } from "../Error/Error";
import { NoData } from "../EmptyState/NoData";
import { BackButton } from "@twa-dev/sdk/react";

type TradersProps = {
  maxCount: number;
  isTopLevelComponent: boolean;
};

export const TradersList: React.FC<TradersProps> = ({ maxCount, isTopLevelComponent }) => {
  const selectedTopTradersPeriod = useTopTradersPeriodStore((state) => state.selectedPeriod);
  const setTradersPeriod = useTopTradersPeriodStore((state) => state.setPeriod);
  const { isLoading, isError, data } = trpc.topTraders.useQuery({
    count: maxCount,
    timeframe: selectedTopTradersPeriod,
  });

  return (
    <div className="px-default gap-6 flex flex-col">
      {isTopLevelComponent && <BackButton />}
      {/* Top section with title and period selector */}
      <div className="flex justify-between items-center">
        {/* Conditional rendering based on screen size */}
        {isTopLevelComponent && (
          <h2 className="text-2xl mobile-medium:text-3xl font-bold">Top Traders</h2>
        )}
        {!isTopLevelComponent && (
          <h2 className="mobile-small:text-xl mobile-medium:text-2xl font-semibold">
            Top Traders
          </h2>
        )}
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
        <Error
          title="Oops, something went wrong"
          buttonText="Refresh"
          onClick={() => window.location.reload()}
        >
          {"Seems like there was an issue. Please refresh the page to resume!"}
        </Error>
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
          <div className="flex flex-col gap-3">
            {data.traders.map((trader, i) => (
              <TraderPreview key={i} trader={trader} />
            ))}
          </div>

          {isTopLevelComponent ? null : (
            <Button className="w-full" asChild>
              <Link
                data-testid="visit-traders"
                to="/top-traders"
                className="text-white hover:text-white"
              >
                View More
              </Link>
            </Button>
          )}
        </div>
      )}
    </div>
  );
};
