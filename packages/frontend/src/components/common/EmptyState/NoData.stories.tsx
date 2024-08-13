import type { Meta, StoryObj } from "@storybook/react";
import { NoData } from "./NoData";

const meta = {
  title: "Components/NoData",
  component: NoData,
  args: {
    message: "There is no data available at the moment.",
    secondaryMessage: "",
    title: "No Data",
    illustrationSrc: "/noChannels.svg",
    buttonText: "",
  },
  argTypes: {
    message: {
      control: "text",
      description: "The main message to display.",
    },
    title: {
      control: "text",
      description: "The title to display above the message.",
    },
    illustrationSrc: {
      control: "text",
      description: "The path to the illustration image.",
    },
    buttonText: {
      control: "text",
      description: "The text to display on the button.",
    },
    onButtonClick: {
      action: "clicked",
      description: "Callback function for when the button is clicked.",
    },
    secondaryMessage: {
      control: "text",
      description: "An optional secondary message to display below the main message.",
    },
  },
} satisfies Meta;

export default meta;

type Story = StoryObj<typeof NoData>;

export const Default: Story = {
  args: {
    message: "There is no data available at the moment.",
  },
};

export const WithButton: Story = {
  args: {
    message: "No data found.",
    buttonText: "Retry",
  },
};

export const WithSecondaryMessage: Story = {
  args: {
    message: "No results match your search.",
    secondaryMessage: "Please try again with different keywords.",
  },
};

export const CustomIllustrationAndTitle: Story = {
  args: {
    message: "You haven’t created any channels yet.",
    illustrationSrc: "/NoPositions.png", // Replace with your custom illustration path
    title: "No Channels",
  },
};

export const Mobile: Story = {
  parameters: {
    viewport: {
      defaultViewport: "mobile1",
    },
  },
};
