import { combineReducers } from 'redux';
import competitionsReducer from './competitionsReducer'
import { connectRouter } from 'connected-react-router'
import { snackbarReducer } from 'react-redux-snackbar';

const createRootReducer = (history) => combineReducers({
  router: connectRouter(history),
  competitions: competitionsReducer,
  snackbar: snackbarReducer,
})
export default createRootReducer