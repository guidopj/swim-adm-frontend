import { createStore, applyMiddleware, compose } from 'redux';
import createSagaMiddleware from 'redux-saga';
import redirectMiddleware from 'middlewares/redirectMiddleware'
import history from 'history.js'
import { routerMiddleware } from 'connected-react-router'
import { persistStore, persistReducer } from 'redux-persist'
import storage from 'redux-persist/lib/storage'

import rootSaga from 'sagas';
import rootReducer from 'reducers/rootReducer';

const persistConfig = {
	key: 'root',
	storage,
  }

  const mainReducer = rootReducer(history)
  const persistedReducer = persistReducer(persistConfig, mainReducer)

/** Saga Middleware */
const sagaMiddleware = createSagaMiddleware();

let middlewares = applyMiddleware(sagaMiddleware, routerMiddleware(history), redirectMiddleware);


export default function configureStore (initialState) {
	const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;
    const store = createStore(persistedReducer,initialState, composeEnhancers(
        middlewares,
	  )
	);
	let persistor = persistStore(store)
	
	sagaMiddleware.run(rootSaga);
    return { store, persistor }
}

/* export const sagaMiddleware = createSagaMiddleware()

const composeStore = compose(
	applyMiddleware(
		redirectMiddleware,
		metricsMiddleware,
		sagaMiddleware,
		generalMiddleware,
		postMessageMiddleware
	),
	window.devToolsExtension ? window.devToolsExtension() : f => f
)(createStore)

const store = composeStore(reducers)

sagaMiddleware.run(rootSaga)

export default store */