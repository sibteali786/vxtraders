import { Badge } from "@/components/ui/badge";
import { InfoBlock } from "../infoBlock";

export function TradeSummary() {
  return (
    <div className="p-4 grid grid-cols-3 gap-y-6">
      <InfoBlock label="Size" value={0.0157} />
      <InfoBlock label="Entry Price" value="$58,531" />
      <InfoBlock label="Liquidation Price" value="$40,000" />
      <InfoBlock label="Solana" src="/solana.png" />
      <InfoBlock label="Leverage">
        <div className="flex gap-2">
          <p> 10x</p>
          <Badge className="py-0 " variant="default">
            LONG
          </Badge>
        </div>
      </InfoBlock>
      <InfoBlock label="PnL">
        <p className="text-green-500 ml-2">+45%</p>
      </InfoBlock>
    </div>
  );
}
