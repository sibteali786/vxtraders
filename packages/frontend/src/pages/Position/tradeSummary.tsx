import { Badge } from "@/components/common/badge";
import { InfoBlock } from "@/components/common/infoBlock";

export function TradeSummary() {
  return (
    <div className="p-4 grid grid-cols-3 gap-y-6 -mt-6">
      <InfoBlock label="Value" value="$0.0157" />
      <InfoBlock label="Entry Price" value="$58,531" />
      <InfoBlock label="Liq. Price" value="$40,000" />
      <InfoBlock label="Asset" src="/solana.png">
        <div className="flex items-center gap-1">
          <img src="/solana.png" className="h-4 w-4 mobile-medium:w-6 mobile-medium:h-6" />
          <p className="text-xs mobile-small:text-sm mobile-medium:text-base">Solana</p>
        </div>
      </InfoBlock>
      <InfoBlock label="Leverage">
        <div className="flex flex-row items-center gap-2">
          <p className="text-xs mobile-small:text-sm mobile-medium:text-base"> 10x</p>
          <Badge>LONG</Badge>
        </div>
      </InfoBlock>
      <InfoBlock label="PnL">
        <p className="text-xs mobile-small:text-sm mobile-medium:text-base text-green-500 ml-2">
          +45%
        </p>
      </InfoBlock>
    </div>
  );
}
