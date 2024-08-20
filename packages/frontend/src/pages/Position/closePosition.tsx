import { Slider } from "@/components/ui/slider";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { useClosePositionStore } from "@/stores/useState";
import { Skeleton } from "@/components/ui/skeleton";

type ClosePositionProps = {
  isLoading: boolean;
};

export function ClosePosition({ isLoading }: ClosePositionProps) {
  const size = useClosePositionStore((state) => state.size);
  const setSize = useClosePositionStore((state) => state.setSize);
  return (
    <Card className="p-4 space-y-4 mx-[16px] flex flex-col gap-3 bg-black">
      <h2 className="text-base mobile-small:text-lg mobile-medium:text-xl font-semibold text-white">
        Close Position
      </h2>
      <div className="flex flex-col gap-3">
        {isLoading ? (
          <>
            <Skeleton className="w-10 h-6" />
            <Skeleton className="w-full h-2" />
          </>
        ) : (
          <>
            <p className="text-sm mobile-medium:text-base">Size ({size}%)</p>
            <Slider
              defaultValue={[size]}
              onValueChange={(value) => setSize(value[0])}
              onValueCommit={(value) => console.log("Call backend to store it", value)}
            />
          </>
        )}
      </div>
      <Button className="w-full ">Close Position</Button>
    </Card>
  );
}
