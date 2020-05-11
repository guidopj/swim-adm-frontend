import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux'
import { Snackbar } from 'react-redux-snackbar';

import './index.css';
import App from './App.js';
import * as serviceWorker from './serviceWorker';
import configureStore from 'store/configureStore'
import initialState from 'reducers/initialState'
import { ConnectedRouter } from 'connected-react-router'
import history from 'history.js'
import { PersistGate } from 'redux-persist/integration/react'

const { store, persistor } = configureStore(initialState)

ReactDOM.render(
    <Provider store={store}>
      <PersistGate loading={null} persistor={persistor}>
        <ConnectedRouter history={history}>
          <App />
          <Snackbar />
        </ConnectedRouter>
      </PersistGate>
    </Provider>,
  document.getElementById('root')
);

serviceWorker.unregister();
