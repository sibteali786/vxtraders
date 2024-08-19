import { ProfileHeader } from "./profileHeader";
import { TradeSummary } from "./tradeSummary";
import { TradesTimeline } from "./tradesTimeline";
import { ClosePosition } from "./closePosition";
import { PortfolioChart } from "@/pages/portfolio/portfolioChart";
import { useParams } from "react-router-dom";
import { trpc } from "@/trpc";
import { Skeleton } from "@/components/ui/skeleton";
import { Card } from "@/components/ui/card";

export function Position() {
  const { id } = useParams();
  const { isLoading, isError, data } = trpc.getPositionById.useQuery({
    id: id || "1",
  });

  return (
    <>
      {isLoading ? (
        <div className="flex flex-col gap-6">
          <div className="flex flex-col gap-4 pt-4 items-center">
            <Skeleton className="w-full rounded-xl h-44 max-allowed-width:h-72" />
            <Skeleton className="w-[20%] rounded-full h-3" />
          </div>
          <div className="flex flex-col pr-default gap-6">
            <Card className="flex items-center justify-between space-x-4 px-2 mobile-medium:px-3 py-3 rounded-lg w-[91%] self-end">
              <div className="flex flex-col gap-1 mobile-medium:gap-1 w-full my-1 sm:my-0">
                <Skeleton className="h-3 mobile-large:h-4 w-[50%] mobile-medium:w-[40%]" />
                <Skeleton className="h-3 mobile-large:h-4 w-[30%] sm:w-[20%]" />
              </div>
            </Card>
            <Card className="flex items-center justify-between space-x-4 px-2 mobile-medium:px-3 py-3 rounded-lg w-[91%] self-end">
              <div className="flex flex-col gap-1 mobile-medium:gap-1 w-full my-1 sm:my-0">
                <Skeleton className="h-3 mobile-large:h-4 w-[50%] mobile-medium:w-[40%]" />
                <Skeleton className="h-3 mobile-large:h-4 w-[30%] sm:w-[20%]" />
              </div>
            </Card>
            <Card className="flex items-center justify-between space-x-4 px-2 mobile-medium:px-3 py-3 rounded-lg w-[91%] self-end">
              <div className="flex flex-col gap-1 mobile-medium:gap-1 w-full my-1 sm:my-0">
                <Skeleton className="h-3 mobile-large:h-4 w-[50%] mobile-medium:w-[40%]" />
                <Skeleton className="h-3 mobile-large:h-4 w-[30%] sm:w-[20%]" />
              </div>
            </Card>
          </div>
          <Skeleton className=" w-full h-[168px]" />
        </div>
      ) : (
        <div className="flex flex-col gap-6 pt-4">
          <div>
            <PortfolioChart />
            <p className="w-full text-center text-xs text-muted-foreground/80 -mt-5 font-mono tracking-widest">
              +50% ROI in 2 days
            </p>
          </div>
          {data?.position && <TradeSummary position={data?.position} />}
          <TradesTimeline />
          <ClosePosition />
          <div className="flex flex-col gap-4">
            <h2 className="text-2xl font-semibold px-default">Trader</h2>
            {data?.position?.userId && (
              <ProfileHeader userId={data.position.userId} isFirstComponentOnPage={false} />
            )}
          </div>
        </div>
      )}
    </>
  );
}
