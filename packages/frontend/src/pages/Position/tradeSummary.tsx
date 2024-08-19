import { iconMap, isValidTicker } from "@/components/common/assetPreview";
import { Badge } from "@/components/common/badge";
import { InfoBlock } from "@/components/common/infoBlock";
import { formatCurrency } from "@/lib/utils";
import { PositionSummary } from "@vxtraders/shared";
import { FaDollarSign } from "react-icons/fa";

export function TradeSummary(props: { position: PositionSummary }) {
  const { position } = props;
  console.log(position);
  const IconComponent = isValidTicker(position.asset.ticker)
    ? iconMap[position.asset.ticker].icon
    : FaDollarSign;
  const iconColor = isValidTicker(position.asset.ticker)
    ? iconMap[position.asset.ticker].color
    : "#f0f0f0"; // Default color if not found
  return (
    <div className="p-4 grid grid-cols-3 gap-y-6 -mt-6">
      <InfoBlock label="Value" value="$0.0157" />
      <InfoBlock label="Entry Price" value={formatCurrency(position.entryPrice)} />
      <InfoBlock label="Liq. Price" value="$40,000" />
      <InfoBlock label="Asset" src="/solana.png">
        <div className="flex items-center gap-1">
          <IconComponent
            style={{ color: iconColor }}
            className="h-4 w-4 mobile-medium:w-6 mobile-medium:h-6"
          />
          <p className="text-xs mobile-small:text-sm mobile-medium:text-base">
            {position.asset.name}
          </p>
        </div>
      </InfoBlock>
      <InfoBlock label="Leverage">
        <div className="flex flex-row items-center gap-2">
          <p className="text-xs mobile-small:text-sm mobile-medium:text-base">
            {" "}
            {position.leverage}x
          </p>
          <Badge>{position.tradeMode}</Badge>
        </div>
      </InfoBlock>
      <InfoBlock label="PnL">
        <p
          className={`text-xs mobile-small:text-sm mobile-medium:text-base ${position.pnL < 0 ? "text-red-500" : "text-green-500"}  ml-2`}
        >
          {position.pnL > 0 ? `+${position.pnL}` : position.pnL}%
        </p>
      </InfoBlock>
    </div>
  );
}
