import { ProfileHeader } from "./profileHeader";
import { TradeSummary } from "./tradeSummary";
import { TradesTimeline } from "./tradesTimeline";
import { ClosePosition } from "./closePosition";
import { PortfolioChart } from "@/pages/portfolio/portfolioChart";
import { useParams } from "react-router-dom";
import { trpc } from "@/trpc";
import { NoData } from "@/components/common/EmptyState/NoData";
import { Error } from "@/components/common/Error/Error";
import { BackButton } from "@twa-dev/sdk/react";

export function Position() {
  const { id } = useParams();
  const { isLoading, isError, data } = trpc.getPositionById.useQuery({
    id: id || "1",
  });
  if (isError) {
    return <Error>Something went wrong, please try again!</Error>;
  }

  if (!data?.position) {
    return (
      <div className="flex flex-col items-center justify-center h-full">
        <BackButton />
        <div className="relative z-10 flex flex-col items-center">
          <NoData
            illustrationSrc="./NoData.png"
            message="Oops, nothing to display right now. Begin a trade to view your portfolio"
            buttonText="Start a new trade"
            onButtonClick={() => console.log("Button is clicked!")}
          />
        </div>
      </div>
    );
  }

  return (
    <div className="flex flex-col gap-4 pt-4">
      <BackButton />
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
