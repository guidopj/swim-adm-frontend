import {
    GET_EXISTING_COMPETITIONS_SUCCESS, 
    } from 'actions/types';
  import initialState from './initialState';
  
const competitionsReducer = (state = initialState, action) => {  
    switch(action.type){
        case GET_EXISTING_COMPETITIONS_SUCCESS:
        return {
            ...state,
            competitions: action.payload,      
        };
        
        default:
            return state;
    }
}

export default competitionsReducer