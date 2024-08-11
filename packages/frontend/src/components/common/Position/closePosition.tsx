import { Slider } from "@/components/ui/slider";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";

export function ClosePosition() {
  return (
    <Card className="p-4 space-y-4 mx-[16px] flex flex-col gap-3">
      <h2 className="text-xl font-semibold text-white">Close Position</h2>
      <div className="flex flex-col gap-3">
        <p>Size (8%)</p>
        <Slider defaultValue={[8]} />
      </div>
      <Button className="w-full ">Close Position</Button>
    </Card>
  );
}
