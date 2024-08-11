import { ProfileHeader } from "./profileHeader";
import { TradeSummary } from "./tradeSummary";
import { TradesTimeline } from "./tradesTimeline";
import { ClosePosition } from "./closePosition";
import { PortfolioChart } from "@/pages/portfolio/portfolio-chart";

export function Position() {
  return (
    <div className="space-y-6 pb-[90px]">
      <ProfileHeader />
      <PortfolioChart />
      <TradeSummary />
      <TradesTimeline />
      <ClosePosition />
    </div>
  );
}
