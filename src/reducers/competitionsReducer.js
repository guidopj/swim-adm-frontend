import actionTypes from 'actions/types';
  import initialState from './initialState';
  
const competitionsReducer = (state = initialState, action) => {  
    switch(action.type){
        case actionTypes.GET_EXISTING_COMPETITIONS_SUCCESS:
            return {
                ...state,
                competitions: action.payload,
            };
        case actionTypes.CREATE_NEW_COMPETITION_SUCCESS:
            return {
                ...state,
                competitions: [...state.competitions, action.payload]
            };
        
        default:
            return state;
    }
}

export default competitionsReducer