import React from 'react';
import ReactDOM from 'react-dom';
import {
  Router,
} from "react-router-dom";
import { Provider } from 'react-redux'

import './index.css';
import App from './App.js';
import * as serviceWorker from './serviceWorker';
import configureStore from 'store/configureStore'
import initialState from 'reducers/initialState'
import { ConnectedRouter } from 'connected-react-router'
import history from 'history.js'

const store = configureStore(initialState)

ReactDOM.render(
  <React.StrictMode>
    <Provider store={store}>
      <ConnectedRouter history={history}>
			  <App/>
      </ConnectedRouter>
    </Provider>
  </React.StrictMode>,
  document.getElementById('root')
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
