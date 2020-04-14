import { combineReducers } from 'redux';
import competitionsReducer from './competitionsReducer'

export default combineReducers({
    competitions: competitionsReducer,
});