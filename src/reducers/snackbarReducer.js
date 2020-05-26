import actionTypes from "actions/types.js";
import initialState from './initialState';

const snackbarReducer = (state = initialState, action) => {
  switch (action.type) {
    case actionTypes.ADD_SNACKBAR:
      return {
        ...state,
        snackbars: [...state.snackbars, action.data]
      };

    case actionTypes.CLOSE_SNACKBAR:
      return {
        ...state,
        snackbars: state.snackbars.filter(
          notification => notification.key !== action.key
        )
      };

    default:
      return state;
  }
};

export default snackbarReducer
