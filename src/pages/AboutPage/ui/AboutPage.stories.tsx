import type { Meta, StoryObj } from "@storybook/react";
import { Theme } from "app/providers/ThemeProvider/lib/ThemeContext";

import AboutPage from "./AboutPage";

const meta: Meta<typeof AboutPage> = {
    title: "pages/AboutPage",
    component: AboutPage,
};

export default meta;

type Story = StoryObj<typeof AboutPage>;

export const Light: Story = {
    args: {},
};

export const Dark: Story = {
    args: {},
    parameters: {
        theme: Theme.DARK,
    },
};