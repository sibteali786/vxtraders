import { Divider } from "@/components/common/divider";
import { MainHeading } from "@/components/common/mainHeading";
import { ChannelList } from "@/components/common/settings/channelsList";
import { MAX_LIST_COUNT } from "@/stores/constants";
import { trpc } from "@/trpc";
const ChannelIntegration = () => {
  const { isError, isLoading, data } = trpc.getChannelsForUser.useQuery({
    count: MAX_LIST_COUNT,
    user: "Ali",
  });
  return (
    <div className="bg-black text-white p-8 max-w-2xl mx-auto">
      <MainHeading title="Channels" />
      <ChannelList channels={data?.channels} isLoading={isLoading} isError={isError} />
      <Divider />

      <div className="mt-8">
        <h2 className="text-xl mobile-medium:text-2xl font-bold mb-4">How to add Channels?</h2>
        <p className="mb-4 ">
          Channel integration allows you to post your trades in channels that you own.
        </p>
        <h3 className="text-xl font-bold mb-2">Instructions</h3>
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
