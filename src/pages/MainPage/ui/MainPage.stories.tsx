import type { Meta, StoryObj } from "@storybook/react";
import { Theme } from "app/providers/ThemeProvider/lib/ThemeContext";

import MainPage from "./MainPage";

const meta: Meta<typeof MainPage> = {
    title: "pages/MainPage",
    component: MainPage,
};

export default meta;

type Story = StoryObj<typeof MainPage>;

export const Light: Story = {
    args: {},
};

export const Dark: Story = {
    args: {},
    parameters: {
        theme: Theme.DARK,
    },
};