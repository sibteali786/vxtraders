import { baseUrl } from "@/App";
import { TradersList } from "./tradersList";
import { Meta, StoryObj } from "@storybook/react";
import { delay, http, HttpResponse } from "msw";
import { userEvent, within, expect, screen, waitFor } from "@storybook/test";

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
        http.get(`${baseUrl}/topTraders`, () => {
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
        http.get(`${baseUrl}/topTraders`, () => {
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
        http.get(`${baseUrl}/topTraders`, () => {
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
        http.get(`${baseUrl}/topTraders`, () => {
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
  play: async ({ canvasElement }) => {
    const canvas = within(canvasElement);
    // verifying initial state to be 90d
    expect(canvas.getByText("90d")).toBeInTheDocument();
    // changing period to 30d
    const periodSelector = canvas.getByRole("combobox");
    await userEvent.click(periodSelector);

    // Check if the dropdown panel is actually open
    expect(screen.getByRole("listbox")).toBeInTheDocument();
    // Wait for and click the "30d" option
    // const newPeriodOption = await waitFor(() =>
    // );
    const listDiv = screen.getAllByRole("option");
    const item = listDiv.find((el) => el.textContent === "30d");
    if (!item) return;
    await userEvent.click(item);
    // Verify that the new period is reflected
    expect(canvas.getByText("30d")).toBeInTheDocument();
  },
};

export const LoadMoreTradersButton: Story = {
  args: {
    isTopLevelComponent: false,
  },
  parameters: {
    msw: {
      handlers: [
        http.get(`${baseUrl}/topTraders`, () => {
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
                  ],
                },
              },
            },
            {
              status: 200,
              headers: { "Content-Type": "application/json" },
            },
          );
        }),
      ],
    },
  },
  play: async ({ canvasElement }) => {
    const canvas = within(canvasElement);

    // Verify that the "View More" button is rendered, using waitFor to make sure it appears and only then we process it.
    const viewMoreButton = await waitFor(() => canvas.getByTestId("visit-traders"));
    expect(viewMoreButton).toBeInTheDocument();

    // Simulate a click on the "View More" button
    await userEvent.click(viewMoreButton);

    // Verify that the navigation to "topTraders" is triggered
    // check the current route.
    expect(window.location.pathname).toBe("/topTraders");
  },
};
