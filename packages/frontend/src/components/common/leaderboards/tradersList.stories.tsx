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
    isTopLevelComponent: true,
  },
};

export default meta;

export const SimpletList = {
  render: () => <TradersList maxCount={5} isTopLevelComponent={true} />,
  decorators: [
    withTrpcContext(
      (ctx) =>
        (ctx.topTraders.useQuery = () => ({
          isLoading: false,
          isError: true,
          data: {
            traders: [
              {
                displayName: "John Doe",
                username: "John Doe",
                avatar: "/avatar.png",
                roi: 100,
              },
            ],
          },
        })),
    ),
  ],
};
