import ChannelCard from "@/components/common/channelCard";
import { Divider } from "@/components/common/divider";
import { MainHeading } from "@/components/common/mainHeading";
import { PreviewSkeleton } from "@/components/common/previewSkeleton";
import { useGlobalValues } from "@/stores/useState";
import { trpc } from "@/trpc";
const ChannelIntegration = () => {
  const avatar = "/avatar.png";
  const maxCount = useGlobalValues((state) => state.maxListCount);
  const { isError, isLoading, data, error } = trpc.getChannelsForUser.useQuery({
    count: maxCount,
    user: "Ali",
  });
  return (
    <div className="bg-black text-white p-8 max-w-2xl mx-auto">
      <MainHeading title="Channels" />
      {isLoading
        ? Array(5)
            .fill(0)
            .map((_, i) => <PreviewSkeleton key={i} />)
        : data?.channels.map((channel, i) => <ChannelCard key={i} channel={channel} />)}

      <Divider />

      <div className="mt-8">
        <h2 className="text-xl font-bold mb-4">How to add Channels?</h2>
        <p className="mb-4">
          Channel integration allows you to post your trades in channels that you own.
        </p>
        <h3 className="text-lg font-bold mb-2">Instructions</h3>
        <p className="mb-4">
          To integrate your Channel, add <span className="text-purple-500">@AbcBot</span> to your
          channel with admin access.
        </p>
        <p className="mb-4 text-center font-bold">OR</p>
        <p>
          If you have already done that, try removing the bot and adding it back. To post a trade in
          your channel, go to the trade from your portfolio and then click Post to channel at the
          bottom of the page.
        </p>
      </div>
    </div>
  );
};

export default ChannelIntegration;
