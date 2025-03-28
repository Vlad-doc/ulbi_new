import type { Meta, StoryObj } from "@storybook/react";
import { Theme } from "app/providers/ThemeProvider/lib/ThemeContext";

import { Button, ButtonSize, ThemeButton } from "./Button";

const meta: Meta<typeof Button> = {
    title: "shared/Button",
    component: Button,
};

export default meta;

type Story = StoryObj<typeof Button>;

export const Primary: Story = {
    args: {
        children: "Text",
    },
};

export const Clear: Story = {
    args: {
        children: "Text",
        theme: ThemeButton.CLEAR,
    },
};

export const ClearInverted: Story = {
    args: {
        children: "Text",
        theme: ThemeButton.CLEAR_INVERTED,
    },
};

export const Outline: Story = {
    args: {
        children: "Text",
        theme: ThemeButton.OUTLINE,
        className: "",
    },
};

export const OutlineSizeL: Story = {
    args: {
        children: "Text",
        theme: ThemeButton.OUTLINE,
        size: ButtonSize.L,
    },
};

export const OutlineSizeXL: Story = {
    args: {
        children: "Text",
        theme: ThemeButton.OUTLINE,
        size: ButtonSize.XL,
    },
};

export const OutlineDark: Story = {
    args: {
        children: "Text",
        theme: ThemeButton.OUTLINE,
    },
    parameters: {
        theme: Theme.DARK,
    },
};

export const BackgroundTheme: Story = {
    args: {
        children: "Text",
        theme: ThemeButton.BACKGROUND,
    },
};

export const BackgroundInverted: Story = {
    args: {
        children: "Text",
        theme: ThemeButton.BACKGROUND_INVERTED,
    },
};

export const Square: Story = {
    args: {
        children: ">",
        theme: ThemeButton.BACKGROUND,
        square: true,
    },
};

export const SquareSizeL: Story = {
    args: {
        children: ">",
        theme: ThemeButton.BACKGROUND,
        square: true,
        size: ButtonSize.L,
    },
};

export const SquareSizeXL: Story = {
    args: {
        children: ">",
        theme: ThemeButton.BACKGROUND,
        square: true,
        size: ButtonSize.XL,
    },
};