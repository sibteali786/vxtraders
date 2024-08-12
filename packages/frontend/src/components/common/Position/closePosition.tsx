import { Slider } from "@/components/ui/slider";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { useClosePositionStore } from "@/stores/useState";

export function ClosePosition() {
  const size = useClosePositionStore((state) => state.size);
  const setSize = useClosePositionStore((state) => state.setSize);
  return (
    <Card className="p-4 space-y-4 mx-[16px] flex flex-col gap-3">
      <h2 className="text-xl font-semibold text-white">Close Position</h2>
      <div className="flex flex-col gap-3">
        <p>Size ({size}%)</p>
        <Slider
          defaultValue={[size]}
          onValueChange={(value) => setSize(value[0])}
          onValueCommit={(value) => console.log("Call backend to store it", value)}
        />
      </div>
      <Button className="w-full ">Close Position</Button>
    </Card>
  );
}
