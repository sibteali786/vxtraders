import { TradersList } from "@/components/common/leaderboards/tradersList";
import { PositionsList } from "@/components/common/leaderboards/positionList";
import { MainHeading } from "@/components/common/mainHeading";

export function Leaderboards() {
  return (
    <div className="space-y-12 pb-[8rem] h-full">
      <MainHeading title="Leaderboards" classes="px-default" />
      <div className="space-y-10">
        <TradersList isTopLevelComponent={false} maxCount={5} />
        <hr className="border-muted mx-[16px]" />
        <PositionsList isTopLevelComponent={false} maxCount={5} />
      </div>
    </div>
  );
}
