import type { Preview, StoryFn } from "@storybook/react";
import "../../src/app/styles/index.scss";
import { ThemeProvider } from "app/providers/ThemeProvider";
import { Theme } from "app/providers/ThemeProvider/lib/ThemeContext";
import { MemoryRouter } from "react-router-dom";

const preview: Preview = {
  parameters: {
    controls: {
      matchers: {
        color: /(background|color)$/i,
        date: /Date$/i,
      },
    },
  },
  decorators: [
    (Story: StoryFn, context) => {
      const { theme } = context.parameters;
      return (
        <MemoryRouter>
          <ThemeProvider>
            <div className={`app ${theme ? theme : Theme.LIGHT}`}>
              <Story />
            </div>
          </ThemeProvider>
        </MemoryRouter>
      );
    },
  ],
};

export default preview;