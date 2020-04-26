import { createStore, applyMiddleware, compose } from 'redux';
import createSagaMiddleware from 'redux-saga';
import redirectMiddleware from 'middlewares/redirectMiddleware'
import history from 'history.js'
import { routerMiddleware } from 'connected-react-router'

import rootSaga from 'sagas';
import rootReducer from 'reducers/rootReducer';

/** Saga Middleware */
const sagaMiddleware = createSagaMiddleware();

let middlewares = applyMiddleware(sagaMiddleware, routerMiddleware(history), redirectMiddleware);


export default function configureStore (initialState) {
	const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;
    const store = createStore(rootReducer(history),initialState, composeEnhancers(
        middlewares,
	  )
	);
      sagaMiddleware.run(rootSaga);
      return store
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