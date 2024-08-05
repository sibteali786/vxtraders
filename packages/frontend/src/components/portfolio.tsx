import { Avatar, AvatarFallback, AvatarImage } from "./ui/avatar";
import { PortfolioChart } from "./portfolio-chart";
import { PositionPreview } from "./position-preview";
import { PositionSummary } from "@vxtraders/shared";

export function Portfolio() {
  const positions: PositionSummary[] = [
    { asset: { name: "Bitcion", ticker: "BTC", image: "" }, leverage: 10, tradeMode: "LONG", entryPrice: 50000, exitPrice: 60000, roi: 140 },
    { asset: { name: "Ethereum", ticker: "ETH", image: "" }, leverage: 20, tradeMode: "SHORT", entryPrice: 3000, exitPrice: 2000, roi: 70 },
    { asset: { name: "Litecoin", ticker: "LTC", image: "" }, leverage: 5, tradeMode: "LONG", entryPrice: 200, exitPrice: 300, roi: 50 },
    { asset: { name: "Ripple", ticker: "XRP", image: "" }, leverage: 10, tradeMode: "SHORT", entryPrice: 1, exitPrice: 0.5, roi: 50 },
    { asset: { name: "Dogecoin", ticker: "DOGE", image: "" }, leverage: 20, tradeMode: "LONG", entryPrice: 0.1, exitPrice: 0.2, roi: 50 },
  ];
  return (
    <div className="p-4 space-y-4">
      <div className="flex justify-between items-center p-3">
        <div className="flex items-center space-x-4">
          <Avatar>
            <AvatarImage src="/placeholder-user.jpg" alt="Maxine Shu" />
            <AvatarFallback>MS</AvatarFallback>
          </Avatar>
          <div>
            <p className="font-semibold">John Doe</p>
            <p className="text-sm text-muted-foreground">@john</p>
          </div>
        </div>
        <div className="flex flex-col items-center text-right">
          <p className="text-xs font-semibold tracking-widest">T O P</p>
          <p className="text-xl font-semibold">1%</p>
        </div>
      </div>
      <PortfolioChart />
      <h2 className="text-lg font-semibold">Closed positions</h2>
      {positions.map((position, i) => <PositionPreview key={i} position={position} />)}
      <div className="w-full p-6"></div>
    </div>
  );
}
