import { TradersList } from "./tradersList";
import { Meta, StoryObj } from "@storybook/react";
import { userEvent, within, expect, screen, waitFor } from "@storybook/test";
import { handlers } from "./../../mocks/handlers/tradersList";

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
      handlers: [handlers.loading],
    },
  },
};
export const Error: Story = {
  parameters: {
    msw: {
      handlers: [handlers.error],
    },
  },
};

export const Empty: Story = {
  parameters: {
    msw: {
      handlers: [handlers.empty],
    },
  },
};

export const withData: Story = {
  parameters: {
    msw: {
      handlers: [handlers.withData],
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
      handlers: [handlers.withData],
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
