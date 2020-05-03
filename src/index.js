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
import { PersistGate } from 'redux-persist/integration/react'

const { store, persistor } = configureStore(initialState)

ReactDOM.render(
  <React.StrictMode>
    <Provider store={store}>
      <PersistGate loading={null} persistor={persistor}>
        <ConnectedRouter history={history}>
          <App/>
        </ConnectedRouter>
      </PersistGate>
    </Provider>
  </React.StrictMode>,
  document.getElementById('root')
);

serviceWorker.unregister();
