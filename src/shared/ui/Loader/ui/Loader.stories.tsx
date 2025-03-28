import type { Meta, StoryObj } from "@storybook/react";
import { Theme } from "app/providers/ThemeProvider/lib/ThemeContext";

import { Loader } from "./Loader";

const meta: Meta<typeof Loader> = {
    title: "shared/Loader",
    component: Loader,
};

export default meta;

type Story = StoryObj<typeof Loader>;

export const Light: Story = {
    args: {},
};

export const Dark: Story = {
    args: {},
    parameters: {
        theme: Theme.DARK,
    },
};