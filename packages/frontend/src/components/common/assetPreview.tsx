import { SearchAsset } from "@vxtraders/shared";
import { Button } from "../ui/button";
import { Card } from "../ui/card";
import { FaBitcoin, FaEthereum, FaDollarSign } from "react-icons/fa";
import { SiPolygon } from "react-icons/si";
import { RiXrpFill } from "react-icons/ri";
import { Link } from "react-router-dom";

// Map tickers to their corresponding icons and colors
export const iconMap = {
  BTC: { icon: FaBitcoin, color: "#f7931a" }, // Bitcoin (Orange)
  ETH: { icon: FaEthereum, color: "#3c3c3d" }, // Ethereum (Blue/Gray)
  MATIC: { icon: SiPolygon, color: "#8247e5" }, // Polygon (Purple)
  USDT: { icon: FaDollarSign, color: "#26a17b" }, // Tether (Green)
  XRP: { icon: RiXrpFill, color: "#fff" }, // XRP (Black/Gray)
};

export function isValidTicker(ticker?: string): ticker is keyof typeof iconMap {
  return ticker ? ticker in iconMap : false;
}

export function AssetPreview(props: { asset: SearchAsset }) {
  const IconComponent = isValidTicker(props.asset.ticker)
    ? iconMap[props.asset.ticker].icon
    : FaDollarSign;
  const iconColor = isValidTicker(props.asset.ticker)
    ? iconMap[props.asset.ticker].color
    : "#f0f0f0"; // Default color if not found

  return (
    <Card className="flex items-center py-3 justify-between rounded-lg border border-border px-2 mobile-medium:px-3">
      <div className="flex gap-2 mobile-medium:gap-2">
        <IconComponent
          className="w-8 h-8 mobile-medium:w-9 mobile-medium:h-9"
          style={{ color: iconColor }}
        />
        <div className="flex-1">
          <p className="font-semibold text-white text-sm mobile-medium:text-base">
            {props.asset.name}
          </p>
          <p className=" text-muted-foreground text-xs mobile-medium:text-sm">
            {props.asset.ticker}
          </p>
        </div>
      </div>
      <div className="text-right">
        <p className="font-semibold text-white text-sm mobile-medium:text-base">
          ${props.asset.price.toLocaleString()}
        </p>
        <p
          className={`text-xs mobile-medium:text-sm ${props.asset.change >= 0 ? "text-green-500" : "text-red-500"}`}
        >
          {props.asset.change >= 0 ? `+${props.asset.change}` : props.asset.change}%
        </p>
      </div>
      <Link to={`${props.asset.name}`}>
        <Button className=" bg-purple-600 text-white rounded-sm mobile-medium:rounded-md text-xs w-12 h-6 mobile-medium:w-15 mobile-medium:h-7">
          Trade
        </Button>
      </Link>
    </Card>
  );
}
