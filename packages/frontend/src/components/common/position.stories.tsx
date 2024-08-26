import { baseUrl } from "@/App";
import { Position } from "@/pages/position/Position";
import { Meta, StoryObj } from "@storybook/react";
import { delay, http, HttpResponse } from "msw";

export default {
  title: "Components/Position",
  component: Position,
} satisfies Meta<typeof Position>;

type Story = StoryObj<typeof Position>;
export const Loading: Story = {
  parameters: {
    msw: {
      handlers: [
        http.get(`${baseUrl}/getPositionById`, () => {
          return delay("infinite");
        }),
        http.get(`${baseUrl}/getUserById`, () => {
          return delay("infinite");
        }),
      ],
    },
  },
};

export const Empty: Story = {
  parameters: {
    msw: {
      handlers: [
        http.get(`${baseUrl}/getPositionById`, () => {
          return HttpResponse.json({
            result: {
              data: {
                position: undefined,
              },
            },
          });
        }),
        http.get(`${baseUrl}/getUserById`, () => {
          return HttpResponse.json({
            result: {
              data: {
                user: {
                  id: "1",
                  avatar: "/avatar.png",
                  displayName: "Alice Smith",
                  username: "@alice",
                  roi: 50,
                  positions: [],
                },
              },
            },
          });
        }),
      ],
    },
  },
};

export const wtihData: Story = {
  parameters: {
    msw: {
      handlers: [
        http.get(`${baseUrl}/getPositionById`, () => {
          return HttpResponse.json({
            result: {
              data: {
                position: {
                  id: "1",
                  userId: "1",
                  asset: { name: "Bitcion", ticker: "BTC", image: "" },
                  leverage: 10,
                  tradeMode: "LONG",
                  entryPrice: 50000,
                  exitPrice: 60000,
                  roi: 140,
                  pnL: 12,
                },
              },
            },
          });
        }),
        http.get(`${baseUrl}/getUserById`, () => {
          return HttpResponse.json({
            result: {
              data: {
                user: {
                  id: "1",
                  avatar: "/avatar.png",
                  displayName: "Alice Smith",
                  username: "@alice",
                  roi: 50,
                  positions: [],
                },
              },
            },
          });
        }),
      ],
    },
  },
};
export const Error: Story = {
  parameters: {
    msw: {
      handlers: [
        http.get(`${baseUrl}/getPositionById`, () => {
          return HttpResponse.json({ error: "Internal Server Error" }, { status: 401 });
        }),
        http.get(`${baseUrl}/getUserById`, () => {
          return HttpResponse.json({
            result: {
              data: {
                user: {
                  id: "1",
                  avatar: "/avatar.png",
                  displayName: "Alice Smith",
                  username: "@alice",
                  roi: 50,
                  positions: [],
                },
              },
            },
          });
        }),
      ],
    },
  },
};
