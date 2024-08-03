import { Avatar, AvatarFallback, AvatarImage } from "./ui/avatar";
import { PortfolioChart } from "./portfolio-chart";
import { PositionPreview } from "./position-preview";

export function Portfolio() {
  const positions = [
    { asset: "Bitcion", leverage: '10x', mode: 'LONG', entry: 50000, exit: 60000, roi: 140 },
    { asset: "Ethereum", leverage: '20x', mode: 'SHORT', entry: 3000, exit: 2000, roi: 70 },
    { asset: "Litecoin", leverage: '5x', mode: 'LONG', entry: 200, exit: 300, roi: 50 },
    { asset: "Ripple", leverage: '10x', mode: 'SHORT', entry: 1, exit: 0.5, roi: 50 },
    { asset: "Dogecoin", leverage: '20x', mode: 'LONG', entry: 0.1, exit: 0.2, roi: 50},
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
