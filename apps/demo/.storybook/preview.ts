import type { Preview } from "@storybook/react";
import { ThemeDecorator } from "./theme";
const preview: Preview = {
  parameters: {
    controls: {
      matchers: {
        color: /(background|color)$/i,
        date: /Date$/i,
      },
    },
  },
  globalTypes: {
    brands: {
      name: 'Brands',
      description: 'Design System Supported Brands',
      defaultValue: 'Brand 1',
      toolbar: {
        title: 'Brands',
        icon: 'paintbrush',
        items: ['brand-1'],
        dynamicTitle: true,
      },
    },
    modes: {
      name: 'Color modes',
      description: 'Color mode for components',
      defaultValue: 'light',
      toolbar: {
        title: 'Theme',
        icon: 'circlehollow',
        items: ['light', 'dark'],
        dynamicTitle: true,
      },
    },
    density: {
      name: 'Spacing Semantics',
      description: 'Spacing Density for Components',
      defaultValue: 'default',
      toolbar: {
        title: 'Density',
        icon: 'collapse',
        items: ['default', 'compact'],
        dynamicTitle: true,
      },
    },
  },
  decorators: [ThemeDecorator],
};

export default preview;
