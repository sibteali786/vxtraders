import { Badge } from "../badge";
import { InfoBlock } from "../infoBlock";

export function TradeSummary() {
  return (
    <div className="p-4 grid grid-cols-3 gap-y-6">
      <InfoBlock label="Value" value="$0.0157" />
      <InfoBlock label="Entry Price" value="$58,531" />
      <InfoBlock label="Liq. Price" value="$40,000" />
      <InfoBlock label="Asset" src="/solana.png">
        <div className="flex items-center gap-1">
          <img src="/solana.png" />
          <p>Solana</p>
        </div>
      </InfoBlock>
      <InfoBlock label="Leverage">
        <div className="flex gap-2">
          <p> 10x</p>
          <Badge>LONG</Badge>
        </div>
      </InfoBlock>
      <InfoBlock label="PnL">
        <p className="text-green-500 ml-2">+45%</p>
      </InfoBlock>
    </div>
  );
}
