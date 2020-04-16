import { combineReducers } from 'redux';
import competitionsReducer from './competitionsReducer'

const rootReducer = combineReducers({
    competitions: competitionsReducer,
});

export default rootReducer