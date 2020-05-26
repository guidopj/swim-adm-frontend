import { combineReducers } from 'redux';
import competitionsReducer from './competitionsReducer'
import { connectRouter } from 'connected-react-router'
import snackbarReducer from 'reducers/snackbarReducer.js';

const createRootReducer = (history) => combineReducers({
  router: connectRouter(history),
  competitions: competitionsReducer,
  snackbars: snackbarReducer,
})
export default createRootReducer