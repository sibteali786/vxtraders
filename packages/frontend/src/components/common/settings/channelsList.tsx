import { ChannelOutput } from "@vxtraders/shared";
import ChannelCard from "../channelCard";
import { PreviewSkeleton } from "../previewSkeleton";
import { Error } from "../error/Error";
import { NoData } from "../empty-state/NoData";

type ChannelListProps = {
  channels?: ChannelOutput["channels"];
  isLoading: boolean;
  isError?: boolean;
  error?: string;
};

export const ChannelList = ({ channels, isLoading, isError }: ChannelListProps) => {
  if (isLoading) {
    return (
      <div className="flex flex-col gap-4">
        {Array(5)
          .fill(0)
          .map((_, i) => (
            <PreviewSkeleton key={i} />
          ))}
      </div>
    );
  }
  if (isError) {
    return (
      <Error
        title="Oops, something went wrong"
        buttonText="Refresh"
        onClick={() => window.location.reload()}
      >
        {"Seems like there was an issue. Please refresh the page to resume!"}
      </Error>
    );
  }
  if (!channels || channels.length === 0) {
    return (
      <NoData
        illustrationSrc="/noChannels.png"
        title="No Channels"
        message="You have no Channels to show here!"
        secondaryMessage="Please add some channels and get back here"
        buttonText="Add Channels"
        onButtonClick={() => console.log("Navigate to trading platform")}
      />
    );
  }
  return (
    <div className="mb-3 flex flex-col gap-4">
      {channels?.map((channel, i) => <ChannelCard key={i} channel={channel} />)}
    </div>
  );
};
