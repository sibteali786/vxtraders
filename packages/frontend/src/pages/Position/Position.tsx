import { ProfileHeader } from "./profileHeader";
import { TradeSummary } from "./tradeSummary";
import { TradesTimeline } from "./tradesTimeline";
import { ClosePosition } from "./closePosition";
import { PortfolioChart } from "@/pages/portfolio/portfolioChart";

export function Position() {
  return (
    <div className="flex flex-col gap-6 pt-4">
      <div>
        <PortfolioChart />
        <p className="w-full text-center text-xs text-muted-foreground/80 -mt-5 font-mono tracking-widest">
          +50% ROI in 2 days
        </p>
      </div>
      <TradeSummary />
      <TradesTimeline />
      <ClosePosition />
      <div className="flex flex-col gap-4">
        <h2 className="text-2xl font-semibold px-default">Trader</h2>
        <ProfileHeader userId="2" isFirstComponentOnPage={false} />
      </div>
    </div>
  );
}
