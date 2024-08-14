import { useState } from "react";
import { Tabs, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Button } from "@/components/ui/button";
import { Slider } from "@/components/ui/slider";
import { CheckCheck, TrendingDown, TrendingUp } from "lucide-react";
import { Link, useParams } from "react-router-dom";
import { MainHeading } from "@/components/common/mainHeading";
import { Card } from "@/components/ui/card";
import { BitcoinIcon } from "@/components/common/positionCard";
import { LabelValueRow } from "./labelValueRow";
import { formatCurrency } from "@/lib/utils";
import { FaBitcoin } from "react-icons/fa";

export function PlaceVirtualOrder() {
  const [mode, setMode] = useState<"long" | "short">("long");
  const [orderSize, setOrderSize] = useState(50); // Default to 50%
  const [leverage, setLeverage] = useState(5); // Default to 5x
  const [price] = useState(56715); // Example market price
  const [balance] = useState(10000); // Example balance

  const liqPrice = leverage === 1 ? "N/A" : price * (1 - 1 / leverage);
  const orderValue = (balance * orderSize * leverage) / 100;
  const { assetName } = useParams<{ assetName: string }>();
  return (
    <div className="px-default flex flex-col gap-4">
      <MainHeading title="Place a Virtual Order" classes="mb-[4px]" />
      <p className="text-sm text-right">{`1 BTC = ${formatCurrency(price)}`}</p>
      <Card className="flex flex-col gap-6 p-4">
        <div className="space-y-4">
          <Tabs
            value={mode}
            onValueChange={(value) => setMode((value as unknown as "long") || "short")}
          >
            <TabsList className="grid grid-cols-2 gap-2">
              <TabsTrigger
                value="long"
                className="flex gap-1 mobile-medium:gap-2 text-base relative"
              >
                {mode === "long" ? (
                  <CheckCheck className="w-4 h-4 mobile-large:w-5 mobile-xs:h-5 absolute left-3" />
                ) : null}
                <TrendingUp className="w-3 h-3 mobile-large:w-5 mobile-large:h-5" />
                <p className="text-xs mobile-large:text-base ">Long</p>
              </TabsTrigger>
              <TabsTrigger value="short" className="flex gap-1 mobile-medium:gap-2 relative">
                {mode === "short" ? (
                  <CheckCheck className="w-4 h-4 mobile-large:w-5 mobile-xs:h-5 absolute left-3" />
                ) : null}
                <TrendingDown className="w-3 h-3 mobile-large:w-5 mobile-large:h-5" />
                <p className="text-xs mobile-large:text-base ">Short</p>
              </TabsTrigger>
            </TabsList>
          </Tabs>
          <div className="flex justify-between">
            <label className="block text-sm font-medium">Order Size ({orderSize}%)</label>
            <div className="text-sm">{formatCurrency((balance * orderSize) / 100)}</div>
          </div>
        </div>
        <Slider
          value={[orderSize]}
          onValueChange={(value) => setOrderSize(value[0])}
          min={1}
          max={100}
          className="w-full"
        />
        <div className="flex justify-between">
          <label className="block text-sm font-medium">Leverage</label>
          <div className="text-sm">{leverage}x</div>
        </div>

        <Slider
          value={[leverage]}
          onValueChange={(value) => setLeverage(value[0])}
          min={1}
          max={20}
          className="w-full"
        />
        <Link to="/position" className="my-4">
          <Button className="w-full flex gap-2">
            {mode === "long" ? "Long" : "Short"} {assetName}{" "}
            <FaBitcoin className="h-5 w-5 mobile-medium:w-5 mobile-medium:h-5 text-[#f7931a]" />{" "}
          </Button>
        </Link>
      </Card>
      <div className="text-sm space-y-1 mt-2">
        <LabelValueRow label="Virtual Balance" value={balance} />
        <LabelValueRow label="Liquidation Price" value={liqPrice} />
        <LabelValueRow label="Order Value" value={orderValue} />
      </div>
    </div>
  );
}
