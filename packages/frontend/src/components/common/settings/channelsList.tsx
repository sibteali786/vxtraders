import { ChannelOutput } from "@vxtraders/shared";
import ChannelCard from "../channelCard";
import { PreviewSkeleton } from "../previewSkeleton";
import withErrorHandling from "../hoc/withErrorHandling";

type ChannelListProps = {
  channels?: ChannelOutput["channels"];
  isLoading: boolean;
  isError?: boolean;
  error?: string;
};

export const ChannelList = withErrorHandling(({ channels, isLoading }: ChannelListProps) => {
  return (
    <div className="mb-4">
      {isLoading
        ? Array(5)
            .fill(0)
            .map((_, i) => <PreviewSkeleton key={i} />)
        : channels?.map((channel, i) => <ChannelCard key={i} channel={channel} />)}
    </div>
  );
});
