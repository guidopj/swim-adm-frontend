import { combineReducers } from 'redux';
import competitionsReducer from './competitionsReducer'

import { connectRouter } from 'connected-react-router'

const createRootReducer = (history) => combineReducers({
  router: connectRouter(history),
  competitions: competitionsReducer,
})
export default createRootReducer