import { ProfileHeader } from "./profileHeader";
import { TradeSummary } from "./tradeSummary";
import { TradesTimeline } from "./tradesTimeline";
import { ClosePosition } from "./closePosition";
import { PortfolioChart } from "@/pages/portfolio/portfolioChart";
import { TopResults } from "../topResults";

export function Position() {
  return (
    <div className="space-y-6 pt-4 pb-[90px]">
      <TopResults label="Top" value="1%" className="px-default" />
      <PortfolioChart />
      <TradeSummary />
      <TradesTimeline />
      <ClosePosition />
      <div className="flex flex-col px-default gap-4">
        <h2 className="text-2xl font-semibold">Trader</h2>
        <ProfileHeader isFirstComponentOnPage={false} />
      </div>
    </div>
  );
}
