import { Button } from "@/components/ui/button";
import { PeriodSelector } from "@/pages/leaderboards/periodSelector";
import { Link } from "react-router-dom";
import { useTopPositionsPeriodStore } from "@/stores/useState";
import { trpc } from "@/trpc";
import { PositionPreview } from "../positionCard";
import { Error } from "../error/Error";
import { NoData } from "../empty-state/NoData";
import { PreviewSkeleton } from "../previewSkeleton";
import { BackButton } from "@twa-dev/sdk/react";

type PositionsProps = {
  maxCount: number;
  isTopLevelComponent: boolean;
};

export const PositionsList: React.FC<PositionsProps> = ({ maxCount, isTopLevelComponent }) => {
  const selectedTopPositionsPeriod = useTopPositionsPeriodStore((state) => state.selectedPeriod);
  const setPositionsPeriod = useTopPositionsPeriodStore((state) => state.setPeriod);
  const { isLoading, isError, data } = trpc.topPositions.useQuery({
    count: maxCount,
    timeframe: selectedTopPositionsPeriod,
  });

  return (
    <div className={`gap-6 h-full flex flex-col px-default ${isTopLevelComponent && "h-full"}`}>
      {isTopLevelComponent && <BackButton />}
      {/* Top section with title and period selector */}
      <div className="flex justify-between items-center">
        {/* Conditional rendering based on screen size */}
        {isTopLevelComponent && (
          <h2 className="text-2xl mobile-medium:text-3xl font-bold">Top Positions</h2>
        )}
        {!isTopLevelComponent && (
          <h2 className="mobile-small:text-xl mobile-medium:text-2xl font-semibold">
            Top Positions
          </h2>
        )}
        <PeriodSelector period={selectedTopPositionsPeriod} setPeriod={setPositionsPeriod} />
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
      ) : !data || data.positions.length === 0 ? (
        <NoData
          illustrationSrc="/NoPositions.png"
          title="No Positions"
          message={`No positions to show for ${selectedTopPositionsPeriod} period.`}
          buttonText="Start Trading"
          onButtonClick={() => console.log("Navigate to trading platform")}
          secondaryMessage="Open a position to see it listed here."
        />
      ) : (
        <div className="flex flex-col space-y-7">
          <div className="flex flex-col gap-3">
            {data.positions.map((position, i) => (
              <PositionPreview key={i} position={position} />
            ))}
          </div>
          {isTopLevelComponent ? null : (
            <Button className="w-full" asChild>
              <Link to="/top-positions" className="text-white hover:text-white">
                View More
              </Link>
            </Button>
          )}
        </div>
      )}
    </div>
  );
};
