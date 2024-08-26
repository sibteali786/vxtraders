import { Meta, StoryObj } from "@storybook/react";
import { HorizontalMenu } from "./horizontalMenu";

export default {
  title: "Components/HorizontalMenu",
  component: HorizontalMenu,
  parameters: {
    layout: "fullscreen",
  },
  args: {
    isUserRegistered: true,
  },
} as Meta<typeof HorizontalMenu>;

export const Default: StoryObj<typeof HorizontalMenu> = {
  args: {
    isUserRegistered: true,
  },
};

export const Loading: StoryObj<typeof HorizontalMenu> = {
  args: {
    isUserRegistered: true,
  },
};

export const GuestUser: StoryObj<typeof HorizontalMenu> = {
  args: {
    isUserRegistered: false,
  },
};

export const LoadingGuestUser: StoryObj<typeof HorizontalMenu> = {
  args: {
    isUserRegistered: false,
  },
};
