import { createStore, applyMiddleware, compose } from 'redux';
import { composeWithDevTools } from 'redux-devtools-extension';
import createSagaMiddleware from 'redux-saga';

import rootSaga from 'sagas';
import rootReducer from 'reducers/rootReducer';

/** Saga Middleware */
const sagaMiddleware = createSagaMiddleware();
let middlewares = applyMiddleware(sagaMiddleware);

export default function configureStore (initialState) {
    const store = createStore(rootReducer,initialState, compose(
        middlewares,
      ));
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