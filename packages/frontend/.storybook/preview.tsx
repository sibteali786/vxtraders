import { initialize, mswLoader } from "msw-storybook-addon";
import type { Preview } from "@storybook/react";
import { withThemeByDataAttribute } from "@storybook/addon-themes";
import "../src/globals.css";
import { TRPCReactProvider } from "../src/trpcContextProvider"; // Ensure correct import
import React from "react";
import { BrowserRouter } from "react-router-dom";

initialize({
  onUnhandledRequest: "bypass",
});

const preview: Preview = {
  parameters: {
    controls: {
      matchers: {
        color: /(background|color)$/i,
        date: /Date$/,
      },
    },
  },
  loaders: [mswLoader],
  decorators: [
    withThemeByDataAttribute({
      defaultTheme: "dark",
      themes: {
        light: "light",
        dark: "dark",
      },
      attributeName: "data-mode",
    }),
    (Story) => (
      <TRPCReactProvider>
        <BrowserRouter>
          <Story />
        </BrowserRouter>
      </TRPCReactProvider>
    ), // Ensure this returns a React element
  ],
};

export default preview;
