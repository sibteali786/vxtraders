import { Meta, StoryObj } from "@storybook/react";
import { delay, http } from "msw";
import { Register } from "./register";

export default {
  title: "Components/Register",
  component: Register,
} as Meta<typeof Register>;

const baseUrl = "http://localhost:3000";

export const Loading: StoryObj<typeof Register> = {
  parameters: {
    msw: {
      handlers: [
        // Intercept the request to simulate infinite loading
        http.get(`${baseUrl}/userNameAvailablity`, () => {
          return delay("infinite"); // Simulate infinite delay
        }),
      ],
    },
  },
};
