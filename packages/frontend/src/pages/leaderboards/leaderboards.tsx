import { TradersList } from "@/components/common/leaderboards/tradersList";
import { PositionsList } from "@/components/common/leaderboards/positionList";
import { MainHeading } from "@/components/common/mainHeading";

export function Leaderboards() {
  return (
    <div className="py-4 space-y-12 pb-[8rem] h-full px-default">
      <MainHeading title="Leaderboards" />
      <div className="space-y-10">
        <TradersList maxCount={5} />
        <hr className="border-muted" />
        <PositionsList maxCount={5} />
      </div>
    </div>
  );
}
