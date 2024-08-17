import { TradersList } from "./tradersList";
import { Meta, StoryObj } from "@storybook/react";
import { delay, http, HttpResponse } from "msw";

export default {
  title: "Components/TradersList",
  component: TradersList,
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
} as Meta<typeof TradersList>;

type Story = StoryObj<typeof TradersList>;

export const Loading: Story = {
  parameters: {
    msw: {
      handlers: [
        http.get("http://localhost:3000/topTraders", () => {
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
        http.get("http://localhost:3000/topTraders", () => {
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
        http.get("http://localhost:3000/topTraders", () => {
          console.log("Intercepted request for empty traders list");
          return HttpResponse.json(
            {
              result: {
                data: {
                  traders: [], // Ensure this matches the expected structure
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
        http.get("http://localhost:3000/topTraders", () => {
          console.log("Intercepted request for empty traders list");
          return HttpResponse.json(
            {
              result: {
                data: {
                  traders: [
                    {
                      id: "1",
                      displayName: "John Doe",
                      avatar: "/avatar.png",
                      username: "@johndoe",
                      roi: 100,
                    },
                    {
                      id: "2",
                      displayName: "Jane Doe",
                      avatar: "/avatar.png",
                      username: "@janedoe",
                      roi: -20,
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
