import { PositionPreview } from "@/components/common/positionCard";
import { PortfolioChart } from "./portfolioChart";
import { ChannelList } from "@/components/common/settings/channelsList";
import { trpc } from "@/trpc";
import { MAX_LIST_COUNT } from "@/stores/constants";
import { useTopPositionsPeriodStore } from "@/stores/useState";
import { ProfileHeader } from "@/components/common/Position/profileHeader";

export function Portfolio() {
  const selectedTopPositionsPeriod = useTopPositionsPeriodStore((state) => state.selectedPeriod);
  const positions = trpc.topPositions.useQuery({
    count: MAX_LIST_COUNT,
    timeframe: selectedTopPositionsPeriod,
  });
  const { isError, isLoading, data } = trpc.getChannelsForUser.useQuery({
    count: MAX_LIST_COUNT,
    user: "Ali",
  });
  return (
    <div className=" space-y-4 pb-[80px]">
      <ProfileHeader isFirstComponentOnPage={true} />
      <PortfolioChart />
      <p className="w-full text-center text-base text-muted-foreground">+50% ROI in 2 days</p>
      <div className="px-default">
        <h2 className="text-2xl font-semibold mb-4">Closed Positions</h2>
        <div className="flex flex-col gap-4">
          {positions?.data?.positions?.map((position, i) => (
            <PositionPreview key={i} position={position} />
          ))}
        </div>
      </div>
      <div className="px-default">
        <h2 className="text-2xl font-semibold mb-4">My Channels</h2>
        <ChannelList channels={data?.channels} isLoading={isLoading} isError={isError} />
      </div>
    </div>
  );
}
