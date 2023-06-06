import type { Preview } from "@storybook/react";

const preview: Preview = {
  parameters: {
    sidebar: {
      collapsedRoots: [],
    },
    actions: { argTypesRegex: "^on[A-Z].*" },
    controls: {
      matchers: {
        color: /(background|color)$/i,
        date: /Date$/,
      },
    },
  },
};

export default preview;