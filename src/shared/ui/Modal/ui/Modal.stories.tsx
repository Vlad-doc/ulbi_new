import type { Meta, StoryObj } from "@storybook/react";
import { Theme } from "app/providers/ThemeProvider/lib/ThemeContext";

import { Modal } from "./Modal";

const meta: Meta<typeof Modal> = {
    title: "shared/Modal",
    component: Modal,
};

export default meta;

type Story = StoryObj<typeof Modal>;

export const Primary: Story = {
    args: {
        isOpen: true,
        children: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptatibus, magni iusto, deserunt doloremque, consectetur perspiciatis minima est ex harum quod at maiores nobis ea alias voluptatum necessitatibus error nesciunt et quibusdam corrupti! Repellat velit natus laudantium distinctio dicta, quidem saepe accusamus temporibus voluptas fugit quisquam placeat, magnam soluta error recusandae, iure modi eveniet enim quibusdam neque? Ab harum consequuntur beatae inventore ullam veniam voluptatibus et aut natus, at iure quia maiores. Nobis, earum saepe. Ad aliquid eos enim, rem itaque sit ipsum facere et unde excepturi quibusdam iste ea saepe labore, dolore magni maxime reprehenderit voluptate sunt magnam necessitatibus quia?",
    },
};

export const Dark: Story = {
    args: {
        isOpen: true,
        children: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptatibus, magni iusto, deserunt doloremque, consectetur perspiciatis minima est ex harum quod at maiores nobis ea alias voluptatum necessitatibus error nesciunt et quibusdam corrupti! Repellat velit natus laudantium distinctio dicta, quidem saepe accusamus temporibus voluptas fugit quisquam placeat, magnam soluta error recusandae, iure modi eveniet enim quibusdam neque? Ab harum consequuntur beatae inventore ullam veniam voluptatibus et aut natus, at iure quia maiores. Nobis, earum saepe. Ad aliquid eos enim, rem itaque sit ipsum facere et unde excepturi quibusdam iste ea saepe labore, dolore magni maxime reprehenderit voluptate sunt magnam necessitatibus quia?",
    },
    parameters: {
        theme: Theme.DARK,

    },
};