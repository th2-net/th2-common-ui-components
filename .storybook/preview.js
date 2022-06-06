import { muiTheme } from 'storybook-addon-material-ui5'
import { th2Theme } from '../src/theme'

export const decorators = [
  muiTheme([th2Theme])
];

export const parameters = {
  actions: { argTypesRegex: "^on[A-Z].*" },
  controls: {
    matchers: {
      color: /(background|color)$/i,
      date: /Date$/,
    },
  },
}