import { initialize, mswLoader } from "msw-storybook-addon";
import type { Preview } from "@storybook/react";
import { withThemeByDataAttribute } from "@storybook/addon-themes";
import "../src/globals.css";
import { TRPCReactProvider } from "../src/trpcContextProvider"; // Ensure correct import
import React from "react";
import { BrowserRouter } from "react-router-dom";

import { MINIMAL_VIEWPORTS, INITIAL_VIEWPORTS } from "@storybook/addon-viewport";

initialize({
  onUnhandledRequest: "bypass",
});

const customViewports = {
  CustomOne: {
    name: "customOne",
    styles: {
      width: "600px",
	  height: "963px",
    },
  },
};

const preview: Preview = {
  parameters: {
    viewports: {
      ...INITIAL_VIEWPORTS,
      ...MINIMAL_VIEWPORTS,
    },
    viewport: {
      viewports: {
        ...INITIAL_VIEWPORTS,
        ...MINIMAL_VIEWPORTS,
        ...customViewports,
      },
    },
    defaultViewport: "custom600", // Set as default if desired
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
