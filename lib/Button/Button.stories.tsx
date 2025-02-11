import type { Meta, StoryObj } from "@storybook/react";

import { Button } from "./Button";

const meta: Meta<typeof Button> = {
  component: Button,
};

export default meta;

type Story = StoryObj<typeof Button>;

export const Default: Story = {
  args: {
    children: "Click me!",
  },
};
export const TestCN: Story = {
  args: {
    className: "bg-amber-300 p-10",
    children: "Click me!",
  },
};

export const ColorButton: Story = {
  args: {
    type: "primary",
    children: "Click me!",
  },
};
export const ColorVariantButton: Story = {
  args: {
    variant: "solid",
    color: "primary",
    children: "Click me!",
  },
};

export const ColorVariantButton2: Story = {
  args: {
    variant: "dashed",
    color: "secondary",
    children: "Click me!",
  },
};

export const DefaultButton: Story = {
  parameters: { backgrounds: { value: "Sky" } },
  args: {
    type: "link",
    // ghost: true,
    // danger: true,
    children: "Click me!",
  },
};

export const DefaultButton1: Story = {
  args: {
    type: "primary",
    children: "Click me!",
  },
};

export const FilledDefaultButton1: Story = {
  args: {
    color: "default",
    variant: "filled",
    children: "Click me!",
  },
};

export const Emoji: Story = {
  args: {
    children: "😅",
  },
};
