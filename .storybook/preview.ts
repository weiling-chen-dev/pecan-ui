import type { Preview } from "@storybook/react";
import "../lib/tailwind.css";

const preview: Preview = {
  parameters: {
    backgrounds: {
      values: [
        { name: "White", value: "#fff" },
        { name: "Sky", value: "#00a6f4" },
      ],
    },
    default: "White",
    controls: {
      matchers: {
        color: /(background|color)$/i,
        date: /Date$/i,
      },
    },
  },
};

export default preview;
