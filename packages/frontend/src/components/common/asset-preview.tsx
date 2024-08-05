import { SearchAsset } from "@vxtraders/shared";
import { Button } from "../ui/button";
import { Card } from "../ui/card"
import { BitcoinIcon } from "lucide-react";

export function AssetPreview(props: { asset: SearchAsset }) {
  return (
    <Card className="flex items-center p-3">
      <BitcoinIcon className="w-10 h-8 text-yellow-500" />
      <div className="flex-1">
        <p className="font-semibold">{props.asset.name}</p>
        <p className="text-sm text-muted-foreground">{props.asset.ticker}</p>
      </div>
      <div className="flex-1">
        <p className="font-semibold">${props.asset.price}</p>
        <p className="text-sm text-green-500">+{props.asset.change}%</p>
      </div>
      <Button className="w-16 h-8">Trade</Button>
    </Card>
  );
}
