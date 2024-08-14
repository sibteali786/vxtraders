import { ProfileHeader } from "./profileHeader";
import { TradeSummary } from "./tradeSummary";
import { TradesTimeline } from "./tradesTimeline";
import { ClosePosition } from "./closePosition";
import { PortfolioChart } from "@/pages/portfolio/portfolioChart";

export function Position() {
  return (
    <div className="flex flex-col gap-4 pt-4">
      <PortfolioChart />
      <TradeSummary />
      <TradesTimeline />
      <ClosePosition />
      <div className="flex flex-col gap-4">
        <h2 className="text-2xl font-semibold px-default">Trader</h2>
        <ProfileHeader userId="1" isFirstComponentOnPage={false} />
      </div>
    </div>
  );
}
