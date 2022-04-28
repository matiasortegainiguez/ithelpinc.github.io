import { CssBaseline, ThemeProvider, withStyles } from '@material-ui/core';
import * as React from 'react';
import * as ReactDOM from 'react-dom';
import { BrowserRouter } from 'react-router-dom';
import { App } from './App';
import { theme } from './settings/Theme';

const styles = ({
  '@global': {
    body: {
      height: '100%',
      backgroundColor: 'white'
    },
    html: {
      height: '100%',
      backgroundColor: 'white'
    }
  },
});

const StyledApp = withStyles(styles)(App);

ReactDOM.render((
  <BrowserRouter>
    <CssBaseline />
    <ThemeProvider theme={theme}>
      <StyledApp />
    </ThemeProvider>
  </BrowserRouter>
), document.getElementById('root'));