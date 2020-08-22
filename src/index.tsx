import React from 'react';
import ReactDOM from 'react-dom';
import {
  BrowserRouter as Router
} from "react-router-dom";
import { ThemeProvider } from 'theme-ui';
import { RestfulProvider } from "restful-react";

import * as serviceWorker from './serviceWorker';
import { App } from './App';
import { theme } from './theme';

ReactDOM.render(
  <React.StrictMode>
    <ThemeProvider theme={theme}>
      <RestfulProvider base="https://hacker-news.firebaseio.com/v0/">
        <Router>
          <App/>
        </Router>
      </RestfulProvider>
    </ThemeProvider>
  </React.StrictMode>,
  document.getElementById('root')
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
