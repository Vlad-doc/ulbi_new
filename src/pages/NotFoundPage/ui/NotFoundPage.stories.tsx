import type { Meta, StoryObj } from "@storybook/react";
import { Theme } from "app/providers/ThemeProvider/lib/ThemeContext";

import { NotFoundPage } from "./NotFoundPage";

const meta: Meta<typeof NotFoundPage> = {
    title: "pages/NotFoundPage",
    component: NotFoundPage,
    render: ({ ...args }) => (
        <NotFoundPage {...args} />
    ),
};

export default meta;

type Story = StoryObj<typeof NotFoundPage>;

export const Light: Story = {
    args: {},
};

export const Dark: Story = {
    args: {},
    parameters: {
        theme: Theme.DARK,
    },
};