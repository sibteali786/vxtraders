import { BrowserRouter } from "react-router-dom";
import type { Meta } from "@storybook/react";
import { TradersList } from "@/components/common/leaderboards/tradersList";
import { StoryBookTrpcProvider, withTrpcContext } from "@/components/mocks/withTrpcProvider";

const meta: Meta<typeof TradersList> = {
  title: "Components/TradersList",
  component: TradersList,
  decorators: [
    (Story) => (
      <StoryBookTrpcProvider>
        <BrowserRouter>
          <Story />
        </BrowserRouter>
      </StoryBookTrpcProvider>
    ),
  ],
  args: {
    maxCount: 5,
    isScreen: true,
  },
};

export default meta;

export const SimpletList = {
  render: () => <TradersList maxCount={5} isScreen={true} />,
  decorators: [
    withTrpcContext((ctx) =>
      ctx.topTraders.setData(
        {
          count: 5,
          timeframe: "24h",
        },
        () => {
          return {
            traders: [
              {
                displayName: "Alice",
                avatar: "./avatar.png",
                username: "alice",
                roi: 10,
              },
            ],
          };
        },
      ),
    ),
  ],
};
