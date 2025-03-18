import type { Meta, StoryObj } from "@storybook/react";
import { Theme } from "app/providers/ThemeProvider/lib/ThemeContext";

import { Navbar } from "./Navbar";

const meta: Meta<typeof Navbar> = {
    title: "widgets/Navbar",
    component: Navbar,
};

export default meta;

type Story = StoryObj<typeof Navbar>;

export const Light: Story = {
    args: {},
};

export const Dark: Story = {
    args: {},
    parameters: {
        theme: Theme.DARK,
    },
};