import { PositionPreview } from "@/components/common/positionCard";
import { PortfolioChart } from "./portfolioChart";
import { ChannelList } from "@/components/common/settings/channelsList";
import { trpc } from "@/trpc";
import { MAX_LIST_COUNT } from "@/stores/constants";
import { useTopPositionsPeriodStore } from "@/stores/useState";
import { useParams } from "react-router-dom";
import { ProfileHeader } from "../position/profileHeader";

export function Portfolio() {
  const selectedTopPositionsPeriod = useTopPositionsPeriodStore((state) => state.selectedPeriod);
  const { id } = useParams();
  const positions = trpc.topPositions.useQuery({
    count: MAX_LIST_COUNT,
    timeframe: selectedTopPositionsPeriod,
  });
  const { isError, isLoading, data } = trpc.getChannelsForUser.useQuery({
    count: MAX_LIST_COUNT,
    user: "Ali",
  });

  return (
    <div className=" pb-[80px] flex flex-col gap-5">
      <ProfileHeader userId={id} isFirstComponentOnPage={true} />
      <div>
        <PortfolioChart isLoading={isLoading} />
      </div>
      <div className="px-default">
        <h2 className="mobile-small:text-xl mobile-medium:text-2xl font-semibold mb-4">
          Closed Positions
        </h2>
        <div className="flex flex-col gap-4">
          {positions?.data?.positions?.map((position, i) => (
            <PositionPreview key={i} position={position} />
          ))}
        </div>
      </div>
      <div className="px-default">
        <h2 className="mobile-small:text-xl mobile-medium:text-2xl font-semibold mb-4">
          My Channels
        </h2>
        <ChannelList channels={data?.channels} isLoading={isLoading} isError={isError} />
      </div>
    </div>
  );
}
