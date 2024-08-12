import { ProfileHeader } from "./profileHeader";
import { TradeSummary } from "./tradeSummary";
import { TradesTimeline } from "./tradesTimeline";
import { ClosePosition } from "./closePosition";
import { PortfolioChart } from "@/pages/portfolio/portfolio-chart";

export function Position() {
  return (
    <div className="space-y-6 pt-4 pb-[90px]">
      <PortfolioChart isTopValue={true} />
      <TradeSummary />
      <TradesTimeline />
      <ClosePosition />
      <div className="flex flex-col px-default gap-4">
        <h2 className="text-2xl font-semibold">Trader</h2>
        <ProfileHeader />
      </div>
    </div>
  );
}
