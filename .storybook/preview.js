import '../src/style.css'

/** @type { import('@storybook/react-vite').Preview } */
const preview = {
  parameters: {
    controls: {
      matchers: {
        color: /(background|color)$/i,
        date: /Date$/i,
      },
    },
    backgrounds: {
      default: 'grimoire',
      values: [
        { name: 'grimoire', value: '#1a1208' },
        { name: 'light', value: '#ffffff' },
      ],
    },
    a11y: {
      test: 'todo',
    },
  },
}

export default preview
