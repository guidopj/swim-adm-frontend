import { combineReducers } from 'redux';
import competitionsReducer from './competitionsReducer'
import {toastsReducer as toasts} from 'react-toastify-redux';
import { connectRouter } from 'connected-react-router'
import { snackbarReducer } from 'react-redux-snackbar';

const createRootReducer = (history) => combineReducers({
  router: connectRouter(history),
  competitions: competitionsReducer,
  toasts,
  snackbar: snackbarReducer,
})
export default createRootReducer