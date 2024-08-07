import { PeriodSelector } from "../period-selector";
import { trpc } from "@/trpc";
import { PreviewSkeleton } from "@/components/common/previewSkeleton";
import { TraderPreview } from "@/components/common/traderCard";
import { useGlobalValues, useTopTradersPeriodStore } from "@/stores/useState";

export function TopTraders() {
  const selectedTopTradersPeriod = useTopTradersPeriodStore((state) => state.selectedPeriod);
  const setTradersPeriod = useTopTradersPeriodStore((state) => state.setPeriod);
  const maxCount = useGlobalValues((state) => state.maxListCount);
  const topTraders = trpc.topTraders.useQuery({
    count: maxCount,
    timeframe: selectedTopTradersPeriod,
  });

  return (
    <div className="py-4 space-y-7 h-fit px-default">
      <div className="flex justify-between items-center">
        <h2 className="text-3xl font-bold">Top Traders</h2>
        <PeriodSelector period={selectedTopTradersPeriod} setPeriod={setTradersPeriod} />
      </div>
      <div className="space-y-3">
        {topTraders.isFetching
          ? Array(5)
              .fill(0)
              .map((_, i) => <PreviewSkeleton key={i} />)
          : topTraders.data?.traders.map((trader, i) => <TraderPreview key={i} trader={trader} />)}
      </div>
      <div className="w-full p-10"></div>
    </div>
  );
}
