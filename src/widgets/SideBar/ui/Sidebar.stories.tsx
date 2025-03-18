import type { Meta, StoryObj } from "@storybook/react";
import { Theme } from "app/providers/ThemeProvider/lib/ThemeContext";

import { Sidebar } from "./Sidebar";

const meta: Meta<typeof Sidebar> = {
    title: "widgets/Sidebar",
    component: Sidebar,
};

export default meta;

type Story = StoryObj<typeof Sidebar>;

export const Light: Story = {
    args: {},
};

export const Dark: Story = {
    args: {},
    parameters: {
        theme: Theme.DARK,
    },
};