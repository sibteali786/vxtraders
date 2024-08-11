import { Button } from "@/components/ui/button";
import { PeriodSelector } from "@/pages/leaderboards/period-selector";
import { Link } from "react-router-dom";
import { PreviewSkeleton } from "../previewSkeleton";
import { useTopPositionsPeriodStore } from "@/stores/useState";
import { trpc } from "@/trpc";
import { PositionPreview } from "../positionCard";
import { Error } from "../Error/Error";
import { NoData } from "../EmptyState/NoData";

type PositionsProps = {
  maxCount: number;
};

export const PositionsList: React.FC<PositionsProps> = ({ maxCount }) => {
  const selectedTopPositionsPeriod = useTopPositionsPeriodStore((state) => state.selectedPeriod);
  const setPositionsPeriod = useTopPositionsPeriodStore((state) => state.setPeriod);
  const { isLoading, isError, data, isFetched } = trpc.topPositions.useQuery({
    count: maxCount,
    timeframe: selectedTopPositionsPeriod,
  });

  return (
    <div className="space-y-5">
      {/* Top section with title and period selector */}
      <div className="flex justify-between items-center">
        <h2 className="text-2xl font-semibold">Top Positions</h2>
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
        <Error>{"Something went wrong, please try again!"}</Error>
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
          <div className="space-y-3">
            {data.positions.map((position, i) => (
              <PositionPreview key={i} position={position} />
            ))}
          </div>
          {isFetched && (
            <Button className="w-full" asChild>
              <Link to="topPositions" className="text-white hover:text-white">
                View More
              </Link>
            </Button>
          )}
        </div>
      )}
    </div>
  );
};
