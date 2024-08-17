import { Meta, StoryObj } from "@storybook/react";
import { delay, http, HttpResponse } from "msw";
import { PositionsList } from "./positionList";

export default {
  title: "Components/PositionsList",
  component: PositionsList,
  argTypes: {
    maxCount: {
      control: "number",
      description: "The maximum number of traders to display.",
    },
    isTopLevelComponent: {
      control: "boolean",
      description: "Whether this component is at the top level of the page.",
    },
  },
  args: {
    maxCount: 5,
    isTopLevelComponent: true,
  },
} as Meta<typeof PositionsList>;

type Story = StoryObj<typeof PositionsList>;

export const Loading: Story = {
  parameters: {
    msw: {
      handlers: [
        http.get("http://localhost:3000/topPositions", () => {
          console.log("State");
          return delay("infinite");
        }),
      ],
    },
  },
};
export const Error: Story = {
  parameters: {
    msw: {
      handlers: [
        http.get("http://localhost:3000/topPositions", () => {
          console.log("Intercepted request for empty traders list");
          return HttpResponse.json({ error: "Internal Server Error" }, { status: 401 });
        }),
      ],
    },
  },
};

export const Empty: Story = {
  parameters: {
    msw: {
      handlers: [
        http.get("http://localhost:3000/topPositions", () => {
          console.log("Intercepted request for empty traders list");
          return HttpResponse.json(
            {
              result: {
                data: {
                  positions: [], // Ensure this matches the expected structure
                },
              },
            },
            {
              status: 200,
              headers: { "Content-Type": "application/json" }, // Properly set content type
            },
          );
        }),
      ],
    },
  },
};

export const withData: Story = {
  parameters: {
    msw: {
      handlers: [
        http.get("http://localhost:3000/topPositions", () => {
          console.log("Intercepted request for empty traders list");
          return HttpResponse.json(
            {
              result: {
                data: {
                  positions: [
                    {
                      asset: {
                        name: "Bitcion",
                        ticker: "BTC",
                        image: "",
                      },
                      leverage: 10,
                      tradeMode: "LONG",
                      entryPrice: 50000,
                      exitPrice: 60000,
                      roi: 10,
                    },
                    {
                      asset: {
                        name: "Ethereum",
                        ticker: "ETH",
                        image: "",
                      },
                      leverage: 5,
                      tradeMode: "SHORT",
                      entryPrice: 3000,
                      exitPrice: 2000,
                      roi: -30,
                    },
                  ], // Ensure this matches the expected structure
                },
              },
            },
            {
              status: 200,
              headers: { "Content-Type": "application/json" }, // Properly set content type
            },
          );
        }),
      ],
    },
  },
};
