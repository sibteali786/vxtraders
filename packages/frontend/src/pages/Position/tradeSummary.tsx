import { iconMap, isValidTicker } from "@/components/common/assetPreview";
import { Badge } from "@/components/common/badge";
import { BoxSkeleton } from "@/components/common/boxSkeleton";
import { InfoBlock } from "@/components/common/infoBlock";
import { formatCurrency } from "@/utils/utils";
import { PositionSummary } from "@vxtraders/shared";
import { FaDollarSign } from "react-icons/fa";

type TradeSummaryProps = {
  isLoading: boolean;
  position?: PositionSummary;
  classes?: string;
};

export function TradeSummary(props: TradeSummaryProps) {
  const { position, isLoading } = props;
  if (isLoading) {
    return (
      <div className="p-4-mt-6 px-default">
        <BoxSkeleton classes="w-full h-32 max-allowed-width:h-36" />
      </div>
    );
  }

  const ticker = position?.asset?.ticker;
  const IconComponent = isValidTicker(ticker) ? iconMap[ticker].icon : FaDollarSign;
  const iconColor = isValidTicker(ticker) ? iconMap[ticker].color : "#f0f0f0"; // Default color if not found
  return (
    <div className={`${props.classes} p-4 grid grid-cols-3 gap-y-6`}>
      <InfoBlock label="Value" value="$0.0157" />
      <InfoBlock label="Entry Price" value={formatCurrency(position?.entryPrice)} />
      <InfoBlock label="Liq. Price" value="$40,000" />
      <InfoBlock label="Asset" src="/solana.png">
        <div className="flex items-center gap-1">
          <IconComponent
            style={{ color: iconColor }}
            className="h-4 w-4 mobile-medium:w-6 mobile-medium:h-6"
          />
          <p className="text-xs mobile-small:text-sm mobile-medium:text-base">
            {position?.asset?.name}
          </p>
        </div>
      </InfoBlock>
      <InfoBlock label="Leverage">
        <div className="flex flex-row items-center gap-2">
          <p className="text-xs mobile-small:text-sm mobile-medium:text-base">
            {" "}
            {position?.leverage}x
          </p>
          <Badge>{position?.tradeMode}</Badge>
        </div>
      </InfoBlock>
      <InfoBlock label="PnL">
        <p
          className={`text-xs mobile-small:text-sm mobile-medium:text-base ${position?.pnL && position?.pnL < 0 ? "text-destructive" : "text-green-500"}  ml-2`}
        >
          {position?.pnL && position?.pnL > 0 ? `+${position?.pnL}` : position?.pnL}%
        </p>
      </InfoBlock>
    </div>
  );
}
