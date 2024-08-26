import { useState } from "react";
import { Tabs, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Button } from "@/components/ui/button";
import { Slider } from "@/components/ui/slider";
import { TrendingDown, TrendingUp } from "lucide-react";
import { Link, useParams } from "react-router-dom";
import { MainHeading } from "@/components/common/mainHeading";
import { Card } from "@/components/ui/card";
import { LabelValueRow } from "./labelValueRow";
import { formatCurrency } from "@/utils/utils";
import { FaBitcoin } from "react-icons/fa";
import { BackButton } from "@twa-dev/sdk/react";

export function PlaceVirtualOrder() {
  const [mode, setMode] = useState<"long" | "short">("long");
  const [orderSize, setOrderSize] = useState(50); // Default to 50%
  const [leverage, setLeverage] = useState(1); // Default to 1x
  const [price] = useState(50000); // Example market price
  const [balance] = useState(10000); // Example balance

  const liqFactor = mode === "long" ? -1 : 1;
  const liqPrice = price * (1 + liqFactor / leverage);
  const { assetName } = useParams<{ assetName: string }>();
  return (
    <div className="px-default flex flex-col gap-4">
      <BackButton />
      <MainHeading title="Place a Virtual Order" classes="mb-[4px]" />
      {/* <p className="text-sm text-right">{`1 BTC = ${formatCurrency(price)}`}</p> */}
      <div className="text-sm space-y-1 mt-2">
        <LabelValueRow label="Market Price" value={price} />
        <LabelValueRow label="Virtual Balance" value={balance} />
      </div>
      <Card className="flex flex-col gap-6 p-4 bg-black">
        <div className="space-y-4">
          <Tabs
            value={mode}
            onValueChange={(value) => setMode((value as unknown as "long") || "short")}
          >
            <TabsList className="grid grid-cols-2 gap-2">
              <TabsTrigger
                value="long"
                className={`flex gap-1 mobile-medium:gap-2 text-base relative`}
              >
                <TrendingUp className="w-3 h-3 mobile-large:w-5 mobile-large:h-5 absolute left-3" />
                <p className="text-xs mobile-large:text-base ">LONG</p>
              </TabsTrigger>
              <TabsTrigger value="short" className="flex gap-1 mobile-medium:gap-2 relative">
                <TrendingDown className="w-3 h-3 mobile-large:w-5 mobile-large:h-5 absolute left-3 " />
                <p className="text-xs mobile-large:text-base ">SHORT</p>
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
          <label className="block text-sm font-medium">Leverage ({leverage}x)</label>
          <div className="text-sm">
            {liqPrice === 0 && "No liquidation"}
            {liqPrice !== 0 && formatCurrency(liqPrice)}
          </div>
        </div>

        <Slider
          value={[leverage]}
          onValueChange={(value) => setLeverage(value[0])}
          min={1}
          max={20}
          className="w-full"
        />
        <Link to="/position" className="my-4">
          <Button
            className={`w-full flex gap-2 ${mode === "long" ? "bg-success hover:bg-success/80" : "bg-destructive hover:bg-destructive/80"}`}
          >
            {mode === "long" ? "LONG" : "SHORT"} {assetName}{" "}
            <FaBitcoin className="h-5 w-5 mobile-medium:w-5 mobile-medium:h-5 text-[#f7931a]" />{" "}
          </Button>
        </Link>
      </Card>
    </div>
  );
}
