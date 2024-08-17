import { baseUrl } from "@/App";
import { SelectAsset } from "@/pages/trade/selectAsset";
import { Meta, StoryObj } from "@storybook/react";
import { delay, http, HttpResponse } from "msw";

export default {
  title: "Components/SelectAsset",
  component: SelectAsset,
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
} satisfies Meta<typeof SelectAsset>;

type Story = StoryObj<typeof SelectAsset>;

export const Loading: Story = {
  parameters: {
    msw: {
      handlers: [
        http.get(`${baseUrl}/searchAssets`, () => {
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
        http.get(`${baseUrl}/searchAssets`, () => {
          return HttpResponse.json({ error: "Internal Server Error" }, { status: 401 });
        }),
      ],
    },
  },
};
export const NoData: Story = {
  parameters: {
    msw: {
      handlers: [
        http.get(`${baseUrl}/searchAssets`, () => {
          return HttpResponse.json(
            {
              result: {
                data: {
                  assets: [],
                },
              },
            },
            { status: 200, headers: { "Content-Type": "application/json" } },
          );
        }),
      ],
    },
  },
};
export const WithData: Story = {
  parameters: {
    msw: {
      handlers: [
        http.get(`${baseUrl}/searchAssets`, () => {
          return HttpResponse.json(
            {
              result: {
                data: {
                  assets: [
                    {
                      name: "Bitcoin",
                      ticker: "BTC",
                      image: "",
                      price: 50000,
                      change: -5,
                    },
                  ],
                },
              },
            },
            { status: 200, headers: { "Content-Type": "application/json" } },
          );
        }),
      ],
    },
  },
};
