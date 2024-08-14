import { Button } from "@/components/ui/button";
import { Label } from "@/components/ui/label";
import { useState } from "react";
import { Slider } from "@/components/ui/slider";
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group";
import { FaBitcoin } from "react-icons/fa";
import { Link } from "react-router-dom";

export function PlaceVirtualOrder() {
  const [orderSize, setOrderSize] = useState(7);
  const [leverage, setLeverage] = useState(5);
  const [mode, setMode] = useState("short");

  return (
    <div className="p-6 space-y-6">
      <h1 className="text-2xl mobile-medium:text-3xl font-bold">Place a Virtual Order</h1>

      <div className="space-y-4">
        <div className="flex justify-between items-center">
          <Label>Selected Asset</Label>
          <div className="flex items-center space-x-2">
            <FaBitcoin className="text-2xl text-orange-500" />
            <span className="font-semibold">Bitcoin</span>
          </div>
        </div>

        <div className="flex justify-between items-center">
          <Label>Market Price</Label>
          <span className="font-semibold">$53,123</span>
        </div>

        <div className="flex justify-between items-center">
          <Label>Virtual Balance</Label>
          <span className="font-semibold">$10,000</span>
        </div>
      </div>

      <div className="space-y-4">
        <Label className="font-bold text-base mobile-medium:text-lg">Mode</Label>
        <RadioGroup
          className="flex justify-around mobile-medium:justify-evenly space-x-6"
          value={mode}
          onValueChange={(value) => setMode(value)}
        >
          <div className="flex items-center space-x-2">
            <RadioGroupItem value="long" id="long" />
            <Label htmlFor="long">Long</Label>
          </div>
          <div className="flex items-center space-x-2">
            <RadioGroupItem value="short" id="short" />
            <Label htmlFor="short">Short</Label>
          </div>
        </RadioGroup>
      </div>
      <div className="space-y-4">
        <Label>Order Size ({orderSize}%)</Label>
        <div className="flex justify-between items-center">
          <Slider
            value={[orderSize]}
            onValueChange={(value) => setOrderSize(value[0])}
            className="w-full"
            max={100}
          />
          <span className="ml-4">${((orderSize / 100) * 10000).toFixed(0)}</span>
        </div>
      </div>

      <div className="space-y-4">
        <Label>Leverage</Label>
        <div className="flex justify-between items-center">
          <Slider
            value={[leverage]}
            onValueChange={(value) => setLeverage(value[0])}
            className="w-full"
            min={1}
            max={10}
          />
          <span className="ml-4">{leverage}x</span>
        </div>
      </div>

      <div className="space-y-4">
        <div className="flex justify-between items-center">
          <Label>Liquidation Price</Label>
          <span className="font-semibold">$40,000</span>
        </div>

        <div className="flex justify-between items-center">
          <Label>Order Value</Label>
          <span className="font-semibold">$35,000</span>
        </div>
      </div>
      <Link to='/position'>
        <Button className="w-full mt-6">Place Order</Button>
      </Link>
    </div>
  );
}
