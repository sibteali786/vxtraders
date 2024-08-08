import { Button } from "@/components/ui/button";
import { PeriodSelector } from "@/pages/leaderboards/period-selector";
import { Link } from "react-router-dom";
import { PreviewSkeleton } from "../previewSkeleton";
import { useTopPositionsPeriodStore } from "@/stores/useState";
import { trpc } from "@/trpc";
import { PositionPreview } from "../positionCard";
import withErrorHandling from "../hoc/withErrorHandling";
import { Error } from "../Error/Error";
import { NoData } from "../EmptyState/NoData";

export const PositionsList: React.FC = () => {
  const selectedTopPositionsPeriod = useTopPositionsPeriodStore((state) => state.selectedPeriod);
  const setPositionsPeriod = useTopPositionsPeriodStore((state) => state.setPeriod);
  const { isLoading, isError, data, isFetched } = trpc.topPositions.useQuery({
    count: 5,
    timeframe: selectedTopPositionsPeriod,
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

  if (!data || data.positions.length === 0) {
    return <NoData />;
  }
  return (
    <div className="space-y-5">
      <div className="flex justify-between items-center">
        <h2 className="text-2xl font-semibold">Top Positions</h2>
        <PeriodSelector period={selectedTopPositionsPeriod} setPeriod={setPositionsPeriod} />
      </div>
      <div className="flex flex-col space-y-7">
        <div className="space-y-3">
          {data?.positions.map((position, i) => <PositionPreview key={i} position={position} />)}
        </div>
        {isFetched && (
          <Button className="w-full" asChild>
            <Link to="topPositions" className="text-white hover:text-white">
              View More
            </Link>
          </Button>
        )}
      </div>
    </div>
  );
};
