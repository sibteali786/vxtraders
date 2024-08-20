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
        <PortfolioChart isLoading={isLoading} noData={data?.position === undefined} />
      </div>
      {isLoading ? (
        <TradeSummary isLoading={isLoading} />
      ) : data?.position ? (
        <TradeSummary position={data.position} isLoading={isLoading} />
      ) : (
        <TradeSummary isLoading={false} classes="blur-md" />
      )}
      {isLoading ? (
        <TradesTimeline isLoading={isLoading} />
      ) : data?.position ? (
        <TradesTimeline isLoading={false} />
      ) : (
        <TradesTimeline isLoading={false} classes="blur-md" />
      )}
      {isLoading ? (
        <ClosePosition isLoading={isLoading} />
      ) : data?.position ? (
        <ClosePosition isLoading={isLoading} />
      ) : null}
      <div className="flex flex-col gap-4">
        {data?.position?.userId && (
          <>
            <h2 className="text-2xl font-semibold px-default">Trader</h2>
            <ProfileHeader userId={data.position.userId} isFirstComponentOnPage={false} />
          </>
        )}
      </div>
    </div>
  );
}
