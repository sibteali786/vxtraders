import { ChannelOutput } from "@vxtraders/shared";
import ChannelCard from "../channelCard";
import { PreviewSkeleton } from "../previewSkeleton";
import { Error } from "../Error/Error";
import { NoData } from "../EmptyState/NoData";
import { RiChatNewLine } from "react-icons/ri";

type ChannelListProps = {
  channels?: ChannelOutput["channels"];
  isLoading: boolean;
  isError?: boolean;
  error?: string;
};

export const ChannelList = ({ channels, isLoading, isError }: ChannelListProps) => {
  if (isLoading) {
    return (
      <>
        {Array(5)
          .fill(0)
          .map((_, i) => (
            <PreviewSkeleton key={i} />
          ))}
      </>
    );
  }
  if (isError) {
    return <Error>{"Something went wrong, please try again!"}</Error>;
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
    <div className="mb-3">
      {channels?.map((channel, i) => <ChannelCard key={i} channel={channel} />)}
    </div>
  );
};
