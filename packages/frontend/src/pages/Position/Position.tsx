import { ProfileHeader } from "./profileHeader";
import { TradeSummary } from "./tradeSummary";
import { TradesTimeline } from "./tradesTimeline";
import { ClosePosition } from "./closePosition";
import { PortfolioChart } from "@/pages/portfolio/portfolioChart";
import { useParams } from "react-router-dom";
import { trpc } from "@/trpc";

export function Position() {
  const { id } = useParams();
  const { isLoading, isError, data } = trpc.getPositionById.useQuery({
    id: id || "1",
  });

  return (
    <div className="flex flex-col gap-4 pt-4">
      <div>
        <PortfolioChart isLoading={isLoading} />
      </div> 
      <TradeSummary position={data?.position} isLoading={isLoading} />
      <TradesTimeline isLoading={isLoading} />
      <ClosePosition isLoading={isLoading} />
      <div className="flex flex-col gap-4">
        <h2 className="text-2xl font-semibold px-default">Trader</h2>
        {data?.position?.userId && (
          <ProfileHeader userId={data.position.userId} isFirstComponentOnPage={false} />
        )}
      </div>
    </div>
  );
}
