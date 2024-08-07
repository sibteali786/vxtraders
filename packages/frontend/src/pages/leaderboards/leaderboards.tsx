import { TradersList } from "@/components/common/leaderboards/tradersList";
import { PositionsList } from "@/components/common/leaderboards/positionList";

export function Leaderboards() {
  return (
    <div className="py-4 space-y-10 pb-[8rem] h-full px-default">
      <h1 className="text-3xl font-bold">Leaderboards</h1>
      <div className="space-y-10">
        <TradersList />
        <PositionsList />
      </div>
    </div>
  );
}
