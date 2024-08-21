import { Meta, StoryObj } from "@storybook/react";
import { HorizontalMenu } from "./horizontalMenu";

export default {
  title: "Components/HorizontalMenu",
  component: HorizontalMenu,
  parameters: {
    layout: "fullscreen",
  },
  args: {
    isLoading: false,
    isUserRegistered: true,
  },
} as Meta<typeof HorizontalMenu>;

export const Default: StoryObj<typeof HorizontalMenu> = {
  args: {
    isLoading: false,
    isUserRegistered: true,
  },
};

export const Loading: StoryObj<typeof HorizontalMenu> = {
  args: {
    isLoading: true,
    isUserRegistered: true,
  },
};

export const GuestUser: StoryObj<typeof HorizontalMenu> = {
  args: {
    isLoading: false,
    isUserRegistered: false,
  },
};

export const LoadingGuestUser: StoryObj<typeof HorizontalMenu> = {
  args: {
    isLoading: true,
    isUserRegistered: false,
  },
};
