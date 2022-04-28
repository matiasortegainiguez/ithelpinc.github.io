import { createMuiTheme, responsiveFontSizes } from '@material-ui/core';
import { LETTER_SPACING } from './Variables';

export const theme = responsiveFontSizes(
  createMuiTheme({
    palette: {
      primary: {
        main: '#004256',
      },
      secondary: {
        main: '#F5A800',
      },
    },
    typography: {
      fontFamily: [
        'Montserrat',
        '"Helvetica Neue"',
        'Arial',
        'sans-serif',
        '"Apple Color Emoji"',
        '"Segoe UI Emoji"',
        '"Segoe UI Symbol"',
      ].join(','),
      h1: {
        color: 'white',
        fontSize: '1.75rem',
        fontWeight: 700,
        letterSpacing: LETTER_SPACING,
      },
      h2: {
        fontSize: '1.45rem',
        fontWeight: 700,
        letterSpacing: LETTER_SPACING,
      },
      body1: {
        color: 'black',
        fontWeight: 400,
        fontSize: '1.15rem',
        letterSpacing: LETTER_SPACING,
      },
      h3: {
        color: 'white',
        fontSize: '5.5rem',
        fontWeight: 700,
        letterSpacing: LETTER_SPACING,
      },
      h4: {
        color: 'white',
        fontSize: '1rem',
        fontWeight: 700,
        textAlign: 'center',
        letterSpacing: LETTER_SPACING,
      },
    },
  }),
);
