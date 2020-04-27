import React from 'react';
import ReactDOM from 'react-dom';
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

serviceWorker.unregister();
