import { PositionPreview } from "@/components/common/positionCard";
import { PortfolioChart } from "./portfolioChart";
import { ChannelList } from "@/components/common/settings/channelsList";
import { trpc } from "@/trpc";
import { MAX_LIST_COUNT } from "@/stores/constants";
import { useTopPositionsPeriodStore } from "@/stores/useState";
import { useParams } from "react-router-dom";
import { ProfileHeader } from "../position/profileHeader";
import { PreviewSkeleton } from "@/components/common/previewSkeleton";
import { Error } from "@/components/common/error/Error";

export function Portfolio() {
  const selectedTopPositionsPeriod = useTopPositionsPeriodStore((state) => state.selectedPeriod);
  const { id } = useParams();
  const positions = trpc.topPositions.useQuery({
    count: MAX_LIST_COUNT,
    timeframe: selectedTopPositionsPeriod,
  });
  const channels = trpc.getChannelsForUser.useQuery({
    count: MAX_LIST_COUNT,
    user: "Ali",
  });

  return (
    <div className=" pb-[80px] flex flex-col gap-5">
      <ProfileHeader userId={id} isFirstComponentOnPage={true} />
      <div>
        <PortfolioChart isLoading={channels.isLoading} isError={channels.isError} />
      </div>
      <div className="px-default">
        <h2 className="mobile-small:text-xl mobile-medium:text-2xl font-semibold mb-4">
          Closed Positions
        </h2>
        <div className="flex flex-col gap-4">
          {positions.isLoading ? (
            <>
              {Array(5)
                .fill(0)
                .map((_, i) => (
                  <PreviewSkeleton key={i} />
                ))}
            </>
          ) : positions.isError ? (
            <Error
              title="Oops, something went wrong"
              buttonText="Refresh"
              onClick={() => window.location.reload()}
            >
              {"Seems like there was an issue. Please refresh the page to resume!"}
            </Error>
          ) : (
            positions?.data?.positions?.map((position, i) => (
              <PositionPreview key={i} position={position} />
            ))
          )}
        </div>
      </div>
      <div className="px-default">
        <h2 className="mobile-small:text-xl mobile-medium:text-2xl font-semibold mb-4">
          My Channels
        </h2>
        <ChannelList
          channels={channels.data?.channels}
          isLoading={channels.isLoading}
          isError={channels.isError}
        />
      </div>
    </div>
  );
}
