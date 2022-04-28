import { muiTheme } from 'storybook-addon-material-ui';
import StoryRouter from 'storybook-react-router';
import { theme } from '../src/settings/Theme';

export const decorators = [
  muiTheme([{
    themeName: 'IT Help Default Theme',
    ...theme
  }]),
  StoryRouter()
];

export const parameters = {
  actions: { argTypesRegex: "^on[A-Z].*" },
}